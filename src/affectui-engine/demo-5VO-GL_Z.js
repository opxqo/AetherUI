import{t as e}from"./react-BkAXpnfr.js";import{t}from"./jsx-runtime-CTsRTJUX.js";/* empty css             */var n=e(),r=t();function i({value:e,defaultValue:t=[],onChange:i,label:o,hint:s,error:c,optional:l=!1,placeholder:u=`Add…`,validate:d,normalize:f=e=>e.trim(),splitOnSpace:p=!1,max:m,avatar:h=!1,disabled:g=!1,name:_,id:v,className:y,"aria-label":b,ref:x}){let S=(0,n.useId)(),C=v??`${S}-input`,w=`${S}-label`,T=`${S}-message`,E=`${S}-live`,[D,O]=(0,n.useState)(t),k=e??D,[A,j]=(0,n.useState)(``),[M,N]=(0,n.useState)(``),[P,F]=(0,n.useState)(!1),[I,L]=(0,n.useState)(null),[R,z]=(0,n.useState)(``),B=(0,n.useRef)(null),V=(0,n.useRef)(null),H=m!=null&&k.length>=m,U=c!=null&&typeof c!=`boolean`&&c!==``?c:M||null,W=!!c||!!M,G=U??(s!=null&&typeof s!=`boolean`&&s!==``?s:null),K=p?/[\s,;]+/:/[,;\n]+/,q=t=>{e===void 0&&O(t),i?.(t)},J=(e,t=``)=>{let n=e.split(K).map(f).filter(Boolean);if(!n.length){j(t);return}let r=[],i=[],a=``;for(let e of n){let t=!d||d(e);t===!0?k.includes(e)||r.includes(e)?L({tag:e,n:Date.now()}):m!=null&&k.length+r.length>=m?(i.push(e),a||=`Up to ${m} at a time.`):r.push(e):(i.push(e),a||=t)}r.length&&(q([...k,...r]),z(r.length===1?`${r[0]} added`:`${r.length} added`)),j([i.join(p?` `:`, `),t].filter(Boolean).join(p?` `:`, `)),N(a)},Y=(e,t=!0)=>{q(k.filter(t=>t!==e)),z(`${e} removed`),t&&B.current?.focus()},X=()=>[...V.current?.querySelectorAll(`.ui-tag__chip`)??[]],Z=e=>{if(e.nativeEvent.isComposing)return;let t=e.key===`,`||e.key===`;`||p&&e.key===` `;if((e.key===`Enter`||e.key===`Tab`||t)&&A.trim()){e.preventDefault(),J(A);return}if(t){e.preventDefault();return}if(e.key===`Backspace`&&!A&&k.length){e.preventDefault(),P?(Y(k[k.length-1]),F(!1)):F(!0);return}if(e.key===`ArrowLeft`&&e.currentTarget.selectionStart===0&&k.length){e.preventDefault(),X().at(-1)?.focus();return}e.key===`Escape`&&A&&(e.preventDefault(),j(``),N(``)),F(!1)},Q=(e,t)=>{let n=X();if(e.key===`ArrowLeft`)e.preventDefault(),n[Math.max(0,t-1)]?.focus();else if(e.key===`ArrowRight`)e.preventDefault(),t+1<n.length?n[t+1].focus():B.current?.focus();else if(e.key===`Backspace`||e.key===`Delete`){e.preventDefault();let r=n[t+1]??null;Y(k[t],!1),window.setTimeout(()=>r&&r.isConnected?r.focus():B.current?.focus())}};return(0,r.jsxs)(`div`,{className:[`ui-tag`,y].filter(Boolean).join(` `),"data-invalid":W||void 0,"data-disabled":g||void 0,children:[(0,r.jsx)(`style`,{href:`ui-tag-input`,precedence:`default`,children:a}),o!=null&&(0,r.jsxs)(`div`,{className:`ui-tag__head`,children:[(0,r.jsx)(`label`,{className:`ui-tag__label`,id:w,htmlFor:C,children:o}),l&&(0,r.jsx)(`span`,{className:`ui-tag__optional`,children:`Optional`})]}),(0,r.jsxs)(`div`,{ref:V,className:`ui-tag__box`,onPointerDown:e=>{e.target===e.currentTarget&&(e.preventDefault(),B.current?.focus())},children:[k.map((e,t)=>(0,r.jsxs)(`span`,{className:`ui-tag__chip`,tabIndex:-1,title:e,"data-armed":P&&t===k.length-1||void 0,"data-flash":I?.tag===e?I.n:void 0,onKeyDown:e=>Q(e,t),onAnimationEnd:e=>e.animationName===`ui-tag-flash`&&L(null),children:[h&&(0,r.jsx)(`span`,{className:`ui-tag__avatar`,"aria-hidden":`true`,children:(Array.from(e)[0]??``).toUpperCase()}),(0,r.jsx)(`span`,{className:`ui-tag__text`,children:e}),!g&&(0,r.jsx)(`button`,{type:`button`,className:`ui-tag__remove`,tabIndex:-1,"aria-label":`Remove ${e}`,onPointerDown:e=>e.preventDefault(),onClick:()=>Y(e),children:(0,r.jsx)(`svg`,{viewBox:`0 0 12 12`,width:`10`,height:`10`,"aria-hidden":`true`,children:(0,r.jsx)(`path`,{d:`M3 3l6 6M9 3l-6 6`})})})]},e)),(0,r.jsx)(`input`,{ref:e=>{B.current=e,typeof x==`function`?x(e):x&&(x.current=e)},id:C,className:`ui-tag__input`,value:A,placeholder:H?``:k.length?`Add more…`:u,disabled:g||H,dir:`auto`,autoComplete:`off`,spellCheck:!1,"aria-label":b,"aria-invalid":W||void 0,"aria-describedby":[G?T:null,E].filter(Boolean).join(` `),onChange:e=>{let t=e.target.value;F(!1),M&&N(``);let n=t.split(K);n.length>1?J(n.slice(0,-1).join(`,`),n[n.length-1]):j(t)},onKeyDown:Z,onPaste:e=>{let t=e.clipboardData.getData(`text`);K.test(t.trim())&&(e.preventDefault(),J(A+(A?p?` `:`,`:``)+t))},onBlur:()=>{F(!1),A.trim()&&J(A)}})]}),_&&k.map(e=>(0,r.jsx)(`input`,{type:`hidden`,name:_,value:e},e)),(G||m!=null)&&(0,r.jsxs)(`div`,{className:`ui-tag__foot`,children:[G&&(0,r.jsx)(`p`,{className:`ui-tag__message`,id:T,"aria-live":U?`polite`:void 0,children:G},U?`error`:`hint`),m!=null&&(0,r.jsxs)(`span`,{className:`ui-tag__count`,"data-full":H||void 0,children:[k.length,`/`,m]})]}),(0,r.jsx)(`span`,{className:`ui-tag__sr`,id:E,role:`status`,children:R})]})}var a=`
/* Colors and motion as variables – override them on .ui-tag (see Theming in the docs) */
.ui-tag {
  --ui-tag-title: var(--aui-ink, #171717);
  --ui-tag-ink: var(--aui-ink, #171717);
  --ui-tag-muted: var(--aui-muted, #404040);
  --ui-tag-subtle: var(--aui-muted, #8f8f8f);
  --ui-tag-faint: var(--aui-placeholder, #b5b5b5);
  --ui-tag-surface: var(--aui-surface, #ffffff);
  --ui-tag-line: var(--aui-border, #e6e6e8);
  --ui-tag-edge: var(--aui-border-strong, #d4d4d8);
  --ui-tag-edge-focus: var(--aui-border-strong, #b4b4bb);
  --ui-tag-chip: #f4f4f5;
  --ui-tag-chip-edge: #e6e6e8;
  --ui-tag-chip-armed: #e4e4e7;
  --ui-tag-avatar: #e9e9ec;
  --ui-tag-flash: rgba(0, 96, 226, 0.14);
  --ui-tag-danger: var(--aui-danger, #c4320a);
  --ui-tag-danger-edge: #ff8a7a;
  --ui-tag-danger-wash: color-mix(in srgb, var(--aui-red, #f04438) 4%, transparent);
  --ui-tag-focus: var(--aui-focus, rgba(0, 96, 226, 0.7));
  --ui-tag-ease: cubic-bezier(0.22, 1, 0.36, 1);

  --fs: 13.5px;

  display: flex;
  flex-direction: column;
  gap: 7px;
  min-width: 0;
  font-family: var(--aui-font, "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif);
  font-size: 13px;
  line-height: 20px;
  color: var(--ui-tag-ink);
  -webkit-font-smoothing: antialiased;
}
@media (pointer: coarse) {
  .ui-tag { --fs: 16px; }
}

.ui-tag__head { display: flex; align-items: baseline; gap: 6px; min-width: 0; padding: 0 2px; }
.ui-tag__label { min-width: 0; font-size: 13px; font-weight: 500; color: var(--ui-tag-title); overflow-wrap: anywhere; cursor: default; }
.ui-tag__optional { flex: none; font-size: 12px; line-height: 16px; color: var(--ui-tag-subtle); }

/* The box: the Text Field's look; chips wrap onto new lines and it grows with them */
.ui-tag__box {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px;
  box-sizing: border-box;
  min-height: 36px;
  min-width: 0;
  max-height: 168px;
  padding: 5px 6px;
  border-radius: var(--aui-radius, 10px);
  background: var(--ui-tag-surface);
  box-shadow: 0 0 0 1px var(--ui-tag-line), 0 1px 2px rgba(0, 0, 0, 0.04);
  overflow-y: auto;
  overscroll-behavior: contain;
  scrollbar-width: thin;
  cursor: text;
  transition: box-shadow 140ms ease;
}
.ui-tag__box:hover { box-shadow: 0 0 0 1px var(--ui-tag-edge), 0 1px 2px rgba(0, 0, 0, 0.04); }
.ui-tag__box:focus-within { box-shadow: 0 0 0 1px var(--ui-tag-edge-focus), 0 1px 2px rgba(0, 0, 0, 0.04); }
.ui-tag[data-invalid] .ui-tag__box { background: var(--ui-tag-danger-wash); box-shadow: 0 0 0 1px var(--ui-tag-danger-edge), 0 1px 2px rgba(0, 0, 0, 0.04); }
.ui-tag[data-disabled] { opacity: 0.55; }
.ui-tag[data-disabled] .ui-tag__box { cursor: not-allowed; }

/* A chip: a soft gray pill with the text and a small × */
.ui-tag__chip {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  max-width: 100%;
  height: 24px;
  box-sizing: border-box;
  padding: 0 3px 0 8px;
  border-radius: 7px;
  background: var(--ui-tag-chip);
  box-shadow: inset 0 0 0 1px var(--ui-tag-chip-edge);
  font-size: 13px;
  color: var(--ui-tag-ink);
  outline: none;
  animation: ui-tag-in 220ms var(--ui-tag-ease) both;
  transition: background-color 140ms ease;
}
.ui-tag__chip:has(.ui-tag__avatar) { padding-left: 3px; }
.ui-tag__chip:focus-visible { outline: 2px solid var(--ui-tag-focus); outline-offset: 2px; }
.ui-tag__chip[data-armed] { background: var(--ui-tag-chip-armed); }
.ui-tag__chip[data-flash] { animation: ui-tag-flash 700ms ease; }
.ui-tag__avatar { display: grid; flex: none; place-items: center; width: 18px; height: 18px; border-radius: 50%; background: var(--ui-tag-avatar); font-size: 10px; font-weight: 500; color: var(--ui-tag-muted); }
.ui-tag__text { min-width: 0; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
.ui-tag__remove {
  position: relative;
  display: grid;
  flex: none;
  place-items: center;
  width: 18px;
  height: 18px;
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: 4px;
  background: transparent;
  color: var(--ui-tag-subtle);
  cursor: pointer;
  transition: background-color 140ms ease, color 140ms ease;
}
.ui-tag__remove::before { content: ""; position: absolute; inset: -4px; }
.ui-tag__remove:hover { background: var(--ui-tag-chip-armed); color: var(--ui-tag-ink); }
.ui-tag__remove svg { display: block; fill: none; stroke: currentColor; stroke-width: 1.5; stroke-linecap: round; }

.ui-tag__input {
  flex: 1 0 80px;
  min-width: 80px;
  height: 24px;
  margin: 0;
  padding: 0 6px;
  border: 0;
  outline: 0;
  background: transparent;
  font: inherit;
  font-size: var(--fs);
  color: var(--ui-tag-ink);
}
.ui-tag__input::placeholder { color: var(--ui-tag-faint); opacity: 1; }
.ui-tag__input:disabled { cursor: not-allowed; }

.ui-tag__foot { display: flex; align-items: flex-start; gap: 12px; min-width: 0; padding: 0 2px; }
.ui-tag__message { flex: 1; min-width: 0; margin: 0; font-size: 12.5px; line-height: 17px; color: var(--ui-tag-subtle); overflow-wrap: anywhere; animation: ui-tag-message 260ms var(--ui-tag-ease); }
.ui-tag[data-invalid] .ui-tag__message { color: var(--ui-tag-danger); }
.ui-tag__count { flex: none; margin-left: auto; font-size: 12px; line-height: 16px; font-variant-numeric: tabular-nums; color: var(--ui-tag-faint); }
.ui-tag__count[data-full] { color: var(--ui-tag-muted); }
.ui-tag__sr { position: absolute; width: 1px; height: 1px; margin: -1px; padding: 0; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; border: 0; }

/* Touch screens: taller chips and a bigger × */
@media (pointer: coarse) {
  .ui-tag__box { min-height: 40px; }
  .ui-tag__chip { height: 30px; font-size: 14px; }
  .ui-tag__remove { width: 24px; height: 24px; }
  .ui-tag__input { height: 30px; }
}

@keyframes ui-tag-in {
  from { opacity: 0; transform: scale(0.85); filter: blur(2px); }
}
@keyframes ui-tag-flash {
  20%, 60% { background: var(--ui-tag-flash); }
}
@keyframes ui-tag-message {
  from { opacity: 0; transform: translateY(-3px); filter: blur(2px); }
}

@media (prefers-reduced-motion: reduce) {
  .ui-tag * { animation-duration: 1ms !important; transition-duration: 1ms !important; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-tag {
  --ui-tag-title: var(--aui-ink, #ededed);
  --ui-tag-ink: var(--aui-ink, #ededed);
  --ui-tag-muted: var(--aui-muted, #c8c8cc);
  --ui-tag-subtle: var(--aui-muted, #8b8b92);
  --ui-tag-faint: var(--aui-placeholder, #5c5c63);
  --ui-tag-surface: var(--aui-surface, #19191b);
  --ui-tag-line: var(--aui-border, #2a2a2e);
  --ui-tag-edge: var(--aui-border-strong, #3a3a40);
  --ui-tag-edge-focus: var(--aui-border-strong, #4e4e55);
  --ui-tag-chip: #232326;
  --ui-tag-chip-edge: #2f2f34;
  --ui-tag-chip-armed: #303035;
  --ui-tag-avatar: #2c2c31;
  --ui-tag-flash: rgba(77, 141, 255, 0.28);
  --ui-tag-danger: var(--aui-danger, #ff8a7a);
  --ui-tag-danger-edge: color-mix(in srgb, var(--aui-red, #ff6b5f) 45%, transparent);
  --ui-tag-danger-wash: color-mix(in srgb, var(--aui-red, #ff6b5f) 6%, transparent);
  --ui-tag-focus: var(--aui-focus, rgba(77, 141, 255, 0.8));
}
`,o=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;function s(){let[e,t]=(0,n.useState)([`maya@acme.com`,`jonas@acme.com`]),[a,s]=(0,n.useState)([`Onboarding`,`Q4 launch`]);return(0,r.jsx)(`div`,{className:`tag-demo`,children:(0,r.jsx)(`div`,{className:`tag-demo__tray`,children:(0,r.jsxs)(`form`,{className:`tag-democ tag-demo__card`,onSubmit:e=>e.preventDefault(),children:[(0,r.jsx)(i,{label:`Invite people`,value:e,onChange:t,placeholder:`name@company.com`,avatar:!0,splitOnSpace:!0,max:10,normalize:e=>e.trim().toLowerCase(),validate:e=>o.test(e)?!0:`“${e}” doesn't look like an email address.`,hint:`Paste a whole list – commas, spaces or new lines.`}),(0,r.jsx)(i,{label:`Labels`,value:a,onChange:s,placeholder:`Add a label`,optional:!0,hint:`Press Enter or a comma after each one.`})]})})})}export { s as default, i as __InnerComponent };