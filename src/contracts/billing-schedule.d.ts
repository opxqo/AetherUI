import type { CatalogItem, ScheduleLine } from "./shared.js";
export type { CatalogItem, ScheduleLine } from "./shared.js";
import * as React from "react";
export interface BillingScheduleProps extends Omit<React.HTMLAttributes<HTMLElement>, "title" | "phase" | "currency" | "catalog" | "defaultLines" | "defaultStart" | "onChange" | "demo" | "className" | "style" | "children" | "ref"> {
  /** Heading on the tray */
  "title"?: string;
  /** Starting phase name – editable in the summary */
  "phase"?: string;
  /** Currency symbol for prices and totals */
  "currency"?: string;
  /** Products under Add product – { name, repeat, price } */
  "catalog"?: CatalogItem[];
  /** Lines to start with – products, a discount or a minimum */
  "defaultLines"?: ScheduleLine[];
  /** Start date as yyyy-mm-dd */
  "defaultStart"?: string;
  /** Called with { phase, start, duration, lines } after every change */
  "onChange"?: (schedule: { phase: string; start: Date; duration: number; lines: ScheduleLine[] }) => void;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const BillingSchedule: React.FC<BillingScheduleProps | (Partial<BillingScheduleProps> & { demo: true })>;
export declare const BillingScheduleRaw: React.FC<BillingScheduleProps>;
export declare const BillingScheduleDemo: React.FC<Partial<BillingScheduleProps>>;
export default BillingSchedule;
