import * as React from "react";

export interface SettingsSecurityScreenProps {
  /** Domains, join by domain, SSO, metadata URL, two-step verification, session length and IP ranges – the sample workspace when left out */
  security?: any;
  /** Called with all settings whenever something changes – switches and lists at once, the metadata URL on blur */
  onSave?: any;
  /** Checks the domain's TXT record; resolve true once it is found. The demo waits a moment and says yes */
  onVerifyDomain?: any;
  /** Called once signing everyone out is confirmed */
  onSignOutAll?: any;
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
 * Settings / Security — Security settings with a settings sidebar: email domains to verify, sign-in rules with SSO and two-step verification, the identity provider details to copy, an IP allowlist and a danger zone that signs everyone out
 */
export declare const SettingsSecurityScreen: React.FC<SettingsSecurityScreenProps>;
export declare const SettingsSecurityScreenRaw: React.FC<SettingsSecurityScreenProps>;
export declare const SettingsSecurityScreenDemo: React.FC<SettingsSecurityScreenProps>;
export declare const SettingsSecurity: React.FC<SettingsSecurityScreenProps>;
export default SettingsSecurityScreen;
