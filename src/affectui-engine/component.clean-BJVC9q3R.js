import{t as e}from"./react-BkAXpnfr.js";import{t}from"./jsx-runtime-CTsRTJUX.js";var n=e(),r=t();function i({label:e,hint:t,error:i,prefix:f,suffix:p,size:m=`md`,optional:h=!1,clearable:g=!1,copyable:_=!1,counter:v=!1,onClear:y,onKeyDown:b,className:x,inputClassName:S,id:C,type:w=`text`,value:T,defaultValue:E,onChange:D,disabled:O,readOnly:k,maxLength:A,ref:j,"aria-describedby":M,...N}){let P=(0,n.useId)(),F=C??`${P}-input`,I=`${P}-message`,L=`${P}-count`,R=(0,n.useRef)(null),[z,B]=(0,n.useState)(String(E??``)),V=T==null?z:String(T),H=w===`password`,[U,W]=(0,n.useState)(!1),[G,K]=(0,n.useState)(!1),q=(0,n.useRef)(0);(0,n.useEffect)(()=>()=>window.clearTimeout(q.current),[]);let J=!!i||N[`aria-invalid`]===!0||N[`aria-invalid`]===`true`,Y=o(i)?i:o(t)?t:null,X=v&&typeof A==`number`,Z=e==null&&!N[`aria-label`]&&!N[`aria-labelledby`]&&typeof N.placeholder==`string`?N.placeholder:void 0;(0,n.useEffect)(()=>{let e=R.current?.form;if(!e||T!==void 0)return;let t=()=>window.setTimeout(()=>B(R.current?.value??``));return e.addEventListener(`reset`,t),()=>e.removeEventListener(`reset`,t)},[T]);let Q=g&&!O&&!k&&V.length>0,te=a.includes(m)?m:`md`,$=()=>{let e=R.current;e&&(Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,`value`)?.set?.call(e,``),e.dispatchEvent(new Event(`input`,{bubbles:!0})),e.focus(),y?.())},ne=async()=>{try{await navigator.clipboard.writeText(V)}catch{R.current?.select();return}K(!0),window.clearTimeout(q.current),q.current=window.setTimeout(()=>K(!1),1600)};return(0,r.jsxs)(`div`,{className:[`ui-tfc`,x].filter(Boolean).join(` `),"data-size":te,"data-invalid":J||void 0,"data-disabled":O||void 0,"data-readonly":k||void 0,children:[(0,r.jsx)(`style`,{href:`ui-text-field-clean`,precedence:`default`,children:d}),e!=null&&(0,r.jsxs)(`div`,{className:`ui-tfc__head`,children:[(0,r.jsx)(`label`,{className:`ui-tfc__label`,htmlFor:F,children:e}),h&&(0,r.jsx)(`span`,{className:`ui-tfc__optional`,children:`Optional`})]}),(0,r.jsxs)(`div`,{className:`ui-tfc__box`,onPointerDown:e=>{e.target===R.current||e.target.closest(`button`)||(e.preventDefault(),R.current?.focus())},children:[f!=null&&(0,r.jsx)(`span`,{className:`ui-tfc__affix`,"data-side":`start`,children:typeof f==`string`?(0,r.jsx)(`span`,{className:`ui-tfc__affix-text`,children:f}):f}),(0,r.jsx)(`input`,{...N,ref:e=>{R.current=e,typeof j==`function`?j(e):j&&(j.current=e)},id:F,className:[`ui-tfc__input`,S].filter(Boolean).join(` `),type:H&&U?`text`:w,value:T,defaultValue:E,disabled:O,readOnly:k,maxLength:A,"aria-label":N[`aria-label`]??Z,"aria-invalid":J||void 0,"aria-describedby":[M,Y?I:null,X?L:null].filter(Boolean).join(` `)||void 0,dir:N.dir??`auto`,"data-revealed":H?U?`true`:`false`:void 0,onKeyDown:e=>{e.key===`Escape`&&Q&&(e.preventDefault(),$()),b?.(e)},onChange:e=>{T===void 0&&B(e.target.value),D?.(e)}}),p!=null&&(0,r.jsx)(`span`,{className:`ui-tfc__affix`,"data-side":`end`,children:p}),Q&&(0,r.jsx)(`button`,{type:`button`,className:`ui-tfc__action`,"aria-label":`Clear`,tabIndex:-1,onClick:$,children:(0,r.jsx)(ee,{})}),H&&!O&&(0,r.jsx)(`button`,{type:`button`,className:`ui-tfc__action`,"aria-label":U?`Hide password`:`Show password`,"aria-pressed":U,onClick:()=>W(e=>!e),children:(0,r.jsx)(`span`,{className:`ui-tfc__swap`,children:U?(0,r.jsx)(c,{}):(0,r.jsx)(s,{})},U?`hide`:`show`)}),_&&(0,r.jsx)(`button`,{type:`button`,className:`ui-tfc__action`,"data-copied":G||void 0,"aria-label":G?`Copied`:`Copy`,onClick:ne,disabled:O||!V,children:(0,r.jsx)(`span`,{className:`ui-tfc__swap`,children:G?(0,r.jsx)(u,{}):(0,r.jsx)(l,{})},G?`done`:`copy`)}),_&&(0,r.jsx)(`span`,{className:`ui-tfc__sr`,role:`status`,children:G?`Copied`:``})]}),(Y||X)&&(0,r.jsxs)(`div`,{className:`ui-tfc__foot`,children:[(0,r.jsx)(`p`,{className:`ui-tfc__message`,id:I,dir:`auto`,"aria-live":o(i)?`polite`:void 0,children:Y},o(i)?`error`:`hint`),X&&(0,r.jsxs)(`span`,{className:`ui-tfc__count`,id:L,"data-full":V.length===A||void 0,"data-over":V.length>A||void 0,children:[V.length,`/`,A]})]})]})}var a=[`sm`,`md`,`lg`],o=e=>e!=null&&typeof e!=`boolean`&&e!==``;function ee(){return(0,r.jsx)(`svg`,{viewBox:`0 0 24 24`,width:`16`,height:`16`,fill:`currentColor`,"aria-hidden":`true`,children:(0,r.jsx)(`path`,{d:`M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm3.53 12.22a.75.75 0 1 1-1.06 1.06L12 13.06l-2.47 2.47a.75.75 0 0 1-1.06-1.06L10.94 12 8.47 9.53a.75.75 0 0 1 1.06-1.06L12 10.94l2.47-2.47a.75.75 0 1 1 1.06 1.06L13.06 12l2.47 2.47Z`})})}function s(){return(0,r.jsxs)(`svg`,{viewBox:`0 0 24 24`,width:`16`,height:`16`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.6`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:[(0,r.jsx)(`path`,{d:`M21.544 11.045C21.848 11.471 22 11.685 22 12c0 .316-.152.529-.456.955C20.178 14.871 16.689 19 12 19c-4.69 0-8.178-4.13-9.544-6.045C2.152 12.529 2 12.315 2 12c0-.316.152-.529.456-.955C3.822 9.129 7.311 5 12 5c4.69 0 8.178 4.13 9.544 6.045Z`}),(0,r.jsx)(`path`,{d:`M15 12a3 3 0 1 0-6 0 3 3 0 0 0 6 0Z`})]})}function c(){return(0,r.jsxs)(`svg`,{viewBox:`0 0 24 24`,width:`16`,height:`16`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.6`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:[(0,r.jsx)(`path`,{d:`M19.439 15.439c.996-.91 1.719-1.82 2.105-2.36.304-.426.456-.64.456-.955 0-.316-.152-.529-.456-.955C20.178 9.253 16.689 5.124 12 5.124c-.908 0-1.77.155-2.582.418M6.74 6.869c-2.09 1.267-3.6 3.083-4.284 4.04-.304.426-.456.64-.456.955 0 .316.152.529.456.955C3.822 14.735 7.311 18.864 12 18.864c2.008 0 3.786-.757 5.26-1.746`}),(0,r.jsx)(`path`,{d:`M9.858 10a2.98 2.98 0 0 0-.858 2.124 3 3 0 0 0 5.124 2.12M3 3l18 18`})]})}function l(){return(0,r.jsxs)(`svg`,{viewBox:`0 0 24 24`,width:`16`,height:`16`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.6`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:[(0,r.jsx)(`path`,{d:`M9 15c0-2.828 0-4.243.879-5.121C10.757 9 12.172 9 15 9h1c2.828 0 4.243 0 5.121.879C22 10.757 22 12.172 22 15v1c0 2.828 0 4.243-.879 5.121C20.243 22 18.828 22 16 22h-1c-2.828 0-4.243 0-5.121-.879C9 20.243 9 18.828 9 16v-1Z`}),(0,r.jsx)(`path`,{d:`M17 9c-.003-2.957-.047-4.489-.908-5.538a4 4 0 0 0-.554-.554C14.43 2 12.788 2 9.5 2c-3.287 0-4.931 0-6.038.908a4 4 0 0 0-.554.554C2 4.57 2 6.212 2 9.5c0 3.287 0 4.931.908 6.038a4 4 0 0 0 .554.554c1.05.86 2.58.906 5.538.908`})]})}function u(){return(0,r.jsx)(`svg`,{viewBox:`0 0 24 24`,width:`16`,height:`16`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:(0,r.jsx)(`path`,{className:`ui-tfc__check`,d:`M5 12.5 9.5 17 19 7`,pathLength:1})})}var d=`
/* Colors and motion as variables – override them on .ui-tfc (see Theming in the docs) */
.ui-tfc {
  --ui-tfc-title: var(--aui-ink, rgba(0, 0, 0, 0.88));
  --ui-tfc-ink: var(--aui-ink, rgba(0, 0, 0, 0.88));
  --ui-tfc-muted: var(--aui-muted, rgba(0, 0, 0, 0.61));
  --ui-tfc-subtle: var(--aui-muted, rgba(0, 0, 0, 0.45));
  --ui-tfc-faint: var(--aui-placeholder, rgba(0, 0, 0, 0.3));
  --ui-tfc-icon: var(--aui-muted, rgba(0, 0, 0, 0.447));
  --ui-tfc-surface: var(--aui-surface, #ffffff);
  --ui-tfc-wash: rgba(0, 0, 0, 0.04);
  --ui-tfc-readonly: rgba(0, 0, 0, 0.02);
  --ui-tfc-shadow: 0 0 0 0.5px var(--aui-border, rgba(0, 0, 0, 0.08)), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --ui-tfc-shadow-hover: 0 0 0 0.5px var(--aui-border-strong, rgba(0, 0, 0, 0.13)), 0 1px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --ui-tfc-shadow-focus: 0 0 0 1px var(--aui-border-strong, rgba(0, 0, 0, 0.28)), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --ui-tfc-danger: var(--aui-danger, #c4320a);
  --ui-tfc-danger-edge: color-mix(in srgb, var(--aui-red, #f04438) 55%, transparent);
  --ui-tfc-danger-edge-focus: rgba(229, 72, 77, 0.8);
  --ui-tfc-success: var(--aui-success, #1e8a4f);
  --ui-tfc-focus: var(--aui-focus, rgba(0, 96, 226, 0.7));
  --ui-tfc-ease: cubic-bezier(0.22, 1, 0.36, 1);

  --h: 32px;
  --px: 10px;
  --fs: 13px;
  --radius: var(--aui-radius, 7px);

  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
  font-family: var(--aui-font, "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif);
  font-size: 13px;
  line-height: 20px;
  color: var(--ui-tfc-ink);
  -webkit-font-smoothing: antialiased;
}
.ui-tfc[data-size="sm"] { --h: 28px; --px: 8px; --fs: 13px; --radius: calc(var(--aui-radius, 7px) - 1px); }
.ui-tfc[data-size="lg"] { --h: 36px; --px: 12px; --fs: 14px; --radius: calc(var(--aui-radius, 7px) + 1px); }
/* Touch screens: a comfortable tap height, and 16px text so iOS doesn't zoom in on focus */
@media (pointer: coarse) {
  .ui-tfc { --fs: 16px; }
  .ui-tfc[data-size="sm"] { --h: 34px; }
  .ui-tfc[data-size="md"] { --h: 38px; }
  .ui-tfc[data-size="lg"] { --h: 40px; }
}

.ui-tfc__head { display: flex; align-items: baseline; gap: 6px; min-width: 0; }
.ui-tfc__label { min-width: 0; font-weight: 500; color: var(--ui-tfc-title); overflow-wrap: anywhere; cursor: default; }
.ui-tfc__optional { flex: none; font-size: 12px; line-height: 16px; color: var(--ui-tfc-subtle); }

/* The box: white, a hairline shadow as its edge; hover and focus only make that edge firmer */
.ui-tfc__box {
  display: flex;
  align-items: center;
  gap: 6px;
  box-sizing: border-box;
  height: var(--h);
  min-width: 0;
  padding-block: 0;
  padding-inline: var(--px) calc(var(--px) - 4px);
  border-radius: var(--radius);
  background: var(--ui-tfc-surface);
  box-shadow: var(--ui-tfc-shadow);
  cursor: text;
  transition: box-shadow 140ms ease, background-color 140ms ease;
}
/* Without a button at the end, both sides sit at the same distance */
.ui-tfc__box:not(:has(.ui-tfc__action)) { padding-inline-end: var(--px); }
.ui-tfc__box:hover { box-shadow: var(--ui-tfc-shadow-hover); }
.ui-tfc__box:focus-within { box-shadow: var(--ui-tfc-shadow-focus); }
.ui-tfc[data-invalid] .ui-tfc__box { box-shadow: 0 0 0 1px var(--ui-tfc-danger-edge), 0 1px 2px 0 rgba(0, 0, 0, 0.05); }
.ui-tfc[data-invalid] .ui-tfc__box:focus-within { box-shadow: 0 0 0 1px var(--ui-tfc-danger-edge-focus), 0 1px 2px 0 rgba(0, 0, 0, 0.05); }
.ui-tfc[data-readonly] .ui-tfc__box { background: var(--ui-tfc-readonly); box-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.08); cursor: default; }
.ui-tfc[data-disabled] .ui-tfc__box { background: var(--ui-tfc-readonly); box-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06); cursor: not-allowed; }
.ui-tfc[data-disabled] { opacity: 0.55; }
.ui-tfc[data-invalid] .ui-tfc__box { animation: ui-tfc-nudge 320ms var(--ui-tfc-ease); }

.ui-tfc__input {
  flex: 1;
  min-width: 0;
  height: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  background: transparent;
  font: inherit;
  font-size: var(--fs);
  color: var(--ui-tfc-ink);
  text-overflow: ellipsis;
  -webkit-appearance: none;
  appearance: none;
}
/* Next to a prefix or suffix the value keeps at least 6em – they shrink first */
.ui-tfc__box:has(> .ui-tfc__affix) .ui-tfc__input { flex: 1 0 6em; min-width: 6em; }
.ui-tfc__input::placeholder { color: var(--ui-tfc-faint); opacity: 1; }
.ui-tfc__input:disabled { cursor: not-allowed; }
.ui-tfc__input[type="search"]::-webkit-search-cancel-button { display: none; }
.ui-tfc__input[type="number"] { -moz-appearance: textfield; font-variant-numeric: tabular-nums; }
.ui-tfc__input[type="number"]::-webkit-inner-spin-button,
.ui-tfc__input[type="number"]::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }
/* Revealing a password: the characters come out of a short blur */
.ui-tfc__input[data-revealed] { animation: ui-tfc-reveal 260ms var(--ui-tfc-ease); }
.ui-tfc__input[data-revealed="false"] { animation-name: ui-tfc-reveal-hide; }

/* Prefix and suffix: quiet text or an icon inside the box */
.ui-tfc__affix {
  display: inline-flex;
  flex: 0 1 auto;
  align-items: center;
  min-width: 0;
  max-width: 70%;
  font-size: var(--fs);
  color: var(--ui-tfc-subtle);
  white-space: nowrap;
  user-select: none;
  overflow: hidden;
  text-overflow: ellipsis;
}
/* Text right against the value, as if it were part of it ("https://" + "acme") */
.ui-tfc__affix[data-side="start"] { margin-inline-end: -6px; }
.ui-tfc__affix[data-side="end"] { max-width: 40%; margin-inline-start: -6px; }
/* A long prefix loses its start: "…/workspaces/" stays next to the value */
.ui-tfc__affix-text { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.ui-tfc__affix[data-side="start"]:dir(ltr) .ui-tfc__affix-text { direction: rtl; text-align: left; }
.ui-tfc__affix[data-side="start"]:dir(ltr) .ui-tfc__affix-text::after { content: "\\200E"; }
/* An icon keeps its distance */
.ui-tfc__affix[data-side]:has(> svg) { margin: 0; color: var(--ui-tfc-icon); }
.ui-tfc__affix > svg { display: block; width: 16px; height: 16px; flex: none; }

/* Clear, reveal and copy: small ghost buttons at the end */
.ui-tfc__action {
  display: grid;
  place-items: center;
  flex: none;
  width: calc(var(--h) - 8px);
  height: calc(var(--h) - 8px);
  position: relative;
  max-width: 26px;
  max-height: 26px;
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: 5px;
  background: transparent;
  color: var(--ui-tfc-icon);
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: background-color 140ms ease, color 140ms ease;
}
.ui-tfc__action + .ui-tfc__action { margin-left: -4px; }
/* Touch screens: bigger buttons and a hit area that reaches past them */
@media (pointer: coarse) {
  .ui-tfc__action { width: 32px; height: 32px; max-width: none; max-height: none; }
  .ui-tfc__action::before { content: ""; position: absolute; inset: -4px; }
}
.ui-tfc__action:hover:not(:disabled) { background: var(--ui-tfc-wash); color: var(--ui-tfc-ink); }
.ui-tfc__action:focus-visible { outline: 2px solid var(--ui-tfc-focus); outline-offset: -2px; }
.ui-tfc__action:disabled { opacity: 0.4; cursor: default; }
.ui-tfc__action[data-copied] { color: var(--ui-tfc-success); }
.ui-tfc__action svg { display: block; }
.ui-tfc__swap { display: grid; animation: ui-tfc-swap 280ms var(--ui-tfc-ease); }
.ui-tfc__check { stroke-dasharray: 1; animation: ui-tfc-draw 320ms 60ms var(--ui-tfc-ease) both; }

/* Under the field: the hint, or the error in its place, and the count */
.ui-tfc__foot { display: flex; align-items: flex-start; gap: 12px; min-width: 0; }
.ui-tfc__message {
  flex: 1;
  min-width: 0;
  margin: 0;
  font-size: 12px;
  line-height: 16px;
  color: var(--ui-tfc-subtle);
  overflow-wrap: anywhere;
  animation: ui-tfc-message 260ms var(--ui-tfc-ease);
}
.ui-tfc[data-invalid] .ui-tfc__message { color: var(--ui-tfc-danger); }
.ui-tfc__count { flex: none; margin-left: auto; font-size: 12px; line-height: 16px; font-variant-numeric: tabular-nums; color: var(--ui-tfc-faint); transition: color 140ms ease; }
.ui-tfc__count[data-over] { color: var(--ui-tfc-danger); }
.ui-tfc__sr { position: absolute; width: 1px; height: 1px; margin: -1px; padding: 0; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; border: 0; }
.ui-tfc__count[data-full] { color: var(--ui-tfc-muted); }

@keyframes ui-tfc-nudge {
  30% { transform: translateX(-3px); }
  65% { transform: translateX(2px); }
}
@keyframes ui-tfc-message {
  from { opacity: 0; transform: translateY(-3px); filter: blur(2px); }
}
@keyframes ui-tfc-reveal {
  from { filter: blur(4px); opacity: 0.4; }
}
@keyframes ui-tfc-reveal-hide {
  from { filter: blur(3px); opacity: 0.5; }
}
@keyframes ui-tfc-swap {
  from { opacity: 0; transform: scale(0.6); filter: blur(2px); }
}
@keyframes ui-tfc-draw {
  from { stroke-dashoffset: 1; }
  to { stroke-dashoffset: 0; }
}

@media (prefers-reduced-motion: reduce) {
  .ui-tfc *, .ui-tfc[data-invalid] .ui-tfc__box { animation-duration: 1ms !important; }
  .ui-tfc__box { transition-duration: 1ms; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-tfc {
  --ui-tfc-title: var(--aui-ink, rgba(255, 255, 255, 0.92));
  --ui-tfc-ink: var(--aui-ink, rgba(255, 255, 255, 0.9));
  --ui-tfc-muted: var(--aui-muted, rgba(255, 255, 255, 0.62));
  --ui-tfc-subtle: var(--aui-muted, rgba(255, 255, 255, 0.46));
  --ui-tfc-faint: var(--aui-placeholder, rgba(255, 255, 255, 0.3));
  --ui-tfc-icon: var(--aui-muted, rgba(255, 255, 255, 0.5));
  --ui-tfc-surface: var(--aui-surface, #1c1c1e);
  --ui-tfc-wash: rgba(255, 255, 255, 0.07);
  --ui-tfc-readonly: rgba(255, 255, 255, 0.03);
  --ui-tfc-shadow: 0 0 0 0.5px var(--aui-border, rgba(255, 255, 255, 0.14)), 0 1px 2px 0 rgba(0, 0, 0, 0.4);
  --ui-tfc-shadow-hover: 0 0 0 0.5px var(--aui-border-strong, rgba(255, 255, 255, 0.2)), 0 1px 2px 0 rgba(0, 0, 0, 0.4);
  --ui-tfc-shadow-focus: 0 0 0 1px var(--aui-border-strong, rgba(255, 255, 255, 0.3)), 0 1px 2px 0 rgba(0, 0, 0, 0.4);
  --ui-tfc-danger: var(--aui-danger, #ff8a7a);
  --ui-tfc-danger-edge: color-mix(in srgb, var(--aui-red, #ff6b5f) 50%, transparent);
  --ui-tfc-danger-edge-focus: rgba(255, 99, 105, 0.75);
  --ui-tfc-success: var(--aui-success, #7dcf9f);
  --ui-tfc-focus: var(--aui-focus, rgba(77, 141, 255, 0.8));
}
:where(.dark, [data-theme="dark"]) .ui-tfc[data-readonly] .ui-tfc__box,
:where(.dark, [data-theme="dark"]) .ui-tfc[data-disabled] .ui-tfc__box { box-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.12); }
`;export{i as t};