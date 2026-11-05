import * as React from "react";

export type CostStep = Record<string, any>;

export interface CostWaterfallProps {
  /** { id, name, kind, status, model?, detail?, icon?, tokensIn?, tokensOut?, cost?, duration?, input?, output?, error?, children? } – the run's steps in order, sub-agents hold theirs as children */
  steps?: CostStep[];
  /** Per step – picks the bar's tint and what its details are called: Task/Result, Prompt/Response, Input/Output */
  kind?: "agent" | "llm" | "tool";
  /** Per step – running steps shimmer, failed ones turn red with their error in the details */
  status?: "running" | "done" | "failed";
  /** Per step, its own – sub-agents add up their children, so don't pre-sum. A negative cost is a credit and steps the waterfall back */
  "cost / tokensIn / tokensOut"?: number;
  /** Per step, in ms – how long it took or runs so far */
  duration?: number;
  /** Per step – the prompt and response, or the tool's input and output, shown when the row opens */
  "input / output / error"?: string;
  /** What the run is about – muted next to the title */
  task?: string;
  /** What the bars measure, controlled or uncontrolled (default: "cost") */
  "mode / defaultMode"?: "cost" | "tokens";
  /** The switch was used */
  onModeChange?: (mode: any) => void;
  /** Ids of folded sub-agents, controlled or uncontrolled (default: []) */
  "collapsed / defaultCollapsed"?: string[];
  /** A sub-agent was folded or opened */
  onCollapsedChange?: (collapsed: string[]) => void;
  /** The step whose details are open, controlled or uncontrolled (default: null) */
  "openId / defaultOpenId"?: string | null;
  /** Details opened (with the step) or closed */
  onOpenChange?: (id: string | null, step?: CostStep) => void;
  /** Long runs: the rows scroll past this height in px */
  maxHeight?: number;
  /** Formats every cost (default: dollars, e.g. "$0.042") */
  formatCost?: (amount: number) => string;
  /** Heading of the bar (default: "Run cost") */
  title?: string;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Cost Waterfall — Where the money and tokens of an agent run go – every LLM call, tool call and sub-agent as a step in a waterfall, with model, tokens, cost and time, the most expensive step on top and a switch between cost and tokens
 */
export declare const CostWaterfall: React.FC<CostWaterfallProps>;
export declare const CostWaterfallRaw: React.FC<CostWaterfallProps>;
export declare const CostWaterfallDemo: React.FC<CostWaterfallProps>;

export default CostWaterfall;
