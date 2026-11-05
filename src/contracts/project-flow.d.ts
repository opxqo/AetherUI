import * as React from "react";
export interface ProjectFlowProps extends Omit<React.HTMLAttributes<HTMLElement>, "theme" | "label" | "demo" | "className" | "style" | "children" | "ref"> {
  /** Light or dark cards */
  "theme"?: "light" | "dark";
  /** Accessible description of the scene */
  "label"?: string;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const ProjectFlow: React.FC<ProjectFlowProps | (Partial<ProjectFlowProps> & { demo: true })>;
export declare const ProjectFlowRaw: React.FC<ProjectFlowProps>;
export declare const ProjectFlowDemo: React.FC<Partial<ProjectFlowProps>>;
export default ProjectFlow;
