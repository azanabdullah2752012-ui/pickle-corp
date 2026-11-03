# PRODUCT.md — Pickle Corp™

## Product Summary
Pickle Corp™ is an independent digital studio founded by Azan and Thanvi (14-year-old software engineers) with Viren heading marketing. The studio creates high-craft web applications and bespoke software systems, paid strictly in favors rather than fiat currency ($0.00 invoices).

## Target Users & Roles
- **Client / Challenger**: Startup founders, creative studios, and engineering teams facing complex technical or design problems who propose reciprocal favors in place of cash.
- **Studio Founder (Azan & Thanvi)**: Architects, writes, and deploys production systems, reviewing inbound proposals and updating the favor ledger.
- **Studio Marketer (Viren)**: Curates case studies, manages public narrative, and distributes physical business cards and barter markers.

## Jobs To Be Done
- When a client is stuck in an engineering or design pickle, they want Pickle Corp to build high-end software solutions so they can unblock their product without standard agency retainers.
- When Pickle Corp ships a verified build, the team logs a banked favor on the studio ledger to be redeemed in the future.

## Main Use Cases
- Interactive showcase of shipped projects and studio philosophy.
- Interactive Barter Ledger and Proposal workflow.
- High-fidelity 3D interactive Studio Business Card viewer with dual-face rotation, high-resolution rendering downloads, and print-ready Word (.docx) order generation.

## Non-Goals
- Conventional payment processing, credit card capture, invoicing, or fiat escrow.
- Multi-tenant client billing portals or timesheet tracking.
- Outsourced agency contractor matching.

## Data Boundaries & State Behavior
- **Local State**: Interactive card 3D rotation, blueprint spec vs live app modal toggle, audio play state, active navigation tabs.
- **Server State**: Static pre-rendered HTML/CSS/JS served edge-cached; future ledger synchronization via lightweight serverless backend.
- **Storage**: Client preferences stored in localStorage; zero sensitive credentials required.

## Core User Flows
1. **Explore Studio**: Visitor browses manifesto, 50/50 founder parity profiles, and interactive project cards.
2. **Review Barter Terms**: Visitor inspects the 3-phase barter protocol (Friction, Marker, Handover) and favor examples.
3. **Inspect Barter Marker**: Visitor interacts with the 3D double-sided Pickle Corp Business Card, downloads high-resolution PNGs, or exports the print order specification document.

## Feature List
- Kinetic asymmetric editorial landing experience with 60fps smooth scrolling.
- Custom 2D Kawaii Gumdrop companion with procedural physics, backflips, and cursor gaze tracking.
- Interactive 3D Business Card showcase with front/back flip controls and print asset generator.
- Blueprint Spec vs. Live Demo modal inspection switcher.

## Functional Requirements
- Complete content visibility on first paint without gating behind entrance animations.
- WCAG AA contrast compliance across all 10 custom brand palette tokens.
- Fully responsive across desktop (1440x900) and mobile (390x844) viewports.

## Acceptance Criteria
- **Given** a user navigates the site, **when** JavaScript is delayed or disabled, **then** primary studio content remains completely readable.
- **Given** the Business Card is clicked, **when** the user toggles flip, **then** the card smoothly executes a 180-degree 3D transform without clipping text or borders.

## Constraints
- Zero reliance on external heavy UI component libraries; pure lightweight native ES6 and modern CSS.
- High-performance 60fps animation budget with zero layout reads inside requestAnimationFrame loops.

## Risk Notes
- 3D CSS transforms can cause rendering artifact bugs on older mobile GPUs; mitigated with `backface-visibility: hidden` and `transform-style: preserve-3d`.

## AI-Agent Implementation Boundaries
- Never introduce generic corporate agency copy or stock SaaS icons.
- Preserve the 10-color warm palette tokens and founder parity narrative.
