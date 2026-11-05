import * as React from "react";

export type ComboboxOption = Record<string, any>;

export interface ComboboxProps {
  /** The list. avatar is an image URL or true for initials; options with the same group are listed under one title */
  options?: Array<Record<string, any>>;
  /** Pick many (chips) or one – one closes the list after picking (default: true) */
  multiple?: boolean;
  /** Controlled values (also for single choice, with at most one entry) */
  value?: string[];
  /** Starting values when uncontrolled (default: []) */
  defaultValue?: string[];
  /** Called on every pick, removal or creation */
  onChange?: (value: string[], options: ComboboxOption[]) => void;
  /** Shown while nothing is picked (default: "Search…") */
  placeholder?: string;
  /** Offer a create row when no option matches the typed text exactly (default: false) */
  creatable?: boolean;
  /** Builds the new option – defaults to { value: text, label: text } */
  onCreate?: (text: string) => ComboboxOption | void;
  /** Text of the create row, e.g. Invite “…” (default: Create “…”) */
  createLabel?: (text: string) => string;
  /** Show at most this many chips, the rest as a "+3" chip */
  maxVisibleTags?: number;
  /** Visible label above the field (also names the list) */
  label?: string;
  /** Open the list right away (default: false) */
  defaultOpen?: boolean;
  /** Shown when nothing matches (default: "No results") */
  emptyText?: string;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Combobox — Pick one or many from a searchable, grouped list – chips with avatars, highlighted matches, create-on-the-fly and full keyboard support
 */
export declare const Combobox: React.FC<ComboboxProps>;
export declare const ComboboxRaw: React.FC<ComboboxProps>;
export declare const ComboboxDemo: React.FC<ComboboxProps>;

export default Combobox;
