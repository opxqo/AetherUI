import * as React from "react";

export interface TextRevealProps {
  /** The text to reveal */
  text?: any;
  /** Reveal word by word or letter by letter (default: "word") */
  by?: any;
  /** Time between two pieces, in ms (default: 40) */
  stagger?: any;
  /** Wait before the first piece, in ms (default: 0) */
  delay?: any;
  /** Time each piece takes to arrive, in ms (default: 700) */
  duration?: any;
  /** Element to render (default: "p") */
  as?: any;
  /** Reveal only the first time; otherwise it plays again each time it enters the view (default: true) */
  once?: any;
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
 * Text Reveal — Text that arrives word by word or letter by letter – each piece rises out of a soft blur as it scrolls into view
 */
export declare const TextReveal: React.FC<TextRevealProps>;
export declare const TextRevealRaw: React.FC<TextRevealProps>;
export declare const TextRevealDemo: React.FC<TextRevealProps>;

export default TextReveal;
