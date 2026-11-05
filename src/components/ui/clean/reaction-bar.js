import React from "react";
import DemoComponent, { __InnerComponent } from "../../../affectui-engine/demo.clean-BwU0t77A.js";

/**
 * Reaction Bar [Clean Style] (Buttons)
 * Like, comment, repost and share in one pill – icons pop and fill, counts roll in digit by digit
 */
export function ReactionBar(props = {}) {
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

export const ReactionBarRaw = __InnerComponent || DemoComponent;
export const ReactionBarDemo = DemoComponent;

export default ReactionBar;
