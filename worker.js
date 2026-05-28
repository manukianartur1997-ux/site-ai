export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/") {
      return env.ASSETS.fetch(new Request(`${url.origin}/index.html`, request));
    }

    const response = await env.ASSETS.fetch(request);
    if (response.status !== 404) {
      return response;
    }

    if (request.headers.get("accept")?.includes("text/html")) {
      return env.ASSETS.fetch(new Request(`${url.origin}/index.html`, request));
    }

    return response;
  }
};
