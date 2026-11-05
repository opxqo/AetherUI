import * as React from "react";

export interface ToasterProps {
  /** Corner or edge the stack sits in; new toasts come in from that edge (default: "bottom-right") */
  position?: "top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right";
  /** Positions the stack inside the nearest positioned ancestor instead of the viewport (default: false) */
  inline?: boolean;
  /** Only shows toasts sent with { toaster: id } – for a second, separate stack */
  id?: string;
  /** Default time on screen in ms; each toast can override it, Infinity keeps it open (default: 4000) */
  duration?: number;
  /** Toasts visible at once; older ones wait (with a paused timer) until there's room (default: 3) */
  visibleToasts?: number;
  /** Always shows the stack fanned out instead of on hover and focus (default: false) */
  expand?: boolean;
  /** Distance from the edges in px; phones always use 12px gutters (default: 24 (20 inline)) */
  offset?: number;
  /** Space between toasts when fanned out, in px (default: 10) */
  gap?: number;
  /** Key (KeyboardEvent.key or .code) that moves focus to the newest toast (default: "F8") */
  hotkey?: string | null;
  /** A 1px line along the bottom that runs down with the timer and stops when it pauses (default: true) */
  hairline?: boolean;
  /** Small close button on hover and focus – always visible on touch screens (default: true) */
  closeButton?: boolean;
  /** Name of the region for screen readers (the hotkey is added) (default: "Notifications") */
  label?: string;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

export interface ToastOptions {
  id?: string | number;
  description?: React.ReactNode;
  duration?: number;
  toaster?: string;
  action?: { label: string; onClick: (event: React.MouseEvent<HTMLButtonElement>) => void };
  [key: string]: any;
}

export interface ToastFn {
  (title: React.ReactNode, options?: ToastOptions): string | number;
  success: (title: React.ReactNode, options?: ToastOptions) => string | number;
  error: (title: React.ReactNode, options?: ToastOptions) => string | number;
  info: (title: React.ReactNode, options?: ToastOptions) => string | number;
  loading: (title: React.ReactNode, options?: ToastOptions) => string | number;
  promise: <T>(promise: Promise<T> | (() => Promise<T>), messages: { loading: React.ReactNode; success: React.ReactNode | ((data: T) => React.ReactNode); error: React.ReactNode | ((err: unknown) => React.ReactNode) }, options?: ToastOptions) => Promise<T>;
  dismiss: (id?: string | number) => void;
}

export declare const toast: ToastFn;

/**
 * Toaster — Calm toasts from anywhere – a stack that fans out on hover, promise toasts that morph from spinner to check, swipe to dismiss
 */
export declare const Toaster: React.FC<ToasterProps>;
export declare const ToasterRaw: React.FC<ToasterProps>;
export declare const ToasterDemo: React.FC<ToasterProps>;

export default Toaster;
