import * as React from "react";

export interface FilterMenuProps {
  /** Required. Each { id, label, options: { id, label }[], chipPrefix? } */
  groups?: any;
  /** Picked option ids per group – makes it controlled */
  value?: any;
  /** Starting filters when uncontrolled (default: {}) */
  defaultValue?: any;
  /** Called with the new filters after every change */
  onChange?: any;
  /** Groups that start open (default: the first group) */
  defaultOpen?: any;
  /** Heading on top (default: "Filters") */
  title?: any;
  /** Shows the keyboard hints on the tray (default: true) */
  hints?: any;
  /** Extra class on the root */
  className?: any;
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
