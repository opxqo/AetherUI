import * as React from "react";

export interface ToolAccessMapProps {
  /** { id, name, model?, avatar?, status, task?, tools } – pass them again whenever a call starts or comes back */
  agents?: any;
  /** Every tool of the run, { id, name, icon?, description? }, in the order they're laid out – the first half on the left (default: the tools of all agents together) */
  tools?: any;
  /** Per agent: { id, calls? } for every tool it has access to – name and icon come from tools; one without calls shows as not used yet, one that isn't listed as no access */
  "agent.tools"?: any;
  /** Per tool, oldest first: { id, status, input, output?, error?, at?, duration?, replay? } – a running call turns its line blue */
  calls?: any;
  /** Per agent – shown as a badge on its card; waiting reads "Needs you" */
  status?: any;
  /** Controlled id of the agent on the map */
  agent?: any;
  /** The agent on the map at first, uncontrolled (default: the first agent) */
  defaultAgent?: any;
  /** A tab was picked */
  onAgentChange?: any;
  /** Replay was pressed – input is the call's own, or the one it was changed to (parsed from JSON when the original was an object) */
  onReplay?: any;
  /** Formats when a call was made (default: 0:42) */
  formatTime?: any;
  /** Heading of the bar (default: "Tool access") */
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
 * Tool Access Map — An agent in the middle with every tool it can reach around it – which ones it used, which failed and which it calls right now; open a tool for its calls and replay one on its own
 */
export declare const ToolAccessMap: React.FC<ToolAccessMapProps>;
export declare const ToolAccessMapRaw: React.FC<ToolAccessMapProps>;
export declare const ToolAccessMapDemo: React.FC<ToolAccessMapProps>;

export default ToolAccessMap;
