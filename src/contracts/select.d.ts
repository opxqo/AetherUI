import * as React from "react";
export interface SelectOption { value: string; label: string; description?: string; icon?: React.ReactNode; disabled?: boolean }
export interface SelectProps extends Omit<React.HTMLAttributes<HTMLElement>, "onChange" | "defaultValue" | "demo" | "className" | "style" | "children" | "ref"> {
  options?: SelectOption[];
  value?: string | null;
  defaultValue?: string | null;
  onChange?: (value: string, option: SelectOption) => void;
  placeholder?: string;
  label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  optional?: boolean;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  name?: string;
  required?: boolean;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLButtonElement>;
}
export declare const Select: React.FC<SelectProps | (Partial<SelectProps> & { demo: true })>;
export declare const SelectRaw: React.FC<SelectProps>;
export declare const SelectDemo: React.FC<Partial<SelectProps>>;
export default Select;
