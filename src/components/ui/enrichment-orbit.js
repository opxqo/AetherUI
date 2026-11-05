import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-CU49Fdlm.js";

/**
 * Enrichment Orbit (Card illustrations)
 * Grok tile inside two rings with comets and data nodes orbiting around it
 */
export function EnrichmentOrbit(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const EnrichmentOrbitRaw = __InnerComponent || DemoComponent;
export const EnrichmentOrbitDemo = DemoComponent;

export default EnrichmentOrbit;
