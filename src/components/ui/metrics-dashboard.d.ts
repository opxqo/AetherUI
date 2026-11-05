import * as React from "react";

export interface MetricsDashboardProps {
  /** Title in the bar on top (default: "Sales") */
  title?: string;
  /** Site or workspace shown under the title (default: "Northwind Store") */
  site?: string;
  /** Period to start on – shown as Week, Month and Quarter (default: "30d") */
  defaultRange?: "7d" | "30d" | "90d";
  /** Metric to start on (default: "revenue") */
  defaultMetric?: "revenue" | "orders" | "aov" | "refunds";
  /** Called when Export is pressed; the button confirms locally either way */
  onExport?: (range: any, metric: any) => void;
  /** One entry per day, oldest first; 180 days give every range a previous period. Days missing a number count as 0; without a previous period the change chips stay empty (default: sample data) */
  data?: { date: Date; revenue; orders; refunded }[];
  /** Rows of Top products with their share of revenue (0–1); bars are relative to the largest share. An empty list shows a short note (default: sample products) */
  products?: { name: string; share: number }[];
  /** Rows of Channels, like products (default: sample channels) */
  channels?: { name: string; share: number }[];
  /** ISO currency code for revenue, average order and the axis (default: "USD") */
  currency?: string;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Metrics Dashboard — Sales overview – KPI cards pick the metric, one chart switches between dotted line and bars, with top products and channels
 */
export declare const MetricsDashboard: React.FC<MetricsDashboardProps>;
export declare const MetricsDashboardRaw: React.FC<MetricsDashboardProps>;
export declare const MetricsDashboardDemo: React.FC<MetricsDashboardProps>;

export default MetricsDashboard;
