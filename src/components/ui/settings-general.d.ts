import * as React from "react";

export type WorkspaceValues = Record<string, any>;

export interface SettingsGeneralScreenProps {
  /** The workspace – the sample workspace when left out */
  workspace?: { name: string; slug: string; context: string; icon?: string };
  /** Called with the whole workspace whenever something is saved – text on blur, the icon at once */
  onSave?: (workspace: WorkspaceValues) => void;
  /** Called once the deletion is confirmed by typing the workspace's name */
  onDelete?: () => void;
  /** Called with the label of a settings page, or "Back to app" */
  onNavigate?: (label: string) => void;
  /** Account at the bottom of the sidebar */
  user?: { name: string; avatar?: string };
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
