import * as React from "react";

export type GraphNode = Record<string, any>;
export type GraphCall = Record<string, any>;

export interface AgentGraphProps {
  /** { id, name, kind, short?, icon?, detail?, status?, doing?, cost?, lead? } – every agent, tool and user; pass the whole list each time, ids keep nodes in place and new ids grow in */
  nodes?: GraphNode[];
  /** Per node – agents sit on the inner orbit (the lead in the middle), tools and you on the outer one, each turned towards the agents it talks to */
  kind?: "agent" | "tool" | "user";
  /** Per node – working agents breathe, waiting turns amber ("Needs you"), error red; waiting and error also show a chip in the bar */
  status?: "idle" | "working" | "waiting" | "error" | "done";
  /** Per node – a shorter label for narrow containers, e.g. "Search" */
  short?: string;
  /** Per node – a logo or mark; defaults to the initials (a person for the user) */
  icon?: ReactNode;
  /** Per node – the model or what a tool is (under the agent's name and in its card), and what it is doing right now (in its card) */
  "detail / doing"?: string;
  /** Per node – what it has cost so far; the bar sums all nodes */
  cost?: number;
  /** Per node – the agent in the middle (default: first agent) */
  lead?: boolean;
  /** { id, from, to, at, status?, label?, ms? } – recent calls, newest last. A new id sends a pulse from → to; when its status turns "ok" the answer travels back as a hollow dot, "error" comes back red and flashes the link. Calls also create the links they need (default: []) */
  calls?: GraphCall[];
  /** Links that are always there, even before their first call (default: []) */
  edges?: [string, string][];
  /** The clock for calls per minute and link heat – without it the graph ticks every second (default: Date.now()) */
  now?: number;
  /** How far back (ms) calls count towards a link's thickness – the busiest link is about 4px, a quiet one 1.25px (default: 20000) */
  heatWindow?: number;
  /** A node was clicked (its card opens) – null when the card closes */
  onSelect?: (node: GraphNode | null) => void;
  /** Fixed height of the graph in px – by default 0.6 × the width (360–520px) when wide, 1.2 × when narrow (default: fits the width) */
  height?: number;
  /** Formats every cost (default: dollars, e.g. "$0.42") */
  formatCost?: (amount: number) => string;
  /** Heading of the bar (default: "Agent graph") */
  title?: string;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Agent Graph — Agents and the tools they call as a living network – a pulse along the link for every call and its answer, busy links growing thicker, agents that breathe while they work and turn amber when they need you
 */
export declare const AgentGraph: React.FC<AgentGraphProps>;
export declare const AgentGraphRaw: React.FC<AgentGraphProps>;
export declare const AgentGraphDemo: React.FC<AgentGraphProps>;

export default AgentGraph;
