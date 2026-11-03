# DESIGN.md — Pickle Corp™

## Design Read
Reading this as an independent, high-craft studio portfolio and interactive barter marker system for technical founders and engineering leaders. The visual language direction is Warm Tactile Editorial with kinetic interaction, utilizing a bespoke 10-color earth palette, asymmetric typography, and high-DPI canvas/3D artifacts.

## Taste Controls
- DESIGN_VARIANCE: 8
- MOTION_INTENSITY: 6
- VISUAL_DENSITY: 5

## Design System Decision
- Chosen foundation: Native semantic HTML5, modern CSS3 custom properties, and native ES6 with Tailwind compatibility.
- Zero generic CSS frameworks; all design decisions are codified via durable tokens defined in root stylesheet variables.

## Anti-AI Slop Prohibitions (Zero Tolerance)
- Generic magical starburst icons and cognitive buzzword metaphors are strictly forbidden.
- Pictographic character glyphs are strictly forbidden in UI components, buttons, and system controls; only authored vector SVGs or clean typographical marks are allowed.
- No generic AI indigo-purple gradients or centered hero card stacks.

## Color Tokens & 60-30-10 Palette
- 60% Dominant Base: Cream canvas `--bg-cream` (`#fcfbfa`) / Obsidian dark base `--bg-dark` (`#141210`).
- 30% Structural Panels & Borders: Warm earth tones `--c1-espresso` (`#582f0e`), `--c2-chestnut` (`#7f4f24`), `--c3-wood` (`#936639`), `--c5-tan` (`#b6ad90`), and `--c6-sage` (`#656d4a`).
- 10% High-Impact Accent: Deep forest `--c9-deep-forest` (`#333d29`) reserved for primary action triggers and active state telemetry.

## Accessibility & Contrast (Deterministic Math)
- AI models cannot visually calculate WCAG contrast. Follow mathematical lightness deltas.
- Light Backgrounds (50-200): Text MUST be 800-950.
- Dark Backgrounds (700-950): Text MUST be 50-200 or white.
- Mid-tones (300-600): AVOID placing text on mid-tones. Use black or white if necessary.
- Buttons: Never use white text on backgrounds lighter than 600.

## Focus Management
- MUST use `focus-visible:ring-2 focus-visible:ring-offset-2`. NEVER use `outline-none` without a replacement.
- Trap focus while any modal or dialog is open.

## Typography Scale, Line-Height & Readability
- Display Typeface: Sentient & Clash Display for editorial headlines; personality-rich serif and grotesque pairings.
- Body Typeface: Inter / System Clean Sans for microcopy; Courier New for code and ledger hashes.
- Headings: Compact 1.1 to 1.2 line-height with optical kerning.
- Body Text: Relaxed 1.5 to 1.65 line-height to guarantee high readability.
- Reading Measure: Constrained between 45 and 75 characters per line (`max-w-prose`) to prevent visual fatigue.

## Responsive Behavior (Deterministic)
- Mobile (<768px): Use `flex-col`, `w-full`, and `p-4` as defaults. Avoid raw `height: 100vh` on mobile; use `min-height: 100dvh` for safe viewport handling.
- Tablet (`md`: 768px): Use `md:grid-cols-2`, `md:flex-row`, and `md:p-6`.

## Form & Input Behavior
- Validation: Validate on blur/submit with explicit submission state.
- Error copy: Place error copy directly under the input field with high-contrast text.

## Modal Viewport Governance & Overlay Contract
- Viewport contract: All modals, preview drawers, and popups must observe an explicit viewport contract: maximum width `min(90vw, 760px)` and maximum height `90vh`, maintaining a minimum 24px safe margin from viewport edges without clipping.
- Scrollable body pane: The outer modal dialog shell uses intentional clip `overflow: hidden` to mask layout bugs. Long overlay content uses a thin scrollbar with internal scroll behavior: `overflow-y-auto` and `max-height: calc(90vh - 120px)`.
- Viewport QA proof: Overlays are verified across mobile (390x844), tablet (768x1024), and desktop (1440x900) viewports with no viewport overflow.

## Visual Layering Reasoning & Stacking Plan
- Stacking plan: Placement plan for all layered UI elements.
- Stacking Context Audit: Audit ancestors for transform, opacity, filter, contain, isolation, will-change, overflow clipping, fixed parent, and sticky parent.
- Layer scale: Named z-index scale tokens:
  - `layer-base`: `z-index: 0`
  - `layer-content`: `z-index: 10`
  - `layer-sticky-nav`: `z-index: 100`
  - `layer-backdrop`: `z-index: 500`
  - `layer-modal`: `z-index: 600`
  - `layer-toast`: `z-index: 1000`
- Portal policy: Overlays render in document body portal root or native dialog top layer.
- Conflict matrix:
  - modal vs toast: Toast renders above modal (`z-index: 1000`).
  - modal vs drawer: Topmost modal captures focus and makes underlying layers inert.

## Authentication State Handling
- Pickle Corp is a public, open-access studio portfolio and barter showcase. All routes and features are stateless and publicly readable with zero user login, token authentication, or session management required.

## Preflight Check
- Design read, dials, and responsive rules confirmed.
- Deterministic contrast math and focus rings verified.
- Safe viewport and thin scrollbar overflow confirmed.

## Agent Handoff Instructions
- Inspect `PRODUCT.md` and `DESIGN.md` before coding.
- Verify responsive mobile breakpoints and accessibility after edits.
