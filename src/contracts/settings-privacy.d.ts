import type { PrivacyValues } from "./shared.js";
export type { PrivacyValues } from "./shared.js";
import * as React from "react";
export interface SettingsPrivacyScreenProps extends Omit<React.HTMLAttributes<HTMLElement>, "privacy" | "onSave" | "onExport" | "onDeleteChats" | "onNavigate" | "workspace" | "user" | "demo" | "className" | "style" | "children" | "ref"> {
  /** The switches, this browser's cookies, product emails, sessions (device, name, meta, current) and shared chats (title, scope, shared, views) – the sample person when left out */
  "privacy"?: PrivacyValues;
  /** Called with all settings whenever something changes, signing out a session and stopping a share included */
  "onSave"?: (privacy: PrivacyValues) => void;
  /** Called when an export of every chat and file is requested */
  "onExport"?: () => void;
  /** Called once deleting every chat is confirmed */
  "onDeleteChats"?: () => void;
  /** Called with the label of a sidebar item */
  "onNavigate"?: (label: string) => void;
  /** Workspace name in the sidebar */
  "workspace"?: string;
  /** Account at the bottom of the sidebar */
  "user"?: { name: string; avatar?: string };
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const SettingsPrivacyScreen: React.FC<SettingsPrivacyScreenProps | (Partial<SettingsPrivacyScreenProps> & { demo: true })>;
export declare const SettingsPrivacyScreenRaw: React.FC<SettingsPrivacyScreenProps>;
export declare const SettingsPrivacyScreenDemo: React.FC<Partial<SettingsPrivacyScreenProps>>;
export declare const SettingsPrivacy: React.FC<SettingsPrivacyScreenProps | (Partial<SettingsPrivacyScreenProps> & { demo: true })>;
export default SettingsPrivacyScreen;
