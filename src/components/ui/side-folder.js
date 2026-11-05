import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-ClUxDNiT.js";

/**
 * Side Folder (Card illustrations)
 * Glassy blue folder on its side, documents sliding out to the right as the pocket swings open on hover
 */
export function SideFolder(props = {}) {
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

export const SideFolderRaw = __InnerComponent || DemoComponent;
export const SideFolderDemo = DemoComponent;

export default SideFolder;
