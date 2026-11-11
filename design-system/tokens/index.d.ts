/**
 * AetherUI / AffectUI Design System Type Definitions
 */

export type AuiTokenName =
  | "--aui-font"
  | "--aui-font-mono"
  | "--aui-radius"
  | "--aui-radius-sm"
  | "--aui-radius-lg"
  | "--aui-ink"
  | "--aui-muted"
  | "--aui-placeholder"
  | "--aui-surface"
  | "--aui-subtle"
  | "--aui-overlay"
  | "--aui-border"
  | "--aui-border-strong"
  | "--aui-primary"
  | "--aui-on-primary"
  | "--aui-focus"
  | "--aui-danger"
  | "--aui-danger-soft"
  | "--aui-warning"
  | "--aui-warning-soft"
  | "--aui-success"
  | "--aui-success-soft"
  | "--aui-info"
  | "--aui-info-soft"
  | "--aui-blue"
  | "--aui-green"
  | "--aui-amber"
  | "--aui-orange"
  | "--aui-red"
  | "--aui-pink"
  | "--aui-purple"
  | "--aui-teal"
  | "--aui-cyan"
  | "--aui-shadow-card"
  | "--aui-shadow-popover"
  | "--aui-ease";

export type AuiTokenGroup =
  | "Type"
  | "Shape"
  | "Text"
  | "Surfaces"
  | "Borders"
  | "Actions"
  | "Status"
  | "Palette"
  | "Depth"
  | "Motion";

export type AuiStyle = "classic" | "clean";
export type AuiTheme = "light" | "dark";

export interface AuiTokenDefinition {
  name: AuiTokenName;
  group: AuiTokenGroup;
  use: string;
  dark?: boolean;
  clean?: { light: string; dark?: string };
  classic?: { light: string; dark?: string };
}

export declare const AUI_TOKENS: AuiTokenDefinition[];
export declare const AUI_TOKEN_MAP: Record<AuiTokenName, AuiTokenDefinition>;

export declare function getAuiToken(
  name: AuiTokenName,
  style?: AuiStyle,
  mode?: AuiTheme
): string | null;

export declare function setAuiStyle(style: AuiStyle): void;
export declare function setAuiTheme(theme: AuiTheme): void;
