export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders() });
    }

    if (request.method !== "POST") {
      return json({ ok: false, error: "Method not allowed" }, 405);
    }

    try {
      const payload = await request.json();
      const text = buildTelegramText(payload);

      const telegramResponse = await fetch(
        `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: env.TELEGRAM_CHAT_ID,
            text,
            parse_mode: "HTML",
            disable_web_page_preview: true
          })
        }
      );

      if (!telegramResponse.ok) {
        const errorText = await telegramResponse.text();
        return json({ ok: false, error: errorText }, 502);
      }

      return json({ ok: true }, 200);
    } catch (error) {
      return json({ ok: false, error: error.message || "Unexpected error" }, 500);
    }
  }
};

function buildTelegramText(payload) {
  const lines = [
    "<b>Новая заявка с сайта</b>",
    "",
    `<b>Имя:</b> ${escapeHtml(payload.name || "-")}`,
    `<b>Email:</b> ${escapeHtml(payload.email || "-")}`,
    `<b>Контакт:</b> ${escapeHtml(payload.contact || "-")}`,
    `<b>Тип запроса:</b> ${escapeHtml(payload.lead_offer || payload.offer || "-")}`,
    `<b>Источник:</b> ${escapeHtml(payload.lead_source || payload.source || "-")}`,
    `<b>Кейс:</b> ${escapeHtml(payload.lead_case || payload.caseTitle || "-")}`,
    `<b>Язык:</b> ${escapeHtml(payload.lead_language || payload.language || "-")}`
  ];

  if (payload.lead_quiz_summary || payload.quizSummary) {
    lines.push("", `<b>Квиз:</b> ${escapeHtml(payload.lead_quiz_summary || payload.quizSummary)}`);
  }

  lines.push("", "<b>Комментарий:</b>", escapeHtml(payload.notes || "-"));
  return lines.join("\n");
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  };
}

function json(data, status) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      ...corsHeaders()
    }
  });
}
