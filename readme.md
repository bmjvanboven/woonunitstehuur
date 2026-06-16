# Woonunitstehuur Design System

The brand and product design system for **Woonunitstehuur.nl** — a Dutch company that rents out fully-furnished, temporary residential units ("woonunits") for people who are renovating, rebuilding, or otherwise need comfortable temporary housing on their own property.

> **Tagline:** *Comfortabel tijdelijk wonen* — Comfortable temporary living.

---

## 1. Company & product context

Woonunitstehuur.nl places fully-equipped living units (living room, kitchen with appliances, bathroom, one or more separate bedrooms) on a customer's own plot — delivered and placed by crane truck, usually within 1–2 working days. The core promise: stay close to home, keep your daily routine, and live comfortably while your house is being built or renovated. Units are insulated (PIR), air-conditioned, and rented per month for short or longer terms.

**Audience:** Dutch homeowners (families, couples) mid-renovation or new-build; also relevant for mantelzorg (informal care) and temporary staff housing.

**The product surface is a marketing/lead-gen website** — present the units, build trust, and drive a quote request (offerte) or phone call. There is no logged-in app.

### Sources given
- `uploads/logo-woonunitstehuur-colour.png` — primary colour logo (→ `assets/logo-colour.png`).
- `uploads/favicon-woonunitstehuur-...png` — favicon / gold mark (→ `assets/favicon.png`).
- Website: **https://woonunitstehuur.nl/** (plus related sub-pages `/over/`, `/impressie/`).

> ⚠️ The live website's theme code and exact typefaces/imagery were **not** directly accessible. Colours were sampled from the logo; type, components, screens and the visual system are an on-brand reconstruction built from the logo and published site copy. See **Caveats** at the bottom.

---

## 2. Content fundamentals — how Woonunitstehuur writes

- **Language:** Dutch. Formal register — the customer is addressed as **"u"** (never "je"). The company speaks as **"wij / ons"**.
- **Tone:** Reassuring, helpful, practical, quietly premium. It removes worry ("zo blijft u dicht bij huis", "binnen één werkdag", "volledig ingericht"). Confident but never pushy.
- **Voice in one line:** *"Of u nu bouwt of verbouwt — wij regelen comfortabel tijdelijk wonen op uw eigen terrein."*
- **Casing:** Sentence case for body and most headings. The wordmark and big display headlines may be set in **UPPERCASE** (as the logo is). Eyebrows/overlines are uppercase with wide tracking.
- **Vocabulary:** *woonunit, tijdelijk wonen, op eigen terrein, volledig ingericht, verbouwing/nieuwbouw, offerte, plaatsing, comfortabel, vrijblijvend, binnen één werkdag.*
- **Numbers as proof:** lean, concrete — "1–2 werkdagen", "100% ingericht", "vanaf € 595 p/mnd". Avoid invented statistics.
- **CTAs:** action + reassurance. "Vraag offerte aan", "Bekijk het aanbod", "Bel direct", "Vraag deze unit aan". Pair a primary CTA with "vrijblijvend" / "binnen één werkdag".
- **Emoji:** none. The brand is grounded and professional — no emoji, no exclamation-heavy copy.

---

## 3. Visual foundations

The brand is **warm, solid and architectural**: a single confident **gold** accent on **near-black ink**, set on **warm sand neutrals**. It should feel like quality construction — clean, substantial, trustworthy — not flashy or techy.

### Colour
- **Gold `#BC955B`** (`--gold-500`) — the one brand accent, sampled from the logo mark. Hover `--gold-600`, press/text-on-light `--gold-700`. Use it deliberately: CTAs, eyebrows, icon chips, the mark — not large fills (except the occasional CTA band).
- **Ink `#1B1B1B`** (`--ink-800`) — the wordmark black; used for dark sections, footer, primary text, secondary buttons.
- **Warm sand neutrals** (`--sand-50 … --sand-800`) — slightly warm-tinted greys. `--sand-50` is the page surface; cards are white.
- **Status** colours are muted and earthy (forest green, slate blue, ochre, brick) so they sit beside the gold rather than fighting it.
- See `tokens/colors.css` for base values + semantic aliases (`--text-*`, `--surface-*`, `--border-*`).

### Type
- **Display — Archivo** (700–900), often UPPERCASE with tight tracking (`-0.02em`) for headlines and numbers; echoes the heavy geometric wordmark.
- **Body / UI — Hanken Grotesk** (400–600), humanist and calm, 1.5–1.65 line-height.
- Scale runs 12 → 80px (`--text-xs … --text-6xl`). Eyebrows: 13px / 700 / uppercase / `+0.12em`, usually preceded by a short gold rule.
- Monospace (`--font-mono`) is a system stack — used only for spec/meta labels in foundation cards.

### Backgrounds & imagery
- Surfaces are flat warm neutrals — **no decorative gradients** as backgrounds. The only "gradient" is a dark overlay on hero photography for legibility, and a single gold CTA band.
- Imagery is **real photography of placed units** (warm, natural daylight, lifestyle-on-terrain). Currently represented by clearly-marked placeholders — replace with brand photos.
- Hero pattern: full-bleed photo, darkened with `linear-gradient(90deg, rgba(20,20,19,.92), rgba(20,20,19,.55))`, white text on top.

