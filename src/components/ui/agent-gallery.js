import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-zt7AXopF.js";

/**
 * Agent Gallery (Feature sections)
 * Slim gradient panels with one open product screen in the middle – pick a panel and it glides open
 */
export function AgentGallery(props = {}) {
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

export const AgentGalleryRaw = __InnerComponent || DemoComponent;
export const AgentGalleryDemo = DemoComponent;

export default AgentGallery;
