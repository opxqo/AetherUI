import type { FallbackAttempt, ChainEnd } from "./shared.js";
export type { FallbackAttempt, ChainEnd } from "./shared.js";
import * as React from "react";
export interface FallbackChainProps extends Omit<React.HTMLAttributes<HTMLElement>, "attempts" | "title" | "route" | "request" | "response" | "now" | "onRetry" | "demo" | "className" | "style" | "children" | "ref"> {
  /** The models in the order they're tried, each with its status: waiting, trying, failed, answered or skipped */
  "attempts"?: FallbackAttempt[];
  /** What was asked, above the diagram next to the attempt and the running time and cost */
  "title"?: string;
  /** The route on the request node, e.g. "openrouter/auto" */
  "route"?: string;
  /** Where the request came from – { name, logo, text, details } for its hover card: the source, a preview of the prompt and extra lines */
  "request"?: ChainEnd;
  /** Where the answer goes – { name, logo, text, details } for its hover card; the preview shows once a model answered */
  "response"?: ChainEnd;
  /** A clock you control for the live timer – without it it follows real time */
  "now"?: number;
  /** Shows a Retry button once every model failed */
  "onRetry"?: () => void;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const FallbackChain: React.FC<FallbackChainProps | (Partial<FallbackChainProps> & { demo: true })>;
export declare const FallbackChainRaw: React.FC<FallbackChainProps>;
export declare const FallbackChainDemo: React.FC<Partial<FallbackChainProps>>;
export default FallbackChain;
