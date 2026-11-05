import * as React from "react";
export type EnrichmentOrbitProps = {
  demo?: boolean;
  style?: React.CSSProperties;
  ref?: React.Ref<HTMLElement>;
  className?: string;
  /** Accessible description of the scene */
  label?: string;
};
/**
 * Enrichment Orbit — Grok tile inside two rings with comets and data nodes orbiting around it
 */
export declare const EnrichmentOrbit: React.FC<EnrichmentOrbitProps | (Partial<EnrichmentOrbitProps> & { demo: true })>;
export declare const EnrichmentOrbitRaw: React.FC<EnrichmentOrbitProps>;
export declare const EnrichmentOrbitDemo: React.FC<Partial<EnrichmentOrbitProps>>;

export default EnrichmentOrbit;
