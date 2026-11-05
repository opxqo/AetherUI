import React from "react";
import DemoComponent, { __InnerComponent } from "../../affectui-engine/demo-DbX9tDU_.js";

/**
 * Voice Orb (Product scenes)
 * The face of a voice assistant – a sphere of dots that breathes, catches sound, collapses into a spinning ring while thinking and ripples when it speaks
 */
export function VoiceOrb(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const VoiceOrbRaw = __InnerComponent || DemoComponent;
export const VoiceOrbDemo = DemoComponent;

export default VoiceOrb;
