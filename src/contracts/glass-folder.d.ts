import * as React from "react";
export interface GlassFolderProps extends Omit<React.HTMLAttributes<HTMLElement>, "label" | "demo" | "className" | "style" | "children" | "ref"> {
  /** Accessible description of the illustration */
  "label"?: string;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const GlassFolder: React.FC<GlassFolderProps | (Partial<GlassFolderProps> & { demo: true })>;
export declare const GlassFolderRaw: React.FC<GlassFolderProps>;
export declare const GlassFolderDemo: React.FC<Partial<GlassFolderProps>>;
export default GlassFolder;
