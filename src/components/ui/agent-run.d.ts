import * as React from "react";

export interface AgentRunScreenProps {
  /** Goal of the run, in the header and above the plan (default: "Prepare the Q3 board update") */
  title?: any;
  /** Steps with id, title, detail, tool, their tool calls ({ name, summary, icon?, args?, result?, duration }) and an optional approval ({ title, description, risk, details }) the run waits on (default: defaultRunSteps) */
  steps?: any;
  /** Text the agent wrote, shown as an inline diff in the work area (default: defaultRunDraft) */
  draft?: any;
  /** Name of the agent in the run details (default: "Board prep") */
  agent?: any;
  /** Plays the built-in simulation on mount – turn off and drive the steps from your own events (default: true) */
  autoRun?: any;
  /** An approval was given; the run carries on */
  onApprove?: any;
  /** An approval was denied; the run stops at that step */
  onDeny?: any;
  /** Stop run pressed */
  onStop?: any;
  /** Every step is done */
  onDone?: any;
  /** Called with the label of a sidebar item */
  onNavigate?: any;
  /** Workspace name in the sidebar (default: "Acme") */
  workspace?: any;
  /** Account at the bottom of the sidebar (default: { name: "Alex Morgan" }) */
  user?: any;
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
 * AI Chat / Run — One autonomous agent run: the plan ticking through its steps, the tool calls, an approval it waits on and the draft it wrote
 */
export declare const AgentRunScreen: React.FC<AgentRunScreenProps>;
export declare const AgentRunScreenRaw: React.FC<AgentRunScreenProps>;
export declare const AgentRunScreenDemo: React.FC<AgentRunScreenProps>;
export declare const AgentRun: React.FC<AgentRunScreenProps>;
export default AgentRunScreen;
