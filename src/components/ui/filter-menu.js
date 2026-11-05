import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-BDtChEC0.js";

/**
 * Filter Menu (Inputs)
 * Grouped filters with removable chips, collapsible checkbox groups, Clear all and full keyboard control
 */
export function FilterMenu(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const FilterMenuRaw = __InnerComponent || DemoComponent;
export const FilterMenuDemo = DemoComponent;

export default FilterMenu;
