import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-x4AxvLaI.js";

/**
 * Reaction Bar (Buttons)
 * Like, comment, repost and share in one pill – icons pop and fill, counts roll in digit by digit
 */
export function ReactionBar(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const ReactionBarRaw = __InnerComponent || DemoComponent;
export const ReactionBarDemo = DemoComponent;

export default ReactionBar;
