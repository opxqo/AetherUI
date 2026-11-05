import * as React from "react";

export type ContextPart = Record<string, any>;

export interface ContextWindowProps {
  /** { id, label, tokens?, items?, locked?, compact?, color? } – they fill the field in this order */
  parts?: ContextPart[];
  /** Size of the context window in tokens */
  limit?: number;
  /** Heading of the card (default: "Context window") */
  title?: string;
  /** Small tag in the head, e.g. the model name */
  model?: string;
  /** Logo in front of the model name, shown at 12px */
  modelIcon?: ReactNode;
  /** Called when an item is removed. With it the card shows exactly what you pass; without it the removal lives inside the card */
  onRemoveItem?: (partId: string, itemId: string) => void;
  /** Called when Compact is pressed; the cells shimmer until the promise settles. Without it the part shrinks on its own to its compact share */
  onCompact?: (partId: string) => void | Promise<void>;
  /** A button on the tray, e.g. New chat */
  action?: { label: string; onClick: () => void };
  /** Share of the limit from which the percentage turns amber and the tray says how much is left; from 0.95 the window counts as full (default: 0.8) */
  warnAt?: number;
  /** Number of cells in the field (default: 216) */
  cells?: number;
  /** Cells per row (default: 36) */
  columns?: number;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Context Window — What fills the model's context, as a field of cells – hover a part to light it up, remove files, and compact the conversation while its cells shimmer and clear
 */
export declare const ContextWindow: React.FC<ContextWindowProps>;
export declare const ContextWindowRaw: React.FC<ContextWindowProps>;
export declare const ContextWindowDemo: React.FC<ContextWindowProps>;

export default ContextWindow;
