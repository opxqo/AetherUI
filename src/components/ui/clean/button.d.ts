import * as React from "react";

export interface ButtonProps {
  /** Dark filled, white with an outline, text only, or red for deleting (default: "primary") */
  variant?: "primary" | "secondary" | "ghost" | "destructive";
  /** 32, 40 or 48px high (default: "md") */
  size?: "sm" | "md" | "lg";
  /** Swaps the left icon for a spinner, shimmers the label, sets aria-busy and ignores clicks (default: false) */
  loading?: boolean;
  /** Icon before the label; without children the button becomes square */
  icon?: ReactNode;
  /** Icon after the label */
  iconRight?: ReactNode;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Button — Primary, secondary, ghost and destructive buttons with icons, sizes and a shimmering loading state
 */
export declare const Button: React.FC<ButtonProps>;
export declare const ButtonRaw: React.FC<ButtonProps>;
export declare const ButtonDemo: React.FC<ButtonProps>;

export default Button;
