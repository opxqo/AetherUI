import * as React from "react";

export interface FilesScreenProps {
  /** Called with the label of a sidebar item or project */
  onNavigate?: (label: string) => void;
  /** Workspace name in the sidebar (default: "Acme") */
  workspace?: string;
  /** Account at the bottom of the sidebar (default: { name: "Alex Morgan" }) */
  user?: { name: string; avatar?: string };
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Folders / Overview — Folder overview with tabs, search, sort, grid/list toggle and file templates
 */
export declare const FilesScreen: React.FC<FilesScreenProps>;
export declare const FilesScreenRaw: React.FC<FilesScreenProps>;
export declare const FilesScreenDemo: React.FC<FilesScreenProps>;
export declare const Files: React.FC<FilesScreenProps>;
export default FilesScreen;
