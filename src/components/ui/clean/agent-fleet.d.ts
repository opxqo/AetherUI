import * as React from "react";

export interface AgentFleetProps {
  /** { id, name, task, model?, avatar?, tools?, status, steps?, cost?, started?, ended?, children? } – the main agents, each with its sub-agents; pass them again whenever something changes; tools are small marks shown as overlapping tiles before the task */
  agents?: any;
  /** Per sub-agent, { title, status?, tool?, took? } – the tasks it worked through; a click on its card opens them in a small window */
  steps?: any;
  /** Per agent – "waiting" reads "Needs you"; queued and stopped sub-agents and their connectors are muted */
  status?: any;
  /** Per agent, its own cost – a main agent shows its whole branch, the bar the whole fleet */
  cost?: any;
  /** Id of the main agent whose tree is open, controlled or uncontrolled – null folds them all (default: the first agent) */
  "open / defaultOpen"?: any;
  /** An agent was opened – or folded with a second click */
  onOpenChange?: any;
  /** Per sub-agent – what a waiting one needs you to decide, and what went wrong for a failed one; shown at the top of its window above Approve and Reject, or Retry and Dismiss */
  "ask / error"?: any;
  /** An answer for a sub-agent that needs you or failed – update its status in your data; without it, those cards get no Answer or Resolve button */
  onResolve?: any;
  /** A click on a sub-agent – makes the sub-agent cards clickable; one with steps opens its tasks window as well */
  onSelect?: any;
  /** The clock for running times – without it the cards tick every second while an agent runs (default: Date.now()) */
  now?: any;
  /** Formats every cost (default: dollars, e.g. "$0.42") */
  formatCost?: any;
  /** Heading of the bar (default: "Agents") */
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
 * Agent Fleet — Several agents side by side – each card sums up its sub-agents, and a click opens its tree to the right while the last one folds back into its card
 */
export declare const AgentFleet: React.FC<AgentFleetProps>;
export declare const AgentFleetRaw: React.FC<AgentFleetProps>;
export declare const AgentFleetDemo: React.FC<AgentFleetProps>;

export default AgentFleet;
