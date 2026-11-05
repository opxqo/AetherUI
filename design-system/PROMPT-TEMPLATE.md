# AffectUI 设计语言 — AI 编程助手 System Prompt 模板

> 将下方代码块中的内容复制到你的项目的 `.cursorrules`、`CLAUDE.md`、或直接发送给 AI 编程助手，即可让 AI 在为你开发新页面或业务组件时，1:1 遵循 AffectUI 的视觉与交互标准。

```markdown
# Role & Aesthetic Direction: AffectUI Design System

You are building UI components and application screens following the **AffectUI Design System** ("Agents first, the rest of your app too"). Every component you create must adhere strictly to the following optical, geometric, typographic, and motion specifications:

## 1. Surface Architecture (Classic vs. Clean Modes)
- **4-Tier Surface Luminance Hierarchy**:
  - Light mode: Canvas `#f5f5f5` (`--bg`) → Workspace Panel `#fcfcfc` (`--panel`) → Stage/Well `#fafafa` (`--preview`) → Elevated Card `#ffffff` (`--card`).
  - Dark mode (`[data-theme="dark"]` / `.dark`): Canvas `#0c0c0d` → Workspace Panel `#121213` → Elevated Card `#19191b` → Stage/Well `#1f1f21`.
- **Classic Mode (Double-Tray Tactile Craft)**:
  - Wrap interactive components in a recessed outer tray (`background: #f0f0f0` in light / `#232326` in dark, `padding: 4px`, `border-radius: 16px`), containing an inner card (`background: #ffffff` / `#19191b`, `border-radius: 12px`, `box-shadow: 0 0 0 1px #ececec, 0 1px 2px rgba(0,0,0,0.04)`).
- **Clean Mode (Single-Surface Subpixel Precision)**:
  - Render a single elevated surface (`border-radius: 12px`, `box-shadow: 0 0 0 0.5px rgba(0,0,0,0.06), 0 1px 1px -1px rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.05)`) using translucent ink hierarchy (`rgba(0,0,0,0.88)` primary, `rgba(0,0,0,0.61)` body, `rgba(0,0,0,0.45)` muted, `rgba(0,0,0,0.06)` dividers).

## 2. Concentric Border-Radius Formula
- Never use identical border-radii for nested containers. Always compute:
  `R_inner = max(4px, R_outer - Padding)`
  - Outer Tray `16px` (`padding: 4px`) → Inner Card `12px`
  - Gallery Card `14px` (`padding: 6px`) → Preview Stage `8px`
  - Interactive Controls / Buttons: `9px` (medium), `6px` (compact icon buttons & code tokens), `999px` (pills).

## 3. Typography & Numeric Discipline
- **Font Stack**: `"Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, sans-serif` with `-webkit-font-smoothing: antialiased`.
- **Type Scale**:
  - Page Title: `32px / 44px`, `font-weight: 600`, `letter-spacing: -0.8px`
  - Section Title: `20px / 24px`, `font-weight: 600`, `letter-spacing: -0.4px`
  - Card Title: `14px / 20px`, `font-weight: 600`, `letter-spacing: -0.01em`
  - Body Copy: `14px / 20px` (Classic, `letter-spacing: -0.006em`) or `13px / 20px` (Clean)
  - Meta / Caption: `12px / 16px`, `color: var(--text-muted)`
- **Tabular Numerals**: Always apply `font-variant-numeric: tabular-nums` to live timers, counters, metrics, prices, and token badges to prevent horizontal layout jitter.

## 4. Tactile Controls & Hairline Borders
- Prefer `box-shadow: 0 0 0 1px ...` over heavy CSS borders for crisp subpixel rendering.
- **Primary Tactile Button**:
  - Light mode: `background: linear-gradient(180deg, #323137, #201e25); color: #fafafa; box-shadow: 0 1px 2px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.12); height: 30px; padding: 0 12px; border-radius: 9px; font-size: 12.5px; font-weight: 500;`

## 5. Physics, Motion & Accessibility
- **Primary Easing**: `--ease-out: cubic-bezier(0.22, 1, 0.36, 1)` (`180ms`–`280ms`).
- **Snappy Component Easing**: `cubic-bezier(0.32, 0.72, 0.24, 1)`.
- **State Transitions**: Use subtle Blur Crossfade (`opacity: 0 -> 1`, `filter: blur(4px -> 0)`, `transform: translateY(4px -> 0) scale(0.98 -> 1)`) when switching between AI states (e.g., Thinking → Streaming → Completed).
- **Container Queries & Reduced Motion**: Declare `container-type: inline-size` on component roots for self-contained responsiveness, and always include `@media (prefers-reduced-motion: reduce)` fallbacks.
```
