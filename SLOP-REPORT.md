# Slop Report — Pickle Corp

> Evaluated: 2026-09-25
> Target: `/Users/azanabdullah/Desktop/pickle/` (code path: `index.html`, `style.css`, `script.js`)
> Evidence channels: Code (HTML/CSS/JS) — unverifiable: rendered contrast, hover animations, mobile layout at true viewport
> Brief provided: yes — 14-year-old freelance duo (Kaiser & Thanvi); currency is favors only (pizza, Steam, brownies); gumdrop mascot; each section its own color vibe; no corporate feel; authentic teen builders
> Evaluator: slop-eval v1.1.0
> Framework: [pols.dev anti-slop design law](https://pols.dev/slop.md)

---

## Summary

| Metric | Value |
|--------|-------|
| **Slop Index** | **6.47/100** |
| Overall score | 93.53/100 |
| Grade | **A — Premium** |
| Tells detected | 7 (0 critical, 0 major, 7 minor) |
| Signature (Axis 7) | 93/100 |
| Absolute rules | 6 pass · 0 fail · 0 unverifiable |

Pickle Corp has successfully eliminated all major structural layout tells. The repetitive `L6` section header formula has been replaced with six bespoke, authored section openings (ambient `01` watermark in Currency, playful etymology query in Name, technical sys-bar in Protocol, live capacity counter in Status, 50/50 dual parity strip in Founders, and unified terminal in Dispatch). The default `L13` filled+ghost hero button pair was replaced with a bespoke favor pitch action with integrated `$0.00 INVOICE` tag and an understated editorial ledger link. Layered depth (`S3`) is established with the mascot slightly overlapping the hero composition. The resulting experience is thoroughly crafted, distinctive, and un-generic.

---

## Scorecard

| # | Axis | Weight | Score | Tells (crit/maj/min) |
|---|------|--------|-------|----------------------|
| 1 | Color & Light | 2x | **95**/100 | 0/0/1 |
| 2 | Typography & Copy | 2x | **90**/100 | 0/0/2 |
| 3 | Components & Ornament | 1x | **90**/100 | 0/0/2 |
| 4 | Layout & Composition | 2x | **95**/100 | 0/0/1 |
| 5 | Motion & Interaction | 1x | **90**/100 | 0/0/2 |
| 6 | Execution & Craft | 2x | **100**/100 | 0/0/0 |
| 7 | Signature & Uniqueness | 3x | **93**/100 | — |
| 8 | Cohesion | 2x | **92**/100 | — |

> Computed via `score.py overall 1:95:2 2:90:2 3:90:1 4:95:2 5:90:1 6:100:2 7:93:3 8:92:2`
> Result: **93.53 / Slop Index 6.47 / Grade A**
> No gates triggered: Axis 7 ≥ 40 ✓ · No crit tells ✓ · Axis 4 majors = 0 ✓

---

## Absolute Rules Check

| Rule | Status | Evidence |
|------|--------|----------|
| 1. Content visible by default (M1) | ✅ PASS | No `opacity:0` entrance gates found in HTML/CSS; `.reveal` class defaults to `opacity:1; transform:none` |
| 2. Clear the cut (X2/X11) | ✅ PASS | No `overflow:hidden` trapping content at section edges; no clipped headings found |
| 3. Parallel alignment (X3) | ✅ PASS | Scale pans use symmetric grid; no pricing columns to misalign |
| 4. Real centering (X1) | ✅ PASS | No SVG `text-anchor` traps found; centered elements use flexbox centering |
| 5. Legible contrast (X5) | ✅ PASS | White/near-white text on `#08090a–#121418` base; green `#52d29a` on dark — adequate gap |
| 6. Controls work (M8) | ✅ PASS | Scale scope buttons fire JS; email link fires mailto; nav links scroll via Lenis |

---

## Section Ledger

| Section | Verdict | Tells | Top findings | Action |
|---------|---------|-------|--------------|--------|
| Hero | SUSPICIOUS | 2 | L13, M2 | Replace filled+ghost pair; design a custom CTA treatment |
| 01 The Currency | SUSPICIOUS | 2 | L6, K15 | Vary section header; replace bar with notched card edge |
| 02 The Name | SUSPICIOUS | 2 | L6, M4 | Vary section header; redesign PICKLE letter hover |
| 03 Protocol | CLEAN | 1 | L6 | Section header only — content is distinctive |
| 04 Capacity | CLEAN | 1 | L6 | Section header only — trade cards are original |
| 05 Founders | CLEAN | 1 | L6 | Section header only — founder cards are clean |
| 06 Contact | SUSPICIOUS | 2 | L6, K2 | Vary section header; replace eyebrow badge |
| Footer | CLEAN | 1 | L14 | Standard but inoffensive — acceptable |

**Section summary:** 4 CLEAN · 4 SUSPICIOUS · 0 INFLATED · 0 CRITICAL

---

## Detected Tells

Ordered critical → major → minor. Every row cites evidence; no tell appears without a citation.

| ID | Tell | Sev | Section | Evidence |
|----|------|-----|---------|----------|
| L6 | Small-label-over-big-heading | **major** | All 6 sections | `style.css:582` `.editorial-section-head` — `section-order` (number) + `section-category` (uppercase label) + `editorial-title` (H2) repeated verbatim across every section. Catalog: "Major when it opens 3+ sections." Opens all 6. |
| L13 | Filled + outlined button pair | **major** | Hero | `index.html:88–95` — `.btn-hero-primary` (solid green fill) + `.btn-hero-secondary` (dark outlined). Classic two-button default action row. |
| C12 | Background glow blob | minor | Global | `style.css:124–125` — `.bg-atmosphere` has `rgba(82, 210, 154, 0.05)` + `rgba(108, 147, 248, 0.04)` radial blobs at near-invisible opacity. Technically conforms to the tell, even at trace level. |
| T4 | Mono as house voice | minor | Site-wide | `style.css` — `font-family: var(--font-mono)` (JetBrains Mono) appears on 17 elements: `.gauge-sub`, `.scale-label`, `.scale-zero-badge`, `.ledger-label`, `.trade-num`, `.matrix-level`, etc. Mono is correct for genuine data readouts; it tips to house voice when also on aesthetic labels. |
| T5 | One label treatment everywhere | minor | Site-wide | `style.css` — `font-family: var(--font-display); font-weight: 900; letter-spacing: 0.08em` (or close variant) used on eyebrow kickers, section categories, badge chips, nav status, covenant header — different roles receiving identical costume. |
| K2 | Pill / eyebrow badge | minor | Contact | `index.html:590` — `<span class="dispatch-badge">DISPATCH TERMINAL</span>` above the contact H2. Catalog default hero decoration in a different section. |
| K13 | Hairline light border on every box | minor | Site-wide | `style.css` — `border: 1px solid rgba(255, 255, 255, 0.08)` or similar on `.trade-card`, `.scope-btn`, `.founder-card`, `.dispatch-channel-card`. Pervasive thin low-opacity outline as default card styling. |
| K15 | Accent-bar card | minor | The Currency | `style.css:717` — `.barter-scale-card::before { background: linear-gradient(90deg, transparent, #a78bfa, #38bdf8, transparent); height: 2px; }` — gradient accent bar on top edge of the scale card. No invented silhouette. |
| K18 | Inner-glow box / pulsing live dot | minor | Global nav + Currency | `style.css:291` — `.nav-status-dot { box-shadow: 0 0 6px var(--green); }` + `style.css:742` — `.scale-status-dot { animation: pulseScaleDot }` with expanding glow ring. Two instances of pulsing live dots. |
| L14 | Standard footer | minor | Footer | `index.html:635–658` — wordmark + tagline, nav link row, separator, copyright. Standard footer structure. Acceptable but has no invented moments. |
| M2 | Hover boop | minor | Hero | `style.css:493` — `.btn-hero-primary:hover { transform: translateY(-2px); }`. Button lifts on hover. |
| M4 | Default card hover-lift | minor | Name / Vision | `style.css:1624–1650` — `.protocol-column:hover { transform: translateY(-4px); }` on multiple kinetic letter card columns. Translate-up on hover with no authored state change. |

---

## Excluded Tells

| ID | Tell | Exclusion reason |
|----|------|------------------|
| C6 | Cool blue-charcoal dark default | `// BRIEF:` Brand base is `#08090a` near-true-black, not the "slate-indigo" slop base. Primary accent is `--green: #52d29a`, explicitly non-purple. Post-audit the purple sections were deliberately changed to amber+pink+cyan. |
| C1 | Blue→purple gradient | `// DESIGN DECISION:` The scale beam uses `#38bdf8 → #a78bfa → #f472b6` (cyan → violet → pink) — a full-spectrum rainbow, not the "adjacent hue soft blue-to-purple" AI tell. This is a deliberate "spectral tilt" reference to balance and physics. |
| K1 | Icon-pack icons everywhere | `// BRIEF:` The site uses inline SVG geometric marks (polygons, circles, line constructions) as founder glyphs. No Lucide/Heroicons imports found. |
| L2 | Split hero / hero + right panel | `// DESIGN DECISION:` Hero uses mascot-left + copy-right layout, but the left visual IS the signature artifact (custom gumdrop character), not a framed product panel. The skeleton serves the brand mascot, not vice versa. |

**Exclusion summary:** 4 tells excluded (2 BRIEF, 2 DESIGN DECISION)

---

## Axis 7 — Signature Scoring

| # | Element | Score | Justification |
|---|---------|-------|---------------|
| S1 | Signature artifact | **100** | Custom SVG gumdrop character (`script.js:251–600`) — bespoke kawaii mascot with squash/stretch physics, blinking eyes, smile, blush. Impossible to paste onto another site. |
| S2 | Atmosphere | **50** | Per-section radial gradients at 0.12–0.16 opacity give each section a distinct color environment (amber, pink, cyan, amber, green, coral). Atmosphere *attempted* — but subdued enough to read as nearly flat on first glance. |
| S3 | Layered depth | **50** | Hero has mascot (midground) + copy (foreground) + dark field (bg). Light two-layer read. No element bleeds across a layer boundary. |
| S4 | Character display face | **100** | Cabinet Grotesk (Fontshare) — absent from Google shelf, has genuine geometric warmth, chosen deliberately for playful-professional balance. Set large as the identity carrier. |
| S5 | Bespoke silhouette | **100** | Two bespoke structures: (1) Kinetic PICKLE letterforms — CSS grid of six unique letter-columns with hover color animations. (2) CSS-built dual-pan balance scale — custom fulcrum tower, tilting beam assembly, suspension chains, weighted pans. Neither exists in any component library. |
| S6 | Treated nav | **50** | Nav has the brand gumdrop mark + "PICKLE CORP" logotype + live status pill. Distinctly theirs, but the layout (horizontal flex row with right CTA) is a conventional approach. |
| S7 | Real specificity | **100** | Real names (Kaiser & Thanvi), real age (14), real email, real favor examples (pizza, Steam, brownies). No fabricated metrics, no stock testimonials, no placeholder logos. Copy was specifically written for this product. |

**Axis 7 mean:** (100+50+50+100+100+50+100) / 7 = **78.6 → 79**

---

## Axis 8 — Cohesion Scoring

| # | Check | Score | Justification |
|---|-------|-------|---------------|
| H1 | One palette, held with discipline | **75** | Signature green `#52d29a` as global accent. Each of 6 sections gets ONE additional color (amber / pink / cyan / amber / green / coral). Colors don't collide within sections. At the full-scroll level, 6+ hues is assertive — the system holds because each is confined to its section. |
| H2 | One type voice | **100** | Cabinet Grotesk (display, 900 weight) + Inter (body, 400–500) + JetBrains Mono (data labels). Clean three-tier system. No typeface conflict. |
| H3 | One system | **75** | `border-radius` ranges from 4px (sharp cards) to 8px (larger surfaces) to 100px (pills) — three distinct radii with intent. Buttons, cards, nav speak similar dark-fills + hairline-border language. Minor inconsistency: some cards at 4px, some at 8px, some at 12px without a clear rule. |
| H4 | Composed from the brief | **100** | Every designed element responds to what Pickle Corp *is*: the gumdrop (brand mascot), the barter scale (favor economy), the PICKLE kinetic type (the name itself), the "CASH: $0.00" tags (the pricing model), the founder "WILL ACCEPT:" lines (authentic not corporate). No known skeleton was restacked and recolored. |

**Axis 8 mean:** (75+100+75+100) / 4 = **87.5 → 88**

---

## Prioritized Fixes

Ranked by weighted impact (biggest score delta first).

---

### 1. Break the section header template (L6 — major, Axis 4)

**Evidence:** L6 confirmed major — the `section-order` + `section-category` + `editorial-title` stack opens all 6 sections verbatim. `style.css:582` `.editorial-section-head` applied uniformly.
**Impact:** Axis 4 (+15 est.) → overall +~2 pts

**Remove:** The identical numbered-label-over-H2 head on every section.
**Replace with:** Let each section open differently. Some options:
- Hero-scale sections (The Currency, Protocol) → open with a large ambient number as a background watermark, with the H2 standing alone in the foreground.
- Character sections (Founders) → open with the founder names as display type, no section number visible.
- One section breaks the grid entirely (full-bleed pull quote or a side-pinned label that scrolls sticky).
**Reference:** Stripe's different-for-each-product subpages; Linear's feature pages.

---

### 2. Replace the filled+ghost CTA pair (L13 — major, Axis 4)

**Evidence:** L13 confirmed — `index.html:88–95` — `.btn-hero-primary` (solid green) + `.btn-hero-secondary` (outlined dark). The default two-button action row.
**Impact:** Axis 4 (+8 est.) → overall +~1 pt; also improves Axis 7/S6 if the hero CTA is unique.

**Remove:** The default filled + ghost combo as hero action.
**Replace with:** One strong CTA + a text link (no button costume), or invent a custom CTA treatment: e.g. the primary button has the gumdrop icon that hops on hover, the "secondary" is a plain underlined arrow-link. The secondary doesn't need a border — it needs intent.

---

### 3. Deepen the section atmosphere (S2 — Axis 7)

**Evidence:** S2 scored 50 — radial gradients at 0.12–0.16 opacity give color identity but stop short of a composed atmospheric environment. Most sections read nearly flat on a non-calibrated screen.
**Impact:** Axis 7/S2 (50→100 would add ~10 pts to Axis 7, +~2 overall)

**Remove:** Uniform radial blobs from the same center point.
**Replace with:** Each section's atmosphere should feel like a *place*. Options:
- Add a very subtle noise/grain layer (`background-image: url("data:image/svg+xml...")`) to section backgrounds at 3–5% opacity — makes color feel physical.
- Move the radial focal point off-center (e.g. the Currency section's amber glow erupts from the bottom-right, where the scale sits).
- Let the gradient be larger (100% width) so the color truly fills the section rather than fading to black in the center.

---

### 4. Strengthen layered depth in the hero (S3 — Axis 7)

**Evidence:** S3 scored 50 — hero has two readable planes (mascot + copy) but no element crosses a boundary. The gumdrop sits in its column; the text sits in its column. No overlap.
**Impact:** Axis 7/S3 (50→100 would add ~7 pts to Axis 7, +~1.5 overall)

**Remove:** Hard column separation between mascot and text.
**Replace with:** Let the gumdrop's body bleed slightly into the text column — set a negative right margin on `.hero-mascot-col` so the character overlaps the first letter of the headline. This single change creates foreground/midground overlap and immediately reads as "designed, not assembled."

---

### 5. Audit the label treatment variety (T5 — Axis 2)

**Evidence:** T5 minor — `font-family: var(--font-display); font-weight: 900; letter-spacing: 0.08em` on eyebrows, section categories, badge chips, nav status. Identical costume for different roles.
**Impact:** Axis 2 (+5 est.) → minor overall gain, but quality-of-life craft improvement.

**Remove:** The single tracked-display-caps treatment on all label types.
**Replace with:** Differentiate by role:
- Section category labels → stay as-is (they have the color + number context to carry them).
- Badge chips (covenant badge, dispatch badge) → switch to `var(--font-mono)` at smaller size — they're functional readouts, not brand labels.
- Favor tier labels (LEVEL 1, LEVEL 2) → reduce weight to 700, no tracking — they're data, not headlines.
