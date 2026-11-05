import * as React from "react";

export type TraceSpan = Record<string, any>;

export interface TraceWaterfallProps {
  /** { id, name, kind, status, start, end?, detail?, icon?, model?, tokensIn?, tokensOut?, cost?, input?, output?, error?, children? } – the whole run as a tree, rebuilt as it goes on */
  root?: TraceSpan;
  /** Per span – picks the bar's tint: agents slate, LLM calls violet, tool calls teal; failed spans are red */
  kind?: "agent" | "subagent" | "llm" | "tool";
  /** Per span – a running span has no end yet and grows into "now" */
  status?: "running" | "done" | "failed";
  /** Per span, in ms from the start of the run; leave end out while it runs */
  "start / end"?: number;
  /** Per span – a few muted words after the name, e.g. the model or the query */
  detail?: string;
  /** Per span – a small mark, e.g. the model maker's or the tool's logo; defaults to a swatch in the kind's color */
  icon?: ReactNode;
  /** Per span, its own – agents add up their children, so don't pre-sum */
  "cost / tokensIn / tokensOut"?: number;
  /** Per span – short previews shown in the details window */
  "input / output / error"?: string;
  /** The clock in ms from the start of the run – e.g. a faster one for a demo or a replay */
  now?: number;
  /** When the run started (epoch ms) – without now, the component ticks its own clock from here while a span runs */
  startedAt?: number;
  /** Ids of folded spans, controlled or uncontrolled (default: []) */
  "collapsed / defaultCollapsed"?: string[];
  /** A span was folded or opened */
  onCollapsedChange?: (collapsed: string[]) => void;
  /** The span whose details are open, controlled or uncontrolled (default: null) */
  "openId / defaultOpenId"?: string | null;
  /** Details opened (with the span) or closed */
  onOpenChange?: (id: string | null, span?: TraceSpan) => void;
  /** Marks the slowest finished LLM or tool call with a small "Slowest" tag (default: true) */
  markSlowest?: boolean;
  /** The shortest time the axis shows, in ms – it grows in round steps as the run gets longer (default: 10000) */
  minRange?: number;
  /** Formats every cost (default: dollars, e.g. "$0.042") */
  formatCost?: (amount: number) => string;
  /** Heading of the bar; next to it the root's input (or name) (default: "Trace") */
  title?: string;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Trace Waterfall — Where the time and money of an agent run go – every LLM call, tool call and sub-agent as a bar on a live timeline, with tokens and cost per step, the slowest call marked and branches that fold into their parent
 */
export declare const TraceWaterfall: React.FC<TraceWaterfallProps>;
export declare const TraceWaterfallRaw: React.FC<TraceWaterfallProps>;
export declare const TraceWaterfallDemo: React.FC<TraceWaterfallProps>;

export default TraceWaterfall;
