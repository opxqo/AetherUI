import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-B7zbJYh5.js";

/**
 * Folders / Overview (App screens)
 * Folder overview with tabs, search, sort, grid/list toggle and file templates
 */
export function FilesScreen(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const FilesScreenRaw = __InnerComponent || DemoComponent;
export const FilesScreenDemo = DemoComponent;
export const Files = FilesScreen;
export default FilesScreen;
