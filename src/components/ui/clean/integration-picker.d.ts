import * as React from "react";

export interface IntegrationPickerProps {
  /** Each { id, name, domain, category, description, features, path + color or icon, connected } (default: 10 sample services) */
  integrations?: any;
  /** Your product's name in the title, e.g. “affectUI + Linear” (default: "affectUI") */
  appName?: any;
  /** Your product's mark on the black tile (default: the affectUI mark) */
  appIcon?: any;
  /** Id of the integration that is picked first (default: the first item) */
  defaultSelected?: any;
  /** Called when an integration is switched on or off */
  onToggle?: any;
  /** Called by “Explore integration” */
  onExplore?: any;
  /** Shows the back button and runs on ← in an empty search */
  onBack?: any;
  /** Runs on Esc in an empty search */
  onClose?: any;
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
 * Integration Picker — Integrations page of a command menu – search, a list of services and the picked one with its connection on two tiles
 */
export declare const IntegrationPicker: React.FC<IntegrationPickerProps>;
export declare const IntegrationPickerRaw: React.FC<IntegrationPickerProps>;
export declare const IntegrationPickerDemo: React.FC<IntegrationPickerProps>;

export default IntegrationPicker;
