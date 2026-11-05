import * as React from "react";

export interface SettingsGeneralScreenProps {
  /** The workspace – the sample workspace when left out */
  workspace?: any;
  /** Called with the whole workspace whenever something is saved – text on blur, the icon at once */
  onSave?: any;
  /** Called once the deletion is confirmed by typing the workspace's name */
  onDelete?: any;
  /** Called with the label of a settings page, or "Back to app" */
  onNavigate?: any;
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
 * Settings / General — Workspace settings with a settings sidebar: icon, name and address as rows, a company context for the assistant and a danger zone that asks for the name
 */
export declare const SettingsGeneralScreen: React.FC<SettingsGeneralScreenProps>;
export declare const SettingsGeneralScreenRaw: React.FC<SettingsGeneralScreenProps>;
export declare const SettingsGeneralScreenDemo: React.FC<SettingsGeneralScreenProps>;
export declare const SettingsGeneral: React.FC<SettingsGeneralScreenProps>;
export default SettingsGeneralScreen;
