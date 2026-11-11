# AetherUI / AffectUI Design System — Real-World Integration Guide

This guide provides step-by-step instructions for adopting the **AetherUI / AffectUI Design System** into production web applications (Next.js, Vite React, Remix, Astro, or vanilla Tailwind CSS).

---

## 1. Quick Start in 3 Steps

### Step 1: Install Package
```bash
npm install @aether-ui/react
# or
pnpm add @aether-ui/react
```

### Step 2: Import Design System CSS Variables
Import the design tokens into your root entry point (`app/layout.tsx`, `src/main.tsx`, or `src/index.css`):

```css
/* In your global CSS file (e.g. globals.css) */
@import "@aether-ui/react/tokens.css";
```

### Step 3: Add Tailwind Preset (Optional but Recommended)
In your `tailwind.config.js` or `tailwind.config.ts`:

```javascript
import auiPreset from "@aether-ui/react/tailwind";

export default {
  presets: [auiPreset],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  // ... your other config
};
```

---

## 2. Setting Style & Theme

The design system operates on two root HTML attributes:
- `data-theme`: `"light"` | `"dark"`
- `data-style`: `"classic"` (default tactile double-tray) | `"clean"` (modern subpixel precision)

### Example Root Layout (`app/layout.tsx` in Next.js App Router):

```tsx
import "@aether-ui/react/tokens.css";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" data-style="classic" className="dark">
      <body className="bg-aui-surface text-aui-ink font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
```

### Runtime Switching:

```tsx
import { setAuiStyle, setAuiTheme } from "@aether-ui/react/tokens";

// Toggle between Classic and Clean
function StyleToggle({ currentStyle }: { currentStyle: "classic" | "clean" }) {
  return (
    <button
      onClick={() => setAuiStyle(currentStyle === "classic" ? "clean" : "classic")}
      className="px-3 py-1.5 rounded-aui bg-aui-subtle hover:bg-aui-surface text-aui-ink text-sm transition-colors"
    >
      Switch to {currentStyle === "classic" ? "Clean" : "Classic"}
    </button>
  );
}
```

---

## 3. The 10 Foundation Primitives in Action

All 10 foundation primitives are built on the 36 token contracts with full WAI-ARIA keyboard navigation and focus rings:

```tsx
import React, { useState } from "react";
import {
  Button,
  TextField,
  TextArea,
  Select,
  Combobox,
  Checkbox,
  Switch,
  SegmentedControl,
  TagInput,
  OtpInput,
} from "@aether-ui/react"; // or "@aether-ui/react/clean" for Clean style

export function SettingsForm() {
  const [role, setRole] = useState("developer");
  const [notifications, setNotifications] = useState(true);
  const [agree, setAgree] = useState(false);
  const [tags, setTags] = useState(["React", "AI", "Tailwind"]);
  const [code, setCode] = useState("");

  return (
    <div className="max-w-md mx-auto p-6 aui-card shadow-aui-card space-y-5">
      <h2 className="text-lg font-semibold text-aui-ink">Workspace Settings</h2>

      {/* Text Field */}
      <div>
        <label className="block text-xs font-medium text-aui-muted mb-1.5">Workspace Name</label>
        <TextField placeholder="Acme Engineering" defaultValue="AffectUI Project" />
      </div>

      {/* Select */}
      <div>
        <label className="block text-xs font-medium text-aui-muted mb-1.5">Primary Role</label>
        <Select
          value={role}
          onChange={setRole}
          options={[
            { label: "Frontend Engineer", value: "frontend" },
            { label: "AI Agent Architect", value: "ai" },
            { label: "Product Designer", value: "designer" },
          ]}
        />
      </div>

      {/* Segmented Control */}
      <div>
        <label className="block text-xs font-medium text-aui-muted mb-1.5">Environment</label>
        <SegmentedControl
          options={["Development", "Staging", "Production"]}
          defaultValue="Development"
        />
      </div>

      {/* Tag Input */}
      <div>
        <label className="block text-xs font-medium text-aui-muted mb-1.5">Tech Stack</label>
        <TagInput tags={tags} onChange={setTags} />
      </div>

      {/* Switch */}
      <div className="flex items-center justify-between pt-2">
        <span className="text-sm text-aui-ink">Enable Autonomous Agent</span>
        <Switch checked={notifications} onChange={setNotifications} />
      </div>

      {/* Checkbox */}
      <div className="flex items-center gap-2 pt-1">
        <Checkbox checked={agree} onChange={setAgree} id="terms" />
        <label htmlFor="terms" className="text-xs text-aui-muted cursor-pointer">
          Allow real-time AI checkpoint handoffs
        </label>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-2.5 pt-4 border-t border-aui-border">
        <Button variant="ghost">Cancel</Button>
        <Button variant="primary">Save Changes</Button>
      </div>
    </div>
  );
}
```

---

## 4. Tailwind Utility Class Mapping

When the Tailwind preset is imported, you have full access to these semantic utility classes:

| Token Category | Tailwind Classes | Mapped CSS Variable |
| :--- | :--- | :--- |
| **Surface** | `bg-aui-surface`, `bg-aui-subtle`, `bg-aui-overlay` | `--aui-surface`, `--aui-subtle`, `--aui-overlay` |
| **Ink / Text** | `text-aui-ink`, `text-aui-muted`, `text-aui-placeholder` | `--aui-ink`, `--aui-muted`, `--aui-placeholder` |
| **Borders** | `border-aui-border`, `border-aui-border-strong` | `--aui-border`, `--aui-border-strong` |
| **Actions** | `bg-aui-primary text-aui-on-primary`, `ring-aui-focus` | `--aui-primary`, `--aui-on-primary`, `--aui-focus` |
| **Status** | `text-aui-danger bg-aui-danger-soft`, `text-aui-success` | `--aui-danger`, `--aui-success`, etc. |
| **Radius** | `rounded-aui-sm`, `rounded-aui`, `rounded-aui-lg` | `--aui-radius-sm`, `--aui-radius`, `--aui-radius-lg` |
| **Depth** | `shadow-aui-card`, `shadow-aui-popover` | `--aui-shadow-card`, `--aui-shadow-popover` |
| **Motion** | `transition-all ease-aui duration-200` | `--aui-ease` (`cubic-bezier(0.22, 1, 0.36, 1)`) |

---

## 5. Concentric Radius & Optical Depth Rules

1. **Concentric Padding Rule**:
   Whenever nesting a container inside another, always calculate:
   $$R_{\text{inner}} = \max(4\text{px}, R_{\text{outer}} - \text{Padding})$$
   *Example*: When `--aui-radius-lg` (16px in Classic) has `padding: 4px`, inner card uses `12px`.

2. **Tabular Numerics for AI & Metrics**:
   Always apply `.aui-tabular` or `font-variant-numeric: tabular-nums` to timers, token counts, and money columns to avoid layout jitter during live stream generation.

3. **Focus Ring Accessible Standard**:
   `--aui-focus` is tuned to maintain a 3:1 contrast ratio against both light and dark backgrounds. Avoid removing `:focus-visible` outlines.

---

## 6. Programmatic Token SDK

You can inspect or consume raw design tokens in TypeScript:

```typescript
import { AUI_TOKENS, getAuiToken } from "@aether-ui/react/tokens";

// Get raw color for canvas rendering or SVG export
const primaryColor = getAuiToken("--aui-primary", "clean", "dark");
console.log(primaryColor); // "rgba(255, 255, 255, 0.9)"
```
