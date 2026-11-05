import * as React from "react";
export type EmptyCalendarProps = {
  demo?: boolean;
  style?: React.CSSProperties;
  ref?: React.Ref<HTMLElement>;
  className?: string;
  /** Accessible description of the scene */
  label?: string;
};
/**
 * Empty Calendar — Stack of calendar cards marked empty, fanning out on hover
 */
export declare const EmptyCalendar: React.FC<EmptyCalendarProps | (Partial<EmptyCalendarProps> & { demo: true })>;
export declare const EmptyCalendarRaw: React.FC<EmptyCalendarProps>;
export declare const EmptyCalendarDemo: React.FC<Partial<EmptyCalendarProps>>;

export default EmptyCalendar;
