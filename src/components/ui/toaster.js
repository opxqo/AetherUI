import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-BnJ2hi23.js";
import { o as EngineToaster, s as engineToast } from "../../affectui-engine/index-DrzmeL9u.js";
export const toast = engineToast;

/**
 * Toaster (Feedback)
 * Calm toasts from anywhere – a stack that fans out on hover, promise toasts that morph from spinner to check, swipe to dismiss
 */
export function Toaster(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const ToasterRaw = __InnerComponent || DemoComponent;
export const ToasterDemo = DemoComponent;

export default Toaster;
