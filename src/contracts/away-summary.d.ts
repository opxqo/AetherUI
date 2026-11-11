import * as React from "react";
export type AwayItemKind = "needs-you" | "failed" | "done";
export interface AwayItem { id: string; title: string; kind: AwayItemKind; detail?: string; action?: string | boolean }
export interface AwaySummaryProps extends Omit<React.HTMLAttributes<HTMLElement>, "title" | "demo" | "className" | "style" | "children" | "ref"> {
  since?: Date | number | string;
  items?: AwayItem[];
  onAction?: (id: string, item: AwayItem) => void | Promise<unknown>;
  onDismiss?: () => void;
  collapsed?: boolean;
  defaultCollapsed?: boolean;
  onCollapsedChange?: (collapsed: boolean) => void;
  limit?: number;
  timeStyle?: "duration" | "clock";
  now?: Date | number;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const AwaySummary: React.FC<AwaySummaryProps | (Partial<AwaySummaryProps> & { demo: true })>;
export declare const AwaySummaryRaw: React.FC<AwaySummaryProps>;
export declare const AwaySummaryDemo: React.FC<Partial<AwaySummaryProps>>;
export default AwaySummary;
