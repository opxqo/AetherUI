import * as React from "react";

export interface KanbanScreenProps {
  /** Called with the label of a sidebar item */
  onNavigate?: any;
  /** Workspace name in the sidebar (default: "Acme") */
  workspace?: any;
  /** Account at the bottom of the sidebar (default: { name: "Alex Morgan" }) */
  user?: any;
  /** Extra class on the root */
  className?: any;
  /** The columns, left to right – tone picks the priority mark */
  columns?: any;
  /** The issues – `column` puts each one into a column; every card shows title, detail, status and counts */
  cards?: any;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Kanban Board — Issues on a board by priority – drag cards between columns, switch to a list, filter and sort
 */
export declare const KanbanScreen: React.FC<KanbanScreenProps>;
export declare const KanbanScreenRaw: React.FC<KanbanScreenProps>;
export declare const KanbanScreenDemo: React.FC<KanbanScreenProps>;
export declare const Kanban: React.FC<KanbanScreenProps>;
export default KanbanScreen;
