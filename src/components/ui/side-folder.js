import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-ClUxDNiT.js";

/**
 * Side Folder (Card illustrations)
 * Glassy blue folder on its side, documents sliding out to the right as the pocket swings open on hover
 */
export function SideFolder(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const SideFolderRaw = __InnerComponent || DemoComponent;
export const SideFolderDemo = DemoComponent;

export default SideFolder;
