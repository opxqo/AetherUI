import type { TreeAgent } from "./shared.js";
export type { TreeAgent } from "./shared.js";
import * as React from "react";
export interface AgentTreeProps extends Omit<React.HTMLAttributes<HTMLElement>, "root" | "status" | "cost" | "collapsed" | "defaultCollapsed" | "onCollapsedChange" | "ask" | "error" | "onResolve" | "onSelect" | "now" | "formatCost" | "title" | "demo" | "className" | "style" | "children" | "ref"> {
  /** { id, name, task, model?, avatar?, tools?, status, ask?, error?, cost?, started?, ended?, children? } – the whole tree, rebuilt as the run goes on; tools are small marks shown as overlapping tiles before the task */
  "root": TreeAgent;
  /** Per agent – "waiting" reads "Needs you"; queued and stopped agents and their connectors are muted */
  "status"?: "queued" | "running" | "waiting" | "done" | "failed" | "stopped";
  /** Per agent, its own cost – a card with children shows the whole branch */
  "cost"?: number;
  /** Ids of folded branches, controlled or uncontrolled */
  "collapsed"?: string[];
  /** Ids of folded branches, controlled or uncontrolled */
  "defaultCollapsed"?: string[];
  /** A branch was folded or opened */
  "onCollapsedChange"?: (collapsed: string[]) => void;
  /** Per agent – what a waiting agent needs you to decide, and what went wrong for a failed one; shown in the window behind "needs you" and "failed" */
  "ask"?: string;
  /** Per agent – what a waiting agent needs you to decide, and what went wrong for a failed one; shown in the window behind "needs you" and "failed" */
  "error"?: string;
  /** An answer from that window – update the agent's status in your data */
  "onResolve"?: (agent: TreeAgent, action: "approve" | "reject" | "retry" | "dismiss") => void;
  /** A click on a card – makes the cards clickable */
  "onSelect"?: (agent: TreeAgent) => void;
  /** The clock for running times – without it the tree ticks every second while an agent runs */
  "now"?: number;
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
export declare const AgentTree: React.FC<AgentTreeProps | (Partial<AgentTreeProps> & { demo: true })>;
export declare const AgentTreeRaw: React.FC<AgentTreeProps>;
export declare const AgentTreeDemo: React.FC<Partial<AgentTreeProps>>;
export default AgentTree;
