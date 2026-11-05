import * as React from "react";

export type TreeAgent = Record<string, any>;

export interface AgentTreeProps {
  /** { id, name, task, model?, avatar?, tools?, status, ask?, error?, cost?, started?, ended?, children? } – the whole tree, rebuilt as the run goes on; tools are small marks shown as overlapping tiles before the task */
  root?: TreeAgent;
  /** Per agent – "waiting" reads "Needs you"; queued and stopped agents and their connectors are muted */
  status?: "queued" | "running" | "waiting" | "done" | "failed" | "stopped";
  /** Per agent, its own cost – a card with children shows the whole branch */
  cost?: number;
  /** Ids of folded branches, controlled or uncontrolled (default: []) */
  "collapsed / defaultCollapsed"?: string[];
  /** A branch was folded or opened */
  onCollapsedChange?: (collapsed: string[]) => void;
  /** Per agent – what a waiting agent needs you to decide, and what went wrong for a failed one; shown in the window behind "needs you" and "failed" */
  "ask / error"?: string;
  /** An answer from that window – update the agent's status in your data */
  onResolve?: (agent, action: "approve" | "reject" | "retry" | "dismiss") => void;
  /** A click on a card – makes the cards clickable */
  onSelect?: (agent: TreeAgent) => void;
  /** The clock for running times – without it the tree ticks every second while an agent runs (default: Date.now()) */
  now?: number;
  /** Formats every cost (default: dollars, e.g. "$0.42") */
  formatCost?: (amount: number) => string;
  /** Heading of the bar (default: "Agents") */
  title?: string;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Agent Tree — Who started whom – an orchestrator and its sub-agents as a live tree, with status, cost and time on every card, costs rolling up each branch, and branches that fold to one line
 */
export declare const AgentTree: React.FC<AgentTreeProps>;
export declare const AgentTreeRaw: React.FC<AgentTreeProps>;
export declare const AgentTreeDemo: React.FC<AgentTreeProps>;

export default AgentTree;
