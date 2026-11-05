import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-CU49Fdlm.js";

/**
 * Enrichment Orbit (Card illustrations)
 * Grok tile inside two rings with comets and data nodes orbiting around it
 */
export function EnrichmentOrbit(props = {}) {
  const { demo, className, style, ...rest } = props;
  const hasCustomProps = demo === false || (!demo && Object.keys(rest).some(k => !["id", "children", "key", "ref"].includes(k) && !k.startsWith("data-") && !k.startsWith("aria-")));
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, { className, style, ...rest });
  }
  const element = React.createElement(DemoComponent, { className, style, ...rest });
  if (className || style) {
    return React.createElement("div", { className, style, "data-aether-wrapper": "" }, element);
  }
  return element;
}

export const EnrichmentOrbitRaw = __InnerComponent || DemoComponent;
export const EnrichmentOrbitDemo = DemoComponent;

export default EnrichmentOrbit;
