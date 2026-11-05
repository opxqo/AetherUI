import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-ElZs8qP_.js";

/**
 * Comment Thread (Chat)
 * One comment with replies – an assistant reports what it did, folds open details and answers @mentions
 */
export function AssistantMark(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const AssistantMarkRaw = __InnerComponent || DemoComponent;
export const AssistantMarkDemo = DemoComponent;
export const CommentThread = AssistantMark;
export default AssistantMark;
