import{t as e}from"./react-BkAXpnfr.js";import{t}from"./jsx-runtime-CTsRTJUX.js";/* empty css             */var n=e(),r=t(),i=[1,-.84,1.12],a=[0,.42,.18],o=(e,t)=>t>0?(e%t+t)%t:0,s=(e,t,n)=>Math.min(n,Math.max(t,e)),c=e=>(typeof Intl.Segmenter==`function`?new Intl.Segmenter().segment(e)[Symbol.iterator]().next().value?.segment:Array.from(e)[0])??``,l=/^(jr|sr|i{1,3}|iv|v|vi|phd|md|esq)\.?,?$/i,u=e=>{let t=e.split(/\s+/).filter(Boolean),n=t.filter(e=>/^\p{L}/u.test(e)),r=n.length?n:t,i=r.length>1?r.filter((e,t)=>t===0||!l.test(e)):r;return(i.length>1?[i[0],i[i.length-1]]:i).map(e=>c(e).toUpperCase()).join(``)||`?`},d=e=>{let t=e.currentTarget;t.title=t.scrollWidth>t.clientWidth+1||t.scrollHeight>t.clientHeight+1?t.textContent??``:``};function f({src:e,name:t}){let[i,a]=(0,n.useState)(null);return e&&i!==e?(0,r.jsx)(`img`,{className:`ui-twc__avatar`,src:e,alt:``,width:32,height:32,loading:`lazy`,decoding:`async`,draggable:!1,onError:()=>a(e)}):(0,r.jsx)(`span`,{className:`ui-twc__avatar ui-twc__avatar--initials`,"aria-hidden":`true`,children:u(t)})}var p=(e,t)=>Math.min(t,e>=740?3:e>=480?2:1);function m({items:e,columns:t=3,speed:c=28,pauseOnHover:l=!0,label:u=`What customers say`,className:m}){let g=(0,n.useRef)(null),_=(0,n.useRef)([]),v=(0,n.useRef)([]),y=(0,n.useRef)([]),b=(0,n.useRef)([]),x=(0,n.useRef)([]),S=(0,n.useRef)([]),C=(0,n.useRef)([]),[w,T]=(0,n.useState)(t),E=Math.max(1,Math.min(w,e.length)),[D,O]=(0,n.useState)([]),[k,A]=(0,n.useState)(!1),j=Array.from({length:E},(t,n)=>e.filter((e,t)=>t%E===n)),M=(0,n.useRef)({speed:c,pauseOnHover:l,count:E});M.current={speed:c,pauseOnHover:l,count:E},(0,n.useEffect)(()=>{let e=window.matchMedia(`(prefers-reduced-motion: reduce)`),t=()=>A(e.matches);return t(),e.addEventListener(`change`,t),()=>e.removeEventListener(`change`,t)},[]),(0,n.useLayoutEffect)(()=>{let e=g.current;if(!e)return;let n=()=>T(p(e.clientWidth,t));n();let r=new ResizeObserver(n);return r.observe(e),()=>r.disconnect()},[t]),(0,n.useEffect)(()=>{if(k)return;let e=()=>{let e=j.map((e,t)=>{let n=y.current[t],r=_.current[t];if(!n||!r)return 2;let i=r.getBoundingClientRect().height/(r.offsetHeight||1)||1,o=n.getBoundingClientRect().height/i,s=b.current[t]??={y:o*(a[t]??0),v:0,h:o,drag:null,seek:0};return s.h>0&&o>0&&s.h!==o&&(s.y=s.y/s.h*o),s.h=o,o>0?Math.min(12,Math.ceil(r.clientHeight/o)+1):2});b.current.length=j.length,O(t=>t.length===e.length&&t.every((t,n)=>t===e[n])?t:e)};e();let t=new ResizeObserver(e);for(let e of[...y.current.slice(0,E),..._.current.slice(0,E)])e&&t.observe(e);return()=>t.disconnect()},[k,E,e]),(0,n.useEffect)(()=>{let e=g.current;if(k||!e)return;let t=0,n=0,r=!1,a=e=>{let c=n?Math.min(.05,(e-n)/1e3):0;n=e;let{speed:l,pauseOnHover:u,count:d}=M.current;for(let e=0;e<d;e++){let t=b.current[e],n=v.current[e];if(!t||!n||t.h<=0)continue;let r=d===1?1:i[e%3],a=S.current[e]||C.current[e]||u&&x.current[e];if(!t.drag){let e=a?0:l*r,n=Math.abs(t.v-e)>Math.max(120,l*2)?.55:a?.32:.7;if(t.v+=(e-t.v)*(1-Math.exp(-c/n)),t.y+=t.v*c,t.seek){let e=t.seek*(1-Math.exp(-c/.12));t.y+=e,t.seek=Math.abs(t.seek-e)<.5?0:t.seek-e}}t.y=C.current[e]?s(t.y,-t.h,t.h*2):o(t.y,t.h),n.style.transform=`translate3d(0, ${-(t.h+t.y)}px, 0)`}t=r?requestAnimationFrame(a):0},c=new IntersectionObserver(([e])=>{r=e.isIntersecting,r&&!t&&(n=0,t=requestAnimationFrame(a))});return c.observe(e),()=>{c.disconnect(),cancelAnimationFrame(t)}},[k]);let N=e=>t=>{let n=b.current[e];if(n){if(t.pointerType===`touch`){S.current[e]=!0;return}t.button===0&&(n.drag={id:t.pointerId,lastY:t.clientY,lastT:t.timeStamp,moved:0,captured:!1},n.v=0)}},P=e=>t=>{let n=b.current[e],r=n?.drag;if(!n||!r||r.id!==t.pointerId)return;let i=t.currentTarget,a=i.getBoundingClientRect().height/(i.offsetHeight||1)||1,o=(t.clientY-r.lastY)/a,s=Math.max(1,t.timeStamp-r.lastT)/1e3;r.moved+=Math.abs(o),!r.captured&&r.moved>4&&(r.captured=!0,i.setPointerCapture(t.pointerId),i.setAttribute(`data-dragging`,``)),n.y-=o,n.v=n.v*.6+-o/s*.4,r.lastY=t.clientY,r.lastT=t.timeStamp},F=e=>t=>{S.current[e]=!1;let n=b.current[e],r=n?.drag;if(n&&r&&r.id===t.pointerId&&(t.timeStamp-r.lastT>80&&(n.v=0),n.v=s(n.v,-2400,2400),n.drag=null,t.currentTarget.removeAttribute(`data-dragging`),r.captured)){let e=t.currentTarget,n=e=>{e.preventDefault(),e.stopPropagation()};e.addEventListener(`click`,n,{capture:!0,once:!0}),setTimeout(()=>e.removeEventListener(`click`,n,{capture:!0}),0)}},I=e=>t=>{let n=b.current[e],r=_.current[e];if(k||!n||!r||n.h<=0||!t.currentTarget.matches(`:focus-visible`))return;let i=t.currentTarget.parentElement.offsetTop,a=t.currentTarget.offsetHeight,o=r.clientHeight,s=Math.min(56,o*.12);n.y=[n.y-n.h,n.y,n.y+n.h].reduce((e,t)=>Math.abs(i-t-o/2)<Math.abs(i-e-o/2)?t:e);let c=i-n.y;n.seek=a>o-s*2||c<s?c-s:c+a>o-s?c+a-(o-s):0},L=(e,t,n,i)=>{let a=[e.role?.trim(),e.company?.trim()].filter(Boolean).join(`\xA0· `),o=e.rating?s(Math.round(e.rating),1,5):0;return(0,r.jsx)(`li`,{className:`ui-twc__item`,children:(0,r.jsxs)(`figure`,{className:`ui-twc__card`,tabIndex:n?0:void 0,onFocus:n?I(t):void 0,children:[o&&Number.isFinite(o)?(0,r.jsx)(`div`,{className:`ui-twc__stars`,role:`img`,"aria-label":`Rated ${o} out of 5`,children:Array.from({length:5},(e,t)=>(0,r.jsx)(`svg`,{viewBox:`0 0 16 16`,"aria-hidden":`true`,"data-on":t<o||void 0,children:(0,r.jsx)(`path`,{d:`M8 1.6l1.9 3.95 4.35.6-3.17 3.03.78 4.32L8 11.43 4.14 13.5l.78-4.32L1.75 6.15l4.35-.6L8 1.6z`})},t))}):null,e.quote.trim()&&(0,r.jsx)(`blockquote`,{className:`ui-twc__quote`,children:(0,r.jsx)(`p`,{dir:`auto`,onPointerEnter:d,children:e.quote.trim()})}),(0,r.jsxs)(`figcaption`,{className:`ui-twc__who`,children:[(0,r.jsx)(f,{src:e.avatar,name:e.name}),(0,r.jsxs)(`span`,{className:`ui-twc__id`,children:[(0,r.jsxs)(`span`,{className:`ui-twc__name`,children:[(0,r.jsx)(`span`,{className:`ui-twc__name-text`,dir:`auto`,onPointerEnter:d,children:e.name.trim()}),e.verified?(0,r.jsxs)(`svg`,{className:`ui-twc__verified`,viewBox:`0 0 16 16`,role:`img`,"aria-label":`Verified customer`,children:[(0,r.jsx)(`circle`,{cx:`8`,cy:`8`,r:`7`}),(0,r.jsx)(`path`,{d:`M5.2 8.1l1.9 1.9 3.7-3.8`,fill:`none`,stroke:`var(--ui-twc-card)`,strokeWidth:`1.6`,strokeLinecap:`round`,strokeLinejoin:`round`})]}):null]}),a?(0,r.jsx)(`span`,{className:`ui-twc__meta`,dir:`auto`,onPointerEnter:d,children:a}):null]})]})]})},i)},R=[`ui-twc`,m].filter(Boolean).join(` `);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(`style`,{href:`ui-testimonial-wall-clean`,precedence:`default`,children:h}),(0,r.jsxs)(`div`,{ref:g,className:R,role:`region`,"aria-label":u,"data-cols":E,"data-static":k||void 0,style:{"--ui-twc-cols":E},"data-empty":e.length===0||void 0,children:[e.length===0&&(0,r.jsx)(`p`,{className:`ui-twc__empty`,children:`No quotes yet`}),e.length>0&&j.map((e,t)=>k?(0,r.jsx)(`div`,{className:`ui-twc__col`,children:(0,r.jsx)(`ul`,{className:`ui-twc__set`,children:e.map((e,n)=>L(e,t,!0,String(n)))})},t):(0,r.jsx)(`div`,{ref:e=>{_.current[t]=e},className:`ui-twc__col`,onPointerEnter:e=>{e.pointerType!==`touch`&&(x.current[t]=!0)},onPointerLeave:()=>x.current[t]=!1,onPointerDown:N(t),onPointerMove:P(t),onPointerUp:F(t),onPointerCancel:F(t),onFocus:e=>C.current[t]=e.target.matches(`:focus-visible`),onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||(C.current[t]=!1)},children:(0,r.jsx)(`div`,{ref:e=>{v.current[t]=e},className:`ui-twc__track`,style:{transform:`translate3d(0, ${-((b.current[t]?.h??0)+(b.current[t]?.y??0))}px, 0)`},children:Array.from({length:1+Math.max(2,D[t]??2)},(n,i)=>{let a=i===1;return(0,r.jsx)(`ul`,{ref:a?e=>{y.current[t]=e}:void 0,className:`ui-twc__set`,"aria-hidden":!a||void 0,inert:!a||void 0,children:e.map((e,n)=>L(e,t,a,`${i}-${n}`))},a?`real`:i)})})},t))]})]})}var h=`
.ui-twc {
  --ui-twc-card: var(--aui-surface, #ffffff);
  --ui-twc-title: var(--aui-ink, #000000);
  --ui-twc-text: var(--aui-ink, rgba(0, 0, 0, 0.88));
  --ui-twc-muted: var(--aui-muted, rgba(0, 0, 0, 0.45));
  --ui-twc-faint: var(--aui-placeholder, rgba(0, 0, 0, 0.27));
  --ui-twc-star: rgba(0, 0, 0, 0.36);
  --ui-twc-star-off: rgba(0, 0, 0, 0.08);
  --ui-twc-initials: #f5f5f5;
  --ui-twc-initials-ink: rgba(0, 0, 0, 0.45);
  --ui-twc-ring: rgba(0, 0, 0, 0.06);
  --ui-twc-shadow: var(--aui-shadow-card, 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05));
  --ui-twc-lift: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 2px 4px 0 rgba(0, 0, 0, 0.04), 0 12px 24px -12px rgba(0, 0, 0, 0.12);
  --ui-twc-focus: var(--aui-focus, rgba(0, 96, 226, 0.7));
  --ui-twc-gap: 16px;
  --ui-twc-fade: 120px;
  --ui-twc-dim: 0.6;
  --ui-twc-ease: var(--aui-ease, cubic-bezier(0.22, 1, 0.36, 1));
  container-type: inline-size;
  display: grid;
  grid-template-columns: repeat(var(--ui-twc-cols, 3), minmax(0, 1fr));
  /* One row exactly as tall as the wall, so a column's height never follows its (repeated) content */
  grid-template-rows: minmax(0, 1fr);
  gap: var(--ui-twc-gap);
  width: 100%;
  min-width: 0;
  height: var(--ui-twc-height, 600px);
  /* Room at the sides for the lifted card's shadow and the focus ring; the wall clips everything else */
  padding-inline: 12px;
  box-sizing: border-box;
  overflow: hidden;
  /* A long, eased fade – the cards dissolve into the white instead of hitting an edge */
  -webkit-mask-image: linear-gradient(180deg, transparent 0, rgba(0, 0, 0, 0.35) calc(var(--ui-twc-fade) * 0.4), #000 var(--ui-twc-fade), #000 calc(100% - var(--ui-twc-fade)), rgba(0, 0, 0, 0.35) calc(100% - var(--ui-twc-fade) * 0.4), transparent 100%);
  mask-image: linear-gradient(180deg, transparent 0, rgba(0, 0, 0, 0.35) calc(var(--ui-twc-fade) * 0.4), #000 var(--ui-twc-fade), #000 calc(100% - var(--ui-twc-fade)), rgba(0, 0, 0, 0.35) calc(100% - var(--ui-twc-fade) * 0.4), transparent 100%);
  font-family: var(--aui-font, "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif);
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
  -webkit-font-smoothing: antialiased;
}
:where(.ui-twc) *, :where(.ui-twc) *::before, :where(.ui-twc) *::after { box-sizing: border-box; }

.ui-twc[data-empty] { display: grid; place-items: center; height: auto; min-height: 160px; -webkit-mask-image: none; mask-image: none; }
.ui-twc .ui-twc__empty { margin: 0; font-size: 13px; line-height: 20px; color: var(--ui-twc-muted); }

.ui-twc__col {
  position: relative;
  min-width: 0;
  min-height: 0;
  height: 100%;
  cursor: grab;
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
}
.ui-twc__col[data-dragging] { cursor: grabbing; }
.ui-twc__track { will-change: transform; }
.ui-twc .ui-twc__set {
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
}
/* Every card carries its gap below, so one set's height is exactly the wrap distance */
.ui-twc .ui-twc__item { margin: 0 0 var(--ui-twc-gap); }

.ui-twc .ui-twc__card {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0;
  padding: 20px;
  border-radius: calc(var(--aui-radius-lg, 10px) + 2px);
  background: var(--ui-twc-card);
  box-shadow: var(--ui-twc-shadow);
  color: var(--ui-twc-text);
  transition: transform 320ms var(--ui-twc-ease), box-shadow 320ms var(--ui-twc-ease), opacity 320ms var(--ui-twc-ease);
}
.ui-twc__card:focus { outline: none; }
.ui-twc__card:focus-visible { outline: 2px solid var(--ui-twc-focus); outline-offset: 2px; }

/* Stars sit a little closer to the quote they rate */
.ui-twc .ui-twc__stars { display: flex; gap: 2px; margin-bottom: -6px; }
.ui-twc__stars svg { display: block; width: 12px; height: 12px; fill: var(--ui-twc-star-off); }
.ui-twc__stars svg[data-on] { fill: var(--ui-twc-star); }

.ui-twc .ui-twc__quote { margin: 0; }
.ui-twc .ui-twc__quote p {
  margin: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.084px;
  color: var(--ui-twc-text);
  text-wrap: pretty;
  overflow-wrap: break-word;
  /* Line breaks in a quote are kept; very long quotes stop at ten lines so a card never outgrows the wall */
  white-space: pre-line;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 10;
  line-clamp: 10;
  overflow: hidden;
}

.ui-twc .ui-twc__who { display: flex; align-items: center; gap: 10px; min-width: 0; margin: 0; }
.ui-twc__avatar {
  flex: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  background: var(--ui-twc-initials);
  /* A 0.5px ring keeps light photos from melting into the card */
  box-shadow: 0 0 0 0.5px var(--ui-twc-ring);
  pointer-events: none;
}
.ui-twc__avatar--initials {
  display: grid;
  place-items: center;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  color: var(--ui-twc-initials-ink);
}
.ui-twc__id { display: grid; gap: 0; min-width: 0; }
.ui-twc__name {
  display: flex;
  /* Top-aligned, so the check stays on the first line when a long name wraps */
  align-items: flex-start;
  gap: 4px;
  min-width: 0;
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  color: var(--ui-twc-title);
}
/* The name identifies the person: it wraps to a second line (an email-like name breaks anywhere) and only then is cut */
.ui-twc__name-text {
  display: -webkit-box;
  min-width: 0;
  overflow: hidden;
  overflow-wrap: anywhere;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-clamp: 2;
}
.ui-twc__verified { flex: none; margin-top: 3px; display: block; width: 14px; height: 14px; fill: var(--ui-twc-faint); }
/* Role and company wrap once at most, then end in an ellipsis */
.ui-twc__meta {
  min-width: 0;
  overflow: hidden;
  overflow-wrap: anywhere;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  font-size: 12px;
  line-height: 16px;
  color: var(--ui-twc-muted);
}

/* Hover: the card under the pointer lifts a little, the rest of the wall steps back */
@media (hover: hover) {
  .ui-twc__col:not([data-dragging]) .ui-twc__card:hover { transform: translateY(-2px); box-shadow: var(--ui-twc-lift); }
  .ui-twc:has(.ui-twc__col:not([data-dragging]) .ui-twc__card:hover) .ui-twc__card:not(:hover) { opacity: var(--ui-twc-dim); }
}
/* Keyboard focus gets the same lift */
.ui-twc .ui-twc__card:focus-visible { transform: translateY(-2px); box-shadow: var(--ui-twc-lift); }

/* Touch screens: a little more room inside the cards, so a resting finger never covers the text it holds */
@media (pointer: coarse) {
  .ui-twc .ui-twc__card { padding: 20px 20px 22px; }
}

/* Narrow walls (one column on phones): a little less padding, so the quote keeps its width */
@container (max-width: 479px) {
  .ui-twc .ui-twc__card { padding: 18px; }
}
@container (max-width: 739px) {
  .ui-twc__col { --ui-twc-gap: 12px; }
}

/* Reduced motion: a static masonry that shows every quote – no fixed height, no fade */
.ui-twc[data-static] {
  height: auto;
  grid-template-rows: auto;
  overflow: visible;
  -webkit-mask-image: none;
  mask-image: none;
}
.ui-twc[data-static] .ui-twc__col { height: auto; cursor: auto; user-select: auto; -webkit-user-select: auto; }

@media (prefers-reduced-motion: reduce) {
  .ui-twc .ui-twc__card { transition: none; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-twc {
  --ui-twc-card: var(--aui-surface, #1c1c1e);
  --ui-twc-title: var(--aui-ink, #ffffff);
  --ui-twc-text: var(--aui-ink, rgba(255, 255, 255, 0.88));
  --ui-twc-muted: var(--aui-muted, rgba(255, 255, 255, 0.45));
  --ui-twc-faint: var(--aui-placeholder, rgba(255, 255, 255, 0.27));
  --ui-twc-star: rgba(255, 255, 255, 0.4);
  --ui-twc-star-off: rgba(255, 255, 255, 0.1);
  --ui-twc-initials: #2a2a2d;
  --ui-twc-initials-ink: rgba(255, 255, 255, 0.45);
  --ui-twc-ring: rgba(255, 255, 255, 0.08);
  --ui-twc-shadow: var(--aui-shadow-card, 0 0 0 0.5px rgba(255, 255, 255, 0.08), 0 1px 2px 0 rgba(0, 0, 0, 0.4));
  --ui-twc-lift: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.4), 0 12px 24px -12px rgba(0, 0, 0, 0.6);
  --ui-twc-focus: var(--aui-focus, rgba(77, 141, 255, 0.8));
}
`,g=[{quote:`We replaced three half-finished internal kits with it in a sprint. Our product finally looks like one product.`,name:`Lena Hartmann`,role:`Design Lead`,company:`Fieldnote`,avatar:`/avatars/lena.jpg`,rating:5},{quote:`The motion is the part nobody notices – which is exactly the point.`,name:`Jonas Weber`,role:`Staff Engineer`,company:`Ledgerline`,avatar:`/avatars/jonas.jpg`,verified:!0},{quote:`I opened the date range picker expecting to fix the keyboard handling. There was nothing to fix. Focus, arrows, Escape, screen reader labels – all there, and it still felt light.`,name:`Priya Raman`,role:`Frontend Engineer`,company:`Tidepool Health`,verified:!0},{quote:`Copy, paste, ship. Then actually read the code and learn something.`,name:`Mara Lindqvist`,role:`Product Designer`,company:`Kitewise`,avatar:`/avatars/mara.jpg`,rating:5},{quote:`Our designers stopped redlining spacing in reviews. The defaults are calm and consistent, and dark mode just works without a second pass.`,name:`Daniel Okafor`,role:`Head of Design`,company:`Northpeak`},{quote:`Every component is one file with no dependencies. Our bundle audit took five minutes.`,name:`Noah Fischer`,role:`Tech Lead`,company:`Parcelwise`,avatar:`/avatars/noah.jpg`,verified:!0},{quote:`It feels like it was built by people who care about the last 5%.`,name:`Camille Roux`,role:`Design Engineer`,company:`Sundial`,rating:5},{quote:`We shipped a new onboarding flow in two days. The dropzone and the command menu alone saved us a week of polish – the empty states and the little transitions were already better than what we had planned.`,name:`Sofia Marino`,role:`Product Manager`,company:`Brightloop`,avatar:`/avatars/sofia.jpg`,verified:!0},{quote:`Finally a library that doesn't look like every other AI-generated dashboard.`,name:`Elif Demir`,role:`Brand Designer`,company:`Harbor Studio`,rating:5},{quote:`The phone layouts are the real surprise. Everything holds up at 320 pixels, which I can't say about our own app.`,name:`Theo Brandt`,role:`Mobile Engineer`,company:`Copperleaf`,avatar:`/avatars/theo.jpg`},{quote:`Accessible by default, without me having to argue for it in planning.`,name:`Marcus Lee`,role:`Accessibility Lead`,company:`Quillstack`,verified:!0},{quote:`I use it as a reference as much as a library. When a junior asks how a height animation should feel, I just send them the source.`,name:`Hana Sato`,role:`Principal Designer`,company:`Plainview`,rating:5}];function _(){return(0,r.jsxs)(`div`,{className:`testimonial-wall-demo testimonial-wall-demo--clean`,children:[(0,r.jsxs)(`header`,{className:`testimonial-wall-demo__head`,children:[(0,r.jsx)(`p`,{className:`testimonial-wall-demo__eyebrow`,children:`Testimonials`}),(0,r.jsx)(`h2`,{className:`testimonial-wall-demo__title`,children:`Loved by product teams`})]}),(0,r.jsx)(m,{items:g,speed:26,label:`What product teams say`})]})}export{_ as default};
export { m as __InnerComponent };
