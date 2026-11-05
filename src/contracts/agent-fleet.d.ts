import type { Id, FleetStep, FleetAgent } from "./shared.js";
export type { Id, FleetStep, FleetAgent } from "./shared.js";
import * as React from "react";
export interface AgentFleetProps extends Omit<React.HTMLAttributes<HTMLElement>, "agents" | "steps" | "status" | "cost" | "open" | "defaultOpen" | "onOpenChange" | "ask" | "error" | "onResolve" | "onSelect" | "now" | "formatCost" | "title" | "demo" | "className" | "style" | "children" | "ref"> {
  /** { id, name, task, model?, avatar?, tools?, status, steps?, cost?, started?, ended?, children? } – the main agents, each with its sub-agents; pass them again whenever something changes; tools are small marks shown as overlapping tiles before the task */
  "agents": FleetAgent[];
  /** Per sub-agent, { title, status?, tool?, took? } – the tasks it worked through; a click on its card opens them in a small window */
  "steps"?: FleetStep[];
  /** Per agent – "waiting" reads "Needs you"; queued and stopped sub-agents and their connectors are muted */
  "status"?: "queued" | "running" | "waiting" | "done" | "failed" | "stopped";
  /** Per agent, its own cost – a main agent shows its whole branch, the bar the whole fleet */
  "cost"?: number;
  /** Id of the main agent whose tree is open, controlled or uncontrolled – null folds them all */
  "open"?: string | null;
  /** Id of the main agent whose tree is open, controlled or uncontrolled – null folds them all */
  "defaultOpen"?: string | null;
  /** An agent was opened – or folded with a second click */
  "onOpenChange"?: (id: string | null) => void;
  /** Per sub-agent – what a waiting one needs you to decide, and what went wrong for a failed one; shown at the top of its window above Approve and Reject, or Retry and Dismiss */
  "ask"?: string;
  /** Per sub-agent – what a waiting one needs you to decide, and what went wrong for a failed one; shown at the top of its window above Approve and Reject, or Retry and Dismiss */
  "error"?: string;
  /** An answer for a sub-agent that needs you or failed – update its status in your data; without it, those cards get no Answer or Resolve button */
  "onResolve"?: (agent: FleetAgent, action: "approve" | "reject" | "retry" | "dismiss") => void;
  /** A click on a sub-agent – makes the sub-agent cards clickable; one with steps opens its tasks window as well */
  "onSelect"?: (agent: FleetAgent) => void;
  /** The clock for running times – without it the cards tick every second while an agent runs */
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
export declare const AgentFleet: React.FC<AgentFleetProps | (Partial<AgentFleetProps> & { demo: true })>;
export declare const AgentFleetRaw: React.FC<AgentFleetProps>;
export declare const AgentFleetDemo: React.FC<Partial<AgentFleetProps>>;
export default AgentFleet;
