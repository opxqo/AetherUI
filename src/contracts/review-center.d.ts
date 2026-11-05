import type { ReviewText, ReviewFile, ReviewStep, ReviewItem, ReviewCenterHandle } from "./shared.js";
export type { ReviewText, ReviewFile, ReviewStep, ReviewItem, ReviewCenterHandle } from "./shared.js";
import * as React from "react";
export interface ReviewCenterProps extends Omit<React.HTMLAttributes<HTMLElement>, "items" | "risk" | "confidence" | "fields" | "body" | "files" | "steps" | "format" | "onDecide" | "onUndo" | "onSkip" | "reviewed" | "total" | "sla" | "now" | "lowConfidence" | "reasons" | "order" | "filter" | "defaultFilter" | "onFilterChange" | "ref" | "title" | "demo" | "className" | "style" | "children"> {
  /** { id, title, agent, model?, icon?, type, risk, confidence, createdAt, reasoning?, fields?, body?, bodyLabel?, format?, sources? } – everything waiting; decided items hide themselves, new ids slide into the queue */
  "items": ReviewItem[];
  /** Per item – sorts the queue (high first), feeds the High risk filter and shows as a small tag next to the agent (high and medium) */
  "risk"?: "high" | "medium" | "low";
  /** Per item, 0–1 – below lowConfidence the item counts as Unsure */
  "confidence"?: number;
  /** Per item – a string, or an array of strings and { text, note, source? } flags; flags are marked and explain themselves on hover, focus or F. Edit (E) works on these two */
  "fields"?: ReviewText;
  /** Per item – a string, or an array of strings and { text, note, source? } flags; flags are marked and explain themselves on hover, focus or F. Edit (E) works on these two */
  "body"?: ReviewText;
  /** Per item – a code change: { path, added?, removed?, diff?, start? } – a row per file, a unified diff with line numbers and a light syntax tint under the files that have one */
  "files"?: ReviewFile[];
  /** Per item – a plan: { title, tool?, icon?, detail? } as numbered steps; a step with a flag gets an amber number */
  "steps"?: ReviewStep[];
  /** Per item – "code" shows the body as a diff, like a file's */
  "format"?: "text" | "code";
  /** Approved or rejected – result is { decision, reason?, text?, fields? }; text and fields only when the reviewer edited them */
  "onDecide"?: (item: ReviewItem, result: { decision: "approved" | "rejected"; reason?: string; text?: string; fields?: Record<string, string> }) => void;
  /** The last decision was taken back – put the item back if you dropped it from items */
  "onUndo"?: (item: ReviewItem, result: { decision: "approved" | "rejected"; reason?: string; text?: string; fields?: Record<string, string> }) => void;
  /** The reviewer moved on without deciding; the row is marked skipped */
  "onSkip"?: (item: ReviewItem) => void;
  /** How many were reviewed before (e.g. today) – the header counts on from here */
  "reviewed"?: number;
  /** The total in the header */
  "total"?: number;
  /** How long an item may wait, in ms – waiting times turn amber at 75% and red past it */
  "sla"?: number;
  /** The clock (epoch ms) – defaults to the real one, ticking every 10s */
  "now"?: number;
  /** Below this an item is Unsure */
  "lowConfidence"?: number;
  /** The quick reasons for a rejection, picked with 1–4 */
  "reasons"?: string[];
  /** High risk first then oldest, oldest first, or as passed */
  "order"?: "risk" | "oldest" | "given";
  /** The queue's filter, controlled or uncontrolled */
  "filter"?: "all" | "high" | "unsure";
  /** The queue's filter, controlled or uncontrolled */
  "defaultFilter"?: "all" | "high" | "unsure";
  /** The filter changed */
  "onFilterChange"?: (filter: "all" | "high" | "unsure") => void;
  /** approve, reject(reason?), edit, setDraft, save, cancel, skip, next, previous, undo, peek(index), select(id) */
  "ref"?: React.Ref<ReviewCenterHandle>;
  /** Heading of the bar */
  "title"?: string;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
export declare const ReviewCenter: React.FC<ReviewCenterProps | (Partial<ReviewCenterProps> & { demo: true })>;
export declare const ReviewCenterRaw: React.FC<ReviewCenterProps>;
export declare const ReviewCenterDemo: React.FC<Partial<ReviewCenterProps>>;
export default ReviewCenter;
