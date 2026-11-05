import * as React from "react";

export type Region = Record<string, any>;

export interface RegionDachProps {
  /** Shown region (controlled). Pair it with onRegionChange to keep the menu working */
  region?: "dach" | "us" | "cn" | "in" | "br" | "jp";
  /** Region shown first when region is not set (default: "dach") */
  defaultRegion?: Region;
  /** Called when the viewer picks a region in the menu */
  onRegionChange?: (region: Region) => void;
  /** Show the region menu in the top-left corner (default: true) */
  showSwitcher?: boolean;
  /** Accessible description of the map; by default it follows the current region (default: "Map of the DACH region: Germany, Austria and Switzerland" / "Map of Japan" …) */
  label?: string | (((region: Region) => string));
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
