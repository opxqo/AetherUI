import * as React from "react";

export interface FolderScreenProps {
  /** Folder that is open – the title, crumbs and files follow it (default: "Q3 Campaign") */
  folder?: string;
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
 * Folders / Detail — Inside one folder: breadcrumbs, file cards with previews, and an empty state
 */
export declare const FolderScreen: React.FC<FolderScreenProps>;
export declare const FolderScreenRaw: React.FC<FolderScreenProps>;
export declare const FolderScreenDemo: React.FC<FolderScreenProps>;
export declare const Folder: React.FC<FolderScreenProps>;
export default FolderScreen;
