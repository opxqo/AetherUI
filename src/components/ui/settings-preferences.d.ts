import * as React from "react";

export type PreferenceValues = Record<string, any>;
export type Provider = Record<string, any>;

export interface SettingsPreferencesScreenProps {
  /** Default chat and image model, language, theme, app actions, chat tools, custom instructions (on, about, style) and memories – the sample person when left out */
  preferences?: PreferenceValues;
  /** The workspace's providers and models, as in Settings / Models – only models that are on can be picked */
  providers?: Provider[];
  /** Called with all settings whenever something is saved – text fields on blur, everything else at once */
  onSave?: (preferences: PreferenceValues) => void;
  /** Called with the label of a sidebar item */
  onNavigate?: (label: string) => void;
  /** Workspace name in the sidebar */
  workspace?: string;
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
 * Settings / Preferences — Personal preferences with a settings sidebar: default models with Auto and the Model Wheel, language and appearance, chat tools as tiles, custom instructions the model reads with every message and the memories it kept
 */
export declare const SettingsPreferencesScreen: React.FC<SettingsPreferencesScreenProps>;
export declare const SettingsPreferencesScreenRaw: React.FC<SettingsPreferencesScreenProps>;
export declare const SettingsPreferencesScreenDemo: React.FC<SettingsPreferencesScreenProps>;
export declare const SettingsPreferences: React.FC<SettingsPreferencesScreenProps>;
export default SettingsPreferencesScreen;
