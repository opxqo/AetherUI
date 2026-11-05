import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-BloxR6eN.js";

/**
 * Command Menu (Navigation)
 * Search and run anything from one field – tool actions with logos and ⌘1–⌘5, everyday commands with icons
 */
export function CommandMenu(props = {}) {
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

export const CommandMenuRaw = __InnerComponent || DemoComponent;
export const CommandMenuDemo = DemoComponent;

export default CommandMenu;
