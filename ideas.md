# Rustwood Hub — Design Brainstorm

## Brand Context
Aaron Ellis | Rustwood — Warrior · Creator · Technologist · Teacher · Architect of Systems · Voice Artist · Mind Coach
Four pillars: **Body · Voice · Mind · Intelligence**
Logo: Dark metallic, forged steel, gold trim, electric blue glows, tree-of-life sigil, kettlebell base, spike crown

---

<response>
<text>

## Idea A — "Forged Sigil" (Dark Armory / Mythic Craftsmanship)

**Design Movement:** Dark Fantasy Heraldry meets Industrial Brutalism
**Probability:** 0.07

**Core Principles:**
1. Everything feels cast in metal — textures, borders, and dividers evoke hammered iron and etched brass
2. Asymmetric layout: hero left-anchored, domain cards arranged in a staggered masonry grid
3. Gold + electric blue as the only accent colours against near-black backgrounds
4. Typography has weight and authority — no thin weights anywhere

**Color Philosophy:**
- Background: `#0a0c10` (forge-black)
- Surface: `#12161e` (cold iron)
- Gold accent: `#c9a227` (burnished brass)
- Electric blue: `#3db8f5` (arc-light)
- Text: `#e8dfc8` (aged parchment)
Emotional intent: power, permanence, earned mastery — the palette of a champion's trophy room

**Layout Paradigm:**
- Full-bleed hero with logo centred over a particle/constellation field
- Horizontal rule dividers styled as engraved metal bands
- Domain cards: 3-column masonry grid, each card has a metallic border glow on hover
- Social links in a bottom forge-plate footer

**Signature Elements:**
1. Thin gold rule lines with diamond mid-points as section dividers
2. Card borders that animate from dark to gold-glow on hover
3. Background noise/grain texture overlay at 4% opacity across all surfaces

**Interaction Philosophy:**
Interactions feel deliberate and weighty — no bouncy easing. Hover states reveal hidden depth (glow, border animation). Clicking a card feels like pressing a seal.

**Animation:**
- Hero logo: slow scale-in (1.0→1.02) with a blue pulse glow on load
- Section entrance: staggered fade-up with 80ms delay per card
- Card hover: border-color transition 300ms ease, subtle translateY(-3px)
- Social icons: gold glow pulse on hover

**Typography System:**
- Display: `Cinzel Decorative` (Roman serif with authority — headings only)
- Body: `Barlow` (clean, military, readable)
- Accent labels: `Barlow Condensed` uppercase tracked wide
- Hierarchy: 48px display / 18px body / 11px label

</text>
<probability>0.07</probability>
</response>

---

<response>
<text>

## Idea B — "Signal & Steel" (Tactical HUD / Cyberpunk Forge)

**Design Movement:** Military HUD meets Cyberpunk Terminal
**Probability:** 0.06

**Core Principles:**
1. The page feels like a live intelligence dashboard — scanlines, bracket UI elements, data-readout labels
2. Strong vertical rhythm; sections feel like classified dossier entries
3. Neon blue and amber against absolute black — high contrast, zero ambiguity
4. Every section has a "classification" label (e.g., `// DOMAIN_01 — MARTIAL_ARTS`)

**Color Philosophy:**
- Background: `#060709` (void black)
- Accent: `#00c8ff` (scanner blue)
- Secondary accent: `#f0a500` (amber alert)
- Text: `#c8d8e8` (terminal grey-white)
Emotional intent: precision, intelligence, tactical readiness

**Layout Paradigm:**
- Left sidebar with sticky nav dots (section indicators)
- Full-width sections stacked vertically, each with a bracket-corner UI frame
- Domain cards in a 2-column layout with monospace stat labels

**Signature Elements:**
1. Corner bracket decorators on every card/section (`⌐ ¬` style)
2. Animated scanline overlay (very subtle, 2% opacity)
3. Typing-cursor blink on section headings

**Interaction Philosophy:**
Fast, precise, responsive. Hover states trigger a "lock-on" animation. Everything feels like targeting a system.

**Animation:**
- Text: typewriter reveal on section entry
- Cards: slide-in from left with stagger
- Scanline: continuous slow scroll at 0.3% opacity

**Typography System:**
- Display: `Share Tech Mono` (monospace authority)
- Body: `IBM Plex Sans`
- Labels: `Courier Prime` uppercase

</text>
<probability>0.06</probability>
</response>

---

<response>
<text>

## Idea C — "Rustwood Sigil" (Mythic Dark Fantasy Portal) ← SELECTED

**Design Movement:** Dark Fantasy Codex / Mythic Emblem Page
**Probability:** 0.08

**Core Principles:**
1. The page IS the sigil — the logo is the centrepiece and every section radiates outward from it
2. Sections are "domains of mastery" — each card is a sealed tome or crest, not a flat box
3. Depth through layering: background star-field → mid-layer geometric grid → foreground content
4. Gold and electric blue are sacred colours used sparingly for maximum impact

**Color Philosophy:**
- Background: `#080b12` (abyss)
- Mid surface: `#0f1420` (deep slate)
- Card surface: `#141a28` (shadow steel)
- Gold: `#d4a843` (ancient gold)
- Blue glow: `#4fc3f7` (arcane light)
- Text primary: `#f0ead8` (vellum)
- Text muted: `#8a9ab5` (slate mist)
Emotional intent: ancient power made modern — the feeling of opening a legendary character sheet

**Layout Paradigm:**
- Hero: full-viewport, logo centred with radial glow, tagline below, four pillar badges (Body/Voice/Mind/Intelligence)
- Domains section: asymmetric 4-column grid that breaks to 2 on tablet — cards have varying heights
- Each domain card: icon top-left, title, 3 key skills listed, "Coming Soon" badge, hover glow
- Footer: forge-plate with social icons and copyright

**Signature Elements:**
1. Hexagonal/shield-shaped card borders echoing the logo's shield motif
2. Radial constellation/geometric grid as hero background (SVG, animated slow rotation)
3. Gold divider lines with a central diamond — used between every major section

**Interaction Philosophy:**
Reverent but responsive. Hovering a domain card feels like activating a rune — the border traces gold, a faint glow appears. Social icons pulse with their brand colour on hover.

**Animation:**
- Hero logo: entrance scale from 0.9 to 1.0 with opacity fade, 800ms ease-out
- Pillar badges: stagger-in left to right, 150ms apart
- Domain cards: scroll-triggered fade-up with stagger
- Card hover: gold border trace animation, translateY(-4px), box-shadow deepens
- Background grid: very slow 120s rotation loop

**Typography System:**
- Display: `Cinzel` (Roman authority, not decorative — for headings and the name)
- Sub-headings: `Cinzel` medium weight
- Body / card text: `Raleway` (elegant, slightly condensed, readable)
- Labels / badges: `Raleway` uppercase, wide letter-spacing
- Hierarchy: 56px hero name / 28px section title / 16px card title / 13px body

</text>
<probability>0.08</probability>
</response>

---

## Selected: **Idea C — "Rustwood Sigil"**

This is the strongest match for the logo and brand identity. The mythic codex aesthetic, radial hero layout, shield-motif cards, and gold/blue palette directly mirror the logo's visual language.
