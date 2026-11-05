import * as React from "react";

export interface DateRangePickerProps {
  /** Controlled range */
  value?: any;
  /** Starting range when uncontrolled (default: last 30 days) */
  defaultValue?: any;
  /** Called on Apply with the range, the comparison range (or null) and the compare mode */
  onChange?: any;
  /** The list on the left (chips on phones) (default: Today … Year to date) */
  presets?: any;
  /** Show "Compare: Off / Previous period / Previous year" (default: true) */
  compare?: any;
  /** Comparison selected at the start (default: "previous") */
  defaultCompare?: any;
  /** 0 = Sunday, 1 = Monday (default: 1) */
  weekStartsOn?: any;
  /** Days outside can't be picked (default: max: today) */
  "min / max"?: any;
  /** Open the panel right away (default: false) */
  defaultOpen?: any;
  /** Reference day for the presets – handy for tests and screenshots (default: now) */
  today?: any;
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
 * Date Range Picker — Presets and two calendars with a hover preview, comparison with the previous period or year, full keyboard control
 */
export declare const DateRangePicker: React.FC<DateRangePickerProps>;
export declare const DateRangePickerRaw: React.FC<DateRangePickerProps>;
export declare const DateRangePickerDemo: React.FC<DateRangePickerProps>;

export default DateRangePicker;
