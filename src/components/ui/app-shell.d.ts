import * as React from "react";

export type ShellNavItem = Record<string, any>;
export type ShellChat = Record<string, any>;
export type WorkspaceTool = Record<string, any>;
export type WorkspaceSource = Record<string, any>;

export interface AppShellProps {
  /** Label of the menu item or project that is open */
  active?: string;
  /** Called with the label of a menu item or project when it is clicked */
  onNavigate?: (label: string) => void;
  /** Workspace name; its first letter becomes the logo (default: "Acme") */
  workspace?: string;
  /** Account at the bottom; without an avatar it shows initials. Its menu opens with picture, name and email, then language, appearance, integrations, settings, apps, changelog, help and log out (default: { name: "Alex Morgan" }) */
  user?: { name: string; avatar?: string; email?: string };
  /** Menu items, each { label, icon } (default: New chat, Folders, Integrations) */
  nav?: ShellNavItem[];
  /** Project list under the menu */
  projects?: string[];
  /** Chats in the sidebar – with it the projects become folders that open and close and hold the chats whose folder they are; the rest under Pinned and Chats. A ⋯ menu (rename, pin, unread, project, section, share, copy, new window, archive) and a pin on hover; drag to reorder or into a folder */
  chats?: ShellChat[];
  /** Called when a chat is clicked (default: onNavigate with its title) */
  onOpenChat?: (chat: ShellChat) => void;
  /** Sidebar width in px – drag its edge between min and max, double-click the edge for the default (default: { default: 272, min: 220, max: 380 }) */
  sidebarWidth?: { default?: number; min?: number; max?: number };
  /** A header across the whole app, like Claude's – sidebar toggle and search, the page's title (BarTitle) and actions, the work area's title; one line under it */
  header?: { title: ReactNode; actions?: ReactNode } | false;
  /** A work area on the right of the page – WorkspacePanel (tools and suggested sources) or your own content; resizable and collapsible like the sidebar */
  panel?: ReactNode;
  /** Heading of the work area on the right (default: "Workspace") */
  panelTitle?: string;
  /** What the work area's head shows instead of the plain title, e.g. "Brief / Summer launch" */
  panelHeading?: ReactNode;
  /** Start with the work area folded away – its icon waits in the top right corner (default: true) */
  defaultPanelOpen?: boolean;
  /** Width of the work area in px, like sidebarWidth (default: { default: 360, min: 280, max: 560 }) */
  panelWidth?: { default?: number; min?: number; max?: number };
  /** Inset: the page as a rounded panel on the gray page. Flat: edge to edge next to the sidebar, split by a hairline. Without it, data-shell="flat" on an ancestor (e.g. <html>) makes every App Shell flat (default: "inset") */
  layout?: "inset" | "flat";
  /** Rows under Tools, each { id, label, icon, shortcut? } (default: Terminal, Browser, Notes) */
  "WorkspacePanel tools"?: WorkspaceTool[];
  /** Rows under Suggested, each { id, title, source, mark? } */
  "WorkspacePanel sources"?: WorkspaceSource[];
  /** A tool or a suggestion was clicked */
  "WorkspacePanel onOpen"?: (id: string) => void;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * App Shell Inset — Collapsible sidebar with workspace, menu, projects and account, and a resizable work area on the right – tools, browser and suggested sources – the frame every screen sits in
 */
export declare const AppShell: React.FC<AppShellProps>;
export declare const AppShellRaw: React.FC<AppShellProps>;
export declare const AppShellDemo: React.FC<AppShellProps>;
export declare const WorkspacePanel: React.FC<AppShellProps>;
export default AppShell;
