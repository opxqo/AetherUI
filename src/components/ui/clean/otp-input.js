import React from "react";
import DemoComponent, { __InnerComponent } from "../../../affectui-engine/demo.clean-C1n1pYzg.js";

/**
 * OTP Input [Clean Style] (Inputs)
 * The verification code field done right – a gliding focus ring, paste and SMS autofill, a calm shake on errors and a morph into Verified
 */
export function OtpInput(props = {}) {
  const { demo, ...rest } = props;
  const hasCustomProps = !demo && Object.keys(rest).length > 0;
  if (hasCustomProps && __InnerComponent && __InnerComponent !== DemoComponent) {
    return React.createElement(__InnerComponent, rest);
  }
  return React.createElement(DemoComponent, rest);
}

export const OtpInputRaw = __InnerComponent || DemoComponent;
export const OtpInputDemo = DemoComponent;
export const OTPInput = OtpInput;
export default OtpInput;
