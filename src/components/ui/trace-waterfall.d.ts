import * as React from "react";

export interface TraceWaterfallProps {
  /** { id, name, kind, status, start, end?, detail?, icon?, model?, tokensIn?, tokensOut?, cost?, input?, output?, error?, children? } – the whole run as a tree, rebuilt as it goes on */
  root?: any;
  /** Per span – picks the bar's tint: agents slate, LLM calls violet, tool calls teal; failed spans are red */
  kind?: any;
  /** Per span – a running span has no end yet and grows into "now" */
  status?: any;
  /** Per span, in ms from the start of the run; leave end out while it runs */
  "start / end"?: any;
  /** Per span – a few muted words after the name, e.g. the model or the query */
  detail?: any;
  /** Per span – a small mark, e.g. the model maker's or the tool's logo; defaults to a swatch in the kind's color */
  icon?: any;
  /** Per span, its own – agents add up their children, so don't pre-sum */
  "cost / tokensIn / tokensOut"?: any;
  /** Per span – short previews shown in the details window */
  "input / output / error"?: any;
  /** The clock in ms from the start of the run – e.g. a faster one for a demo or a replay */
  now?: any;
  /** When the run started (epoch ms) – without now, the component ticks its own clock from here while a span runs */
  startedAt?: any;
  /** Ids of folded spans, controlled or uncontrolled (default: []) */
  "collapsed / defaultCollapsed"?: any;
  /** A span was folded or opened */
  onCollapsedChange?: any;
  /** The span whose details are open, controlled or uncontrolled (default: null) */
  "openId / defaultOpenId"?: any;
  /** Details opened (with the span) or closed */
  onOpenChange?: any;
  /** Marks the slowest finished LLM or tool call with a small "Slowest" tag (default: true) */
  markSlowest?: any;
  /** The shortest time the axis shows, in ms – it grows in round steps as the run gets longer (default: 10000) */
  minRange?: any;
  /** Formats every cost (default: dollars, e.g. "$0.042") */
  formatCost?: any;
  /** Heading of the bar; next to it the root's input (or name) (default: "Trace") */
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
 * Trace Waterfall — Where the time and money of an agent run go – every LLM call, tool call and sub-agent as a bar on a live timeline, with tokens and cost per step, the slowest call marked and branches that fold into their parent
 */
export declare const TraceWaterfall: React.FC<TraceWaterfallProps>;
export declare const TraceWaterfallRaw: React.FC<TraceWaterfallProps>;
export declare const TraceWaterfallDemo: React.FC<TraceWaterfallProps>;

export default TraceWaterfall;
