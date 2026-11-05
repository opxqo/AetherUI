import * as React from "react";

export interface AgentCheckpointsProps {
  /** { id, title, icon?, parent?, status?, at?, files?, cost? } in the order they were taken – pass them again whenever one is added or changes; icon is a small mark before the title, e.g. the logo of the tool it worked with */
  checkpoints?: any;
  /** Per checkpoint, the one it follows – a checkpoint whose parent already has a later one starts a new attempt on its own lane */
  parent?: any;
  /** Per checkpoint – running shimmers, failed gets a badge, stopped means you rewound away while the agent worked toward it (default: "done") */
  status?: any;
  /** Id of the checkpoint the agent stands on – the way to it is blue, everything off it fades back (default: the last checkpoint) */
  head?: any;
  /** Rewind was pressed – add a new checkpoint with this one as its parent, and move head to it */
  onRewind?: any;
  /** What the run is for, next to the title */
  task?: any;
  /** Formats at (default: 0:42 / 1:05) */
  formatTime?: any;
  /** Formats the total in the bar on top (default: dollars, e.g. "$0.42") */
  formatCost?: any;
  /** Heading of the bar (default: "Checkpoints") */
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
 * Agent Checkpoints — An agent's run as a line of checkpoints, like git for agents – rewind to any of them and a new attempt branches out of it, while the one it left fades back but stays
 */
export declare const AgentCheckpoints: React.FC<AgentCheckpointsProps>;
export declare const AgentCheckpointsRaw: React.FC<AgentCheckpointsProps>;
export declare const AgentCheckpointsDemo: React.FC<AgentCheckpointsProps>;

export default AgentCheckpoints;
