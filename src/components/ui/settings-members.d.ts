import * as React from "react";

export interface SettingsMembersScreenProps {
  /** { id, name?, email, role, plan, usage (0–1), invited? } – the sample members when left out */
  members?: any;
  /** { id, name, members: member ids } */
  teams?: any;
  /** Id of the person looking – marked (You) and never removed (default: "alex") */
  me?: any;
  /** Tab that is open first (default: "Members") */
  defaultTab?: any;
  /** Called with the label of a settings page, or "Back to app" */
  onNavigate?: any;
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
 * Settings / Teams — Members and teams in the settings: seats at a glance, search, role filter, export and invite, members with role, plan and usage, bulk changes, and teams
 */
export declare const SettingsMembersScreen: React.FC<SettingsMembersScreenProps>;
export declare const SettingsMembersScreenRaw: React.FC<SettingsMembersScreenProps>;
export declare const SettingsMembersScreenDemo: React.FC<SettingsMembersScreenProps>;
export declare const SettingsMembers: React.FC<SettingsMembersScreenProps>;
export default SettingsMembersScreen;
