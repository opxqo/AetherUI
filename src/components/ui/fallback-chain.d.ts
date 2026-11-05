import * as React from "react";

export interface FallbackChainProps {
  /** The models in the order they're tried, each with its status: waiting, trying, failed, answered or skipped */
  attempts?: any;
  /** What was asked, above the diagram next to the attempt and the running time and cost (default: "Request") */
  title?: any;
  /** The route on the request node, e.g. "openrouter/auto" */
  route?: any;
  /** Where the request came from – { name, logo, text, details } for its hover card: the source, a preview of the prompt and extra lines */
  request?: any;
  /** Where the answer goes – { name, logo, text, details } for its hover card; the preview shows once a model answered */
  response?: any;
  /** A clock you control for the live timer – without it it follows real time */
  now?: any;
  /** Shows a Retry button once every model failed */
  onRetry?: any;
  /** Extra class on the root */
  className?: any;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Fallback Chain — One request finding a model that answers, as a small flow diagram – the request branches out to each model in its fallback order, a light runs to the one being tried, failed branches break red, and the one that answers runs on to the response
 */
export declare const FallbackChain: React.FC<FallbackChainProps>;
export declare const FallbackChainRaw: React.FC<FallbackChainProps>;
export declare const FallbackChainDemo: React.FC<FallbackChainProps>;

export default FallbackChain;
