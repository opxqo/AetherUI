import type { MapAgent, AccessTool, ToolCall } from "./shared.js";
export type { MapAgent, AccessTool, ToolCall } from "./shared.js";
import * as React from "react";
export interface ToolAccessMapProps extends Omit<React.HTMLAttributes<HTMLElement>, "agents" | "tools" | "calls" | "status" | "agent" | "defaultAgent" | "onAgentChange" | "onReplay" | "formatTime" | "title" | "demo" | "className" | "style" | "children" | "ref"> {
  /** { id, name, model?, avatar?, status, task?, tools } – pass them again whenever a call starts or comes back */
  "agents": MapAgent[];
  /** Every tool of the run, { id, name, icon?, description? }, in the order they're laid out – the first half on the left */
  "tools": AccessTool[];
  /** Per tool, oldest first: { id, status, input, output?, error?, at?, duration?, replay? } – a running call turns its line blue */
  "calls"?: ToolCall[];
  /** Per agent – shown as a badge on its card; waiting reads "Needs you" */
  "status"?: "queued" | "running" | "waiting" | "done" | "failed";
  /** Controlled id of the agent on the map */
  "agent"?: string;
  /** The agent on the map at first, uncontrolled */
  "defaultAgent"?: string;
  /** A tab was picked */
  "onAgentChange"?: (id: string) => void;
  /** Replay was pressed – input is the call's own, or the one it was changed to (parsed from JSON when the original was an object) */
  "onReplay"?: (call: ToolCall, input: unknown, tool: AccessTool, agent: MapAgent) => void;
  /** Formats when a call was made */
  "formatTime"?: (ms: number) => string;
  /** Heading of the bar */
  "title"?: string;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const ToolAccessMap: React.FC<ToolAccessMapProps | (Partial<ToolAccessMapProps> & { demo: true })>;
export declare const ToolAccessMapRaw: React.FC<ToolAccessMapProps>;
export declare const ToolAccessMapDemo: React.FC<Partial<ToolAccessMapProps>>;
export default ToolAccessMap;
