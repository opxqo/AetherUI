import * as React from "react";
export type ButtonProps = React.ComponentPropsWithRef<"button"> & {
  /** primary: dark and filled · secondary: white with an outline · ghost: text only · destructive: red, for deleting */
  variant?: "primary" | "secondary" | "ghost" | "destructive";
  size?: "sm" | "md" | "lg";
  /** Shows a shimmer over the label and blocks clicks */
  loading?: boolean;
  /** Icon before the label, e.g. an inline SVG */
  icon?: React.ReactNode;
  /** Icon after the label */
  iconRight?: React.ReactNode;
};
/**
 * Button — Primary, secondary, ghost and destructive buttons with icons, sizes and a shimmering loading state
 */
export declare const Button: React.FC<ButtonProps | (Partial<ButtonProps> & { demo: true })>;
export declare const ButtonRaw: React.FC<ButtonProps>;
export declare const ButtonDemo: React.FC<Partial<ButtonProps>>;

export default Button;
