import type { DiffSegment, InlineDiffHandle } from "./shared.js";
export type { DiffSegment, InlineDiffHandle } from "./shared.js";
import * as React from "react";
export interface InlineDiffProps extends Omit<React.HTMLAttributes<HTMLElement>, "original" | "suggested" | "changes" | "onChange" | "onDone" | "label" | "ref" | "demo" | "className" | "style" | "children"> {
  /** The text as it is now */
  "original"?: string;
  /** The text the AI suggests – diffed word by word against original */
  "suggested"?: string;
  /** Pre-computed segments ({ type: "equal", text } or { type: "change", remove, insert }) instead of original and suggested */
  "changes"?: DiffSegment[];
  /** Called on every decision and undo with the text so far – pending changes keep the original words */
  "onChange"?: (text: string) => void;
  /** Called when the last pending change is decided, with the final text */
  "onDone"?: (text: string) => void;
  /** Small line on the gray tray above the card, e.g. "Suggested by AI · Make it shorter" */
  "label"?: string;
  /** highlight(index | null), accept(index), reject(index), acceptAll(), rejectAll(), undo(), reset() */
  "ref"?: React.Ref<InlineDiffHandle>;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
export declare const InlineDiff: React.FC<InlineDiffProps | (Partial<InlineDiffProps> & { demo: true })>;
export declare const InlineDiffRaw: React.FC<InlineDiffProps>;
export declare const InlineDiffDemo: React.FC<Partial<InlineDiffProps>>;
export default InlineDiff;
