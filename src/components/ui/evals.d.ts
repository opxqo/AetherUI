import * as React from "react";

export interface EvalsScreenProps {
  /** Called with the label of a sidebar item */
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
 * Evals — Prompt evaluation dashboard: pass rate by version, reviewable prompt changes and test cases you can re-run
 */
export declare const EvalsScreen: React.FC<EvalsScreenProps>;
export declare const EvalsScreenRaw: React.FC<EvalsScreenProps>;
export declare const EvalsScreenDemo: React.FC<EvalsScreenProps>;
export declare const Evals: React.FC<EvalsScreenProps>;
export default EvalsScreen;
