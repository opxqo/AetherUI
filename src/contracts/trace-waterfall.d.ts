import type { TraceSpan } from "./shared.js";
export type { TraceSpan } from "./shared.js";
import * as React from "react";
export interface TraceWaterfallProps extends Omit<React.HTMLAttributes<HTMLElement>, "root" | "kind" | "status" | "start" | "end" | "detail" | "icon" | "cost" | "tokensIn" | "tokensOut" | "input" | "output" | "error" | "now" | "startedAt" | "collapsed" | "defaultCollapsed" | "onCollapsedChange" | "openId" | "defaultOpenId" | "onOpenChange" | "markSlowest" | "minRange" | "formatCost" | "title" | "demo" | "className" | "style" | "children" | "ref"> {
  /** { id, name, kind, status, start, end?, detail?, icon?, model?, tokensIn?, tokensOut?, cost?, input?, output?, error?, children? } – the whole run as a tree, rebuilt as it goes on */
  "root": TraceSpan;
  /** Per span – picks the bar's tint: agents slate, LLM calls violet, tool calls teal; failed spans are red */
  "kind"?: "agent" | "subagent" | "llm" | "tool";
  /** Per span – a running span has no end yet and grows into "now" */
  "status"?: "running" | "done" | "failed";
  /** Per span, in ms from the start of the run; leave end out while it runs */
  "start"?: number;
  /** Per span, in ms from the start of the run; leave end out while it runs */
  "end"?: number;
  /** Per span – a few muted words after the name, e.g. the model or the query */
  "detail"?: string;
  /** Per span – a small mark, e.g. the model maker's or the tool's logo; defaults to a swatch in the kind's color */
  "icon"?: React.ReactNode;
  /** Per span, its own – agents add up their children, so don't pre-sum */
  "cost"?: number;
  /** Per span, its own – agents add up their children, so don't pre-sum */
  "tokensIn"?: number;
  /** Per span, its own – agents add up their children, so don't pre-sum */
  "tokensOut"?: number;
  /** Per span – short previews shown in the details window */
  "input"?: string;
  /** Per span – short previews shown in the details window */
  "output"?: string;
  /** Per span – short previews shown in the details window */
  "error"?: string;
  /** The clock in ms from the start of the run – e.g. a faster one for a demo or a replay */
  "now"?: number;
  /** When the run started (epoch ms) – without now, the component ticks its own clock from here while a span runs */
  "startedAt"?: number;
  /** Ids of folded spans, controlled or uncontrolled */
  "collapsed"?: string[];
  /** Ids of folded spans, controlled or uncontrolled */
  "defaultCollapsed"?: string[];
  /** A span was folded or opened */
  "onCollapsedChange"?: (collapsed: string[]) => void;
  /** The span whose details are open, controlled or uncontrolled */
  "openId"?: string | null;
  /** The span whose details are open, controlled or uncontrolled */
  "defaultOpenId"?: string | null;
  /** Details opened (with the span) or closed */
  "onOpenChange"?: (id: string | null, span?: TraceSpan) => void;
  /** Marks the slowest finished LLM or tool call with a small "Slowest" tag */
  "markSlowest"?: boolean;
  /** The shortest time the axis shows, in ms – it grows in round steps as the run gets longer */
  "minRange"?: number;
  /** Formats every cost */
  "formatCost"?: (amount: number) => string;
  /** Heading of the bar; next to it the root's input (or name) */
  "title"?: string;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const TraceWaterfall: React.FC<TraceWaterfallProps | (Partial<TraceWaterfallProps> & { demo: true })>;
export declare const TraceWaterfallRaw: React.FC<TraceWaterfallProps>;
export declare const TraceWaterfallDemo: React.FC<Partial<TraceWaterfallProps>>;
export default TraceWaterfall;
