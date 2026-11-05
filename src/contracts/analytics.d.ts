import type { KpiSeries } from "./shared.js";
export type { KpiSeries } from "./shared.js";
import * as React from "react";
export interface AnalyticsScreenProps extends Omit<React.HTMLAttributes<HTMLElement>, "onNavigate" | "workspace" | "user" | "stats" | "breakdown" | "products" | "channels" | "demo" | "className" | "style" | "children" | "ref"> {
  /** Called with the label of a sidebar item */
  "onNavigate"?: (label: string) => void;
  /** Workspace name in the sidebar */
  "workspace"?: string;
  /** Account at the bottom of the sidebar */
  "user"?: { name: string; avatar?: string };
  /** Key figures on top – shown as given; good says which way of the delta is good news */
  "stats"?: { label: string; value: string; delta: string; bars: number[]; good?: "up" | "down" }[];
  /** Lines of the revenue breakdown */
  "breakdown"?: { label: string; value: string; spark: number[]; tone?: "up" | "down" | "flat" }[];
  /** Top products, share in % of the best one */
  "products"?: { label: string; value: string; share: number }[];
  /** Lines of the revenue chart, one value per day */
  "channels"?: KpiSeries[];
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const AnalyticsScreen: React.FC<AnalyticsScreenProps | (Partial<AnalyticsScreenProps> & { demo: true })>;
export declare const AnalyticsScreenRaw: React.FC<AnalyticsScreenProps>;
export declare const AnalyticsScreenDemo: React.FC<Partial<AnalyticsScreenProps>>;
export declare const Analytics: React.FC<AnalyticsScreenProps | (Partial<AnalyticsScreenProps> & { demo: true })>;
export default AnalyticsScreen;
