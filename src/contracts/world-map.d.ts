import type { Continent } from "./shared.js";
export type { Continent } from "./shared.js";
import * as React from "react";
export interface WorldMapProps extends Omit<React.HTMLAttributes<HTMLElement>, "continent" | "defaultContinent" | "onContinentChange" | "showSwitcher" | "label" | "demo" | "className" | "style" | "children" | "ref"> {
  /** Highlighted continent (controlled). Pair it with onContinentChange to keep the menu working */
  "continent"?: "north-america" | "south-america" | "europe" | "africa" | "asia" | "oceania";
  /** Continent highlighted first when continent is not set */
  "defaultContinent"?: Continent;
  /** Called when the viewer picks a continent in the menu */
  "onContinentChange"?: (continent: Continent) => void;
  /** Show the continent menu in the top-left corner */
  "showSwitcher"?: boolean;
  /** Accessible description of the map; by default it follows the current continent */
  "label"?: string | ((continent: Continent) => string);
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const WorldMap: React.FC<WorldMapProps | (Partial<WorldMapProps> & { demo: true })>;
export declare const WorldMapRaw: React.FC<WorldMapProps>;
export declare const WorldMapDemo: React.FC<Partial<WorldMapProps>>;
export default WorldMap;
