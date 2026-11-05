import * as React from "react";

export interface AgentSteeringProps {
  /** What the agent is working on, shown as the heading */
  title?: any;
  /** Name of the agent or model, shown under the title */
  agent?: any;
  /** The plan: { id, title, status?, duration?, startedAt?, notes? }. status is "done", "active" or "pending" */
  steps?: any;
  /** Notes waiting for the next step: { id, text }. Move one into a step's notes (same id, picked set) and it glides over */
  queue?: any;
  /** The run. Clocks tick while running; when done the field closes (default: "running") */
  status?: any;
  /** When the run started – the header clock ticks from here */
  startedAt?: any;
  /** ↵ in the field: add the note to your queue */
  onQueue?: any;
  /** ⌘↵ (Ctrl ↵) in the field, or "Now" on a queued note. Shows the shortcut hint and the Now buttons */
  onInterrupt?: any;
  /** ✕ on a queued note */
  onRemove?: any;
  /** Shows Pause while running and Resume while paused */
  "onPause / onResume"?: any;
  /** Controlled field text, e.g. to prefill a suggestion */
  "draft / onDraftChange"?: any;
  /** Text in the empty field (default: "Steer the agent…") */
  placeholder?: any;
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
 * Agent Steering — Steer an agent while it works – queue a note for the next step and watch it glide into the plan when the agent picks it up, or interrupt right away
 */
export declare const AgentSteering: React.FC<AgentSteeringProps>;
export declare const AgentSteeringRaw: React.FC<AgentSteeringProps>;
export declare const AgentSteeringDemo: React.FC<AgentSteeringProps>;

export default AgentSteering;
