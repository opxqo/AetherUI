import * as React from "react";

export type CoverFlowItem = Record<string, any>;

export interface CoverFlowProps {
  /** { id, title?, subtitle?, image?, alt?, cover? } – pass an image URL or any ReactNode as cover */
  items?: CoverFlowItem[];
  /** Controlled front cover – pair with onIndexChange */
  index?: number;
  /** Starting cover when uncontrolled (default: middle cover) */
  defaultIndex?: number;
  /** Called whenever a different cover reaches the front, also while dragging */
  onIndexChange?: (index: number) => void;
  /** Clicking the front cover or pressing Enter – e.g. open a detail view */
  onSelect?: (item: any, index: any) => void;
  /** Cover width in px – the whole row scales down in narrow containers (to half at most) (default: 280) */
  itemWidth?: number;
  /** Cover height in px (default: 280) */
  itemHeight?: number;
  /** How far the side covers turn away, in degrees (default: 50) */
  angle?: number;
  /** Mirror the covers on the floor (default: true) */
  reflection?: boolean;
  /** Title and subtitle of the front cover (default: true) */
  caption?: boolean;
  /** Replaces the default caption */
  renderCaption?: (item: any, index: any) => ReactNode;
  /** Previous and next buttons beside the caption (default: true) */
  controls?: boolean;
  /** Small position ticks under the caption – clicking one jumps there (default: true) */
  ticks?: boolean;
  /** A soft click each time a new cover reaches the front (Web Audio, no file) (default: false) */
  sound?: boolean;
  /** Names the carousel (default: "Cover flow") */
  "aria-label"?: string;
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
