import type { QueueJob, QueueWorker } from "./shared.js";
export type { QueueJob, QueueWorker } from "./shared.js";
import * as React from "react";
export interface AgentQueueProps extends Omit<React.HTMLAttributes<HTMLElement>, "jobs" | "kind" | "status" | "priority" | "progress" | "estimate" | "workers" | "now" | "rateLimits" | "paused" | "onPausedChange" | "onConcurrencyChange" | "minConcurrency" | "maxConcurrency" | "backpressure" | "window" | "totals" | "openId" | "defaultOpenId" | "onOpenChange" | "onPromote" | "onCancel" | "title" | "name" | "demo" | "className" | "style" | "children" | "ref"> {
  /** { id, name, kind, status, enqueuedAt, priority?, startedAt?, endedAt?, worker?, progress?, estimate?, attempt?, maxAttempts?, detail?, icon?, error? } – waiting, running and recently finished jobs */
  "jobs": QueueJob[];
  /** Per job – picks its tint: LLM calls violet, tool calls teal, sub-agents slate, human review blue */
  "kind"?: "llm" | "tool" | "agent" | "human";
  /** Per job – a job that goes from running back to queued with a higher attempt shows as a retry */
  "status"?: "queued" | "running" | "done" | "failed";
  /** Per job – a high one glides past the others to the front */
  "priority"?: "high" | "normal" | "low";
  /** Per job – 0–1 while it runs, or the expected run time in ms to estimate it */
  "progress"?: number;
  /** Per job – 0–1 while it runs, or the expected run time in ms to estimate it */
  "estimate"?: number;
  /** { id, name, detail?, icon? } – the slots; their number is the concurrency */
  "workers": QueueWorker[];
  /** The clock, on the same scale as the job times – without it, the component keeps its own (Date.now) */
  "now"?: number;
  /** Stretches when the provider rate-limits – while one is active the running jobs pause in amber with a countdown */
  "rateLimits"?: { from: number; until: number; label?: string }[];
  /** The queue is paused; the handler shows a Pause/Resume button */
  "paused"?: boolean;
  /** The queue is paused; the handler shows a Pause/Resume button */
  "onPausedChange"?: (paused: boolean) => void;
  /** Shows a – N + stepper for the number of workers */
  "onConcurrencyChange"?: (workers: number) => void;
  /** The stepper's range */
  "minConcurrency"?: number;
  /** The stepper's range */
  "maxConcurrency"?: number;
  /** A depth that means trouble – a dashed line on the chart; above it Waiting turns amber */
  "backpressure"?: number;
  /** How far back the depth chart looks, in ms */
  "window"?: number;
  /** Counts since the start, when jobs only holds the recent ones */
  "totals"?: { done?: number; failed?: number };
  /** The job whose card is pinned, controlled or uncontrolled */
  "openId"?: string | null;
  /** The job whose card is pinned, controlled or uncontrolled */
  "defaultOpenId"?: string | null;
  /** A job's card was pinned or closed */
  "onOpenChange"?: (id: string | null, job?: QueueJob) => void;
  /** Show "Move to front" and "Cancel" in a pinned card */
  "onPromote"?: (job: QueueJob) => void;
  /** Show "Move to front" and "Cancel" in a pinned card */
  "onCancel"?: (job: QueueJob) => void;
  /** Heading, and the queue's name muted next to it */
  "title"?: string;
  /** Heading, and the queue's name muted next to it */
  "name"?: string;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const AgentQueue: React.FC<AgentQueueProps | (Partial<AgentQueueProps> & { demo: true })>;
export declare const AgentQueueRaw: React.FC<AgentQueueProps>;
export declare const AgentQueueDemo: React.FC<Partial<AgentQueueProps>>;
export default AgentQueue;
