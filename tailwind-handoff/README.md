# SI Figma Components Tailwind Handoff

This folder contains production-oriented Next.js components using Tailwind classes only. The visual assets have been downloaded from Figma into `public/si-assets` so the components do not depend on temporary `figma.com/api/mcp/asset/...` URLs.

## Files

- `SiAudienceCardsTailwind.tsx`: the three audience cards.
- `HeroSectionTailwind.tsx`: the hero section with navbar, headline, ticker, and clickable accordion cards.
- `StickyCrystalSectionTailwind.tsx`: a wrapper for the sections after the hero; it keeps the crystal sticky behind the child sections while those sections scroll on top.
- `PartnerSectionTailwind.tsx`: the partner logo section.
- `Inters3ctionSeriesTailwind.tsx`: the IRL event series feature card.
- `SiUSocialLearningSectionTailwind.tsx`: the SI U social learning network section.
- `GrowthTickerTailwind.tsx`: the large collaborative-growth / on-chain-learning text ticker strip.
- `ProductsSectionTailwind.tsx`: the real-world AI & Web3 applications section with category tabs and product rows.
- `../public/si-assets`: exported icons and logos used by the components.

## Tailwind

Do not use the Tailwind CDN in the real app. Use the project's normal Tailwind setup so classes are compiled, purged, and versioned with the app.

For Tailwind v4, the typical setup is:

```bash
pnpm install tailwindcss @tailwindcss/cli
```

Then import Tailwind in the app's global CSS:

```css
@import "tailwindcss";
```

If the app already has Tailwind, no extra CDN or CLI is needed for these components. Just place the `.tsx` files in the source tree and keep `public/si-assets` available at `/si-assets`.

## Fonts

The components expect Geist CSS variables:

```tsx
import { Geist, Geist_Mono } from "next/font/google";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

The headings still use `Clesmont` first to match Figma. If that brand font is not loaded, they fall back to Geist. `GrowthTickerTailwind.tsx` uses `Bebas Neue` first because that Figma node is set in Bebas Neue; load it with `next/font/google` if the production app does not already include it.

## Animation Hooks

The markup includes `data-animate`, `data-card`, and `data-logo` attributes so page-level animation can target stable nodes without depending on class names. For example:

```tsx
document.querySelectorAll('[data-animate="partner-logo"]');
```

`SiUSocialLearningSectionTailwind.tsx` also includes a scroll-driven product screenshot interaction. After a short scroll delay, the screenshot uses `transform-origin: top right`, scales into a large full-view image, and translates downward under the left heading/copy. The image sits inside a reserved-height shell so following sections are pushed down instead of sliding underneath the transformed screenshot. The motion is driven by `--si-u-feed-scale` and `--si-u-feed-y`, so it reverses naturally when scrolling back.

Place `StickyCrystalSectionTailwind` immediately after `HeroSectionTailwind` and wrap the post-hero sections with it, for example:

```tsx
<HeroSectionTailwind />
<StickyCrystalSectionTailwind>
  <PartnerSectionTailwind />
  <Inters3ctionSeriesTailwind />
  <SiUSocialLearningSectionTailwind />
  <SiAudienceCardsTailwind />
  <GrowthTickerTailwind />
  <ProductsSectionTailwind />
</StickyCrystalSectionTailwind>
```

The wrapper keeps the crystal sticky in the background while the child sections scroll over it.
The post-hero section components use transparent outer backgrounds so this backdrop can show through; their cards and logo tiles keep their translucent dark surfaces.

## Hover Behavior

The partner logo hover is CSS-only. The grid uses `group/logos`; when a logo is hovered, sibling logo tiles are at `40%` opacity and the hovered tile stays at `100%`.
