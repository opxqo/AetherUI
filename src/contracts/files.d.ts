import * as React from "react";
export interface FilesScreenProps extends Omit<React.HTMLAttributes<HTMLElement>, "onNavigate" | "workspace" | "user" | "demo" | "className" | "style" | "children" | "ref"> {
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
export declare const FilesScreen: React.FC<FilesScreenProps | (Partial<FilesScreenProps> & { demo: true })>;
export declare const FilesScreenRaw: React.FC<FilesScreenProps>;
export declare const FilesScreenDemo: React.FC<Partial<FilesScreenProps>>;
export declare const Files: React.FC<FilesScreenProps | (Partial<FilesScreenProps> & { demo: true })>;
export default FilesScreen;
