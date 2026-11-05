import type { Id, Integration } from "./shared.js";
export type { Id, Integration } from "./shared.js";
import * as React from "react";
export interface IntegrationPickerProps extends Omit<React.HTMLAttributes<HTMLElement>, "integrations" | "appName" | "appIcon" | "defaultSelected" | "onToggle" | "onExplore" | "onBack" | "onClose" | "demo" | "className" | "style" | "children" | "ref"> {
  /** Each { id, name, domain, category, description, features, path + color or icon, connected } */
  "integrations"?: Integration[];
  /** Your product's name in the title, e.g. “affectUI + Linear” */
  "appName"?: string;
  /** Your product's mark on the black tile */
  "appIcon"?: React.ReactNode;
  /** Id of the integration that is picked first */
  "defaultSelected"?: string;
  /** Called when an integration is switched on or off */
  "onToggle"?: (id: string, connected: boolean) => void;
  /** Called by “Explore integration” */
  "onExplore"?: (id: string) => void;
  /** Shows the back button and runs on ← in an empty search */
  "onBack"?: () => void;
  /** Runs on Esc in an empty search */
  "onClose"?: () => void;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const IntegrationPicker: React.FC<IntegrationPickerProps | (Partial<IntegrationPickerProps> & { demo: true })>;
export declare const IntegrationPickerRaw: React.FC<IntegrationPickerProps>;
export declare const IntegrationPickerDemo: React.FC<Partial<IntegrationPickerProps>>;
export default IntegrationPicker;
