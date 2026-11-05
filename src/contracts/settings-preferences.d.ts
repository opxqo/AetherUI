import type { Provider, PreferenceValues } from "./shared.js";
export type { Provider, PreferenceValues } from "./shared.js";
import * as React from "react";
export interface SettingsPreferencesScreenProps extends Omit<React.HTMLAttributes<HTMLElement>, "preferences" | "providers" | "onSave" | "onNavigate" | "workspace" | "user" | "demo" | "className" | "style" | "children" | "ref"> {
  /** Default chat and image model, language, theme, app actions, chat tools, custom instructions (on, about, style) and memories – the sample person when left out */
  "preferences"?: PreferenceValues;
  /** The workspace's providers and models, as in Settings / Models – only models that are on can be picked */
  "providers"?: Provider[];
  /** Called with all settings whenever something is saved – text fields on blur, everything else at once */
  "onSave"?: (preferences: PreferenceValues) => void;
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
export declare const SettingsPreferencesScreen: React.FC<SettingsPreferencesScreenProps | (Partial<SettingsPreferencesScreenProps> & { demo: true })>;
export declare const SettingsPreferencesScreenRaw: React.FC<SettingsPreferencesScreenProps>;
export declare const SettingsPreferencesScreenDemo: React.FC<Partial<SettingsPreferencesScreenProps>>;
export declare const SettingsPreferences: React.FC<SettingsPreferencesScreenProps | (Partial<SettingsPreferencesScreenProps> & { demo: true })>;
export default SettingsPreferencesScreen;
