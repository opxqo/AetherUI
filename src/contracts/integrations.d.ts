import * as React from "react";
export interface IntegrationsScreenProps extends Omit<React.HTMLAttributes<HTMLElement>, "onNavigate" | "workspace" | "user" | "demo" | "className" | "style" | "children" | "ref"> {
  /** Called with the label of a sidebar item or project */
  "onNavigate"?: (label: string) => void;
  /** Workspace name in the sidebar */
  "workspace"?: string;
  /** Account at the bottom of the sidebar */
  "user"?: { name: string; avatar?: string };
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const IntegrationsScreen: React.FC<IntegrationsScreenProps | (Partial<IntegrationsScreenProps> & { demo: true })>;
export declare const IntegrationsScreenRaw: React.FC<IntegrationsScreenProps>;
export declare const IntegrationsScreenDemo: React.FC<Partial<IntegrationsScreenProps>>;
export declare const Integrations: React.FC<IntegrationsScreenProps | (Partial<IntegrationsScreenProps> & { demo: true })>;
export default IntegrationsScreen;
