import type { GraphNode, GraphCall } from "./shared.js";
export type { GraphNode, GraphCall } from "./shared.js";
import * as React from "react";
export interface AgentGraphProps extends Omit<React.HTMLAttributes<HTMLElement>, "nodes" | "kind" | "status" | "short" | "icon" | "detail" | "doing" | "cost" | "lead" | "calls" | "edges" | "now" | "heatWindow" | "onSelect" | "height" | "formatCost" | "title" | "demo" | "className" | "style" | "children" | "ref"> {
  /** { id, name, kind, short?, icon?, detail?, status?, doing?, cost?, lead? } – every agent, tool and user; pass the whole list each time, ids keep nodes in place and new ids grow in */
  "nodes": GraphNode[];
  /** Per node – agents sit on the inner orbit (the lead in the middle), tools and you on the outer one, each turned towards the agents it talks to */
  "kind"?: "agent" | "tool" | "user";
  /** Per node – working agents breathe, waiting turns amber ("Needs you"), error red; waiting and error also show a chip in the bar */
  "status"?: "idle" | "working" | "waiting" | "error" | "done";
  /** Per node – a shorter label for narrow containers, e.g. "Search" */
  "short"?: string;
  /** Per node – a logo or mark; defaults to the initials (a person for the user) */
  "icon"?: React.ReactNode;
  /** Per node – the model or what a tool is (under the agent's name and in its card), and what it is doing right now (in its card) */
  "detail"?: string;
  /** Per node – the model or what a tool is (under the agent's name and in its card), and what it is doing right now (in its card) */
  "doing"?: string;
  /** Per node – what it has cost so far; the bar sums all nodes */
  "cost"?: number;
  /** Per node – the agent in the middle */
  "lead"?: boolean;
  /** { id, from, to, at, status?, label?, ms? } – recent calls, newest last. A new id sends a pulse from → to; when its status turns "ok" the answer travels back as a hollow dot, "error" comes back red and flashes the link. Calls also create the links they need */
  "calls": GraphCall[];
  /** Links that are always there, even before their first call */
  "edges"?: [string, string][];
  /** The clock for calls per minute and link heat – without it the graph ticks every second */
  "now"?: number;
  /** How far back (ms) calls count towards a link's thickness – the busiest link is about 4px, a quiet one 1.25px */
  "heatWindow"?: number;
  /** A node was clicked (its card opens) – null when the card closes */
  "onSelect"?: (node: GraphNode | null) => void;
  /** Fixed height of the graph in px – by default 0.6 × the width (360–520px) when wide, 1.2 × when narrow */
  "height"?: number;
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
export declare const AgentGraph: React.FC<AgentGraphProps | (Partial<AgentGraphProps> & { demo: true })>;
export declare const AgentGraphRaw: React.FC<AgentGraphProps>;
export declare const AgentGraphDemo: React.FC<Partial<AgentGraphProps>>;
export default AgentGraph;
