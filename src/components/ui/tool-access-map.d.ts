import * as React from "react";

export type MapAgent = Record<string, any>;
export type AccessTool = Record<string, any>;
export type ToolCall = Record<string, any>;

export interface ToolAccessMapProps {
  /** { id, name, model?, avatar?, status, task?, tools } – pass them again whenever a call starts or comes back */
  agents?: MapAgent[];
  /** Every tool of the run, { id, name, icon?, description? }, in the order they're laid out – the first half on the left (default: the tools of all agents together) */
  tools?: AccessTool[];
  /** Per tool, oldest first: { id, status, input, output?, error?, at?, duration?, replay? } – a running call turns its line blue */
  calls?: ToolCall[];
  /** Per agent – shown as a badge on its card; waiting reads "Needs you" */
  status?: "queued" | "running" | "waiting" | "done" | "failed";
  /** Controlled id of the agent on the map */
  agent?: string;
  /** The agent on the map at first, uncontrolled (default: the first agent) */
  defaultAgent?: string;
  /** A tab was picked */
  onAgentChange?: (id: string) => void;
  /** Replay was pressed – input is the call's own, or the one it was changed to (parsed from JSON when the original was an object) */
  onReplay?: (call, input, tool, agent) => void;
  /** Formats when a call was made (default: 0:42) */
  formatTime?: (ms: number) => string;
  /** Heading of the bar (default: "Tool access") */
  title?: string;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Tool Access Map — An agent in the middle with every tool it can reach around it – which ones it used, which failed and which it calls right now; open a tool for its calls and replay one on its own
 */
export declare const ToolAccessMap: React.FC<ToolAccessMapProps>;
export declare const ToolAccessMapRaw: React.FC<ToolAccessMapProps>;
export declare const ToolAccessMapDemo: React.FC<ToolAccessMapProps>;

export default ToolAccessMap;
