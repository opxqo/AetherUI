import * as React from "react";

export type BreakdownItem = Record<string, any>;

export interface CompactBreakdownProps {
  /** { id?, label, value, color? } – the parts of the shown period; the list ranks them by value. Give an id when labels can change */
  items?: BreakdownItem[];
  /** Heading of the card (default: "Breakdown") */
  title?: string;
  /** Options of the period switch – no switch when left out */
  periods?: { id: string; label: string }[];
  /** Controlled period id */
  period?: string;
  /** Starting period when uncontrolled (default: first period) */
  defaultPeriod?: string;
  /** Called with the new period – pass the matching items and delta back in */
  onPeriodChange?: (id: string) => void;
  /** Change against the previous period in percent (12.4 or -3) – a small green or red pill next to the total */
  delta?: number;
  /** Formats every value – the total, the rows and the hovered part (default: whole numbers with separators) */
  format?: (value: number) => string;
  /** Line under the big number while nothing is hovered (default: "Total") */
  totalLabel?: string;
  /** Replaces the line on the gray tray; null hides it (default: "Largest: <part>") */
  footer?: ReactNode | null;
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
