import * as React from "react";
export type TextRevealProps = {
  demo?: boolean;
  style?: React.CSSProperties;
  ref?: React.Ref<HTMLElement>;
  /** The text to reveal */
  text: string;
  /** Reveal word by word or letter by letter */
  by?: "word" | "char";
  /** Time between two pieces, in ms */
  stagger?: number;
  /** Wait before the first piece, in ms */
  delay?: number;
  /** Time each piece takes to arrive, in ms */
  duration?: number;
  /** Element to render */
  as?: "p" | "h1" | "h2" | "h3" | "span";
  /** Reveal only the first time; otherwise it plays again each time it enters the view */
  once?: boolean;
  className?: string;
};
/**
 * Text Reveal — Text that arrives word by word or letter by letter – each piece rises out of a soft blur as it scrolls into view
 */
export declare const TextReveal: React.FC<TextRevealProps | (Partial<TextRevealProps> & { demo: true })>;
export declare const TextRevealRaw: React.FC<TextRevealProps>;
export declare const TextRevealDemo: React.FC<Partial<TextRevealProps>>;

export default TextReveal;
