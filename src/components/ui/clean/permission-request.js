import React from "react";
import DemoComponent, { __InnerComponent } from "../../../affectui-engine/demo.clean-D8ufAHnn.js";

/**
 * Permission Request [Clean Style] (Agents)
 * An agent asks for one specific right – who, why and exactly what will happen – and you allow it once, for an hour or always; then it folds into one line with the time left and Revoke
 */
export function PermissionRequest(props = {}) {
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

export const PermissionRequestRaw = __InnerComponent || DemoComponent;
export const PermissionRequestDemo = DemoComponent;

export default PermissionRequest;
