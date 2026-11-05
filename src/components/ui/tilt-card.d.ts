import * as React from "react";

export interface TiltCardProps {
  /** The card's content – it fills the tilting surface */
  children?: any;
  /** Maximum tilt in degrees (default: 10) */
  maxTilt?: any;
  /** Show a soft glare that follows the pointer (default: true) */
  glare?: any;
  /** Scale while the pointer is over the card (default: 1.02) */
  scale?: any;
  /** Perspective distance in px – smaller is more dramatic (default: 900) */
  perspective?: any;
  /** Extra class on the wrapper; set --ui-tc-radius to match your card's corners */
  className?: any;
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
