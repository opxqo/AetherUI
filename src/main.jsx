import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./affectui-engine/index.css";
import "./affectui-engine/all-demos.css";
import AffectUIShowcase from "./showcase/AffectUIShowcase.jsx";

// Safe matchMedia polyfill for components calling bare matchMedia
if (typeof window !== "undefined") {
  if (!window.matchMedia) {
    window.matchMedia = (query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    });
  }
  if (typeof matchMedia === "undefined") {
    globalThis.matchMedia = window.matchMedia;
  }
}

// Roving tabindex support for radiogroup and tablist from affectUI design system
let rovingBusy = false;
const GROUP_SEL = '[role="radiogroup"], [role="tablist"]';
const ITEM_SEL = '[role="radio"], [role="tab"]';

const getItems = (group) =>
  [...group.querySelectorAll(ITEM_SEL)].filter(
    (el) => el.closest(GROUP_SEL) === group && !el.hasAttribute("disabled"),
  );

const getActiveItem = (items) =>
  items.find(
    (el) =>
      el.getAttribute("aria-checked") === "true" ||
      el.getAttribute("aria-selected") === "true",
  ) ?? items[0];

function syncTabIndex(group) {
  const items = getItems(group);
  const active = getActiveItem(items);
  items.forEach((el) => {
    el.tabIndex = el === active ? 0 : -1;
  });
  return active;
}

function onGroupKeyDown(e) {
  const item = e.target?.closest?.(ITEM_SEL);
  const group = item?.closest(GROUP_SEL);
  if (!item || !group) return;
  const items = getItems(group);
  const idx = items.indexOf(item);
  const last = items.length - 1;
  const nextIdx =
    e.key === "ArrowRight" || e.key === "ArrowDown"
      ? idx === last
        ? 0
        : idx + 1
      : e.key === "ArrowLeft" || e.key === "ArrowUp"
        ? idx === 0
          ? last
          : idx - 1
        : e.key === "Home"
          ? 0
          : e.key === "End"
            ? last
            : -1;
  if (nextIdx < 0 || nextIdx === idx) return;
  e.preventDefault();
  const next = items[nextIdx];
  items.forEach((el) => {
    el.tabIndex = el === next ? 0 : -1;
  });
  rovingBusy = true;
  next.focus();
  rovingBusy = false;
  next.click();
}

function onGroupFocusIn(e) {
  const item = e.target?.closest?.(ITEM_SEL);
  const group = item?.closest(GROUP_SEL);
  if (rovingBusy || !item || !group) return;
  const active = syncTabIndex(group);
  if (active && active !== item && item.matches(":focus-visible")) {
    active.focus();
  }
}

if (typeof document !== "undefined") {
  document.addEventListener("keydown", onGroupKeyDown);
  document.addEventListener("focusin", onGroupFocusIn);

  // If accessed directly via path (e.g. /screens/integrations/full or /components/thinking-state),
  // sync the initial hash so the showcase opens straight to it.
  const path = window.location.pathname;
  if (path && path.length > 1 && !window.location.hash) {
    const segs = path.split("/").filter(Boolean);
    if (segs.length > 0) {
      if (segs[0] === "screens" && segs[1]) {
        window.location.hash = `#/fullscreen/${segs[1]}`;
      } else if (segs[0] === "components" && segs[1]) {
        window.location.hash = `#/item/${segs[1]}`;
      } else {
        const slug =
          segs[segs.length - 1] === "full" && segs.length > 1
            ? segs[segs.length - 2]
            : segs[segs.length - 1];
        if (slug) {
          if (path.includes("screen")) {
            window.location.hash = `#/fullscreen/${slug}`;
          } else {
            window.location.hash = `#/item/${slug}`;
          }
        }
      }
    }
  }
}

const rootEl = document.getElementById("root");
if (rootEl) {
  createRoot(rootEl).render(
    <React.StrictMode>
      <AffectUIShowcase />
    </React.StrictMode>,
  );
}
