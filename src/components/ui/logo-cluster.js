import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-CkkSZhS9.js";

/**
 * Logo Cluster (Card illustrations)
 * Your mark on a white disc in the middle – company logos bounce out of it and settle around it
 */
export function LogoCluster(props = {}) {
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

export const LogoClusterRaw = __InnerComponent || DemoComponent;
export const LogoClusterDemo = DemoComponent;

export default LogoCluster;
