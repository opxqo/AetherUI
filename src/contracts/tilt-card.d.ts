import * as React from "react";
export interface TiltCardProps extends Omit<React.HTMLAttributes<HTMLElement>, "maxTilt" | "glare" | "scale" | "perspective" | "demo" | "className" | "style" | "children" | "ref"> {
  /** Maximum tilt in degrees */
  "maxTilt"?: number;
  /** Show a soft glare that follows the pointer */
  "glare"?: boolean;
  /** Scale while the pointer is over the card */
  "scale"?: number;
  /** Perspective distance in px – smaller is more dramatic */
  "perspective"?: number;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const TiltCard: React.FC<TiltCardProps | (Partial<TiltCardProps> & { demo: true })>;
export declare const TiltCardRaw: React.FC<TiltCardProps>;
export declare const TiltCardDemo: React.FC<Partial<TiltCardProps>>;
export default TiltCard;
