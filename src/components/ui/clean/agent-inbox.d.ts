import * as React from "react";

export interface AgentInboxProps {
  /** { id, title, description?, agent, status, startedAt?, elapsed?, tools?, sources?, steps? } – status is "running", "waiting", "done" or "failed"; steps are { label, time? }, oldest first */
  tasks?: any;
  /** Approve on a waiting task. Without it the task turns running inside the board */
  onApprove?: any;
  /** Reject on a waiting task. Without it the task turns failed */
  onReject?: any;
  /** Retry on a failed task. Without it the task runs again and its clock starts over */
  onRetry?: any;
  /** Shows an Open button on running and done tasks */
  onOpen?: any;
  /** Heading on the left of the bar, after "Agents /" (default: "Agent inbox") */
  title?: any;
  /** A button in the bar next to the layout switch, e.g. New task */
  action?: any;
  /** Controlled layout */
  view?: any;
  /** Starting layout when uncontrolled (default: "board") */
  defaultView?: any;
  /** Called when Board or List is picked */
  onViewChange?: any;
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
 * Agent Inbox — All your background agent tasks in one calm list – live clocks and status tags, filter tabs with rolling counts, rows that unfold to the last steps with Approve, Reject, Retry or Open, and glide to their new place
 */
export declare const AgentInbox: React.FC<AgentInboxProps>;
export declare const AgentInboxRaw: React.FC<AgentInboxProps>;
export declare const AgentInboxDemo: React.FC<AgentInboxProps>;

export default AgentInbox;
