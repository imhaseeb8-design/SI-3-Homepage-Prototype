# SI-3-Homepage-Prototype

AI-coded prototype for visual reference for the dev team.

## Live preview

This repo is a static site deployable to Vercel as-is. The entry point is `index.html` at the repo root.

## Structure

- `index.html` — standalone HTML preview of the homepage sections (hero, partners, Inters3ction series, SI U, audience cards, growth ticker, products).
- `si-assets/` — exported icons, logos, and imagery used by `index.html`.
- `tailwind-handoff/` — production-oriented React + Tailwind component handoff (`.tsx` files) for the dev team to drop into the real Next.js app. See `tailwind-handoff/README.md` for usage.

## Deploy

Vercel auto-detects this as a static site — no build step or framework preset is required. `vercel.json` enables clean URLs.
