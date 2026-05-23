# Import Notes

The local source folder was:

`/Users/arturmanukan/Documents/Codex/2026-04-24/new-chat/landing-preview`

The repository was initialized through the GitHub connector because the local terminal could not reach GitHub (`Could not resolve host: github.com`).

## Uploaded through connector

- `README.md`
- `.gitignore`
- `index.html`
- `lead-config.js`
- `_headers`
- `robots.txt`
- `privacy.html`
- `public-offer.html`
- `DEPLOY_TELEGRAM_AND_PAGES.md`
- `LAUNCH_CHECKLIST.md`
- `cloudflare/telegram-leads-worker.js`
- `cloudflare/wrangler.example.toml`
- `cloudflare/wrangler.toml`

## Important note about `index.html`

The old local `index.html` was about 236 KB and looked more like a broad portfolio plan. Instead of copying it 1:1, this repo now contains a cleaner working landing page that applies the current product direction:

1. Artur's site is the trust layer for AI/automation work.
2. CallControl AI is shown as the first live product/case.
3. Empty proof claims and dead CTA patterns are avoided.
4. UA/RU/EN switching is kept simple.
5. The lead form remains connected through `lead-config.js`.

## Not uploaded

- `landing-preview-check.js` — about 120 KB, not required for the public static site.

## Excluded intentionally

- `.DS_Store`
- `.lead-config.js.swp`
- `TELEGRAM_SETUP_VALUES.md` — may contain sensitive setup values

## Next step

Use this repository as the editable source for `ai.manukianartur1997.workers.dev` and continue improving the public positioning from here.
