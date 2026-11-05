import * as React from "react";

export type DiffSegment = Record<string, any>;
export type Ref = Record<string, any>;
export type InlineDiffHandle = Record<string, any>;

export interface InlineDiffProps {
  /** The text as it is now (default: "") */
  original?: string;
  /** The text the AI suggests – diffed word by word against original (default: "") */
  suggested?: string;
  /** Pre-computed segments ({ type: "equal", text } or { type: "change", remove, insert }) instead of original and suggested */
  changes?: DiffSegment[];
  /** Called on every decision and undo with the text so far – pending changes keep the original words */
  onChange?: (text: string) => void;
  /** Called when the last pending change is decided, with the final text */
  onDone?: (text: string) => void;
  /** Small line on the gray tray above the card, e.g. "Suggested by AI · Make it shorter" */
  label?: string;
  /** highlight(index | null), accept(index), reject(index), acceptAll(), rejectAll(), undo(), reset() */
  ref?: Ref<InlineDiffHandle>;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Inline Diff — AI edits to prose shown inline – struck and added words you accept or reject one by one, with keys, a popover and undo
 */
export declare const InlineDiff: React.FC<InlineDiffProps>;
export declare const InlineDiffRaw: React.FC<InlineDiffProps>;
export declare const InlineDiffDemo: React.FC<InlineDiffProps>;

export default InlineDiff;
