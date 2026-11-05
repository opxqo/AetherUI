import * as React from "react";

export type Attempt = Record<string, any>;

export interface ParallelAttemptsProps {
  /** { id, name, approach, model?, icon?, status, progress?, step?, score?, note?, took?, cost? } – one per attempt, in the order the rows should show; name is usually the model, icon its logo (on a small tile before the name) */
  attempts?: Attempt[];
  /** Per attempt – picks the bar's tint: blue with a shine, green, red */
  status?: "running" | "done" | "failed";
  /** Per attempt, 0 to 1 – the bar's length while it runs (and where a failed one stopped) */
  progress?: number;
  /** Per attempt – what it does right now, shown on the right while it runs */
  step?: string;
  /** Per attempt, 0–100 once done – the highest is marked Best and picked unless you pick another */
  score?: number;
  /** Per attempt – one line about the outcome, or the error */
  note?: string;
  /** What all of them try to do, next to the title */
  task?: string;
  /** Controlled pick – leave it out and the best finished attempt is picked on its own */
  picked?: string | null;
  /** Another attempt was picked with "Use this one" */
  onPick?: (attempt: any) => void;
  /** Formats every cost (default: dollars) */
  formatCost?: (amount: number) => string;
  /** Heading of the bar (default: "Best of N") */
  title?: string;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Parallel Attempts — An agent tries the same task several ways at once and the best one wins – every attempt races as a row with its model, approach and live bar, then gets a score; the best is marked and picked, and you can switch to another
 */
export declare const ParallelAttempts: React.FC<ParallelAttemptsProps>;
export declare const ParallelAttemptsRaw: React.FC<ParallelAttemptsProps>;
export declare const ParallelAttemptsDemo: React.FC<ParallelAttemptsProps>;

export default ParallelAttempts;
