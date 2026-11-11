import{t as e}from"./react-BkAXpnfr.js";import{t}from"./jsx-runtime-CTsRTJUX.js";var n=e(),r=t();function i({options:e,value:t,defaultValue:i=null,onChange:l,placeholder:u=`Choose…`,label:d,hint:f,error:p,optional:m=!1,size:h=`md`,disabled:g=!1,name:_,required:v,id:y,className:b,"aria-label":x,ref:S}){let C=(0,n.useId)(),w=y??`${C}-trigger`,T=`${C}-list`,E=`${C}-label`,D=`${C}-message`,O=e=>`${C}-option-${e}`,[te,k]=(0,n.useState)(i),A=t===void 0?te:t,j=e.find(e=>e.value===A)??null,[M,N]=(0,n.useState)(!1),[P,F]=(0,n.useState)(-1),[I,L]=(0,n.useState)(null),[R,z]=(0,n.useState)(null),B=(0,n.useRef)(null),V=(0,n.useRef)(null),H=(0,n.useRef)({text:``,at:0}),U=!!p,W=o(p)?p:o(f)?f:null,G=a.includes(h)?h:`md`,K=t=>t>=0&&t<e.length&&!e[t].disabled,q=()=>e.findIndex(e=>!e.disabled),ne=()=>{for(let t=e.length-1;t>=0;t--)if(!e[t].disabled)return t;return-1},J=(t,n)=>{for(let r=t+n;r>=0&&r<e.length;r+=n)if(!e[r].disabled)return r;return t},Y=t=>{if(g||!e.length)return;let n=e.findIndex(e=>e.value===A);F(t??(K(n)?n:q())),N(!0)},X=(e=!0)=>{N(!1),z(null),L(null),e&&B.current?.focus({preventScroll:!0})},Z=n=>{if(!K(n))return;let r=e[n];t===void 0&&k(r.value),r.value!==A&&l?.(r.value,r),X()},Q=()=>{let e=B.current;if(!e)return;let t=e.getBoundingClientRect(),n=window.innerHeight-t.bottom-4-8,r=t.top-4-8,i=Math.min(V.current?.scrollHeight??280,288),a=n<Math.min(i,160)&&r>n,o=Math.max(t.width,180),s=Math.min(Math.max(8,t.left),window.innerWidth-o-8);L({top:a?t.top-4:t.bottom+4,left:s,width:o,maxHeight:Math.max(120,Math.min(288,a?r:n)),up:a})};(0,n.useLayoutEffect)(()=>{if(!M)return;let e=V.current;e&&`showPopover`in e&&!e.matches(`:popover-open`)&&e.showPopover(),Q();let t=()=>Q();return window.addEventListener(`resize`,t),window.addEventListener(`scroll`,t,!0),()=>{window.removeEventListener(`resize`,t),window.removeEventListener(`scroll`,t,!0),e&&`hidePopover`in e&&e.matches(`:popover-open`)&&e.hidePopover()}},[M]),(0,n.useEffect)(()=>{if(!M)return;let e=e=>{let t=e.target;B.current?.contains(t)||V.current?.contains(t)||X(!1)};return document.addEventListener(`pointerdown`,e,!0),()=>document.removeEventListener(`pointerdown`,e,!0)},[M]),(0,n.useLayoutEffect)(()=>{if(!M||P<0)return;let e=V.current?.querySelector(`[data-index="${P}"]`);e&&(z({top:e.offsetTop,height:e.offsetHeight}),e.scrollIntoView({block:`nearest`}))},[P,M,I]);let $=t=>{let n=Date.now();H.current.text=n-H.current.at>700?t:H.current.text+t,H.current.at=n;let r=H.current.text.toLowerCase(),i=M?P:e.findIndex(e=>e.value===A),a=[...e.keys()].map(t=>(t+i+ +(r.length===1)+e.length)%e.length).find(t=>K(t)&&e[t].label.toLowerCase().startsWith(r));a!==void 0&&(M?F(a):Z(a))};return(0,r.jsxs)(`div`,{className:[`ui-selc`,b].filter(Boolean).join(` `),"data-size":G,"data-open":M||void 0,"data-invalid":U||void 0,"data-disabled":g||void 0,children:[(0,r.jsx)(`style`,{href:`ui-select-clean`,precedence:`default`,children:c}),d!=null&&(0,r.jsxs)(`div`,{className:`ui-selc__head`,children:[(0,r.jsx)(`label`,{className:`ui-selc__label`,id:E,htmlFor:w,children:d}),m&&(0,r.jsx)(`span`,{className:`ui-selc__optional`,children:`Optional`})]}),(0,r.jsxs)(`button`,{ref:e=>{B.current=e,typeof S==`function`?S(e):S&&(S.current=e)},id:w,type:`button`,className:`ui-selc__trigger`,role:`combobox`,"aria-haspopup":`listbox`,"aria-expanded":M,"aria-controls":T,"aria-activedescendant":M&&P>=0?O(P):void 0,"aria-label":x,"aria-labelledby":x||d==null?void 0:`${E} ${w}`,"aria-describedby":W?D:void 0,"aria-invalid":U||void 0,"aria-required":v||void 0,disabled:g,onClick:()=>M?X():Y(),onKeyDown:e=>{if(!g){if(!M){e.key===`ArrowDown`||e.key===`ArrowUp`||e.key===`Enter`||e.key===` `?(e.preventDefault(),Y()):e.key.length===1&&!e.metaKey&&!e.ctrlKey&&!e.altKey&&$(e.key);return}switch(e.key){case`ArrowDown`:e.preventDefault(),F(e=>J(e,1));break;case`ArrowUp`:e.preventDefault(),F(e=>J(e,-1));break;case`Home`:case`PageUp`:e.preventDefault(),F(q());break;case`End`:case`PageDown`:e.preventDefault(),F(ne());break;case`Enter`:case` `:e.preventDefault(),e.key===` `&&Date.now()-H.current.at<700?$(` `):Z(P);break;case`Escape`:e.preventDefault(),X();break;case`Tab`:X(!1);break;default:e.key.length===1&&!e.metaKey&&!e.ctrlKey&&!e.altKey&&$(e.key)}}},children:[j?.icon&&(0,r.jsx)(`span`,{className:`ui-selc__icon`,"aria-hidden":`true`,children:j.icon}),(0,r.jsx)(`span`,{className:`ui-selc__value`,"data-empty":j?void 0:``,title:j?.label,children:j?j.label:u}),(0,r.jsx)(`span`,{className:`ui-selc__chevron`,"aria-hidden":`true`,children:(0,r.jsx)(s,{})})]}),_&&(0,r.jsx)(`input`,{type:`hidden`,name:_,value:A??``}),M&&(0,r.jsxs)(`div`,{ref:V,id:T,className:`ui-selc__list`,role:`listbox`,"aria-labelledby":d==null?void 0:E,"aria-label":d==null?x??u:void 0,popover:`manual`,"data-up":I?.up||void 0,style:I?{top:I.up?void 0:I.top,bottom:I.up?window.innerHeight-I.top:void 0,left:I.left,width:I.width,maxHeight:I.maxHeight}:void 0,onPointerLeave:()=>F(-1),children:[R&&(0,r.jsx)(`span`,{className:`ui-selc__glow`,"aria-hidden":`true`,style:{transform:`translateY(${R.top}px)`,height:R.height}}),e.map((e,t)=>(0,r.jsxs)(`div`,{id:O(t),className:`ui-selc__option`,role:`option`,"data-index":t,"aria-selected":e.value===A,"aria-disabled":e.disabled||void 0,"data-active":t===P||void 0,onPointerMove:()=>e.disabled||t===P||F(t),onPointerDown:e=>e.preventDefault(),onClick:()=>Z(t),children:[e.icon&&(0,r.jsx)(`span`,{className:`ui-selc__icon`,"aria-hidden":`true`,children:e.icon}),(0,r.jsxs)(`span`,{className:`ui-selc__text`,children:[(0,r.jsx)(`span`,{className:`ui-selc__option-label`,children:e.label}),e.description&&(0,r.jsx)(`span`,{className:`ui-selc__option-hint`,children:e.description})]}),(0,r.jsx)(`span`,{className:`ui-selc__check`,"aria-hidden":`true`,children:e.value===A&&(0,r.jsx)(ee,{})})]},e.value))]}),W&&(0,r.jsx)(`p`,{className:`ui-selc__message`,id:D,"aria-live":o(p)?`polite`:void 0,children:W},o(p)?`error`:`hint`)]})}var a=[`sm`,`md`,`lg`],o=e=>e!=null&&typeof e!=`boolean`&&e!==``;function s(){return(0,r.jsx)(`svg`,{viewBox:`0 0 24 24`,width:`14`,height:`14`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:(0,r.jsx)(`path`,{d:`m7 10 5 5 5-5`})})}function ee(){return(0,r.jsx)(`svg`,{viewBox:`0 0 24 24`,width:`14`,height:`14`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:(0,r.jsx)(`path`,{className:`ui-selc__tick`,d:`M5 12.5 9.5 17 19 7`,pathLength:1})})}var c=`
/* Colors and motion as variables – override them on .ui-selc (see Theming in the docs) */
.ui-selc {
  --ui-selc-title: var(--aui-ink, rgba(0, 0, 0, 0.88));
  --ui-selc-ink: var(--aui-ink, rgba(0, 0, 0, 0.88));
  --ui-selc-subtle: var(--aui-muted, rgba(0, 0, 0, 0.45));
  --ui-selc-faint: var(--aui-placeholder, rgba(0, 0, 0, 0.3));
  --ui-selc-icon: var(--aui-muted, rgba(0, 0, 0, 0.447));
  --ui-selc-surface: var(--aui-surface, #ffffff);
  --ui-selc-menu: var(--aui-surface, #ffffff);
  --ui-selc-glow: rgba(0, 0, 0, 0.045);
  --ui-selc-readonly: rgba(0, 0, 0, 0.02);
  --ui-selc-shadow: 0 0 0 0.5px var(--aui-border, rgba(0, 0, 0, 0.08)), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --ui-selc-shadow-hover: 0 0 0 0.5px var(--aui-border-strong, rgba(0, 0, 0, 0.13)), 0 1px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --ui-selc-shadow-open: 0 0 0 1px var(--aui-border-strong, rgba(0, 0, 0, 0.28)), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --ui-selc-shadow-menu: 0 0 0 0.5px rgba(0, 0, 0, 0.08), 0 8px 24px -6px rgba(0, 0, 0, 0.14), 0 2px 6px -2px rgba(0, 0, 0, 0.06);
  --ui-selc-danger: var(--aui-danger, #c4320a);
  --ui-selc-danger-edge: color-mix(in srgb, var(--aui-red, #f04438) 55%, transparent);
  --ui-selc-focus: var(--aui-focus, rgba(0, 96, 226, 0.7));
  --ui-selc-ease: cubic-bezier(0.22, 1, 0.36, 1);

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
  color: var(--ui-selc-ink);
  -webkit-font-smoothing: antialiased;
}
.ui-selc[data-size="sm"] { --h: 28px; --px: 8px; --radius: calc(var(--aui-radius, 7px) - 1px); }
.ui-selc[data-size="lg"] { --h: 36px; --px: 12px; --fs: 14px; --radius: calc(var(--aui-radius, 7px) + 1px); }
/* Touch screens: a comfortable tap height and 16px text */
@media (pointer: coarse) {
  .ui-selc { --fs: 16px; }
  .ui-selc[data-size="sm"] { --h: 34px; }
  .ui-selc[data-size="md"] { --h: 38px; }
  .ui-selc[data-size="lg"] { --h: 40px; }
}

.ui-selc__head { display: flex; align-items: baseline; gap: 6px; min-width: 0; }
.ui-selc__label { min-width: 0; font-weight: 500; color: var(--ui-selc-title); overflow-wrap: anywhere; cursor: default; }
.ui-selc__optional { flex: none; font-size: 12px; line-height: 16px; color: var(--ui-selc-subtle); }

/* The field: the Text Field's look – white, a hairline edge that firms up on hover and while open */
.ui-selc__trigger {
  display: flex;
  align-items: center;
  gap: 8px;
  box-sizing: border-box;
  width: 100%;
  height: var(--h);
  min-width: 0;
  margin: 0;
  padding: 0 calc(var(--px) - 2px) 0 var(--px);
  border: 0;
  border-radius: var(--radius);
  background: var(--ui-selc-surface);
  box-shadow: var(--ui-selc-shadow);
  font: inherit;
  font-size: var(--fs);
  color: var(--ui-selc-ink);
  text-align: start;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: box-shadow 140ms ease, background-color 140ms ease;
}
.ui-selc__trigger:hover { box-shadow: var(--ui-selc-shadow-hover); }
.ui-selc[data-open] .ui-selc__trigger { box-shadow: var(--ui-selc-shadow-open); }
.ui-selc__trigger:focus-visible { outline: 2px solid var(--ui-selc-focus); outline-offset: 2px; }
.ui-selc[data-invalid] .ui-selc__trigger { box-shadow: 0 0 0 1px var(--ui-selc-danger-edge), 0 1px 2px 0 rgba(0, 0, 0, 0.05); }
.ui-selc__trigger:disabled { background: var(--ui-selc-readonly); box-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06); cursor: not-allowed; }
.ui-selc[data-disabled] { opacity: 0.55; }

.ui-selc__value { flex: 1; min-width: 0; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
.ui-selc__value[data-empty] { color: var(--ui-selc-faint); }
.ui-selc__icon { display: grid; flex: none; place-items: center; width: 16px; height: 16px; color: var(--ui-selc-icon); }
.ui-selc__icon > svg, .ui-selc__icon > img { display: block; width: 16px; height: 16px; }
.ui-selc__chevron { display: grid; flex: none; place-items: center; width: 16px; height: 16px; color: var(--ui-selc-icon); transition: transform 240ms var(--ui-selc-ease); }
.ui-selc[data-open] .ui-selc__chevron { transform: rotate(180deg); }

/* The list: a white card in the top layer, at the field's edge */
.ui-selc__list {
  position: fixed;
  inset: auto;
  z-index: 1000;
  box-sizing: border-box;
  margin: 0;
  padding: 4px;
  border: 0;
  border-radius: 10px;
  background: var(--ui-selc-menu);
  box-shadow: var(--ui-selc-shadow-menu);
  color: var(--ui-selc-ink);
  font: inherit;
  overflow-y: auto;
  overscroll-behavior: contain;
  scrollbar-width: thin;
  transform-origin: top center;
  animation: ui-selc-in 200ms var(--ui-selc-ease) both;
}
.ui-selc__list[data-up] { transform-origin: bottom center; }
.ui-selc__list::backdrop { display: none; }

/* One soft highlight that glides between the rows */
.ui-selc__glow {
  position: absolute;
  top: 0;
  left: 4px;
  right: 4px;
  border-radius: 6px;
  background: var(--ui-selc-glow);
  pointer-events: none;
  transition: transform 180ms var(--ui-selc-ease), height 180ms var(--ui-selc-ease);
}

.ui-selc__option {
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  min-height: 32px;
  padding: 6px 8px;
  box-sizing: border-box;
  border-radius: 6px;
  font-size: 13px;
  line-height: 20px;
  cursor: pointer;
  user-select: none;
}
.ui-selc__option[aria-disabled] { color: var(--ui-selc-faint); cursor: default; }
.ui-selc__option[aria-disabled] .ui-selc__icon { opacity: 0.5; }
.ui-selc__text { display: grid; flex: 1; min-width: 0; }
.ui-selc__option-label { overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
.ui-selc__option[aria-selected="true"] .ui-selc__option-label { font-weight: 500; }
.ui-selc__option-hint { overflow: hidden; font-size: 12px; line-height: 16px; white-space: nowrap; text-overflow: ellipsis; color: var(--ui-selc-subtle); }
.ui-selc__check { display: grid; flex: none; place-items: center; width: 16px; height: 16px; color: var(--ui-selc-ink); }
.ui-selc__tick { stroke-dasharray: 1; animation: ui-selc-draw 280ms 40ms var(--ui-selc-ease) both; }
@media (pointer: coarse) {
  .ui-selc__option { min-height: 40px; font-size: 15px; }
}

.ui-selc__message { margin: 0; font-size: 12px; line-height: 16px; color: var(--ui-selc-subtle); overflow-wrap: anywhere; animation: ui-selc-message 260ms var(--ui-selc-ease); }
.ui-selc[data-invalid] .ui-selc__message { color: var(--ui-selc-danger); }

@keyframes ui-selc-in {
  from { opacity: 0; transform: translateY(-4px) scale(0.98); }
}
.ui-selc__list[data-up] { animation-name: ui-selc-in-up; }
@keyframes ui-selc-in-up {
  from { opacity: 0; transform: translateY(4px) scale(0.98); }
}
@keyframes ui-selc-draw {
  from { stroke-dashoffset: 1; }
  to { stroke-dashoffset: 0; }
}
@keyframes ui-selc-message {
  from { opacity: 0; transform: translateY(-3px); filter: blur(2px); }
}

@media (prefers-reduced-motion: reduce) {
  .ui-selc *, .ui-selc__list { animation-duration: 1ms !important; }
  .ui-selc__glow, .ui-selc__chevron, .ui-selc__trigger { transition-duration: 1ms; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-selc {
  --ui-selc-title: var(--aui-ink, rgba(255, 255, 255, 0.92));
  --ui-selc-ink: var(--aui-ink, rgba(255, 255, 255, 0.9));
  --ui-selc-subtle: var(--aui-muted, rgba(255, 255, 255, 0.46));
  --ui-selc-faint: var(--aui-placeholder, rgba(255, 255, 255, 0.3));
  --ui-selc-icon: var(--aui-muted, rgba(255, 255, 255, 0.5));
  --ui-selc-surface: var(--aui-surface, #1c1c1e);
  --ui-selc-menu: var(--aui-surface, #1f1f22);
  --ui-selc-glow: rgba(255, 255, 255, 0.07);
  --ui-selc-readonly: rgba(255, 255, 255, 0.03);
  --ui-selc-shadow: 0 0 0 0.5px var(--aui-border, rgba(255, 255, 255, 0.14)), 0 1px 2px 0 rgba(0, 0, 0, 0.4);
  --ui-selc-shadow-hover: 0 0 0 0.5px var(--aui-border-strong, rgba(255, 255, 255, 0.2)), 0 1px 2px 0 rgba(0, 0, 0, 0.4);
  --ui-selc-shadow-open: 0 0 0 1px var(--aui-border-strong, rgba(255, 255, 255, 0.3)), 0 1px 2px 0 rgba(0, 0, 0, 0.4);
  --ui-selc-shadow-menu: 0 0 0 0.5px rgba(255, 255, 255, 0.12), 0 12px 32px -8px rgba(0, 0, 0, 0.6);
  --ui-selc-danger: var(--aui-danger, #ff8a7a);
  --ui-selc-danger-edge: color-mix(in srgb, var(--aui-red, #ff6b5f) 50%, transparent);
  --ui-selc-focus: var(--aui-focus, rgba(77, 141, 255, 0.8));
}
`;export{i as t};