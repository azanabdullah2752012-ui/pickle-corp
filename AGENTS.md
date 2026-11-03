# AGENTS.md — Agent Engineering Protocols

## Read This First
Before modifying or writing code, thoroughly inspect `PRODUCT.md`, `DESIGN.md`, `index.html`, `style.css`, and `script.js`.

## Do Not Break Rules
- Preserve existing behavior and do not break working user flows.
- Do not delete routes, state, styles, tests, or data flows unless explicitly requested.

## Root Cause Mode
- When resolving issues or errors, execute this 4-step protocol before making edits:
  1. **Reproduce & Isolate**: Replicate the exact bug or failure state with minimal test inputs.
  2. **Separate Symptoms from Cause**: Distinguish visible symptoms from the fundamental underlying mechanism.
  3. **Smallest Root Fix**: Implement the cleanest, most localized fix targeting the primary cause rather than piling workarounds on top.
  4. **Verification Proof**: Prove the fix with automated scans and visual browser validation.

## Install Agent Harness
- The verified developer and testing toolchain for this project consists of:
  - `unslop` / `unslop-preflight`: UI design quality gates, accessibility verification, and design-token compliance.
  - `unslop-code`: AST code clone detection, duplicate detector scans, and AI code smells.
  - `Node.js` & `npm`: Runtime environment for linting and build automation.
  - Headless Chrome CDP / DevTools: Live DOM and responsive viewport verification.
- **Bulk Guard**: Only install the tools this project actually needs. Avoid bulk installs that add unnecessary context overhead.
- **Priority**: High priority for linting and verification; optional for external heavy frameworks.
- **Trust Note**: Verify package checksums and version tags before installing.

## Framework Harness Recommendations
- **react-harness-recommendation**: This project currently uses high-performance native vanilla HTML5, CSS3, and ES6. If portions are migrated to React or Next.js in the future, implement a react error boundary and runtime boundary to prevent uncaught exceptions.
- **code-review-harness-recommendation**: For migrations or code changes, use a duplicate detector and duplication scan via `unslop-code .` alongside review graph analysis.

## Verification Checklist
- [ ] Build passes with zero errors.
- [ ] Tests pass cleanly.
- [ ] Main flows checked on desktop and mobile.
- [ ] Mobile behavior checked with no horizontal overflow.
- [ ] Accessibility basics and keyboard focus checked.
- [ ] Run `unslop audit` in the terminal and verify 0 errors.
