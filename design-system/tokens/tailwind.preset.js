/**
 * AetherUI / AffectUI Design System — Tailwind CSS Preset
 * Production-ready token mapping for Next.js, Vite, Remix and Astro
 *
 * Usage in tailwind.config.js:
 *   import auiPreset from "./design-system/tokens/tailwind.preset.js";
 *   export default { presets: [auiPreset], content: [...] };
 */

export default {
  darkMode: ["class", "[data-theme="dark"]"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "var(--aui-font)",
          ""Inter"",
          ""InterVariable"",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        mono: [
          "var(--aui-font-mono)",
          ""JetBrains Mono"",
          ""Geist Mono"",
          "ui-monospace",
          "monospace",
        ],
      },
      colors: {
        aui: {
          ink: "var(--aui-ink)",
          muted: "var(--aui-muted)",
          placeholder: "var(--aui-placeholder)",
          surface: "var(--aui-surface)",
          subtle: "var(--aui-subtle)",
          overlay: "var(--aui-overlay)",
          border: "var(--aui-border)",
          "border-strong": "var(--aui-border-strong)",
          primary: "var(--aui-primary)",
          "on-primary": "var(--aui-on-primary)",
          focus: "var(--aui-focus)",
          danger: "var(--aui-danger)",
          "danger-soft": "var(--aui-danger-soft)",
          warning: "var(--aui-warning)",
          "warning-soft": "var(--aui-warning-soft)",
          success: "var(--aui-success)",
          "success-soft": "var(--aui-success-soft)",
          info: "var(--aui-info)",
          "info-soft": "var(--aui-info-soft)",
          blue: "var(--aui-blue)",
          green: "var(--aui-green)",
          amber: "var(--aui-amber)",
          orange: "var(--aui-orange)",
          red: "var(--aui-red)",
          pink: "var(--aui-pink)",
          purple: "var(--aui-purple)",
          teal: "var(--aui-teal)",
          cyan: "var(--aui-cyan)",
        },
        // Backwards compatibility alias
        af: {
          bg: "var(--bg)",
          panel: "var(--panel)",
          card: "var(--card)",
          preview: "var(--preview)",
          tray: "var(--ui-tray)",
          text: "var(--text)",
          muted: "var(--text-muted)",
          border: "var(--border)",
          accent: "var(--accent)",
          ok: "var(--status-ok)",
          warn: "var(--status-warn)",
          danger: "var(--status-danger)",
        },
      },
      borderRadius: {
        "aui-sm": "var(--aui-radius-sm)",
        aui: "var(--aui-radius)",
        "aui-lg": "var(--aui-radius-lg)",
        "af-panel": "var(--radius-panel)",
        "af-tray": "var(--radius-tray)",
        "af-card": "var(--radius-card)",
      },
      boxShadow: {
        "aui-card": "var(--aui-shadow-card)",
        "aui-popover": "var(--aui-shadow-popover)",
        "af-panel": "var(--panel-shadow)",
        "af-card": "var(--shadow-card)",
      },
      transitionTimingFunction: {
        "aui-ease": "var(--aui-ease)",
        "af-out": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
};
