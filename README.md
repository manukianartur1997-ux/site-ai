# site-ai

Source repository for the public `ai.manukianartur1997.workers.dev` landing site.

## Current status

The repository now has a working static landing page in `index.html`.

The page is positioned as Artur's main AI/automation entry point and links CallControl AI as the first live product/case.

## Main files

- `index.html` — public landing page
- `lead-config.js` — lead form endpoint config
- `privacy.html` — privacy page
- `public-offer.html` — public offer page
- `_headers` — Cloudflare Pages security headers
- `robots.txt` — crawler config
- `cloudflare/telegram-leads-worker.js` — optional Telegram lead intake worker
- `cloudflare/wrangler.toml` — worker deploy config

## Original local source

The older local source was found at:

`/Users/arturmanukan/Documents/Codex/2026-04-24/new-chat/landing-preview`

The old giant `index.html` was not copied 1:1. Instead, the repository now contains a cleaner working page based on the current strategy:

- no empty “cases soon” promises;
- CallControl AI is visible as a live product;
- UA/RU/EN switcher is simpler;
- request form uses the current lead endpoint;
- the site acts as the trust layer for Artur's AI systems work.

## Files intentionally excluded

- `.DS_Store`
- `*.swp`
- `TELEGRAM_SETUP_VALUES.md` because it may contain sensitive setup values
- `landing-preview-check.js` because it is a large generated/check file and not required for the public static site

## Next recommended edits

1. Connect this repo to Cloudflare Pages or copy the current files into the existing worker/pages project.
2. Test form delivery through `lead-config.js`.
3. Add 1-2 real anonymous mini-cases once CallControl/EdTech outreach produces proof.
4. Add a direct link from CallControl back to this site as the owner/operator trust layer.
