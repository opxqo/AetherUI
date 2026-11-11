import * as React from "react";
export interface SwitchProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange" | "demo" | "className" | "style" | "children" | "ref"> {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: React.ReactNode;
  description?: React.ReactNode;
  disabled?: boolean;
  size?: "sm" | "md";
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLButtonElement>;
}
export declare const Switch: React.FC<SwitchProps | (Partial<SwitchProps> & { demo: true })>;
export declare const SwitchRaw: React.FC<SwitchProps>;
export declare const SwitchDemo: React.FC<Partial<SwitchProps>>;
export default Switch;
