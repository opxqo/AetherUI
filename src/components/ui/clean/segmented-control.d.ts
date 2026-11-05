import * as React from "react";

export type SegmentOption = Record<string, any>;

export interface SegmentedControlProps {
  /** { value, label?, icon?, count?, badge?, disabled?, ariaLabel?, controls? } – two to six work best; give icon-only options an ariaLabel */
  options?: SegmentOption[];
  /** Controlled value */
  value?: string;
  /** Starting value when uncontrolled (default: first enabled option) */
  defaultValue?: string;
  /** Called with the new value – on click, while dragging the pill and on arrow keys */
  onChange?: (value: string) => void;
  /** 26, 30 or 36px tall options (40px+ on touch screens) (default: "md") */
  size?: "sm" | "md" | "lg";
  /** A gray track with a raised white pill, or text tabs on a hairline with a sliding line (default: "tray") */
  variant?: "tray" | "underline";
  /** Fills its container with equal segments, each as wide as the widest one needs (default: false) */
  fullWidth?: boolean;
  /** A radiogroup, or a tablist that switches panels (pair with controls on each option) (default: "radio") */
  kind?: "radio" | "tabs";
  /** Disables the whole control (default: false) */
  disabled?: boolean;
  /** Names the group – or use aria-labelledby */
  "aria-label"?: string;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Segmented Control — Switch between two to six options – a raised pill or underline that glides, stretches a little and can be dragged across, with icons, counts and badges
 */
export declare const SegmentedControl: React.FC<SegmentedControlProps>;
export declare const SegmentedControlRaw: React.FC<SegmentedControlProps>;
export declare const SegmentedControlDemo: React.FC<SegmentedControlProps>;

export default SegmentedControl;
