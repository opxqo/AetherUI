import type { ShellNavItem, ShellChat, Project, App } from "./shared.js";
export type { ShellNavItem, ShellChat, Project, App } from "./shared.js";
import * as React from "react";
export interface AppShellProps extends Omit<React.HTMLAttributes<HTMLElement>, "active" | "onNavigate" | "workspace" | "user" | "nav" | "projects" | "chats" | "onOpenChat" | "sidebarWidth" | "header" | "panel" | "panelTitle" | "panelHeading" | "defaultPanelOpen" | "panelWidth" | "layout" | "demo" | "className" | "style" | "children" | "ref"> {
  /** Label of the menu item or project that is open */
  "active"?: string;
  /** Called with the label of a menu item or project when it is clicked */
  "onNavigate"?: (label: string) => void;
  /** Workspace name; its first letter becomes the logo */
  "workspace"?: string;
  /** Account at the bottom; without an avatar it shows initials. Its menu opens with picture, name and email, then language, appearance, integrations, settings, apps, changelog, help and log out */
  "user"?: { name: string; avatar?: string; email?: string };
  /** Menu items, each { label, icon } */
  "nav"?: ShellNavItem[];
  /** Project list under the menu */
  "projects"?: string[];
  /** Chats in the sidebar – with it the projects become folders that open and close and hold the chats whose folder they are; the rest under Pinned and Chats. A ⋯ menu (rename, pin, unread, project, section, share, copy, new window, archive) and a pin on hover; drag to reorder or into a folder */
  "chats"?: ShellChat[];
  /** Called when a chat is clicked (default: onNavigate with its title) */
  "onOpenChat"?: (chat: ShellChat) => void;
  /** Sidebar width in px – drag its edge between min and max, double-click the edge for the default */
  "sidebarWidth"?: { default?: number; min?: number; max?: number };
  /** A header across the whole app, like Claude's – sidebar toggle and search, the page's title (BarTitle) and actions, the work area's title; one line under it */
  "header"?: { title: React.ReactNode; actions?: React.ReactNode } | false;
  /** A work area on the right of the page – WorkspacePanel (tools and suggested sources) or your own content; resizable and collapsible like the sidebar */
  "panel"?: React.ReactNode;
  /** Heading of the work area on the right */
  "panelTitle"?: string;
  /** What the work area's head shows instead of the plain title, e.g. "Brief / Summer launch" */
  "panelHeading"?: React.ReactNode;
  /** Start with the work area folded away – its icon waits in the top right corner */
  "defaultPanelOpen"?: boolean;
  /** Width of the work area in px, like sidebarWidth */
  "panelWidth"?: { default?: number; min?: number; max?: number };
  /** Inset: the page as a rounded panel on the gray page. Flat: edge to edge next to the sidebar, split by a hairline. Without it, data-shell="flat" on an ancestor (e.g. <html>) makes every App Shell flat */
  "layout"?: "inset" | "flat";
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const AppShell: React.FC<AppShellProps | (Partial<AppShellProps> & { demo: true })>;
export declare const AppShellRaw: React.FC<AppShellProps>;
export declare const AppShellDemo: React.FC<Partial<AppShellProps>>;
export declare const WorkspacePanel: React.FC<AppShellProps | (Partial<AppShellProps> & { demo: true })>;
export default AppShell;
