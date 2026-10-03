# Pomodorsomix — Next.js wrapper

Wraps the **Pomodorso mix** build (Pomodoro Timer + Breathing Machine + Writing
Studio, all in one page) in a minimal Next.js app so it's easy to build and
deploy.

## What's inside

- `public/pomodorsomix.html` — the mix itself, **byte-identical** to
  `workspace/goals/pomodoro-timer/files/pomodoro-timer/pomodorso-mix-fullscreen-perf57a-backup-pv10.html`
  (MD5 `eebf18e6b2fc0db30aefeebf51288274`). Fully self-contained: Three.js,
  jsPDF, fonts and images are inlined, so the page needs no network at all.
- `app/page.tsx` — renders the mix in a full-viewport iframe and mirrors its
  live tab-bar countdown title (the Unicode monospace digits) onto the outer page.
- `app/icon.png` — the bear favicon (Next.js serves it as favicon /
  apple-touch-icon automatically).
- `public/og-image.png` — link-preview image, screenshotted from the real app.

## Commands

```bash
npm install   # once
npm run dev   # local dev server → http://localhost:3000
npm run build # production build → .next/
```

Deploy to Vercel with the default Next.js preset (Framework Preset: Next.js,
Root Directory: this folder, everything else default). The mix page is fully
static-compatible, so Vercel prerenders and serves it with zero config.

## Swapping in a newer mix build

Drop the new file into `public/` as `pomodorsomix.html`, rebuild. If you keep
the byte-identical discipline, update the MD5 above.
