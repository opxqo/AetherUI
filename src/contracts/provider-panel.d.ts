import * as React from "react";
export interface ProviderPanelItem {
  id: string;
  name: string;
  /** Logo in the 32px white tile – the first letter of the name when left out */
  logo?: React.ReactNode;
  /** Quiet line under the name, e.g. "Synced · 42 models" */
  meta?: React.ReactNode;
  /** Status dot on the right: green ok, amber warn, grey idle */
  tone?: "ok" | "warn" | "idle";
}
export interface ProviderPanelGroup {
  id?: string;
  /** Small heading above the group, e.g. "Providers" */
  label?: string;
  items: ProviderPanelItem[];
}
export interface ProviderPanelProps extends Omit<React.HTMLAttributes<HTMLElement>, "groups" | "selected" | "defaultSelected" | "onSelect" | "action" | "listLabel" | "demo" | "className" | "style" | "children" | "ref"> {
  /** Groups of the list on the left */
  groups?: ProviderPanelGroup[];
  /** Id of the selected item (controlled) */
  selected?: string;
  /** Selected item when uncontrolled – the first item when left out */
  defaultSelected?: string;
  /** Called with the id of the clicked item */
  onSelect?: (id: string) => void;
  /** Row at the end of the list, e.g. { label: "Add endpoint", onClick } */
  action?: { label: React.ReactNode; icon?: React.ReactNode; onClick: () => void };
  /** Accessible name of the list */
  listLabel?: string;
  /** Detail of the selected item, on the right */
  children?: React.ReactNode;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  ref?: React.Ref<HTMLElement>;
}
/**
 * Provider Panel — Master–detail for connected services: logo, name, status line and dot in grouped rows on the left, the selected one's detail on the right
 */
export declare const ProviderPanel: React.FC<ProviderPanelProps | (Partial<ProviderPanelProps> & { demo: true })>;
export declare const ProviderPanelRaw: React.FC<ProviderPanelProps>;
export declare const ProviderPanelDemo: React.FC<Partial<ProviderPanelProps>>;
export default ProviderPanel;
