import * as React from "react";

export interface BreakdownChartProps {
  /** Flat records – one per task, ticket or order – with a field per dimension */
  records?: any;
  /** key, label, values in order, optional colors and icons per value */
  dimensions?: any;
  /** key, label, unit and the field to sum – without a field records are counted */
  measures?: any;
  /** Heading in the gray tray (default: "Workload") */
  title?: any;
  /** Measure shown first */
  defaultMeasure?: any;
  /** Dimension along the bars */
  defaultSlice?: any;
  /** Dimension that stacks the bars, or "none" */
  defaultSegment?: any;
  /** Extra class on the tray */
  className?: any;
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
