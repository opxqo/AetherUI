import * as React from "react";
export interface CatalogRegion {
  id: string;
  /** Heading of the group, e.g. "United States" */
  name: string;
  /** Quiet line after the heading */
  note?: string;
  /** Mark before the heading, e.g. a flag – drawn 18×12.6 */
  icon?: React.ReactNode;
}
export interface CatalogModel {
  id: string;
  name: string;
  /** Small badge after the name, e.g. "Chat", "Image", "Video" */
  tag?: string;
  /** Line under the name */
  description?: string;
}
export interface CatalogProvider {
  id: string;
  name: string;
  /** Id of the region it is listed under */
  region: string;
  /** Logo in the white tile – 15px */
  logo?: React.ReactNode;
  /** Muted text after the name */
  note?: string;
  models: CatalogModel[];
}
export interface ModelCatalogLabels {
  /** Placeholder and name of the search field */
  search?: string;
  /** Name of the clear-search button */
  clear?: string;
  /** Badge on a provider card, e.g. (2, 5) → "2/5 on" */
  count?: (on: number, total: number) => string;
  /** Shown when the search finds nothing */
  noMatch?: (query: string) => string;
  /** Shown when there are no providers at all */
  empty?: string;
}
export interface ModelCatalogProps extends Omit<React.HTMLAttributes<HTMLElement>, "regions" | "providers" | "enabled" | "defaultEnabled" | "onEnabledChange" | "onToggle" | "defaultExpanded" | "searchable" | "labels" | "demo" | "className" | "style" | "children" | "ref"> {
  /** Groups in display order – only regions with providers are shown */
  regions?: CatalogRegion[];
  /** Providers with their models, each in one region */
  providers?: CatalogProvider[];
  /** Ids of the models that are on (controlled) */
  enabled?: string[];
  /** Models that start on when uncontrolled */
  defaultEnabled?: string[];
  /** Called with every model id that is on after a switch changes */
  onEnabledChange?: (enabled: string[]) => void;
  /** Called for the one model that changed */
  onToggle?: (id: string, on: boolean, detail: { model: CatalogModel; provider: CatalogProvider }) => void;
  /** Provider ids that start open – the first provider when left out; a search opens every match */
  defaultExpanded?: string[];
  /** Search field on top (default true) */
  searchable?: boolean;
  /** Every word the catalog shows, for other languages */
  labels?: ModelCatalogLabels;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  ref?: React.Ref<HTMLElement>;
}
/**
 * Model Catalog — Every model a workspace can turn on, by region and provider: folding provider cards with an on count, a switch per model and search
 */
export declare const ModelCatalog: React.FC<ModelCatalogProps | (Partial<ModelCatalogProps> & { demo: true })>;
export declare const ModelCatalogRaw: React.FC<ModelCatalogProps>;
export declare const ModelCatalogDemo: React.FC<Partial<ModelCatalogProps>>;
export default ModelCatalog;
