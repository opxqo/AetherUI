import * as React from "react";

export type PlanStep = Record<string, any>;

export interface PlanVsActualProps {
  /** { id, title, plan, deps?, start?, end?, icon? } – list a step after the steps it waits for */
  steps?: PlanStep[];
  /** Per step – how long it was planned to take, in ms; the planned start follows from deps */
  plan?: number;
  /** Per step – ids of the steps that have to finish first */
  deps?: string[];
  /** Per step – when it really started and finished, in ms from the start of the run; leave end out while it runs, both while it waits */
  "start / end"?: number;
  /** Where the run is, in ms from its start – running bars grow to it, waiting steps can't start before it */
  now?: number;
  /** What the run is for – next to the heading */
  task?: string;
  /** Formats the axis, the bars' numbers and the finish lines (default: 0:42) */
  formatTime?: (ms: number) => string;
  /** Heading of the bar on top (default: "Plan vs actual") */
  title?: string;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Plan vs Actual — An agent's plan against what really happens – every step's bar grows over its dashed planned ghost, overruns turn amber, the steps after it slide right, and the expected finish moves away from the planned one
 */
export declare const PlanVsActual: React.FC<PlanVsActualProps>;
export declare const PlanVsActualRaw: React.FC<PlanVsActualProps>;
export declare const PlanVsActualDemo: React.FC<PlanVsActualProps>;

export default PlanVsActual;
