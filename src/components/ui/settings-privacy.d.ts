import * as React from "react";

export interface SettingsPrivacyScreenProps {
  /** The switches, this browser's cookies, product emails, sessions (device, name, meta, current) and shared chats (title, scope, shared, views) – the sample person when left out */
  privacy?: any;
  /** Called with all settings whenever something changes, signing out a session and stopping a share included */
  onSave?: any;
  /** Called when an export of every chat and file is requested */
  onExport?: any;
  /** Called once deleting every chat is confirmed */
  onDeleteChats?: any;
  /** Called with the label of a sidebar item */
  onNavigate?: any;
  /** Workspace name in the sidebar */
  workspace?: any;
  /** Account at the bottom of the sidebar */
  user?: any;
  /** Extra class on the root */
  className?: any;
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
