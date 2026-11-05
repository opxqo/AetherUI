import * as React from "react";

export interface ButtonProps {
  /** Dark filled, white with an outline, text only, or red for deleting (default: "primary") */
  variant?: any;
  /** 32, 40 or 48px high (default: "md") */
  size?: any;
  /** Swaps the left icon for a spinner, shimmers the label, sets aria-busy and ignores clicks (default: false) */
  loading?: any;
  /** Icon before the label; without children the button becomes square */
  icon?: any;
  /** Icon after the label */
  iconRight?: any;
  /** Everything a native button takes, including ref, type and disabled */
  "...props"?: any;
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
