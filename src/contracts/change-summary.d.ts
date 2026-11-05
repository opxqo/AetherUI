import * as React from "react";
export type MetricChange = {
  label: string;
  /** What happened, in words, e.g. "Up 6.1% to 18.2K" */
  change: string;
  /** good: green arrow · bad: red arrow · neutral: gray dash */
  tone?: "good" | "bad" | "neutral";
  /** Direction of the arrow – defaults to up for good, down for bad */
  direction?: "up" | "down";
};

export type ChangeSummaryProps = {
  demo?: boolean;
  style?: React.CSSProperties;
  ref?: React.Ref<HTMLElement>;
  title?: string;
  /** Small text on the right of the heading, e.g. "This week" */
  period?: string;
  icon?: React.ReactNode;
  changes: MetricChange[];
  className?: string;
};
/**
 * Change Summary — What moved since last time – one metric per row with a colored trend
 */
export declare const ChangeSummary: React.FC<ChangeSummaryProps | (Partial<ChangeSummaryProps> & { demo: true })>;
export declare const ChangeSummaryRaw: React.FC<ChangeSummaryProps>;
export declare const ChangeSummaryDemo: React.FC<Partial<ChangeSummaryProps>>;

export default ChangeSummary;
