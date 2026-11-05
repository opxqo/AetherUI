import * as React from "react";

export interface BlurCrossfadeProps {
  /** Key of the current content – changing it starts the swap */
  id?: any;
  /** Content for the current id */
  children?: any;
  /** Length of the swap and the size morph in ms (default: 420) */
  duration?: any;
  /** Blur in px at the outer ends of the fade (default: 10) */
  blur?: any;
  /** Which sides glide to the new size; both makes the box as wide as its content (default: "height") */
  morph?: any;
  /** Root element – span inside buttons and other inline content (default: "div") */
  as?: any;
  /** Extra class on the box */
  className?: any;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Blur Crossfade — Swaps content with a soft blur while the box glides smoothly to the size of what comes next
 */
export declare const BlurCrossfade: React.FC<BlurCrossfadeProps>;
export declare const BlurCrossfadeRaw: React.FC<BlurCrossfadeProps>;
export declare const BlurCrossfadeDemo: React.FC<BlurCrossfadeProps>;

export default BlurCrossfade;
