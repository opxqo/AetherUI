import * as React from "react";

export type QueueJob = Record<string, any>;
export type QueueWorker = Record<string, any>;

export interface AgentQueueProps {
  /** { id, name, kind, status, enqueuedAt, priority?, startedAt?, endedAt?, worker?, progress?, estimate?, attempt?, maxAttempts?, detail?, icon?, error? } – waiting, running and recently finished jobs */
  jobs?: QueueJob[];
  /** Per job – picks its tint: LLM calls violet, tool calls teal, sub-agents slate, human review blue */
  kind?: "llm" | "tool" | "agent" | "human";
  /** Per job – a job that goes from running back to queued with a higher attempt shows as a retry */
  status?: "queued" | "running" | "done" | "failed";
  /** Per job – a high one glides past the others to the front (default: "normal") */
  priority?: "high" | "normal" | "low";
  /** Per job – 0–1 while it runs, or the expected run time in ms to estimate it */
  "progress / estimate"?: number;
  /** { id, name, detail?, icon? } – the slots; their number is the concurrency */
  workers?: QueueWorker[];
  /** The clock, on the same scale as the job times – without it, the component keeps its own (Date.now) */
  now?: number;
  /** Stretches when the provider rate-limits – while one is active the running jobs pause in amber with a countdown */
  rateLimits?: Array<Record<string, any>>;
  /** The queue is paused; the handler shows a Pause/Resume button */
  "paused / onPausedChange"?: boolean | ((paused: any) => void);
  /** Shows a – N + stepper for the number of workers */
  onConcurrencyChange?: (workers: number) => void;
  /** The stepper's range (default: 1 / 8) */
  "minConcurrency / maxConcurrency"?: number;
  /** A depth that means trouble – a dashed line on the chart; above it Waiting turns amber */
  backpressure?: number;
  /** How far back the depth chart looks, in ms (default: 120000) */
  window?: number;
  /** Counts since the start, when jobs only holds the recent ones */
  totals?: Record<string, any>;
  /** The job whose card is pinned, controlled or uncontrolled (default: null) */
  "openId / defaultOpenId"?: string | null;
  /** A job's card was pinned or closed */
  onOpenChange?: (id: string | null, job?: QueueJob) => void;
  /** Show "Move to front" and "Cancel" in a pinned card */
  "onPromote / onCancel"?: (job: QueueJob) => void;
  /** Heading, and the queue's name muted next to it (default: "Queue") */
  "title / name"?: string;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Agent Queue — The work waiting for your agents, and how fast it moves – jobs drop into a live queue, glide into free worker slots as growing bars and land in Done or Failed, while a depth chart shows the backlog build up when a rate limit pauses the workers and drain when they resume
 */
export declare const AgentQueue: React.FC<AgentQueueProps>;
export declare const AgentQueueRaw: React.FC<AgentQueueProps>;
export declare const AgentQueueDemo: React.FC<AgentQueueProps>;

export default AgentQueue;
