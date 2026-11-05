import * as React from "react";

export interface EmptyCalendarProps {
  /** Accessible description of the illustration (default: "Stacked calendar cards marked empty…") */
  label?: any;
  /** Extra class on the root, e.g. for width or margins */
  className?: any;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Empty Calendar — Stack of calendar cards marked empty, fanning out on hover
 */
export declare const EmptyCalendar: React.FC<EmptyCalendarProps>;
export declare const EmptyCalendarRaw: React.FC<EmptyCalendarProps>;
export declare const EmptyCalendarDemo: React.FC<EmptyCalendarProps>;

export default EmptyCalendar;
