import * as React from "react";
export interface IntegrationFlowProps extends Omit<React.HTMLAttributes<HTMLElement>, "items" | "label" | "demo" | "className" | "style" | "children" | "ref"> {
  /** Integrations that rotate through the pills (5 or more look best). The icon fills a 64 × 64 box; mono logos turn black in the centre */
  "items"?: { name: string; icon: React.ReactNode; title?: string; mono?: boolean }[];
  /** Accessible description of the scene */
  "label"?: string;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const IntegrationFlow: React.FC<IntegrationFlowProps | (Partial<IntegrationFlowProps> & { demo: true })>;
export declare const IntegrationFlowRaw: React.FC<IntegrationFlowProps>;
export declare const IntegrationFlowDemo: React.FC<Partial<IntegrationFlowProps>>;
export default IntegrationFlow;
