import{mergeRefs as __aetherRef}from"./dom-props.js";import{pickDOMProps as __aetherDOM}from"./dom-props.js";import{t as e}from"./react-BkAXpnfr.js";import{t}from"./jsx-runtime-CTsRTJUX.js";import"./demo-Be3B1cuN.css";var n=e(),r=t();function i({variant:e=`primary`,size:t=`md`,loading:i=!1,icon:l,iconRight:u,children:p,className:m,disabled:h,onClick:g,onPointerEnter:_,type:v=`button`,ref:y,...b}){let x=typeof p==`string`?p:void 0,S=p!=null&&p!==!1&&p!==``,C=!S&&!!(l||u),w=a.includes(e)?e:`primary`,T=o.includes(t)?t:`md`,E=(0,n.useRef)(null),D=(0,n.useRef)(0),[O,k]=(0,n.useState)(!1);(0,n.useEffect)(()=>k(!0),[]);let A=x??`label`,j=i&&l?`spinner`:d(l),M=d(u),N=`${A}|${j}|${M}`,P=(0,n.useRef)(N);return(0,n.useLayoutEffect)(()=>{let e=E.current;if(!e)return;let t=e.getBoundingClientRect().width,n=D.current,r=P.current!==N;D.current=t,P.current=N,!(!r||!n||Math.abs(n-t)<.5)&&(window.matchMedia(`(prefers-reduced-motion: reduce)`).matches||e.animate([{width:`${n}px`},{width:`${t}px`}],{duration:480,easing:`cubic-bezier(0.25, 1, 0.5, 1)`}));}),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(`style`,{href:`ui-button`,precedence:`default`,children:f}),(0,r.jsxs)(`button`,{...__aetherDOM(b),type:v,className:[`ui-button`,m].filter(Boolean).join(` `),"data-variant":w,"data-size":T,"data-loading":i||void 0,"data-icon-only":C||void 0,"data-ready":O||void 0,ref:__aetherRef(e=>{E.current=e,typeof y==`function`?y(e):y&&(y.current=e);},b.ref),disabled:h,"aria-busy":i||void 0,"aria-disabled":i||void 0,onClick:e=>{if(i){e.preventDefault();return;}g?.(e);},onPointerEnter:e=>{let t=e.currentTarget.querySelector(`.ui-button__label`);t&&x&&!b.title&&(t.title=t.scrollWidth>t.clientWidth+1?x:``),_?.(e);},...b,children:[l&&(0,r.jsx)(`span`,{className:`ui-button__icon`,"aria-hidden":`true`,onErrorCapture:s,children:i?(0,r.jsx)(c,{}):l},`icon-${j}`),S&&(0,r.jsx)(`span`,{className:`ui-button__label`,"data-text":x,dir:`auto`,children:p},`label-${A}`),u&&(0,r.jsx)(`span`,{className:`ui-button__icon`,"aria-hidden":`true`,onErrorCapture:s,children:u},`icon-right-${M}`)]})]});}var a=[`primary`,`secondary`,`ghost`,`destructive`],o=[`sm`,`md`,`lg`],s=e=>{e.target instanceof HTMLImageElement&&(e.target.style.visibility=`hidden`);},c=()=>(0,r.jsxs)(`svg`,{className:`ui-button__spinner`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,children:[(0,r.jsx)(`circle`,{cx:`12`,cy:`12`,r:`8.5`,opacity:.2}),(0,r.jsx)(`path`,{d:`M12 3.5a8.5 8.5 0 0 1 8.5 8.5`})]}),l=new WeakMap(),u=1;function d(e){if(!(0,n.isValidElement)(e)||typeof e.type==`string`)return 0;let t=e.type;return l.has(t)||l.set(t,u++),l.get(t);}var f=`
/* Colors and motion as variables – override them on .ui-button (see Theming in the docs) */
.ui-button {
  --ui-btn-ink: #171717;
  --ui-btn-on-ink: #fafafa;
  --ui-btn-dark-top: #323137;
  --ui-btn-dark-bottom: #201e25;
  --ui-btn-dark-hover-top: #3c3b42;
  --ui-btn-dark-hover-bottom: #29272f;
  --ui-btn-edge-top: #4b4951;
  --ui-btn-edge-mid: #31303a;
  --ui-btn-edge-bottom: #18171b;
  --ui-btn-ring: #0d0d0d;
  --ui-btn-dark-shadow: rgba(0, 0, 0, 0.1);
  --ui-btn-surface: #ffffff;
  --ui-btn-surface-hover: #fafafa;
  --ui-btn-surface-shadow: rgba(0, 0, 0, 0.06);
  --ui-btn-line: #e5e5e5;
  --ui-btn-muted: #737373;
  --ui-btn-hover: #404040;
  --ui-btn-fill: #f0f0f0;
  --ui-btn-shine: rgba(255, 255, 255, 0.82);
  --ui-btn-shine-on-ink: rgba(255, 255, 255, 0.95);
  --ui-btn-danger: #ff0000;
  --ui-btn-danger-bg: #ffe6e9;
  --ui-btn-focus: rgba(23, 23, 23, 0.22);
  --ui-btn-ease: cubic-bezier(0.22, 1, 0.36, 1);
  --ui-btn-load: 650ms;

  --h: 40px;
  --px: 16px;
  --gap: 8px;
  --fs: 14px;
  --icon: 18px;
  --radius: 12px;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--gap);
  height: var(--h);
  padding: 0 var(--px);
  margin: 0;
  border: 1px solid transparent;
  border-radius: var(--radius);
  font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  font-size: var(--fs);
  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.01em;
  max-width: 100%;
  min-width: 0;
  white-space: nowrap;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  transition:
    background-color 160ms ease,
    border-color 160ms ease,
    color 160ms ease,
    box-shadow 160ms ease,
    transform 160ms var(--ui-btn-ease),
    opacity 160ms ease;
}

.ui-button[data-size="sm"] {
  --h: 32px;
  --px: 12px;
  --gap: 6px;
  --fs: 13px;
  --icon: 16px;
  --radius: 10px;
}
.ui-button[data-size="lg"] {
  --h: 48px;
  --px: 20px;
  --gap: 10px;
  --fs: 15px;
  --icon: 20px;
  --radius: 14px;
}
.ui-button[data-icon-only] {
  width: var(--h);
  padding: 0;
}

/* primary: like the send button */
/* primary: a dark gradient with a light edge running down the border and a 1px ring */
.ui-button[data-variant="primary"] {
  background:
    linear-gradient(var(--ui-btn-dark-top), var(--ui-btn-dark-bottom)) padding-box,
    linear-gradient(var(--ui-btn-edge-top), var(--ui-btn-edge-mid), var(--ui-btn-edge-bottom)) border-box;
  color: var(--ui-btn-on-ink);
  box-shadow:
    0 0 0 1px var(--ui-btn-ring),
    0 2px 4px var(--ui-btn-dark-shadow);
}
.ui-button[data-variant="primary"]:hover:not(:disabled) {
  background:
    linear-gradient(var(--ui-btn-dark-hover-top), var(--ui-btn-dark-hover-bottom)) padding-box,
    linear-gradient(var(--ui-btn-edge-top), var(--ui-btn-edge-mid), var(--ui-btn-edge-bottom)) border-box;
}

/* secondary: white with the card outline */
.ui-button[data-variant="secondary"] {
  background: var(--ui-btn-surface);
  border-color: var(--ui-btn-line);
  color: var(--ui-btn-ink);
  box-shadow: 0 1px 2px var(--ui-btn-surface-shadow);
}
.ui-button[data-variant="secondary"]:hover:not(:disabled) {
  background: var(--ui-btn-surface-hover);
}

/* ghost: a muted label, the gray layer appears on hover */
.ui-button[data-variant="ghost"] {
  background: transparent;
  color: var(--ui-btn-muted);
}
.ui-button[data-variant="ghost"]:hover:not(:disabled) {
  background: var(--ui-btn-fill);
  color: var(--ui-btn-hover);
}

/* destructive: red label on a light red fill */
.ui-button[data-variant="destructive"] {
  background: var(--ui-btn-danger-bg);
  color: var(--ui-btn-danger);
}
.ui-button[data-variant="destructive"]:hover:not(:disabled) {
  background: color-mix(in srgb, var(--ui-btn-danger-bg) 88%, var(--ui-btn-danger));
}
.ui-button[data-variant="destructive"] .ui-button__label::after {
  --ui-btn-shine: rgba(255, 255, 255, 0.82);
}

.ui-button:active:not(:disabled):not([data-loading]) {
  transform: scale(0.97);
}
.ui-button:focus-visible {
  outline: 2px solid var(--ui-btn-focus);
  outline-offset: 2px;
}
.ui-button:disabled {
  opacity: 0.4;
  cursor: default;
}
.ui-button[data-loading] {
  cursor: default;
}

.ui-button__icon {
  display: grid;
  place-items: center;
  flex: none;
  width: var(--icon);
  height: var(--icon);
}
.ui-button__icon {
  overflow: hidden;
}
.ui-button__icon > svg,
.ui-button__icon > img {
  display: block;
  width: 100%;
  height: 100%;
}
.ui-button__icon > img {
  object-fit: contain;
}

/* Morph: the button clips while its width glides; changed parts blur in */
.ui-button {
  overflow: clip;
}
.ui-button[data-ready] .ui-button__label {
  animation: ui-button-label-in 480ms cubic-bezier(0.25, 1, 0.5, 1) both;
}
.ui-button[data-ready] .ui-button__icon {
  animation: ui-button-icon-in 520ms cubic-bezier(0.25, 1, 0.5, 1) both;
}

/* Loading: a band sweeps across a copy of the label, like "Request approval" in the Chat Composer */
/* A label too long for its parent ends in "…" – the full text shows on hover */
.ui-button__label {
  position: relative;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  /* Room for descenders now that the label clips */
  line-height: normal;
}
.ui-button__label::after {
  content: attr(data-text);
  content: attr(data-text) / "";
  position: absolute;
  inset: 0;
  white-space: nowrap;
  color: transparent;
  background: linear-gradient(90deg, transparent 38%, var(--ui-btn-shine) 50%, transparent 62%) 100% 0 / 300% 100%
    no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  opacity: 0;
  pointer-events: none;
}
.ui-button[data-variant="primary"] .ui-button__label::after {
  --ui-btn-shine: var(--ui-btn-shine-on-ink);
}
.ui-button[data-loading] .ui-button__label {
  color: color-mix(in srgb, currentColor 55%, transparent);
}
.ui-button[data-loading] .ui-button__label::after {
  opacity: 1;
  animation: ui-button-sweep calc(var(--ui-btn-load) * 1.6) linear infinite;
}
.ui-button__spinner {
  animation: ui-button-spin 900ms linear infinite;
}

@keyframes ui-button-label-in {
  from {
    opacity: 0;
    filter: blur(3px);
    transform: translateY(25%);
  }
}
@keyframes ui-button-icon-in {
  from {
    opacity: 0;
    filter: blur(2px);
    transform: scale(0.7);
  }
}

@keyframes ui-button-spin {
  to {
    transform: rotate(1turn);
  }
}

@keyframes ui-button-sweep {
  from {
    background-position: 100% 0;
  }
  to {
    background-position: 0% 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .ui-button[data-ready] .ui-button__label,
  .ui-button[data-ready] .ui-button__icon {
    animation: none;
  }
  .ui-button {
    transition-duration: 1ms;
  }
  .ui-button[data-loading] .ui-button__label::after {
    animation: none;
    opacity: 0;
  }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-button {
  /* primary inverts: a light gradient with dark text */
  --ui-btn-on-ink: #121213;
  --ui-btn-dark-top: #f4f4f5;
  --ui-btn-dark-bottom: #e4e4e7;
  --ui-btn-dark-hover-top: #ffffff;
  --ui-btn-dark-hover-bottom: #ececef;
  --ui-btn-edge-top: #ffffff;
  --ui-btn-edge-mid: #ececef;
  --ui-btn-edge-bottom: #d4d4d8;
  --ui-btn-ring: rgba(0, 0, 0, 0.6);
  --ui-btn-dark-shadow: rgba(0, 0, 0, 0.4);
  --ui-btn-shine-on-ink: rgba(255, 255, 255, 0.9);

  --ui-btn-ink: #ededed;
  --ui-btn-surface: #232326;
  --ui-btn-surface-hover: #2a2a2d;
  --ui-btn-surface-shadow: rgba(0, 0, 0, 0.4);
  --ui-btn-line: rgba(255, 255, 255, 0.1);
  --ui-btn-muted: #8f8f8f;
  --ui-btn-hover: #ededed;
  --ui-btn-fill: rgba(255, 255, 255, 0.06);
  --ui-btn-shine: rgba(237, 237, 237, 0.95);
  --ui-btn-danger: #ff6b6b;
  --ui-btn-danger-bg: rgba(255, 64, 64, 0.16);
  --ui-btn-focus: rgba(237, 237, 237, 0.3);
}
`,p={fill:`none`,stroke:`currentColor`,strokeWidth:1.75,strokeLinecap:`round`,strokeLinejoin:`round`},m=()=>(0,r.jsxs)(`svg`,{viewBox:`0 0 24 24`,...p,children:[(0,r.jsx)(`path`,{d:`M12 5.5V19`}),(0,r.jsx)(`path`,{d:`M18 11s-4.42-6-6-6-6 6-6 6`})]}),h=()=>(0,r.jsxs)(`svg`,{viewBox:`0 0 24 24`,...p,children:[(0,r.jsx)(`path`,{d:`M18.5 12H5`}),(0,r.jsx)(`path`,{d:`M13 18s6-4.42 6-6-6-6-6-6`})]}),g=()=>(0,r.jsx)(`svg`,{viewBox:`0 0 24 24`,...p,children:(0,r.jsx)(`path`,{d:`M12 4v16M20 12H4`})}),_=()=>(0,r.jsx)(`svg`,{viewBox:`0 0 24 24`,...p,strokeWidth:2.5,children:(0,r.jsx)(`path`,{d:`M6 12h.01M12 12h.01M18 12h.01`})}),v=()=>(0,r.jsxs)(`svg`,{viewBox:`0 0 24 24`,...p,children:[(0,r.jsx)(`path`,{d:`M7.5 14.5c0-3.3 0-4.95 1.03-5.97C9.55 7.5 11.2 7.5 14.5 7.5s4.95 0 5.97 1.03c1.03 1.02 1.03 2.67 1.03 5.97s0 4.95-1.03 5.97c-1.02 1.03-2.67 1.03-5.97 1.03s-4.95 0-5.97-1.03C7.5 19.45 7.5 17.8 7.5 14.5Z`}),(0,r.jsx)(`path`,{d:`M7.5 16.5c-1.4 0-2.1 0-2.66-.2a3 3 0 0 1-2.14-2.14c-.2-.57-.2-1.27-.2-2.66v-2c0-3.3 0-4.95 1.03-5.97C4.55 2.5 6.2 2.5 9.5 2.5h2c1.4 0 2.1 0 2.66.2a3 3 0 0 1 2.14 2.14c.2.57.2 1.27.2 2.66`})]}),y=()=>(0,r.jsxs)(`svg`,{viewBox:`0 0 24 24`,...p,children:[(0,r.jsx)(`path`,{d:`M16.5 7.5S13.19 3 12 3 7.5 7.5 7.5 7.5M12 4v11`}),(0,r.jsx)(`path`,{d:`M3 16.5v1.5A3 3 0 0 0 6 21h12a3 3 0 0 0 3-3v-1.5`})]}),b=()=>(0,r.jsxs)(`svg`,{viewBox:`0 0 24 24`,...p,children:[(0,r.jsx)(`path`,{d:`m19.5 5.5-.62 10.03c-.16 2.56-.24 3.84-.88 4.76a4 4 0 0 1-1.2 1.13C15.84 22 14.56 22 12 22s-3.86 0-4.82-.59a4 4 0 0 1-1.2-1.13c-.64-.92-.72-2.2-.88-4.76L4.5 5.5`}),(0,r.jsx)(`path`,{d:`M3 5.5h18M16.06 5.5l-.69-1.41c-.45-.94-.68-1.4-1.07-1.7a2 2 0 0 0-.27-.17C13.6 2 13.07 2 12.03 2c-1.06 0-1.6 0-2.04.23a2 2 0 0 0-.27.18c-.4.3-.62.79-1.06 1.76L8.05 5.5M9.5 16.5v-6M14.5 16.5v-6`})]}),x=()=>(0,r.jsx)(`svg`,{viewBox:`0 0 24 24`,...p,children:(0,r.jsx)(`path`,{d:`M5 14l3.5 3.5L19 6.5`})});function S(e=1600){let[t,r]=(0,n.useState)(!1),i=(0,n.useRef)(void 0);return(0,n.useEffect)(()=>()=>clearTimeout(i.current),[]),[t,()=>{clearTimeout(i.current),r(!0),i.current=window.setTimeout(()=>r(!1),e);}];}function C({children:e}){let t=(0,n.useRef)(null),[i,a]=(0,n.useState)(0);return(0,n.useLayoutEffect)(()=>{let e=t.current?.firstElementChild;if(!e)return;let n=e.getBoundingClientRect().width;n>i&&a(n);}),(0,r.jsx)(`span`,{ref:t,className:`button-demo__slot`,style:{minWidth:i||void 0},children:e});}function w(){let[e,t]=(0,n.useState)(`idle`);return(0,n.useEffect)(()=>{if(e!==`loading`)return;let n=window.setTimeout(()=>t(`done`),1600);return()=>clearTimeout(n);},[e]),(0,r.jsxs)(`div`,{className:`button-demo__row button-demo__compact`,children:[(0,r.jsx)(C,{children:(0,r.jsx)(i,{variant:`ghost`,onClick:()=>t(`idle`),children:`Cancel`})}),(0,r.jsx)(C,{children:(0,r.jsx)(i,{variant:`secondary`,icon:e===`done`?(0,r.jsx)(x,{}):(0,r.jsx)(y,{}),loading:e===`loading`,onClick:()=>t(e=>e===`idle`?`loading`:e),children:e===`done`?`Done`:`Upload`})}),(0,r.jsx)(C,{children:(0,r.jsx)(i,{iconRight:(0,r.jsx)(m,{}),children:`Send`})})]});}function T(){let[e,t]=S(),[a,o]=S(),[s,c]=(0,n.useState)(`idle`);return(0,n.useEffect)(()=>{if(s!==`loading`)return;let e=window.setTimeout(()=>c(`done`),1800);return()=>clearTimeout(e);},[s]),(0,r.jsxs)(`div`,{className:`button-demo__showcase`,children:[(0,r.jsxs)(`section`,{children:[(0,r.jsx)(`h4`,{children:`Styles`}),(0,r.jsxs)(`div`,{className:`button-demo__row`,children:[(0,r.jsx)(C,{children:(0,r.jsx)(i,{children:`Save changes`})}),(0,r.jsx)(C,{children:(0,r.jsx)(i,{variant:`secondary`,children:`Secondary`})}),(0,r.jsx)(C,{children:(0,r.jsx)(i,{variant:`ghost`,children:`Ghost`})}),(0,r.jsx)(C,{children:(0,r.jsx)(i,{variant:`destructive`,icon:(0,r.jsx)(b,{}),children:`Delete`})})]})]}),(0,r.jsxs)(`section`,{children:[(0,r.jsx)(`h4`,{children:`Icons and sizes`}),(0,r.jsxs)(`div`,{className:`button-demo__row`,children:[(0,r.jsx)(C,{children:(0,r.jsx)(i,{variant:`secondary`,size:`sm`,icon:(0,r.jsx)(g,{}),children:`Add item`})}),(0,r.jsx)(C,{children:(0,r.jsx)(i,{iconRight:(0,r.jsx)(h,{}),children:`Continue`})}),(0,r.jsx)(C,{children:(0,r.jsx)(i,{variant:`ghost`,icon:(0,r.jsx)(_,{}),"aria-label":`More options`})}),(0,r.jsx)(C,{children:(0,r.jsx)(i,{variant:`secondary`,size:`lg`,children:`Large`})})]})]}),(0,r.jsxs)(`section`,{children:[(0,r.jsx)(`h4`,{children:`Feedback and states`}),(0,r.jsxs)(`div`,{className:`button-demo__row`,children:[(0,r.jsx)(C,{children:(0,r.jsx)(i,{variant:`secondary`,icon:e?(0,r.jsx)(x,{}):(0,r.jsx)(v,{}),onClick:t,children:e?`Copied`:`Copy link`})}),(0,r.jsx)(C,{children:(0,r.jsx)(i,{variant:`secondary`,icon:a?(0,r.jsx)(x,{}):(0,r.jsx)(v,{}),"aria-label":a?`Copied`:`Copy`,onClick:o})}),(0,r.jsx)(C,{children:(0,r.jsx)(i,{variant:`secondary`,icon:s===`done`?(0,r.jsx)(x,{}):(0,r.jsx)(y,{}),loading:s===`loading`,onClick:()=>c(e=>e===`loading`?e:`loading`),children:`Upload file`})}),(0,r.jsx)(C,{children:(0,r.jsx)(i,{variant:`secondary`,disabled:!0,children:`Disabled`})})]}),(0,r.jsx)(`p`,{className:`button-demo__status`,"aria-live":`polite`,children:s===`loading`?`Uploading…`:s===`done`?`Upload complete`:` `})]})]});}function E(){return(0,r.jsxs)(`div`,{className:`button-demo`,children:[(0,r.jsx)(w,{}),(0,r.jsx)(T,{})]});}export{E as default,i as __InnerComponent};
