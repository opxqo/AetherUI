import * as React from "react";
export interface FolderScreenProps extends Omit<React.HTMLAttributes<HTMLElement>, "folder" | "onNavigate" | "workspace" | "user" | "demo" | "className" | "style" | "children" | "ref"> {
  /** Folder that is open – the title, crumbs and files follow it */
  "folder"?: string;
  /** Called with the label of a sidebar item or project */
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
export declare const FolderScreen: React.FC<FolderScreenProps | (Partial<FolderScreenProps> & { demo: true })>;
export declare const FolderScreenRaw: React.FC<FolderScreenProps>;
export declare const FolderScreenDemo: React.FC<Partial<FolderScreenProps>>;
export declare const Folder: React.FC<FolderScreenProps | (Partial<FolderScreenProps> & { demo: true })>;
export default FolderScreen;
