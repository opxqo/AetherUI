import{t as e}from"./react-BkAXpnfr.js";import{t}from"./jsx-runtime-CTsRTJUX.js";/* empty css             */var n=e(),r=t();function i({options:e,value:t,defaultValue:i=null,onChange:u,placeholder:d=`Choose…`,label:f,hint:p,error:m,optional:h=!1,size:g=`md`,disabled:_=!1,name:v,required:ee,id:te,className:ne,"aria-label":y,ref:b}){let x=(0,n.useId)(),S=te??`${x}-trigger`,C=`${x}-list`,w=`${x}-label`,T=`${x}-message`,E=e=>`${x}-option-${e}`,[D,O]=(0,n.useState)(i),k=t===void 0?D:t,A=e.find(e=>e.value===k)??null,[j,M]=(0,n.useState)(!1),[N,P]=(0,n.useState)(-1),[F,I]=(0,n.useState)(null),[L,R]=(0,n.useState)(null),z=(0,n.useRef)(null),B=(0,n.useRef)(null),V=(0,n.useRef)({text:``,at:0}),H=!!m,U=o(m)?m:o(p)?p:null,W=a.includes(g)?g:`md`,G=t=>t>=0&&t<e.length&&!e[t].disabled,K=()=>e.findIndex(e=>!e.disabled),q=()=>{for(let t=e.length-1;t>=0;t--)if(!e[t].disabled)return t;return-1},J=(t,n)=>{for(let r=t+n;r>=0&&r<e.length;r+=n)if(!e[r].disabled)return r;return t},Y=t=>{if(_||!e.length)return;let n=e.findIndex(e=>e.value===k);P(t??(G(n)?n:K())),M(!0)},X=(e=!0)=>{M(!1),R(null),I(null),e&&z.current?.focus({preventScroll:!0})},Z=n=>{if(!G(n))return;let r=e[n];t===void 0&&O(r.value),r.value!==k&&u?.(r.value,r),X()},Q=()=>{let e=z.current;if(!e)return;let t=e.getBoundingClientRect(),n=window.innerHeight-t.bottom-4-8,r=t.top-4-8,i=Math.min(B.current?.scrollHeight??280,288),a=n<Math.min(i,160)&&r>n,o=Math.max(t.width,180),s=Math.min(Math.max(8,t.left),window.innerWidth-o-8);I({top:a?t.top-4:t.bottom+4,left:s,width:o,maxHeight:Math.max(120,Math.min(288,a?r:n)),up:a})};(0,n.useLayoutEffect)(()=>{if(!j)return;let e=B.current;e&&`showPopover`in e&&!e.matches(`:popover-open`)&&e.showPopover(),Q();let t=()=>Q();return window.addEventListener(`resize`,t),window.addEventListener(`scroll`,t,!0),()=>{window.removeEventListener(`resize`,t),window.removeEventListener(`scroll`,t,!0),e&&`hidePopover`in e&&e.matches(`:popover-open`)&&e.hidePopover()}},[j]),(0,n.useEffect)(()=>{if(!j)return;let e=e=>{let t=e.target;z.current?.contains(t)||B.current?.contains(t)||X(!1)};return document.addEventListener(`pointerdown`,e,!0),()=>document.removeEventListener(`pointerdown`,e,!0)},[j]),(0,n.useLayoutEffect)(()=>{if(!j||N<0)return;let e=B.current?.querySelector(`[data-index="${N}"]`);e&&(R({top:e.offsetTop,height:e.offsetHeight}),e.scrollIntoView({block:`nearest`}))},[N,j,F]);let $=t=>{let n=Date.now();V.current.text=n-V.current.at>700?t:V.current.text+t,V.current.at=n;let r=V.current.text.toLowerCase(),i=j?N:e.findIndex(e=>e.value===k),a=[...e.keys()].map(t=>(t+i+ +(r.length===1)+e.length)%e.length).find(t=>G(t)&&e[t].label.toLowerCase().startsWith(r));a!==void 0&&(j?P(a):Z(a))};return(0,r.jsxs)(`div`,{className:[`ui-sel`,ne].filter(Boolean).join(` `),"data-size":W,"data-open":j||void 0,"data-invalid":H||void 0,"data-disabled":_||void 0,children:[(0,r.jsx)(`style`,{href:`ui-select`,precedence:`default`,children:l}),f!=null&&(0,r.jsxs)(`div`,{className:`ui-sel__head`,children:[(0,r.jsx)(`label`,{className:`ui-sel__label`,id:w,htmlFor:S,children:f}),h&&(0,r.jsx)(`span`,{className:`ui-sel__optional`,children:`Optional`})]}),(0,r.jsxs)(`button`,{ref:e=>{z.current=e,typeof b==`function`?b(e):b&&(b.current=e)},id:S,type:`button`,className:`ui-sel__trigger`,role:`combobox`,"aria-haspopup":`listbox`,"aria-expanded":j,"aria-controls":C,"aria-activedescendant":j&&N>=0?E(N):void 0,"aria-label":y,"aria-labelledby":y||f==null?void 0:`${w} ${S}`,"aria-describedby":U?T:void 0,"aria-invalid":H||void 0,"aria-required":ee||void 0,disabled:_,onClick:()=>j?X():Y(),onKeyDown:e=>{if(!_){if(!j){e.key===`ArrowDown`||e.key===`ArrowUp`||e.key===`Enter`||e.key===` `?(e.preventDefault(),Y()):e.key.length===1&&!e.metaKey&&!e.ctrlKey&&!e.altKey&&$(e.key);return}switch(e.key){case`ArrowDown`:e.preventDefault(),P(e=>J(e,1));break;case`ArrowUp`:e.preventDefault(),P(e=>J(e,-1));break;case`Home`:case`PageUp`:e.preventDefault(),P(K());break;case`End`:case`PageDown`:e.preventDefault(),P(q());break;case`Enter`:case` `:e.preventDefault(),e.key===` `&&Date.now()-V.current.at<700?$(` `):Z(N);break;case`Escape`:e.preventDefault(),X();break;case`Tab`:X(!1);break;default:e.key.length===1&&!e.metaKey&&!e.ctrlKey&&!e.altKey&&$(e.key)}}},children:[A?.icon&&(0,r.jsx)(`span`,{className:`ui-sel__icon`,"aria-hidden":`true`,children:A.icon}),(0,r.jsx)(`span`,{className:`ui-sel__value`,"data-empty":A?void 0:``,title:A?.label,children:A?A.label:d}),(0,r.jsx)(`span`,{className:`ui-sel__chevron`,"aria-hidden":`true`,children:(0,r.jsx)(s,{})})]}),v&&(0,r.jsx)(`input`,{type:`hidden`,name:v,value:k??``}),j&&(0,r.jsxs)(`div`,{ref:B,id:C,className:`ui-sel__list`,role:`listbox`,"aria-labelledby":f==null?void 0:w,"aria-label":f==null?y??d:void 0,popover:`manual`,"data-up":F?.up||void 0,style:F?{top:F.up?void 0:F.top,bottom:F.up?window.innerHeight-F.top:void 0,left:F.left,width:F.width,maxHeight:F.maxHeight}:void 0,onPointerLeave:()=>P(-1),children:[L&&(0,r.jsx)(`span`,{className:`ui-sel__glow`,"aria-hidden":`true`,style:{transform:`translateY(${L.top}px)`,height:L.height}}),e.map((e,t)=>(0,r.jsxs)(`div`,{id:E(t),className:`ui-sel__option`,role:`option`,"data-index":t,"aria-selected":e.value===k,"aria-disabled":e.disabled||void 0,"data-active":t===N||void 0,onPointerMove:()=>e.disabled||t===N||P(t),onPointerDown:e=>e.preventDefault(),onClick:()=>Z(t),children:[e.icon&&(0,r.jsx)(`span`,{className:`ui-sel__icon`,"aria-hidden":`true`,children:e.icon}),(0,r.jsxs)(`span`,{className:`ui-sel__text`,children:[(0,r.jsx)(`span`,{className:`ui-sel__option-label`,children:e.label}),e.description&&(0,r.jsx)(`span`,{className:`ui-sel__option-hint`,children:e.description})]}),(0,r.jsx)(`span`,{className:`ui-sel__check`,"aria-hidden":`true`,children:e.value===k&&(0,r.jsx)(c,{})})]},e.value))]}),U&&(0,r.jsx)(`p`,{className:`ui-sel__message`,id:T,"aria-live":o(m)?`polite`:void 0,children:U},o(m)?`error`:`hint`)]})}var a=[`sm`,`md`,`lg`],o=e=>e!=null&&typeof e!=`boolean`&&e!==``;function s(){return(0,r.jsx)(`svg`,{viewBox:`0 0 24 24`,width:`14`,height:`14`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:(0,r.jsx)(`path`,{d:`m7 10 5 5 5-5`})})}function c(){return(0,r.jsx)(`svg`,{viewBox:`0 0 24 24`,width:`14`,height:`14`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:(0,r.jsx)(`path`,{className:`ui-sel__tick`,d:`M5 12.5 9.5 17 19 7`,pathLength:1})})}var l=`
/* Colors and motion as variables – override them on .ui-sel (see Theming in the docs) */
.ui-sel {
  --ui-sel-title: var(--aui-ink, #171717);
  --ui-sel-ink: var(--aui-ink, #171717);
  --ui-sel-subtle: var(--aui-muted, #8f8f8f);
  --ui-sel-faint: var(--aui-placeholder, #b5b5b5);
  --ui-sel-icon: var(--aui-muted, #8f8f8f);
  --ui-sel-surface: var(--aui-surface, #ffffff);
  --ui-sel-menu: var(--aui-surface, #ffffff);
  --ui-sel-line: var(--aui-border, #e6e6e8);
  --ui-sel-edge: var(--aui-border-strong, #d4d4d8);
  --ui-sel-edge-open: var(--aui-border-strong, #b4b4bb);
  --ui-sel-glow: #f4f4f5;
  --ui-sel-readonly: #fafafa;
  --ui-sel-shadow-menu: 0 0 0 1px rgba(0, 0, 0, 0.06), 0 18px 40px -12px rgba(0, 0, 0, 0.18), 0 4px 12px -4px rgba(0, 0, 0, 0.06);
  --ui-sel-danger: var(--aui-danger, #c4320a);
  --ui-sel-danger-edge: #ff8a7a;
  --ui-sel-danger-wash: color-mix(in srgb, var(--aui-red, #f04438) 4%, transparent);
  --ui-sel-focus: var(--aui-focus, rgba(0, 96, 226, 0.7));
  --ui-sel-ease: cubic-bezier(0.22, 1, 0.36, 1);

  --h: 36px;
  --px: 12px;
  --fs: 13.5px;
  --radius: var(--aui-radius, 10px);

  display: flex;
  flex-direction: column;
  gap: 7px;
  min-width: 0;
  font-family: var(--aui-font, "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif);
  font-size: 13.5px;
  line-height: 20px;
  color: var(--ui-sel-ink);
  -webkit-font-smoothing: antialiased;
}
.ui-sel[data-size="sm"] { --h: 32px; --px: 10px; --fs: 13px; --radius: calc(var(--aui-radius, 10px) - 1px); }
.ui-sel[data-size="lg"] { --h: 40px; --px: 14px; --fs: 14px; --radius: calc(var(--aui-radius, 10px) + 2px); }
/* Touch screens: a comfortable tap height and 16px text */
@media (pointer: coarse) {
  .ui-sel { --fs: 16px; }
  .ui-sel[data-size="sm"] { --h: 36px; }
  .ui-sel[data-size="md"] { --h: 40px; }
  .ui-sel[data-size="lg"] { --h: 44px; }
}

.ui-sel__head { display: flex; align-items: baseline; gap: 6px; min-width: 0; padding: 0 2px; }
.ui-sel__label { min-width: 0; font-size: 13px; font-weight: 500; color: var(--ui-sel-title); overflow-wrap: anywhere; cursor: default; }
.ui-sel__optional { flex: none; font-size: 12px; line-height: 16px; color: var(--ui-sel-subtle); }

/* The field: the Text Field's look – white with a 1px gray edge that darkens on hover and while open */
.ui-sel__trigger {
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
  background: var(--ui-sel-surface);
  box-shadow: 0 0 0 1px var(--ui-sel-line), 0 1px 2px rgba(0, 0, 0, 0.04);
  font: inherit;
  font-size: var(--fs);
  color: var(--ui-sel-ink);
  text-align: start;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: box-shadow 140ms ease, background-color 140ms ease;
}
.ui-sel__trigger:hover { box-shadow: 0 0 0 1px var(--ui-sel-edge), 0 1px 2px rgba(0, 0, 0, 0.04); }
.ui-sel[data-open] .ui-sel__trigger { box-shadow: 0 0 0 1px var(--ui-sel-edge-open), 0 1px 2px rgba(0, 0, 0, 0.04); }
.ui-sel__trigger:focus-visible { outline: 2px solid var(--ui-sel-focus); outline-offset: 2px; }
.ui-sel[data-invalid] .ui-sel__trigger { background: var(--ui-sel-danger-wash); box-shadow: 0 0 0 1px var(--ui-sel-danger-edge), 0 1px 2px rgba(0, 0, 0, 0.04); }
.ui-sel__trigger:disabled { background: var(--ui-sel-readonly); box-shadow: 0 0 0 1px var(--ui-sel-line); cursor: not-allowed; }
.ui-sel[data-disabled] { opacity: 0.55; }

.ui-sel__value { flex: 1; min-width: 0; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
.ui-sel__value[data-empty] { color: var(--ui-sel-faint); }
.ui-sel__icon { display: grid; flex: none; place-items: center; width: 16px; height: 16px; color: var(--ui-sel-icon); }
.ui-sel__icon > svg, .ui-sel__icon > img { display: block; width: 16px; height: 16px; }
.ui-sel__chevron { display: grid; flex: none; place-items: center; width: 16px; height: 16px; color: var(--ui-sel-icon); transition: transform 240ms var(--ui-sel-ease); }
.ui-sel[data-open] .ui-sel__chevron { transform: rotate(180deg); }

/* The list: a white card in the top layer, at the field's edge */
.ui-sel__list {
  position: fixed;
  inset: auto;
  z-index: 1000;
  box-sizing: border-box;
  margin: 0;
  padding: 5px;
  border: 0;
  border-radius: 14px;
  background: var(--ui-sel-menu);
  box-shadow: var(--ui-sel-shadow-menu);
  color: var(--ui-sel-ink);
  font: inherit;
  overflow-y: auto;
  overscroll-behavior: contain;
  scrollbar-width: thin;
  transform-origin: top center;
  animation: ui-sel-in 200ms var(--ui-sel-ease) both;
}
.ui-sel__list[data-up] { transform-origin: bottom center; }
.ui-sel__list::backdrop { display: none; }

/* One soft highlight that glides between the rows */
.ui-sel__glow {
  position: absolute;
  top: 0;
  left: 5px;
  right: 5px;
  border-radius: 9px;
  background: var(--ui-sel-glow);
  pointer-events: none;
  transition: transform 180ms var(--ui-sel-ease), height 180ms var(--ui-sel-ease);
}

.ui-sel__option {
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  min-height: 34px;
  padding: 7px 10px;
  box-sizing: border-box;
  border-radius: 9px;
  font-size: 13.5px;
  line-height: 20px;
  cursor: pointer;
  user-select: none;
}
.ui-sel__option[aria-disabled] { color: var(--ui-sel-faint); cursor: default; }
.ui-sel__option[aria-disabled] .ui-sel__icon { opacity: 0.5; }
.ui-sel__text { display: grid; flex: 1; min-width: 0; }
.ui-sel__option-label { overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
.ui-sel__option[aria-selected="true"] .ui-sel__option-label { font-weight: 500; }
.ui-sel__option-hint { overflow: hidden; font-size: 12px; line-height: 16px; white-space: nowrap; text-overflow: ellipsis; color: var(--ui-sel-subtle); }
.ui-sel__check { display: grid; flex: none; place-items: center; width: 16px; height: 16px; color: var(--ui-sel-ink); }
.ui-sel__tick { stroke-dasharray: 1; animation: ui-sel-draw 280ms 40ms var(--ui-sel-ease) both; }
@media (pointer: coarse) {
  .ui-sel__option { min-height: 40px; font-size: 15px; }
}

.ui-sel__message { margin: 0; padding: 0 2px; font-size: 12.5px; line-height: 17px; color: var(--ui-sel-subtle); overflow-wrap: anywhere; animation: ui-sel-message 260ms var(--ui-sel-ease); }
.ui-sel[data-invalid] .ui-sel__message { color: var(--ui-sel-danger); }

@keyframes ui-sel-in {
  from { opacity: 0; transform: translateY(-4px) scale(0.98); }
}
.ui-sel__list[data-up] { animation-name: ui-sel-in-up; }
@keyframes ui-sel-in-up {
  from { opacity: 0; transform: translateY(4px) scale(0.98); }
}
@keyframes ui-sel-draw {
  from { stroke-dashoffset: 1; }
  to { stroke-dashoffset: 0; }
}
@keyframes ui-sel-message {
  from { opacity: 0; transform: translateY(-3px); filter: blur(2px); }
}

@media (prefers-reduced-motion: reduce) {
  .ui-sel *, .ui-sel__list { animation-duration: 1ms !important; }
  .ui-sel__glow, .ui-sel__chevron, .ui-sel__trigger { transition-duration: 1ms; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-sel {
  --ui-sel-title: var(--aui-ink, #ededed);
  --ui-sel-ink: var(--aui-ink, #ededed);
  --ui-sel-subtle: var(--aui-muted, #8b8b92);
  --ui-sel-faint: var(--aui-placeholder, #5c5c63);
  --ui-sel-icon: var(--aui-muted, #8b8b92);
  --ui-sel-surface: var(--aui-surface, #19191b);
  --ui-sel-menu: var(--aui-surface, #19191b);
  --ui-sel-line: var(--aui-border, #2a2a2e);
  --ui-sel-edge: var(--aui-border-strong, #3a3a40);
  --ui-sel-edge-open: var(--aui-border-strong, #4e4e55);
  --ui-sel-glow: #26262a;
  --ui-sel-readonly: #151517;
  --ui-sel-shadow-menu: 0 0 0 1px rgba(255, 255, 255, 0.06), 0 18px 40px -12px rgba(0, 0, 0, 0.6);
  --ui-sel-danger: var(--aui-danger, #ff8a7a);
  --ui-sel-danger-edge: color-mix(in srgb, var(--aui-red, #ff6b5f) 45%, transparent);
  --ui-sel-danger-wash: color-mix(in srgb, var(--aui-red, #ff6b5f) 6%, transparent);
  --ui-sel-focus: var(--aui-focus, rgba(77, 141, 255, 0.8));
}
`,u=e=>(0,r.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.6`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,r.jsx)(`path`,{d:e})}),d=[{value:`design`,label:`Design`,icon:u(`M4 20h4L19 9l-4-4L4 16v4ZM13.5 6.5l4 4`)},{value:`engineering`,label:`Engineering`,icon:u(`m8 8-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14`)},{value:`product`,label:`Product`,icon:u(`M4 19V9M10 19V5M16 19v-7M21 19H3`)},{value:`founder`,label:`Founder`,icon:u(`M12 3c3 2 5 5.5 5 9.5L15 15H9l-2-2.5C7 8.5 9 5 12 3ZM9 15l-2 4 3-1M15 15l2 4-3-1M12 9.5v.01`)},{value:`other`,label:`Something else`,icon:u(`M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21c0-4 3.6-6 8-6s8 2 8 6`)}],f=[{value:`auto`,label:`Auto`,description:`Picks the model for each message`},{value:`opus`,label:`Claude Opus 5.5`,description:`Best for hard, long questions`},{value:`sonnet`,label:`Claude Sonnet 5.5`,description:`Fast and strong for most work`},{value:`haiku`,label:`Claude Haiku 5.5`,description:`Quickest, for short answers`},{value:`custom`,label:`Your own model`,description:`Add an endpoint in Models first`,disabled:!0}],p=[`Pacific Time – Los Angeles`,`Mountain Time – Denver`,`Central Time – Chicago`,`Eastern Time – New York`,`Brasília Time – São Paulo`,`Greenwich Time – London`,`Central European Time – Berlin`,`Central European Time – Warsaw`,`Eastern European Time – Athens`,`Gulf Time – Dubai`,`India Time – Mumbai`,`China Time – Shanghai`,`Japan Time – Tokyo`,`Australian Eastern Time – Sydney`].map(e=>({value:e,label:e}));function m(){let[e,t]=(0,n.useState)(`design`),[a,o]=(0,n.useState)(`auto`),[s,c]=(0,n.useState)(null);return(0,r.jsx)(`div`,{className:`sel-demo`,children:(0,r.jsx)(`div`,{className:`sel-demo__tray`,children:(0,r.jsxs)(`form`,{className:`sel-demo__card`,onSubmit:e=>e.preventDefault(),children:[(0,r.jsx)(i,{label:`Role`,options:d,value:e,onChange:t,hint:`Helps tailor suggestions to your work.`}),(0,r.jsx)(i,{label:`Default model`,options:f,value:a,onChange:o}),(0,r.jsx)(i,{label:`Time zone`,options:p,value:s,onChange:c,placeholder:`Choose a time zone`,error:s?void 0:`Pick one, so reminders arrive on time.`})]})})})}export { m as default, i as __InnerComponent };