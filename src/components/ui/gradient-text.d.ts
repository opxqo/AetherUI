import * as React from "react";

export interface GradientTextProps {
  /** The text to fill with the gradient */
  children?: any;
  /** Gradient start, end and up to two blob colors; replaces the dark-mode colors too (default: ["#dd0674", "#5e3ee0", "#ff5fae", "#7c5cff"]) */
  colors?: any;
  /** Seconds per flow cycle (default: 8) */
  speed?: any;
  /** Sweep the color in from left to right when the text scrolls into view (default: true) */
  sweep?: any;
  /** Element to render (default: "span") */
  as?: any;
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
 * Gradient Text — Letters cut from a liquid, ever-flowing gradient – the color sweeps across the word the first time it's seen
 */
export declare const GradientText: React.FC<GradientTextProps>;
export declare const GradientTextRaw: React.FC<GradientTextProps>;
export declare const GradientTextDemo: React.FC<GradientTextProps>;

export default GradientText;
