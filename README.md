# ELGE LLC

Marketing site for ELGE LLC, a software studio. Single-page, cinematic
build: React + Tailwind CSS v4 + Framer Motion, with a scroll-linked
"break apart" case study, dark/light theming, and no backend.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs to dist/
npm run preview # serve the production build locally
```

## Replacing placeholder screenshots

Drop real images into `public/images/pjrc/` and `public/images/pitchtrace/`
using the filenames listed in each folder's `README.txt`. They fade in
automatically over the abstract placeholder panels — no code changes needed.

## Deploy

Deployed to GitHub Pages from the `gh-pages` branch. To redeploy:

```bash
npm run deploy
```

`vite.config.js` sets `base: '/ELGELLC/'` to match the GitHub Pages project
URL. If you move this to a custom domain or a different host, update that
back to `/`.
