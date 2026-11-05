import * as React from "react";
export type FilterOption = { id: string; label: string };

export type FilterGroup = {
  id: string;
  label: string;
  options: FilterOption[];
  /** Put in front of the option on its chip, e.g. "Score: " → "Score: 80–90" */
  chipPrefix?: string;
};

export type FilterValue = Record<string, string[]>;

export type FilterMenuProps = {
  demo?: boolean;
  style?: React.CSSProperties;
  ref?: React.Ref<HTMLElement>;
  groups: FilterGroup[];
  /** Controlled value */
  value?: FilterValue;
  /** Starting value when uncontrolled */
  defaultValue?: FilterValue;
  onChange?: (value: FilterValue) => void;
  /** Groups that start open – by default the first one */
  defaultOpen?: string[];
  title?: string;
  /** Show the keyboard hints at the bottom */
  hints?: boolean;
  className?: string;
};

export type Row = { kind: "group"; group: FilterGroup; gi: number } | { kind: "option"; group: FilterGroup; option: FilterOption; gi: number; oi: number };
/**
 * Filter Menu — Grouped filters with removable chips, collapsible checkbox groups, Clear all and full keyboard control
 */
export declare const FilterMenu: React.FC<FilterMenuProps | (Partial<FilterMenuProps> & { demo: true })>;
export declare const FilterMenuRaw: React.FC<FilterMenuProps>;
export declare const FilterMenuDemo: React.FC<Partial<FilterMenuProps>>;

export default FilterMenu;
