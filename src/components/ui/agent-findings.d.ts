import * as React from "react";

export interface AgentFindingsProps {
  /** One row each: name, current step, checks done of total; status defaults to running until done reaches total */
  agents?: any;
  /** What the agents found, with severity, where and when – the newest come first in the feed */
  findings?: any;
  /** Heading in the bar (default: "Verification") */
  title?: any;
  /** How many findings the feed shows at most – it grows to that height as they come in (default: 4) */
  rows?: any;
  /** A clock you control for the “2m” times – without it they follow real time */
  now?: any;
  /** A finding was clicked */
  onOpen?: any;
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
 * Agent Findings — A swarm of agents checking something – one calm row per agent with its progress, and their findings sliding into a short feed as they're found
 */
export declare const AgentFindings: React.FC<AgentFindingsProps>;
export declare const AgentFindingsRaw: React.FC<AgentFindingsProps>;
export declare const AgentFindingsDemo: React.FC<AgentFindingsProps>;

export default AgentFindings;
