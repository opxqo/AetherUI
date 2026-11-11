import type { Provider } from "./shared.js";
export type { Provider } from "./shared.js";
import * as React from "react";
export interface SettingsModelsScreenProps extends Omit<React.HTMLAttributes<HTMLElement>, "providers" | "defaultChat" | "defaultImage" | "defaultVideo" | "defaultAudio" | "keys" | "onSave" | "onNavigate" | "workspace" | "user" | "demo" | "className" | "style" | "children" | "ref"> {
  /** Providers with id, name, region (eu, global or custom), logo and their models – each model has id, name, kind (chat, image, video or audio), on and access. The sample list when left out */
  "providers"?: Provider[];
  /** Model id of the default chat model, or auto – Auto shows a short explainer under it */
  "defaultChat"?: string;
  /** Model id of the default image model */
  "defaultImage"?: string;
  /** Model id of the default video model */
  "defaultVideo"?: string;
  /** Model id of the default audio model */
  "defaultAudio"?: string;
  /** The workspace's own API keys, already masked */
  "keys"?: { provider: string; masked: string; added: string }[];
  /** Called with providers, defaults and keys whenever something changes. A switched-off default falls back – chat to Auto */
  "onSave"?: (state: { providers: Provider[]; defaultChat: string; defaultImage: string; defaultVideo: string; defaultAudio: string; keys: { provider: string; masked: string; added: string }[] }) => void;
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
export declare const SettingsModelsScreen: React.FC<SettingsModelsScreenProps | (Partial<SettingsModelsScreenProps> & { demo: true })>;
export declare const SettingsModelsScreenRaw: React.FC<SettingsModelsScreenProps>;
export declare const SettingsModelsScreenDemo: React.FC<Partial<SettingsModelsScreenProps>>;
export declare const SettingsModels: React.FC<SettingsModelsScreenProps | (Partial<SettingsModelsScreenProps> & { demo: true })>;
export default SettingsModelsScreen;
