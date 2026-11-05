import * as React from "react";

export interface KpiBoardProps {
  /** One data set per range id: { stats, overview, focus } */
  data?: any;
  /** Options of the date range picker */
  ranges?: any;
  /** Controlled range id */
  range?: any;
  /** Starting range when uncontrolled (default: first range) */
  defaultRange?: any;
  /** Called with the new range */
  onRangeChange?: any;
  /** A filter inside the overview card, e.g. All items / Pro / Team – it only switches that card's lines; no filter when left out */
  segments?: any;
  /** Controlled segment id */
  segment?: any;
  /** Starting segment when uncontrolled (default: first segment) */
  defaultSegment?: any;
  /** Called with the new segment */
  onSegmentChange?: any;
  /** Words after every change (default: "vs. last period") */
  compareLabel?: any;
  /** Name of the main line in the tooltip and the focus card (default: "This period") */
  currentLabel?: any;
  /** Name of the comparison line (default: "Last period") */
  previousLabel?: any;
  /** Formats money values (default: $1,234.00) */
  formatMoney?: any;
  /** Icon in the focus card */
  icon?: any;
  /** Heading on the left of the bar above the cards */
  title?: any;
  /** The small button at the top right of the focus card, e.g. Set up */
  setup?: any;
  /** The button at the bottom of the focus card */
  action?: any;
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
 * KPI Board — The top of a dashboard – three trend cards, an overview chart that compares this period with the last, and a focus card; hover shows any day's value and every number rolls when the range changes
 */
export declare const KpiBoard: React.FC<KpiBoardProps>;
export declare const KpiBoardRaw: React.FC<KpiBoardProps>;
export declare const KpiBoardDemo: React.FC<KpiBoardProps>;
export declare const KPIBoard: React.FC<KpiBoardProps>;
export default KpiBoard;
