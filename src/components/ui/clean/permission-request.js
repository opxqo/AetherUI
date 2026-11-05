import React from "react";
import DemoComponent, { __InnerComponent } from "../../../affectui-engine/demo.clean-D8ufAHnn.js";

/**
 * Permission Request [Clean Style] (Agents)
 * An agent asks for one specific right – who, why and exactly what will happen – and you allow it once, for an hour or always; then it folds into one line with the time left and Revoke
 */
export function PermissionRequest(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const PermissionRequestRaw = __InnerComponent || DemoComponent;
export const PermissionRequestDemo = DemoComponent;

export default PermissionRequest;
