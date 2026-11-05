import * as React from "react";
export interface EvalsScreenProps extends Omit<React.HTMLAttributes<HTMLElement>, "onNavigate" | "workspace" | "user" | "demo" | "className" | "style" | "children" | "ref"> {
  /** Called with the label of a sidebar item */
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
export declare const EvalsScreen: React.FC<EvalsScreenProps | (Partial<EvalsScreenProps> & { demo: true })>;
export declare const EvalsScreenRaw: React.FC<EvalsScreenProps>;
export declare const EvalsScreenDemo: React.FC<Partial<EvalsScreenProps>>;
export declare const Evals: React.FC<EvalsScreenProps | (Partial<EvalsScreenProps> & { demo: true })>;
export default EvalsScreen;
