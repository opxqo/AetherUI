import type { BreakdownRecord, Dimension, Measure } from "./shared.js";
export type { BreakdownRecord, Dimension, Measure } from "./shared.js";
import * as React from "react";
export interface BreakdownChartProps extends Omit<React.HTMLAttributes<HTMLElement>, "records" | "dimensions" | "measures" | "title" | "defaultMeasure" | "defaultSlice" | "defaultSegment" | "demo" | "className" | "style" | "children" | "ref"> {
  /** Flat records – one per task, ticket or order – with a field per dimension */
  "records"?: BreakdownRecord[];
  /** key, label, values in order, optional colors and icons per value */
  "dimensions"?: Dimension[];
  /** key, label, unit and the field to sum – without a field records are counted */
  "measures"?: Measure[];
  /** Heading in the gray tray */
  "title"?: string;
  /** Measure shown first */
  "defaultMeasure"?: string;
  /** Dimension along the bars */
  "defaultSlice"?: string;
  /** Dimension that stacks the bars, or "none" */
  "defaultSegment"?: string;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const BreakdownChart: React.FC<BreakdownChartProps | (Partial<BreakdownChartProps> & { demo: true })>;
export declare const BreakdownChartRaw: React.FC<BreakdownChartProps>;
export declare const BreakdownChartDemo: React.FC<Partial<BreakdownChartProps>>;
export default BreakdownChart;
