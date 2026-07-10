# Shiftmate — landing page

Marketing site for **Shiftmate**, served at **https://shift-mate.xboostapp.io**.
Built with Next.js (App Router) as a **static export** and deployed to GitHub Pages.

This lives on its own branch (`web/landing`) — it contains only the website, not
the iOS app.

## Pages

- `/` — home (hero, how it works, features, privacy, pricing, FAQ)
- `/privacy/` — Privacy Policy
- `/terms/` — Terms of Use
- `/support/` — Support + data-deletion request

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export → ./out
```

## Deploy

Pushing to `web/landing` runs `.github/workflows/deploy.yml`, which builds the
static site and publishes `./out` to GitHub Pages.

**One-time setup in the repo:**

1. GitHub → **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Add a DNS record so `shift-mate.xboostapp.io` points at GitHub Pages
   (CNAME → `<user-or-org>.github.io`). The `public/CNAME` file sets the custom
   domain; keep it as `shift-mate.xboostapp.io`.
3. Enable **Enforce HTTPS** once the certificate is issued.

## Before going live — fill these in

- **App Store URL** — `app/components/chrome.js`, `APP_STORE_URL` (currently `#get`).
- **Postal address** — `[POSTAL ADDRESS]` in `app/privacy/page.js`.
- **AI provider name** — `[FILL: AI provider name]` in `app/privacy/page.js`.
- **Governing law** — `[JURISDICTION]` in `app/terms/page.js`.
- Optionally add a social share image (`app/opengraph-image.png`).

Screenshots in `public/shots/` are captured from the iOS Simulator; replace or add
as the app evolves.
