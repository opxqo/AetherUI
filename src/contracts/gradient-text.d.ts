import * as React from "react";
export interface GradientTextProps extends Omit<React.HTMLAttributes<HTMLElement>, "colors" | "speed" | "sweep" | "as" | "demo" | "className" | "style" | "children" | "ref"> {
  /** Gradient start, end and up to two blob colors; replaces the dark-mode colors too */
  "colors"?: string[];
  /** Seconds per flow cycle */
  "speed"?: number;
  /** Sweep the color in from left to right when the text scrolls into view */
  "sweep"?: boolean;
  /** Element to render */
  "as"?: "span" | "h1" | "h2" | "p";
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const GradientText: React.FC<GradientTextProps | (Partial<GradientTextProps> & { demo: true })>;
export declare const GradientTextRaw: React.FC<GradientTextProps>;
export declare const GradientTextDemo: React.FC<Partial<GradientTextProps>>;
export default GradientText;
