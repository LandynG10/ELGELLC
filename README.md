# ELGE Studio

Marketing site for ELGE Studio, a software studio. Single-page, dark
editorial build: React + Tailwind CSS v4 + Framer Motion, with a
restrained scroll-reveal system and intentional (not inverted) dark/light
theming, and no backend.

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

## Updating case study screenshots

`public/images/pitchtrace/` holds the real PitchTrace screenshots
(`cover.jpg`, `mobile.jpg`). To update them, replace the files directly —
same filenames, no code changes needed.

## Deploy

Deployed to GitHub Pages from the `gh-pages` branch. To redeploy:

```bash
npm run deploy
```

`vite.config.js` sets `base: '/ELGELLC/'` to match the GitHub Pages project
URL. If you move this to a custom domain or a different host, update that
back to `/`.
