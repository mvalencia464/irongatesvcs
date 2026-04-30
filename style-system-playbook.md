# Style System Playbook (Spa-Astro Aesthetic)

This playbook documents the current visual language of the site and gives you a repeatable system to recreate the same look across new pages, components, and future projects.

Use it as a source of truth for:
- color and typography tokens
- spacing and layout rhythm
- component styling patterns
- motion and interaction behavior
- responsive adaptations
- controlled style variations

---

## 1) Design DNA Summary

The visual identity is **premium coastal luxury** with these core traits:
- **Dark, layered surfaces** (`deep`, `surface`, `panel`) for cinematic contrast.
- **Cool cyan accents** for action and emphasis.
- **Gold highlights** for trust, ratings, and warranty prestige.
- **Display + utility typography pairing**: expressive condensed headline face, highly readable body face.
- **Soft-glass + subtle border framing**: low-opacity borders, blur, overlays.
- **High visual hierarchy**: oversized headlines, compact metadata, strong CTA emphasis.
- **Micro-motion polish**: slight hover lifts, image zoom, shimmer accents, fade-up entrances.

---

## 2) Foundation Tokens

### 2.1 Color Palette

From `src/styles/home/base.css` and `src/styles/mystique.css`:

```css
:root {
  --deep:    #060d14;
  --surface: #0c1820;
  --panel:   #111e28;
  --panel2:  #162432; /* used on product/review contexts */
  --border:  rgba(255,255,255,0.07);
  --accent:  #2196c4;
  --accent2: #5bc4e8;
  --gold:    #c8922a;
  --text:    #e8eef2;
  --muted:   rgba(232,238,242,0.55);
}
```

### 2.2 Typography

Loaded in `src/layouts/BaseLayout.astro`:
- **Display:** `Bebas Neue` (hero headings, section headings, key numbers, product names)
- **Body/UI:** `DM Sans` (navigation, paragraph copy, metadata, form labels, buttons)

Guideline:
- Keep body weight mostly `300-500`
- Reserve `600+` for utility emphasis and CTA text
- Keep uppercase utility text at high tracking (`0.06em` to `0.22em`)

### 2.3 Tone by Token Role

- `--deep`: page canvas
- `--surface`: section banding / strips
- `--panel` / `--panel2`: cards and grouped containers
- `--accent` / `--accent2`: action + interactive highlights
- `--gold`: social proof and premium badges
- `--muted`: long-form or secondary copy

---

## 3) Spacing and Layout Rhythm

### 3.1 Section Rhythm

Current spacing patterns:
- Desktop sections: `padding: 96px 48px`
- Mid/compact sections: `72px` vertical
- Mobile sections: `72px 24px`

Rule:
- Big section transitions: `72-96px`
- Internal group spacing: `24-48px`
- Small UI spacing: `8-16px`

### 3.2 Container Width

Common max widths:
- `1280px` (homepage sections)
- `1400px` (product page canvases)

Use centered wrappers:
```css
.section-inner { max-width: 1280px; margin: 0 auto; }
```

### 3.3 Grid Patterns in Use

- Card grids: 3 or 4 columns desktop
- Asymmetric collection hero tile pattern (featured card spans more area)
- Tablet collapse: 2 columns
- Mobile collapse: 1 column

---

## 4) Typographic Scale and Hierarchy

### 4.1 Headings

- Hero H1: `clamp(72px, 10vw, 140px)` on home
- Section H2: `clamp(48px, 6vw, 80px)` home; lower on product pages
- Product name: `clamp(56px, 7vw, 88px)`

### 4.2 Supporting Text

- Section copy: `16-18px`, line-height around `1.65-1.75`, weight `300`
- Metadata/labels: `10-13px`, uppercase, strong tracking
- Dense utility values: `12-14px`

### 4.3 Signature Text Motifs

- Eyebrow with left line:
  - uppercase
  - high letter spacing
  - accent2 color
- Hero highlight words use animated gradient shimmer clipping

---

## 5) Component Styling Recipes

### 5.1 Navigation

Visual pattern:
- Fixed nav over hero
- Transparent initially, then blurred dark background on scroll
- Subtle bottom border once scrolled

Recipe:
- Use muted nav links by default
- Hover to full text color
- Keep CTA solid accent button with slight hover lift

### 5.2 Hero

Required ingredients:
- Full-height background image
- Dark cinematic gradient overlay
- One strong accent animation (shimmer or vertical line pulse)
- Large display heading with max line length ~10ch
- CTA pair (primary + secondary)
- Trust strip immediately below

### 5.3 Cards (Collections / Reviews / Services)

Shared card language:
- `panel` background
- subtle `border`
- `8-12px` radius
- hover movement `translateY(-2px to -4px)`
- optional accent top-line reveal or image zoom

### 5.4 Product Gallery

Patterns to preserve:
- Sticky gallery on desktop
- 1:1 image frame
- Hover zoom + soft transition
- Circular nav controls with blur/dim background
- Thumbnail rail with active border accent

### 5.5 CTAs

Primary:
- Solid accent fill, white text, uppercase utility style
- hover: brighter accent + shadow + slight lift

Secondary:
- Transparent background
- border-only with gentle accent hover tint

### 5.6 Forms

Form visuals:
- place form in panel card
- low-contrast field backgrounds (`surface`)
- thin border + readable focus state
- uppercase compact labels

---

## 6) Motion System

### 6.1 Motion Principles

- Subtle, polished, never bouncy
- Most transitions in `150ms-400ms`
- Entrance animations reserved for major first-view content
- Hover effects should signal depth, not novelty

