import * as React from "react";
export type MarqueeLogo = {
  /** Brand name – the accessible name, and the visible label when `labels` is on */
  name: string;
  /** The mark, ideally an <svg> with fill="currentColor" so it follows the muted colour */
  svg?: React.ReactNode;
  /** An image instead of `svg` (shown grayscale until hovered when `grayscale` is on) */
  src?: string;
  /** Brand colour the mark lifts to on hover, e.g. "#635BFF" – leave out for black marks like Vercel or GitHub */
  color?: string;
  /** Optical size correction, e.g. 0.9 for a heavy round mark – 1 by default */
  scale?: number;
  /** Turns the logo into a link */
  href?: string;
};

export type LogoMarqueeProps = {
  demo?: boolean;
  style?: React.CSSProperties;
  ref?: React.Ref<HTMLElement>;
  logos: MarqueeLogo[];
  /** Pixels per second, independent of the strip's width */
  speed?: number;
  /** Which way the first row runs; a second row runs the other way */
  direction?: "left" | "right";
  /** 1, or 2 for a second row in the opposite direction (the logos are split between the rows) */
  rows?: 1 | 2;
  /** Space between logos in px (smaller on narrow containers) */
  gap?: number;
  /** Ease to a stop while the pointer is over the strip or it has keyboard focus */
  pauseOnHover?: boolean;
  /** Muted, colourless logos that lift to full colour on hover */
  grayscale?: boolean;
  /** Show the brand name under each mark or beside it, like a wordmark */
  labels?: "none" | "below" | "beside";
  /** Accessible name of the strip */
  label?: string;
  className?: string;
};

export type Row = {
  logos: MarqueeLogo[];
  /** Run direction: 1 = content moves left, -1 = right */
  dir: 1 | -1;
};

export type RowState = {
  x: number;
  v: number;
  /** Width of one set, including its trailing gap – the wrap distance */
  w: number;
  drag: null | { id: number; lastX: number; lastT: number; moved: number; captured: boolean };
  /** Pending nudge (px) to bring a focused logo into view */
  seek: number;
};
/**
 * Logo Marquee — The endless “Trusted by” strip – a seamless loop that eases to a stop on hover, scrubs with inertia and lifts the hovered logo to colour
 */
export declare const LogoMarquee: React.FC<LogoMarqueeProps | (Partial<LogoMarqueeProps> & { demo: true })>;
export declare const LogoMarqueeRaw: React.FC<LogoMarqueeProps>;
export declare const LogoMarqueeDemo: React.FC<Partial<LogoMarqueeProps>>;

export default LogoMarquee;
