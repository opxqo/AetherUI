import type { Id, Checkpoint } from "./shared.js";
export type { Id, Checkpoint } from "./shared.js";
import * as React from "react";
export interface AgentCheckpointsProps extends Omit<React.HTMLAttributes<HTMLElement>, "checkpoints" | "parent" | "status" | "head" | "onRewind" | "task" | "formatTime" | "formatCost" | "title" | "demo" | "className" | "style" | "children" | "ref"> {
  /** { id, title, icon?, parent?, status?, at?, files?, cost? } in the order they were taken – pass them again whenever one is added or changes; icon is a small mark before the title, e.g. the logo of the tool it worked with */
  "checkpoints": Checkpoint[];
  /** Per checkpoint, the one it follows – a checkpoint whose parent already has a later one starts a new attempt on its own lane */
  "parent"?: string;
  /** Per checkpoint – running shimmers, failed gets a badge, stopped means you rewound away while the agent worked toward it */
  "status"?: "running" | "done" | "failed" | "stopped";
  /** Id of the checkpoint the agent stands on – the way to it is blue, everything off it fades back */
  "head"?: string;
  /** Rewind was pressed – add a new checkpoint with this one as its parent, and move head to it */
  "onRewind"?: (checkpoint: Checkpoint) => void;
  /** What the run is for, next to the title */
  "task"?: string;
  /** Formats at */
  "formatTime"?: (ms: number) => string;
  /** Formats the total in the bar on top */
  "formatCost"?: (amount: number) => string;
  /** Heading of the bar */
  "title"?: string;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const AgentCheckpoints: React.FC<AgentCheckpointsProps | (Partial<AgentCheckpointsProps> & { demo: true })>;
export declare const AgentCheckpointsRaw: React.FC<AgentCheckpointsProps>;
export declare const AgentCheckpointsDemo: React.FC<Partial<AgentCheckpointsProps>>;
export default AgentCheckpoints;
