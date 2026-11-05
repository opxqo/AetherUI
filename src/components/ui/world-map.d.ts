import * as React from "react";

export type Continent = Record<string, any>;

export interface WorldMapProps {
  /** Highlighted continent (controlled). Pair it with onContinentChange to keep the menu working */
  continent?: "north-america" | "south-america" | "europe" | "africa" | "asia" | "oceania";
  /** Continent highlighted first when continent is not set (default: "europe") */
  defaultContinent?: Continent;
  /** Called when the viewer picks a continent in the menu */
  onContinentChange?: (continent: Continent) => void;
  /** Show the continent menu in the top-left corner (default: true) */
  showSwitcher?: boolean;
  /** Accessible description of the map; by default it follows the current continent (default: "World map with Europe highlighted" …) */
  label?: string | (((continent: Continent) => string));
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
