import * as React from "react";

export type App = Record<string, any>;
export type AppCategory = Record<string, any>;

export interface AppDirectoryProps {
  /** id, name, vendor, description, categories, logo, tile color, essential and connected */
  apps?: App[];
  /** Sidebar entries with id, label and icon – essentials and all are built in */
  categories?: AppCategory[];
  /** Heading inside the card (default: "Integrations") */
  title?: string;
  /** Line under the heading */
  subtitle?: string;
  /** Called after an app was connected or disconnected */
  onToggle?: (app: App, connected: boolean) => void;
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
