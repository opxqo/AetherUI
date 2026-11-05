import React from "react";
import DemoComponent, { __InnerComponent } from "../../../affectui-engine/demo.clean-1BCd75XO.js";

/**
 * Inline Diff [Clean Style] (Agents)
 * AI edits to prose shown inline – struck and added words you accept or reject one by one, with keys, a popover and undo
 */
export function InlineDiff(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const InlineDiffRaw = __InnerComponent || DemoComponent;
export const InlineDiffDemo = DemoComponent;

export default InlineDiff;
