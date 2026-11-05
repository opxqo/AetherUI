import React from "react";
import DemoComponent, { __InnerComponent } from "../../../affectui-engine/demo.clean-CmPMxC4Y.js";

/**
 * Email Draft [Clean Style] (Cards)
 * Agent-written email for review – switch recipient and tone, edit inline, remove the attachment, send or discard with undo
 */
export function EmailDraft(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const EmailDraftRaw = __InnerComponent || DemoComponent;
export const EmailDraftDemo = DemoComponent;

export default EmailDraft;
