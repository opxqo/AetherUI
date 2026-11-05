import * as React from "react";

export type ScheduledTask = Record<string, any>;
export type ScheduledPart = Record<string, any>;

export interface ScheduledRunsProps {
  /** { id, title, usage, agent?, detail?, logo?, at? } – booked tasks have at: { day, session }; the rest wait in the stack and are sorted in, in this order */
  tasks?: ScheduledTask[];
  /** Per task – what it takes out of one session's limit, in percent; over the limit it's split across sessions */
  usage?: number;
  /** Column heads – three days read best; more fit, the week then scrolls sideways on narrow screens (default: Mon–Wed) */
  days?: (string | Record<string, any>)[];
  /** Row heads – when each session starts (default: ["07:00", "12:00", "17:00"]) */
  sessions?: string[];
  /** The session running now – earlier ones are dimmed and take no new tasks; a red line marks where it starts (default: { day: 0, session: 0 }) */
  now?: Record<string, any>;
  /** What one session can take, in the unit of usage (default: 100) */
  limit?: number;
  /** A split task never leaves a piece smaller than this in a session (default: 15) */
  minPiece?: number;
  /** The agents in the head as small overlapping logos – picking one fans them out, slides its name out and fades the other agents' tasks back (default: every task's agent) */
  agents?: Array<Record<string, any>>;
  /** Auto sorts the stack in when switched to; Manual puts the sorted-in cards back on the stack – booked cards and cards placed by hand stay. Both switch mid-run (default: "auto") */
  defaultMode?: "auto" | "manual";
  /** In Auto: sorts the stack in on its own – after 800ms, or after the number of ms (default: false) */
  autoRun?: boolean | number;
  /** Clears the week and sorts in again, over and over – for demos (default: false) */
  loop?: boolean;
  /** Heading, and a quiet note next to it – e.g. "5-hour sessions" (default: "This week") */
  "title / note"?: string;
  /** Every piece in the week once the stack is sorted in – { task, day, session, usage, part, parts } */
  onScheduled?: (parts: ScheduledPart[]) => void;
  /** A task was dragged from the stack into a session – with the pieces it was split into */
  onPlace?: (task: ScheduledTask, parts: ScheduledPart[]) => void;
  /** A card was dragged to another session – save it */
  onMove?: (part: ScheduledPart, to: Record<string, any>) => void;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Scheduled Runs — Agent tasks sorted into a week of sessions – each session has a usage limit, small tasks fill the gaps, big ones are split across sessions, and the stack flies in one card at a time
 */
export declare const ScheduledRuns: React.FC<ScheduledRunsProps>;
export declare const ScheduledRunsRaw: React.FC<ScheduledRunsProps>;
export declare const ScheduledRunsDemo: React.FC<ScheduledRunsProps>;

export default ScheduledRuns;
