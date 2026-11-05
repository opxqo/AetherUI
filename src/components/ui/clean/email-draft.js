import React from "react";
import DemoComponent, { __InnerComponent } from "../../../affectui-engine/demo.clean-CmPMxC4Y.js";

/**
 * Email Draft [Clean Style] (Cards)
 * Agent-written email for review – switch recipient and tone, edit inline, remove the attachment, send or discard with undo
 */
export function EmailDraft(props = {}) {
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

export const EmailDraftRaw = __InnerComponent || DemoComponent;
export const EmailDraftDemo = DemoComponent;

export default EmailDraft;
