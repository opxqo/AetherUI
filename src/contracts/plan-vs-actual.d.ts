import type { PlanStep } from "./shared.js";
export type { PlanStep } from "./shared.js";
import * as React from "react";
export interface PlanVsActualProps extends Omit<React.HTMLAttributes<HTMLElement>, "steps" | "plan" | "deps" | "start" | "end" | "now" | "task" | "formatTime" | "title" | "demo" | "className" | "style" | "children" | "ref"> {
  /** { id, title, plan, deps?, start?, end?, icon? } – list a step after the steps it waits for */
  "steps": PlanStep[];
  /** Per step – how long it was planned to take, in ms; the planned start follows from deps */
  "plan"?: number;
  /** Per step – ids of the steps that have to finish first */
  "deps"?: string[];
  /** Per step – when it really started and finished, in ms from the start of the run; leave end out while it runs, both while it waits */
  "start"?: number;
  /** Per step – when it really started and finished, in ms from the start of the run; leave end out while it runs, both while it waits */
  "end"?: number;
  /** Where the run is, in ms from its start – running bars grow to it, waiting steps can't start before it */
  "now"?: number;
  /** What the run is for – next to the heading */
  "task"?: string;
  /** Formats the axis, the bars' numbers and the finish lines */
  "formatTime"?: (ms: number) => string;
  /** Heading of the bar on top */
  "title"?: string;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const PlanVsActual: React.FC<PlanVsActualProps | (Partial<PlanVsActualProps> & { demo: true })>;
export declare const PlanVsActualRaw: React.FC<PlanVsActualProps>;
export declare const PlanVsActualDemo: React.FC<Partial<PlanVsActualProps>>;
export default PlanVsActual;
