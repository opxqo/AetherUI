import * as React from "react";

export interface GlassFolderProps {
  /** Accessible description of the illustration (default: "Blue folder holding three documents…") */
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
 * Glass Folder — Glassy blue folder with documents behind a frosted pocket that tips open on hover
 */
export declare const GlassFolder: React.FC<GlassFolderProps>;
export declare const GlassFolderRaw: React.FC<GlassFolderProps>;
export declare const GlassFolderDemo: React.FC<GlassFolderProps>;

export default GlassFolder;
