import * as React from "react";
export type SkeletonProps = {
  demo?: boolean;
  ref?: React.Ref<HTMLElement>;
  /** Width – a number is px, a string unknown CSS length; defaults to 100% */
  width?: number | string;
  /** Height – a number is px, a string unknown CSS length; defaults to 12px */
  height?: number | string;
  /** Corner radius; defaults to 6px */
  radius?: number | string;
  /** Round shape, e.g. for avatars – uses width for both sides */
  circle?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

export type ShimmerTextProps = {
  demo?: boolean;
  style?: React.CSSProperties;
  ref?: React.Ref<HTMLElement>;
  children: React.ReactNode;
  /** Seconds for one pass of the highlight */
  duration?: number;
  className?: string;
};
/**
 * Shimmer Loader — Skeleton blocks that share one soft light sweep, plus shimmering text for “Thinking…” states
 */
export declare const Skeleton: React.FC<SkeletonProps | (Partial<SkeletonProps> & { demo: true })>;
export declare const SkeletonRaw: React.FC<SkeletonProps>;
export declare const SkeletonDemo: React.FC<Partial<SkeletonProps>>;
export declare const ShimmerText: React.FC<SkeletonProps | (Partial<SkeletonProps> & { demo: true })>;
export declare const ShimmerLoader: React.FC<SkeletonProps | (Partial<SkeletonProps> & { demo: true })>;
export default Skeleton;
