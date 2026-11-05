import React, { useState, useEffect } from "react";
import { t as HugeiconsIcon } from "../components/icons/HugeiconsIcon.js";
import ThinkingDemoClassic from "../components/thinking-state-classic.js";
import ThinkingDemoClean from "../components/thinking-state-clean-demo.js";

const ResetIcon = [
  [
    "path",
    {
      d: "M12 3.20455C7.1424 3.20455 3.20455 7.1424 3.20455 12C3.20455 16.8576 7.1424 20.7955 12 20.7955C16.8576 20.7955 20.7955 16.8576 20.7955 12C20.7955 11.4603 21.233 11.0227 21.7727 11.0227C22.3125 11.0227 22.75 11.4603 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C14.1254 1.25 16.1072 1.86735 17.7751 2.93159L19 1.70668C19.173 1.43228 19.4788 1.25 19.8272 1.25C20.367 1.25 20.8045 1.68754 20.8045 2.22727V5.28828C20.8045 6.48198 19.3213 7.02646 18.548 6.12763C16.9364 4.33189 14.6005 3.20455 12 3.20455Z",
      fill: "currentColor",
      key: "0",
    },
  ],
];

const EyeIcon = [
  [
    "path",
    {
      d: "M5.52031 6.71298C7.22595 5.38141 9.42944 4.25 12 4.25C14.5706 4.25 16.774 5.38141 18.4797 6.71298C20.1869 8.04576 21.4487 9.61974 22.1546 10.6095L22.2078 10.6837C22.461 11.0358 22.75 11.4378 22.75 12C22.75 12.5622 22.461 12.9642 22.2078 13.3163L22.1546 13.3905C21.4487 14.3803 20.1869 15.9542 18.4797 17.287C16.774 18.6186 14.5706 19.75 12 19.75C9.42944 19.75 7.22595 18.6186 5.52031 17.287C3.81313 15.9542 2.55126 14.3803 1.84541 13.3905L1.79219 13.3163C1.53904 12.9642 1.25 12.5622 1.25 12C1.25 11.4378 1.53904 11.0358 1.79219 10.6837L1.84541 10.6095C2.55126 9.61974 3.81313 8.04576 5.52031 6.71298ZM8.5 12C8.5 13.933 10.067 15.5 12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12Z",
      fill: "currentColor",
      fillRule: "evenodd",
      clipRule: "evenodd",
      key: "0",
    },
  ],
];

const SunIcon = [
  [
    "path",
    {
      d: "M17.5 12C17.5 15.0376 15.0376 17.5 12 17.5C8.96243 17.5 6.5 15.0376 6.5 12C6.5 8.96243 8.96243 6.5 12 6.5C15.0376 6.5 17.5 8.96243 17.5 12Z",
      fill: "currentColor",
      key: "0",
    },
  ],
  [
    "path",
    {
      d: "M12 1C12.5523 1 13 1.44772 13 2V3.5C13 4.05228 12.5523 4.5 12 4.5C11.4477 4.5 11 4.05228 11 3.5V2C11 1.44772 11.4477 1 12 1ZM4.22149 4.22149C4.61202 3.83097 5.24518 3.83097 5.6357 4.22149L6.69636 5.28215C7.08689 5.67268 7.08689 6.30584 6.69636 6.69636C6.30584 7.08689 5.67268 7.08689 5.28215 6.69636L4.22149 5.6357C3.83097 5.24518 3.83097 4.61201 4.22149 4.22149ZM19.7784 4.2216C20.1689 4.61213 20.1689 5.24529 19.7784 5.63582L18.7177 6.69648C18.3272 7.087 17.694 7.087 17.3035 6.69648C16.913 6.30595 16.913 5.67279 17.3035 5.28226L18.3642 4.2216C18.7547 3.83108 19.3879 3.83108 19.7784 4.2216ZM1 12C1 11.4477 1.44772 11 2 11H3.5C4.05228 11 4.5 11.4477 4.5 12C4.5 12.5523 4.05228 13 3.5 13H2C1.44772 13 1 12.5523 1 12ZM19.5 12C19.5 11.4477 19.9477 11 20.5 11H22C22.5523 11 23 11.4477 23 12C23 12.5523 22.5523 13 22 13H20.5C19.9477 13 19.5 12.5523 19.5 12ZM17.303 17.3035C17.6936 16.913 18.3267 16.913 18.7172 17.3035L19.7779 18.3642C20.1684 18.7547 20.1684 19.3879 19.7779 19.7784C19.3874 20.1689 18.7542 20.1689 18.3637 19.7784L17.303 18.7177C16.9125 18.3272 16.9125 17.694 17.303 17.3035ZM6.69685 17.3036C7.08738 17.6942 7.08738 18.3273 6.69685 18.7178L5.63619 19.7785C5.24567 20.169 4.6125 20.169 4.22198 19.7785C3.83145 19.388 3.83145 18.7548 4.22198 18.3643L5.28264 17.3036C5.67316 16.9131 6.30633 16.9131 6.69685 17.3036ZM12 19.5C12.5523 19.5 13 19.9477 13 20.5V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22V20.5C11 19.9477 11.4477 19.5 12 19.5Z",
      fill: "currentColor",
      fillRule: "evenodd",
      clipRule: "evenodd",
      key: "1",
    },
  ],
];

