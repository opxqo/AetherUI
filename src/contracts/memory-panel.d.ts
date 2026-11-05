import type { Memory } from "./shared.js";
export type { Memory } from "./shared.js";
import * as React from "react";
export interface MemoryPanelProps extends Omit<React.HTMLAttributes<HTMLElement>, "memories" | "onChange" | "onAdd" | "onEdit" | "onPause" | "onForget" | "onRestore" | "enabled" | "defaultEnabled" | "onEnabledChange" | "categories" | "title" | "maxHeight" | "undoFor" | "addedSource" | "action" | "demo" | "className" | "style" | "children" | "ref"> {
  /** { id, text, category, source?, date?, paused? } – source and date are shown as given, e.g. "From chat" and "Oct 12" */
  "memories": Memory[];
  /** Called with the full list after any change. With it the panel shows exactly the memories you pass; without it the changes live inside the panel */
  "onChange"?: (memories: Memory[]) => void;
  /** A memory was added with New memory */
  "onAdd"?: (memory: Memory) => void;
  /** The text of a memory was edited and saved */
  "onEdit"?: (id: string, text: string) => void;
  /** A memory was paused or resumed */
  "onPause"?: (id: string, paused: boolean) => void;
  /** A memory was forgotten – it can still come back with Undo */
  "onForget"?: (id: string) => void;
  /** A forgotten memory was brought back with Undo, at its old place */
  "onRestore"?: (memory: Memory) => void;
  /** The Use memory switch, controlled */
  "enabled"?: boolean;
  /** Start state of the switch when it is not controlled */
  "defaultEnabled"?: boolean;
  /** Called when the switch is flipped */
  "onEnabledChange"?: (enabled: boolean) => void;
  /** Order of the groups and the choices for new memories – defaults to the categories in the order they appear */
  "categories"?: string[];
  /** Heading of the panel */
  "title"?: string;
  /** Height of the list in px before it scrolls */
  "maxHeight"?: number;
  /** How long Undo stays on the tray after forgetting, in ms */
  "undoFor"?: number;
  /** Source given to memories added in the panel; their date is today */
  "addedSource"?: string;
  /** A button on the tray – Undo takes its place for a moment after forgetting */
  "action"?: { label: string; onClick: () => void };
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const MemoryPanel: React.FC<MemoryPanelProps | (Partial<MemoryPanelProps> & { demo: true })>;
export declare const MemoryPanelRaw: React.FC<MemoryPanelProps>;
export declare const MemoryPanelDemo: React.FC<Partial<MemoryPanelProps>>;
export default MemoryPanel;
