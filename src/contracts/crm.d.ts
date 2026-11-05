import * as React from "react";
export interface CrmScreenProps extends Omit<React.HTMLAttributes<HTMLElement>, "onNavigate" | "workspace" | "user" | "companies" | "demo" | "className" | "style" | "children" | "ref"> {
  /** Called with the label of a sidebar item */
  "onNavigate"?: (label: string) => void;
  /** Workspace name in the sidebar */
  "workspace"?: string;
  /** Account at the bottom of the sidebar */
  "user"?: { name: string; avatar?: string };
  /** Companies behind all four tables (Company CRM, Deals, Contacts, Renewals) – the id picks the logo, otherwise the first letter shows */
  "companies"?: {id: string;name: string;category: string;domain: string;owner: string; value: number;stage: string;contact: string}[];
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const CrmScreen: React.FC<CrmScreenProps | (Partial<CrmScreenProps> & { demo: true })>;
export declare const CrmScreenRaw: React.FC<CrmScreenProps>;
export declare const CrmScreenDemo: React.FC<Partial<CrmScreenProps>>;
export declare const Crm: React.FC<CrmScreenProps | (Partial<CrmScreenProps> & { demo: true })>;
export default CrmScreen;
