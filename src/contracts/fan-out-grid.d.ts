import type { FanoutTask } from "./shared.js";
export type { FanoutTask } from "./shared.js";
import * as React from "react";
export interface FanoutGridProps extends Omit<React.HTMLAttributes<HTMLElement>, "tasks" | "status" | "start" | "end" | "attempts" | "job" | "workers" | "now" | "onRetry" | "onSelect" | "formatCost" | "title" | "icon" | "demo" | "className" | "style" | "children" | "ref"> {
  /** { id, label, status, worker?, start?, end?, cost?, attempts?, result?, error? } – one per task, in the order the cells should show */
  "tasks": FanoutTask[];
  /** Per task – picks the cell's tint: gray, blue with a shine, amber, green, red */
  "status"?: "queued" | "running" | "retrying" | "done" | "failed";
  /** Per task, in ms from the start of the job – used for its duration and the time left */
  "start"?: number;
  /** Per task, in ms from the start of the job – used for its duration and the time left */
  "end"?: number;
  /** Per task – 2 and more show in its details */
  "attempts"?: number;
  /** What the whole job does, next to the title – e.g. "Enrich 240 leads" */
  "job"?: string;
  /** How many workers run at once – the time left is worked out from it (defaults to the tasks running now) */
  "workers"?: number;
  /** The clock, in ms from the start of the job */
  "now"?: number;
  /** Shows "Retry failed" while tasks have failed, and gets their ids */
  "onRetry"?: (ids: string[]) => void;
  /** A task was picked (click or Enter) – null when it's let go */
  "onSelect"?: (task: FanoutTask | null) => void;
  /** Formats every cost */
  "formatCost"?: (amount: number) => string;
  /** Heading of the bar */
  "title"?: string;
  /** A small mark before the title, e.g. the agent's logo */
  "icon"?: React.ReactNode;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const FanoutGrid: React.FC<FanoutGridProps | (Partial<FanoutGridProps> & { demo: true })>;
export declare const FanoutGridRaw: React.FC<FanoutGridProps>;
export declare const FanoutGridDemo: React.FC<Partial<FanoutGridProps>>;
export declare const FanOutGrid: React.FC<FanoutGridProps | (Partial<FanoutGridProps> & { demo: true })>;
export default FanoutGrid;
