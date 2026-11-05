import type { Team, KpiBoardData } from "./shared.js";
export type { Team, KpiBoardData } from "./shared.js";
import * as React from "react";
export interface KpiBoardProps extends Omit<React.HTMLAttributes<HTMLElement>, "data" | "ranges" | "range" | "defaultRange" | "onRangeChange" | "segments" | "segment" | "defaultSegment" | "onSegmentChange" | "compareLabel" | "currentLabel" | "previousLabel" | "formatMoney" | "icon" | "title" | "setup" | "action" | "demo" | "className" | "style" | "children" | "ref"> {
  /** One data set per range id: { stats, overview, focus } */
  "data": Record<string, KpiBoardData>;
  /** Options of the date range picker */
  "ranges": { id: string; label: string }[];
  /** Controlled range id */
  "range"?: string;
  /** Starting range when uncontrolled */
  "defaultRange"?: string;
  /** Called with the new range */
  "onRangeChange"?: (id: string) => void;
  /** A filter inside the overview card, e.g. All items / Pro / Team – it only switches that card's lines; no filter when left out */
  "segments"?: { id: string; label: string }[];
  /** Controlled segment id */
  "segment"?: string;
  /** Starting segment when uncontrolled */
  "defaultSegment"?: string;
  /** Called with the new segment */
  "onSegmentChange"?: (id: string) => void;
  /** Words after every change */
  "compareLabel"?: string;
  /** Name of the main line in the tooltip and the focus card */
  "currentLabel"?: string;
  /** Name of the comparison line */
  "previousLabel"?: string;
  /** Formats money values */
  "formatMoney"?: (value: number) => string;
  /** Icon in the focus card */
  "icon"?: React.ReactNode;
  /** Heading on the left of the bar above the cards */
  "title"?: string;
  /** The small button at the top right of the focus card, e.g. Set up */
  "setup"?: { label: string; onClick: () => void };
  /** The button at the bottom of the focus card */
  "action"?: { label: string; onClick: () => void };
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const KpiBoard: React.FC<KpiBoardProps | (Partial<KpiBoardProps> & { demo: true })>;
export declare const KpiBoardRaw: React.FC<KpiBoardProps>;
export declare const KpiBoardDemo: React.FC<Partial<KpiBoardProps>>;
export declare const KPIBoard: React.FC<KpiBoardProps | (Partial<KpiBoardProps> & { demo: true })>;
export default KpiBoard;
