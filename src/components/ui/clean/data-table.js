import React from "react";
import DemoComponent, { __InnerComponent } from "../../../affectui-engine/demo.clean-7-VzSUWm.js";

/**
 * Data Table [Clean Style] (Data display)
 * Spreadsheet-style table: select cells and ranges, edit in place, copy and paste, undo and sort
 */
export function DataTable(props = {}) {
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

export const DataTableRaw = __InnerComponent || DemoComponent;
export const DataTableDemo = DemoComponent;
export const TextColumnIcon = DataTable;
export const TagColumnIcon = DataTable;
export default DataTable;
