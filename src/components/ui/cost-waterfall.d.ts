import * as React from "react";

export interface CostWaterfallProps {
  /** { id, name, kind, status, model?, detail?, icon?, tokensIn?, tokensOut?, cost?, duration?, input?, output?, error?, children? } – the run's steps in order, sub-agents hold theirs as children */
  steps?: any;
  /** Per step – picks the bar's tint and what its details are called: Task/Result, Prompt/Response, Input/Output */
  kind?: any;
  /** Per step – running steps shimmer, failed ones turn red with their error in the details */
  status?: any;
  /** Per step, its own – sub-agents add up their children, so don't pre-sum. A negative cost is a credit and steps the waterfall back */
  "cost / tokensIn / tokensOut"?: any;
  /** Per step, in ms – how long it took or runs so far */
  duration?: any;
  /** Per step – the prompt and response, or the tool's input and output, shown when the row opens */
  "input / output / error"?: any;
  /** What the run is about – muted next to the title */
  task?: any;
  /** Overrides the run's state in the bar – by default Live while a step runs */
  status?: any;
  /** What the bars measure, controlled or uncontrolled (default: "cost") */
  "mode / defaultMode"?: any;
  /** The switch was used */
  onModeChange?: any;
  /** Ids of folded sub-agents, controlled or uncontrolled (default: []) */
  "collapsed / defaultCollapsed"?: any;
  /** A sub-agent was folded or opened */
  onCollapsedChange?: any;
  /** The step whose details are open, controlled or uncontrolled (default: null) */
  "openId / defaultOpenId"?: any;
  /** Details opened (with the step) or closed */
  onOpenChange?: any;
  /** Long runs: the rows scroll past this height in px */
  maxHeight?: any;
  /** Formats every cost (default: dollars, e.g. "$0.042") */
  formatCost?: any;
  /** Heading of the bar (default: "Run cost") */
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
 * Cost Waterfall — Where the money and tokens of an agent run go – every LLM call, tool call and sub-agent as a step in a waterfall, with model, tokens, cost and time, the most expensive step on top and a switch between cost and tokens
 */
export declare const CostWaterfall: React.FC<CostWaterfallProps>;
export declare const CostWaterfallRaw: React.FC<CostWaterfallProps>;
export declare const CostWaterfallDemo: React.FC<CostWaterfallProps>;

export default CostWaterfall;
