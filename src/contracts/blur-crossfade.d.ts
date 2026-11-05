import * as React from "react";
export interface BlurCrossfadeProps extends Omit<React.HTMLAttributes<HTMLElement>, "id" | "duration" | "blur" | "morph" | "as" | "demo" | "className" | "style" | "children" | "ref"> {
  /** Key of the current content – changing it starts the swap */
  "id"?: string | number;
  /** Length of the swap and the size morph in ms */
  "duration"?: number;
  /** Blur in px at the outer ends of the fade */
  "blur"?: number;
  /** Which sides glide to the new size; both makes the box as wide as its content */
  "morph"?: "height" | "both" | "none";
  /** Root element – span inside buttons and other inline content */
  "as"?: "div" | "span";
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const BlurCrossfade: React.FC<BlurCrossfadeProps | (Partial<BlurCrossfadeProps> & { demo: true })>;
export declare const BlurCrossfadeRaw: React.FC<BlurCrossfadeProps>;
export declare const BlurCrossfadeDemo: React.FC<Partial<BlurCrossfadeProps>>;
export default BlurCrossfade;
