import type { Id, Member, Team } from "./shared.js";
export type { Id, Member, Team } from "./shared.js";
import * as React from "react";
export interface SettingsMembersScreenProps extends Omit<React.HTMLAttributes<HTMLElement>, "members" | "teams" | "me" | "defaultTab" | "onNavigate" | "demo" | "className" | "style" | "children" | "ref"> {
  /** { id, name?, email, role, plan, usage (0–1), invited? } – the sample members when left out */
  "members"?: Member[];
  /** { id, name, members: member ids } */
  "teams"?: Team[];
  /** Id of the person looking – marked (You) and never removed */
  "me"?: string;
  /** Tab that is open first */
  "defaultTab"?: "Members" | "Teams";
  /** Called with the label of a settings page, or "Back to app" */
  "onNavigate"?: (label: string) => void;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const SettingsMembersScreen: React.FC<SettingsMembersScreenProps | (Partial<SettingsMembersScreenProps> & { demo: true })>;
export declare const SettingsMembersScreenRaw: React.FC<SettingsMembersScreenProps>;
export declare const SettingsMembersScreenDemo: React.FC<Partial<SettingsMembersScreenProps>>;
export declare const SettingsMembers: React.FC<SettingsMembersScreenProps | (Partial<SettingsMembersScreenProps> & { demo: true })>;
export default SettingsMembersScreen;
