import type { Attempt } from "./shared.js";
export type { Attempt } from "./shared.js";
import * as React from "react";
export interface ParallelAttemptsProps extends Omit<React.HTMLAttributes<HTMLElement>, "attempts" | "status" | "progress" | "step" | "score" | "note" | "task" | "picked" | "onPick" | "formatCost" | "title" | "demo" | "className" | "style" | "children" | "ref"> {
  /** { id, name, approach, model?, icon?, status, progress?, step?, score?, note?, took?, cost? } – one per attempt, in the order the rows should show; name is usually the model, icon its logo (on a small tile before the name) */
  "attempts": Attempt[];
  /** Per attempt – picks the bar's tint: blue with a shine, green, red */
  "status"?: "running" | "done" | "failed";
  /** Per attempt, 0 to 1 – the bar's length while it runs (and where a failed one stopped) */
  "progress"?: number;
  /** Per attempt – what it does right now, shown on the right while it runs */
  "step"?: string;
  /** Per attempt, 0–100 once done – the highest is marked Best and picked unless you pick another */
  "score"?: number;
  /** Per attempt – one line about the outcome, or the error */
  "note"?: string;
  /** What all of them try to do, next to the title */
  "task"?: string;
  /** Controlled pick – leave it out and the best finished attempt is picked on its own */
  "picked"?: string | null;
  /** Another attempt was picked with "Use this one" */
  "onPick"?: (attempt: Attempt) => void;
  /** Formats every cost */
  "formatCost"?: (amount: number) => string;
  /** Heading of the bar */
  "title"?: string;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const ParallelAttempts: React.FC<ParallelAttemptsProps | (Partial<ParallelAttemptsProps> & { demo: true })>;
export declare const ParallelAttemptsRaw: React.FC<ParallelAttemptsProps>;
export declare const ParallelAttemptsDemo: React.FC<Partial<ParallelAttemptsProps>>;
export default ParallelAttempts;
