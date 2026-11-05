import * as React from "react";
export type BeamTool = {
  /** Shown in the tooltip and read to screen readers, e.g. "Slack" */
  name: string;
  /** Logo, drawn into a 28 × 28 box (an <svg> fills the box) */
  logo: React.ReactNode;
};

export type BeamCenter = {
  /** Your product's name, used in the accessible description */
  name: string;
  /** Your mark, drawn into a 36 × 36 box on the dark tile – a neutral flower when left out */
  logo?: React.ReactNode;
};

export type IntegrationBeamProps = {
  demo?: boolean;
  style?: React.CSSProperties;
  ref?: React.Ref<HTMLElement>;
  /** Tools that send data in (left, or above on narrow widths) – three look best */
  left?: BeamTool[];
  /** Tools that receive data (right, or below on narrow widths) – three look best */
  right?: BeamTool[];
  /** The product in the middle */
  center?: BeamCenter;
  className?: string;
  /** Accessible description of the scene */
  label?: string;
};

export type Point = { x: number; y: number };

export type Curve = number[];
/**
 * Integration Beam — Your product between the tools it connects – light pulses flow along curved beams, hover to focus a tool, click to pause it
 */
export declare const IntegrationBeam: React.FC<IntegrationBeamProps | (Partial<IntegrationBeamProps> & { demo: true })>;
export declare const IntegrationBeamRaw: React.FC<IntegrationBeamProps>;
export declare const IntegrationBeamDemo: React.FC<Partial<IntegrationBeamProps>>;

export default IntegrationBeam;
