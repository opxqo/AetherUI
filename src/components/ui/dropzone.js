import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-BaVYNLv-.js";

/**
 * Dropzone (Inputs)
 * Drag files in and watch them upload – fanning documents, colored type badges, progress with time left, errors with retry
 */
export function Dropzone(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const DropzoneRaw = __InnerComponent || DemoComponent;
export const DropzoneDemo = DemoComponent;

export default Dropzone;