const MoonIcon = [
  [
    "path",
    {
      d: "M10.5163 2.04296C10.6958 2.27649 10.722 2.59345 10.5832 2.85326C9.99927 3.9469 9.66792 5.19607 9.66792 6.52485C9.66792 10.8367 13.1633 14.3321 17.4751 14.3321C18.8039 14.3321 20.0531 14.0007 21.1467 13.4168C21.4065 13.278 21.7235 13.3042 21.957 13.4837C22.1906 13.6632 22.2974 13.9627 22.2302 14.2495C21.1556 18.8349 17.0409 22.25 12.1269 22.25C6.39589 22.25 1.75 17.6041 1.75 11.8731C1.75 6.95906 5.16505 2.84445 9.7505 1.76979C10.0373 1.70258 10.3368 1.80944 10.5163 2.04296Z",
      fill: "currentColor",
      key: "0",
    },
  ],
];

function ClassicLookGlyph() {
  return (
    <svg width="16" height="14" viewBox="0 0 16 14" aria-hidden="true">
      <rect
        x="0.5"
        y="0.5"
        width="15"
        height="13"
        rx="3.5"
        fill="currentColor"
        opacity="0.18"
      />
      <rect
        x="2.5"
        y="2.5"
        width="11"
        height="6.5"
        rx="2"
        fill="var(--switch-card, #fff)"
        stroke="currentColor"
        strokeOpacity="0.35"
      />
      <rect
        x="9"
        y="10.4"
        width="4.5"
        height="1.6"
        rx="0.8"
        fill="currentColor"
        opacity="0.55"
      />
    </svg>
  );
}

function CleanLookGlyph() {
  return (
    <svg width="16" height="14" viewBox="0 0 16 14" aria-hidden="true">
      <rect
        x="1.5"
        y="1.5"
        width="13"
        height="11"
        rx="2.5"
        fill="var(--switch-card, #fff)"
        stroke="currentColor"
        strokeOpacity="0.55"
      />
      <path
        d="M4 5h6M4 7.6h4"
        stroke="currentColor"
        strokeOpacity="0.55"
        strokeLinecap="round"
      />
    </svg>
  );
}

