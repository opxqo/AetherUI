import * as React from "react";

export interface SettingsModelsScreenProps {
  /** Providers with id, name, region (eu, global or custom), logo and their models – each model has id, name, kind (chat or image), on and access. The sample list when left out */
  providers?: any;
  /** Model id of the default chat model, or auto – Auto shows a short explainer under it (default: "auto") */
  defaultChat?: any;
  /** Model id of the default image model (default: "gpt-image") */
  defaultImage?: any;
  /** The workspace's own API keys, already masked (default: []) */
  keys?: any;
  /** Called with providers, defaults and keys whenever something changes. A switched-off default falls back – chat to Auto */
  onSave?: any;
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
 * Settings / Models — Model settings with a settings sidebar: default chat and image models with an animated Auto explainer, every provider's models grouped by hosting region with a switch and access per model, filter, search, custom endpoints and your own API keys
 */
export declare const SettingsModelsScreen: React.FC<SettingsModelsScreenProps>;
export declare const SettingsModelsScreenRaw: React.FC<SettingsModelsScreenProps>;
export declare const SettingsModelsScreenDemo: React.FC<SettingsModelsScreenProps>;
export declare const SettingsModels: React.FC<SettingsModelsScreenProps>;
export default SettingsModelsScreen;
