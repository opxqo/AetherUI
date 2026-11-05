import * as React from "react";

export type ShellNavItem = Record<string, any>;
export type ShellChat = Record<string, any>;
export type ShellGroup = Record<string, any>;

export interface AppShellFlatProps {
  /** The header across the app – workspace and sidebar toggle, the page's title and actions, the work area's title; false for none (default: the open page's name, share and more) */
  header?: { title: ReactNode; actions?: ReactNode } | false;
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
  /** Lists under the menu instead of Projects, e.g. Tools or Pipelines */
  groups?: ShellGroup[];
  /** The work area on the right – WorkspacePanel or your own content; white like the page, resizable and collapsible */
  panel?: ReactNode;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * App Shell Flat — The App Shell laid flat – gray sidebar, an edge-to-edge page and the work area beside it, split by single hairlines
 */
export declare const AppShellFlat: React.FC<AppShellFlatProps>;
export declare const AppShellFlatRaw: React.FC<AppShellFlatProps>;
export declare const AppShellFlatDemo: React.FC<AppShellFlatProps>;
export declare const WorkspacePanel: React.FC<AppShellFlatProps>;
export default AppShellFlat;
