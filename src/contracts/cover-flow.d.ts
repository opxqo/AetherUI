import * as React from "react";
export type CoverFlowItem = {
  id: string | number;
  title?: string;
  subtitle?: string;
  /** Image URL – or pass your own cover with `cover` */
  image?: string;
  alt?: string;
  /** Any content instead of an image: artwork, a video, a product card */
  cover?: React.ReactNode;
};

export type CoverFlowProps = {
  demo?: boolean;
  style?: React.CSSProperties;
  ref?: React.Ref<HTMLElement>;
  items: CoverFlowItem[];
  /** Controlled front cover */
  index?: number;
  /** Starting cover when uncontrolled – defaults to the middle one */
  defaultIndex?: number;
  onIndexChange?: (index: number) => void;
  /** Clicking (or pressing Enter on) the cover in front */
  onSelect?: (item: CoverFlowItem, index: number) => void;
  /** Cover size in px – scales down on narrow containers */
  itemWidth?: number;
  itemHeight?: number;
  /** How far the side covers turn away, in degrees */
  angle?: number;
  /** Mirror the covers on the floor */
  reflection?: boolean;
  /** Title and subtitle of the front cover */
  caption?: boolean;
  /** Replaces the default caption (title and subtitle) */
  renderCaption?: (item: CoverFlowItem, index: number) => React.ReactNode;
  /** Previous / next buttons next to the caption */
  controls?: boolean;
  /** A row of small position ticks under the caption */
  ticks?: boolean;
  /** A soft click each time a new cover reaches the front */
  sound?: boolean;
  "aria-label"?: string;
  className?: string;
};
/**
 * Cover Flow — Browse covers in 3D – drag, flick or scrub the row, it springs to the nearest cover; images drift in their frames over a soft reflection
 */
export declare const CoverFlow: React.FC<CoverFlowProps | (Partial<CoverFlowProps> & { demo: true })>;
export declare const CoverFlowRaw: React.FC<CoverFlowProps>;
export declare const CoverFlowDemo: React.FC<Partial<CoverFlowProps>>;

export default CoverFlow;
