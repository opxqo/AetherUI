import * as React from "react";

export type ReviewItem = Record<string, any>;
export type ReviewText = Record<string, any>;
export type ReviewFile = Record<string, any>;
export type ReviewStep = Record<string, any>;
export type Ref = Record<string, any>;
export type ReviewCenterHandle = Record<string, any>;

export interface ReviewCenterProps {
  /** { id, title, agent, model?, icon?, type, risk, confidence, createdAt, reasoning?, fields?, body?, bodyLabel?, format?, sources? } – everything waiting; decided items hide themselves, new ids slide into the queue */
  items?: ReviewItem[];
  /** Per item – sorts the queue (high first), feeds the High risk filter and shows as a small tag next to the agent (high and medium) */
  risk?: "high" | "medium" | "low";
  /** Per item, 0–1 – below lowConfidence the item counts as Unsure */
  confidence?: number;
  /** Per item – a string, or an array of strings and { text, note, source? } flags; flags are marked and explain themselves on hover, focus or F. Edit (E) works on these two */
  "fields / body"?: ReviewText;
  /** Per item – a code change: { path, added?, removed?, diff?, start? } – a row per file, a unified diff with line numbers and a light syntax tint under the files that have one */
  files?: ReviewFile[];
  /** Per item – a plan: { title, tool?, icon?, detail? } as numbered steps; a step with a flag gets an amber number */
  steps?: ReviewStep[];
  /** Per item – "code" shows the body as a diff, like a file's (default: "text") */
  format?: "text" | "code";
  /** Approved or rejected – result is { decision, reason?, text?, fields? }; text and fields only when the reviewer edited them */
  onDecide?: (item: any, result: any) => void;
  /** The last decision was taken back – put the item back if you dropped it from items */
  onUndo?: (item: any, result: any) => void;
  /** The reviewer moved on without deciding; the row is marked skipped */
  onSkip?: (item: any) => void;
  /** How many were reviewed before (e.g. today) – the header counts on from here (default: 0) */
  reviewed?: number;
  /** The total in the header (default: reviewed + waiting) */
  total?: number;
  /** How long an item may wait, in ms – waiting times turn amber at 75% and red past it (default: 1800000) */
  sla?: number;
  /** The clock (epoch ms) – defaults to the real one, ticking every 10s */
  now?: number;
  /** Below this an item is Unsure (default: 0.7) */
  lowConfidence?: number;
  /** The quick reasons for a rejection, picked with 1–4 (default: ["Wrong info", "Tone", "Not allowed", "Other"]) */
  reasons?: string[];
  /** High risk first then oldest, oldest first, or as passed (default: "risk") */
  order?: "risk" | "oldest" | "given";
  /** The queue's filter, controlled or uncontrolled (default: "all") */
  "filter / defaultFilter"?: "all" | "high" | "unsure";
  /** The filter changed */
  onFilterChange?: (filter: any) => void;
  /** approve, reject(reason?), edit, setDraft, save, cancel, skip, next, previous, undo, peek(index), select(id) */
  ref?: Ref<ReviewCenterHandle>;
  /** Heading of the bar (default: "Review center") */
  title?: string;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Review Center — A focused workspace for what your agents want to do – the queue sorted by risk, one item at a time with the shaky spans marked, Approve, Edit, Reject and Skip on single keys, a stamp as each one leaves and the next one rising in
 */
export declare const ReviewCenter: React.FC<ReviewCenterProps>;
export declare const ReviewCenterRaw: React.FC<ReviewCenterProps>;
export declare const ReviewCenterDemo: React.FC<ReviewCenterProps>;

export default ReviewCenter;
