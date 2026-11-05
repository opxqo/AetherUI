import * as React from "react";

export interface AnalyticsScreenProps {
  /** Called with the label of a sidebar item */
  onNavigate?: any;
  /** Workspace name in the sidebar (default: "Acme") */
  workspace?: any;
  /** Account at the bottom of the sidebar (default: { name: "Alex Morgan" }) */
  user?: any;
  /** Extra class on the root */
  className?: any;
  /** Key figures on top – shown as given; good says which way of the delta is good news */
  stats?: any;
  /** Lines of the revenue breakdown */
  breakdown?: any;
  /** Top products, share in % of the best one */
  products?: any;
  /** Lines of the revenue chart, one value per day */
  channels?: any;
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
