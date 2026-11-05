import type { ShellNavItem, ShellChat, ShellGroup, Project } from "./shared.js";
export type { ShellNavItem, ShellChat, ShellGroup, Project } from "./shared.js";
import * as React from "react";
export interface AppShellFlatProps extends Omit<React.HTMLAttributes<HTMLElement>, "header" | "active" | "onNavigate" | "workspace" | "user" | "nav" | "projects" | "chats" | "onOpenChat" | "groups" | "panel" | "demo" | "className" | "style" | "children" | "ref"> {
  /** The header across the app – workspace and sidebar toggle, the page's title and actions, the work area's title; false for none */
  "header"?: { title: React.ReactNode; actions?: React.ReactNode } | false;
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
  /** Lists under the menu instead of Projects, e.g. Tools or Pipelines */
  "groups"?: ShellGroup[];
  /** The work area on the right – WorkspacePanel or your own content; white like the page, resizable and collapsible */
  "panel"?: React.ReactNode;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const AppShellFlat: React.FC<AppShellFlatProps | (Partial<AppShellFlatProps> & { demo: true })>;
export declare const AppShellFlatRaw: React.FC<AppShellFlatProps>;
export declare const AppShellFlatDemo: React.FC<Partial<AppShellFlatProps>>;
export declare const WorkspacePanel: React.FC<AppShellFlatProps | (Partial<AppShellFlatProps> & { demo: true })>;
export default AppShellFlat;
