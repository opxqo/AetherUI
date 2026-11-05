import * as React from "react";

export interface SetupGuideProps {
  /** Groups with an id, a title and tasks; each task has an id, a label and an optional done flag */
  groups?: any;
  /** Heading above the bar (default: "Setup guide") */
  title?: any;
  /** Shows an Edit link in the header */
  onEdit?: any;
  /** Shows a close button in the header */
  onClose?: any;
  /** Called with the ids of all finished tasks */
  onChange?: any;
  /** Extra class on the panel */
  className?: any;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Setup Guide — Onboarding panel with a progress bar and collapsible task groups that strike through when done
 */
export declare const SetupGuide: React.FC<SetupGuideProps>;
export declare const SetupGuideRaw: React.FC<SetupGuideProps>;
export declare const SetupGuideDemo: React.FC<SetupGuideProps>;

export default SetupGuide;
