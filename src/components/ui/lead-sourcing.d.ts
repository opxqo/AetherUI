import * as React from "react";

export interface LeadSourcingProps {
  /** Accessible description of the illustration (default: "A ChatGPT tile connected to Gmail and Grok…") */
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
 * Lead Sourcing — ChatGPT tile linked to Gmail and Grok, with a shine running along the connection
 */
export declare const LeadSourcing: React.FC<LeadSourcingProps>;
export declare const LeadSourcingRaw: React.FC<LeadSourcingProps>;
export declare const LeadSourcingDemo: React.FC<LeadSourcingProps>;

export default LeadSourcing;
