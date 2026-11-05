import type { ContextPart } from "./shared.js";
export type { ContextPart } from "./shared.js";
import * as React from "react";
export interface ContextWindowProps extends Omit<React.HTMLAttributes<HTMLElement>, "parts" | "limit" | "title" | "model" | "modelIcon" | "onRemoveItem" | "onCompact" | "action" | "warnAt" | "cells" | "columns" | "demo" | "className" | "style" | "children" | "ref"> {
  /** { id, label, tokens?, items?, locked?, compact?, color? } – they fill the field in this order */
  "parts": ContextPart[];
  /** Size of the context window in tokens */
  "limit"?: number;
  /** Heading of the card */
  "title"?: string;
  /** Small tag in the head, e.g. the model name */
  "model"?: string;
  /** Logo in front of the model name, shown at 12px */
  "modelIcon"?: React.ReactNode;
  /** Called when an item is removed. With it the card shows exactly what you pass; without it the removal lives inside the card */
  "onRemoveItem"?: (partId: string, itemId: string) => void;
  /** Called when Compact is pressed; the cells shimmer until the promise settles. Without it the part shrinks on its own to its compact share */
  "onCompact"?: (partId: string) => void | Promise<void>;
  /** A button on the tray, e.g. New chat */
  "action"?: { label: string; onClick: () => void };
  /** Share of the limit from which the percentage turns amber and the tray says how much is left; from 0.95 the window counts as full */
  "warnAt"?: number;
  /** Number of cells in the field */
  "cells"?: number;
  /** Cells per row */
  "columns"?: number;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const ContextWindow: React.FC<ContextWindowProps | (Partial<ContextWindowProps> & { demo: true })>;
export declare const ContextWindowRaw: React.FC<ContextWindowProps>;
export declare const ContextWindowDemo: React.FC<Partial<ContextWindowProps>>;
export default ContextWindow;
