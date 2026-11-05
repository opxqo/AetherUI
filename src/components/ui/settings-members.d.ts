import * as React from "react";

export type Member = Record<string, any>;
export type Team = Record<string, any>;
export type Members = Record<string, any>;
export type Teams = Record<string, any>;

export interface SettingsMembersScreenProps {
  /** { id, name?, email, role, plan, usage (0–1), invited? } – the sample members when left out */
  members?: Member[];
  /** { id, name, members: member ids } */
  teams?: Team[];
  /** Id of the person looking – marked (You) and never removed (default: "alex") */
  me?: string;
  /** Tab that is open first (default: "Members") */
  defaultTab?: "Members" | "Teams";
  /** Called with the label of a settings page, or "Back to app" */
  onNavigate?: (label: string) => void;
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
