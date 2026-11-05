import * as React from "react";
export type Region = "dach" | "us" | "cn" | "in" | "br" | "jp";

export type RegionDachProps = {
  demo?: boolean;
  style?: React.CSSProperties;
  ref?: React.Ref<HTMLElement>;
  /** Shown region (controlled) */
  region?: Region;
  /** Region shown first when `region` is not set */
  defaultRegion?: Region;
  /** Called when the viewer picks a region in the menu */
  onRegionChange?: (region: Region) => void;
  /** Show the region menu in the top-left corner */
  showSwitcher?: boolean;
  className?: string;
  /** Accessible description of the map; a function receives the current region */
  label?: string | ((region: Region) => string);
};

export type Phase = "idle" | "enter" | "exit";

export type MapData = {
  /** Filled countries */
  land: string[];
  /** Neighbouring countries, drawn as fading outlines */
  neighbors: string[];
  /** Outer border, where the band travels */
  perimeter: string;
  /** Centre and radius of the neighbours' fade */
  fade: [number, number, number];
};
/**
 * DACH Region — DACH map with fading neighbours and a pastel band along the border, switchable to the US, China, India, Brazil or Japan
 */
export declare const RegionDach: React.FC<RegionDachProps | (Partial<RegionDachProps> & { demo: true })>;
export declare const RegionDachRaw: React.FC<RegionDachProps>;
export declare const RegionDachDemo: React.FC<Partial<RegionDachProps>>;
export declare const RegionDACH: React.FC<RegionDachProps | (Partial<RegionDachProps> & { demo: true })>;
export default RegionDach;
