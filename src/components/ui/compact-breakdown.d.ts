import * as React from "react";

export interface CompactBreakdownProps {
  /** { id?, label, value, color? } – the parts of the shown period; the list ranks them by value. Give an id when labels can change */
  items?: any;
  /** Heading of the card (default: "Breakdown") */
  title?: any;
  /** Options of the period switch – no switch when left out */
  periods?: any;
  /** Controlled period id */
  period?: any;
  /** Starting period when uncontrolled (default: first period) */
  defaultPeriod?: any;
  /** Called with the new period – pass the matching items and delta back in */
  onPeriodChange?: any;
  /** Change against the previous period in percent (12.4 or -3) – a small green or red pill next to the total */
  delta?: any;
  /** Formats every value – the total, the rows and the hovered part (default: whole numbers with separators) */
  format?: any;
  /** Line under the big number while nothing is hovered (default: "Total") */
  totalLabel?: any;
  /** Replaces the line on the gray tray; null hides it (default: "Largest: <part>") */
  footer?: any;
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
 * Compact Breakdown — A total split into its parts in one small card – numbers roll, the bar glides and the ranked rows trade places when the period changes
 */
export declare const CompactBreakdown: React.FC<CompactBreakdownProps>;
export declare const CompactBreakdownRaw: React.FC<CompactBreakdownProps>;
export declare const CompactBreakdownDemo: React.FC<CompactBreakdownProps>;

export default CompactBreakdown;
