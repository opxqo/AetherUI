import{t as e}from"./react-BkAXpnfr.js";import{t}from"./jsx-runtime-CTsRTJUX.js";/* empty css             */var n=e(),r=t();function i({label:e,hint:t,error:i,optional:l=!1,counter:u=!1,minRows:d=3,maxRows:f=10,expandable:p=!1,expandedRows:m=16,expanded:h,onExpandedChange:g,onSubmitShortcut:_,className:v,inputClassName:y,id:b,value:x,defaultValue:S,onChange:C,onKeyDown:w,disabled:T,readOnly:E,maxLength:D,ref:O,"aria-describedby":k,...A}){let j=(0,n.useId)(),M=b??`${j}-input`,N=`${j}-message`,P=`${j}-count`,F=(0,n.useRef)(null),[I,L]=(0,n.useState)(String(S??``)),R=x==null?I:String(x),[z,B]=(0,n.useState)(!1),V=p&&(h??z),[H,U]=(0,n.useState)(!1),W=(0,n.useRef)(0);(0,n.useEffect)(()=>()=>window.clearTimeout(W.current),[]);let G=!!i||A[`aria-invalid`]===!0||A[`aria-invalid`]===`true`,K=a(i)?i:a(t)?t:null,q=u&&typeof D==`number`,J=e==null&&!A[`aria-label`]&&!A[`aria-labelledby`]&&typeof A.placeholder==`string`?A.placeholder:void 0,Y=()=>{let e=F.current;if(!e)return;let t=getComputedStyle(e),n=parseFloat(t.lineHeight)||20,r=parseFloat(t.paddingTop)+parseFloat(t.paddingBottom),i=(V?Math.max(m,d):d)*n+r,a=(V?Math.max(m,f):Math.max(f,d))*n+r,o=e.style.height;e.style.height=`auto`;let s=e.scrollHeight,c=Math.min(Math.max(s,i),a);e.style.height=o,e.offsetHeight,e.style.height=`${c}px`,e.style.overflowY=s>a+1?`auto`:`hidden`};(0,n.useLayoutEffect)(Y,[R,V,d,f,m]),(0,n.useEffect)(()=>{let e=F.current;if(!e||typeof ResizeObserver>`u`)return;let t=e.clientWidth,n=new ResizeObserver(()=>{e.clientWidth!==t&&(t=e.clientWidth,Y())}),r=window.matchMedia(`(pointer: coarse)`);return r.addEventListener(`change`,Y),n.observe(e),()=>{n.disconnect(),r.removeEventListener(`change`,Y)}}),(0,n.useEffect)(()=>{let e=F.current?.form;if(!e||x!==void 0)return;let t=()=>window.setTimeout(()=>L(F.current?.value??``));return e.addEventListener(`reset`,t),()=>e.removeEventListener(`reset`,t)},[x]);let X=()=>{let e=!V;U(!0),window.clearTimeout(W.current),W.current=window.setTimeout(()=>U(!1),320),h===void 0&&B(e),g?.(e)};return(0,r.jsxs)(`div`,{className:[`ui-ta`,v].filter(Boolean).join(` `),"data-invalid":G||void 0,"data-disabled":T||void 0,"data-readonly":E||void 0,"data-expandable":p||void 0,children:[(0,r.jsx)(`style`,{href:`ui-text-area`,precedence:`default`,children:c}),e!=null&&(0,r.jsxs)(`div`,{className:`ui-ta__head`,children:[(0,r.jsx)(`label`,{className:`ui-ta__label`,htmlFor:M,children:e}),l&&(0,r.jsx)(`span`,{className:`ui-ta__optional`,children:`Optional`})]}),(0,r.jsxs)(`div`,{className:`ui-ta__box`,children:[(0,r.jsx)(`textarea`,{...A,ref:e=>{F.current=e,typeof O==`function`?O(e):O&&(O.current=e)},id:M,className:[`ui-ta__input`,y].filter(Boolean).join(` `),rows:d,value:x,defaultValue:S,disabled:T,readOnly:E,maxLength:D,dir:A.dir??`auto`,"aria-label":A[`aria-label`]??J,"aria-invalid":G||void 0,"aria-describedby":[k,K?N:null,q?P:null].filter(Boolean).join(` `)||void 0,"aria-keyshortcuts":_?`Meta+Enter Control+Enter`:A[`aria-keyshortcuts`],"data-gliding":H||void 0,onChange:e=>{x===void 0&&L(e.target.value),C?.(e)},onKeyDown:e=>{_&&e.key===`Enter`&&(e.metaKey||e.ctrlKey)&&!e.nativeEvent.isComposing&&(e.preventDefault(),_(e.currentTarget.value)),w?.(e)}}),p&&!T&&(0,r.jsx)(`button`,{type:`button`,className:`ui-ta__expand`,"aria-label":V?`Less room`:`More room`,"aria-pressed":V,"aria-controls":M,onClick:X,children:(0,r.jsx)(`span`,{className:`ui-ta__swap`,children:V?(0,r.jsx)(s,{}):(0,r.jsx)(o,{})},V?`less`:`more`)})]}),(K||q)&&(0,r.jsxs)(`div`,{className:`ui-ta__foot`,children:[(0,r.jsx)(`p`,{className:`ui-ta__message`,id:N,dir:`auto`,"aria-live":a(i)?`polite`:void 0,children:K},a(i)?`error`:`hint`),q&&(0,r.jsxs)(`span`,{className:`ui-ta__count`,id:P,"data-full":R.length===D||void 0,"data-over":R.length>D||void 0,children:[R.length.toLocaleString(),`/`,D.toLocaleString()]})]})]})}var a=e=>e!=null&&typeof e!=`boolean`&&e!==``;function o(){return(0,r.jsx)(`svg`,{viewBox:`0 0 24 24`,width:`16`,height:`16`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.6`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:(0,r.jsx)(`path`,{d:`M16.5 3h4.5v4.5M21 3l-6 6M7.5 21H3v-4.5M3 21l6-6`})})}function s(){return(0,r.jsx)(`svg`,{viewBox:`0 0 24 24`,width:`16`,height:`16`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.6`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:(0,r.jsx)(`path`,{d:`M14.5 5v4.5H19M14.5 9.5 20 4M9.5 19v-4.5H5M9.5 14.5 4 20`})})}var c=`
/* Colors and motion as variables – override them on .ui-ta (see Theming in the docs) */
.ui-ta {
  --ui-ta-title: var(--aui-ink, #171717);
  --ui-ta-ink: var(--aui-ink, #171717);
  --ui-ta-muted: var(--aui-muted, #8f8f8f);
  --ui-ta-subtle: var(--aui-muted, #8f8f8f);
  --ui-ta-faint: var(--aui-placeholder, #b5b5b5);
  --ui-ta-icon: var(--aui-muted, #8f8f8f);
  --ui-ta-text: #404040;
  --ui-ta-surface: var(--aui-surface, #ffffff);
  --ui-ta-line: var(--aui-border, #e6e6e8);
  --ui-ta-edge: var(--aui-border-strong, #d4d4d8);
  --ui-ta-edge-focus: var(--aui-border-strong, #b4b4bb);
  --ui-ta-wash: #f4f4f5;
  --ui-ta-readonly: #fafafa;
  --ui-ta-danger: var(--aui-danger, #c4320a);
  --ui-ta-danger-edge: #ff8a7a;
  --ui-ta-danger-edge-focus: #f04438;
  --ui-ta-danger-wash: color-mix(in srgb, var(--aui-red, #f04438) 4%, transparent);
  --ui-ta-focus: var(--aui-focus, rgba(0, 96, 226, 0.7));
  --ui-ta-ease: cubic-bezier(0.22, 1, 0.36, 1);

  --fs: 13.5px;
  --lh: 21px;

  display: flex;
  flex-direction: column;
  gap: 7px;
  min-width: 0;
  font-family: var(--aui-font, "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif);
  font-size: 13.5px;
  line-height: 20px;
  color: var(--ui-ta-ink);
  -webkit-font-smoothing: antialiased;
}
/* Touch screens: 16px text, so iOS doesn't zoom in on focus */
@media (pointer: coarse) {
  .ui-ta { --fs: 16px; --lh: 24px; }
}

.ui-ta__head { display: flex; align-items: baseline; gap: 6px; min-width: 0; padding: 0 2px; }
.ui-ta__label { min-width: 0; font-size: 13px; font-weight: 500; color: var(--ui-ta-title); overflow-wrap: anywhere; cursor: default; }
.ui-ta__optional { flex: none; font-size: 12px; line-height: 16px; color: var(--ui-ta-subtle); }

/* The box: white with a 1px gray edge; hover and focus only darken that edge */
.ui-ta__box {
  position: relative;
  display: flex;
  min-width: 0;
  border-radius: var(--aui-radius, 10px);
  background: var(--ui-ta-surface);
  box-shadow: 0 0 0 1px var(--ui-ta-line), 0 1px 2px rgba(0, 0, 0, 0.04);
  cursor: text;
  transition: box-shadow 140ms ease, background-color 140ms ease;
}
.ui-ta__box:hover { box-shadow: 0 0 0 1px var(--ui-ta-edge), 0 1px 2px rgba(0, 0, 0, 0.04); }
.ui-ta__box:focus-within { box-shadow: 0 0 0 1px var(--ui-ta-edge-focus), 0 1px 2px rgba(0, 0, 0, 0.04); }
.ui-ta[data-invalid] .ui-ta__box { background: var(--ui-ta-danger-wash); box-shadow: 0 0 0 1px var(--ui-ta-danger-edge), 0 1px 2px rgba(0, 0, 0, 0.04); animation: ui-ta-nudge 320ms var(--ui-ta-ease); }
.ui-ta[data-invalid] .ui-ta__box:focus-within { box-shadow: 0 0 0 1px var(--ui-ta-danger-edge-focus), 0 1px 2px rgba(0, 0, 0, 0.04); }
.ui-ta[data-readonly] .ui-ta__box { background: var(--ui-ta-readonly); box-shadow: 0 0 0 1px var(--ui-ta-line); cursor: default; }
.ui-ta[data-disabled] .ui-ta__box { background: var(--ui-ta-readonly); box-shadow: 0 0 0 1px var(--ui-ta-line); cursor: not-allowed; }
.ui-ta[data-disabled] { opacity: 0.55; }

.ui-ta__input {
  display: block;
  flex: 1;
  box-sizing: border-box;
  width: 100%;
  min-width: 0;
  margin: 0;
  padding: 8px 12px;
  border: 0;
  border-radius: inherit;
  outline: 0;
  background: transparent;
  font: inherit;
  font-size: var(--fs);
  line-height: var(--lh);
  color: var(--ui-ta-ink);
  overflow-wrap: anywhere;
  resize: none;
  overflow-y: hidden;
  scrollbar-width: thin;
  -webkit-appearance: none;
  appearance: none;
}
/* The corner button keeps clear of the text */
.ui-ta[data-expandable] .ui-ta__input { padding-inline-end: 36px; }
.ui-ta__input::placeholder { color: var(--ui-ta-faint); opacity: 1; }
.ui-ta__input:disabled { cursor: not-allowed; }
.ui-ta__input[data-gliding] { transition: height 300ms var(--ui-ta-ease); }

/* More room: a small ghost button in the top corner */
.ui-ta__expand {
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
  border-radius: 7px;
  background: transparent;
  color: var(--ui-ta-icon);
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: background-color 140ms ease, color 140ms ease;
}
.ui-ta__expand:hover { background: var(--ui-ta-wash); color: var(--ui-ta-ink); }
.ui-ta__expand:focus-visible { outline: 2px solid var(--ui-ta-focus); outline-offset: -2px; }
.ui-ta__expand svg { display: block; }
.ui-ta__swap { display: grid; animation: ui-ta-swap 280ms var(--ui-ta-ease); }
@media (pointer: coarse) {
  .ui-ta__expand { width: 32px; height: 32px; }
  .ui-ta__expand::before { content: ""; position: absolute; inset: -4px; }
  .ui-ta[data-expandable] .ui-ta__input { padding-inline-end: 42px; }
}

/* Under the field: the hint, or the error in its place, and the count */
.ui-ta__foot { display: flex; align-items: flex-start; gap: 12px; min-width: 0; padding: 0 2px; }
.ui-ta__message {
  flex: 1;
  min-width: 0;
  margin: 0;
  font-size: 12.5px;
  line-height: 17px;
  color: var(--ui-ta-subtle);
  overflow-wrap: anywhere;
  animation: ui-ta-message 260ms var(--ui-ta-ease);
}
.ui-ta[data-invalid] .ui-ta__message { color: var(--ui-ta-danger); }
.ui-ta__count { flex: none; margin-left: auto; font-size: 12px; line-height: 16px; font-variant-numeric: tabular-nums; color: var(--ui-ta-faint); transition: color 140ms ease; }
.ui-ta__count[data-full] { color: var(--ui-ta-text); }
.ui-ta__count[data-over] { color: var(--ui-ta-danger); }

@keyframes ui-ta-nudge {
  30% { transform: translateX(-3px); }
  65% { transform: translateX(2px); }
}
@keyframes ui-ta-message {
  from { opacity: 0; transform: translateY(-3px); filter: blur(2px); }
}
@keyframes ui-ta-swap {
  from { opacity: 0; transform: scale(0.6); filter: blur(2px); }
}

@media (prefers-reduced-motion: reduce) {
  .ui-ta *, .ui-ta[data-invalid] .ui-ta__box { animation-duration: 1ms !important; }
  .ui-ta__box, .ui-ta__input[data-gliding] { transition-duration: 1ms; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-ta {
  --ui-ta-title: var(--aui-ink, #ededed);
  --ui-ta-ink: var(--aui-ink, #ededed);
  --ui-ta-text: #c8c8cc;
  --ui-ta-muted: var(--aui-muted, #8b8b92);
  --ui-ta-subtle: var(--aui-muted, #8b8b92);
  --ui-ta-faint: var(--aui-placeholder, #5c5c63);
  --ui-ta-icon: var(--aui-muted, #8b8b92);
  --ui-ta-surface: var(--aui-surface, #19191b);
  --ui-ta-line: var(--aui-border, #2a2a2e);
  --ui-ta-edge: var(--aui-border-strong, #3a3a40);
  --ui-ta-edge-focus: var(--aui-border-strong, #4e4e55);
  --ui-ta-wash: #26262a;
  --ui-ta-readonly: #151517;
  --ui-ta-danger: var(--aui-danger, #ff8a7a);
  --ui-ta-danger-edge: color-mix(in srgb, var(--aui-red, #ff6b5f) 45%, transparent);
  --ui-ta-danger-edge-focus: rgba(255, 99, 105, 0.75);
  --ui-ta-danger-wash: color-mix(in srgb, var(--aui-red, #ff6b5f) 6%, transparent);
  --ui-ta-focus: var(--aui-focus, rgba(77, 141, 255, 0.8));
}
`,l=`We're Acme, a 40-person B2B company selling scheduling software to clinics in Germany and Austria.
Common terms: MRR, churn, onboarding call, practice (= customer).
Answer in English unless someone writes in German.`;function u(){let[e,t]=(0,n.useState)(l),[a,o]=(0,n.useState)(``),[s,c]=(0,n.useState)(!1);return(0,r.jsx)(`div`,{className:`ta-demo`,children:(0,r.jsx)(`div`,{className:`ta-demo__tray`,children:(0,r.jsxs)(`form`,{className:`ta-demo__card`,onSubmit:e=>e.preventDefault(),children:[(0,r.jsx)(i,{label:`Company context`,value:e,onChange:e=>t(e.target.value),hint:`Added to every chat in this workspace.`,maxLength:2e3,counter:!0,minRows:3,maxRows:7,expandable:!0,expandedRows:12}),(0,r.jsx)(i,{label:`Note for the reviewer`,optional:!0,value:a,minRows:2,placeholder:`What should they look at first?`,onChange:e=>{o(e.target.value),c(!1)},onSubmitShortcut:e=>{e.trim()&&(o(``),c(!0))},hint:s?`Sent – thanks!`:`⌘ Enter to send`})]})})})}export { u as default, i as __InnerComponent };