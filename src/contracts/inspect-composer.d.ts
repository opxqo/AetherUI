import * as React from "react";
export interface InspectComposerProps extends Omit<React.HTMLAttributes<HTMLElement>, "demo" | "className" | "style" | "children" | "ref"> {
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const InspectComposer: React.FC<InspectComposerProps | (Partial<InspectComposerProps> & { demo: true })>;
export declare const InspectComposerRaw: React.FC<InspectComposerProps>;
export declare const InspectComposerDemo: React.FC<Partial<InspectComposerProps>>;
export default InspectComposer;
