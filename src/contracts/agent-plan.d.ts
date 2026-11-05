import type { PlanStep } from "./shared.js";
export type { PlanStep } from "./shared.js";
import * as React from "react";
export interface AgentPlanProps extends Omit<React.HTMLAttributes<HTMLElement>, "steps" | "defaultSteps" | "status" | "onChange" | "onRun" | "onCancel" | "onRetry" | "title" | "estimate" | "demo" | "className" | "style" | "children" | "ref"> {
  /** Controlled steps: { id, title, detail?, tool?, status?, duration?, error? }. Pair with onChange */
  "steps"?: PlanStep[];
  /** Initial steps when uncontrolled – edits are kept inside the component */
  "defaultSteps"?: PlanStep[];
  /** Review and edit, executing, or finished. Editing is only possible in draft */
  "status"?: "draft" | "running" | "done";
  /** Every edit during review: rename, remove, reorder, add */
  "onChange"?: (steps: PlanStep[]) => void;
  /** "Run plan" pressed – gets the steps in their final order. Set status to "running" here. Also shows "Run again" on the tray once done */
  "onRun"?: (steps: PlanStep[]) => void;
  /** Shows a Cancel button next to Run plan */
  "onCancel"?: () => void;
  /** Shows "Retry from here" under failed steps */
  "onRetry"?: (stepId: string) => void;
  /** The goal of the plan, shown as the heading and used as the list's label */
  "title"?: string;
  /** Estimated run time shown in review, e.g. "~2 min" */
  "estimate"?: string;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const AgentPlan: React.FC<AgentPlanProps | (Partial<AgentPlanProps> & { demo: true })>;
export declare const AgentPlanRaw: React.FC<AgentPlanProps>;
export declare const AgentPlanDemo: React.FC<Partial<AgentPlanProps>>;
export default AgentPlan;
