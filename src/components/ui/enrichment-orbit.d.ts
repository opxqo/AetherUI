import * as React from "react";

export interface EnrichmentOrbitProps {
  /** Accessible description of the illustration (default: "A Grok tile with data nodes orbiting…") */
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
 * Enrichment Orbit — Grok tile inside two rings with comets and data nodes orbiting around it
 */
export declare const EnrichmentOrbit: React.FC<EnrichmentOrbitProps>;
export declare const EnrichmentOrbitRaw: React.FC<EnrichmentOrbitProps>;
export declare const EnrichmentOrbitDemo: React.FC<EnrichmentOrbitProps>;

export default EnrichmentOrbit;
