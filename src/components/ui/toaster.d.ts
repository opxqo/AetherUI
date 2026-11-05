import * as React from "react";

export interface ToasterProps {
  /** Corner or edge the stack sits in; new toasts come in from that edge (default: "bottom-right") */
  position?: any;
  /** Positions the stack inside the nearest positioned ancestor instead of the viewport (default: false) */
  inline?: any;
  /** Only shows toasts sent with { toaster: id } – for a second, separate stack */
  id?: any;
  /** Default time on screen in ms; each toast can override it, Infinity keeps it open (default: 4000) */
  duration?: any;
  /** Toasts visible at once; older ones wait (with a paused timer) until there's room (default: 3) */
  visibleToasts?: any;
  /** Always shows the stack fanned out instead of on hover and focus (default: false) */
  expand?: any;
  /** Distance from the edges in px; phones always use 12px gutters (default: 24 (20 inline)) */
  offset?: any;
  /** Space between toasts when fanned out, in px (default: 10) */
  gap?: any;
  /** Key (KeyboardEvent.key or .code) that moves focus to the newest toast (default: "F8") */
  hotkey?: any;
  /** A 1px line along the bottom that runs down with the timer and stops when it pauses (default: true) */
  hairline?: any;
  /** Small close button on hover and focus – always visible on touch screens (default: true) */
  closeButton?: any;
  /** Name of the region for screen readers (the hotkey is added) (default: "Notifications") */
  label?: any;
  /** Extra class on the region */
  className?: any;
  /** Shows a plain toast; also toast.success, toast.error, toast.info and toast.loading. Returns the id */
  "toast(title, options?)"?: any;
  /** A loading toast that turns into success or error; each message is a title, { title, description } or a function of the result */
  "toast.promise(promise, messages, options?)"?: any;
  /** Closes one toast, or all of them without an id */
  "toast.dismiss(id?)"?: any;
  /** Pass an existing id to update that toast in place (the timer restarts, the text crossfades). action.onClick closes the toast unless it calls event.preventDefault() */
  ToastOptions?: any;
  /** Render built-in interactive demo preset when true */
  demo?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * Toaster — Calm toasts from anywhere – a stack that fans out on hover, promise toasts that morph from spinner to check, swipe to dismiss
 */
export declare const Toaster: React.FC<ToasterProps>;
export declare const ToasterRaw: React.FC<ToasterProps>;
export declare const ToasterDemo: React.FC<ToasterProps>;
export declare const toast: React.FC<ToasterProps>;
export default Toaster;
