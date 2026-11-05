import type { ContextBlock, ContextAgent, ContextCompaction } from "./shared.js";
export type { ContextBlock, ContextAgent, ContextCompaction } from "./shared.js";
import * as React from "react";
export interface ContextMapProps extends Omit<React.HTMLAttributes<HTMLElement>, "blocks" | "kind" | "limit" | "model" | "modelIcon" | "agents" | "agent" | "onAgentChange" | "compaction" | "view" | "onViewChange" | "status" | "onSelect" | "title" | "demo" | "className" | "style" | "children" | "ref"> {
  /** { id, label, kind, tokens, detail?, icon?, items? } – every part of the context, in the order the tiles should sit; items (label + icon) are listed on hover */
  "blocks"?: ContextBlock[];
  /** Per block – picks its tint */
  "kind"?: "system" | "tools" | "memory" | "file" | "chat" | "result" | "summary";
  /** The context window's size in tokens – what's left shows as dashed free space */
  "limit"?: number;
  /** The model and its maker's logo, next to the title – the window's size follows as a small tag */
  "model"?: string;
  /** The model and its maker's logo, next to the title – the window's size follows as a small tag */
  "modelIcon"?: React.ReactNode;
  /** Agents to switch between – the tray shows the current one as a menu, its limit replaces limit */
  "agents"?: ContextAgent[];
  /** Agents to switch between – the tray shows the current one as a menu, its limit replaces limit */
  "agent"?: string;
  /** Agents to switch between – the tray shows the current one as a menu, its limit replaces limit */
  "onAgentChange"?: (id: string) => void;
  /** { before, summarized?, dropped?, summary? } – the blocks just before the last compaction and which of them were summarized or dropped (the rest were kept); adds Before | After to the bar and a line under the map. null shows that line as "not compacted yet", so the height stays put */
  "compaction"?: ContextCompaction | null;
  /** Controlled: which side of the compaction shows – leave it out and the switch keeps its own */
  "view"?: "before" | "after";
  /** Controlled: which side of the compaction shows – leave it out and the switch keeps its own */
  "onViewChange"?: (view: "before" | "after") => void;
  /** A short status on the tray – e.g. "Compacting" */
  "status"?: string;
  /** A tile was clicked – null for the free space */
  "onSelect"?: (block: ContextBlock | null) => void;
  /** Heading on the tray */
  "title"?: string;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const ContextMap: React.FC<ContextMapProps | (Partial<ContextMapProps> & { demo: true })>;
export declare const ContextMapRaw: React.FC<ContextMapProps>;
export declare const ContextMapDemo: React.FC<Partial<ContextMapProps>>;
export default ContextMap;
