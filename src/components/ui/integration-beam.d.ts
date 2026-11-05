import * as React from "react";

export interface IntegrationBeamProps {
  /** Tools that send data in – on the left, or above the hub on narrow widths. The logo fills a 28 × 28 box (default: Slack, Notion, Gmail) */
  left?: any;
  /** Tools that receive data – on the right, or below the hub on narrow widths (default: HubSpot, Linear, Google Drive) */
  right?: any;
  /** Your product. The logo is drawn white into a 36 × 36 box on the dark tile (currentColor); a neutral flower mark when left out (default: { name: "Acme" }) */
  center?: any;
  /** Accessible name of the scene (default: "Acme connected to Slack, Notion, …") */
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
 * Integration Beam — Your product between the tools it connects – light pulses flow along curved beams, hover to focus a tool, click to pause it
 */
export declare const IntegrationBeam: React.FC<IntegrationBeamProps>;
export declare const IntegrationBeamRaw: React.FC<IntegrationBeamProps>;
export declare const IntegrationBeamDemo: React.FC<IntegrationBeamProps>;

export default IntegrationBeam;
