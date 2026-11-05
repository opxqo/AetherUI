import * as React from "react";

export type Integration = Record<string, any>;

export interface IntegrationPickerProps {
  /** Each { id, name, domain, category, description, features, path + color or icon, connected } (default: 10 sample services) */
  integrations?: Integration[];
  /** Your product's name in the title, e.g. “affectUI + Linear” (default: "affectUI") */
  appName?: string;
  /** Your product's mark on the black tile (default: the affectUI mark) */
  appIcon?: ReactNode;
  /** Id of the integration that is picked first (default: the first item) */
  defaultSelected?: string;
  /** Called when an integration is switched on or off */
  onToggle?: (id: string, connected: boolean) => void;
  /** Called by “Explore integration” */
  onExplore?: (id: string) => void;
  /** Shows the back button and runs on ← in an empty search */
  onBack?: () => void;
  /** Runs on Esc in an empty search */
  onClose?: () => void;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Integration Picker — Integrations page of a command menu – search, a list of services and the picked one with its connection on two tiles
 */
export declare const IntegrationPicker: React.FC<IntegrationPickerProps>;
export declare const IntegrationPickerRaw: React.FC<IntegrationPickerProps>;
export declare const IntegrationPickerDemo: React.FC<IntegrationPickerProps>;

export default IntegrationPicker;
