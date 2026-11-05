import * as React from "react";

export type PrivacyValues = Record<string, any>;

export interface SettingsPrivacyScreenProps {
  /** The switches, this browser's cookies, product emails, sessions (device, name, meta, current) and shared chats (title, scope, shared, views) – the sample person when left out */
  privacy?: PrivacyValues;
  /** Called with all settings whenever something changes, signing out a session and stopping a share included */
  onSave?: (privacy: PrivacyValues) => void;
  /** Called when an export of every chat and file is requested */
  onExport?: () => void;
  /** Called once deleting every chat is confirmed */
  onDeleteChats?: () => void;
  /** Called with the label of a sidebar item */
  onNavigate?: (label: string) => void;
  /** Workspace name in the sidebar */
  workspace?: string;
  /** Account at the bottom of the sidebar */
  user?: { name: string; avatar?: string };
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Settings / Privacy — Privacy settings with a settings sidebar: switches for ad measurement, analytics and training on chats, this browser's cookies, product emails, active sessions to sign out, chats shared by link and a danger zone to export or delete every chat
 */
export declare const SettingsPrivacyScreen: React.FC<SettingsPrivacyScreenProps>;
export declare const SettingsPrivacyScreenRaw: React.FC<SettingsPrivacyScreenProps>;
export declare const SettingsPrivacyScreenDemo: React.FC<SettingsPrivacyScreenProps>;
export declare const SettingsPrivacy: React.FC<SettingsPrivacyScreenProps>;
export default SettingsPrivacyScreen;
