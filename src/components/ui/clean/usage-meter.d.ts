import * as React from "react";

export interface UsageMeterProps {
  /** Credits included in the plan – the bar's full width */
  total?: any;
  /** What the credits went into in the shown period. Without colors the parts get shades of the accent, then grays; each label keeps its shade */
  used?: any;
  /** Thin meters below, e.g. seats and storage. Leave total out (or null) for unlimited – shown as "of ∞" on a striped track */
  limits?: any;
  /** Options of the period switch; no switch when left out */
  periods?: any;
  /** Controlled period id – pass the matching used, limits and daily with it */
  period?: any;
  /** Starting period when uncontrolled; defaults to the first option */
  defaultPeriod?: any;
  /** Called when a period is picked */
  onPeriodChange?: any;
  /** When the credits reset – shown as "Resets in 9 days", the date on hover */
  resetAt?: any;
  /** Usage per day for the sparkline; null for days still to come, shown as flat stubs */
  daily?: any;
  /** Called by the button with the current state */
  onUpgrade?: any;
  /** Card title, e.g. the workspace or product name (default: "Usage") */
  title?: any;
  /** Plan name in front of the reset date */
  plan?: any;
  /** Unit of the main meter (default: "credits") */
  unit?: any;
  /** Share (0–1) from which the meter and the limits warn (default: 0.8) */
  warnAt?: any;
  /** Button text while there is room left (a quiet button) (default: "Upgrade") */
  upgradeLabel?: any;
  /** Button text near and at the limit (a solid button) (default: "Add credits") */
  topUpLabel?: any;
  /** Extra class on the root */
  className?: any;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Usage Meter — Plan usage and AI credits – a stacked credits meter by category, daily sparkline, limits and a button that speaks up near the limit
 */
export declare const UsageMeter: React.FC<UsageMeterProps>;
export declare const UsageMeterRaw: React.FC<UsageMeterProps>;
export declare const UsageMeterDemo: React.FC<UsageMeterProps>;

export default UsageMeter;