### Shape, depth & borders
- **Corner radius:** modest and architectural — cards `--radius-lg` (16px), inputs/chips `--radius-md` (10px), **buttons & badges are full pills** (`--radius-pill`). The pill CTA against square-ish cards is a signature contrast.
- **Cards:** white surface, 1px `--border-subtle` hairline, `--shadow-sm` at rest. They **lift** (`translateY(-4px)` + `--shadow-lg`) on hover; unit-card photos zoom slightly.
- **Shadows:** soft, warm-tinted (built on ink at low alpha), `--shadow-xs … --shadow-xl`, plus `--shadow-brand` (gold glow) for emphasis.
- **Borders** carry a lot of the structure — prefer a hairline + shadow over heavy fills.

### Motion
- Quiet and quick. `--dur-fast 140ms` for hover/press, `--dur-base 220ms` for card lifts, `--ease-out` (decelerating) almost everywhere.
- **Hover:** buttons darken one gold step; cards lift + soften shadow; arrows nudge `translateX(3px)`; nav items get a soft gold-50 pill.
- **Press:** primary buttons drop `translateY(1px)`. No bouncy/springy or infinite-loop animation.
- Respect `prefers-reduced-motion`.

### Transparency & blur
- Sparingly. The sticky header is `rgba(255,255,255,0.86)` + `backdrop-filter: blur(12px)`. Dark-panel icon chips use a translucent gold wash (`rgba(188,149,91,0.18)`).

### Layout
- Centered container, `--container-max 1200px`, 24px gutters. Generous section rhythm (~72–96px vertical).
- Focus ring: 3px gold glow (`--ring-focus`) on inputs and keyboard focus.

---

## 4. Iconography

- **No custom brand icon set** was found. The system uses **Lucide-style line icons** — 2px stroke, round caps/joins, 24px grid — as a documented substitute. They are defined inline in `ui_kits/website/icons.jsx` as `window.WUIcons` (Ruler, Bed, Users, Bath, Phone, Mail, Truck, Shield, Snowflake, MapPin, Check, Clock, Arrow, …).
- **Usage:** functional and quiet. Icons appear in gold-tinted square chips (`--gold-50` bg, `--gold-700` icon) for specs/USPs, or inline at text colour. Keep stroke weight consistent; don't mix filled and line styles.
- **The brand mark** (gold triple-chevron, `assets/mark-gold.png`) is the one iconographic brand device — favicon, app icon, watermark. Don't redraw it; use the asset.
- **No emoji**, no unicode-glyph icons.
- If you need more icons, pull the matching glyph from [Lucide](https://lucide.dev) (CDN or inline) to stay consistent.

---

## 5. Repository index

```
styles.css                  ← global entry point (consumers link THIS); @import list only
tokens/
  colors.css                ← brand gold, ink, sand neutrals, status + semantic aliases
  typography.css            ← Archivo / Hanken families, scale, weights, roles
  spacing.css               ← 4px grid, container, section rhythm
  effects.css               ← radius, borders, warm shadows, focus ring, motion
  fonts.css                 ← Google Fonts @import (substitution — see Caveats)
assets/                     ← logo-colour, logo-white, mark-gold, favicon, *-placeholder*
guidelines/                 ← foundation specimen cards (Colors / Type / Spacing / Brand)
components/
  core/                     ← Button, IconButton, Badge
  forms/                    ← Input, Select, Textarea
  cards/                    ← UnitCard, SpecItem
ui_kits/
  website/                  ← interactive marketing-site recreation (4 screens)
readme.md                   ← this file
SKILL.md                    ← Agent-Skills front-matter for use in Claude Code
```

### Components (window.`WoonunitstehuurDesignSystem_…`)
| Component | Group | Purpose |
|---|---|---|
| `Button` | core | Pill CTA — primary (gold) / secondary (ink) / outline / ghost; 3 sizes |
| `IconButton` | core | Icon-only action; soft-square or round |
| `Badge` | core | Status pill (availability) — 6 tones, soft/solid, optional dot |
| `Input` | forms | Labeled text input with focus ring, helper & error |
| `Select` | forms | Styled native select |
| `Textarea` | forms | Multi-line input |
| `SpecItem` | cards | Icon + label/value spec line (gold chip) |
| `UnitCard` | cards | Signature unit listing card (composes Badge + SpecItem) |

Each component directory has a `.jsx` + `.d.ts` + `.prompt.md` + a `@dsCard` HTML showcase.

### UI kits
- `ui_kits/website/` — Home, Aanbod, Unit detail, Contact. See its `README.md`.

---

## Caveats
- **Fonts are substitutions.** The live site's exact typefaces were unavailable, so the system uses **Archivo** (display) + **Hanken Grotesk** (body) from Google Fonts via `tokens/fonts.css`. Replace with the licensed brand fonts when known.
- **Imagery:** real Woonunitstehuur project photos are now wired into the website UI kit (`assets/hero.jpg`, `unit-*.jpg`, `interior-*.jpg`, `placing.jpg`). The generic `*-placeholder*.png` files remain only as neutral stand-ins for future units.
- **Icons are Lucide-style substitutes** — no documented brand icon set was found.
- **Colours are sampled from the logo** (`#BC955B`, `#1B1B1B`); the broader palette, status colours, type scale, spacing, shadows and components are an on-brand reconstruction, not extracted from the live theme.
- Phone numbers / addresses in the UI kit are illustrative placeholders.
