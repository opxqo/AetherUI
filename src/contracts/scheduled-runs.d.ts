import type { ScheduledTask, ScheduledPart } from "./shared.js";
export type { ScheduledTask, ScheduledPart } from "./shared.js";
import * as React from "react";
export interface ScheduledRunsProps extends Omit<React.HTMLAttributes<HTMLElement>, "tasks" | "usage" | "days" | "sessions" | "now" | "limit" | "minPiece" | "agents" | "defaultMode" | "autoRun" | "loop" | "title" | "note" | "onScheduled" | "onPlace" | "onMove" | "demo" | "className" | "style" | "children" | "ref"> {
  /** { id, title, usage, agent?, detail?, logo?, at? } – booked tasks have at: { day, session }; the rest wait in the stack and are sorted in, in this order */
  "tasks": ScheduledTask[];
  /** Per task – what it takes out of one session's limit, in percent; over the limit it's split across sessions */
  "usage"?: number;
  /** Column heads – three days read best; more fit, the week then scrolls sideways on narrow screens */
  "days"?: (string | {name: string;date?: string})[];
  /** Row heads – when each session starts */
  "sessions"?: string[];
  /** The session running now – earlier ones are dimmed and take no new tasks; a red line marks where it starts */
  "now"?: {day: number;session: number};
  /** What one session can take, in the unit of usage */
  "limit"?: number;
  /** A split task never leaves a piece smaller than this in a session */
  "minPiece"?: number;
  /** The agents in the head as small overlapping logos – picking one fans them out, slides its name out and fades the other agents' tasks back */
  "agents"?: {name: string;logo?: React.ReactNode}[];
  /** Auto sorts the stack in when switched to; Manual puts the sorted-in cards back on the stack – booked cards and cards placed by hand stay. Both switch mid-run */
  "defaultMode"?: "auto" | "manual";
  /** In Auto: sorts the stack in on its own – after 800ms, or after the number of ms */
  "autoRun"?: boolean | number;
  /** Clears the week and sorts in again, over and over – for demos */
  "loop"?: boolean;
  /** Heading, and a quiet note next to it – e.g. "5-hour sessions" */
  "title"?: string;
  /** Heading, and a quiet note next to it – e.g. "5-hour sessions" */
  "note"?: string;
  /** Every piece in the week once the stack is sorted in – { task, day, session, usage, part, parts } */
  "onScheduled"?: (parts: ScheduledPart[]) => void;
  /** A task was dragged from the stack into a session – with the pieces it was split into */
  "onPlace"?: (task: ScheduledTask, parts: ScheduledPart[]) => void;
  /** A card was dragged to another session – save it */
  "onMove"?: (part: ScheduledPart, to: {day: number;session: number}) => void;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const ScheduledRuns: React.FC<ScheduledRunsProps | (Partial<ScheduledRunsProps> & { demo: true })>;
export declare const ScheduledRunsRaw: React.FC<ScheduledRunsProps>;
export declare const ScheduledRunsDemo: React.FC<Partial<ScheduledRunsProps>>;
export default ScheduledRuns;
