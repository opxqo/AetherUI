import * as React from "react";
export interface KanbanScreenProps extends Omit<React.HTMLAttributes<HTMLElement>, "onNavigate" | "workspace" | "user" | "columns" | "cards" | "demo" | "className" | "style" | "children" | "ref"> {
  /** Called with the label of a sidebar item */
  "onNavigate"?: (label: string) => void;
  /** Workspace name in the sidebar */
  "workspace"?: string;
  /** Account at the bottom of the sidebar */
  "user"?: { name: string; avatar?: string };
  /** The columns, left to right – tone picks the priority mark */
  "columns"?: {id: string;label: string; tone: "low" | "medium" | "high" | "done" }[];
  /** The issues – `column` puts each one into a column; every card shows title, detail, status and counts */
  "cards"?: {id: string;column: string;title: string;description?: string; status?: "review" | "attention" | "progress" | "fixed";comments?: number;attachments?: number}[];
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const KanbanScreen: React.FC<KanbanScreenProps | (Partial<KanbanScreenProps> & { demo: true })>;
export declare const KanbanScreenRaw: React.FC<KanbanScreenProps>;
export declare const KanbanScreenDemo: React.FC<Partial<KanbanScreenProps>>;
export declare const Kanban: React.FC<KanbanScreenProps | (Partial<KanbanScreenProps> & { demo: true })>;
export default KanbanScreen;
