import * as React from "react";

export interface TestimonialWallProps {
  /** The quotes. avatar is a photo URL – without one, or when it fails to load, the initials sit on a soft gray circle. rating (1–5) adds a small gray star row, verified a gray check beside the name. Quotes keep their line breaks and stop at ten lines; role and company wrap once, then end in an ellipsis. Fewer quotes than columns use fewer columns; none shows a short empty note */
  items?: any;
  /** Most columns on a wide container; the wall itself drops to 2 below 740px and 1 below 480px of its own width (default: 3) */
  columns?: any;
  /** Pixels per second of the first column; the others run about 15 % slower and faster, in alternating directions (default: 28) */
  speed?: any;
  /** Ease the hovered column to a stop and wind it back up on leave. Keyboard focus always stops its column (default: true) */
  pauseOnHover?: any;
  /** Accessible name of the wall (default: "What customers say") */
  label?: any;
  /** Extra class on the wrapper. Set the height with --ui-tw-height (600px by default) and the edge fade with --ui-tw-fade (96px) */
  className?: any;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Testimonial Wall — The landing-page wall of quotes – columns that scroll endlessly in opposite directions, ease to a stop on hover and scrub with inertia
 */
export declare const TestimonialWall: React.FC<TestimonialWallProps>;
export declare const TestimonialWallRaw: React.FC<TestimonialWallProps>;
export declare const TestimonialWallDemo: React.FC<TestimonialWallProps>;

export default TestimonialWall;
