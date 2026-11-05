import * as React from "react";

export interface AgentQueueProps {
  /** { id, name, kind, status, enqueuedAt, priority?, startedAt?, endedAt?, worker?, progress?, estimate?, attempt?, maxAttempts?, detail?, icon?, error? } – waiting, running and recently finished jobs */
  jobs?: any;
  /** Per job – picks its tint: LLM calls violet, tool calls teal, sub-agents slate, human review blue */
  kind?: any;
  /** Per job – a job that goes from running back to queued with a higher attempt shows as a retry */
  status?: any;
  /** Per job – a high one glides past the others to the front (default: "normal") */
  priority?: any;
  /** Per job – 0–1 while it runs, or the expected run time in ms to estimate it */
  "progress / estimate"?: any;
  /** { id, name, detail?, icon? } – the slots; their number is the concurrency */
  workers?: any;
  /** The clock, on the same scale as the job times – without it, the component keeps its own (Date.now) */
  now?: any;
  /** Stretches when the provider rate-limits – while one is active the running jobs pause in amber with a countdown */
  rateLimits?: any;
  /** The queue is paused; the handler shows a Pause/Resume button */
  "paused / onPausedChange"?: any;
  /** Shows a – N + stepper for the number of workers */
  onConcurrencyChange?: any;
  /** The stepper's range (default: 1 / 8) */
  "minConcurrency / maxConcurrency"?: any;
  /** A depth that means trouble – a dashed line on the chart; above it Waiting turns amber */
  backpressure?: any;
  /** How far back the depth chart looks, in ms (default: 120000) */
  window?: any;
  /** Counts since the start, when jobs only holds the recent ones */
  totals?: any;
  /** The job whose card is pinned, controlled or uncontrolled (default: null) */
  "openId / defaultOpenId"?: any;
  /** A job's card was pinned or closed */
  onOpenChange?: any;
  /** Show "Move to front" and "Cancel" in a pinned card */
  "onPromote / onCancel"?: any;
  /** Heading, and the queue's name muted next to it (default: "Queue") */
  "title / name"?: any;
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
 * Agent Queue — The work waiting for your agents, and how fast it moves – jobs drop into a live queue, glide into free worker slots as growing bars and land in Done or Failed, while a depth chart shows the backlog build up when a rate limit pauses the workers and drain when they resume
 */
export declare const AgentQueue: React.FC<AgentQueueProps>;
export declare const AgentQueueRaw: React.FC<AgentQueueProps>;
export declare const AgentQueueDemo: React.FC<AgentQueueProps>;

export default AgentQueue;
