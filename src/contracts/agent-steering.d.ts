import type { SteerStep, SteerNote } from "./shared.js";
export type { SteerStep, SteerNote } from "./shared.js";
import * as React from "react";
export interface AgentSteeringProps extends Omit<React.HTMLAttributes<HTMLElement>, "title" | "agent" | "steps" | "queue" | "status" | "startedAt" | "onQueue" | "onInterrupt" | "onRemove" | "onPause" | "onResume" | "draft" | "onDraftChange" | "placeholder" | "demo" | "className" | "style" | "children" | "ref"> {
  /** What the agent is working on, shown as the heading */
  "title"?: string;
  /** Name of the agent or model, shown under the title */
  "agent"?: string;
  /** The plan: { id, title, status?, duration?, startedAt?, notes? }. status is "done", "active" or "pending" */
  "steps": SteerStep[];
  /** Notes waiting for the next step: { id, text }. Move one into a step's notes (same id, picked set) and it glides over */
  "queue": SteerNote[];
  /** The run. Clocks tick while running; when done the field closes */
  "status"?: "running" | "paused" | "done";
  /** When the run started – the header clock ticks from here */
  "startedAt"?: number | Date;
  /** ↵ in the field: add the note to your queue */
  "onQueue"?: (text: string) => void;
  /** ⌘↵ (Ctrl ↵) in the field, or "Now" on a queued note. Shows the shortcut hint and the Now buttons */
  "onInterrupt"?: (text: string, queuedId?: string) => void;
  /** ✕ on a queued note */
  "onRemove"?: (id: string) => void;
  /** Shows Pause while running and Resume while paused */
  "onPause"?: () => void;
  /** Shows Pause while running and Resume while paused */
  "onResume"?: () => void;
  /** Controlled field text, e.g. to prefill a suggestion */
  "draft"?: string;
  /** Controlled field text, e.g. to prefill a suggestion */
  "onDraftChange"?: (text: string) => void;
  /** Text in the empty field */
  "placeholder"?: string;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const AgentSteering: React.FC<AgentSteeringProps | (Partial<AgentSteeringProps> & { demo: true })>;
export declare const AgentSteeringRaw: React.FC<AgentSteeringProps>;
export declare const AgentSteeringDemo: React.FC<Partial<AgentSteeringProps>>;
export default AgentSteering;
