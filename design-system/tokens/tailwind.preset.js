/**
 * AffectUI Design System — Tailwind CSS Preset
 * Usage in tailwind.config.js:
 *   import affectuiPreset from './design-system/tokens/tailwind.preset.js';
 *   export default { presets: [affectuiPreset], ... }
 */

export default {
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Inter"',
          '"InterVariable"',
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        mono: [
          '"JetBrains Mono"',
          '"Geist Mono"',
          "ui-monospace",
          "SFMono-Regular",
          "monospace",
        ],
      },
      colors: {
        af: {
          bg: "var(--bg)",
          panel: "var(--panel)",
          card: "var(--card)",
          preview: "var(--preview)",
          tray: "var(--ui-tray)",
          text: "var(--text)",
          body: "var(--text-body)",
          muted: "var(--text-muted)",
          subtle: "var(--text-subtle)",
          border: "var(--border)",
          "border-soft": "var(--border-soft)",
          accent: "var(--accent)",
          "accent-clean": "var(--accent-clean)",
          ok: "var(--status-ok)",
          warn: "var(--status-warn)",
          danger: "var(--status-danger)",
        },
      },
      borderRadius: {
        "af-panel": "var(--radius-panel)",     // 18px
        "af-tray": "var(--radius-tray)",       // 16px
        "af-card": "var(--radius-card)",       // 14px
        "af-surface": "var(--radius-surface)", // 12px
        "af-preview": "var(--radius-preview)", // 10px
        "af-control": "var(--radius-control)", // 9px
        "af-token": "var(--radius-token)",     // 6px
        "af-pill": "var(--radius-pill)",       // 999px
      },
      boxShadow: {
        "af-panel": "var(--panel-shadow)",
        "af-card": "var(--shadow-card)",
        "af-classic": "var(--shadow-classic-inner)",
        "af-clean": "var(--shadow-clean-surface)",
        "af-pop": "var(--shadow-pop)",
      },
      transitionTimingFunction: {
        "af-out": "cubic-bezier(0.22, 1, 0.36, 1)",
        "af-snappy": "cubic-bezier(0.32, 0.72, 0.24, 1)",
      },
    },
  },
};
