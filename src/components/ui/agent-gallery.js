import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-zt7AXopF.js";

/**
 * Agent Gallery (Feature sections)
 * Slim gradient panels with one open product screen in the middle – pick a panel and it glides open
 */
export function AgentGallery(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const AgentGalleryRaw = __InnerComponent || DemoComponent;
export const AgentGalleryDemo = DemoComponent;

export default AgentGallery;
