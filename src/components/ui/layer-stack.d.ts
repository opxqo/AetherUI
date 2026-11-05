import * as React from "react";

export type LayerStackItem = Record<string, any>;

export interface LayerStackProps {
  /** Up to five entries, top layer first – { title, hint?, icon? } with icon one of bolt, database, plug, spark, pulse (default: five sample layers) */
  items?: LayerStackItem[];
  /** Entry to start on (default: 0) */
  defaultIndex?: number;
  /** Time per entry while it plays on its own, in ms (default: 2600) */
  interval?: number;
  /** Called when the user picks an entry */
  onChange?: (index: number) => void;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Layer Stack — Isometric stack of five layers with a list beside it – the chosen entry lifts its layer out in color
 */
export declare const LayerStack: React.FC<LayerStackProps>;
export declare const LayerStackRaw: React.FC<LayerStackProps>;
export declare const LayerStackDemo: React.FC<LayerStackProps>;

export default LayerStack;
