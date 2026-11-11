---
name: aetherui-design-system
description: Enterprise AI-First UI Design System & Component Library (@aether-ui/react). Use this skill whenever designing, building, or refactoring React UI components, AI agent interfaces, dashboards, or marketing blocks to match the AetherUI (Classic Double-Tray Tactile & Clean Subpixel Precision) design language, or when consuming the 183 built-in components from @aether-ui/react.
---

# AetherUI Design System & Component Library Skill (`@aether-ui/react`)

Use this skill to build interfaces matching the **AetherUI** design language or to integrate any of the **183 production elements** (99 components with 104 dual-style Clean variants, 39 full screens, 11 blocks, 26 interactive illustrations, 8 motion primitives, 287 public component variants total) included in this repository.

## 1. Key Reference Files in This Workspace

- **Design Language Whitepaper**: `design-system/README.md`
- **9 AI-Agent UI Patterns**: `design-system/guidelines/AI-AGENT-UI-PATTERNS.md`
- **Design Tokens (W3C JSON)**: `design-system/tokens/design-tokens.json`
- **Core CSS Custom Properties & Primitives**: `design-system/tokens/variables.css`
- **Tailwind CSS Preset**: `design-system/tokens/tailwind.preset.js`
- **Brand Configuration**: `src/brand.config.js` (or run `npm run rebrand -- --name "..."`)
- **Component Barrel Exports**:
  - Classic Style (183 items): `src/index.js` (`@aether-ui/react`)
  - Clean Style (94 items): `src/clean.js` (`@aether-ui/react/clean`)
  - Individual Tree-Shakeable Modules: `src/components/ui/<slug>.js` & `.d.ts`

## 2. Core Visual Rules (Quick Reference)

1. **4-Tier Luminance Hierarchy**:
   - Light: Canvas `#f5f5f5` (`--bg`) → Panel `#fcfcfc` (`--panel`) → Stage/Well `#fafafa` (`--preview`) → Card `#ffffff` (`--card`).
   - Dark (`[data-theme="dark"]` / `.dark`): Canvas `#0c0c0d` → Panel `#121213` → Card `#19191b` → Stage/Well `#1f1f21`.
2. **Dual Look Architecture**:
   - **Classic**: Outer sunken tray (`#f0f0f0` / `#232326`, `padding: 4px`, `border-radius: 16px`) + inner card (`#ffffff` / `#19191b`, `border-radius: 12px`, `box-shadow: 0 0 0 1px #ececec, 0 1px 2px rgba(0,0,0,0.04)`), `14px/20px` font, `#2f6bff` accent.
   - **Clean**: Single elevated surface (`border-radius: 12px`, `box-shadow: 0 0 0 0.5px rgba(0,0,0,0.06), 0 1px 1px -1px rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.05)`), translucent ink (`88%` / `61%` / `45%` / `27%`), `13px/20px` font, `#0060e2` accent.
3. **Concentric Border-Radius Formula**:
   Always compute `R_inner = max(4px, R_outer - Padding)`.
4. **Numeric Discipline**:
   Apply `font-variant-numeric: tabular-nums` to all clocks, counters, token counts, and metrics.
5. **Physics & Motion**:
   Use `--ease-out: cubic-bezier(0.22, 1, 0.36, 1)` and snappy `cubic-bezier(0.32, 0.72, 0.24, 1)` with Blur Crossfade state transitions and `@media (prefers-reduced-motion: reduce)` fallbacks.
