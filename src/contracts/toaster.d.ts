import * as React from "react";
export interface ToasterProps extends Omit<React.HTMLAttributes<HTMLElement>, "position" | "inline" | "id" | "duration" | "visibleToasts" | "expand" | "offset" | "gap" | "hotkey" | "hairline" | "closeButton" | "label" | "demo" | "className" | "style" | "children" | "ref"> {
  /** Corner or edge the stack sits in; new toasts come in from that edge */
  "position"?: "top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right";
  /** Positions the stack inside the nearest positioned ancestor instead of the viewport */
  "inline"?: boolean;
  /** Only shows toasts sent with { toaster: id } – for a second, separate stack */
  "id"?: string;
  /** Default time on screen in ms; each toast can override it, Infinity keeps it open */
  "duration"?: number;
  /** Toasts visible at once; older ones wait (with a paused timer) until there's room */
  "visibleToasts"?: number;
  /** Always shows the stack fanned out instead of on hover and focus */
  "expand"?: boolean;
  /** Distance from the edges in px; phones always use 12px gutters */
  "offset"?: number;
  /** Space between toasts when fanned out, in px */
  "gap"?: number;
  /** Key (KeyboardEvent.key or .code) that moves focus to the newest toast */
  "hotkey"?: string | null;
  /** A 1px line along the bottom that runs down with the timer and stops when it pauses */
  "hairline"?: boolean;
  /** Small close button on hover and focus – always visible on touch screens */
  "closeButton"?: boolean;
  /** Name of the region for screen readers (the hotkey is added) */
  "label"?: string;
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}
export declare const Toaster: React.FC<ToasterProps | (Partial<ToasterProps> & { demo: true })>;
export declare const ToasterRaw: React.FC<ToasterProps>;
export declare const ToasterDemo: React.FC<Partial<ToasterProps>>;
export type ToastId = string | number;
export interface ToastMessage { title: React.ReactNode; description?: React.ReactNode }
export interface ToastOptions { id?: ToastId; description?: React.ReactNode; duration?: number; toaster?: string; icon?: React.ReactNode; action?: { label: string; onClick: (event: React.MouseEvent<HTMLButtonElement>) => void }; onDismiss?: (id: ToastId) => void }
export interface ToastFn {
  (title: React.ReactNode | ToastMessage, options?: ToastOptions): ToastId;
  success: (title: React.ReactNode | ToastMessage, options?: ToastOptions) => ToastId;
  error: (title: React.ReactNode | ToastMessage, options?: ToastOptions) => ToastId;
  info: (title: React.ReactNode | ToastMessage, options?: ToastOptions) => ToastId;
  loading: (title: React.ReactNode | ToastMessage, options?: ToastOptions) => ToastId;
  promise: <T>(promise: Promise<T> | (() => Promise<T>), messages: { loading: React.ReactNode | ToastMessage; success: React.ReactNode | ToastMessage | ((value: T) => React.ReactNode | ToastMessage); error: React.ReactNode | ToastMessage | ((error: unknown) => React.ReactNode | ToastMessage) }, options?: ToastOptions) => Promise<T>;
  dismiss: (id?: ToastId) => void;
}
export declare const toast: ToastFn;
export default Toaster;
