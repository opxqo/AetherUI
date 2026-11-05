import * as React from "react";

export interface ProjectFlowProps {
  /** Light or dark cards (default: "light") */
  theme?: any;
  /** Accessible description of the scene (default: "A client task branching…") */
  label?: any;
  /** Extra class on the root, e.g. for width or margins */
  className?: any;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Project Flow — Animated scene of a client task branching into subtasks, notes and assigned roles
 */
export declare const ProjectFlow: React.FC<ProjectFlowProps>;
export declare const ProjectFlowRaw: React.FC<ProjectFlowProps>;
export declare const ProjectFlowDemo: React.FC<ProjectFlowProps>;

export default ProjectFlow;
