import * as React from "react";

export type HandoffAgent = Record<string, any>;
export type Handoff = Record<string, any>;
export type HandoffItem = Record<string, any>;
export type HandoffTask = Record<string, any>;

export interface AgentHandoffProps {
  /** In relay order: { id, name, model?, avatar?, description? } – each card shows what it's for and the task it's on, taken from tasks */
  agents?: HandoffAgent[];
  /** What was handed over: { id, from, to, task, items } – each lands as a card in the column between from and to, latest on top; a new id sends light along its lines */
  handoffs?: Handoff[];
  /** Per handoff: { id, label, kind?: "file" | "source" | "fact" | "decision" | "note", lost?, why? } – lost ones are struck through, why shows on hover */
  items?: HandoffItem[];
  /** Every task: { id, title, logo?, status: "todo" | "working" | "done" | "warning", agent?, note? } – handoffs refer to them by title for the logo and where the task is now; the first agent shows the next todo one as up next */
  tasks?: HandoffTask[];
  /** A handoff card was dropped on an agent to the right of its column – give that task to it and keep handoffs and tasks up to date. Cards only move on down the relay, never back */
  onAssign?: (task: any, agent: any) => void;
  /** Adds "Add back" to a lost item's card – pass it on after all */
  onRestore?: (handoff: any, item: any) => void;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Agent Handoff — A task passed from agent to agent like a relay – at every handoff what went along to the next one, and what got lost on the way
 */
export declare const AgentHandoff: React.FC<AgentHandoffProps>;
export declare const AgentHandoffRaw: React.FC<AgentHandoffProps>;
export declare const AgentHandoffDemo: React.FC<AgentHandoffProps>;

export default AgentHandoff;
