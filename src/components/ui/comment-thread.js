import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-ElZs8qP_.js";

/**
 * Comment Thread (Chat)
 * One comment with replies – an assistant reports what it did, folds open details and answers @mentions
 */
export function AssistantMark(props = {}) {
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

export const AssistantMarkRaw = __InnerComponent || DemoComponent;
export const AssistantMarkDemo = DemoComponent;
export const CommentThread = AssistantMark;
export default AssistantMark;
