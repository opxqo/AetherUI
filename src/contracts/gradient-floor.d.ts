import * as React from "react";
export interface GradientFloorProps extends Omit<React.HTMLAttributes<HTMLElement>, "colors" | "speed" | "demo" | "className" | "style" | "children" | "ref"> {
  /** Gradient from the crest down */
  "colors"?: [string, string, string];
  /** Seconds per morph loop; 0 keeps the shape still */
  "speed"?: number;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const GradientFloor: React.FC<GradientFloorProps | (Partial<GradientFloorProps> & { demo: true })>;
export declare const GradientFloorRaw: React.FC<GradientFloorProps>;
export declare const GradientFloorDemo: React.FC<Partial<GradientFloorProps>>;
export default GradientFloor;
