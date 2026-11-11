import{t as e}from"./react-BkAXpnfr.js";import{t}from"./jsx-runtime-CTsRTJUX.js";var n=e(),r=t();function i({label:e,hint:t,error:i,optional:l=!1,counter:u=!1,minRows:d=3,maxRows:f=10,expandable:p=!1,expandedRows:m=16,expanded:h,onExpandedChange:g,onSubmitShortcut:_,className:v,inputClassName:y,id:b,value:x,defaultValue:S,onChange:C,onKeyDown:w,disabled:T,readOnly:E,maxLength:D,ref:O,"aria-describedby":k,...A}){let j=(0,n.useId)(),M=b??`${j}-input`,N=`${j}-message`,P=`${j}-count`,F=(0,n.useRef)(null),[I,L]=(0,n.useState)(String(S??``)),R=x==null?I:String(x),[z,B]=(0,n.useState)(!1),V=p&&(h??z),[H,U]=(0,n.useState)(!1),W=(0,n.useRef)(0);(0,n.useEffect)(()=>()=>window.clearTimeout(W.current),[]);let G=!!i||A[`aria-invalid`]===!0||A[`aria-invalid`]===`true`,K=a(i)?i:a(t)?t:null,q=u&&typeof D==`number`,J=e==null&&!A[`aria-label`]&&!A[`aria-labelledby`]&&typeof A.placeholder==`string`?A.placeholder:void 0,Y=()=>{let e=F.current;if(!e)return;let t=getComputedStyle(e),n=parseFloat(t.lineHeight)||20,r=parseFloat(t.paddingTop)+parseFloat(t.paddingBottom),i=(V?Math.max(m,d):d)*n+r,a=(V?Math.max(m,f):Math.max(f,d))*n+r,o=e.style.height;e.style.height=`auto`;let s=e.scrollHeight,c=Math.min(Math.max(s,i),a);e.style.height=o,e.offsetHeight,e.style.height=`${c}px`,e.style.overflowY=s>a+1?`auto`:`hidden`};(0,n.useLayoutEffect)(Y,[R,V,d,f,m]),(0,n.useEffect)(()=>{let e=F.current;if(!e||typeof ResizeObserver>`u`)return;let t=e.clientWidth,n=new ResizeObserver(()=>{e.clientWidth!==t&&(t=e.clientWidth,Y())}),r=window.matchMedia(`(pointer: coarse)`);return r.addEventListener(`change`,Y),n.observe(e),()=>{n.disconnect(),r.removeEventListener(`change`,Y)}}),(0,n.useEffect)(()=>{let e=F.current?.form;if(!e||x!==void 0)return;let t=()=>window.setTimeout(()=>L(F.current?.value??``));return e.addEventListener(`reset`,t),()=>e.removeEventListener(`reset`,t)},[x]);let X=()=>{let e=!V;U(!0),window.clearTimeout(W.current),W.current=window.setTimeout(()=>U(!1),320),h===void 0&&B(e),g?.(e)};return(0,r.jsxs)(`div`,{className:[`ui-tac`,v].filter(Boolean).join(` `),"data-invalid":G||void 0,"data-disabled":T||void 0,"data-readonly":E||void 0,"data-expandable":p||void 0,children:[(0,r.jsx)(`style`,{href:`ui-text-area-clean`,precedence:`default`,children:c}),e!=null&&(0,r.jsxs)(`div`,{className:`ui-tac__head`,children:[(0,r.jsx)(`label`,{className:`ui-tac__label`,htmlFor:M,children:e}),l&&(0,r.jsx)(`span`,{className:`ui-tac__optional`,children:`Optional`})]}),(0,r.jsxs)(`div`,{className:`ui-tac__box`,children:[(0,r.jsx)(`textarea`,{...A,ref:e=>{F.current=e,typeof O==`function`?O(e):O&&(O.current=e)},id:M,className:[`ui-tac__input`,y].filter(Boolean).join(` `),rows:d,value:x,defaultValue:S,disabled:T,readOnly:E,maxLength:D,dir:A.dir??`auto`,"aria-label":A[`aria-label`]??J,"aria-invalid":G||void 0,"aria-describedby":[k,K?N:null,q?P:null].filter(Boolean).join(` `)||void 0,"aria-keyshortcuts":_?`Meta+Enter Control+Enter`:A[`aria-keyshortcuts`],"data-gliding":H||void 0,onChange:e=>{x===void 0&&L(e.target.value),C?.(e)},onKeyDown:e=>{_&&e.key===`Enter`&&(e.metaKey||e.ctrlKey)&&!e.nativeEvent.isComposing&&(e.preventDefault(),_(e.currentTarget.value)),w?.(e)}}),p&&!T&&(0,r.jsx)(`button`,{type:`button`,className:`ui-tac__expand`,"aria-label":V?`Less room`:`More room`,"aria-pressed":V,"aria-controls":M,onClick:X,children:(0,r.jsx)(`span`,{className:`ui-tac__swap`,children:V?(0,r.jsx)(s,{}):(0,r.jsx)(o,{})},V?`less`:`more`)})]}),(K||q)&&(0,r.jsxs)(`div`,{className:`ui-tac__foot`,children:[(0,r.jsx)(`p`,{className:`ui-tac__message`,id:N,dir:`auto`,"aria-live":a(i)?`polite`:void 0,children:K},a(i)?`error`:`hint`),q&&(0,r.jsxs)(`span`,{className:`ui-tac__count`,id:P,"data-full":R.length===D||void 0,"data-over":R.length>D||void 0,children:[R.length.toLocaleString(),`/`,D.toLocaleString()]})]})]})}var a=e=>e!=null&&typeof e!=`boolean`&&e!==``;function o(){return(0,r.jsx)(`svg`,{viewBox:`0 0 24 24`,width:`16`,height:`16`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.6`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:(0,r.jsx)(`path`,{d:`M16.5 3h4.5v4.5M21 3l-6 6M7.5 21H3v-4.5M3 21l6-6`})})}function s(){return(0,r.jsx)(`svg`,{viewBox:`0 0 24 24`,width:`16`,height:`16`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.6`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:(0,r.jsx)(`path`,{d:`M14.5 5v4.5H19M14.5 9.5 20 4M9.5 19v-4.5H5M9.5 14.5 4 20`})})}var c=`
/* Colors and motion as variables – override them on .ui-tac (see Theming in the docs) */
.ui-tac {
  --ui-tac-title: var(--aui-ink, rgba(0, 0, 0, 0.88));
  --ui-tac-ink: var(--aui-ink, rgba(0, 0, 0, 0.88));
  --ui-tac-muted: var(--aui-muted, rgba(0, 0, 0, 0.61));
  --ui-tac-subtle: var(--aui-muted, rgba(0, 0, 0, 0.45));
  --ui-tac-faint: var(--aui-placeholder, rgba(0, 0, 0, 0.3));
  --ui-tac-icon: var(--aui-muted, rgba(0, 0, 0, 0.447));
  --ui-tac-surface: var(--aui-surface, #ffffff);
  --ui-tac-wash: rgba(0, 0, 0, 0.04);
  --ui-tac-readonly: rgba(0, 0, 0, 0.02);
  --ui-tac-shadow: 0 0 0 0.5px var(--aui-border, rgba(0, 0, 0, 0.08)), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --ui-tac-shadow-hover: 0 0 0 0.5px var(--aui-border-strong, rgba(0, 0, 0, 0.13)), 0 1px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --ui-tac-shadow-focus: 0 0 0 1px var(--aui-border-strong, rgba(0, 0, 0, 0.28)), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --ui-tac-danger: var(--aui-danger, #c4320a);
  --ui-tac-danger-edge: color-mix(in srgb, var(--aui-red, #f04438) 55%, transparent);
  --ui-tac-danger-edge-focus: rgba(229, 72, 77, 0.8);
  --ui-tac-focus: var(--aui-focus, rgba(0, 96, 226, 0.7));
  --ui-tac-ease: cubic-bezier(0.22, 1, 0.36, 1);

  --fs: 13px;
  --lh: 20px;

  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
  font-family: var(--aui-font, "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif);
  font-size: 13px;
  line-height: 20px;
  color: var(--ui-tac-ink);
  -webkit-font-smoothing: antialiased;
}
/* Touch screens: 16px text, so iOS doesn't zoom in on focus */
@media (pointer: coarse) {
  .ui-tac { --fs: 16px; --lh: 24px; }
}

.ui-tac__head { display: flex; align-items: baseline; gap: 6px; min-width: 0; }
.ui-tac__label { min-width: 0; font-weight: 500; color: var(--ui-tac-title); overflow-wrap: anywhere; cursor: default; }
.ui-tac__optional { flex: none; font-size: 12px; line-height: 16px; color: var(--ui-tac-subtle); }

/* The box: white, a hairline shadow as its edge; hover and focus only make that edge firmer */
.ui-tac__box {
  position: relative;
  display: flex;
  min-width: 0;
  border-radius: var(--aui-radius, 8px);
  background: var(--ui-tac-surface);
  box-shadow: var(--ui-tac-shadow);
  cursor: text;
  transition: box-shadow 140ms ease, background-color 140ms ease;
}
.ui-tac__box:hover { box-shadow: var(--ui-tac-shadow-hover); }
.ui-tac__box:focus-within { box-shadow: var(--ui-tac-shadow-focus); }
.ui-tac[data-invalid] .ui-tac__box { box-shadow: 0 0 0 1px var(--ui-tac-danger-edge), 0 1px 2px 0 rgba(0, 0, 0, 0.05); animation: ui-tac-nudge 320ms var(--ui-tac-ease); }
.ui-tac[data-invalid] .ui-tac__box:focus-within { box-shadow: 0 0 0 1px var(--ui-tac-danger-edge-focus), 0 1px 2px 0 rgba(0, 0, 0, 0.05); }
.ui-tac[data-readonly] .ui-tac__box { background: var(--ui-tac-readonly); box-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.08); cursor: default; }
.ui-tac[data-disabled] .ui-tac__box { background: var(--ui-tac-readonly); box-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06); cursor: not-allowed; }
.ui-tac[data-disabled] { opacity: 0.55; }

.ui-tac__input {
  display: block;
  flex: 1;
  box-sizing: border-box;
  width: 100%;
  min-width: 0;
  margin: 0;
  padding: 7px 10px;
  border: 0;
  border-radius: inherit;
  outline: 0;
  background: transparent;
  font: inherit;
  font-size: var(--fs);
  line-height: var(--lh);
  color: var(--ui-tac-ink);
  overflow-wrap: anywhere;
  resize: none;
  overflow-y: hidden;
  scrollbar-width: thin;
  -webkit-appearance: none;
  appearance: none;
}
/* The corner button keeps clear of the text */
.ui-tac[data-expandable] .ui-tac__input { padding-inline-end: 36px; }
.ui-tac__input::placeholder { color: var(--ui-tac-faint); opacity: 1; }
.ui-tac__input:disabled { cursor: not-allowed; }
.ui-tac__input[data-gliding] { transition: height 300ms var(--ui-tac-ease); }

/* More room: a small ghost button in the top corner */
.ui-tac__expand {
  position: absolute;
  top: 4px;
  inset-inline-end: 4px;
  display: grid;
  place-items: center;
  width: 26px;
  height: 26px;
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: 5px;
  background: transparent;
  color: var(--ui-tac-icon);
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: background-color 140ms ease, color 140ms ease;
}
.ui-tac__expand:hover { background: var(--ui-tac-wash); color: var(--ui-tac-ink); }
.ui-tac__expand:focus-visible { outline: 2px solid var(--ui-tac-focus); outline-offset: -2px; }
.ui-tac__expand svg { display: block; }
.ui-tac__swap { display: grid; animation: ui-tac-swap 280ms var(--ui-tac-ease); }
@media (pointer: coarse) {
  .ui-tac__expand { width: 32px; height: 32px; }
  .ui-tac__expand::before { content: ""; position: absolute; inset: -4px; }
  .ui-tac[data-expandable] .ui-tac__input { padding-inline-end: 42px; }
}

/* Under the field: the hint, or the error in its place, and the count */
.ui-tac__foot { display: flex; align-items: flex-start; gap: 12px; min-width: 0; }
.ui-tac__message {
  flex: 1;
  min-width: 0;
  margin: 0;
  font-size: 12px;
  line-height: 16px;
  color: var(--ui-tac-subtle);
  overflow-wrap: anywhere;
  animation: ui-tac-message 260ms var(--ui-tac-ease);
}
.ui-tac[data-invalid] .ui-tac__message { color: var(--ui-tac-danger); }
.ui-tac__count { flex: none; margin-left: auto; font-size: 12px; line-height: 16px; font-variant-numeric: tabular-nums; color: var(--ui-tac-faint); transition: color 140ms ease; }
.ui-tac__count[data-full] { color: var(--ui-tac-muted); }
.ui-tac__count[data-over] { color: var(--ui-tac-danger); }

@keyframes ui-tac-nudge {
  30% { transform: translateX(-3px); }
  65% { transform: translateX(2px); }
}
@keyframes ui-tac-message {
  from { opacity: 0; transform: translateY(-3px); filter: blur(2px); }
}
@keyframes ui-tac-swap {
  from { opacity: 0; transform: scale(0.6); filter: blur(2px); }
}

@media (prefers-reduced-motion: reduce) {
  .ui-tac *, .ui-tac[data-invalid] .ui-tac__box { animation-duration: 1ms !important; }
  .ui-tac__box, .ui-tac__input[data-gliding] { transition-duration: 1ms; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-tac {
  --ui-tac-title: var(--aui-ink, rgba(255, 255, 255, 0.92));
  --ui-tac-ink: var(--aui-ink, rgba(255, 255, 255, 0.9));
  --ui-tac-muted: var(--aui-muted, rgba(255, 255, 255, 0.62));
  --ui-tac-subtle: var(--aui-muted, rgba(255, 255, 255, 0.46));
  --ui-tac-faint: var(--aui-placeholder, rgba(255, 255, 255, 0.3));
  --ui-tac-icon: var(--aui-muted, rgba(255, 255, 255, 0.5));
  --ui-tac-surface: var(--aui-surface, #1c1c1e);
  --ui-tac-wash: rgba(255, 255, 255, 0.07);
  --ui-tac-readonly: rgba(255, 255, 255, 0.03);
  --ui-tac-shadow: 0 0 0 0.5px var(--aui-border, rgba(255, 255, 255, 0.14)), 0 1px 2px 0 rgba(0, 0, 0, 0.4);
  --ui-tac-shadow-hover: 0 0 0 0.5px var(--aui-border-strong, rgba(255, 255, 255, 0.2)), 0 1px 2px 0 rgba(0, 0, 0, 0.4);
  --ui-tac-shadow-focus: 0 0 0 1px var(--aui-border-strong, rgba(255, 255, 255, 0.3)), 0 1px 2px 0 rgba(0, 0, 0, 0.4);
  --ui-tac-danger: var(--aui-danger, #ff8a7a);
  --ui-tac-danger-edge: color-mix(in srgb, var(--aui-red, #ff6b5f) 50%, transparent);
  --ui-tac-danger-edge-focus: rgba(255, 99, 105, 0.75);
  --ui-tac-focus: var(--aui-focus, rgba(77, 141, 255, 0.8));
}
:where(.dark, [data-theme="dark"]) .ui-tac[data-readonly] .ui-tac__box,
:where(.dark, [data-theme="dark"]) .ui-tac[data-disabled] .ui-tac__box { box-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.12); }
`;export{i as t};