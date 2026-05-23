# Si Her DAO — WE LEAD section · polish brief

## 1. Context

**Brand:** SI<3> — a Web3 + AI + Mobile ecosystem. **Si Her DAO** is the womxn-led
leadership collaborative inside it. The DAO page sits alongside two existing sister
pages (homepage + Grow3dge) and inherits their visual language: dark page,
lavender-purple accent, tall geometric display type, glassy cards, animated
tickers. Tone is confident, futuristic, decentralized leadership.

The WE LEAD section is one of four core sections on the page (WE LEARN, **WE LEAD**,
WE COLLAB, WE GOVERN). Its job is to show that Si Her DAO is a **global network**
of 50+ womxn-led communities, and to give members the tools to amplify their
personal brand and voice inside that network.

## 2. Don't change

- The section's information architecture (3 sub-blocks in this order):
  1. Global communities map block
  2. WE BRAND sub-section (2 cards)
  3. Bottom CTA bar
- The design tokens — they're shared with the rest of the page
- Tone of voice / copy (unless polishing for clarity)
- Font families (Clesmont + Geist + Geist Mono are brand-locked)

## 3. Design tokens (canonical)

| Token | Value | Use |
|---|---|---|
| `--page-bg` | `#0c0a18` | Page background |
| `--accent` | `#bca9ff` | Lavender highlight (titles, links, pins) |
| `--text` | `#fff` | Primary text |
| `--text-2` | `#cbcbcb` | Secondary body text |
| `--text-3` | `rgba(255,255,255,0.7)` | Tertiary / labels |
| `--border` | `rgba(255,255,255,0.18)` | Card borders |
| `--surface` | `rgba(8,7,18,0.6)` | Card fill (over a backdrop-blur) |
| `--purple-glow` | `rgba(76,42,156,0.22)` | Card gradient highlight |

**Type ramp:**
- Display: `Clesmont` (fallback: `Bebas Neue`) — uppercase, weight 400/700
  - Section title: 40 px
  - Card title: 30 px
  - Stat number: 44 px
- Body: `Geist` — 14–18 px, line-height 1.4–1.55
- Tags/eyebrows: `Geist Mono` — 11–14 px, all caps, letter-spacing 0.08–0.18em

**Radii:** 10–12 px on cards; 999 px on pills/chips.
**Borders:** 1 px, `rgba(255,255,255,0.18–0.3)`.
**Card surface recipe:** subtle radial purple glow top-center + `rgba(8,7,18,0.6)` + `backdrop-filter: blur(8px)`.

## 4. Section anatomy

### 4.1 Section header
- Kicker pill `· WE LEARN` style with purple dot + Geist Mono label
- Title: `WOMXN LEADING WEB3` (Clesmont, "Leading" in purple)
- Right-aligned paragraph: "Every continent. 50+ womxn-led communities…"

### 4.2 Global communities map block (sub-section 1)
A single rounded card with three stacked regions:

1. **Header strip** (left → right)
   - Left: tiny Geist Mono label `GLOBAL COMMUNITIES NETWORK`, then a stat row
     with `50+` in Clesmont 44 px + "Womxn-led communities across 7 continents"
   - Right: region filter chips (`All Regions` active, `Americas`, `Europe`,
     `Africa`, `Asia-Pacific`)
2. **Map canvas** — 2:1 aspect ratio, world map SVG at 22% opacity in `#bca9ff`,
   with **6 continent pins** absolutely positioned by percentage:
   - North America (19%, 42%) — 9 communities
   - Latin America (29%, 80%) — 5 communities
   - Europe (50%, 32%) — 7 communities
   - Middle East (61%, 44%) — 2 communities
   - Africa (53%, 62%) — 4 communities
   - Asia-Pacific (76%, 38%) — 6 communities
   - Each pin = bubble (border `#bca9ff`, dark fill, glow) containing continent
     name + 3-4 logo dots (24 px circles, monogram inside, `+N` overflow) +
     community count, then 1.5 px purple stem, then 8 px glowing dot.
3. **Ticker strip** — full-bleed inside the card, edge-faded both sides,
   horizontally scrolling 28 px circular logos + community names, 38s loop,
   `prefers-reduced-motion` aware.

### 4.3 WE BRAND sub-section (sub-section 2)
- Sub-header: kicker + 40 px title `AMPLIFY YOUR / VOICE` ("Voice" purple) +
  right-aligned paragraph
- **Two cards** in a 2-col grid, each with two stacked regions:
  - **Media slot** (top) — 16:9 aspect-ratio placeholder with a diagonal stripe
    pattern + a dashed pill saying `DROP SIHER.ETH MOCKUP HERE` / `DROP
    LIVESTREAM MOCKUP HERE`. The user will swap these with their own UI mockups.
  - **Body** (bottom) — Geist Mono eyebrow + Clesmont title + Geist paragraph +
    monospace pill CTA with `→` arrow.

### 4.4 Bottom CTA bar
- Left: 22 px Clesmont line "Ready to join the **global network?**" (last 2 words
  purple) + 14 px Geist sub-line
