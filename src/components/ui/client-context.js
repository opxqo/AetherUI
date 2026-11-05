import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-borEBI1Z.js";

/**
 * Client Context (Productivity)
 * A client workspace with live numbers and a shared context timeline – switch clients, search, filter and add notes or files
 */
export function ClientContext(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const ClientContextRaw = __InnerComponent || DemoComponent;
export const ClientContextDemo = DemoComponent;

export default ClientContext;
