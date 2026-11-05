import type { BreakdownItem } from "./shared.js";
export type { BreakdownItem } from "./shared.js";
import * as React from "react";
export interface CompactBreakdownProps extends Omit<React.HTMLAttributes<HTMLElement>, "items" | "title" | "periods" | "period" | "defaultPeriod" | "onPeriodChange" | "delta" | "format" | "totalLabel" | "footer" | "demo" | "className" | "style" | "children" | "ref"> {
  /** { id?, label, value, color? } – the parts of the shown period; the list ranks them by value. Give an id when labels can change */
  "items": BreakdownItem[];
  /** Heading of the card */
  "title"?: string;
  /** Options of the period switch – no switch when left out */
  "periods"?: { id: string; label: string }[];
  /** Controlled period id */
  "period"?: string;
  /** Starting period when uncontrolled */
  "defaultPeriod"?: string;
  /** Called with the new period – pass the matching items and delta back in */
  "onPeriodChange"?: (id: string) => void;
  /** Change against the previous period in percent (12.4 or -3) – a small green or red pill next to the total */
  "delta"?: number;
  /** Formats every value – the total, the rows and the hovered part */
  "format"?: (value: number) => string;
  /** Line under the big number while nothing is hovered */
  "totalLabel"?: string;
  /** Replaces the line on the gray tray; null hides it */
  "footer"?: React.ReactNode | null;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const CompactBreakdown: React.FC<CompactBreakdownProps | (Partial<CompactBreakdownProps> & { demo: true })>;
export declare const CompactBreakdownRaw: React.FC<CompactBreakdownProps>;
export declare const CompactBreakdownDemo: React.FC<Partial<CompactBreakdownProps>>;
export default CompactBreakdown;
