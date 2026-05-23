# Import Notes

The local source folder is:

`/Users/arturmanukan/Documents/Codex/2026-04-24/new-chat/landing-preview`

The repository was initialized through the GitHub connector because the local terminal currently cannot reach GitHub (`Could not resolve host: github.com`).

## Uploaded through connector

- `README.md`
- `.gitignore`
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

## Not uploaded yet

The following files are present locally but were too large to safely move through the connector in this session:

- `index.html` — about 236 KB
- `landing-preview-check.js` — about 120 KB

## Excluded intentionally

- `.DS_Store`
- `.lead-config.js.swp`
- `TELEGRAM_SETUP_VALUES.md` — may contain sensitive setup values

## Next step

Upload `index.html` from the local folder into the repository root. Optional: upload `landing-preview-check.js` if we want to preserve the generated translation/check source.

After `index.html` is in the repo, we can start applying the Claude feedback:

1. Convert the site from generic AI portfolio to proof-driven AI systems/CallControl entry point.
2. Add CallControl as the first live product/case.
3. Remove dead CTAs and empty proof blocks.
4. Make UA/RU/EN routing cleaner.
5. Use the site as Artur's main trust layer, not a separate disconnected funnel.
