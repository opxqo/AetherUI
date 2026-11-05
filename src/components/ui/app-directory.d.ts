import * as React from "react";

export interface AppDirectoryProps {
  /** id, name, vendor, description, categories, logo, tile color, essential and connected */
  apps?: any;
  /** Sidebar entries with id, label and icon – essentials and all are built in */
  categories?: any;
  /** Heading inside the card (default: "Integrations") */
  title?: any;
  /** Line under the heading */
  subtitle?: any;
  /** Called after an app was connected or disconnected */
  onToggle?: any;
  /** Extra class on the block */
  className?: any;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * App Directory — Browse, search and connect integrations – categories, filters and app cards with a connect flow
 */
export declare const AppDirectory: React.FC<AppDirectoryProps>;
export declare const AppDirectoryRaw: React.FC<AppDirectoryProps>;
export declare const AppDirectoryDemo: React.FC<AppDirectoryProps>;

export default AppDirectory;
