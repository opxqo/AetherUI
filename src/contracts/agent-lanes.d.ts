import type { LaneAgent, LaneTask } from "./shared.js";
export type { LaneAgent, LaneTask } from "./shared.js";
import * as React from "react";
export interface AgentLanesProps extends Omit<React.HTMLAttributes<HTMLElement>, "agents" | "tasks" | "span" | "now" | "onApprove" | "onReject" | "onOpen" | "title" | "demo" | "className" | "style" | "children" | "ref"> {
  /** One lane each: { id, name, model?, avatar? }. A logo as avatar sits on a white tile; without one the initials show. Free agents get an Idle tag, waiting ones Needs you */
  "agents": LaneAgent[];
  /** { id, agentId, title, status: "done" | "running" | "waiting" | "failed", start, end?, handoffTo?, ask?, summary?, tools? }. No end: the block reaches "now" */
  "tasks": LaneTask[];
  /** How much time the lanes show, in ms */
  "span"?: number;
  /** A clock you control, e.g. a faster one for a demo. Without it the lanes follow real time, every second */
  "now"?: number;
  /** Approve or Reject on a waiting task. Without handlers the lanes change the status themselves */
  "onApprove"?: (task: LaneTask) => void;
  /** Approve or Reject on a waiting task. Without handlers the lanes change the status themselves */
  "onReject"?: (task: LaneTask) => void;
  /** Shows an Open link in the tooltip of a block that doesn't wait */
  "onOpen"?: (task: LaneTask) => void;
  /** Heading in the bar */
  "title"?: string;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const AgentLanes: React.FC<AgentLanesProps | (Partial<AgentLanesProps> & { demo: true })>;
export declare const AgentLanesRaw: React.FC<AgentLanesProps>;
export declare const AgentLanesDemo: React.FC<Partial<AgentLanesProps>>;
export default AgentLanes;
