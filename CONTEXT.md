# Si Her DAO Redesign — Fresh-Chat Context

Paste this whole file into a new Claude chat to bring it up to speed.

---

## 1. Who & what

**You're working with Haseeb** — freelance web/UI designer (geexweb.com) on a
**Si Her DAO** page redesign for SI<3>.

**SI<3>** is a Web3 + AI + Mobile ecosystem.
**Si Her DAO** is the womxn-led leadership collaborative inside it
(50+ womxn-led communities, governed as a DAO).

**Brief:** Take the existing public DAO page at https://www.si3.space/dao and
rebuild it in the style of the two new prototype pages —
https://si-3-homepage-prototype.vercel.app/ (homepage) and
https://si-3-homepage-prototype.vercel.app/grow3dge.

---

## 2. Where the work lives

| Path | What |
|---|---|
| `/Users/am/General/SI-3-Homepage-Prototype/` | Project root (static HTML + CSS prototype) |
| `/Users/am/General/SI-3-Homepage-Prototype/index.html` | Homepage prototype (3,467 lines) |
| `/Users/am/General/SI-3-Homepage-Prototype/grow3dge.html` | Grow3dge page prototype (3,124 lines) |
| **`/Users/am/General/SI-3-Homepage-Prototype/dao.html`** | **The Si Her DAO redesign — primary file you'll edit** (~3,180 lines) |
| `/Users/am/General/SI-3-Homepage-Prototype/si-assets/` | All images, fonts, icons |
| `/Users/am/General/SI-3-Homepage-Prototype/components/PartnerSection.module.css` | Shared logo-tile chrome reused on speaker grids |
| `/Users/am/General/SI-3-Homepage-Prototype/we-lead-handoff.md` | Brief for further polishing the WE LEAD section |

**Stack:** Vanilla HTML + scoped CSS, no framework. No build step. Open
`dao.html` directly in a browser, or serve the project root with
`python3 -m http.server 5173` and visit `http://localhost:5173/dao.html`.

---

## 3. Brand & design system (canonical — don't change)

### Colors
| Token | Value | Use |
|---|---|---|
| Page bg | `#0c0a18` | Body, full-bleed sections |
| Accent | `#bca9ff` | Lavender highlights — titles, links, pins, dots |
| Primary text | `#fff` | Body, titles |
| Secondary | `#cbcbcb` | Card body |
| Tertiary | `rgba(255,255,255,0.7)` | Labels, captions |
| Borders | `rgba(255,255,255,0.18–0.3)` | Cards, chips |
| Card surface | `rgba(8,7,18,0.6)` + `backdrop-filter: blur(8–10px)` | Glassy dark cards |
| Card glow | `rgba(76,42,156,0.22)` | Radial highlight top-center on cards |

### Typography
- **Clesmont** (display) — fallback Bebas Neue. Used for all titles, ALL CAPS.
  Loaded at `./si-assets/clesmont.ttf`. **Not installed in Figma accounts by
  default** — use Bebas Neue there.
- **Geist** (body) — full weight range available. Loaded at
  `./si-assets/fonts/Geist-VariableFont_wght.ttf`.
- **Geist Mono** (eyebrows, tags, ticker labels) — all caps, letter-spacing
  0.08–0.18em. Loaded at `./si-assets/fonts/GeistMono-VariableFont_wght.ttf`.

### Components/patterns (reusable across sections)
- `.dao-kicker` — small section label (kicker dot + Geist Mono text)
- `.dao-link` — inline-arrow CTA with underline (text + → + 44px line below)
- Pill button — white bg, black text, `border-radius: 999px`
- Solution-style card — gradient bg `linear-gradient(140deg, #08090d 7%, #1c1d3d 135%)`
- "SI MORE" mini ticker — Geist Mono looping marquee
- Sticky crystal — decorative purple-crystal PNG that grows behind sections
  inside `.dao-content-stage` (controlled by JS at the bottom of the file)
- Radii: 10–12 px on cards, 6–8 px on small surfaces, 999 px on pills

---

## 4. Page structure (current state)

`dao.html` has 11 sections in this order. Per Kara (project lead) the section
naming uses WE LEARN / WE LEAD / WE COLLAB / WE GOVERN as the framing.

