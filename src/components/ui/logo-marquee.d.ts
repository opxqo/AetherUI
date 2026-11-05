import * as React from "react";

export interface LogoMarqueeProps {
  /** The logos. svg is a ReactNode – use fill="currentColor" so it follows the muted colour; src takes an image instead. color is the brand colour it lifts to on hover, scale corrects optical size, href makes it a link */
  logos?: any;
  /** Pixels per second – the same pace on any width (default: 40) */
  speed?: any;
  /** Which way the first row runs (default: "left") */
  direction?: any;
  /** Two rows split the logos alternately and run in opposite directions (default: 1) */
  rows?: any;
  /** Space between logos in px; about 60 % of it on narrow containers (default: 56) */
  gap?: any;
  /** Ease to a stop while hovered or focused with the keyboard, and speed back up on leave (default: true) */
  pauseOnHover?: any;
  /** Muted, colourless logos; the hovered one lifts to its brand colour. Off shows full colour and dims the others on hover (default: true) */
  grayscale?: any;
  /** Show the brand name as a small caption under the mark, or beside it like a wordmark (default: "none") */
  labels?: any;
  /** Accessible name of the strip (default: "Logos of companies using the product") */
  label?: any;
  /** Extra class on the wrapper */
  className?: any;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Logo Marquee — The endless “Trusted by” strip – a seamless loop that eases to a stop on hover, scrubs with inertia and lifts the hovered logo to colour
 */
export declare const LogoMarquee: React.FC<LogoMarqueeProps>;
export declare const LogoMarqueeRaw: React.FC<LogoMarqueeProps>;
export declare const LogoMarqueeDemo: React.FC<LogoMarqueeProps>;

export default LogoMarquee;
