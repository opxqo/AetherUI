import type { ComboboxOption } from "./shared.js";
export type { ComboboxOption } from "./shared.js";
import * as React from "react";
export interface ComboboxProps extends Omit<React.HTMLAttributes<HTMLElement>, "options" | "multiple" | "value" | "defaultValue" | "onChange" | "placeholder" | "creatable" | "onCreate" | "createLabel" | "maxVisibleTags" | "label" | "defaultOpen" | "emptyText" | "demo" | "className" | "style" | "children" | "ref"> {
  /** The list. avatar is an image URL or true for initials; options with the same group are listed under one title */
  "options"?: ComboboxOption[];
  /** Pick many (chips) or one – one closes the list after picking */
  "multiple"?: boolean;
  /** Controlled values (also for single choice, with at most one entry) */
  "value"?: string[];
  /** Starting values when uncontrolled */
  "defaultValue"?: string[];
  /** Called on every pick, removal or creation */
  "onChange"?: (value: string[], options: ComboboxOption[]) => void;
  /** Shown while nothing is picked */
  "placeholder"?: string;
  /** Offer a create row when no option matches the typed text exactly */
  "creatable"?: boolean;
  /** Builds the new option – defaults to { value: text, label: text } */
  "onCreate"?: (text: string) => ComboboxOption | void;
  /** Text of the create row, e.g. Invite “…” */
  "createLabel"?: (text: string) => string;
  /** Show at most this many chips, the rest as a "+3" chip */
  "maxVisibleTags"?: number;
  /** Visible label above the field (also names the list) */
  "label"?: string;
  /** Open the list right away */
  "defaultOpen"?: boolean;
  /** Shown when nothing matches */
  "emptyText"?: string;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const Combobox: React.FC<ComboboxProps | (Partial<ComboboxProps> & { demo: true })>;
export declare const ComboboxRaw: React.FC<ComboboxProps>;
export declare const ComboboxDemo: React.FC<Partial<ComboboxProps>>;
export default Combobox;
