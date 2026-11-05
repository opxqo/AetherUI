import * as React from "react";
export type SegmentOption<T extends string = string> = {
  value: T;
  label?: React.ReactNode;
  icon?: React.ReactNode;
  /** A small gray number after the label, e.g. unread items */
  count?: number | string;
  /** A small tinted tag after the label, e.g. "Save 20%" */
  badge?: React.ReactNode;
  disabled?: boolean;
  /** Accessible name – needed when the option only shows an icon */
  ariaLabel?: string;
  /** With kind="tabs": the id of the panel this tab shows */
  controls?: string;
};

export type SegmentedControlProps<T extends string = string> = {
  demo?: boolean;
  style?: React.CSSProperties;
  ref?: React.Ref<HTMLElement>;
  options: SegmentOption<T>[];
  /** Controlled value */
  value?: T;
  /** Starting value when uncontrolled – defaults to the first enabled option */
  defaultValue?: T;
  onChange?: (value: T) => void;
  size?: "sm" | "md" | "lg";
  /** "tray" = gray track with a raised pill, "underline" = text tabs with a sliding line */
  variant?: "tray" | "underline";
  /** Fill the container with equal segments */
  fullWidth?: boolean;
  /** "radio" (a radiogroup, the default) or "tabs" (a tablist that switches panels) */
  kind?: "radio" | "tabs";
  disabled?: boolean;
  "aria-label"?: string;
  "aria-labelledby"?: string;
  className?: string;
};
/**
 * Segmented Control — Switch between two to six options – a raised pill or underline that glides, stretches a little and can be dragged across, with icons, counts and badges
 */
export declare const SegmentedControl: React.FC<SegmentedControlProps | (Partial<SegmentedControlProps> & { demo: true })>;
export declare const SegmentedControlRaw: React.FC<SegmentedControlProps>;
export declare const SegmentedControlDemo: React.FC<Partial<SegmentedControlProps>>;

export default SegmentedControl;
