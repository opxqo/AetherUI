import * as React from "react";

export interface KanbanScreenProps {
  /** Called with the label of a sidebar item */
  onNavigate?: (label: string) => void;
  /** Workspace name in the sidebar (default: "Acme") */
  workspace?: string;
  /** Account at the bottom of the sidebar (default: { name: "Alex Morgan" }) */
  user?: { name: string; avatar?: string };
  /** The columns, left to right – tone picks the priority mark */
  columns?: { id; label; tone: "low" | "medium" | "high" | "done" }[];
  /** The issues – `column` puts each one into a column; every card shows title, detail, status and counts */
  cards?: { id; column; title; description?; status?: "review" | "attention" | "progress" | "fixed"; comments?; attachments? }[];
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