1. **Sticky nav + Hero** — `<section class="dao-preview-band">`
   - Underwater hero bg (`./si-assets/dao-hero-bg.png`)
   - "SI HER DAO" Clesmont title with orb element between HER and DAO
   - Pill eyebrow `A DECENTRALIZING COLLABORATIVE`
   - Sub paragraph + `Explore our DAO →` inline CTA
   - Spinning "scroll down" badge bottom-right

2. **SI MORE mini ticker** — looping Geist Mono strip

3. **WE LEARN — Events & Sessions** — `<section class="dao-learn">`
   - Section header + intro paragraph
   - Featured cohort card: "FUNDING SPACE" (Si Her Web3, Summer 2026 Launch)
   - 9 speaker snapshot tiles (placeholder gradient avatars + initials)
   - Footer with "09 / SESSIONS THIS SEASON" + View all link
   - **Note:** Kara may want to keep an Inters3ction Series event card visible
     here too — there's some content variance between my version and Kara's
     latest edits.

4. **WE LEAD — Womxn Leading Web3** — `<section class="dao-lead">` ⭐ **(just rebuilt)**
   Three sub-blocks:
   - **Global communities map** (`.dao-globe`) — stat header (`50+`),
     region filter chips, 2:1 world map canvas with 6 continent pins,
     ticker strip across the bottom
   - **WE BRAND** (`.dao-brand`) — 2 cards with placeholder 16:9 media slots
     (user supplies mockups) + Clesmont titles + monospace pill CTAs
   - **Bottom CTA bar** (`.dao-lead-cta-bar`) — `Ready to join the global
     network?` + Explore Communities (outline) + Join Si Her DAO → (solid)

5. **WE COLLAB — Meet Kaia, Our AI Agent** — `<section class="dao-collab">`
   - Copy column left (kicker + title + body + `Join our DAO` pill)
   - Kaia card right — gradient portrait + 3 numbered feature rows

6. **WE GOVERN — DAO Governance** — `<section class="dao-govern">`
   - Header + paragraph + Join our DAO pill
   - 4-card grid: DAO Growth / DeFi & Governance / Tech & Innovation / Education & Partnerships

7. **Leaders Co-Creating the New Economy** — `<section class="dao-testimonial">`
   - Avatar stack carousel, big quote, attribution, progress bar
   - 6 testimonials in inline JSON; JS handles click-to-advance

8. **Si Her FAQ** — accordion with 4 items.
   **TODO:** 3 of 4 answers are placeholder copy with `<!-- TODO -->` comments —
   confirm or rewrite with Kara.

9. **Ready to Lead** final CTA band — floating decorative images +
   "READY TO LEAD / IN THE NEW ECONOMY?" + Apply to Join pill

10. **Footer** — newsletter form + SI Things / Ecosystem columns + SI<3>
    wordmark watermark + copyright

11. **JS at the bottom of `<body>`** — sticky-crystal scroll math +
    testimonial carousel state.

---

## 5. Recent work (last session)

We rebuilt **WE LEAD** based on a new reference design Kara provided.
The old version was a 3-row community marquee + 2 simple tool cards.
The new version (now in `dao.html`) is the richer 3-sub-block design above.

Key changes:
- Added `./si-assets/world-map.svg` — a clean SVG continent outline
  (1000×500 viewBox, strokes use `currentColor` so CSS can recolor)
- Added the `.dao-globe-*` classes for the map block (header strip, canvas,
  pins, ticker)
- Added the `.dao-brand-*` classes for the WE BRAND sub-section
- Added `.dao-lead-cta-bar` classes for the bottom CTA
- Removed `.dao-communities*` and `.dao-tools/.dao-tool-card` classes
- WE LEAD CSS lives roughly at lines 650–1255 of `dao.html`
- WE LEAD HTML lives at the `<section class="dao-lead">` block

Companion handoff doc for further polish:
`/Users/am/General/SI-3-Homepage-Prototype/we-lead-handoff.md`

---

## 6. Known TODOs / open items

