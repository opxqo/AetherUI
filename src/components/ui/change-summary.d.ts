import * as React from "react";

export type MetricChange = Record<string, any>;

export interface ChangeSummaryProps {
  /** label, change text, tone (good, bad, neutral) and the arrow direction */
  changes?: MetricChange[];
  /** Heading in the gray tray (default: "What's changed") */
  title?: string;
  /** Small text on the right of the heading */
  period?: string;
  /** Replaces the icon in front of the heading */
  icon?: ReactNode;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Change Summary — What moved since last time – one metric per row with a colored trend
 */
export declare const ChangeSummary: React.FC<ChangeSummaryProps>;
export declare const ChangeSummaryRaw: React.FC<ChangeSummaryProps>;
export declare const ChangeSummaryDemo: React.FC<ChangeSummaryProps>;

export default ChangeSummary;
