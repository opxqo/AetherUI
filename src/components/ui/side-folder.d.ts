import * as React from "react";

export interface SideFolderProps {
  /** Accessible description of the illustration (default: "Blue folder on its side…") */
  label?: any;
  /** Extra class on the root, e.g. for width or margins */
  className?: any;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Side Folder — Glassy blue folder on its side, documents sliding out to the right as the pocket swings open on hover
 */
export declare const SideFolder: React.FC<SideFolderProps>;
export declare const SideFolderRaw: React.FC<SideFolderProps>;
export declare const SideFolderDemo: React.FC<SideFolderProps>;

export default SideFolder;
