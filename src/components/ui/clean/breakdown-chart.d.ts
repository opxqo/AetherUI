import * as React from "react";

export type BreakdownRecord = Record<string, any>;
export type Dimension = Record<string, any>;
export type Measure = Record<string, any>;

export interface BreakdownChartProps {
  /** Flat records – one per task, ticket or order – with a field per dimension */
  records?: BreakdownRecord[];
  /** key, label, values in order, optional colors and icons per value */
  dimensions?: Dimension[];
  /** key, label, unit and the field to sum – without a field records are counted */
  measures?: Measure[];
  /** Heading in the gray tray (default: "Workload") */
  title?: string;
  /** Measure shown first */
  defaultMeasure?: string;
  /** Dimension along the bars */
  defaultSlice?: string;
  /** Dimension that stacks the bars, or "none" */
  defaultSegment?: string;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Breakdown Chart — Stacked bar chart with measure, slice and segment pickers, a hover breakdown and a linked table
 */
export declare const BreakdownChart: React.FC<BreakdownChartProps>;
export declare const BreakdownChartRaw: React.FC<BreakdownChartProps>;
export declare const BreakdownChartDemo: React.FC<BreakdownChartProps>;

export default BreakdownChart;
