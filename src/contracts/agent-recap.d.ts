import type { RecapEvent } from "./shared.js";
export type { RecapEvent } from "./shared.js";
import * as React from "react";
export interface AgentRecapProps extends Omit<React.HTMLAttributes<HTMLElement>, "events" | "kind" | "since" | "until" | "onAction" | "onUndo" | "onRedo" | "limit" | "replay" | "title" | "locale" | "demo" | "className" | "style" | "children" | "ref"> {
  /** { id, at, kind, title, detail?, logo?, count?, action?, doneLabel? } – everything that happened, any order */
  "events": RecapEvent[];
  /** Per event – needs you (with its action), failed (with Retry) or done */
  "kind"?: "needs" | "failed" | "done";
  /** When the person left, and now – the chart runs between them; until defaults to the time it renders */
  "since": Date | string | number;
  /** When the person left, and now – the chart runs between them; until defaults to the time it renders */
  "until"?: Date | string | number;
  /** The main action (Approve, Retry …) or Review. Return a promise and the row shows it working until it settles – a rejected one puts the row back */
  "onAction"?: (event: RecapEvent, action: "primary" | "review") => void | Promise<void>;
  /** Undo on a card that was acted on or on something an agent did (a done card), and Redo after that */
  "onUndo"?: (event: RecapEvent) => void;
  /** Undo on a card that was acted on or on something an agent did (a done card), and Redo after that */
  "onRedo"?: (event: RecapEvent) => void;
  /** Cards per lane at most – every lane keeps room for this many, so the three stay the same height however full they are */
  "limit"?: number;
  /** How long the night replays when it opens, in ms – 0 shows everything at once */
  "replay"?: number;
  /** Heading */
  "title"?: string;
  /** For the times and counts */
  "locale"?: string;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const AgentRecap: React.FC<AgentRecapProps | (Partial<AgentRecapProps> & { demo: true })>;
export declare const AgentRecapRaw: React.FC<AgentRecapProps>;
export declare const AgentRecapDemo: React.FC<Partial<AgentRecapProps>>;
export default AgentRecap;
