import * as React from "react";

export type DateRange = Record<string, any>;

export interface DateRangePickerProps {
  /** Controlled range */
  value?: { start: Date; end: Date };
  /** Starting range when uncontrolled (default: last 30 days) */
  defaultValue?: { start: Date; end: Date };
  /** Called on Apply with the range, the comparison range (or null) and the compare mode */
  onChange?: (range: any, compare: any, mode: any) => void;
  /** The list on the left (chips on phones) (default: Today … Year to date) */
  presets?: { id, label, range: (today: any) => DateRange }[];
  /** Show "Compare: Off / Previous period / Previous year" (default: true) */
  compare?: boolean;
  /** Comparison selected at the start (default: "previous") */
  defaultCompare?: "off" | "previous" | "year";
  /** 0 = Sunday, 1 = Monday (default: 1) */
  weekStartsOn?: 0 | 1;
  /** Days outside can't be picked (default: max: today) */
  "min / max"?: Date;
  /** Open the panel right away (default: false) */
  defaultOpen?: boolean;
  /** Reference day for the presets – handy for tests and screenshots (default: now) */
  today?: Date;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Date Range Picker — Presets and two calendars with a hover preview, comparison with the previous period or year, full keyboard control
 */
export declare const DateRangePicker: React.FC<DateRangePickerProps>;
export declare const DateRangePickerRaw: React.FC<DateRangePickerProps>;
export declare const DateRangePickerDemo: React.FC<DateRangePickerProps>;

export default DateRangePicker;
