import * as React from "react";

export interface GridBackgroundProps {
  /** Content rendered above the grid */
  children?: any;
  /** Cell size in px (default: 48) */
  size?: any;
  /** Line color; dark mode defaults to rgba(255,255,255,.07) (default: rgba(0,0,0,.07)) */
  color?: any;
  /** Seconds per cell; 0 keeps the grid still (default: 3) */
  speed?: any;
  /** Drift direction; diagonal runs from top right to bottom left (default: "diagonal") */
  direction?: any;
  /** Uncover the grid with a circle growing from the center when it first comes into view (default: true) */
  reveal?: any;
  /** Radius of the edge fade, in % of the distance to the corners (default: 70) */
  fade?: any;
  /** Extra class on the container – give it a height or let the content size it */
  className?: any;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Grid Background — A fine line grid that drifts slowly behind your content and fades out towards the edges
 */
export declare const GridBackground: React.FC<GridBackgroundProps>;
export declare const GridBackgroundRaw: React.FC<GridBackgroundProps>;
export declare const GridBackgroundDemo: React.FC<GridBackgroundProps>;

export default GridBackground;
