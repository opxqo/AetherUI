import * as React from "react";

export interface AgentGraphProps {
  /** { id, name, kind, short?, icon?, detail?, status?, doing?, cost?, lead? } – every agent, tool and user; pass the whole list each time, ids keep nodes in place and new ids grow in */
  nodes?: any;
  /** Per node – agents sit on the inner orbit (the lead in the middle), tools and you on the outer one, each turned towards the agents it talks to */
  kind?: any;
  /** Per node – working agents breathe, waiting turns amber ("Needs you"), error red; waiting and error also show a chip in the bar */
  status?: any;
  /** Per node – a shorter label for narrow containers, e.g. "Search" */
  short?: any;
  /** Per node – a logo or mark; defaults to the initials (a person for the user) */
  icon?: any;
  /** Per node – the model or what a tool is (under the agent's name and in its card), and what it is doing right now (in its card) */
  "detail / doing"?: any;
  /** Per node – what it has cost so far; the bar sums all nodes */
  cost?: any;
  /** Per node – the agent in the middle (default: first agent) */
  lead?: any;
  /** { id, from, to, at, status?, label?, ms? } – recent calls, newest last. A new id sends a pulse from → to; when its status turns "ok" the answer travels back as a hollow dot, "error" comes back red and flashes the link. Calls also create the links they need (default: []) */
  calls?: any;
  /** Links that are always there, even before their first call (default: []) */
  edges?: any;
  /** The clock for calls per minute and link heat – without it the graph ticks every second (default: Date.now()) */
  now?: any;
  /** How far back (ms) calls count towards a link's thickness – the busiest link is about 4px, a quiet one 1.25px (default: 20000) */
  heatWindow?: any;
  /** A node was clicked (its card opens) – null when the card closes */
  onSelect?: any;
  /** Fixed height of the graph in px – by default 0.6 × the width (360–520px) when wide, 1.2 × when narrow (default: fits the width) */
  height?: any;
  /** Formats every cost (default: dollars, e.g. "$0.42") */
  formatCost?: any;
  /** Heading of the bar (default: "Agent graph") */
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
 * Agent Graph — Agents and the tools they call as a living network – a pulse along the link for every call and its answer, busy links growing thicker, agents that breathe while they work and turn amber when they need you
 */
export declare const AgentGraph: React.FC<AgentGraphProps>;
export declare const AgentGraphRaw: React.FC<AgentGraphProps>;
export declare const AgentGraphDemo: React.FC<AgentGraphProps>;

export default AgentGraph;
