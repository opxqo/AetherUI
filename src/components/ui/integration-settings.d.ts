import * as React from "react";

export type Partial = Record<string, any>;
export type IntegrationValues = Record<string, any>;

export interface IntegrationSettingsProps {
  /** Name of the service */
  name?: string;
  /** Logo in the white tile */
  logo?: ReactNode;
  /** Small number next to the name */
  count?: number;
  /** Line under the name; switching off shows a paused note instead */
  meta?: string;
  /** enabled, siteUrl, timeZone and apiKey to start with */
  defaultValues?: Partial<IntegrationValues>;
  /** Helper text under the address field */
  siteHint?: string;
  /** Choices in the time zone picker */
  timeZones?: string[];
  /** Creates a key – a random demo key without it */
  onGenerateKey?: () => string | Promise<string>;
  /** Called with all values from the save bar */
  onSave?: (values: any) => void | Promise<void>;
  /** Called when the switch changes */
  onToggle?: (enabled: boolean) => void;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Integration Settings — Settings card for a connected service – on/off switch, API key, validated site address, time zone and a save bar
 */
export declare const IntegrationSettings: React.FC<IntegrationSettingsProps>;
export declare const IntegrationSettingsRaw: React.FC<IntegrationSettingsProps>;
export declare const IntegrationSettingsDemo: React.FC<IntegrationSettingsProps>;

export default IntegrationSettings;
