import * as React from "react";
export type CauseStatus = "open" | "checking" | "ruled-out" | "confirmed";
export interface Cause { id: string; title: string; icon?: React.ReactNode; files?: string[]; gate?: "or" | "and"; status?: CauseStatus; verdict?: string; children?: Cause[] }
export interface RootCauseTreeProps extends Omit<React.HTMLAttributes<HTMLElement>, "title" | "demo" | "className" | "style" | "children" | "ref"> {
  failure?: Cause & { detail?: string };
  onAction?: (cause: Cause, action: "fix" | "retry") => void;
  formatTime?: (ms: number) => string;
  title?: string;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const RootCauseTree: React.FC<RootCauseTreeProps | (Partial<RootCauseTreeProps> & { demo: true })>;
export declare const RootCauseTreeRaw: React.FC<RootCauseTreeProps>;
export declare const RootCauseTreeDemo: React.FC<Partial<RootCauseTreeProps>>;
export default RootCauseTree;
