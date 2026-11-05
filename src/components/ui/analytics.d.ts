import * as React from "react";

export type KpiSeries = Record<string, any>;

export interface AnalyticsScreenProps {
  /** Called with the label of a sidebar item */
  onNavigate?: (label: string) => void;
  /** Workspace name in the sidebar (default: "Acme") */
  workspace?: string;
  /** Account at the bottom of the sidebar (default: { name: "Alex Morgan" }) */
  user?: { name: string; avatar?: string };
  /** Key figures on top – shown as given; good says which way of the delta is good news */
  stats?: { label: string; value: string; delta: string; bars: number[]; good?: "up" | "down" }[];
  /** Lines of the revenue breakdown */
  breakdown?: { label: string; value: string; spark: number[]; tone?: "up" | "down" | "flat" }[];
  /** Top products, share in % of the best one */
  products?: { label: string; value: string; share: number }[];
  /** Lines of the revenue chart, one value per day */
  channels?: KpiSeries[];
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Analytics — Revenue dashboard: key figures, revenue by channel, breakdown, top products and weekly trends
 */
export declare const AnalyticsScreen: React.FC<AnalyticsScreenProps>;
export declare const AnalyticsScreenRaw: React.FC<AnalyticsScreenProps>;
export declare const AnalyticsScreenDemo: React.FC<AnalyticsScreenProps>;
export declare const Analytics: React.FC<AnalyticsScreenProps>;
export default AnalyticsScreen;
