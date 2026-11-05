import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-CkkSZhS9.js";

/**
 * Logo Cluster (Card illustrations)
 * Your mark on a white disc in the middle – company logos bounce out of it and settle around it
 */
export function LogoCluster(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const LogoClusterRaw = __InnerComponent || DemoComponent;
export const LogoClusterDemo = DemoComponent;

export default LogoCluster;
