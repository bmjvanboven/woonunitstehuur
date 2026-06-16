---
name: woonunitstehuur-design
description: Use this skill to generate well-branded interfaces and assets for Woonunitstehuur.nl (Dutch temporary-housing / woonunit rental), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference
- **Brand:** Woonunitstehuur.nl — *Comfortabel tijdelijk wonen.* Dutch, formal "u", reassuring, quietly premium. No emoji.
- **Colours:** gold `#BC955B` (accent), ink `#1B1B1B`, warm sand neutrals. One gold accent — used deliberately.
- **Type:** Archivo (display, often UPPERCASE, tight tracking) + Hanken Grotesk (body). *Substitutes — see readme Caveats.*
- **Shape:** modest radii on cards/inputs, **full-pill** buttons & badges; warm soft shadows; hairline borders; hover-lift cards.
- **Global CSS:** link `styles.css` (it `@import`s all tokens & fonts).
- **Components:** load `_ds_bundle.js`, read from `window.WoonunitstehuurDesignSystem_<hash>` (run the design-system check to get the exact namespace). Button, IconButton, Badge, Input, Select, Textarea, SpecItem, UnitCard.
- **Assets:** `assets/` — `logo-colour.png`, `logo-white.png` (reversed), `mark-gold.png`, `favicon.png`, plus clearly-marked image placeholders.
- **Icons:** Lucide-style 2px line icons (see `ui_kits/website/icons.jsx`).
- **Reference screens:** `ui_kits/website/` (home, aanbod, unit detail, contact).
