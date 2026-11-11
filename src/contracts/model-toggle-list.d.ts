import * as React from "react";
export interface ModelToggleRow {
  id: string;
  name: string;
  /** Tooltip of the name – the id when left out */
  title?: string;
  /** Value of the category tab it is listed under */
  category: string;
  /** Vendor heading it is grouped under */
  group?: string;
  /** Icon before the name, 18px */
  icon?: React.ReactNode;
  /** Trailing text, e.g. a price */
  meta?: React.ReactNode;
  /** Small neutral note, e.g. "Unavailable" */
  note?: { text: string; hint?: string };
  /** Shows the Default badge */
  isDefault?: boolean;
  /** Replaces the Default / Set default slot */
  action?: { label: React.ReactNode; onClick: () => void };
  /** Makes the name a button */
  onOpen?: () => void;
  enabled: boolean;
  /** Cannot be switched */
  locked?: boolean;
}
export interface ModelToggleListLabels {
  title?: string;
  summary?: (on: number, total: number) => string;
  search?: string;
  enableAll?: string;
  disableAll?: string;
  default?: string;
  setDefault?: string;
  /** Prefix of each switch's accessible name */
  enable?: string;
  noMatch?: string;
  empty?: string;
}
export interface ModelToggleListProps extends Omit<React.HTMLAttributes<HTMLElement>, "rows" | "categories" | "category" | "defaultCategory" | "onCategoryChange" | "onToggle" | "onSetDefault" | "labels" | "demo" | "className" | "style" | "children" | "ref"> {
  rows?: ModelToggleRow[];
  /** Tabs, each with an on / total count – no tabs with only one */
  categories?: { value: string; label: string }[];
  /** Open tab (controlled) */
  category?: string;
  defaultCategory?: string;
  onCategoryChange?: (value: string) => void;
  /** Called with the ids that change and the new state – one row, or every visible switchable row for the bulk buttons */
  onToggle?: (ids: string[], on: boolean) => void;
  /** Shows "Set default" on rows that are on and not the default */
  onSetDefault?: (id: string) => void;
  /** Every word it shows, for other languages */
  labels?: ModelToggleListLabels;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  ref?: React.Ref<HTMLElement>;
}
/**
 * Model Toggle List — One service's models: category tabs with counts, search, enable or disable all, vendor groups, price, default and a switch per row
 */
export declare const ModelToggleList: React.FC<ModelToggleListProps | (Partial<ModelToggleListProps> & { demo: true })>;
export declare const ModelToggleListRaw: React.FC<ModelToggleListProps>;
export declare const ModelToggleListDemo: React.FC<Partial<ModelToggleListProps>>;
export default ModelToggleList;