### 6.2 Existing Animation Patterns

- `fadeUp`: entry reveal for staged content
- `shimmer`: moving gradient highlight for hero emphasis
- `scrollLine`: decorative vertical flow cue
- image scale on hover: `1.04 - 1.06`

### 6.3 Easing and Transitions

Use:
- `cubic-bezier(.16,1,.3,1)` for premium easing feel
- simple ease for color/border transitions

### 6.4 Accessibility Motion Rule

Keep or expand reduced-motion treatment:
```css
@media (prefers-reduced-motion: reduce) {
  /* remove transforms/transitions for decorative motion */
}
```

---

## 7) Interaction States

Apply consistent state mapping:
- **Default:** muted text, low-emphasis borders
- **Hover:** brighter text/accent border, slight translateY
- **Active/current:** accent underline or border
- **Focus-visible:** clear high-contrast ring for keyboard users
- **Disabled:** lower opacity + remove hover transforms

Do not use saturated pure-white borders unless necessary for contrast.

---

## 8) Responsive Behavior Blueprint

### 8.1 Breakpoints

Current breakpoints:
- `1024px` (tablet)
- `768px` (mobile)
- `1100px` (product layout collapse on detail page)

### 8.2 Mobile Strategy

- Collapse nav links into hamburger
- Reduce side paddings (`48px -> 24px/20px`)
- Convert complex multi-column grids to 1 column
- Show sticky mobile CTA bar
- Increase tap-target reliability on controls

### 8.3 Content Priority

On mobile:
1. headline + key CTA
2. core product visual
3. trust signals
4. deep specs and supporting cards

---

## 9) Reusable Utility Classes You Can Add

If you want easier scaling, consider adding utility classes (or CSS custom props):

- `.u-eyebrow`
- `.u-section-title`
- `.u-muted`
- `.u-card`
- `.u-glass-border`
- `.u-hover-lift`
- `.u-grid-3`, `.u-grid-4`, `.u-grid-2-md`, `.u-grid-1-sm`

This keeps consistency while speeding up new page creation.

---

## 10) Variation Guide (Same Family, Different Flavor)

The key to “different but still yours” is to keep layout rhythm + typographic structure, then vary one or two axes at a time.

### Variation A: Luxe Midnight (closest to current)
- Keep dark foundation
- Shift accent toward richer cyan/teal
- Keep gold untouched
- Increase blur and glow slightly

Good for: premium catalogs, high-ticket service offerings.

### Variation B: Marine Graphite
- Keep deep/surface contrast
- Move accent to desaturated blue-gray + electric highlight
- Slightly reduce neon intensity
- Use more neutral image overlays

Good for: more “technical luxury” brand voice.

### Variation C: Warm Coastal Night
- Keep dark base but add warm undertones in panels
- Accent can shift from cyan to sea-glass aqua
- Gold becomes slightly warmer/brighter
- Soften shadows and border contrast

Good for: hospitality or lifestyle-first storytelling pages.

### Variation D: Light Luxe Adaptation
- Invert surfaces for light mode (off-white base + charcoal text)
- Keep accent and gold identity
- Preserve typography, spacing, and card geometry
- Replace dark overlays with soft gradient veils

Good for: campaign landing pages or accessibility-first variants.

---

## 11) Safe vs Risky Changes

### Safe (low risk to brand feel)
- Swap hero images
- Adjust card content density
- Tweak accent saturation by ±10-15%
- Change section order
- Introduce new card types using existing tokens

### Risky (can break the aesthetic quickly)
- Replacing display font with rounded/casual type
- Removing muted text hierarchy
- Overusing bright accent on large surfaces
- Increasing border opacity globally
- Using overly playful motion curves or long animations

---

## 12) Implementation Checklist for New Pages

When creating a new page in this style:

1. Import the same font stack (`Bebas Neue` + `DM Sans`).
2. Reuse token palette (`deep/surface/panel/accent/gold/text/muted`).
3. Start with a high-contrast hero and restrained overlay.
4. Use eyebrow + display heading + muted paragraph pattern.
5. Build sections in 96/72 spacing rhythm.
6. Use panel cards with thin translucent borders.
7. Add only subtle hover elevation.
8. Keep responsive collapse predictable at tablet/mobile breakpoints.
9. Add reduced-motion fallback.
10. Audit contrast and keyboard focus states.

---

## 13) Optional Next Improvements

To make future recreation even faster, consider:
- moving all shared tokens into a single `src/styles/tokens.css`
- extracting buttons/cards/nav into reusable component classes
- codifying spacing and type scale as custom properties
- adding a simple visual QA checklist (hover, focus, mobile, contrast)

---

## 14) Quick “Copy This Vibe” Starter Snippet

```css
:root {
  --deep: #060d14;
  --surface: #0c1820;
  --panel: #111e28;
  --border: rgba(255,255,255,0.07);
  --accent: #2196c4;
  --accent2: #5bc4e8;
  --gold: #c8922a;
  --text: #e8eef2;
  --muted: rgba(232,238,242,0.55);
}

body {
  background: var(--deep);
  color: var(--text);
  font-family: 'DM Sans', sans-serif;
}

.section-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(48px, 6vw, 80px);
  line-height: 0.95;
  letter-spacing: 0.01em;
}

.panel-card {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 10px;
}

.btn-primary {
  background: var(--accent);
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  transition: transform 0.15s, box-shadow 0.2s;
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(33,150,196,0.35);
}
```

---

If you want, I can also create a second file with **ready-to-paste alternate token sets** (A/B/C/D themes) that map 1:1 to your current CSS variable names, so you can swap looks in minutes.
