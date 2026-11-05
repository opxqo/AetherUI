import * as React from "react";
export type LeadSourcingProps = {
  demo?: boolean;
  style?: React.CSSProperties;
  ref?: React.Ref<HTMLElement>;
  className?: string;
  /** Accessible description of the scene */
  label?: string;
};
/**
 * Lead Sourcing — ChatGPT tile linked to Gmail and Grok, with a shine running along the connection
 */
export declare const LeadSourcing: React.FC<LeadSourcingProps | (Partial<LeadSourcingProps> & { demo: true })>;
export declare const LeadSourcingRaw: React.FC<LeadSourcingProps>;
export declare const LeadSourcingDemo: React.FC<Partial<LeadSourcingProps>>;

export default LeadSourcing;
