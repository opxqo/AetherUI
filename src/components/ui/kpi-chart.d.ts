import * as React from "react";

export interface KpiChartProps {
  /** Label above the number */
  title?: any;
  /** Headline value, already formatted */
  value?: any;
  /** Change against the previous period – green when positive, red when negative */
  delta?: any;
  /** One label per point; first, middle and last are shown on the axis */
  labels?: any;
  /** Longer labels for the tooltip header, falls back to labels */
  tooltipLabels?: any;
  /** Lines with a label, a color and one value per label */
  series?: any;
  /** Formats axis, tooltip and delta values (default: compact, e.g. 1.2k) */
  format?: any;
  /** Line under the chart */
  footer?: any;
  /** Point that stays highlighted while nobody hovers */
  defaultIndex?: any;
  /** Quiet text in the plot when there are no values, or only zeros (0% on a percent axis still draws) (default: "No data yet") */
  emptyText?: any;
  /** Extra class on the card */
  className?: any;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * KPI Chart — Metric card with a multi-line chart and a tooltip that follows the pointer
 */
export declare const KpiChart: React.FC<KpiChartProps>;
export declare const KpiChartRaw: React.FC<KpiChartProps>;
export declare const KpiChartDemo: React.FC<KpiChartProps>;
export declare const KPIChart: React.FC<KpiChartProps>;
export default KpiChart;
