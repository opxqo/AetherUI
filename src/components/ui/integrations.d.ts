import * as React from "react";

export interface IntegrationsScreenProps {
  /** Called with the label of a sidebar item or project */
  onNavigate?: (label: string) => void;
  /** Workspace name in the sidebar (default: "Acme") */
  workspace?: string;
  /** Account at the bottom of the sidebar (default: { name: "Alex Morgan" }) */
  user?: { name: string; avatar?: string };
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Integrations — App directory with a sticky header, categories, search and connect states
 */
export declare const IntegrationsScreen: React.FC<IntegrationsScreenProps>;
export declare const IntegrationsScreenRaw: React.FC<IntegrationsScreenProps>;
export declare const IntegrationsScreenDemo: React.FC<IntegrationsScreenProps>;
export declare const Integrations: React.FC<IntegrationsScreenProps>;
export default IntegrationsScreen;
