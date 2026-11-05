import * as React from "react";

export interface WorldMapProps {
  /** Highlighted continent (controlled). Pair it with onContinentChange to keep the menu working */
  continent?: any;
  /** Continent highlighted first when continent is not set (default: "europe") */
  defaultContinent?: any;
  /** Called when the viewer picks a continent in the menu */
  onContinentChange?: any;
  /** Show the continent menu in the top-left corner (default: true) */
  showSwitcher?: any;
  /** Accessible description of the map; by default it follows the current continent (default: "World map with Europe highlighted" …) */
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
 * World Map Continental — World map with one highlighted continent and a pastel band along its coastline, switchable between all six
 */
export declare const WorldMap: React.FC<WorldMapProps>;
export declare const WorldMapRaw: React.FC<WorldMapProps>;
export declare const WorldMapDemo: React.FC<WorldMapProps>;

export default WorldMap;
