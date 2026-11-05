import * as React from "react";

export type KpiBoardData = Record<string, any>;

export interface KpiBoardProps {
  /** One data set per range id: { stats, overview, focus } */
  data?: Record<string, KpiBoardData>;
  /** Options of the date range picker */
  ranges?: { id: string; label: string }[];
  /** Controlled range id */
  range?: string;
  /** Starting range when uncontrolled (default: first range) */
  defaultRange?: string;
  /** Called with the new range */
  onRangeChange?: (id: string) => void;
  /** A filter inside the overview card, e.g. All items / Pro / Team – it only switches that card's lines; no filter when left out */
  segments?: { id: string; label: string }[];
  /** Controlled segment id */
  segment?: string;
  /** Starting segment when uncontrolled (default: first segment) */
  defaultSegment?: string;
  /** Called with the new segment */
  onSegmentChange?: (id: string) => void;
  /** Words after every change (default: "vs. last period") */
  compareLabel?: string;
  /** Name of the main line in the tooltip and the focus card (default: "This period") */
  currentLabel?: string;
  /** Name of the comparison line (default: "Last period") */
  previousLabel?: string;
  /** Formats money values (default: $1,234.00) */
  formatMoney?: (value: number) => string;
  /** Icon in the focus card */
  icon?: ReactNode;
  /** Heading on the left of the bar above the cards */
  title?: string;
  /** The small button at the top right of the focus card, e.g. Set up */
  setup?: { label: string; onClick: () => void };
  /** The button at the bottom of the focus card */
  action?: { label: string; onClick: () => void };
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * KPI Board — The top of a dashboard – three trend cards, an overview chart that compares this period with the last, and a focus card; hover shows any day's value and every number rolls when the range changes
 */
export declare const KpiBoard: React.FC<KpiBoardProps>;
export declare const KpiBoardRaw: React.FC<KpiBoardProps>;
export declare const KpiBoardDemo: React.FC<KpiBoardProps>;
export declare const KPIBoard: React.FC<KpiBoardProps>;
export default KpiBoard;
