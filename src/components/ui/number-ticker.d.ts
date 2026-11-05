import * as React from "react";

export type Intl = Record<string, any>;
export type NumberFormatOptions = Record<string, any>;

export interface NumberTickerProps {
  /** The number to show – change it and the digits roll to the new value */
  value?: number;
  /** Formatting, e.g. currency, percent, compact notation or fraction digits */
  format?: Intl.NumberFormatOptions;
  /** Locale passed to Intl.NumberFormat, e.g. "en-US" or "de-DE" (default: browser locale) */
  locale?: string;
  /** Length of a roll in milliseconds (default: 900) */
  duration?: number;
  /** Wait before the first count-in, in milliseconds (default: 0) */
  delay?: number;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Number Ticker — Odometer-style numbers – every digit rolls to its new value and counts in from zero when it scrolls into view
 */
export declare const NumberTicker: React.FC<NumberTickerProps>;
export declare const NumberTickerRaw: React.FC<NumberTickerProps>;
export declare const NumberTickerDemo: React.FC<NumberTickerProps>;

export default NumberTicker;
