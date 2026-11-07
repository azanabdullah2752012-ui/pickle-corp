# DESIGN.md — Pickle Corp Design System & Tokens

## 1. Locked Palette (Non-negotiable Tokens)
```css
:root {
  --bg-cream:       #fcfbfa; /* Warm linen paper canvas */
  --bg-dark:        #141210; /* Deep carbon black ink — matches logo wordmark */
  --c1-espresso:    #582f0e; /* Deep tactile espresso */
  --c2-chestnut:    #7f4f24; /* Warm chestnut */
  --c3-wood:        #936639; /* Muted wood */
  --c5-tan:         #b6ad90; /* Tactile tan */
  --c6-sage:        #656d4a; /* Signature pickle sage green */
  --c9-deep-forest: #333d29; /* Dark forest panel base */
}
```

## 2. Semantic Roles
* Primary headings and logo text: `var(--bg-dark)` (`#141210`).
* Headline accent word: `var(--c6-sage)` (`#656d4a`).
* Primary button background: `var(--c1-espresso)` (`#582f0e`), hover `var(--c9-deep-forest)` (`#333d29`).
* Outline buttons: `border-color: var(--c1-espresso); color: var(--c1-espresso);`.
* Selection: `background: var(--c1-espresso); color: var(--bg-cream);` (on dark: `background: var(--c6-sage); color: var(--bg-dark);`).

## 3. Typography Stack
* **Display**: `Cabinet Grotesk` (weights 700, 800, 900) — bold, experimental, confident.
* **Body & UI**: `Plus Jakarta Sans` (weights 400, 500, 600, 700) — legible, warm neutral.
* **Editorial Italic**: `Instrument Serif` (italic 400) — thoughtful pulling quotes and philosophy.
* **Tracking Rule**: Standard natural tracking (`-0.04em` on oversized display, `0` on metadata and labels). Wide-cap uppercase text is strictly banned.

## 4. Motion Guidelines
* 60fps frame budget, GPU-accelerated transforms (`transform`, `opacity`).
* 2-second entrance curtain: lifts upward with `cubic-bezier(0.76, 0, 0.24, 1)`.
* Fully interruptible on click, `Escape`, `Space`, or `Enter`.
* All non-essential motion disabled under `@media (prefers-reduced-motion: reduce)`.
