import * as React from "react";

export interface MemoryPanelProps {
  /** { id, text, category, source?, date?, paused? } – source and date are shown as given, e.g. "From chat" and "Oct 12" */
  memories?: any;
  /** Called with the full list after any change. With it the panel shows exactly the memories you pass; without it the changes live inside the panel */
  onChange?: any;
  /** A memory was added with New memory */
  onAdd?: any;
  /** The text of a memory was edited and saved */
  onEdit?: any;
  /** A memory was paused or resumed */
  onPause?: any;
  /** A memory was forgotten – it can still come back with Undo */
  onForget?: any;
  /** A forgotten memory was brought back with Undo, at its old place */
  onRestore?: any;
  /** The Use memory switch, controlled */
  enabled?: any;
  /** Start state of the switch when it is not controlled (default: true) */
  defaultEnabled?: any;
  /** Called when the switch is flipped */
  onEnabledChange?: any;
  /** Order of the groups and the choices for new memories – defaults to the categories in the order they appear */
  categories?: any;
  /** Heading of the panel (default: "Memory") */
  title?: any;
  /** Height of the list in px before it scrolls (default: 360) */
  maxHeight?: any;
  /** How long Undo stays on the tray after forgetting, in ms (default: 5000) */
  undoFor?: any;
  /** Source given to memories added in the panel; their date is today (default: "You added") */
  addedSource?: any;
  /** A button on the tray – Undo takes its place for a moment after forgetting */
  action?: any;
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
 * Memory Panel — What the assistant remembers about you, grouped and editable – a master switch, category filters, and on every memory edit in place, pause or forget with Undo on the tray
 */
export declare const MemoryPanel: React.FC<MemoryPanelProps>;
export declare const MemoryPanelRaw: React.FC<MemoryPanelProps>;
export declare const MemoryPanelDemo: React.FC<MemoryPanelProps>;

export default MemoryPanel;
