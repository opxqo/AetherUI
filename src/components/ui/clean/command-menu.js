import React from "react";
import DemoComponent, { __InnerComponent } from "../../../affectui-engine/demo.clean-BY6TallM.js";

/**
 * Command Menu [Clean Style] (Navigation)
 * Search and run anything from one field – tool actions with logos and ⌘1–⌘5, everyday commands with icons
 */
export function CommandMenu(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const CommandMenuRaw = __InnerComponent || DemoComponent;
export const CommandMenuDemo = DemoComponent;

export default CommandMenu;