- Right: outline pill `Explore Communities` + solid white pill `Join Si Her DAO →`

## 5. What to polish

Open invitations for Claude Design:

1. **Continent-pin polish.** The bubbles read as functional but could feel more
   on-brand — try (a) a subtle inner stroke + glow, (b) a small "+" indicator
   when more communities are hidden, (c) a hover state that lifts and reveals
   a tooltip with the full community list.
2. **Map texture.** Current map is a clean SVG outline. Consider a soft latitude
   grid behind it, or noise/grain to add depth on the dark surface — keep it
   under 10% opacity so the pins stay legible.
3. **Stat hierarchy in the header strip.** The `50+` and label currently sit
   inline; explore stacking, sizing, or adding a tiny sparkline / globe-of-pins
   thumbnail next to it.
4. **Region chips' active state.** Currently a purple fill + lavender stroke.
   Consider an inset glow, a small `[•]` indicator, or chip animation on
   selection.
5. **WE BRAND card media slots.** The placeholder pattern is intentionally
   "engineering grey" — polish into something a designer would mistake for
   intentional empty state (e.g. soft purple grid, faint orb, light shimmer).
   Must remain obviously replaceable.
6. **CTA bar.** The contrast between outline and solid pill is correct, but the
   bar itself could use a subtle left-edge gradient (already present) or a
   diagonal aurora line in purple to feel less rectangular.
7. **Responsive behaviour.** Verify the section header, map block, brand grid,
   and CTA bar all collapse cleanly at 720 px and below. Continent-pin layout
   in particular needs review on phone widths (bubbles may overlap).

## 6. Hard constraints

- **No new dependencies.** Vanilla HTML + CSS, no JS frameworks. CSS-only
  animation for the ticker.
- **No font swaps.** Clesmont / Bebas Neue / Geist / Geist Mono only.
- **No iconography library.** Inline SVG or unicode (→, ›, •) only.
- **Image placeholders stay placeholders.** Don't generate fake images for the
  WE BRAND cards — the user supplies those.
- **Respect `prefers-reduced-motion`.** The ticker `animation: none` rule is
  already in place; keep that pattern for any new motion.
- **Accessibility.** Keep region chips, CTA pills, and pins keyboard-reachable.
  The map is decorative (`aria-hidden="true"` on the SVG); pin bubbles are
  informative — preserve that distinction.

## 7. Current code (paste-ready)

The full section markup + scoped styles. Copy this into Claude Design as the
working artifact. The world-map SVG referenced as `./si-assets/world-map.svg` is
a separate file; if Claude Design needs it inline, paste the SVG below into
an `<svg>` in place of the `<img>`.

### 7.1 HTML

