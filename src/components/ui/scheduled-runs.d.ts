import * as React from "react";

export interface ScheduledRunsProps {
  /** { id, title, usage, agent?, detail?, logo?, at? } – booked tasks have at: { day, session }; the rest wait in the stack and are sorted in, in this order */
  tasks?: any;
  /** Per task – what it takes out of one session's limit, in percent; over the limit it's split across sessions */
  usage?: any;
  /** Column heads – three days read best; more fit, the week then scrolls sideways on narrow screens (default: Mon–Wed) */
  days?: any;
  /** Row heads – when each session starts (default: ["07:00", "12:00", "17:00"]) */
  sessions?: any;
  /** The session running now – earlier ones are dimmed and take no new tasks; a red line marks where it starts (default: { day: 0, session: 0 }) */
  now?: any;
  /** What one session can take, in the unit of usage (default: 100) */
  limit?: any;
  /** A split task never leaves a piece smaller than this in a session (default: 15) */
  minPiece?: any;
  /** The agents in the head as small overlapping logos – picking one fans them out, slides its name out and fades the other agents' tasks back (default: every task's agent) */
  agents?: any;
  /** Auto sorts the stack in when switched to; Manual puts the sorted-in cards back on the stack – booked cards and cards placed by hand stay. Both switch mid-run (default: "auto") */
  defaultMode?: any;
  /** In Auto: sorts the stack in on its own – after 800ms, or after the number of ms (default: false) */
  autoRun?: any;
  /** Clears the week and sorts in again, over and over – for demos (default: false) */
  loop?: any;
  /** Heading, and a quiet note next to it – e.g. "5-hour sessions" (default: "This week") */
  "title / note"?: any;
  /** Every piece in the week once the stack is sorted in – { task, day, session, usage, part, parts } */
  onScheduled?: any;
  /** A task was dragged from the stack into a session – with the pieces it was split into */
  onPlace?: any;
  /** A card was dragged to another session – save it */
  onMove?: any;
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
 * Scheduled Runs — Agent tasks sorted into a week of sessions – each session has a usage limit, small tasks fill the gaps, big ones are split across sessions, and the stack flies in one card at a time
 */
export declare const ScheduledRuns: React.FC<ScheduledRunsProps>;
export declare const ScheduledRunsRaw: React.FC<ScheduledRunsProps>;
export declare const ScheduledRunsDemo: React.FC<ScheduledRunsProps>;

export default ScheduledRuns;
