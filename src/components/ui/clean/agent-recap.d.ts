import * as React from "react";

export type RecapEvent = Record<string, any>;

export interface AgentRecapProps {
  /** { id, at, kind, title, detail?, logo?, count?, action?, doneLabel? } – everything that happened, any order */
  events?: RecapEvent[];
  /** Per event – needs you (with its action), failed (with Retry) or done */
  kind?: "needs" | "failed" | "done";
  /** When the person left, and now – the chart runs between them; until defaults to the time it renders */
  "since / until"?: Date | string | number;
  /** The main action (Approve, Retry …) or Review. Return a promise and the row shows it working until it settles – a rejected one puts the row back */
  onAction?: (event, action: "primary" | "review") => void | Promise<any>;
  /** Undo on a card that was acted on or on something an agent did (a done card), and Redo after that */
  "onUndo / onRedo"?: (event: any) => void;
  /** Cards per lane at most – every lane keeps room for this many, so the three stay the same height however full they are (default: 3) */
  limit?: number;
  /** How long the night replays when it opens, in ms – 0 shows everything at once (default: 1800) */
  replay?: number;
  /** Heading (default: "While you were away") */
  title?: string;
  /** For the times and counts */
  locale?: string;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Agent Recap — What the agents did while you were away – the night as a small chart with a peak per event, then a board of what needs you, what failed and what's done, acted on right on the card
 */
export declare const AgentRecap: React.FC<AgentRecapProps>;
export declare const AgentRecapRaw: React.FC<AgentRecapProps>;
export declare const AgentRecapDemo: React.FC<AgentRecapProps>;

export default AgentRecap;
