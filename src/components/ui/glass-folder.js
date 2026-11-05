import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-BDApkIlc.js";

/**
 * Glass Folder (Card illustrations)
 * Glassy blue folder with documents behind a frosted pocket that tips open on hover
 */
export function GlassFolder(props = {}) {
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

export const GlassFolderRaw = __InnerComponent || DemoComponent;
export const GlassFolderDemo = DemoComponent;

export default GlassFolder;
