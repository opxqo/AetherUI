import * as React from "react";

export interface AgentLanesProps {
  /** One lane each: { id, name, model?, avatar? }. A logo as avatar sits on a white tile; without one the initials show. Free agents get an Idle tag, waiting ones Needs you */
  agents?: any;
  /** { id, agentId, title, status: "done" | "running" | "waiting" | "failed", start, end?, handoffTo?, ask?, summary?, tools? }. No end: the block reaches "now" */
  tasks?: any;
  /** How much time the lanes show, in ms (default: 30 minutes) */
  span?: any;
  /** A clock you control, e.g. a faster one for a demo. Without it the lanes follow real time, every second */
  now?: any;
  /** Approve or Reject on a waiting task. Without handlers the lanes change the status themselves */
  "onApprove / onReject"?: any;
  /** Shows an Open link in the tooltip of a block that doesn't wait */
  onOpen?: any;
  /** Heading in the bar (default: "Agents") */
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
 * Agent Lanes — Where every agent is right now – a live timeline with a lane per agent, tasks growing into “now”, hand-offs drawn between agents and approvals right on the block
 */
export declare const AgentLanes: React.FC<AgentLanesProps>;
export declare const AgentLanesRaw: React.FC<AgentLanesProps>;
export declare const AgentLanesDemo: React.FC<AgentLanesProps>;

export default AgentLanes;
