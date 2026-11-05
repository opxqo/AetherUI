import * as React from "react";

export interface ThinkingLoaderProps {
  /** Labels to walk through, one after another (default: ["Thinking", "Searching the web", "Reading sources", "Writing response"]) */
  phases?: string[];
  /** Time per phase in ms when the phase isn't controlled (default: 2200) */
  interval?: number;
  /** Controlled index into phases – the timer stops and the loader shows this phase */
  phase?: number;
  /** Start over after the last phase instead of holding it (default: false) */
  loop?: boolean;
  /** Turns the spinner into a check and the label into doneLabel; setting it back to false starts over (default: false) */
  done?: boolean;
  /** Label once done – a function gets the seconds since the loader started (default: (s) => `Thought for ${s}s`) */
  doneLabel?: string | (((seconds: number) => string));
  /** 28 or 34px tall (default: "md") */
  size?: "sm" | "md";
  /** A bordered capsule, or just the spinner and the label (default: "pill") */
  variant?: "pill" | "plain";
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Thinking Loader — A small working pill for AI replies – an eight-ray spinner and a shimmering label that rolls through phases and settles on a check
 */
export declare const ThinkingLoader: React.FC<ThinkingLoaderProps>;
export declare const ThinkingLoaderRaw: React.FC<ThinkingLoaderProps>;
export declare const ThinkingLoaderDemo: React.FC<ThinkingLoaderProps>;

export default ThinkingLoader;
