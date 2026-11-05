import * as React from "react";

export interface GradientFloorProps {
  /** Gradient from the crest down (default: ["#FF7700", "#FF0055", "#0073FF"]) */
  colors?: [string, string, string];
  /** Seconds per morph loop; 0 keeps the shape still (default: 3) */
  speed?: number;
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
