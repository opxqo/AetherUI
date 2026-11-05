import * as React from "react";

export interface IntegrationGridProps {
  /** Logos filled row by row around the centre – each { name, path, color?, darkColor? } with a single 24 × 24 SVG path (e.g. from simple-icons); without color the mark follows the ink color (default: 22 well-known tools) */
  logos?: any;
  /** Content of the larger centre tile – usually your product logo (default: a neutral flower mark) */
  mark?: any;
  /** Tiles in the middle row – the rows above and below get two fewer. Fewer columns make the tiles larger (default: 9) */
  columns?: any;
  /** Accessible description – by default lists the integrations */
  label?: any;
  /** Extra class on the root, e.g. for width or margins */
  className?: any;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Integration Grid — Honeycomb-like wall of integration logos around a bright centre tile with your product mark, fading out toward the edges
 */
export declare const IntegrationGrid: React.FC<IntegrationGridProps>;
export declare const IntegrationGridRaw: React.FC<IntegrationGridProps>;
export declare const IntegrationGridDemo: React.FC<IntegrationGridProps>;

export default IntegrationGrid;
