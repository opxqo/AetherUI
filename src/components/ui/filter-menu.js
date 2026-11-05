import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-BDtChEC0.js";

/**
 * Filter Menu (Inputs)
 * Grouped filters with removable chips, collapsible checkbox groups, Clear all and full keyboard control
 */
export function FilterMenu(props = {}) {
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

export const FilterMenuRaw = __InnerComponent || DemoComponent;
export const FilterMenuDemo = DemoComponent;

export default FilterMenu;