| Status | Item |
|---|---|
| 🟡 | **WE BRAND cards** — both media slots are placeholders. Need user-supplied UI mockups (siher.eth template screenshot + Si Her TV / livestream screenshot). Replace the `<span class="dao-brand-card-placeholder">` with an `<img>` or interactive markup. |
| 🟡 | **World map SVG** — placeholder I drew. Kara has a specific world map image she'd prefer to use. Drop it at `./si-assets/world-map.png` (or `.svg`) and update the one `src` reference in `dao.html`. |
| 🟡 | **Hero background** — `./si-assets/dao-hero-bg.png` (underwater swimmers image) is in place; verify it's the final asset Kara wants. |
| 🟡 | **3 FAQ answers** are inferred placeholders marked with `<!-- TODO: confirm copy with Kara -->`. Question texts are confirmed; answers need Kara's sign-off. |
| 🟡 | **Sticky crystal bleed in WE LEAD** — the global crystal asset shows prominently through the WE LEAD section's translucent cards (because `.dao-content-stage .dao-lead` is transparent). Polish call: either make WE LEAD opaque (drop the transparency rule for `.dao-lead`) or bump card surface opacity from 0.6–0.7 to ~0.92. Currently artistic but may be too busy. |
| 🟡 | **Inters3ction Series card** — Kara has a version of the WE LEARN section showing an Inters3ction Series event card with FOCUS / FORMAT / FOR WHOM meta. Worth reconciling with my version. |
| ⚪ | **Italic style** — Geist Italic isn't always installed in Figma; we fall back to Inter Italic for testimonial attribution. |
| ⚪ | **Speaker avatars** in WE LEARN are gradient placeholders with initials. Replace each `<span class="dao-speaker-avatar pal-N">` with an `<img>` when real photos arrive. |
| ⚪ | **Testimonial avatars** in Leaders section — same gradient placeholder pattern. |

---

## 7. Figma file (sister deliverable)

The page also exists as an editable Figma frame:

- **File:** https://www.figma.com/design/Sp0x5O2ODoTrzKew1Z2Qx1/SI%3C3%3E-Website-Upgrade
- **Frame:** `Si Her DAO — Redesign`, node id `203:2`
- Sits at canvas position `x=25000, y=0` (zoom to the node directly)
- Built section-by-section as auto-layout frames using the Figma Plugin API
- Uses Bebas Neue as the Clesmont fallback (Clesmont not installed in Figma)

The HTML and Figma are independent representations — both editable, neither
authoritative. The HTML is the more polished one.

---

## 8. How to verify a change

```bash
# Serve the static project
cd /Users/am/General/SI-3-Homepage-Prototype
python3 -m http.server 5173

# Visit
open http://localhost:5173/dao.html
```

Or, for the Claude Code preview MCP, the sandbox is at `/tmp/si3-check` —
symlink files in:
```bash
mkdir -p /tmp/si3-check
ln -sfn /Users/am/General/SI-3-Homepage-Prototype/dao.html /tmp/si3-check/dao.html
ln -sfn /Users/am/General/SI-3-Homepage-Prototype/si-assets /tmp/si3-check/si-assets
ln -sfn /Users/am/General/SI-3-Homepage-Prototype/components /tmp/si3-check/components
```

---

## 9. Quick reference — class prefixes

| Prefix | Section |
|---|---|
| `.dao-page`, `.dao-content-stage`, `.dao-crystal-*` | Page shell + sticky crystal |
| `.dao-preview-*`, `.dao-nav-*`, `.dao-title`, `.dao-pill`, `.dao-cta` | Hero |
| `.dao-mini-ticker-*` | SI MORE strip |
| `.dao-learn-*`, `.dao-cohort-*`, `.dao-sessions-*`, `.dao-speaker-*` | WE LEARN |
| `.dao-lead-*` (header/footer/CTA), `.dao-globe-*` (map), `.dao-brand-*` (cards) | WE LEAD |
| `.dao-collab-*`, `.dao-kaia-*` | WE COLLAB |
| `.dao-govern-*` | WE GOVERN |
| `.dao-testimonial-*` | Testimonials |
| `.dao-faq-*` | FAQ |
| `.dao-cta-*` (band/title/pill) | Final CTA |
| `.dao-footer-*` | Footer |
| `.dao-kicker`, `.dao-link`, `.pal-1`…`.pal-6` | Utilities (kicker, link, palettes) |

---

## 10. One-line summary for the new chat

> Continuing work on `/Users/am/General/SI-3-Homepage-Prototype/dao.html` — a
> static-HTML redesign of si3.space/dao matching the visual language of the
> homepage and Grow3dge prototypes in the same repo. Page is 11 sections,
> ~3,180 lines, all built. Tokens: dark `#0c0a18`, lavender `#bca9ff`,
> Clesmont (display) + Geist (body) + Geist Mono (tags). Recent work: rebuilt
> WE LEAD section into a 3-block design (global communities map + WE BRAND
> cards with placeholder media + bottom CTA bar). Open TODOs in section 6.
