import type { CostStep, Task } from "./shared.js";
export type { CostStep, Task } from "./shared.js";
import * as React from "react";
export interface CostWaterfallProps extends Omit<React.HTMLAttributes<HTMLElement>, "steps" | "kind" | "status" | "cost" | "tokensIn" | "tokensOut" | "duration" | "input" | "output" | "error" | "task" | "mode" | "defaultMode" | "onModeChange" | "collapsed" | "defaultCollapsed" | "onCollapsedChange" | "openId" | "defaultOpenId" | "onOpenChange" | "maxHeight" | "formatCost" | "title" | "demo" | "className" | "style" | "children" | "ref"> {
  /** { id, name, kind, status, model?, detail?, icon?, tokensIn?, tokensOut?, cost?, duration?, input?, output?, error?, children? } – the run's steps in order, sub-agents hold theirs as children */
  "steps": CostStep[];
  /** Per step – picks the bar's tint and what its details are called: Task/Result, Prompt/Response, Input/Output */
  "kind"?: "agent" | "llm" | "tool";
  /** Overrides the run's state in the bar – by default Live while a step runs */
  "status"?: "running" | "done" | "failed";
  /** Per step, its own – sub-agents add up their children, so don't pre-sum. A negative cost is a credit and steps the waterfall back */
  "cost"?: number;
  /** Per step, its own – sub-agents add up their children, so don't pre-sum. A negative cost is a credit and steps the waterfall back */
  "tokensIn"?: number;
  /** Per step, its own – sub-agents add up their children, so don't pre-sum. A negative cost is a credit and steps the waterfall back */
  "tokensOut"?: number;
  /** Per step, in ms – how long it took or runs so far */
  "duration"?: number;
  /** Per step – the prompt and response, or the tool's input and output, shown when the row opens */
  "input"?: string;
  /** Per step – the prompt and response, or the tool's input and output, shown when the row opens */
  "output"?: string;
  /** Per step – the prompt and response, or the tool's input and output, shown when the row opens */
  "error"?: string;
  /** What the run is about – muted next to the title */
  "task"?: string;
  /** What the bars measure, controlled or uncontrolled */
  "mode"?: "cost" | "tokens";
  /** What the bars measure, controlled or uncontrolled */
  "defaultMode"?: "cost" | "tokens";
  /** The switch was used */
  "onModeChange"?: (mode: "cost" | "tokens") => void;
  /** Ids of folded sub-agents, controlled or uncontrolled */
  "collapsed"?: string[];
  /** Ids of folded sub-agents, controlled or uncontrolled */
  "defaultCollapsed"?: string[];
  /** A sub-agent was folded or opened */
  "onCollapsedChange"?: (collapsed: string[]) => void;
  /** The step whose details are open, controlled or uncontrolled */
  "openId"?: string | null;
  /** The step whose details are open, controlled or uncontrolled */
  "defaultOpenId"?: string | null;
  /** Details opened (with the step) or closed */
  "onOpenChange"?: (id: string | null, step?: CostStep) => void;
  /** Long runs: the rows scroll past this height in px */
  "maxHeight"?: number;
  /** Formats every cost */
  "formatCost"?: (amount: number) => string;
  /** Heading of the bar */
  "title"?: string;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const CostWaterfall: React.FC<CostWaterfallProps | (Partial<CostWaterfallProps> & { demo: true })>;
export declare const CostWaterfallRaw: React.FC<CostWaterfallProps>;
export declare const CostWaterfallDemo: React.FC<Partial<CostWaterfallProps>>;
export default CostWaterfall;
