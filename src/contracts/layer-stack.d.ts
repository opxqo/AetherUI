import * as React from "react";
export type LayerStackItem = {
  /** Main line of the entry */
  title: string;
  /** Short muted hint on the right */
  hint?: string;
  /** Icon drawn onto the layer: one of the built-in names */
  icon?: LayerIcon;
};

export type LayerIcon = "bolt" | "database" | "plug" | "spark" | "pulse";

export type LayerStackProps = {
  demo?: boolean;
  style?: React.CSSProperties;
  ref?: React.Ref<HTMLElement>;
  /** Up to five entries, top layer first */
  items?: LayerStackItem[];
  /** Entry to start on */
  defaultIndex?: number;
  /** Time per entry while it plays on its own, in ms */
  interval?: number;
  /** Called when an entry is picked by the user */
  onChange?: (index: number) => void;
  className?: string;
};
/**
 * Layer Stack — Isometric stack of five layers with a list beside it – the chosen entry lifts its layer out in color
 */
export declare const LayerStack: React.FC<LayerStackProps | (Partial<LayerStackProps> & { demo: true })>;
export declare const LayerStackRaw: React.FC<LayerStackProps>;
export declare const LayerStackDemo: React.FC<Partial<LayerStackProps>>;

export default LayerStack;
