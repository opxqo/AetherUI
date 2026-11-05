import React from "react";
import DemoComponent, { __InnerComponent } from "../../../affectui-engine/demo.clean-Nl_cej3R.js";
import { Toaster as EngineToaster, toast as engineToast } from "../../../affectui-engine/demo.clean-Nl_cej3R.js";
export const toast = engineToast;

/**
 * Toaster [Clean Style] (Feedback)
 * Calm toasts from anywhere – a stack that fans out on hover, promise toasts that morph from spinner to check, swipe to dismiss
 */
export function Toaster(props = {}) {
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

export const ToasterRaw = __InnerComponent || DemoComponent;
export const ToasterDemo = DemoComponent;

export default Toaster;
