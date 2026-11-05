import * as React from "react";
export interface MetricsDashboardProps extends Omit<React.HTMLAttributes<HTMLElement>, "title" | "site" | "defaultRange" | "defaultMetric" | "onExport" | "data" | "products" | "channels" | "currency" | "demo" | "className" | "style" | "children" | "ref"> {
  /** Title in the bar on top */
  "title"?: string;
  /** Site or workspace shown under the title */
  "site"?: string;
  /** Period to start on – shown as Week, Month and Quarter */
  "defaultRange"?: "7d" | "30d" | "90d";
  /** Metric to start on */
  "defaultMetric"?: "revenue" | "orders" | "aov" | "refunds";
  /** Called when Export is pressed; the button confirms locally either way */
  "onExport"?: (range: "7d" | "30d" | "90d", metric: "revenue" | "orders" | "aov" | "refunds") => void;
  /** One entry per day, oldest first; 180 days give every range a previous period. Days missing a number count as 0; without a previous period the change chips stay empty */
  "data"?: { date: Date;revenue: number;orders: number;refunded: number}[];
  /** Rows of Top products with their share of revenue (0–1); bars are relative to the largest share. An empty list shows a short note */
  "products"?: { name: string; share: number }[];
  /** Rows of Channels, like products */
  "channels"?: { name: string; share: number }[];
  /** ISO currency code for revenue, average order and the axis */
  "currency"?: string;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const MetricsDashboard: React.FC<MetricsDashboardProps | (Partial<MetricsDashboardProps> & { demo: true })>;
export declare const MetricsDashboardRaw: React.FC<MetricsDashboardProps>;
export declare const MetricsDashboardDemo: React.FC<Partial<MetricsDashboardProps>>;
export default MetricsDashboard;
