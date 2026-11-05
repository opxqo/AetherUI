import * as React from "react";
export type SideFolderProps = {
  demo?: boolean;
  style?: React.CSSProperties;
  ref?: React.Ref<HTMLElement>;
  className?: string;
  /** Accessible description of the scene */
  label?: string;
};
/**
 * Side Folder — Glassy blue folder on its side, documents sliding out to the right as the pocket swings open on hover
 */
export declare const SideFolder: React.FC<SideFolderProps | (Partial<SideFolderProps> & { demo: true })>;
export declare const SideFolderRaw: React.FC<SideFolderProps>;
export declare const SideFolderDemo: React.FC<Partial<SideFolderProps>>;

export default SideFolder;
