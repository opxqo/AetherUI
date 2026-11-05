import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-DZ-lI8Eb.js";

/**
 * Folders / Detail (App screens)
 * Inside one folder: breadcrumbs, file cards with previews, and an empty state
 */
export function FolderScreen(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const FolderScreenRaw = __InnerComponent || DemoComponent;
export const FolderScreenDemo = DemoComponent;
export const Folder = FolderScreen;
export default FolderScreen;