const STAGE_CSS = `
.thinking-page-shell {
  min-height: 100dvh;
  background: var(--panel);
  padding: 44px 24px 80px;
}
.doc {
  width: 100%;
  max-width: 894px;
  margin: 0 auto;
}
.doc__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 24px;
  padding-top: 14px;
}
.doc__title {
  letter-spacing: -0.8px;
  font-size: 32px;
  font-weight: 600;
  line-height: 44px;
  display: flex;
  align-items: center;
  gap: 12px;
}
.doc__lead {
  color: var(--text-muted);
  padding-top: 8px;
  font-size: 16px;
  line-height: 24px;
}
.doc__section--preview {
  padding-top: 24px;
}
.preview-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 6px 0 12px;
}
.preview-bar__end {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  min-width: 0;
}
.preview-bar__controls {
  display: flex;
  align-items: center;
  gap: 8px;
}
.preview-bar__sep {
  background: var(--border);
  flex: none;
  width: 1px;
  height: 14px;
}
.segmented {
  border-radius: var(--radius-pill);
  background: var(--muted-bg);
  align-items: center;
  gap: 2px;
  padding: 3px;
  display: inline-flex;
}
.segmented button {
  border-radius: var(--radius-pill);
  height: 30px;
  color: var(--text-muted);
  cursor: pointer;
  transition: background-color var(--duration) ease, color var(--duration) ease;
  background: transparent;
  border: 0;
  align-items: center;
  gap: 6px;
  padding: 0 12px;
  font-weight: 500;
  display: inline-flex;
}
.segmented button:hover {
  color: var(--text);
}
.segmented button[aria-selected="true"],
.segmented button[aria-checked="true"] {
  background: var(--card);
  color: var(--text);
  box-shadow: 0 1px 2px #00000014, 0 0 0 0.5px #0000000f;
}
.stage__theme {
  display: flex;
  align-items: center;
  gap: 2px;
}
.stage__theme-btn {
  width: 28px;
  height: 28px;
  color: var(--text-subtle);
  cursor: pointer;
  background: transparent;
  border: 0;
  border-radius: 999px;
  place-items: center;
  padding: 0;
  transition: background-color 0.14s, color 0.14s;
  display: grid;
  position: relative;
}
.stage__theme-btn:hover {
  color: var(--text);
}
.stage__theme-btn[aria-checked="true"] {
  background: var(--muted-bg);
  color: var(--text);
}
.preview-bar__controls .stage__theme-btn::after {
  content: attr(data-tip);
  z-index: 20;
  background: var(--text);
  color: var(--bg);
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  border-radius: 7px;
  padding: 4px 8px;
  font-size: 11.5px;
  font-weight: 500;
  line-height: 16px;
  transition: opacity 0.14s, transform 0.16s;
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translate(-50%, 4px);
}
.preview-bar__controls .stage__theme-btn:is(:hover, :focus-visible)::after {
  opacity: 1;
  transform: translate(-50%);
}
[data-look="classic"] { --look: #e0580f; }
[data-look="clean"] { --look: #2f6bff; }
:where(.dark, [data-theme="dark"]) [data-look="classic"] { --look: #ff9a5a; }
:where(.dark, [data-theme="dark"]) [data-look="clean"] { --look: #8fb0ff; }
.stage__style .stage__theme-btn[data-look] {
  color: var(--look);
}
.stage__style .stage__theme-btn[data-look][aria-checked="false"] {
  opacity: 0.75;
}
.stage__style .stage__theme-btn[data-look]:hover {
  opacity: 1;
}
.stage__style .stage__theme-btn[data-look][aria-checked="true"] {
  background: color-mix(in srgb, var(--look) 11%, var(--card));
  color: var(--look);
  box-shadow: inset 0 0 0 0.5px color-mix(in srgb, var(--look) 35%, transparent), 0 1px 2px #0000000d;
}
.stage {
  isolation: isolate;
  background: var(--preview);
  height: 520px;
  box-shadow: inset 0 0 0 1px var(--border-soft);
  border-radius: 18px;
  place-items: center;
  padding: 45px;
  display: grid;
  position: relative;
  overflow: hidden;
}
.stage__look {
  place-items: inherit;
  width: 100%;
  min-width: 0;
  height: 100%;
  display: grid;
  animation: 0.32s backwards look-in;
}
@keyframes look-in {
  0% { opacity: 0; filter: blur(2px); }
  to { opacity: 1; filter: none; }
}
.thinking-demo {
  grid-template-columns: minmax(0, 1fr);
  place-items: center;
  width: 100%;
  display: grid;
}
.stage .thinking-demo {
  align-self: start;
  margin-top: 56px;
}
@media (width <= 760px) {
  .stage .thinking-demo {
    margin-top: 16px;
  }
  .stage .thinking-demo:has(.ui-thinkc) {
    margin-top: 72px;
  }
}
`;

