import * as React from "react";

export interface CrmScreenProps {
  /** Called with the label of a sidebar item */
  onNavigate?: (label: string) => void;
  /** Workspace name in the sidebar (default: "Acme") */
  workspace?: string;
  /** Account at the bottom of the sidebar (default: { name: "Alex Morgan" }) */
  user?: { name: string; avatar?: string };
  /** Companies behind all four tables (Company CRM, Deals, Contacts, Renewals) – the id picks the logo, otherwise the first letter shows */
  companies?: { id; name; category; domain; owner; value: number; stage; contact }[];
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * CRM — Company list with pipelines, open views as tabs and an editable data table
 */
export declare const CrmScreen: React.FC<CrmScreenProps>;
export declare const CrmScreenRaw: React.FC<CrmScreenProps>;
export declare const CrmScreenDemo: React.FC<CrmScreenProps>;
export declare const Crm: React.FC<CrmScreenProps>;
export default CrmScreen;
