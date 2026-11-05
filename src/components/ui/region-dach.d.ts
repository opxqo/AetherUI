import * as React from "react";

export interface RegionDachProps {
  /** Shown region (controlled). Pair it with onRegionChange to keep the menu working */
  region?: any;
  /** Region shown first when region is not set (default: "dach") */
  defaultRegion?: any;
  /** Called when the viewer picks a region in the menu */
  onRegionChange?: any;
  /** Show the region menu in the top-left corner (default: true) */
  showSwitcher?: any;
  /** Accessible description of the map; by default it follows the current region (default: "Map of the DACH region: Germany, Austria and Switzerland" / "Map of Japan" …) */
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
 * DACH Region — DACH map with fading neighbours and a pastel band along the border, switchable to the US, China, India, Brazil or Japan
 */
export declare const RegionDach: React.FC<RegionDachProps>;
export declare const RegionDachRaw: React.FC<RegionDachProps>;
export declare const RegionDachDemo: React.FC<RegionDachProps>;
export declare const RegionDACH: React.FC<RegionDachProps>;
export default RegionDach;
