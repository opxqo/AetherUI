import * as React from "react";
export type NumberTickerProps = {
  demo?: boolean;
  style?: React.CSSProperties;
  ref?: React.Ref<HTMLElement>;
  /** The number to show */
  value: number;
  /** Intl.NumberFormat options, e.g. { style: "currency", currency: "USD" } */
  format?: Intl.NumberFormatOptions;
  /** Locale for formatting, e.g. "en-US" – defaults to the browser's */
  locale?: string;
  /** Length of a roll in ms */
  duration?: number;
  /** Wait before the first count-in, in ms */
  delay?: number;
  className?: string;
};

export type Part = { key: string; digit: number } | { key: string; char: string };

export type Roll = { pos: number; from: number; to: number };
/**
 * Number Ticker — Odometer-style numbers – every digit rolls to its new value and counts in from zero when it scrolls into view
 */
export declare const NumberTicker: React.FC<NumberTickerProps | (Partial<NumberTickerProps> & { demo: true })>;
export declare const NumberTickerRaw: React.FC<NumberTickerProps>;
export declare const NumberTickerDemo: React.FC<Partial<NumberTickerProps>>;

export default NumberTicker;
