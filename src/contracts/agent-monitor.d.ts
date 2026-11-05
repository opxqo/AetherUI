import type { AgentRunStep } from "./shared.js";
export type { AgentRunStep } from "./shared.js";
import * as React from "react";
export interface AgentMonitorProps extends Omit<React.HTMLAttributes<HTMLElement>, "state" | "agent" | "steps" | "current" | "since" | "until" | "pausedFor" | "cost" | "ask" | "outcome" | "error" | "onAllow" | "onDecline" | "onPause" | "onResume" | "onCancel" | "onRetry" | "onOpenLog" | "defaultFolded" | "demo" | "className" | "style" | "children" | "ref"> {
  /** Where the run is – a small pill next to the cost: blue Running, amber Needs you, green Finished, red Failed */
  "state"?: "idle" | "running" | "waiting" | "paused" | "finished" | "failed" | "cancelled";
  /** Who's working: a name, a role or model, and a 16px logo – without one, the name's first letter */
  "agent"?: { name: string; role?: string; mark?: React.ReactNode };
  /** Every step, oldest first: { id, label, kind?, icon?, state: "queued" | "running" | "done" | "failed", since?, took? } – the running one fills the well, finished ones become bars and rows (three rows tall, the rest scroll), queued ones count toward "3/6" */
  "steps"?: AgentRunStep[];
  /** Overrides what the well says while running – by default it's the running step */
  "current"?: { label: string; kind?: "read" | "search" | "edit" | "run" | "think" | "web"; icon?: React.ReactNode };
  /** When the run began and ended (ms) – the clock counts between them */
  "since"?: number;
  /** When the run began and ended (ms) – the clock counts between them */
  "until"?: number;
  /** Time spent paused (ms), left out of the clock so it picks up where it stopped */
  "pausedFor"?: number;
  /** USD spent so far – shimmers while the agent is busy */
  "cost"?: number;
  /** While waiting: a short title, the exact command as code, and the logo of the tool it's about to use */
  "ask"?: { title: string; command?: string; icon?: React.ReactNode };
  /** Once finished: lines added and removed, files touched, or a short note – after "Finished in 19s" */
  "outcome"?: { added?: number; removed?: number; files?: number; note?: string };
  /** Once failed: what went wrong, in a few words */
  "error"?: string;
  /** Allow and Decline while waiting – Enter and Escape do the same while the card has the focus */
  "onAllow"?: () => void;
  /** Allow and Decline while waiting – Enter and Escape do the same while the card has the focus */
  "onDecline"?: () => void;
  /** Steer a running or paused run – Pause or Resume and Cancel sit side by side as two small buttons; paused, the clock and the running bar stand still */
  "onPause"?: () => void;
  /** Steer a running or paused run – Pause or Resume and Cancel sit side by side as two small buttons; paused, the clock and the running bar stand still */
  "onResume"?: () => void;
  /** Steer a running or paused run – Pause or Resume and Cancel sit side by side as two small buttons; paused, the clock and the running bar stand still */
  "onCancel"?: () => void;
  /** Try again after a failure */
  "onRetry"?: () => void;
  /** Shows Log, to jump to the full trace */
  "onOpenLog"?: () => void;
  /** Start folded, as the small bar */
  "defaultFolded"?: boolean;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const AgentMonitor: React.FC<AgentMonitorProps | (Partial<AgentMonitorProps> & { demo: true })>;
export declare const AgentMonitorRaw: React.FC<AgentMonitorProps>;
export declare const AgentMonitorDemo: React.FC<Partial<AgentMonitorProps>>;
export default AgentMonitor;
