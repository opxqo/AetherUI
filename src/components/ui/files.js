import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-B7zbJYh5.js";

/**
 * Folders / Overview (App screens)
 * Folder overview with tabs, search, sort, grid/list toggle and file templates
 */
export function FilesScreen(props = {}) {
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

export const FilesScreenRaw = __InnerComponent || DemoComponent;
export const FilesScreenDemo = DemoComponent;
export const Files = FilesScreen;
export default FilesScreen;
