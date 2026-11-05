import * as React from "react";

export interface GradientFloorProps {
  /** Content rendered above the floor */
  children?: any;
  /** Gradient from the crest down (default: ["#FF7700", "#FF0055", "#0073FF"]) */
  colors?: any;
  /** Seconds per morph loop; 0 keeps the shape still (default: 3) */
  speed?: any;
  /** Extra class on the root, e.g. for height or rounded corners */
  className?: any;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Gradient Floor — A blurred colour gradient that glows up from the bottom edge – two layers that drift and morph
 */
export declare const GradientFloor: React.FC<GradientFloorProps>;
export declare const GradientFloorRaw: React.FC<GradientFloorProps>;
export declare const GradientFloorDemo: React.FC<GradientFloorProps>;

export default GradientFloor;
