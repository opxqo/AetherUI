import * as React from "react";

export interface AgentMonitorProps {
  /** Where the run is – a small pill next to the cost: blue Running, amber Needs you, green Finished, red Failed (default: "idle") */
  state?: any;
  /** Who's working: a name, a role or model, and a 16px logo – without one, the name's first letter (default: { name: "Agent" }) */
  agent?: any;
  /** Every step, oldest first: { id, label, kind?, icon?, state: "queued" | "running" | "done" | "failed", since?, took? } – the running one fills the well, finished ones become bars and rows (three rows tall, the rest scroll), queued ones count toward "3/6" */
  steps?: any;
  /** The logo of the tool the step used – GitHub, Linear, Slack, Notion… – shown in its row and in the well */
  "icon (step)"?: any;
  /** Fill the step's info card: the tool's name, a sentence on what happened, and the command it ran or the place it touched – a click on the row or its bar opens it */
  "tool / detail / output (step)"?: any;
  /** A plain icon for steps without a logo */
  "kind (step)"?: any;
  /** Overrides what the well says while running – by default it's the running step */
  current?: any;
  /** When the run began and ended (ms) – the clock counts between them */
  "since / until"?: any;
  /** Time spent paused (ms), left out of the clock so it picks up where it stopped (default: 0) */
  pausedFor?: any;
  /** USD spent so far – shimmers while the agent is busy */
  cost?: any;
  /** While waiting: a short title, the exact command as code, and the logo of the tool it's about to use */
  ask?: any;
  /** Once finished: lines added and removed, files touched, or a short note – after "Finished in 19s" */
  outcome?: any;
  /** Once failed: what went wrong, in a few words */
  error?: any;
  /** Allow and Decline while waiting – Enter and Escape do the same while the card has the focus */
  "onAllow / onDecline"?: any;
  /** Steer a running or paused run – Pause or Resume and Cancel sit side by side as two small buttons; paused, the clock and the running bar stand still */
  "onPause / onResume / onCancel"?: any;
  /** Try again after a failure */
  onRetry?: any;
  /** Shows Log, to jump to the full trace */
  onOpenLog?: any;
  /** Start folded, as the small bar (default: false) */
  defaultFolded?: any;
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
 * Agent Monitor — One agent at work, as a card – its current step with a clock and the bill so far, a time strip and the finished steps with the logo of each tool, a click on any of them for the details; the exact command when it needs your OK; folds into a small bar with the tools it has used
 */
export declare const AgentMonitor: React.FC<AgentMonitorProps>;
export declare const AgentMonitorRaw: React.FC<AgentMonitorProps>;
export declare const AgentMonitorDemo: React.FC<AgentMonitorProps>;

export default AgentMonitor;
