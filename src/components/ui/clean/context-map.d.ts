import * as React from "react";

export interface ContextMapProps {
  /** { id, label, kind, tokens, detail?, icon?, items? } – every part of the context, in the order the tiles should sit; items (label + icon) are listed on hover */
  blocks?: any;
  /** Per block – picks its tint */
  kind?: any;
  /** The context window's size in tokens – what's left shows as dashed free space */
  limit?: any;
  /** The model and its maker's logo, next to the title – the window's size follows as a small tag */
  "model / modelIcon"?: any;
  /** Agents to switch between – the tray shows the current one as a menu, its limit replaces limit */
  "agents / agent / onAgentChange"?: any;
  /** { before, summarized?, dropped?, summary? } – the blocks just before the last compaction and which of them were summarized or dropped (the rest were kept); adds Before | After to the bar and a line under the map. null shows that line as "not compacted yet", so the height stays put */
  compaction?: any;
  /** Controlled: which side of the compaction shows – leave it out and the switch keeps its own */
  "view / onViewChange"?: any;
  /** A short status on the tray – e.g. "Compacting" */
  status?: any;
  /** A tile was clicked – null for the free space */
  onSelect?: any;
  /** Heading on the tray (default: "Context") */
  title?: any;
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
 * Context Map — What fills an agent's context window, as a living treemap – system prompt, tools, memory, every file, the chat and tool results as tiles that glide as it grows, the free space dashed, and compaction squeezing old turns into a summary
 */
export declare const ContextMap: React.FC<ContextMapProps>;
export declare const ContextMapRaw: React.FC<ContextMapProps>;
export declare const ContextMapDemo: React.FC<ContextMapProps>;

export default ContextMap;
