import type { NotificationValues } from "./shared.js";
export type { NotificationValues } from "./shared.js";
import * as React from "react";
export interface SettingsNotificationsScreenProps extends Omit<React.HTMLAttributes<HTMLElement>, "notifications" | "onSave" | "onNavigate" | "workspace" | "user" | "demo" | "className" | "style" | "children" | "ref"> {
  /** Digest on and its time, the weekly report, the types (id, title, note, channel: both, email, mobile or inbox) and quiet hours with from and to – the sample person when left out */
  "notifications"?: NotificationValues;
  /** Called with all settings whenever something changes */
  "onSave"?: (notifications: NotificationValues) => void;
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
export declare const SettingsNotificationsScreen: React.FC<SettingsNotificationsScreenProps | (Partial<SettingsNotificationsScreenProps> & { demo: true })>;
export declare const SettingsNotificationsScreenRaw: React.FC<SettingsNotificationsScreenProps>;
export declare const SettingsNotificationsScreenDemo: React.FC<Partial<SettingsNotificationsScreenProps>>;
export declare const SettingsNotifications: React.FC<SettingsNotificationsScreenProps | (Partial<SettingsNotificationsScreenProps> & { demo: true })>;
export default SettingsNotificationsScreen;
