import * as React from "react";

export interface OtpInputProps {
  /** Number of boxes (default: 6) */
  length?: any;
  /** A small dash between the boxes – true puts it in the middle, a number after that many boxes (default: false) */
  separator?: any;
  /** Digits only with the numeric keyboard on phones; false allows letters too, shown in capitals (default: true) */
  numeric?: any;
  /** The code – makes the field controlled */
  value?: any;
  /** Starting code when uncontrolled (default: "") */
  defaultValue?: any;
  /** Every change: typing, Backspace, paste, autofill and the clearing after an error */
  onChange?: any;
  /** Called once the last box is filled by the user – the place to start verifying */
  onComplete?: any;
  /** Verifying shimmers and locks the field, error shakes and shows the message, success morphs into the pill (default: "idle") */
  status?: any;
  /** Shown below the boxes after an error, until the user types again (default: "That code didn't work. Try again.") */
  errorMessage?: any;
  /** Clears the boxes shortly after the shake, ready for the next try (default: true) */
  clearOnError?: any;
  /** Text in the pill on success (default: "Verified") */
  successLabel?: any;
  /** Shows "Didn't get a code?" below the boxes with a countdown that becomes a Resend button; clicking restarts the countdown */
  onResend?: any;
  /** Seconds until the code can be resent (default: 30) */
  resendIn?: any;
  /** Where the boxes and the lines below them sit (default: "start") */
  align?: any;
  /** Dims the field and ignores input (default: false) */
  disabled?: any;
  /** Focuses the field on mount (without scrolling) (default: false) */
  autoFocus?: any;
  /** Accessible name; the number of digits is added (default: "Verification code") */
  label?: any;
  /** Extra class on the root */
  className?: any;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * OTP Input — The verification code field done right – a gliding focus ring, paste and SMS autofill, a calm shake on errors and a morph into Verified
 */
export declare const OtpInput: React.FC<OtpInputProps>;
export declare const OtpInputRaw: React.FC<OtpInputProps>;
export declare const OtpInputDemo: React.FC<OtpInputProps>;
export declare const OTPInput: React.FC<OtpInputProps>;
export default OtpInput;
