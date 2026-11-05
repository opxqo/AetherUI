import * as React from "react";
export interface OutreachBranchesProps extends Omit<React.HTMLAttributes<HTMLElement>, "label" | "demo" | "className" | "style" | "children" | "ref"> {
  /** Accessible description of the illustration */
  "label"?: string;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const OutreachBranches: React.FC<OutreachBranchesProps | (Partial<OutreachBranchesProps> & { demo: true })>;
export declare const OutreachBranchesRaw: React.FC<OutreachBranchesProps>;
export declare const OutreachBranchesDemo: React.FC<Partial<OutreachBranchesProps>>;
export default OutreachBranches;
