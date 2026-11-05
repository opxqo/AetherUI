import type { ProfileValues } from "./shared.js";
export type { ProfileValues } from "./shared.js";
import * as React from "react";
export interface SettingsProfileScreenProps extends Omit<React.HTMLAttributes<HTMLElement>, "profile" | "onSave" | "onNavigate" | "workspace" | "demo" | "className" | "style" | "children" | "ref"> {
  /** firstName, lastName, email, role?, timezone, weekStart, context, avatar?, hasPassword? – the sample profile when left out */
  "profile"?: ProfileValues;
  /** Called with the whole profile whenever something is saved – text on blur, choices at once */
  "onSave"?: (profile: ProfileValues) => void;
  /** Called with the label of a settings page, or "Back to app" */
  "onNavigate"?: (label: string) => void;
  /** Workspace name, used by the shell */
  "workspace"?: string;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const SettingsProfileScreen: React.FC<SettingsProfileScreenProps | (Partial<SettingsProfileScreenProps> & { demo: true })>;
export declare const SettingsProfileScreenRaw: React.FC<SettingsProfileScreenProps>;
export declare const SettingsProfileScreenDemo: React.FC<Partial<SettingsProfileScreenProps>>;
export declare const SettingsProfile: React.FC<SettingsProfileScreenProps | (Partial<SettingsProfileScreenProps> & { demo: true })>;
export default SettingsProfileScreen;
