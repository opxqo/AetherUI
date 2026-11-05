import * as React from "react";
import * as ReactDOM from "react-dom";
import { ScreenFullContext, SCREEN_WIDTH } from "./context.js";

export { ScreenFullContext, SCREEN_WIDTH } from "./context.js";
export { GlassFolder } from "./glass-folder.js";

const routes = {
  Home: "assistant-home", "New chat": "assistant-home", Chat: "agent-chat",
  Folders: "files", Integrations: "integrations", Board: "kanban",
  Companies: "crm", Revenue: "analytics", Analytics: "analytics", Runs: "agent-run",
  Evals: "evals", Settings: "settings-profile", Profile: "settings-profile",
  General: "settings-general", Security: "settings-security", Models: "settings-models",
  Notifications: "settings-notifications", Privacy: "settings-privacy",
  Preferences: "settings-preferences", Members: "settings-members",
  Billing: "settings-subscription", "Back to app": "assistant-home",
};
const folders = ["Q3 Campaign", "Brand assets", "Hiring", "Research"];

export function navigateScreen(label) {
  if (typeof window === "undefined") return;
  const folder = folders.includes(label);
  const slug = routes[label] ?? (folder ? "folder" : null);
  if (!slug) return;
  const fullscreen = window.location.hash.startsWith("#/fullscreen/");
  const query = folder ? `?folder=${encodeURIComponent(label)}` : "";
  window.location.hash = `#/${fullscreen ? "fullscreen" : "item"}/${slug}${query}`;
  window.dispatchEvent(new Event("screen-query"));
}

export function useFolderQuery() {
  const [folder, setFolder] = React.useState(undefined);
  React.useEffect(() => {
    const update = () => {
      const query = window.location.hash.split("?")[1] ?? window.location.search;
      setFolder(new URLSearchParams(query).get("folder") ?? undefined);
    };
    update();
    window.addEventListener("screen-query", update);
    window.addEventListener("hashchange", update);
    window.addEventListener("popstate", update);
    return () => {
      window.removeEventListener("screen-query", update);
      window.removeEventListener("hashchange", update);
      window.removeEventListener("popstate", update);
    };
  }, []);
  return folder;
}

export function ScreenFrame({ children, height = 900 }) {
  const fullscreen = React.useContext(ScreenFullContext);
  const ref = React.useRef(null);
  const [scale, setScale] = React.useState(1);
  React.useEffect(() => {
    if (fullscreen || !ref.current) return;
    const node = ref.current;
    const update = () => setScale(node.clientWidth / SCREEN_WIDTH);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(node);
    return () => observer.disconnect();
  }, [fullscreen]);
  if (fullscreen) return React.createElement("div", { className: "screen-full" }, children);
  return React.createElement("div", {
    ref, className: "screen-stage", style: { aspectRatio: `${SCREEN_WIDTH} / ${height}` },
  }, React.createElement("div", {
    className: "screen-stage__canvas",
    style: { width: SCREEN_WIDTH, height, transform: `scale(${scale})` },
  }, children));
}

export const getReactDOM = () => ReactDOM;
