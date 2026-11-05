import * as React from "react";

export interface OutreachBranchesProps {
  /** Accessible description of the illustration (default: "Lines branching out to Gmail, Slack and Notion…") */
  label?: string;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Outreach Branches — Lines branching out to Gmail, Slack and Notion with colored pulses flowing down
 */
export declare const OutreachBranches: React.FC<OutreachBranchesProps>;
export declare const OutreachBranchesRaw: React.FC<OutreachBranchesProps>;
export declare const OutreachBranchesDemo: React.FC<OutreachBranchesProps>;

export default OutreachBranches;
