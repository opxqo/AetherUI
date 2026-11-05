import type { App, AppCategory } from "./shared.js";
export type { App, AppCategory } from "./shared.js";
import * as React from "react";
export interface AppDirectoryProps extends Omit<React.HTMLAttributes<HTMLElement>, "apps" | "categories" | "title" | "subtitle" | "onToggle" | "demo" | "className" | "style" | "children" | "ref"> {
  /** id, name, vendor, description, categories, logo, tile color, essential and connected */
  "apps"?: App[];
  /** Sidebar entries with id, label and icon – essentials and all are built in */
  "categories"?: AppCategory[];
  /** Heading inside the card */
  "title"?: string;
  /** Line under the heading */
  "subtitle"?: string;
  /** Called after an app was connected or disconnected */
  "onToggle"?: (app: App, connected: boolean) => void;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const AppDirectory: React.FC<AppDirectoryProps | (Partial<AppDirectoryProps> & { demo: true })>;
export declare const AppDirectoryRaw: React.FC<AppDirectoryProps>;
export declare const AppDirectoryDemo: React.FC<Partial<AppDirectoryProps>>;
export default AppDirectory;
