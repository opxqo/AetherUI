import * as React from "react";

export interface GradientTextProps {
  /** Gradient start, end and up to two blob colors; replaces the dark-mode colors too (default: ["#dd0674", "#5e3ee0", "#ff5fae", "#7c5cff"]) */
  colors?: string[];
  /** Seconds per flow cycle (default: 8) */
  speed?: number;
  /** Sweep the color in from left to right when the text scrolls into view (default: true) */
  sweep?: boolean;
  /** Element to render (default: "span") */
  as?: "span" | "h1" | "h2" | "p";
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
