import * as React from "react";

export type FindingAgent = Record<string, any>;
export type Finding = Record<string, any>;

export interface AgentFindingsProps {
  /** One row each: name, current step, checks done of total; status defaults to running until done reaches total */
  agents?: FindingAgent[];
  /** What the agents found, with severity, where and when – the newest come first in the feed */
  findings?: Finding[];
  /** Heading in the bar (default: "Verification") */
  title?: string;
  /** How many findings the feed shows at most – it grows to that height as they come in (default: 4) */
  rows?: number;
  /** A clock you control for the “2m” times – without it they follow real time */
  now?: number;
  /** A finding was clicked */
  onOpen?: (finding: Finding) => void;
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
