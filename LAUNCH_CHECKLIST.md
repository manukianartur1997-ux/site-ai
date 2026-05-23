# Launch Checklist

## What is already ready

- Static landing preview is assembled in `index.html`
- Separate legal pages exist:
  - `privacy.html`
  - `public-offer.html`
- The site already supports:
  - `EN / UA / RU`
  - flagship cases with popups
  - more cases section
  - direct request form
  - separate AI quiz flow
  - lead context fields:
    - source
    - offer
    - case
    - quiz summary
    - language

## What is still needed from Artur

1. Final public business data
   - public display name
   - city / country if needed
   - final public contact email
   - whether LinkedIn should stay on site

2. Legal details
   - whether you want to launch under your own name or a business entity
   - final wording for privacy / offer if you want legal review
   - any required tax / entity details for the public offer

3. Lead delivery path
   Choose one:
   - `Telegram bot`
   - `Email`
   - `Cloudflare Worker -> Telegram bot`
   - `n8n workflow`

4. Hosting / public link
   Choose one:
   - `Cloudflare Pages`
   - `Vercel`
   - `Netlify`
   - custom hosting

5. Final content decisions
   - confirm final default language
   - confirm whether AI quiz should stay on the page
   - confirm whether `Process` block stays
   - confirm whether `Why trust this` block stays

## Best recommended next move

For the fastest MVP launch:

1. Host the static site on `Cloudflare Pages` or `Vercel`
2. Connect the request form to `Telegram bot` through a lightweight serverless endpoint
3. Keep quiz + request form as two separate lead paths
4. Do one final mobile pass
5. Launch and start collecting real behavior data

## Nice-to-have after launch

- heatmaps / session recordings
- simple event tracking
- Telegram follow-up flow
- success page
- one live MVP demo block
