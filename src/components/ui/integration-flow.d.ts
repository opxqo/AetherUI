import * as React from "react";

export interface IntegrationFlowProps {
  /** Integrations that rotate through the pills (5 or more look best). The icon fills a 64 × 64 box; mono logos turn black in the centre (default: Okta, Snowflake, Slack, ClickUp, Zendesk) */
  items?: any;
  /** Accessible description of the scene (default: "Integrations like Slack, Okta and Snowflake…") */
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
 * Integration Flow — Integration pills rotating along a dashed arc, each beaming its data into a central analysis hub
 */
export declare const IntegrationFlow: React.FC<IntegrationFlowProps>;
export declare const IntegrationFlowRaw: React.FC<IntegrationFlowProps>;
export declare const IntegrationFlowDemo: React.FC<IntegrationFlowProps>;

export default IntegrationFlow;
