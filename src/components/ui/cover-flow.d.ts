import * as React from "react";

export interface CoverFlowProps {
  /** { id, title?, subtitle?, image?, alt?, cover? } – pass an image URL or any ReactNode as cover */
  items?: any;
  /** Controlled front cover – pair with onIndexChange */
  index?: any;
  /** Starting cover when uncontrolled (default: middle cover) */
  defaultIndex?: any;
  /** Called whenever a different cover reaches the front, also while dragging */
  onIndexChange?: any;
  /** Clicking the front cover or pressing Enter – e.g. open a detail view */
  onSelect?: any;
  /** Cover width in px – the whole row scales down in narrow containers (to half at most) (default: 280) */
  itemWidth?: any;
  /** Cover height in px (default: 280) */
  itemHeight?: any;
  /** How far the side covers turn away, in degrees (default: 50) */
  angle?: any;
  /** Mirror the covers on the floor (default: true) */
  reflection?: any;
  /** Title and subtitle of the front cover (default: true) */
  caption?: any;
  /** Replaces the default caption */
  renderCaption?: any;
  /** Previous and next buttons beside the caption (default: true) */
  controls?: any;
  /** Small position ticks under the caption – clicking one jumps there (default: true) */
  ticks?: any;
  /** A soft click each time a new cover reaches the front (Web Audio, no file) (default: false) */
  sound?: any;
  /** Names the carousel (default: "Cover flow") */
  "aria-label"?: any;
  /** Extra class on the root */
  className?: any;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Cover Flow — Browse covers in 3D – drag, flick or scrub the row, it springs to the nearest cover; images drift in their frames over a soft reflection
 */
export declare const CoverFlow: React.FC<CoverFlowProps>;
export declare const CoverFlowRaw: React.FC<CoverFlowProps>;
export declare const CoverFlowDemo: React.FC<CoverFlowProps>;

export default CoverFlow;
