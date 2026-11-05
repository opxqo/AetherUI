import type { SecurityValues } from "./shared.js";
export type { SecurityValues } from "./shared.js";
import * as React from "react";
export interface SettingsSecurityScreenProps extends Omit<React.HTMLAttributes<HTMLElement>, "security" | "onSave" | "onVerifyDomain" | "onSignOutAll" | "onNavigate" | "workspace" | "user" | "demo" | "className" | "style" | "children" | "ref"> {
  /** Domains, join by domain, SSO, metadata URL, two-step verification, session length and IP ranges – the sample workspace when left out */
  "security"?: SecurityValues;
  /** Called with all settings whenever something changes – switches and lists at once, the metadata URL on blur */
  "onSave"?: (security: SecurityValues) => void;
  /** Checks the domain's TXT record; resolve true once it is found. The demo waits a moment and says yes */
  "onVerifyDomain"?: (domain: string) => Promise<boolean>;
  /** Called once signing everyone out is confirmed */
  "onSignOutAll"?: () => void;
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
export declare const SettingsSecurityScreen: React.FC<SettingsSecurityScreenProps | (Partial<SettingsSecurityScreenProps> & { demo: true })>;
export declare const SettingsSecurityScreenRaw: React.FC<SettingsSecurityScreenProps>;
export declare const SettingsSecurityScreenDemo: React.FC<Partial<SettingsSecurityScreenProps>>;
export declare const SettingsSecurity: React.FC<SettingsSecurityScreenProps | (Partial<SettingsSecurityScreenProps> & { demo: true })>;
export default SettingsSecurityScreen;
