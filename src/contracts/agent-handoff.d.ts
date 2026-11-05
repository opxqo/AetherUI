import type { HandoffAgent, HandoffItem, Handoff, HandoffTask } from "./shared.js";
export type { HandoffAgent, HandoffItem, Handoff, HandoffTask } from "./shared.js";
import * as React from "react";
export interface AgentHandoffProps extends Omit<React.HTMLAttributes<HTMLElement>, "agents" | "handoffs" | "items" | "tasks" | "onAssign" | "onRestore" | "demo" | "className" | "style" | "children" | "ref"> {
  /** In relay order: { id, name, model?, avatar?, description? } – each card shows what it's for and the task it's on, taken from tasks */
  "agents"?: HandoffAgent[];
  /** What was handed over: { id, from, to, task, items } – each lands as a card in the column between from and to, latest on top; a new id sends light along its lines */
  "handoffs"?: Handoff[];
  /** Per handoff: { id, label, kind?: "file" | "source" | "fact" | "decision" | "note", lost?, why? } – lost ones are struck through, why shows on hover */
  "items"?: HandoffItem[];
  /** Every task: { id, title, logo?, status: "todo" | "working" | "done" | "warning", agent?, note? } – handoffs refer to them by title for the logo and where the task is now; the first agent shows the next todo one as up next */
  "tasks"?: HandoffTask[];
  /** A handoff card was dropped on an agent to the right of its column – give that task to it and keep handoffs and tasks up to date. Cards only move on down the relay, never back */
  "onAssign"?: (task: HandoffTask, agent: HandoffAgent) => void;
  /** Adds "Add back" to a lost item's card – pass it on after all */
  "onRestore"?: (handoff: Handoff, item: HandoffItem) => void;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const AgentHandoff: React.FC<AgentHandoffProps | (Partial<AgentHandoffProps> & { demo: true })>;
export declare const AgentHandoffRaw: React.FC<AgentHandoffProps>;
export declare const AgentHandoffDemo: React.FC<Partial<AgentHandoffProps>>;
export default AgentHandoff;
