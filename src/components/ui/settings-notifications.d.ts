import * as React from "react";

export interface SettingsNotificationsScreenProps {
  /** Digest on and its time, the weekly report, the types (id, title, note, channel: both, email, mobile or inbox) and quiet hours with from and to – the sample person when left out */
  notifications?: any;
  /** Called with all settings whenever something changes */
  onSave?: any;
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
 * Settings / Notifications — Notification settings with a settings sidebar: a daily digest with its time, a table of notification types each sent by email, mobile, both or only to the inbox, and quiet hours at night
 */
export declare const SettingsNotificationsScreen: React.FC<SettingsNotificationsScreenProps>;
export declare const SettingsNotificationsScreenRaw: React.FC<SettingsNotificationsScreenProps>;
export declare const SettingsNotificationsScreenDemo: React.FC<SettingsNotificationsScreenProps>;
export declare const SettingsNotifications: React.FC<SettingsNotificationsScreenProps>;
export default SettingsNotificationsScreen;
