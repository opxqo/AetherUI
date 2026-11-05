import * as React from "react";

export type CatalogItem = Record<string, any>;
export type ScheduleLine = Record<string, any>;

export interface BillingScheduleProps {
  /** Heading on the tray (default: "Create a billing schedule") */
  title?: string;
  /** Starting phase name – editable in the summary (default: "Build-out phase") */
  phase?: string;
  /** Currency symbol for prices and totals (default: "$") */
  currency?: string;
  /** Products under Add product – { name, repeat, price } */
  catalog?: CatalogItem[];
  /** Lines to start with – products, a discount or a minimum */
  defaultLines?: ScheduleLine[];
  /** Start date as yyyy-mm-dd (default: "2026-01-01") */
  defaultStart?: string;
  /** Called with { phase, start, duration, lines } after every change */
  onChange?: (schedule: any) => void;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Billing Schedule — Build a billing phase – start date, duration, products with repeats and timing, discount, minimum and live totals
 */
export declare const BillingSchedule: React.FC<BillingScheduleProps>;
export declare const BillingScheduleRaw: React.FC<BillingScheduleProps>;
export declare const BillingScheduleDemo: React.FC<BillingScheduleProps>;

export default BillingSchedule;
