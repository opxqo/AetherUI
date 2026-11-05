import type { DateRange } from "./shared.js";
export type { DateRange } from "./shared.js";
import * as React from "react";
export interface DateRangePickerProps extends Omit<React.HTMLAttributes<HTMLElement>, "value" | "defaultValue" | "onChange" | "presets" | "compare" | "defaultCompare" | "weekStartsOn" | "min" | "max" | "defaultOpen" | "today" | "demo" | "className" | "style" | "children" | "ref"> {
  /** Controlled range */
  "value"?: { start: Date; end: Date };
  /** Starting range when uncontrolled */
  "defaultValue"?: { start: Date; end: Date };
  /** Called on Apply with the range, the comparison range (or null) and the compare mode */
  "onChange"?: (range: DateRange, compare: DateRange | null, mode: "off" | "previous" | "year") => void;
  /** The list on the left (chips on phones) */
  "presets"?: { id: string; label: string; range: (today: Date) => DateRange }[];
  /** Show "Compare: Off / Previous period / Previous year" */
  "compare"?: boolean;
  /** Comparison selected at the start */
  "defaultCompare"?: "off" | "previous" | "year";
  /** 0 = Sunday, 1 = Monday */
  "weekStartsOn"?: 0 | 1;
  /** Days outside can't be picked */
  "min"?: Date;
  /** Days outside can't be picked */
  "max"?: Date;
  /** Open the panel right away */
  "defaultOpen"?: boolean;
  /** Reference day for the presets – handy for tests and screenshots */
  "today"?: Date;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const DateRangePicker: React.FC<DateRangePickerProps | (Partial<DateRangePickerProps> & { demo: true })>;
export declare const DateRangePickerRaw: React.FC<DateRangePickerProps>;
export declare const DateRangePickerDemo: React.FC<Partial<DateRangePickerProps>>;
export default DateRangePicker;
