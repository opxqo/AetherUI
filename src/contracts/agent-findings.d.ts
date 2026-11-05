import type { FindingAgent, Finding } from "./shared.js";
export type { FindingAgent, Finding } from "./shared.js";
import * as React from "react";
export interface AgentFindingsProps extends Omit<React.HTMLAttributes<HTMLElement>, "agents" | "findings" | "title" | "rows" | "now" | "onOpen" | "demo" | "className" | "style" | "children" | "ref"> {
  /** One row each: name, current step, checks done of total; status defaults to running until done reaches total */
  "agents"?: FindingAgent[];
  /** What the agents found, with severity, where and when – the newest come first in the feed */
  "findings"?: Finding[];
  /** Heading in the bar */
  "title"?: string;
  /** How many findings the feed shows at most – it grows to that height as they come in */
  "rows"?: number;
  /** A clock you control for the “2m” times – without it they follow real time */
  "now"?: number;
  /** A finding was clicked */
  "onOpen"?: (finding: Finding) => void;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const AgentFindings: React.FC<AgentFindingsProps | (Partial<AgentFindingsProps> & { demo: true })>;
export declare const AgentFindingsRaw: React.FC<AgentFindingsProps>;
export declare const AgentFindingsDemo: React.FC<Partial<AgentFindingsProps>>;
export default AgentFindings;
