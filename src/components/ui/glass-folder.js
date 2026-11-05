import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-BDApkIlc.js";

/**
 * Glass Folder (Card illustrations)
 * Glassy blue folder with documents behind a frosted pocket that tips open on hover
 */
export function GlassFolder(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const GlassFolderRaw = __InnerComponent || DemoComponent;
export const GlassFolderDemo = DemoComponent;

export default GlassFolder;
