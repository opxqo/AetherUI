import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-bn5f6BmC.js";

/**
 * Inline Diff (Agents)
 * AI edits to prose shown inline – struck and added words you accept or reject one by one, with keys, a popover and undo
 */
export function InlineDiff(props = {}) {
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

export const InlineDiffRaw = __InnerComponent || DemoComponent;
export const InlineDiffDemo = DemoComponent;

export default InlineDiff;
