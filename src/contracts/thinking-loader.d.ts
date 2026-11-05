import * as React from "react";
export type ThinkingLoaderProps = {
  demo?: boolean;
  style?: React.CSSProperties;
  ref?: React.Ref<HTMLElement>;
  /** Labels to walk through, one after another */
  phases?: string[];
  /** Time per phase, in ms */
  interval?: number;
  /** Show a specific phase instead of advancing on a timer – e.g. from your stream events */
  phase?: number;
  /** Start over after the last phase instead of holding it */
  loop?: boolean;
  /** Finished: the spinner turns into a check and the label into doneLabel */
  done?: boolean;
  /** Label once done – a string, or a function that gets the seconds since the loader started */
  doneLabel?: string | ((seconds: number) => string);
  size?: "sm" | "md";
  /** "pill" = bordered capsule, "plain" = just the spinner and the label, e.g. inside a chat bubble */
  variant?: "pill" | "plain";
  className?: string;
};
/**
 * Thinking Loader — A small working pill for AI replies – an eight-ray spinner and a shimmering label that rolls through phases and settles on a check
 */
export declare const ThinkingLoader: React.FC<ThinkingLoaderProps | (Partial<ThinkingLoaderProps> & { demo: true })>;
export declare const ThinkingLoaderRaw: React.FC<ThinkingLoaderProps>;
export declare const ThinkingLoaderDemo: React.FC<Partial<ThinkingLoaderProps>>;

export default ThinkingLoader;
