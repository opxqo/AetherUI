import * as React from "react";
export type Testimonial = {
  /** The quote itself – mix short and long ones, the masonry looks more natural */
  quote: string;
  name: string;
  /** e.g. "Design Engineer" */
  role?: string;
  /** e.g. "Fieldnote" – shown after the role */
  company?: string;
  /** Photo URL; without one the initials sit on a soft gray circle */
  avatar?: string;
  /** 1–5 – a small, calm gray star row above the quote */
  rating?: number;
  /** A small gray check beside the name */
  verified?: boolean;
};

export type TestimonialWallProps = {
  demo?: boolean;
  style?: React.CSSProperties;
  ref?: React.Ref<HTMLElement>;
  items: Testimonial[];
  /** Most columns on a wide container – narrower containers use fewer (2 below 740px, 1 below 480px) */
  columns?: 1 | 2 | 3;
  /** Pixels per second of the first column; the others run a little slower and faster */
  speed?: number;
  /** Ease a column to a stop while the pointer is over it or a card in it has keyboard focus */
  pauseOnHover?: boolean;
  /** Accessible name of the wall */
  label?: string;
  /** Extra class on the wrapper – set the height with --ui-tw-height (600px by default) */
  className?: string;
};

export type ColState = {
  /** Offset into the loop in px – the real set starts at -x */
  y: number;
  v: number;
  /** Height of one set, including its trailing gap – the wrap distance */
  h: number;
  drag: null | { id: number; lastY: number; lastT: number; moved: number; captured: boolean };
  /** Pending nudge (px) to bring a focused card into view */
  seek: number;
};
/**
 * Testimonial Wall — The landing-page wall of quotes – columns that scroll endlessly in opposite directions, ease to a stop on hover and scrub with inertia
 */
export declare const TestimonialWall: React.FC<TestimonialWallProps | (Partial<TestimonialWallProps> & { demo: true })>;
export declare const TestimonialWallRaw: React.FC<TestimonialWallProps>;
export declare const TestimonialWallDemo: React.FC<Partial<TestimonialWallProps>>;

export default TestimonialWall;
