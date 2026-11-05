import type { AgentTask, AgentInboxView } from "./shared.js";
export type { AgentTask, AgentInboxView } from "./shared.js";
import * as React from "react";
export interface AgentInboxProps extends Omit<React.HTMLAttributes<HTMLElement>, "tasks" | "onApprove" | "onReject" | "onRetry" | "onOpen" | "title" | "action" | "view" | "defaultView" | "onViewChange" | "demo" | "className" | "style" | "children" | "ref"> {
  /** { id, title, description?, agent, status, startedAt?, elapsed?, tools?, sources?, steps? } – status is "running", "waiting", "done" or "failed"; steps are { label, time? }, oldest first */
  "tasks"?: AgentTask[];
  /** Approve on a waiting task. Without it the task turns running inside the board */
  "onApprove"?: (task: AgentTask) => void;
  /** Reject on a waiting task. Without it the task turns failed */
  "onReject"?: (task: AgentTask) => void;
  /** Retry on a failed task. Without it the task runs again and its clock starts over */
  "onRetry"?: (task: AgentTask) => void;
  /** Shows an Open button on running and done tasks */
  "onOpen"?: (task: AgentTask) => void;
  /** Heading on the left of the bar, after "Agents /" */
  "title"?: string;
  /** A button in the bar next to the layout switch, e.g. New task */
  "action"?: { label: string; onClick: () => void };
  /** Controlled layout */
  "view"?: "board" | "list";
  /** Starting layout when uncontrolled */
  "defaultView"?: "board" | "list";
  /** Called when Board or List is picked */
  "onViewChange"?: (view: AgentInboxView) => void;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const AgentInbox: React.FC<AgentInboxProps | (Partial<AgentInboxProps> & { demo: true })>;
export declare const AgentInboxRaw: React.FC<AgentInboxProps>;
export declare const AgentInboxDemo: React.FC<Partial<AgentInboxProps>>;
export default AgentInbox;
