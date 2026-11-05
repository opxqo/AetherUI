import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-BKUB9d_p.js";

/**
 * Data Table (Data display)
 * Spreadsheet-style table: select cells and ranges, edit in place, copy and paste, undo and sort
 */
export function DataTable(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const DataTableRaw = __InnerComponent || DemoComponent;
export const DataTableDemo = DemoComponent;
export const TextColumnIcon = DataTable;
export const TagColumnIcon = DataTable;
export default DataTable;
