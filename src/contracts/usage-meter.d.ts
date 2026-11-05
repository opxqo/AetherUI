import type { Plan } from "./shared.js";
export type { Plan } from "./shared.js";
import * as React from "react";
export interface UsageMeterProps extends Omit<React.HTMLAttributes<HTMLElement>, "total" | "used" | "limits" | "periods" | "period" | "defaultPeriod" | "onPeriodChange" | "resetAt" | "daily" | "onUpgrade" | "title" | "plan" | "unit" | "warnAt" | "upgradeLabel" | "topUpLabel" | "demo" | "className" | "style" | "children" | "ref"> {
  /** Credits included in the plan – the bar's full width */
  "total"?: number;
  /** What the credits went into in the shown period. Without colors the parts get shades of the accent, then grays; each label keeps its shade */
  "used": { label: string; value: number; color?: string }[];
  /** Thin meters below, e.g. seats and storage. Leave total out (or null) for unlimited – shown as "of ∞" on a striped track */
  "limits"?: {label: string;used: number; total?: number | null;unit?: string;decimals?: number}[];
  /** Options of the period switch; no switch when left out */
  "periods"?: { id: string; label: string }[];
  /** Controlled period id – pass the matching used, limits and daily with it */
  "period"?: string;
  /** Starting period when uncontrolled; defaults to the first option */
  "defaultPeriod"?: string;
  /** Called when a period is picked */
  "onPeriodChange"?: (id: string) => void;
  /** When the credits reset – shown as "Resets in 9 days", the date on hover */
  "resetAt"?: Date | string | number;
  /** Usage per day for the sparkline; null for days still to come, shown as flat stubs */
  "daily"?: { label: string; value: number | null }[];
  /** Called by the button with the current state */
  "onUpgrade"?: (state: "ok" | "warn" | "limit") => void;
  /** Card title, e.g. the workspace or product name */
  "title"?: string;
  /** Plan name in front of the reset date */
  "plan"?: string;
  /** Unit of the main meter */
  "unit"?: string;
  /** Share (0–1) from which the meter and the limits warn */
  "warnAt"?: number;
  /** Button text while there is room left (a quiet button) */
  "upgradeLabel"?: string;
  /** Button text near and at the limit (a solid button) */
  "topUpLabel"?: string;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const UsageMeter: React.FC<UsageMeterProps | (Partial<UsageMeterProps> & { demo: true })>;
export declare const UsageMeterRaw: React.FC<UsageMeterProps>;
export declare const UsageMeterDemo: React.FC<Partial<UsageMeterProps>>;
export default UsageMeter;
