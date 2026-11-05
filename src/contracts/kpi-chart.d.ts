import type { KpiSeries } from "./shared.js";
export type { KpiSeries } from "./shared.js";
import * as React from "react";
export interface KpiChartProps extends Omit<React.HTMLAttributes<HTMLElement>, "title" | "value" | "delta" | "labels" | "tooltipLabels" | "series" | "format" | "footer" | "defaultIndex" | "emptyText" | "demo" | "className" | "style" | "children" | "ref"> {
  /** Label above the number */
  "title"?: string;
  /** Headline value, already formatted */
  "value"?: string;
  /** Change against the previous period – green when positive, red when negative */
  "delta"?: number;
  /** One label per point; first, middle and last are shown on the axis */
  "labels"?: string[];
  /** Longer labels for the tooltip header, falls back to labels */
  "tooltipLabels"?: string[];
  /** Lines with a label, a color and one value per label */
  "series"?: KpiSeries[];
  /** Formats axis, tooltip and delta values */
  "format"?: (n: number) => string;
  /** Line under the chart */
  "footer"?: string;
  /** Point that stays highlighted while nobody hovers */
  "defaultIndex"?: number;
  /** Quiet text in the plot when there are no values, or only zeros (0% on a percent axis still draws) */
  "emptyText"?: string;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const KpiChart: React.FC<KpiChartProps | (Partial<KpiChartProps> & { demo: true })>;
export declare const KpiChartRaw: React.FC<KpiChartProps>;
export declare const KpiChartDemo: React.FC<Partial<KpiChartProps>>;
export declare const KPIChart: React.FC<KpiChartProps | (Partial<KpiChartProps> & { demo: true })>;
export default KpiChart;
