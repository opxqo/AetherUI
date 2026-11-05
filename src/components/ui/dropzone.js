import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-BaVYNLv-.js";

/**
 * Dropzone (Inputs)
 * Drag files in and watch them upload – fanning documents, colored type badges, progress with time left, errors with retry
 */
export function Dropzone(props = {}) {
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

export const DropzoneRaw = __InnerComponent || DemoComponent;
export const DropzoneDemo = DemoComponent;

export default Dropzone;
