import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-borEBI1Z.js";

/**
 * Client Context (Productivity)
 * A client workspace with live numbers and a shared context timeline – switch clients, search, filter and add notes or files
 */
export function ClientContext(props = {}) {
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

export const ClientContextRaw = __InnerComponent || DemoComponent;
export const ClientContextDemo = DemoComponent;

export default ClientContext;
