import{t as e}from"./react-BkAXpnfr.js";import{t}from"./jsx-runtime-CTsRTJUX.js";/* empty css             */var n=e(),r=t();function i({name:e,summary:t,icon:i,status:a,args:o,result:c,error:h,startedAt:g,duration:_,defaultOpen:v=!1,open:b,onOpenChange:x,openOnError:S=!0,onRetry:C,maxCodeHeight:w=220,className:T}){let E=(0,n.useId)(),[D,O]=(0,n.useState)(v),k=b??D,A=e=>{b===void 0&&O(e),x?.(e)},[j,M]=(0,n.useState)(a),[N,P]=(0,n.useState)(!1);a!==j&&(M(a),b===void 0&&S&&(a===`error`&&!D?(O(!0),P(!0)):j===`error`&&N&&(O(!1),P(!1))));let F=p(a===`running`,g,!1),I=a===`running`?F??0:_??F,L=a===`running`?`${e} running`:a===`success`?`${e} finished`:`${e} failed${h?`: ${h}`:``}`;return(0,r.jsxs)(`div`,{className:[`ui-tcl`,T].filter(Boolean).join(` `),"data-status":a,"data-open":k||void 0,children:[(0,r.jsx)(`style`,{href:`ui-tool-call`,precedence:`default`,children:y}),(0,r.jsx)(`span`,{className:`ui-tcl-sr`,role:`status`,"aria-live":`polite`,children:L}),(0,r.jsxs)(`button`,{type:`button`,className:`ui-tcl__head`,"aria-expanded":k,"aria-controls":`${E}-body`,onClick:()=>{P(!1),A(!k)},children:[(0,r.jsx)(`span`,{className:`ui-tcl__icon`,"aria-hidden":`true`,children:i??(0,r.jsx)(f,{})}),(0,r.jsxs)(`span`,{className:`ui-tcl__main`,children:[(0,r.jsx)(`code`,{className:`ui-tcl__name`,title:e,children:e}),t!=null&&(0,r.jsx)(`span`,{className:`ui-tcl__summary`,dir:`auto`,title:typeof t==`string`?t:void 0,children:t})]}),(0,r.jsxs)(`span`,{className:`ui-tcl__status`,children:[a===`running`&&(0,r.jsx)(l,{}),a===`success`&&(0,r.jsx)(`svg`,{className:`ui-tcl__ok`,viewBox:`0 0 16 16`,"aria-hidden":`true`,children:(0,r.jsx)(`path`,{d:`M3.5 8.4 6.6 11.3 12.5 4.9`,pathLength:1})}),a===`error`&&(0,r.jsx)(u,{}),(0,r.jsx)(`span`,{className:`ui-tcl__time`,children:a===`error`?`Failed`:I==null?null:m(I,a===`running`)})]},a),(0,r.jsx)(d,{})]}),(0,r.jsx)(`div`,{className:`ui-tcl__body`,id:`${E}-body`,inert:!k,children:(0,r.jsx)(`div`,{className:`ui-tcl__clip`,children:(0,r.jsxs)(`div`,{className:`ui-tcl__sections`,children:[a===`error`&&(0,r.jsxs)(`div`,{className:`ui-tcl__error`,children:[(0,r.jsx)(u,{}),(0,r.jsx)(`p`,{className:`ui-tcl__error-text`,dir:`auto`,children:h??`The tool call failed.`}),C&&(0,r.jsxs)(`button`,{type:`button`,className:`ui-tcl__retry`,onClick:C,children:[(0,r.jsxs)(`svg`,{viewBox:`0 0 16 16`,"aria-hidden":`true`,children:[(0,r.jsx)(`path`,{d:`M2.75 8a5.25 5.25 0 1 0 1.6-3.77`}),(0,r.jsx)(`path`,{d:`M2.5 2.5v2.75h2.75`})]}),`Retry`]})]}),o!==void 0&&(0,r.jsx)(s,{label:`Arguments`,value:o,cap:w}),c===void 0?a===`running`?(0,r.jsxs)(`div`,{className:`ui-tcl__section`,children:[(0,r.jsx)(`div`,{className:`ui-tcl__section-head`,children:(0,r.jsx)(`span`,{className:`ui-tcl__label`,children:`Result`})}),(0,r.jsx)(`p`,{className:`ui-tcl__pending`,children:`Waiting for result…`})]}):null:(0,r.jsx)(s,{label:`Result`,value:c,cap:w}),o===void 0&&c===void 0&&a===`success`&&(0,r.jsx)(`p`,{className:`ui-tcl__pending`,children:`No arguments or result.`})]})})})]})}function a({children:e,label:t,runningLabel:i=`Using tools…`,duration:a,defaultOpen:o=!1,open:s,onOpenChange:c,className:l}){let u=(0,n.useId)(),[h,g]=(0,n.useState)(o),_=s??h,v=n.Children.toArray(e).filter(n.isValidElement).map(e=>e.props),b=v.some(e=>e.status===`running`),x=v.filter(e=>e.status===`error`).length,S=p(b,v.reduce((e,t)=>t.status===`running`&&t.startedAt!=null&&(e==null||t.startedAt<e)?t.startedAt:e,void 0),!0),C=v.length&&v.every(e=>e.duration!=null)?v.reduce((e,t)=>e+(t.duration??0),0):null,w=b?S:a??C??S,T=`Used ${v.length.toLocaleString(`en-US`)} ${v.length===1?`tool`:`tools`}`,E=b?i:t??T,D=v.slice(-3);return(0,r.jsxs)(`div`,{className:[`ui-tcl-group`,l].filter(Boolean).join(` `),"data-running":b||void 0,"data-open":_||void 0,children:[(0,r.jsx)(`style`,{href:`ui-tool-call`,precedence:`default`,children:y}),(0,r.jsx)(`span`,{className:`ui-tcl-sr`,role:`status`,"aria-live":`polite`,children:b?i:`${T}${x?`, ${x} failed`:``}`}),(0,r.jsxs)(`button`,{type:`button`,className:`ui-tcl-group__head`,"aria-expanded":_,"aria-controls":`${u}-list`,onClick:()=>{s===void 0&&g(!_),c?.(!_)},children:[(0,r.jsx)(`span`,{className:`ui-tcl-group__stack`,"aria-hidden":`true`,children:D.map((e,t)=>(0,r.jsx)(`span`,{className:`ui-tcl__icon`,children:e.icon??(0,r.jsx)(f,{})},v.length-D.length+t))}),(0,r.jsxs)(`span`,{className:`ui-tcl-group__title`,children:[(0,r.jsx)(`span`,{className:b?`ui-tcl-group__label ui-tcl__shine`:`ui-tcl-group__label`,"data-text":E,children:E}),!b&&x>0&&(0,r.jsxs)(`span`,{className:`ui-tcl-group__failed`,children:[`· `,x,` failed`]}),w!=null&&(0,r.jsxs)(`span`,{className:`ui-tcl-group__time`,children:[`· `,m(w,b)]})]},b?`busy`:`done`),(0,r.jsx)(d,{})]}),(0,r.jsx)(`div`,{className:`ui-tcl__body`,id:`${u}-list`,inert:!_,children:(0,r.jsx)(`div`,{className:`ui-tcl__clip`,children:(0,r.jsx)(`div`,{className:`ui-tcl-group__list`,children:e})})})]})}var o=640;function s({label:e,value:t,cap:i}){let{text:a,json:s}=h(t),l=(0,n.useRef)(null),[u,d]=(0,n.useState)(!1),[f,p]=(0,n.useState)(0);(0,n.useLayoutEffect)(()=>{let e=l.current,t=e?.firstElementChild;if(!e||!t)return;let n=()=>p(e.scrollHeight);n();let r=new ResizeObserver(n);return r.observe(t),()=>r.disconnect()},[a]);let m=f>i+24;return(0,r.jsxs)(`div`,{className:`ui-tcl__section`,children:[(0,r.jsxs)(`div`,{className:`ui-tcl__section-head`,children:[(0,r.jsx)(`span`,{className:`ui-tcl__label`,children:e}),(0,r.jsx)(c,{text:a,label:e.toLowerCase()})]}),(0,r.jsx)(`pre`,{ref:l,className:`ui-tcl__code`,"data-capped":m&&!u||void 0,"data-scroll":m&&u&&f>o||void 0,style:m?{maxHeight:u?Math.min(f,o):i}:void 0,children:(0,r.jsx)(`code`,{children:s?_(a):a})}),m&&(0,r.jsx)(`button`,{type:`button`,className:`ui-tcl__more`,"aria-expanded":u,onClick:()=>d(!u),children:u?`Show less`:`Show all`})]})}function c({text:e,label:t}){let[i,a]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{if(!i)return;let e=window.setTimeout(()=>a(!1),1400);return()=>window.clearTimeout(e)},[i]),(0,r.jsxs)(`button`,{type:`button`,className:`ui-tcl__copy`,"data-copied":i||void 0,"aria-label":i?`Copied`:`Copy ${t}`,title:i?`Copied`:`Copy ${t}`,onClick:()=>v(e).then(e=>e&&a(!0)),children:[(0,r.jsxs)(`svg`,{className:`ui-tcl__copy-icon`,viewBox:`0 0 16 16`,"aria-hidden":`true`,children:[(0,r.jsx)(`rect`,{x:`5.25`,y:`5.25`,width:`8`,height:`8`,rx:`2`}),(0,r.jsx)(`path`,{d:`M10.75 5.25v-1a1.5 1.5 0 0 0-1.5-1.5h-4.5a2 2 0 0 0-2 2v4.5a1.5 1.5 0 0 0 1.5 1.5h1`})]}),(0,r.jsx)(`svg`,{className:`ui-tcl__copy-done`,viewBox:`0 0 16 16`,"aria-hidden":`true`,children:(0,r.jsx)(`path`,{d:`M3.5 8.4 6.6 11.3 12.5 4.9`,pathLength:1})})]})}function l(){return(0,r.jsxs)(`svg`,{className:`ui-tcl__spinner`,viewBox:`0 0 16 16`,"aria-hidden":`true`,children:[(0,r.jsx)(`circle`,{cx:`8`,cy:`8`,r:`5.75`}),(0,r.jsx)(`path`,{d:`M8 2.25a5.75 5.75 0 0 1 5.75 5.75`})]})}function u(){return(0,r.jsxs)(`svg`,{className:`ui-tcl__err`,viewBox:`0 0 16 16`,"aria-hidden":`true`,children:[(0,r.jsx)(`circle`,{cx:`8`,cy:`8`,r:`6`}),(0,r.jsx)(`path`,{d:`M8 5v3.4M8 10.9v.1`})]})}function d(){return(0,r.jsx)(`svg`,{className:`ui-tcl__chevron`,viewBox:`0 0 16 16`,"aria-hidden":`true`,children:(0,r.jsx)(`path`,{d:`M4.5 6.25 8 9.75l3.5-3.5`})})}function f(){return(0,r.jsx)(`svg`,{viewBox:`0 0 16 16`,children:(0,r.jsx)(`path`,{d:`M10.2 2.4a3.5 3.5 0 0 0-4.3 4.6L2.6 10.3a1.4 1.4 0 0 0 2 2L7.9 9a3.5 3.5 0 0 0 4.6-4.3l-2 2-1.6-.4-.4-1.6 1.7-2.3Z`})})}function p(e,t,r){let i=(0,n.useRef)(null),a=(0,n.useRef)(0),[o,s]=(0,n.useState)(null);return(0,n.useEffect)(()=>{if(!e){i.current!==null&&(a.current+=Date.now()-i.current,i.current=null,s(a.current));return}r||(a.current=0),i.current=t??Date.now();let n=()=>s(a.current+Date.now()-(i.current??Date.now()));n();let o=window.setInterval(n,100);return()=>window.clearInterval(o)},[e,t,r]),o}function m(e,t){if(!t&&e<1e3)return`${Math.max(1,Math.round(e))}ms`;if(e<6e4)return`${(Math.floor(e/100)/10).toFixed(1)}s`;let n=Math.floor(e/1e3);if(n<3600)return`${Math.floor(n/60)}m ${String(n%60).padStart(2,`0`)}s`;let r=Math.floor(n/3600);return r<24?`${r}h ${String(Math.floor(n/60)%60).padStart(2,`0`)}m`:`${Math.floor(r/24)}d ${r%24}h`}function h(e){if(typeof e==`string`){let t=e.trim();if(t.startsWith(`{`)||t.startsWith(`[`))try{return{text:JSON.stringify(JSON.parse(t),null,2),json:!0}}catch{}return{text:e,json:!1}}try{let t=JSON.stringify(e,null,2);return t===void 0?{text:String(e),json:!1}:{text:t,json:!0}}catch{return{text:String(e),json:!1}}}var g=/("(?:[^"\\]|\\.)*")(\s*:)?|\b(?:true|false|null)\b|-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g;function _(e){let t=[],n=new RegExp(g.source,`g`),i=0,a;for(;a=n.exec(e);){if(a.index>i&&t.push(e.slice(i,a.index)),a[1]&&a[2])t.push((0,r.jsx)(`span`,{className:`ui-tcl__t-key`,children:a[1]},a.index),a[2]);else{let e=a[1]?`str`:/^[tfn]/.test(a[0])?`lit`:`num`;t.push((0,r.jsx)(`span`,{className:`ui-tcl__t-${e}`,children:a[0]},a.index))}i=a.index+a[0].length}return i<e.length&&t.push(e.slice(i)),t}async function v(e){try{return await navigator.clipboard.writeText(e),!0}catch{let t=document.createElement(`textarea`);t.value=e,t.style.cssText=`position:fixed;opacity:0`,document.body.appendChild(t),t.select();let n=document.execCommand(`copy`);return t.remove(),n}}var y=`
.ui-tcl,
.ui-tcl-group {
  --ui-tcl-ink: var(--aui-ink, #171717);
  --ui-tcl-text: var(--aui-muted, #6b6b6b);
  --ui-tcl-muted: var(--aui-muted, #8a8a8a);
  --ui-tcl-bg: var(--aui-surface, #ffffff);
  --ui-tcl-line: var(--aui-border, #e7e7e7);
  --ui-tcl-hover: var(--aui-subtle, #fafafa);
  --ui-tcl-tile: #f5f5f5;
  --ui-tcl-code: #fafafa;
  --ui-tcl-ring: #ffffff;
  --ui-tcl-red: var(--aui-danger, #c4320a);
  --ui-tcl-red-bg: color-mix(in srgb, var(--aui-red, #f04438) 6%, transparent);
  --ui-tcl-red-line: color-mix(in srgb, var(--aui-red, #f04438) 16%, transparent);
  --ui-tcl-key: #171717;
  --ui-tcl-str: #0b8576;
  --ui-tcl-num: var(--aui-warning, #b25e00);
  --ui-tcl-lit: #8a35d6;
  --ui-tcl-shine: rgba(255, 255, 255, 0.82);
  --ui-tcl-focus: var(--aui-focus, rgba(0, 96, 226, 0.7));
  --ui-tcl-ease: var(--aui-ease, cubic-bezier(0.22, 1, 0.36, 1));
  --ui-tcl-mono: var(--aui-font-mono, ui-monospace, "SF Mono", Menlo, monospace);
  box-sizing: border-box;
  min-width: 0;
  color: var(--ui-tcl-text);
  font-family: var(--aui-font, "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif);
  font-size: 13.5px;
  line-height: 1.4;
  letter-spacing: -0.006em;
  -webkit-font-smoothing: antialiased;
}
.ui-tcl *,
.ui-tcl-group * { box-sizing: border-box; }

.ui-tcl {
  position: relative;
  border-radius: calc(var(--aui-radius-lg, 16px) - 4px);
  background: var(--ui-tcl-bg);
  box-shadow: var(--aui-shadow-card, inset 0 0 0 1px var(--ui-tcl-line), 0 1px 2px rgba(0, 0, 0, 0.04));
}
.ui-tcl-sr {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}

/* Header: icon, name + summary, status, chevron – everything truncates before it overflows */
.ui-tcl__head {
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  min-height: 44px;
  padding: 8px 10px 8px 9px;
  border-radius: calc(var(--aui-radius-lg, 16px) - 4px);
  cursor: pointer;
  transition: background-color 160ms ease;
}
.ui-tcl[data-open] .ui-tcl__head { border-radius: calc(var(--aui-radius-lg, 16px) - 4px) calc(var(--aui-radius-lg, 16px) - 4px) 0 0; }
.ui-tcl__head:focus-visible,
.ui-tcl-group__head:focus-visible,
.ui-tcl__copy:focus-visible,
.ui-tcl__more:focus-visible,
.ui-tcl__retry:focus-visible {
  outline: 2px solid var(--ui-tcl-focus);
  outline-offset: 2px;
}
@media (hover: hover) {
  .ui-tcl__head:hover { background: var(--ui-tcl-hover); }
  .ui-tcl-group__head:hover { background: var(--ui-tcl-hover); color: var(--ui-tcl-ink); }
  .ui-tcl__copy:hover { background: var(--ui-tcl-hover); color: var(--ui-tcl-ink); }
  .ui-tcl__more:hover { color: var(--ui-tcl-ink); }
  .ui-tcl__retry:hover { background: var(--ui-tcl-hover); }
}

.ui-tcl__icon {
  display: grid;
  place-items: center;
  flex: none;
  width: 26px;
  height: 26px;
  border-radius: 7px;
  background: var(--ui-tcl-tile);
  box-shadow: inset 0 0 0 1px var(--ui-tcl-line);
  color: var(--ui-tcl-ink);
}
.ui-tcl__icon > svg { width: 14px; height: 14px; fill: none; stroke: currentColor; stroke-width: 1.4; stroke-linecap: round; stroke-linejoin: round; }

.ui-tcl__main {
  display: flex;
  align-items: baseline;
  gap: 8px;
  flex: 1;
  min-width: 0;
}
.ui-tcl__name {
  flex: 0 1 auto;
  max-width: 55%;
  overflow: hidden;
  color: var(--ui-tcl-ink);
  font-family: var(--ui-tcl-mono);
  font-size: 12.5px;
  font-weight: 500;
  letter-spacing: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.ui-tcl__summary {
  flex: 1 1 0;
  min-width: 0;
  overflow: hidden;
  color: var(--ui-tcl-text);
  text-overflow: ellipsis;
  white-space: nowrap;
}

.ui-tcl__status {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  flex: none;
  color: var(--ui-tcl-muted);
  font-size: 12.5px;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  animation: ui-tcl-in 360ms var(--ui-tcl-ease) both;
}
.ui-tcl[data-status="error"] .ui-tcl__status { color: var(--ui-tcl-red); }
.ui-tcl__status > svg { width: 14px; height: 14px; flex: none; fill: none; stroke-linecap: round; stroke-linejoin: round; }
.ui-tcl__spinner circle { stroke: currentColor; stroke-width: 1.6; opacity: 0.22; }
.ui-tcl__spinner path { stroke: var(--ui-tcl-ink); stroke-width: 1.6; }
.ui-tcl__spinner { animation: ui-tcl-spin 800ms linear infinite; }
.ui-tcl__ok { stroke: var(--ui-tcl-ink); stroke-width: 1.8; }
.ui-tcl__ok path { stroke-dasharray: 1; stroke-dashoffset: 1; animation: ui-tcl-draw 360ms var(--ui-tcl-ease) 80ms forwards; }
.ui-tcl__err { stroke: var(--ui-tcl-red); stroke-width: 1.5; }

.ui-tcl__chevron {
  flex: none;
  width: 14px;
  height: 14px;
  fill: none;
  stroke: var(--ui-tcl-muted);
  stroke-width: 1.5;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: transform 360ms var(--ui-tcl-ease);
}
.ui-tcl[data-open] > .ui-tcl__head .ui-tcl__chevron,
.ui-tcl-group[data-open] > .ui-tcl-group__head .ui-tcl__chevron { transform: rotate(180deg); }

/* Body: grows from 0fr to 1fr, so the height animates without measuring */
.ui-tcl__body {
  display: grid;
  grid-template-rows: 0fr;
  opacity: 0;
  transition: grid-template-rows 380ms var(--ui-tcl-ease), opacity 240ms ease;
}
.ui-tcl[data-open] > .ui-tcl__body,
.ui-tcl-group[data-open] > .ui-tcl__body {
  grid-template-rows: 1fr;
  opacity: 1;
}
.ui-tcl__clip { min-height: 0; overflow: hidden; }
.ui-tcl__sections {
  display: grid;
  gap: 12px;
  padding: 12px;
  border-top: 1px solid var(--ui-tcl-line);
}

.ui-tcl__section { display: grid; gap: 6px; min-width: 0; }
.ui-tcl__section-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  min-height: 24px;
}
.ui-tcl__label { color: var(--ui-tcl-muted); font-size: 12px; font-weight: 500; }
.ui-tcl__pending { margin: 0; color: var(--ui-tcl-muted); font-size: 12.5px; }

.ui-tcl__copy {
  all: unset;
  position: relative;
  display: grid;
  place-items: center;
  width: 24px;
  height: 24px;
  border-radius: calc(var(--aui-radius-sm, 7px) - 1px);
  color: var(--ui-tcl-muted);
  cursor: pointer;
  transition: background-color 160ms ease, color 160ms ease;
}
.ui-tcl__copy svg {
  position: absolute;
  width: 14px;
  height: 14px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.4;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: opacity 200ms ease, transform 320ms var(--ui-tcl-ease), filter 200ms ease;
}
.ui-tcl__copy-done { opacity: 0; transform: scale(0.6); filter: blur(2px); stroke-width: 1.7; }
.ui-tcl__copy[data-copied] { color: var(--ui-tcl-ink); }
.ui-tcl__copy[data-copied] .ui-tcl__copy-icon { opacity: 0; transform: scale(0.6); filter: blur(2px); }
.ui-tcl__copy[data-copied] .ui-tcl__copy-done { opacity: 1; transform: none; filter: none; }

/* Code: wraps instead of scrolling sideways; capped blocks fade out at the bottom */
.ui-tcl__code {
  position: relative;
  margin: 0;
  padding: 10px 12px;
  overflow: hidden;
  border-radius: calc(var(--aui-radius-sm, 7px) + 1px);
  background: var(--ui-tcl-code);
  box-shadow: inset 0 0 0 1px var(--ui-tcl-line);
  color: var(--ui-tcl-muted);
  font-family: var(--ui-tcl-mono);
  font-size: 12px;
  line-height: 1.6;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  tab-size: 2;
  transition: max-height 420ms var(--ui-tcl-ease);
}
.ui-tcl__code code { display: block; font: inherit; }
.ui-tcl__code::after {
  content: "";
  position: absolute;
  left: 1px;
  right: 1px;
  bottom: 1px;
  height: 56px;
  border-radius: 0 0 var(--aui-radius-sm, 7px) var(--aui-radius-sm, 7px);
  background: linear-gradient(to bottom, transparent, var(--ui-tcl-code));
  opacity: 0;
  transition: opacity 240ms ease;
  pointer-events: none;
}
.ui-tcl__code[data-capped]::after { opacity: 1; }
.ui-tcl__code[data-scroll] { overflow-y: auto; overscroll-behavior: contain; }
.ui-tcl__t-key { color: var(--ui-tcl-key); }
.ui-tcl__t-str { color: var(--ui-tcl-str); }
.ui-tcl__t-num { color: var(--ui-tcl-num); }
.ui-tcl__t-lit { color: var(--ui-tcl-lit); }

.ui-tcl__more {
  all: unset;
  justify-self: start;
  padding: 2px 4px;
  margin-left: -4px;
  border-radius: 5px;
  color: var(--ui-tcl-text);
  font-size: 12.5px;
  font-weight: 500;
  cursor: pointer;
  transition: color 160ms ease;
}

/* Error: the message and an optional retry */
.ui-tcl__error {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 9px 10px 9px 11px;
  border-radius: calc(var(--aui-radius-sm, 7px) + 1px);
  background: var(--ui-tcl-red-bg);
  box-shadow: inset 0 0 0 1px var(--ui-tcl-red-line);
}
.ui-tcl__error > .ui-tcl__err { flex: none; width: 14px; height: 14px; margin-top: 2px; fill: none; stroke-linecap: round; }
.ui-tcl__error-text {
  flex: 1;
  min-width: 0;
  max-height: 200px;
  margin: 0;
  overflow-y: auto;
  overscroll-behavior: contain;
  white-space: pre-line;
  color: var(--ui-tcl-red);
  font-size: 13px;
  line-height: 1.45;
  overflow-wrap: anywhere;
}
.ui-tcl__retry {
  all: unset;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  flex: none;
  height: 26px;
  margin: -3px 0;
  padding: 0 10px 0 8px;
  border-radius: var(--aui-radius-sm, 7px);
  background: var(--ui-tcl-bg);
  box-shadow: inset 0 0 0 1px var(--ui-tcl-line), 0 1px 2px rgba(0, 0, 0, 0.04);
  color: var(--ui-tcl-ink);
  font-size: 12.5px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 160ms ease;
}
.ui-tcl__retry svg { width: 13px; height: 13px; fill: none; stroke: currentColor; stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round; }
.ui-tcl__retry:active svg { transform: rotate(-60deg); transition: transform 200ms var(--ui-tcl-ease); }

/* Group: one quiet line with the tool icons stacked, the cards below */
.ui-tcl-group { display: grid; }
.ui-tcl-group__head {
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 9px;
  justify-self: start;
  max-width: 100%;
  min-height: 36px;
  padding: 4px 10px 4px 5px;
  border-radius: var(--aui-radius, 10px);
  color: var(--ui-tcl-text);
  cursor: pointer;
  transition: background-color 160ms ease, color 160ms ease;
}
.ui-tcl-group__stack { display: flex; flex: none; }
.ui-tcl-group__stack .ui-tcl__icon {
  width: 24px;
  height: 24px;
  border-radius: 7px;
  box-shadow: inset 0 0 0 1px var(--ui-tcl-line), 0 0 0 2px var(--ui-tcl-ring);
  animation: ui-tcl-pop 420ms var(--ui-tcl-ease) both;
}
.ui-tcl-group__stack .ui-tcl__icon + .ui-tcl__icon { margin-left: -5px; }
.ui-tcl-group__stack .ui-tcl__icon > svg { width: 13px; height: 13px; }
.ui-tcl-group__title {
  display: flex;
  align-items: baseline;
  gap: 5px;
  min-width: 0;
  white-space: nowrap;
  animation: ui-tcl-in 360ms var(--ui-tcl-ease) both;
}
.ui-tcl-group__label {
  position: relative;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  color: inherit;
  font-weight: 500;
}
.ui-tcl-group__failed { flex: none; color: var(--ui-tcl-red); }
.ui-tcl-group__time { flex: none; color: var(--ui-tcl-muted); font-variant-numeric: tabular-nums; }
.ui-tcl-group__list { display: grid; gap: 8px; padding-top: 8px; }

/* A soft light sweeping over "Using tools…" */
.ui-tcl__shine::after {
  content: attr(data-text);
  content: attr(data-text) / "";
  position: absolute;
  inset: 0;
  white-space: nowrap;
  color: transparent;
  background: linear-gradient(90deg, transparent 38%, var(--ui-tcl-shine) 50%, transparent 62%) 100% 0 / 300% 100% no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  animation: ui-tcl-sweep 1.8s linear infinite;
  pointer-events: none;
}

@keyframes ui-tcl-in {
  from { opacity: 0; transform: translateY(3px); filter: blur(2px); }
  to { opacity: 1; transform: none; filter: none; }
}
@keyframes ui-tcl-pop {
  from { opacity: 0; transform: scale(0.6); }
  to { opacity: 1; transform: none; }
}
@keyframes ui-tcl-spin { to { transform: rotate(360deg); } }
@keyframes ui-tcl-draw { to { stroke-dashoffset: 0; } }
@keyframes ui-tcl-sweep {
  from { background-position: 100% 0; }
  to { background-position: 0% 0; }
}

@media (prefers-reduced-motion: reduce) {
  .ui-tcl *,
  .ui-tcl-group *,
  .ui-tcl *::after,
  .ui-tcl-group *::after {
    animation-duration: 1ms !important;
    animation-delay: 0ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 1ms !important;
  }
  .ui-tcl__shine::after { display: none; }
  .ui-tcl__ok path { stroke-dashoffset: 0; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-tcl,
:where(.dark, [data-theme="dark"]) .ui-tcl-group {
  --ui-tcl-ink: var(--aui-ink, #ededed);
  --ui-tcl-text: var(--aui-muted, #a1a1a1);
  --ui-tcl-muted: var(--aui-muted, #7c7c7c);
  --ui-tcl-bg: var(--aui-surface, #161618);
  --ui-tcl-line: var(--aui-border, rgba(255, 255, 255, 0.1));
  --ui-tcl-hover: var(--aui-subtle, rgba(255, 255, 255, 0.035));
  --ui-tcl-tile: #1d1d20;
  --ui-tcl-code: #1d1d20;
  --ui-tcl-ring: #161618;
  --ui-tcl-red: var(--aui-danger, #ff8a7a);
  --ui-tcl-red-bg: color-mix(in srgb, var(--aui-red, #ff6b5f) 8%, transparent);
  --ui-tcl-red-line: color-mix(in srgb, var(--aui-red, #ff6b5f) 20%, transparent);
  --ui-tcl-key: #ededed;
  --ui-tcl-str: var(--aui-teal, #4fc3b4);
  --ui-tcl-num: var(--aui-orange, #f2a15c);
  --ui-tcl-lit: #cfaef5;
  --ui-tcl-shine: rgba(255, 255, 255, 0.95);
  --ui-tcl-focus: var(--aui-focus, rgba(77, 141, 255, 0.8));
}
:where(.dark, [data-theme="dark"]) .ui-tcl { box-shadow: var(--aui-shadow-card, inset 0 0 0 1px var(--ui-tcl-line)); }
`,b=[0,1500,2700,4300,5400,6700,8e3],x=11500,S={results:[{title:`HubSpot Sales Hub pricing`,url:`https://www.hubspot.com/pricing/sales`,price_per_seat:90},{title:`Pipedrive plans and pricing`,url:`https://www.pipedrive.com/en/pricing`,price_per_seat:49},{title:`Attio pricing`,url:`https://attio.com/pricing`,price_per_seat:59},{title:`Salesforce Starter Suite`,url:`https://www.salesforce.com/sales/pricing`,price_per_seat:25},{title:`Close CRM pricing`,url:`https://www.close.com/pricing`,price_per_seat:49}],total:5,cached:!1};function C(){let[e,t]=(0,n.useState)(0),[o,s]=(0,n.useState)(0),[c,l]=(0,n.useState)(!0),u=(0,n.useRef)(!1);(0,n.useEffect)(()=>{u.current=!1,s(0),l(!0);let e=b.slice(1).map((e,t)=>window.setTimeout(()=>s(e=>Math.max(e,t+1)),e));return e.push(window.setTimeout(()=>!u.current&&l(!1),b[6])),e.push(window.setTimeout(()=>!u.current&&t(e=>e+1),x)),()=>e.forEach(clearTimeout)},[e]);let d=o===2?`error`:o>=4?`success`:`running`;return(0,r.jsx)(`div`,{className:`tc-demo`,children:(0,r.jsxs)(`div`,{className:`tc-demo__chat`,children:[(0,r.jsx)(`p`,{className:`tc-demo__you`,children:`Compare CRM pricing for our 10-person team and check open deals.`}),(0,r.jsxs)(a,{open:c,onOpenChange:e=>{u.current=!0,l(e)},children:[(0,r.jsx)(i,{name:`search_web`,icon:(0,r.jsx)(w,{}),status:o>=1?`success`:`running`,summary:o>=1?`Searched the web for 'CRM pricing 2026'`:`Searching the web for 'CRM pricing 2026'`,args:{query:`CRM pricing 2026 small sales team`,max_results:5},result:o>=1?S:void 0}),o>=1&&(0,r.jsx)(i,{name:`fetch_page`,icon:(0,r.jsx)(T,{}),status:d,summary:d===`success`?`Read hubspot.com/pricing`:`Reading hubspot.com/pricing`,args:{url:`https://www.hubspot.com/pricing/sales`,timeout_ms:8e3},result:d===`success`?{status:200,title:`Sales Hub Pricing`,words:2140}:void 0,error:`Request timed out after 8s – hubspot.com didn't respond.`,onRetry:()=>s(e=>Math.max(e,3))}),o>=4&&(0,r.jsx)(i,{name:`crm.list_deals`,icon:(0,r.jsx)(E,{}),status:o>=5?`success`:`running`,summary:o>=5?`Found 4 open deals in negotiation`:`Looking up open deals`,args:{stage:`negotiation`,owner:`me`,limit:10},result:o>=5?{count:4,deals:[{name:`Northwind`,value:18400},{name:`Globex`,value:9600}]}:void 0})]},e)]})})}function w(){return(0,r.jsxs)(`svg`,{viewBox:`0 0 16 16`,children:[(0,r.jsx)(`circle`,{cx:`7`,cy:`7`,r:`4.25`}),(0,r.jsx)(`path`,{d:`m10.25 10.25 3 3`})]})}function T(){return(0,r.jsxs)(`svg`,{viewBox:`0 0 16 16`,children:[(0,r.jsx)(`path`,{d:`M4 2.75h5l3 3v7.5H4z`}),(0,r.jsx)(`path`,{d:`M9 2.75v3h3M6 9h4M6 11h3`})]})}function E(){return(0,r.jsxs)(`svg`,{viewBox:`0 0 16 16`,children:[(0,r.jsx)(`ellipse`,{cx:`8`,cy:`4`,rx:`4.75`,ry:`1.75`}),(0,r.jsx)(`path`,{d:`M3.25 4v8c0 .97 2.13 1.75 4.75 1.75s4.75-.78 4.75-1.75V4M3.25 8c0 .97 2.13 1.75 4.75 1.75S12.75 8.97 12.75 8`})]})}export{C as default};
export { i as __InnerComponent, a as ToolCallGroup };
