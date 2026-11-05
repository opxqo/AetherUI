import * as React from "react";

export interface AgentHandoffProps {
  /** In relay order: { id, name, model?, avatar?, description? } – each card shows what it's for and the task it's on, taken from tasks */
  agents?: any;
  /** What was handed over: { id, from, to, task, items } – each lands as a card in the column between from and to, latest on top; a new id sends light along its lines */
  handoffs?: any;
  /** Per handoff: { id, label, kind?: "file" | "source" | "fact" | "decision" | "note", lost?, why? } – lost ones are struck through, why shows on hover */
  items?: any;
  /** Every task: { id, title, logo?, status: "todo" | "working" | "done" | "warning", agent?, note? } – handoffs refer to them by title for the logo and where the task is now; the first agent shows the next todo one as up next */
  tasks?: any;
  /** A handoff card was dropped on an agent to the right of its column – give that task to it and keep handoffs and tasks up to date. Cards only move on down the relay, never back */
  onAssign?: any;
  /** Adds "Add back" to a lost item's card – pass it on after all */
  onRestore?: any;
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
 * Agent Handoff — A task passed from agent to agent like a relay – at every handoff what went along to the next one, and what got lost on the way
 */
export declare const AgentHandoff: React.FC<AgentHandoffProps>;
export declare const AgentHandoffRaw: React.FC<AgentHandoffProps>;
export declare const AgentHandoffDemo: React.FC<AgentHandoffProps>;

export default AgentHandoff;
