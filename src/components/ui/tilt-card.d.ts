import * as React from "react";

export interface TiltCardProps {
  /** Maximum tilt in degrees (default: 10) */
  maxTilt?: number;
  /** Show a soft glare that follows the pointer (default: true) */
  glare?: boolean;
  /** Scale while the pointer is over the card (default: 1.02) */
  scale?: number;
  /** Perspective distance in px – smaller is more dramatic (default: 900) */
  perspective?: number;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Tilt Card — A card that tilts in 3D towards the pointer, with a soft glare that follows it and a smooth spring back
 */
export declare const TiltCard: React.FC<TiltCardProps>;
export declare const TiltCardRaw: React.FC<TiltCardProps>;
export declare const TiltCardDemo: React.FC<TiltCardProps>;

export default TiltCard;
