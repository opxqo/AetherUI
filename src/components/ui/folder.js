import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-DZ-lI8Eb.js";

/**
 * Folders / Detail (App screens)
 * Inside one folder: breadcrumbs, file cards with previews, and an empty state
 */
export function FolderScreen(props = {}) {
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

export const FolderScreenRaw = __InnerComponent || DemoComponent;
export const FolderScreenDemo = DemoComponent;
export const Folder = FolderScreen;
export default FolderScreen;
