import * as React from "react";
export type IntegrationGridLogo = {
  /** Name for the accessible description */
  name: string;
  /** A single SVG path on a 24 × 24 viewBox (e.g. from simple-icons) */
  path: string;
  /** Fill color – leave it out for black marks that should follow the ink color (and turn light in dark mode) */
  color?: string;
  /** Optional fill color in dark mode, for brand colors that are too dark on a dark tile */
  darkColor?: string;
};

export type IntegrationGridProps = {
  demo?: boolean;
  style?: React.CSSProperties;
  ref?: React.Ref<HTMLElement>;
  /** Up to 22 logos, filled row by row around the centre tile – defaults to a set of well-known tools */
  logos?: IntegrationGridLogo[];
  /** Content of the centre tile – defaults to a neutral product mark */
  mark?: React.ReactNode;
  /** Tiles in the middle row – 9 by default; the rows above and below get two fewer. Use 7 or 5 for a tighter grid */
  columns?: 5 | 7 | 9;
  className?: string;
  /** Accessible description of the scene */
  label?: string;
};

export type Slot = { x: number; y: number; center: boolean; d: number };
/**
 * Integration Grid — Honeycomb-like wall of integration logos around a bright centre tile with your product mark, fading out toward the edges
 */
export declare const IntegrationGrid: React.FC<IntegrationGridProps | (Partial<IntegrationGridProps> & { demo: true })>;
export declare const IntegrationGridRaw: React.FC<IntegrationGridProps>;
export declare const IntegrationGridDemo: React.FC<Partial<IntegrationGridProps>>;

export default IntegrationGrid;
