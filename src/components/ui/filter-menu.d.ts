import * as React from "react";

export type FilterGroup = Record<string, any>;

export interface FilterMenuProps {
  /** Required. Each { id, label, options: { id, label }[], chipPrefix? } */
  groups?: FilterGroup[];
  /** Picked option ids per group – makes it controlled */
  value?: Record<string, string[]>;
  /** Starting filters when uncontrolled (default: {}) */
  defaultValue?: Record<string, string[]>;
  /** Called with the new filters after every change */
  onChange?: (value: any) => void;
  /** Groups that start open (default: the first group) */
  defaultOpen?: string[];
  /** Heading on top (default: "Filters") */
  title?: string;
  /** Shows the keyboard hints on the tray (default: true) */
  hints?: boolean;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Filter Menu — Grouped filters with removable chips, collapsible checkbox groups, Clear all and full keyboard control
 */
export declare const FilterMenu: React.FC<FilterMenuProps>;
export declare const FilterMenuRaw: React.FC<FilterMenuProps>;
export declare const FilterMenuDemo: React.FC<FilterMenuProps>;

export default FilterMenu;