export default function ThinkingStatePage() {
  const [look, setLook] = useState("classic");
  const [resetCount, setResetCount] = useState(0);
  const [theme, setTheme] = useState(() =>
    typeof document !== "undefined" &&
    document.documentElement.classList.contains("dark")
      ? "dark"
      : "light",
  );

  useEffect(() => {
    const isDark = theme === "dark";
    document.documentElement.dataset.theme = theme;
    document.documentElement.classList.toggle("dark", isDark);
    try {
      localStorage.setItem("theme", theme);
    } catch {}
  }, [theme]);

  const ActiveDemo =
    look === "clean" ? ThinkingDemoClean : ThinkingDemoClassic;

  return (
    <div className="thinking-page-shell">
      <style href="ui-page-thinking-state" precedence="default">
        {STAGE_CSS}
      </style>
      <div className="doc">
        <article className="doc__article">
          <header className="doc__header">
            <div>
              <h1 className="doc__title">Thinking State</h1>
              <p className="doc__lead">
                AI working panel with a live timer, searched sources and
                thinking steps that appear one by one.
              </p>
            </div>
          </header>

          <section id="preview" className="doc__section doc__section--preview">
            <div className="preview-bar">
              <div
                className="segmented"
                role="tablist"
                aria-label="Thinking State preview"
              >
                <button role="tab" aria-selected="true">
                  <HugeiconsIcon icon={EyeIcon} size={14} /> Preview
                </button>
              </div>

              <div className="preview-bar__end">
                <div className="preview-bar__controls">
                  <div
                    className="stage__theme stage__style"
                    role="radiogroup"
                    aria-label="Component style"
                  >
                    {[
                      ["classic", "Classic", <ClassicLookGlyph key="c" />],
                      ["clean", "Clean", <CleanLookGlyph key="n" />],
                    ].map(([id, label, glyph]) => (
                      <button
                        key={id}
                        type="button"
                        role="radio"
                        data-look={id}
                        aria-checked={look === id}
                        aria-label={`${label} style`}
                        data-tip={`${label} style`}
                        className="stage__theme-btn"
                        onClick={() => setLook(id)}
                      >
                        {glyph}
                      </button>
                    ))}
                  </div>

                  <span className="preview-bar__sep" aria-hidden="true" />

                  <div
                    className="stage__theme"
                    role="radiogroup"
                    aria-label="Preview theme"
                  >
                    {[
                      ["light", SunIcon, "Light"],
                      ["dark", MoonIcon, "Dark"],
                    ].map(([id, icon, label]) => (
                      <button
                        key={id}
                        type="button"
                        role="radio"
                        aria-checked={theme === id}
                        aria-label={`${label} theme`}
                        data-tip={label}
                        className="stage__theme-btn"
                        onClick={() => setTheme(id)}
                      >
                        <HugeiconsIcon icon={icon} size={14} />
                      </button>
                    ))}
                  </div>

                  <span className="preview-bar__sep" aria-hidden="true" />

                  <button
                    type="button"
                    className="stage__theme-btn"
                    aria-label="Reset preview"
                    data-tip="Reset preview"
                    onClick={() => setResetCount((c) => c + 1)}
                  >
                    <HugeiconsIcon icon={ResetIcon} size={14} />
                  </button>
                </div>
              </div>
            </div>

            <div className="stage">
              <div
                className="stage__look"
                key={`thinking-state:${look}:${resetCount}`}
              >
                <ActiveDemo />
              </div>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}
