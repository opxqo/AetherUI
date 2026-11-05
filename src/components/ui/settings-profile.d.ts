import * as React from "react";

export interface SettingsProfileScreenProps {
  /** firstName, lastName, email, role?, timezone, weekStart, context, avatar?, hasPassword? – the sample profile when left out */
  profile?: any;
  /** Called with the whole profile whenever something is saved – text on blur, choices at once */
  onSave?: any;
  /** Called with the label of a settings page, or "Back to app" */
  onNavigate?: any;
  /** Workspace name, used by the shell (default: "Acme") */
  workspace?: any;
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
 * Settings / Profile — Profile settings with a settings sidebar: picture, name, role and email as rows, time preferences, personal context for the assistant and the password
 */
export declare const SettingsProfileScreen: React.FC<SettingsProfileScreenProps>;
export declare const SettingsProfileScreenRaw: React.FC<SettingsProfileScreenProps>;
export declare const SettingsProfileScreenDemo: React.FC<SettingsProfileScreenProps>;
export declare const SettingsProfile: React.FC<SettingsProfileScreenProps>;
export default SettingsProfileScreen;
