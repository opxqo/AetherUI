import * as React from "react";

export interface SkeletonProps {
  /** Width – numbers are px, strings any CSS length (default: "100%") */
  "Skeleton · width"?: any;
  /** Height – numbers are px (default: 12) */
  "Skeleton · height"?: any;
  /** Corner radius (default: 6) */
  "Skeleton · radius"?: any;
  /** Round shape that uses width for both sides, e.g. for avatars (default: false) */
  "Skeleton · circle"?: any;
  /** Extra class or inline styles on the block */
  "Skeleton · className / style"?: any;
  /** The label the highlight runs through */
  "ShimmerText · children"?: any;
  /** Seconds for one pass of the highlight (default: 2) */
  "ShimmerText · duration"?: any;
  /** Extra class – font size and weight are inherited */
  "ShimmerText · className"?: any;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Shimmer Loader — Skeleton blocks that share one soft light sweep, plus shimmering text for “Thinking…” states
 */
export declare const Skeleton: React.FC<SkeletonProps>;
export declare const SkeletonRaw: React.FC<SkeletonProps>;
export declare const SkeletonDemo: React.FC<SkeletonProps>;
export declare const ShimmerText: React.FC<SkeletonProps>;
export declare const ShimmerLoader: React.FC<SkeletonProps>;
export default Skeleton;
