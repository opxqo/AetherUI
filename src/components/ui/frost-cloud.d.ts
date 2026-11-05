import * as React from "react";

export interface FrostCloudProps {
  /** Blue-to-cyan or red-to-orange sky; the cloud's colors follow (default: "orange") */
  color?: "blue" | "orange";
  /** Fill the whole box with the sky gradient; false leaves the cloud on a transparent background with a soft colored edge (default: true) */
  background?: boolean;
  /** The eyes follow the pointer while it's over the illustration (default: true) */
  followPointer?: boolean;
  /** Accessible description of the illustration */
  label?: string;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Frost Cloud — A frosted white cloud with eyes cut out of it, on a red-orange or blue sky – it floats, turns to look around, blinks, follows the pointer and bounces with a wink when clicked
 */
export declare const FrostCloud: React.FC<FrostCloudProps>;
export declare const FrostCloudRaw: React.FC<FrostCloudProps>;
export declare const FrostCloudDemo: React.FC<FrostCloudProps>;

export default FrostCloud;
