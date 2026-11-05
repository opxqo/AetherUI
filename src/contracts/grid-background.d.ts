import * as React from "react";
export type GridDirection = "up" | "down" | "left" | "right" | "diagonal";

export type GridBackgroundProps = {
  demo?: boolean;
  style?: React.CSSProperties;
  ref?: React.Ref<HTMLElement>;
  /** Content rendered above the grid */
  children?: React.ReactNode;
  /** Cell size in px */
  size?: number;
  /** Line color – defaults to a faint black, or a faint white in dark mode */
  color?: string;
  /** Seconds per cell; 0 keeps the grid still */
  speed?: number;
  /** Drift direction; "diagonal" runs from top right to bottom left */
  direction?: GridDirection;
  /** Uncover the grid with a growing circle when it first comes into view */
  reveal?: boolean;
  /** Radius of the edge fade, in % of the distance to the corners */
  fade?: number;
  className?: string;
};
/**
 * Grid Background — A fine line grid that drifts slowly behind your content and fades out towards the edges
 */
export declare const GridBackground: React.FC<GridBackgroundProps | (Partial<GridBackgroundProps> & { demo: true })>;
export declare const GridBackgroundRaw: React.FC<GridBackgroundProps>;
export declare const GridBackgroundDemo: React.FC<Partial<GridBackgroundProps>>;

export default GridBackground;
