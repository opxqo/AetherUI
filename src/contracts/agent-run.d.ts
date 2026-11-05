import type { RunStep } from "./shared.js";
export type { RunStep } from "./shared.js";
import * as React from "react";
export interface AgentRunScreenProps extends Omit<React.HTMLAttributes<HTMLElement>, "title" | "steps" | "draft" | "agent" | "autoRun" | "onApprove" | "onDeny" | "onStop" | "onDone" | "onNavigate" | "workspace" | "user" | "demo" | "className" | "style" | "children" | "ref"> {
  /** Goal of the run, in the header and above the plan */
  "title"?: string;
  /** Steps with id, title, detail, tool, their tool calls ({ name, summary, icon?, args?, result?, duration }) and an optional approval ({ title, description, risk, details }) the run waits on */
  "steps"?: RunStep[];
  /** Text the agent wrote, shown as an inline diff in the work area */
  "draft"?: { original: string; suggested: string; label?: string };
  /** Name of the agent in the run details */
  "agent"?: string;
  /** Plays the built-in simulation on mount – turn off and drive the steps from your own events */
  "autoRun"?: boolean;
  /** An approval was given; the run carries on */
  "onApprove"?: (stepId: string) => void;
  /** An approval was denied; the run stops at that step */
  "onDeny"?: (stepId: string) => void;
  /** Stop run pressed */
  "onStop"?: () => void;
  /** Every step is done */
  "onDone"?: () => void;
  /** Called with the label of a sidebar item */
  "onNavigate"?: (label: string) => void;
  /** Workspace name in the sidebar */
  "workspace"?: string;
  /** Account at the bottom of the sidebar */
  "user"?: { name: string; avatar?: string };
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const AgentRunScreen: React.FC<AgentRunScreenProps | (Partial<AgentRunScreenProps> & { demo: true })>;
export declare const AgentRunScreenRaw: React.FC<AgentRunScreenProps>;
export declare const AgentRunScreenDemo: React.FC<Partial<AgentRunScreenProps>>;
export declare const AgentRun: React.FC<AgentRunScreenProps | (Partial<AgentRunScreenProps> & { demo: true })>;
export default AgentRunScreen;
