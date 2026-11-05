import * as React from "react";

export type PlanStep = Record<string, any>;

export interface AgentPlanProps {
  /** Controlled steps: { id, title, detail?, tool?, status?, duration?, error? }. Pair with onChange */
  steps?: PlanStep[];
  /** Initial steps when uncontrolled – edits are kept inside the component (default: []) */
  defaultSteps?: PlanStep[];
  /** Review and edit, executing, or finished. Editing is only possible in draft (default: "draft") */
  status?: "draft" | "running" | "done";
  /** Every edit during review: rename, remove, reorder, add */
  onChange?: (steps: PlanStep[]) => void;
  /** "Run plan" pressed – gets the steps in their final order. Set status to "running" here. Also shows "Run again" on the tray once done */
  onRun?: (steps: PlanStep[]) => void;
  /** Shows a Cancel button next to Run plan */
  onCancel?: () => void;
  /** Shows "Retry from here" under failed steps */
  onRetry?: (stepId: string) => void;
  /** The goal of the plan, shown as the heading and used as the list's label */
  title?: string;
  /** Estimated run time shown in review, e.g. "~2 min" */
  estimate?: string;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Agent Plan — An agent's step-by-step plan to review before it runs – rename, drag to reorder, remove or add steps, then watch each one run with live timers and retry from a failed step
 */
export declare const AgentPlan: React.FC<AgentPlanProps>;
export declare const AgentPlanRaw: React.FC<AgentPlanProps>;
export declare const AgentPlanDemo: React.FC<AgentPlanProps>;

export default AgentPlan;
