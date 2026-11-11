import * as React from "react";
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "demo" | "className" | "style" | "children" | "ref"> {
  label?: React.ReactNode;
  description?: React.ReactNode;
  indeterminate?: boolean;
  error?: React.ReactNode;
  variant?: "plain" | "card";
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLInputElement>;
}
export declare const Checkbox: React.FC<CheckboxProps | (Partial<CheckboxProps> & { demo: true })>;
export declare const CheckboxRaw: React.FC<CheckboxProps>;
export declare const CheckboxDemo: React.FC<Partial<CheckboxProps>>;
export default Checkbox;
