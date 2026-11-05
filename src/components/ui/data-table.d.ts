import * as React from "react";

export type DataColumn = Record<string, any>;
export type DataRow = Record<string, any>;
export type TagTone = Record<string, any>;

export interface DataTableProps {
  /** Heading in the gray tray, also the grid's accessible name */
  title?: string;
  /** Icon in front of the heading */
  icon?: ReactNode;
  /** key, label, icon, width, type (title, tag, link, number, text), editable, options for tags and format for numbers – numbers default to grouped digits with a real minus sign (12,345,679 · −4,200) */
  columns?: DataColumn[];
  /** Starting rows – an id, an optional logo and a value per column key */
  rows?: DataRow[];
  /** Tag color per tag text: blue, violet, pink, green, amber or gray */
  tagTones?: Record<string, TagTone>;
  /** false keeps selection and copy, but turns off editing, paste, delete and Add row (default: true) */
  editable?: boolean;
  /** Called with all rows after every edit, paste, clear, delete, undo or redo */
  onRowsChange?: (rows: DataRow[]) => void;
  /** Called with the ids of the checked rows */
  onSelectionChange?: (ids: string[]) => void;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Data Table — Spreadsheet-style table: select cells and ranges, edit in place, copy and paste, undo and sort
 */
export declare const DataTable: React.FC<DataTableProps>;
export declare const DataTableRaw: React.FC<DataTableProps>;
export declare const DataTableDemo: React.FC<DataTableProps>;
export declare const TextColumnIcon: React.FC<DataTableProps>;
export declare const TagColumnIcon: React.FC<DataTableProps>;
export default DataTable;