```html
<section class="dao-lead" aria-labelledby="dao-lead-title">
  <div class="dao-lead-inner">

    <header class="dao-lead-header">
      <div>
        <span class="dao-kicker">
          <span class="dao-kicker-dot" aria-hidden="true"></span>
          We Lead
        </span>
        <h2 class="dao-lead-title" id="dao-lead-title">
          Womxn <span>Leading</span><br />Web3
        </h2>
      </div>
      <div class="dao-lead-header-right">
        <p>Every continent. 50+ womxn-led communities. One decentralizing
        collaborative reshaping what leadership looks like in Web3 — and who
        gets to be in the room.</p>
      </div>
    </header>

    <!-- ===== Sub-section 1: Global communities map ===== -->
    <div class="dao-globe">
      <header class="dao-globe-head">
        <div>
          <span class="dao-globe-label">Global Communities Network</span>
          <div class="dao-globe-stat">
            <span class="dao-globe-num">50+</span>
            <span class="dao-globe-num-label">Womxn-led communities across 7 continents</span>
          </div>
        </div>
        <div class="dao-globe-tags" role="tablist" aria-label="Filter by region">
          <span class="dao-globe-tag is-active" role="tab" aria-selected="true">All Regions</span>
          <span class="dao-globe-tag" role="tab">Americas</span>
          <span class="dao-globe-tag" role="tab">Europe</span>
          <span class="dao-globe-tag" role="tab">Africa</span>
          <span class="dao-globe-tag" role="tab">Asia&#8209;Pacific</span>
        </div>
      </header>

      <div class="dao-globe-canvas">
        <img class="dao-globe-map" src="./si-assets/world-map.svg" alt="" aria-hidden="true" />
        <div class="dao-globe-pins">
          <!-- North America -->
          <div class="dao-globe-pin" style="left: 19%; top: 42%;">
            <div class="dao-globe-bubble">
              <div class="dao-globe-bubble-name">North America</div>
              <div class="dao-globe-bubble-dots">
                <span class="dao-globe-logo">SHG</span>
                <span class="dao-globe-logo">ETH</span>
                <span class="dao-globe-logo">HST</span>
                <span class="dao-globe-logo is-more">+6</span>
              </div>
              <div class="dao-globe-count">9 communities</div>
            </div>
            <span class="dao-globe-stem"></span>
            <span class="dao-globe-dot"></span>
          </div>
          <!-- ...5 more pins (Latin America, Europe, Africa, Middle East, Asia-Pacific) -->
        </div>
      </div>

      <div class="dao-globe-ticker" aria-hidden="true">
        <div class="dao-globe-ticker-track">
          <!-- ~18 ticker items + duplicate set for seamless -50% loop -->
          <span class="dao-globe-ticker-item">
            <span class="dao-globe-ticker-logo">DLT</span>
            <span class="dao-globe-ticker-name">DLT Talents</span>
          </span>
          <span class="dao-globe-ticker-sep"></span>
          <!-- ...etc -->
        </div>
      </div>
    </div>

    <!-- ===== Sub-section 2: WE BRAND ===== -->
    <div class="dao-brand">
      <header class="dao-brand-head">
        <div class="dao-brand-head-left">
          <span class="dao-kicker">
            <span class="dao-kicker-dot" aria-hidden="true"></span>
            We Brand
          </span>
          <h3 class="dao-brand-title">Amplify Your<br /><span>Voice</span></h3>
        </div>
        <p>Receive Web3-enabled tools to amplify your personal brand and voice.
        Build your presence. Own your story on-chain.</p>
      </header>

      <div class="dao-brand-grid">
        <article class="dao-brand-card is-brand">
          <div class="dao-brand-card-media">
            <span class="dao-brand-card-placeholder">Drop siher.eth mockup here</span>
          </div>
          <div class="dao-brand-card-body">
            <span class="dao-brand-card-eyebrow">Personal Brand</span>
            <h4 class="dao-brand-card-title">Create Your<br />Web3 Identity</h4>
            <p>Utilize your custom siher.eth template to showcase your personal
            brand in Web3.</p>
            <a class="dao-brand-card-cta" href="#">Claim Your Space</a>
          </div>
        </article>

        <article class="dao-brand-card is-media">
          <div class="dao-brand-card-media">
            <span class="dao-brand-card-placeholder">Drop livestream mockup here</span>
          </div>
          <div class="dao-brand-card-body">
            <span class="dao-brand-card-eyebrow">Media &amp; Network</span>
            <h4 class="dao-brand-card-title">Amplify Your<br />Voice &amp; Network</h4>
            <p>Develop your own livestream channel with our decentralized media
            platform, powered by Streamr.</p>
            <a class="dao-brand-card-cta" href="#">Launch Channel</a>
          </div>
        </article>
      </div>
    </div>

    <!-- ===== Bottom CTA bar ===== -->
    <div class="dao-lead-cta-bar">
      <div>
        <div class="dao-lead-cta-text">Ready to join the <span>global network?</span></div>
        <div class="dao-lead-cta-sub">Connect with 50+ womxn-led communities
        across every continent — inside Si Her DAO.</div>
      </div>
      <div class="dao-lead-cta-btns">
        <a class="dao-lead-cta-outline" href="#">Explore Communities</a>
        <a class="dao-lead-cta-primary" href="#">Join Si Her DAO &rarr;</a>
      </div>
    </div>

  </div>
</section>
```

### 7.2 Full CSS (scoped to .dao-lead)

> The full CSS block is in `dao.html` from approx. line 650 to line 1255.
> Grep that file for `WE LEAD — Two sub-sections` to find the block.
> Key class prefixes:
> `.dao-lead-` (section + header + CTA bar)
> `.dao-globe-` (map block)
> `.dao-brand-` (WE BRAND cards)
> Plus the shared utility classes `.dao-kicker`, `.dao-link`.

### 7.3 World map SVG (separate asset)

Lives at `si-assets/world-map.svg`. 1000×500 viewBox, all paths stroke
`currentColor` so the host page recolors via CSS. Continents (simplified):
North America, Greenland, Central America, South America, Europe, Scandinavia,
UK + Iceland, Africa + Madagascar, Middle East, Asia mainland, India,
SE Asia + Indonesia islands, Japan + Korea, Australia + Tasmania + NZ,
Antarctica crescent.

## 8. Files in the repo

- `dao.html` — full page (hero, ticker, WE LEARN, **WE LEAD**, WE COLLAB,
  WE GOVERN, testimonials, FAQ, CTA, footer)
- `si-assets/world-map.svg` — world map outline
- `si-assets/snapshot-mark.svg` — kicker dot icon used across sections
- `si-assets/clesmont.ttf` — display font
- `si-assets/fonts/Geist-*.ttf` + `GeistMono-*.ttf` — body + mono

## 9. One-line summary to paste

> Polish the WE LEAD section of Si Her DAO (3 sub-blocks: global communities map
> with continent pins + ticker, WE BRAND with two placeholder-media cards, CTA
> bar). Brand language: dark `#0c0a18`, lavender `#bca9ff`, Clesmont + Geist +
> Geist Mono, glass cards with `rgba(8,7,18,0.6)` + blur, ticker animations
> CSS-only. Don't restructure or change copy. Don't add deps.
