/**
 * AetherUI / AffectUI Design System Runtime SDK
 */

export const AUI_TOKENS = [
  {
    "name": "--aui-font",
    "group": "Type",
    "use": "Font family of every component",
    "dark": false,
    "clean": {
      "light": "\"Inter\", \"InterVariable\", ui-sans-serif, system-ui, -apple-system, \"Segoe UI\", Roboto, sans-serif"
    },
    "classic": {
      "light": "\"Inter\", \"InterVariable\", ui-sans-serif, system-ui, -apple-system, \"Segoe UI\", Roboto, sans-serif"
    }
  },
  {
    "name": "--aui-font-mono",
    "group": "Type",
    "use": "Code, keys, IDs and numbers set in mono",
    "dark": false,
    "clean": {
      "light": "ui-monospace, \"SF Mono\", Menlo, Consolas, monospace"
    },
    "classic": {
      "light": "ui-monospace, \"SF Mono\", Menlo, Consolas, monospace"
    }
  },
  {
    "name": "--aui-radius",
    "group": "Shape",
    "use": "Controls: fields, buttons, selects – small and large sizes follow it",
    "dark": false,
    "clean": {
      "light": "7px"
    },
    "classic": {
      "light": "10px"
    }
  },
  {
    "name": "--aui-radius-sm",
    "group": "Shape",
    "use": "Small parts: chips, tags, keys, menu rows",
    "dark": false,
    "clean": {
      "light": "5px"
    },
    "classic": {
      "light": "7px"
    }
  },
  {
    "name": "--aui-radius-lg",
    "group": "Shape",
    "use": "Cards, panels, menus and dialogs",
    "dark": false,
    "clean": {
      "light": "10px"
    },
    "classic": {
      "light": "16px"
    }
  },
  {
    "name": "--aui-ink",
    "group": "Text",
    "use": "Text, labels and titles",
    "dark": true,
    "clean": {
      "light": "rgba(0, 0, 0, 0.88)",
      "dark": "rgba(255, 255, 255, 0.9)"
    },
    "classic": {
      "light": "#171717",
      "dark": "#ededed"
    }
  },
  {
    "name": "--aui-muted",
    "group": "Text",
    "use": "Hints, icons and second lines",
    "dark": true,
    "clean": {
      "light": "rgba(0, 0, 0, 0.45)",
      "dark": "rgba(255, 255, 255, 0.46)"
    },
    "classic": {
      "light": "#8f8f8f",
      "dark": "#8b8b92"
    }
  },
  {
    "name": "--aui-placeholder",
    "group": "Text",
    "use": "Placeholders and the faintest text",
    "dark": true,
    "clean": {
      "light": "rgba(0, 0, 0, 0.3)",
      "dark": "rgba(255, 255, 255, 0.3)"
    },
    "classic": {
      "light": "#b5b5b5",
      "dark": "#5c5c63"
    }
  },
  {
    "name": "--aui-surface",
    "group": "Surfaces",
    "use": "Fields and cards",
    "dark": true,
    "clean": {
      "light": "#ffffff",
      "dark": "#1c1c1e"
    },
    "classic": {
      "light": "#ffffff",
      "dark": "#19191b"
    }
  },
  {
    "name": "--aui-subtle",
    "group": "Surfaces",
    "use": "Gray layers behind cards, hover washes, chip fills",
    "dark": true,
    "clean": {
      "light": "rgba(0, 0, 0, 0.03)",
      "dark": "rgba(255, 255, 255, 0.04)"
    },
    "classic": {
      "light": "#f0f0f0",
      "dark": "#111113"
    }
  },
  {
    "name": "--aui-overlay",
    "group": "Surfaces",
    "use": "Menus, popovers and dialogs",
    "dark": true,
    "clean": {
      "light": "#ffffff",
      "dark": "#1f1f22"
    },
    "classic": {
      "light": "#ffffff",
      "dark": "#19191b"
    }
  },
  {
    "name": "--aui-border",
    "group": "Borders",
    "use": "Hairline edges at rest",
    "dark": true,
    "clean": {
      "light": "rgba(0, 0, 0, 0.08)",
      "dark": "rgba(255, 255, 255, 0.14)"
    },
    "classic": {
      "light": "#e6e6e8",
      "dark": "#2a2a2e"
    }
  },
  {
    "name": "--aui-border-strong",
    "group": "Borders",
    "use": "Edges on hover and focus, unchecked boxes",
    "dark": true,
    "clean": {
      "light": "rgba(0, 0, 0, 0.13)",
      "dark": "rgba(255, 255, 255, 0.2)"
    },
    "classic": {
      "light": "#d4d4d8",
      "dark": "#3a3a40"
    }
  },
  {
    "name": "--aui-primary",
    "group": "Actions",
    "use": "Primary buttons, checked boxes and switches, the send button",
    "dark": true,
    "clean": {
      "light": "rgba(0, 0, 0, 0.88)",
      "dark": "rgba(255, 255, 255, 0.9)"
    },
    "classic": {
      "light": "#171717",
      "dark": "#ededed"
    }
  },
  {
    "name": "--aui-on-primary",
    "group": "Actions",
    "use": "Text and icons on the primary fill",
    "dark": true,
    "clean": {
      "light": "#ffffff",
      "dark": "#161618"
    },
    "classic": {
      "light": "#ffffff",
      "dark": "#161618"
    }
  },
  {
    "name": "--aui-focus",
    "group": "Actions",
    "use": "Keyboard focus ring – keep it at 3:1 contrast or more",
    "dark": true,
    "clean": {
      "light": "rgba(0, 96, 226, 0.7)",
      "dark": "rgba(77, 141, 255, 0.8)"
    },
    "classic": {
      "light": "rgba(0, 96, 226, 0.7)",
      "dark": "rgba(77, 141, 255, 0.8)"
    }
  },
  {
    "name": "--aui-danger",
    "group": "Status",
    "use": "Errors, failed runs, destructive actions",
    "dark": true,
    "clean": {
      "light": "#c4320a",
      "dark": "#ff8a7a"
    },
    "classic": {
      "light": "#c4320a",
      "dark": "#ff8a7a"
    }
  },
  {
    "name": "--aui-danger-soft",
    "group": "Status",
    "use": "Background of error badges and notices",
    "dark": true,
    "clean": {
      "light": "rgba(240, 68, 56, 0.1)",
      "dark": "rgba(255, 107, 95, 0.14)"
    },
    "classic": {
      "light": "rgba(240, 68, 56, 0.1)",
      "dark": "rgba(255, 107, 95, 0.14)"
    }
  },
  {
    "name": "--aui-warning",
    "group": "Status",
    "use": "Needs attention, waiting for you, limits close",
    "dark": true,
    "clean": {
      "light": "#b25e00",
      "dark": "#ffb35c"
    },
    "classic": {
      "light": "#b25e00",
      "dark": "#ffb35c"
    }
  },
  {
    "name": "--aui-warning-soft",
    "group": "Status",
    "use": "Background of warning badges and notices",
    "dark": true,
    "clean": {
      "light": "rgba(242, 138, 46, 0.12)",
      "dark": "rgba(242, 161, 92, 0.14)"
    },
    "classic": {
      "light": "rgba(242, 138, 46, 0.12)",
      "dark": "rgba(242, 161, 92, 0.14)"
    }
  },
  {
    "name": "--aui-success",
    "group": "Status",
    "use": "Done, connected, copied",
    "dark": true,
    "clean": {
      "light": "#1e8a4f",
      "dark": "#7dcf9f"
    },
    "classic": {
      "light": "#1e8a4f",
      "dark": "#7dcf9f"
    }
  },
  {
    "name": "--aui-success-soft",
    "group": "Status",
    "use": "Background of success badges and notices",
    "dark": true,
    "clean": {
      "light": "rgba(95, 200, 138, 0.14)",
      "dark": "rgba(125, 207, 159, 0.14)"
    },
    "classic": {
      "light": "rgba(95, 200, 138, 0.14)",
      "dark": "rgba(125, 207, 159, 0.14)"
    }
  },
  {
    "name": "--aui-info",
    "group": "Status",
    "use": "Running, live, informational",
    "dark": true,
    "clean": {
      "light": "#0070d6",
      "dark": "#4fb0fe"
    },
    "classic": {
      "light": "#0070d6",
      "dark": "#4fb0fe"
    }
  },
  {
    "name": "--aui-info-soft",
    "group": "Status",
    "use": "Background of info badges and notices",
    "dark": true,
    "clean": {
      "light": "rgba(1, 144, 254, 0.1)",
      "dark": "rgba(79, 176, 254, 0.14)"
    },
    "classic": {
      "light": "rgba(1, 144, 254, 0.1)",
      "dark": "rgba(79, 176, 254, 0.14)"
    }
  },
  {
    "name": "--aui-blue",
    "group": "Palette",
    "use": "Info, running, links in charts",
    "dark": true,
    "clean": {
      "light": "#0190fe",
      "dark": "#4fb0fe"
    },
    "classic": {
      "light": "#0190fe",
      "dark": "#4fb0fe"
    }
  },
  {
    "name": "--aui-green",
    "group": "Palette",
    "use": "Success, done",
    "dark": true,
    "clean": {
      "light": "#5fc88a",
      "dark": "#7dcf9f"
    },
    "classic": {
      "light": "#5fc88a",
      "dark": "#7dcf9f"
    }
  },
  {
    "name": "--aui-amber",
    "group": "Palette",
    "use": "Waiting, queued",
    "dark": true,
    "clean": {
      "light": "#e8b000",
      "dark": "#e6c24d"
    },
    "classic": {
      "light": "#e8b000",
      "dark": "#e6c24d"
    }
  },
  {
    "name": "--aui-orange",
    "group": "Palette",
    "use": "Warning, needs you",
    "dark": true,
    "clean": {
      "light": "#f28a2e",
      "dark": "#f2a15c"
    },
    "classic": {
      "light": "#f28a2e",
      "dark": "#f2a15c"
    }
  },
  {
    "name": "--aui-red",
    "group": "Palette",
    "use": "Danger, failed",
    "dark": true,
    "clean": {
      "light": "#f04438",
      "dark": "#ff6b5f"
    },
    "classic": {
      "light": "#f04438",
      "dark": "#ff6b5f"
    }
  },
  {
    "name": "--aui-pink",
    "group": "Palette",
    "use": "Category color",
    "dark": true,
    "clean": {
      "light": "#ee3e9e",
      "dark": "#f06db5"
    },
    "classic": {
      "light": "#ee3e9e",
      "dark": "#f06db5"
    }
  },
  {
    "name": "--aui-purple",
    "group": "Palette",
    "use": "Category color",
    "dark": true,
    "clean": {
      "light": "#a651f0",
      "dark": "#b98af0"
    },
    "classic": {
      "light": "#a651f0",
      "dark": "#b98af0"
    }
  },
  {
    "name": "--aui-teal",
    "group": "Palette",
    "use": "Category color",
    "dark": true,
    "clean": {
      "light": "#13b3a0",
      "dark": "#4fc3b4"
    },
    "classic": {
      "light": "#13b3a0",
      "dark": "#4fc3b4"
    }
  },
  {
    "name": "--aui-cyan",
    "group": "Palette",
    "use": "Category color",
    "dark": true,
    "clean": {
      "light": "#14b3f0",
      "dark": "#5cc6ee"
    },
    "classic": {
      "light": "#14b3f0",
      "dark": "#5cc6ee"
    }
  },
  {
    "name": "--aui-shadow-card",
    "group": "Depth",
    "use": "Edge and lift of cards and fields",
    "dark": true,
    "clean": {
      "light": "0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      "dark": "0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.4)"
    },
    "classic": {
      "light": "0 0 0 1px #ececec, 0 1px 2px rgba(0, 0, 0, 0.04)",
      "dark": "0 0 0 1px #2a2a2e, 0 1px 2px rgba(0, 0, 0, 0.2)"
    }
  },
  {
    "name": "--aui-shadow-popover",
    "group": "Depth",
    "use": "Menus, popovers and dialogs above the page",
    "dark": true,
    "clean": {
      "light": "0 0 0 0.5px rgba(0, 0, 0, 0.08), 0 8px 24px -6px rgba(0, 0, 0, 0.14), 0 2px 6px -2px rgba(0, 0, 0, 0.06)",
      "dark": "0 0 0 0.5px rgba(255, 255, 255, 0.12), 0 12px 32px -8px rgba(0, 0, 0, 0.6)"
    },
    "classic": {
      "light": "0 0 0 1px rgba(0, 0, 0, 0.06), 0 18px 40px -12px rgba(0, 0, 0, 0.18), 0 4px 12px -4px rgba(0, 0, 0, 0.06)",
      "dark": "0 0 0 1px rgba(255, 255, 255, 0.06), 0 18px 40px -12px rgba(0, 0, 0, 0.6)"
    }
  },
  {
    "name": "--aui-ease",
    "group": "Motion",
    "use": "Easing of enter, glide and morph animations",
    "dark": false,
    "clean": {
      "light": "cubic-bezier(0.22, 1, 0.36, 1)"
    },
    "classic": {
      "light": "cubic-bezier(0.22, 1, 0.36, 1)"
    }
  }
];

export const AUI_TOKEN_MAP = Object.fromEntries(
  AUI_TOKENS.map((t) => [t.name, t])
);

export function getAuiToken(name, style = "classic", mode = "light") {
  const token = AUI_TOKEN_MAP[name];
  if (!token) return null;
  const styleObj = token[style] || token.classic || token.clean;
  if (!styleObj) return null;
  return mode === "dark" ? (styleObj.dark ?? styleObj.light) : styleObj.light;
}

export function setAuiStyle(style) {
  if (typeof document !== "undefined") {
    document.documentElement.setAttribute("data-style", style);
    if (style === "clean") {
      document.documentElement.classList.add("clean");
      document.documentElement.classList.remove("classic");
    } else {
      document.documentElement.classList.add("classic");
      document.documentElement.classList.remove("clean");
    }
  }
  if (typeof window !== "undefined" && window.__AFFECTUI_SET_LOOK__) {
    window.__AFFECTUI_SET_LOOK__(style);
  }
}

export function setAuiTheme(theme) {
  if (typeof document !== "undefined") {
    document.documentElement.setAttribute("data-theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }
}
