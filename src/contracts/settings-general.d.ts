import type { WorkspaceValues } from "./shared.js";
export type { WorkspaceValues } from "./shared.js";
import * as React from "react";
export interface SettingsGeneralScreenProps extends Omit<React.HTMLAttributes<HTMLElement>, "workspace" | "onSave" | "onDelete" | "onNavigate" | "user" | "demo" | "className" | "style" | "children" | "ref"> {
  /** The workspace – the sample workspace when left out */
  "workspace"?: { name: string; slug: string; context: string; icon?: string };
  /** Called with the whole workspace whenever something is saved – text on blur, the icon at once */
  "onSave"?: (workspace: WorkspaceValues) => void;
  /** Called once the deletion is confirmed by typing the workspace's name */
  "onDelete"?: () => void;
  /** Called with the label of a settings page, or "Back to app" */
  "onNavigate"?: (label: string) => void;
  /** Account at the bottom of the sidebar */
  "user"?: { name: string; avatar?: string };
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const SettingsGeneralScreen: React.FC<SettingsGeneralScreenProps | (Partial<SettingsGeneralScreenProps> & { demo: true })>;
export declare const SettingsGeneralScreenRaw: React.FC<SettingsGeneralScreenProps>;
export declare const SettingsGeneralScreenDemo: React.FC<Partial<SettingsGeneralScreenProps>>;
export declare const SettingsGeneral: React.FC<SettingsGeneralScreenProps | (Partial<SettingsGeneralScreenProps> & { demo: true })>;
export default SettingsGeneralScreen;
