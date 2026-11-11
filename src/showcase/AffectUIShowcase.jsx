import React, {
  useState,
  useEffect,
  useMemo,
  useRef,
  useCallback,
  Suspense,
  Component,
} from "react";
import { AFFECTUI_CATALOG } from "../affectui-engine/catalog.js";
import { ScreenFullContext } from "../affectui-engine/context.js";
import { BRAND_CONFIG } from "../brand.config.js";
import "./showcase.css";

/* ============================================================================
   1. Web Haptics & Synthesized Tactile Audio (1:1 Amicro useWebHaptics)
   ============================================================================ */
let globalAudioCtx = null;
let soundEnabled = true;

function getAudioContext() {
  if (typeof window === "undefined") return null;
  try {
    if (!globalAudioCtx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) globalAudioCtx = new AudioCtx();
    }
    if (globalAudioCtx && globalAudioCtx.state === "suspended") {
      globalAudioCtx.resume();
    }
    return globalAudioCtx;
  } catch {
    return null;
  }
}

function playSynthesizedHaptic(type = "light") {
  if (!soundEnabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;
  try {
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    if (type === "success") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(820, now);
      osc.frequency.exponentialRampToValueAtTime(1240, now + 0.06);
      gain.gain.setValueAtTime(0.035, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.14);
      osc.start(now);
      osc.stop(now + 0.14);
    } else if (type === "error") {
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(220, now);
      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);
      osc.start(now);
      osc.stop(now + 0.08);
    } else {
      osc.type = "triangle";
      const freq = type === "medium" ? 1400 : type === "heavy" ? 1100 : 1750;
      osc.frequency.setValueAtTime(freq, now);
      osc.frequency.exponentialRampToValueAtTime(freq * 0.5, now + 0.02);
      gain.gain.setValueAtTime(0.025, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.025);
      osc.start(now);
      osc.stop(now + 0.025);
    }
  } catch {}
}

function useWebHaptics() {
  const trigger = useCallback((type = "light") => {
    playSynthesizedHaptic(type);
    if (typeof window !== "undefined" && window.navigator?.vibrate) {
      try {
        if (type === "success") window.navigator.vibrate([15, 60, 15]);
        else if (type === "medium") window.navigator.vibrate(20);
        else window.navigator.vibrate(10);
      } catch {}
    }
  }, []);
  return { trigger };
}

/* ============================================================================
   2. AnimatedStarCounter & DiaTextReveal & SpotlightCard (1:1 Amicro Primitives)
   ============================================================================ */
function AnimatedStarCounter({ value, className = "" }) {
  const target = typeof value === "number" && value > 0 ? value : null;
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!target) return;
    let rafId;
    const start = performance.now();
    const duration = 320;
    const tick = (now) => {
      const elapsed = Math.min(1, (now - start) / duration);
      const eased = elapsed === 1 ? 1 : 1 - Math.pow(2, -10 * elapsed);
      setDisplayValue(Math.round(target * eased));
      if (elapsed < 1) rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [target]);

  if (!target) return null;

  return (
    <span className={className} style={{ fontVariantNumeric: "tabular-nums" }}>
      {displayValue.toLocaleString("en-US")}
    </span>
  );
}

const BLUE_SHADES_PALETTE = [
  "#bfdbfe",
  "#60a5fa",
  "#38bdf8",
  "#3b82f6",
  "#2563eb",
  "#1d4ed8",
  "#0284c7",
  "#93c5fd",
];
const BAND_HALF = 17;
const SWEEP_START = -BAND_HALF;
const SWEEP_END = 100 + BAND_HALF;
const sweepEase = (t) =>
  t < 0.5 ? 4 * t ** 3 : 1 - Math.pow(-2 * t + 2, 3) / 2;

function buildSweepGradient(pos, colors, textColor) {
  const bandStart = pos - BAND_HALF;
  const bandEnd = pos + BAND_HALF;
  if (bandStart >= 100) {
    return `linear-gradient(90deg, ${textColor}, ${textColor})`;
  }
  const count = colors.length;
  const parts = [];
  if (bandStart > 0) {
    parts.push(`${textColor} 0%`, `${textColor} ${bandStart.toFixed(2)}%`);
  }
  colors.forEach((color, index) => {
    const pct =
      count === 1 ? pos : bandStart + (index / (count - 1)) * BAND_HALF * 2;
    parts.push(`${color} ${pct.toFixed(2)}%`);
  });
  if (bandEnd < 100) {
    parts.push(`transparent ${bandEnd.toFixed(2)}%`, "transparent 100%");
  }
  return `linear-gradient(90deg, ${parts.join(", ")})`;
}

function DiaTextReveal({
  text,
  textColor = "#ededed",
  colors = BLUE_SHADES_PALETTE,
  duration = 1.6,
  delay = 0.1,
}) {
  const spanRef = useRef(null);

  useEffect(() => {
    const el = spanRef.current;
    if (!el) return;
    let rafId;
    let timerId;
    el.style.backgroundImage = buildSweepGradient(SWEEP_START, colors, textColor);

    timerId = setTimeout(() => {
      const start = performance.now();
      const durMs = duration * 1000;
      const step = (now) => {
        const rawT = Math.min(1, (now - start) / durMs);
        const easedT = sweepEase(rawT);
        const pos = SWEEP_START + (SWEEP_END - SWEEP_START) * easedT;
        if (spanRef.current) {
          spanRef.current.style.backgroundImage = buildSweepGradient(
            pos,
            colors,
            textColor,
          );
        }
        if (rawT < 1) {
          rafId = requestAnimationFrame(step);
        }
      };
      rafId = requestAnimationFrame(step);
    }, delay * 1000);

    return () => {
      clearTimeout(timerId);
      cancelAnimationFrame(rafId);
    };
  }, [text, textColor, colors, duration, delay]);

  return (
    <span
      ref={spanRef}
      style={{
        display: "inline-block",
        lineHeight: 1.08,
        userSelect: "none",
        transform: "translateY(-1px)",
        color: "transparent",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        backgroundSize: "100% 100%",
        backgroundImage: `linear-gradient(90deg, ${textColor}, ${textColor})`,
      }}
    >
      {text}
    </span>
  );
}

function SpotlightCard({ children, className = "", onClick, ...props }) {
  const cardRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    cardRef.current.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    cardRef.current.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    cardRef.current.style.setProperty("--spotlight-opacity", "1");
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!cardRef.current) return;
    cardRef.current.style.setProperty("--spotlight-opacity", "0");
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`am-spotlight-stage ${className}`}
      {...props}
    >
      <div className="am-spotlight-sheen" />
      {children}
    </div>
  );
}

/* ============================================================================
   3. Error Boundary & SVGs & Native AffectUI Auto-Zoom Card Preview
   ============================================================================ */
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="af-error-box">
          <p style={{ fontWeight: 600 }}>Unable to render component</p>
          <p style={{ fontSize: 12, opacity: 0.8 }}>
            {this.state.error?.message || "Unknown error"}
          </p>
          <button
            type="button"
            className="af-error-retry-btn"
            onClick={() => this.setState({ hasError: false, error: null })}
          >
            Retry
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

const Icons = {
  backChevron: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m15 18-6-6 6-6" />
    </svg>
  ),
  vercel: (
    <svg viewBox="0 0 76 65" fill="currentColor" style={{ width: 14, height: 14, display: "block" }}>
      <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
    </svg>
  ),
  browseMask: (
    <svg viewBox="0 0 24 24" style={{ width: 15, height: 15, display: "block", flexShrink: 0 }} fill="currentColor" aria-hidden="true">
      <mask id="am-hero-browse-mask">
        <rect width="24" height="24" rx="6.5" fill="white" />
        <rect x="5.5" y="6" width="7" height="2.5" rx="1.25" fill="black" />
        <rect x="5.5" y="10.75" width="13" height="2.5" rx="1.25" fill="black" />
        <rect x="5.5" y="15.5" width="7" height="2.5" rx="1.25" fill="black" />
      </mask>
      <rect width="24" height="24" rx="6.5" mask="url(#am-hero-browse-mask)" fill="currentColor" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 16 16" fill="currentColor" style={{ width: 14, height: 14, display: "block", flexShrink: 0 }}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
      />
    </svg>
  ),
  xTwitter: (
    <svg viewBox="0 0 16 17" fill="currentColor" style={{ width: 12, height: 12, display: "block" }}>
      <path d="M12.4041 1.39726H14.6953L9.69087 7.2591L15.5781 15.2368H10.9696L7.35741 10.3996L3.22921 15.2368H0.934687L6.28641 8.96575L0.642598 1.39726H5.36795L8.62962 5.81859L12.4041 1.39726ZM11.5992 13.8329H12.8682L4.67667 2.72798H3.31359L11.5992 13.8329Z" />
    </svg>
  ),
  maple: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 739 739" style={{ width: 28, height: 28, color: "#E86F00", flexShrink: 0 }}>
      <path
        d="M369.38 0C480.324 2.908e-08 572.686 76.542 592.669 177.775C681.438 222.749 738.763 293.878 738.765 373.942C738.763 482.538 633.316 574.71 486.96 607.449C499.978 645.591 508.455 690.397 510.789 738.765L227.967 738.764C229.399 709.074 233.146 680.725 238.834 654.436C269.538 661.732 306.949 666.785 347.396 664.859L345.194 618.741C208.102 625.268 0.005 528.243 0 373.948C2.099e-08 293.883 57.322 222.751 146.093 177.775C166.076 76.543 258.436 0.001 369.38 0ZM202.322 258.434C174.48 255.016 149.271 273.738 146.015 300.254L133.046 405.874C129.791 432.389 149.721 456.662 177.563 460.08C205.404 463.499 230.614 444.769 233.87 418.254L246.839 312.633C250.095 286.118 230.163 261.853 202.322 258.434ZM367.3 278.691C339.459 275.273 314.117 295.071 310.699 322.913L298.319 423.736C294.902 451.576 314.7 476.918 342.541 480.337C370.382 483.755 395.724 463.955 399.143 436.115L411.523 335.292C414.941 307.451 395.142 282.109 367.3 278.691Z"
        fill="currentColor"
      />
    </svg>
  ),
  search: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  ),
  sun: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  ),
  moon: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  ),
  copy: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  ),
  check: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  ),
  arrowRight: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  ),
  arrowLeft: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  ),
  share: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v13" />
      <path d="m16 6-4-4-4 4" />
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
    </svg>
  ),
  fullscreen: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
    </svg>
  ),
  refresh: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
      <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
      <path d="M16 16h5v5" />
    </svg>
  ),
};

// Component cache & synchronous resolved module cache for instant 0ms mount
const componentCache = new Map();
const resolvedModuleCache = new Map();

function loadComponentModule(item, variant = "classic") {
  const key = `${item.slug}:${variant}`;
  if (resolvedModuleCache.has(key)) {
    return Promise.resolve(resolvedModuleCache.get(key));
  }
  const loader =
    variant === "clean" && item.loadClean ? item.loadClean : item.loadClassic;
  return loader()
    .then((mod) => {
      const Comp = mod.default || mod;
      resolvedModuleCache.set(key, Comp);
      return Comp;
    })
    .catch(async (err) => {
      // Evict and retry once in case Vite dev server was re-optimizing deps
      componentCache.delete(key);
      await new Promise((r) => setTimeout(r, 250));
      const mod = await loader();
      const Comp = mod.default || mod;
      resolvedModuleCache.set(key, Comp);
      return Comp;
    });
}

function getLazyComponent(item, variant = "classic") {
  const key = `${item.slug}:${variant}`;
  if (!componentCache.has(key)) {
    const LazyComp = React.lazy(async () => {
      const Comp = await loadComponentModule(item, variant);
      return { default: Comp };
    });
    componentCache.set(key, LazyComp);
  }
  return componentCache.get(key);
}

function getElementZoom(el) {
  return (
    parseFloat(el.dataset.scale ?? "") ||
    parseFloat(el.style.zoom) ||
    parseFloat(getComputedStyle(el).zoom) ||
    1
  );
}

function useCardAutoFit(stageRef, enabled = true) {
  useEffect(() => {
    const stageEl = stageRef.current;
    if (!enabled || !stageEl) return;
    let targetEl = null;
    let initialZoom = 1;
    let prevWidth = 0;

    const updateZoom = () => {
      if (!targetEl?.isConnected) return;
      const rect = stageEl.getBoundingClientRect();
      const currentZoom = getElementZoom(targetEl);
      const naturalWidth = targetEl.offsetWidth;
      if (!naturalWidth || !rect.width) return;
      const nextZoom = Math.min(initialZoom, (rect.width - 32) / naturalWidth);
      const roundedWidth = Math.round(rect.width);
      if (
        nextZoom < currentZoom - 0.004 ||
        (roundedWidth !== prevWidth && Math.abs(nextZoom - currentZoom) > 0.004)
      ) {
        targetEl.style.zoom = String(nextZoom);
      }
      prevWidth = roundedWidth;
    };

    const ro = new ResizeObserver(updateZoom);
    ro.observe(stageEl);

    const bindTarget = () => {
      const el = stageEl.querySelector('.card__preview [class^="ui-"]');
      if (el && el !== targetEl) {
        if (targetEl) ro.unobserve(targetEl);
        targetEl = el;
        initialZoom = getElementZoom(el);
        prevWidth = 0;
        ro.observe(el);
        updateZoom();
      }
    };

    const mo = new MutationObserver(bindTarget);
    mo.observe(stageEl, { childList: true, subtree: true });
    bindTarget();

    return () => {
      mo.disconnect();
      ro.disconnect();
    };
  }, [stageRef, enabled]);
}

function CardPreview({ item, variant }) {
  const effectiveVariant =
    variant === "clean" && item.loadClean ? "clean" : "classic";
  const cacheKey = `${item.slug}:${effectiveVariant}`;

  const [ResolvedComp, setResolvedComp] = useState(
    () => resolvedModuleCache.get(cacheKey) || null,
  );
  const [isInView, setIsInView] = useState(false);
  const stageRef = useRef(null);
  const isScreen = item.kind === "screen";
  const isComponent = !item.kind || item.kind === "component";

  // Keep ResolvedComp synced when variant changes
  useEffect(() => {
    const cached = resolvedModuleCache.get(cacheKey);
    if (cached) {
      setResolvedComp(() => cached);
    } else if (isInView) {
      let active = true;
      loadComponentModule(item, effectiveVariant)
        .then((Comp) => {
          if (active) setResolvedComp(() => Comp);
        })
        .catch(() => {});
      return () => {
        active = false;
      };
    }
  }, [cacheKey, isInView, item, effectiveVariant]);

  // Viewport observer with 45ms scroll-settle debounce so fast scrolling
  // doesn't clog HTTP/1.1 connections with skipped rows, plus off-screen
  // unmounting beyond 1000px to keep 141 live intervals from starving CPU.
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setIsInView(true);
      return;
    }

    let timerId = null;

    // Immediate check if already in viewport on mount
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight + 300 && rect.bottom > -300) {
      setIsInView(true);
    }

    const enterObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (resolvedModuleCache.has(cacheKey)) {
            setIsInView(true);
          } else {
            timerId = setTimeout(() => {
              setIsInView(true);
            }, 40);
          }
        } else {
          if (timerId) {
            clearTimeout(timerId);
            timerId = null;
          }
        }
      },
      { rootMargin: "420px 0px" },
    );

    const leaveObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setIsInView(false);
        }
      },
      { rootMargin: "1100px 0px" },
    );

    enterObserver.observe(el);
    leaveObserver.observe(el);

    return () => {
      if (timerId) clearTimeout(timerId);
      enterObserver.disconnect();
      leaveObserver.disconnect();
    };
  }, [cacheKey]);

  useCardAutoFit(stageRef, isInView && !!ResolvedComp && isComponent);

  return (
    <div
      ref={stageRef}
      className="card__stage af-card__stage"
      data-screen={isScreen}
    >
      <div
        className="card__preview"
        data-look={effectiveVariant}
        data-screen={isScreen}
        aria-hidden="true"
      >
        <ErrorBoundary>
          {isInView && ResolvedComp ? (
            <Suspense fallback={<div className="af-skeleton" />}>
              <ScreenFullContext.Provider value={false}>
                <ResolvedComp key={effectiveVariant} onNavigate={() => {}} />
              </ScreenFullContext.Provider>
            </Suspense>
          ) : (
            <div className="af-skeleton" />
          )}
        </ErrorBoundary>
      </div>
    </div>
  );
}

/* ============================================================================
   4. Hero Empty Sponsor Slot with Blur Crossfade (1:1 Amicro HeroSponsorBar)
   ============================================================================ */
function HeroEmptySlot({ label, onClick, triggerHaptic }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      type="button"
      className="am-sponsor-slot--dashed"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        triggerHaptic("medium");
        onClick?.();
      }}
    >
      {!isHovered ? (
        <div key="default" className="am-slot-blur-in" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
          <span style={{ fontSize: 19, fontWeight: 300, lineHeight: 1 }}>+</span>
          <span style={{ fontSize: 12, fontWeight: 500, letterSpacing: "-0.01em" }}>
            {label}
          </span>
        </div>
      ) : (
        <div key="hovered" className="am-slot-blur-in" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontSize: 13, fontWeight: 500, letterSpacing: "-0.01em" }}>
            take this slot &lt;3
          </span>
        </div>
      )}
    </button>
  );
}

/* ============================================================================
   5. Subpages: CLI Page & Skills Page (1:1 Amicro Subpage Layout)
   ============================================================================ */
function CliSubpage({ showToast, triggerHaptic }) {
  const [mode, setMode] = useState("shadcn");
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    triggerHaptic("success");
    setCopiedId(id);
    showToast("CLI command copied");
    setTimeout(() => setCopiedId(null), 1500);
  };

  const componentsJsonText = `{\n  "registries": {\n    "@${BRAND_CONFIG.slug}": "https://aetherui.dev/r/{name}.json"\n  }\n}`;

  const cards =
    mode === "shadcn"
      ? [
          {
            id: "cmd-reg",
            title: "Registry",
            code: `npx shadcn@latest add @${BRAND_CONFIG.slug}/ai-answer`,
          },
          {
            id: "cmd-endpoint",
            title: "Endpoint",
            code: `npx ${BRAND_CONFIG.cliName}@latest add chat-composer --clean`,
          },
          {
            id: "cmd-json",
            title: "components.json",
            code: componentsJsonText,
            isPre: true,
          },
        ]
      : [
          {
            id: "cmd-npm",
            title: "Install",
            code: `npm i ${BRAND_CONFIG.packageName}`,
          },
          {
            id: "cmd-init",
            title: "Initialize",
            code: `npx ${BRAND_CONFIG.cliName}@latest init`,
          },
          {
            id: "cmd-add",
            title: "Add component",
            code: `npx ${BRAND_CONFIG.cliName}@latest add thinking-state`,
          },
        ];

  return (
    <div className="am-subpage">
      <p className="am-subpage__eyebrow">Install</p>
      <h1 className="am-subpage__title">CLI</h1>

      <div className="am-subpage__tabs">
        <button
          type="button"
          className="am-subpage__tab"
          data-active={mode === "shadcn"}
          onClick={() => {
            triggerHaptic("light");
            setMode("shadcn");
          }}
        >
          shadcn/ui
        </button>
        <button
          type="button"
          className="am-subpage__tab"
          data-active={mode === "aether"}
          onClick={() => {
            triggerHaptic("light");
            setMode("aether");
          }}
        >
          {BRAND_CONFIG.packageName}
        </button>
      </div>

      <div className="am-shell-grid">
        {cards.map((c) => (
          <div key={c.id} className="am-shell-card">
            <p className="am-shell-card__title">{c.title}</p>
            <div className="am-shell-card__row" style={{ alignItems: c.isPre ? "flex-start" : "center" }}>
              {c.isPre ? (
                <pre className="am-shell-card__code" style={{ margin: 0, whiteSpace: "pre" }}>
                  {c.code}
                </pre>
              ) : (
                <code className="am-shell-card__code">{c.code}</code>
              )}
              <button
                type="button"
                className="am-shell-copy-btn"
                onClick={() => handleCopy(c.code, c.id)}
              >
                {copiedId === c.id ? "Copied" : "Copy"}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 14, fontSize: 14, color: "var(--am-muted-fg)", display: "flex", gap: 6, flexWrap: "wrap" }}>
        <span>Zero runtime lock-in. Copy components directly into your project in Classic or Clean style.</span>
      </div>
    </div>
  );
}

function SkillsSubpage({ showToast, triggerHaptic }) {
  const [tab, setTab] = useState("all");
  const [copiedId, setCopiedId] = useState(null);

  const ALL_SKILLS = [
    {
      id: "main-skill",
      title: "AetherUI Design System Skill",
      command: "npx skills add aetherui-design-system",
      isCommand: true,
    },
    {
      id: "replicator-skill",
      title: "Pixel-Perfect JS Replicator Skill",
      command: "npx skills add pixel-perfect-js-replicator",
      isCommand: true,
    },
    {
      id: "prompt-agent",
      title: "AI Agent Workspace Prompt",
      command: "Build an AI agent workspace using @aether-ui/react ThinkingState, ChatComposer, and AiAnswer in Classic style",
      isCommand: false,
    },
    {
      id: "prompt-clean",
      title: "Clean Style Refactor Prompt",
      command: "Refactor all dashboard cards and tables to match AetherUI Clean subpixel precision tokens",
      isCommand: false,
    },
    {
      id: "prompt-motion",
      title: "Spring Micro-Interactions Prompt",
      command: "Update dropdowns and icon swap transitions with cubic-bezier(0.16, 1, 0.3, 1) and blur crossfades",
      isCommand: false,
    },
    {
      id: "prompt-rebrand",
      title: "One-Click Enterprise Rebrand",
      command: "npm run rebrand -- --name \"AcmeUI\" --pkg \"@acme/ui\" --cli \"acme-ui\"",
      isCommand: true,
    },
  ];

  const items = tab === "commands" ? ALL_SKILLS.filter((s) => s.isCommand) : ALL_SKILLS;

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    triggerHaptic("success");
    setCopiedId(id);
    showToast("Copied to clipboard");
    setTimeout(() => setCopiedId(null), 1500);
  };

  return (
    <div className="am-subpage">
      <p className="am-subpage__eyebrow">Agent context</p>
      <h1 className="am-subpage__title">Skills</h1>

      <div className="am-subpage__tabs">
        <button
          type="button"
          className="am-subpage__tab"
          data-active={tab === "all"}
          onClick={() => {
            triggerHaptic("light");
            setTab("all");
          }}
        >
          Setup &amp; Prompts
        </button>
        <button
          type="button"
          className="am-subpage__tab"
          data-active={tab === "commands"}
          onClick={() => {
            triggerHaptic("light");
            setTab("commands");
          }}
        >
          Commands
        </button>
      </div>

      <div className="am-shell-grid" data-cols="2">
        {items.map((card) => (
          <div key={card.id} className="am-shell-card">
            <p className="am-shell-card__title">{card.title}</p>
            <div className="am-shell-card__row">
              <p className="am-shell-card__code" style={{ margin: 0 }}>
                {card.command}
              </p>
              <button
                type="button"
                className="am-shell-copy-btn"
                onClick={() => handleCopy(card.command, card.id)}
              >
                {copiedId === card.id ? "Copied" : "Copy"}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 14, fontSize: 14, color: "var(--am-muted-fg)" }}>
        Skills install into your coding agent (`.agents/skills/`), not your production app bundle.
      </div>
    </div>
  );
}

/* ============================================================================
   6. Main Portal Showcase Application (AffectUIShowcase)
   ============================================================================ */
const CATALOG_TABS = [
  { id: "all", label: "All Elements", filter: () => true },
  {
    id: "chat-ai",
    label: "Chat & AI",
    filter: (item) =>
      item.category === "Chat" ||
      item.slug.includes("ai") ||
      item.slug.includes("thinking") ||
      item.slug.includes("agent") ||
      item.slug.includes("prompt"),
  },
  {
    id: "inputs",
    label: "Inputs & Pickers",
    filter: (item) =>
      item.kind === "component" &&
      ["Inputs", "Forms", "Pickers"].includes(item.category),
  },
  {
    id: "navigation",
    label: "Navigation & Menus",
    filter: (item) =>
      item.kind === "component" &&
      ["Navigation", "Menus", "Toolbar"].includes(item.category),
  },
  {
    id: "surfaces",
    label: "Cards & Panels",
    filter: (item) =>
      item.kind === "component" &&
      !["Chat", "Inputs", "Forms", "Pickers", "Navigation", "Menus", "Toolbar"].includes(
        item.category,
      ),
  },
  {
    id: "screens",
    label: "App Screens",
    filter: (item) => item.kind === "screen",
  },
  {
    id: "blocks",
    label: "Blocks",
    filter: (item) => item.kind === "block",
  },
  {
    id: "illustrations",
    label: "Illustrations",
    filter: (item) => item.kind === "illustration",
  },
  {
    id: "motion",
    label: "Motion",
    filter: (item) => item.kind === "motion",
  },
];

const FOLDER_NAMES = ["Q3 Campaign", "Brand assets", "Hiring", "Research"];
const SCREEN_NAV_MAP = {
  "New chat": "assistant-home",
  Folders: "files",
  Files: "files",
  Integrations: "integrations",
  Board: "kanban",
  Chat: "agent-chat",
  Companies: "crm",
  CRM: "crm",
  Revenue: "analytics",
  Analytics: "analytics",
  Runs: "agent-run",
  Evals: "evals",
  Thread: "agent-thread",
  Tasks: "agent-tasks",
  Memory: "agent-memory",
  Permissions: "agent-permissions",
  Usage: "agent-usage",
  Activity: "agent-activity",
  Schedules: "agent-schedules",
  Inbox: "inbox",
  "Agent Inbox": "inbox",
  "Agent Orchestration": "agent-orchestration",
  Settings: "settings-profile",
  Profile: "settings-profile",
  General: "settings-general",
  Security: "settings-security",
  Models: "settings-models",
  Notifications: "settings-notifications",
  Privacy: "settings-privacy",
  Preferences: "settings-preferences",
  Members: "settings-members",
  Billing: "settings-subscription",
  "Back to app": "assistant-home",
  "Onboarding: Website": "onboarding-website",
  "Onboarding: Brand": "onboarding-brand",
  "Onboarding: Tone": "onboarding-tone",
  "Onboarding: Ready": "onboarding-ready",
  "My issues": "agent-tasks",
  Projects: "files",
  Problems: "kanban",
  "Password reset emails failing": "agent-tasks",
  "Payments failing for some users": "agent-tasks",
  "Dashboard loads slowly": "agent-tasks",
  Workflow: "workflow-builder",
  "Workflow Builder": "workflow-builder",
  "App Shell": "app-shell",
  "App Shell Flat": "app-shell-flat",
  Assistant: "assistant-home",
};

function resolveScreenSlug(dest) {
  if (!dest) return null;
  if (FOLDER_NAMES.includes(dest)) return "folder";
  if (SCREEN_NAV_MAP[dest]) return SCREEN_NAV_MAP[dest];
  const match = AFFECTUI_CATALOG.find(
    (item) => item.slug === dest || item.name.toLowerCase() === dest.toLowerCase(),
  );
  return match ? match.slug : null;
}

export default function AffectUIShowcase() {
  const [pageMode, setPageMode] = useState("home"); // 'home' | 'cli' | 'skills'
  const [catalogTab, setCatalogTab] = useState("all");
  const [subCategory, setSubCategory] = useState("all");
  const [activeSlug, setActiveSlug] = useState(null);
  const [fullscreenSlug, setFullscreenSlug] = useState(null);
  const [detailTab, setDetailTab] = useState("preview"); // 'preview' | 'code'
  const [installMode, setInstallMode] = useState("command"); // 'command' | 'manual'
  const [packageManager, setPackageManager] = useState("pnpm"); // 'pnpm' | 'yarn' | 'npm' | 'bun'
  const [viewport, setViewport] = useState("stage"); // 'stage' | 'desktop' | 'tablet' | 'mobile'
  const [variant, setVariant] = useState("classic"); // 'classic' | 'clean'
  const [activeDocs, setActiveDocs] = useState(null);
  const [activeSource, setActiveSource] = useState("");
  const [copiedSlug, setCopiedSlug] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);
  const [cmdOpen, setCmdOpen] = useState(false);
  const [cmdQuery, setCmdQuery] = useState("");
  const [cmdCategory, setCmdCategory] = useState("all");
  const [cmdIndex, setCmdIndex] = useState(0);
  const [shareOpen, setShareOpen] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const [stars, setStars] = useState(null);

  useEffect(() => {
    const repo = BRAND_CONFIG.githubRepo;
    if (repo) {
      fetch(`https://api.github.com/repos/${repo}`)
        .then((r) => (r.ok ? r.json() : null))
        .then((d) => {
          if (typeof d?.stargazers_count === "number") {
            setStars(d.stargazers_count);
          }
        })
        .catch(() => {});
    }
  }, []);

  // Default to Amicro's signature Dark theme unless user explicitly chose light
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved === "light" || saved === "dark") return saved;
    }
    return "dark";
  });

  const { trigger: triggerHaptic } = useWebHaptics();
  const heroTitleRef = useRef(null);
  const toastTimeoutRef = useRef(null);
  const cmdInputRef = useRef(null);

  const showToast = useCallback((msg) => {
    setToastMessage(msg);
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    toastTimeoutRef.current = setTimeout(() => {
      setToastMessage(null);
    }, 1800);
  }, []);

  // Sync theme to documentElement
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
    try {
      localStorage.setItem("theme", theme);
    } catch {}
  }, [theme]);

  const toggleTheme = useCallback(() => {
    triggerHaptic("medium");
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      showToast(`Switched to ${next} theme`);
      return next;
    });
  }, [triggerHaptic, showToast]);

  // URL Routing Sync (Path + Hash + PopState)
  useEffect(() => {
    const handleLocationChange = () => {
      const pathname = window.location.pathname;
      const rawHash = window.location.hash;
      const hash = rawHash.startsWith("#/")
        ? rawHash.slice(2)
        : rawHash.startsWith("#")
          ? rawHash.slice(1)
          : "";

      // 1. Direct path routing: /screens/:slug/full or /screens/:slug
      if (pathname.startsWith("/screens/")) {
        const segs = pathname.split("/").filter(Boolean);
        const slug = segs[1];
        if (slug) {
          const isFull =
            pathname.endsWith("/full") ||
            pathname.includes("/full/") ||
            hash.startsWith("fullscreen/");
          if (isFull) {
            setFullscreenSlug(slug);
            window.location.hash = `#/fullscreen/${slug}`;
          } else {
            setFullscreenSlug(null);
            window.location.hash = `#/item/${slug}`;
          }
          setActiveSlug(slug);
          setPageMode("home");
          return;
        }
      }

      // 2. Hash routing
      if (!hash || hash === "") {
        setActiveSlug(null);
        setFullscreenSlug(null);
        setPageMode("home");
        return;
      }
      if (hash === "cli") {
        setActiveSlug(null);
        setFullscreenSlug(null);
        setPageMode("cli");
        return;
      }
      if (hash === "skills") {
        setActiveSlug(null);
        setFullscreenSlug(null);
        setPageMode("skills");
        return;
      }
      if (hash.startsWith("fullscreen/")) {
        const slug = hash.replace("fullscreen/", "");
        setFullscreenSlug(slug);
        setActiveSlug(slug);
        setPageMode("home");
      } else if (hash.startsWith("item/")) {
        const slug = hash.replace("item/", "");
        setActiveSlug(slug);
        setFullscreenSlug(null);
        setPageMode("home");
      } else if (hash.startsWith("components/") || hash.startsWith("screens/")) {
        const parts = hash.split("/");
        const slug = parts[1];
        if (slug) {
          if (parts[0] === "screens" && hash.endsWith("/full")) {
            setFullscreenSlug(slug);
          } else {
            setFullscreenSlug(null);
          }
          setActiveSlug(slug);
          setPageMode("home");
        }
      }
    };

    handleLocationChange();
    window.addEventListener("hashchange", handleLocationChange);
    window.addEventListener("popstate", handleLocationChange);
    window.addEventListener("locationchange", handleLocationChange);
    window.addEventListener("screen-query", handleLocationChange);
    return () => {
      window.removeEventListener("hashchange", handleLocationChange);
      window.removeEventListener("popstate", handleLocationChange);
      window.removeEventListener("locationchange", handleLocationChange);
      window.removeEventListener("screen-query", handleLocationChange);
    };
  }, []);

  // Sync pathname when entering fullscreen so AffectUI's internal of() knows n === true
  useEffect(() => {
    if (fullscreenSlug) {
      const expectedPath = `/screens/${fullscreenSlug}/full`;
      if (window.location.pathname !== expectedPath) {
        window.history.replaceState(
          null,
          "",
          `${expectedPath}${window.location.search}`,
        );
      }
    }
  }, [fullscreenSlug]);

  const handleScreenNavigate = useCallback(
    (dest, query) => {
      if (!dest) return;
      const isFolder = FOLDER_NAMES.includes(dest);
      const targetSlug = resolveScreenSlug(dest);
      if (!targetSlug) return;

      const params = new URLSearchParams({
        ...(isFolder ? { folder: dest } : {}),
        ...(query || {}),
      }).toString();
      const queryStr = params ? `?${params}` : "";

      if (fullscreenSlug) {
        setFullscreenSlug(targetSlug);
        setActiveSlug(targetSlug);
        window.history.pushState(
          null,
          "",
          `/screens/${targetSlug}/full${queryStr}`,
        );
        window.location.hash = `#/fullscreen/${targetSlug}`;
      } else {
        setActiveSlug(targetSlug);
        window.history.pushState(null, "", `/screens/${targetSlug}${queryStr}`);
        window.location.hash = `#/item/${targetSlug}`;
      }
      window.dispatchEvent(new Event("screen-query"));
    },
    [fullscreenSlug],
  );

  const openFullscreen = useCallback(
    (slug) => {
      triggerHaptic("light");
      setFullscreenSlug(slug);
      window.history.replaceState(null, "", `/screens/${slug}/full`);
      window.location.hash = `#/fullscreen/${slug}`;
    },
    [triggerHaptic],
  );

  const closeFullscreen = useCallback(() => {
    triggerHaptic("light");
    setFullscreenSlug(null);
    if (window.location.pathname.startsWith("/screens/")) {
      window.history.replaceState(null, "", "/");
    }
    window.location.hash = activeSlug ? `#/item/${activeSlug}` : "#/";
  }, [activeSlug, triggerHaptic]);

  // Global ⌘K / Ctrl+K & Escape shortcut
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        triggerHaptic("light");
        setCmdOpen((prev) => !prev);
        return;
      }
      if (e.key === "Escape") {
        if (cmdOpen) {
          setCmdOpen(false);
        } else if (fullscreenSlug) {
          closeFullscreen();
        } else if (activeSlug) {
          setActiveSlug(null);
          window.location.hash = "#/";
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [cmdOpen, fullscreenSlug, activeSlug, triggerHaptic, closeFullscreen]);

  useEffect(() => {
    if (cmdOpen) {
      setTimeout(() => cmdInputRef.current?.focus(), 40);
    } else {
      setCmdQuery("");
      setCmdCategory("all");
    }
  }, [cmdOpen]);

  // Subtle 3D mouse tilt on Hero headline (1:1 Amicro HeroSection)
  const handleHeroMouseMove = useCallback((e) => {
    if (!heroTitleRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    const rotX = (-y * 3).toFixed(2);
    const rotY = (x * 4).toFixed(2);
    const tx = (x * 8).toFixed(2);
    const ty = (y * 4).toFixed(2);
    heroTitleRef.current.style.transform = `perspective(1000px) translate3d(${tx}px, ${ty}px, 0) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
  }, []);

  const handleHeroMouseLeave = useCallback(() => {
    if (!heroTitleRef.current) return;
    heroTitleRef.current.style.transform =
      "perspective(1000px) translate3d(0px, 0px, 0) rotateX(0deg) rotateY(0deg)";
  }, []);

  const openDetail = useCallback(
    (slug) => {
      triggerHaptic("light");
      setActiveSlug(slug);
      setDetailTab("preview");
      setPageMode("home");
      window.location.hash = `#/item/${slug}`;
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [triggerHaptic],
  );

  const closeDetail = useCallback(() => {
    triggerHaptic("light");
    setActiveSlug(null);
    setFullscreenSlug(null);
    if (window.location.pathname.startsWith("/screens/")) {
      window.history.replaceState(null, "", "/");
    }
    window.location.hash = "#/";
  }, [triggerHaptic]);

  // Tab counts
  const tabCounts = useMemo(() => {
    const map = {};
    for (const tab of CATALOG_TABS) {
      map[tab.id] = AFFECTUI_CATALOG.filter(tab.filter).length;
    }
    return map;
  }, []);

  // Filtered items for catalog grid
  const activeTabObj = useMemo(
    () => CATALOG_TABS.find((t) => t.id === catalogTab) || CATALOG_TABS[0],
    [catalogTab],
  );

  const availableSubCategories = useMemo(() => {
    const set = new Set();
    for (const item of AFFECTUI_CATALOG) {
      if (activeTabObj.filter(item) && item.category) {
        set.add(item.category);
      }
    }
    return ["all", ...Array.from(set).sort()];
  }, [activeTabObj]);

  const filteredItems = useMemo(() => {
    return AFFECTUI_CATALOG.filter((item) => {
      if (!activeTabObj.filter(item)) return false;
      if (subCategory !== "all" && item.category !== subCategory) return false;
      return true;
    });
  }, [activeTabObj, subCategory]);

  // Command Palette filtered results
  const cmdItems = useMemo(() => {
    return AFFECTUI_CATALOG.filter((item) => {
      if (cmdCategory !== "all" && item.kind !== cmdCategory) return false;
      if (cmdQuery.trim()) {
        const q = cmdQuery.toLowerCase().trim();
        return (
          item.name.toLowerCase().includes(q) ||
          item.slug.toLowerCase().includes(q) ||
          (item.description || "").toLowerCase().includes(q) ||
          (item.category || "").toLowerCase().includes(q)
        );
      }
      return true;
    }).slice(0, 45);
  }, [cmdCategory, cmdQuery]);

  const activeItem = useMemo(
    () => AFFECTUI_CATALOG.find((x) => x.slug === activeSlug) || null,
    [activeSlug],
  );
  const fullscreenItem = useMemo(
    () => AFFECTUI_CATALOG.find((x) => x.slug === fullscreenSlug) || null,
    [fullscreenSlug],
  );

  const currentIdx = useMemo(() => {
    if (!activeSlug) return -1;
    return filteredItems.findIndex((x) => x.slug === activeSlug);
  }, [activeSlug, filteredItems]);

  const prevItem = currentIdx > 0 ? filteredItems[currentIdx - 1] : null;
  const nextItem =
    currentIdx >= 0 && currentIdx < filteredItems.length - 1
      ? filteredItems[currentIdx + 1]
      : null;

  // Load docs & full TSX source for active item
  useEffect(() => {
    if (!activeItem) {
      setActiveDocs(null);
      setActiveSource("");
      return;
    }
    let cancelled = false;
    const docsLoader =
      variant === "clean" && activeItem.loadCleanDocs
        ? activeItem.loadCleanDocs
        : activeItem.loadDocs;
    const sourceLoader =
      variant === "clean" && activeItem.loadCleanSource
        ? activeItem.loadCleanSource
        : activeItem.loadSource;

    Promise.all([
      docsLoader ? docsLoader().catch(() => null) : Promise.resolve(null),
      sourceLoader ? sourceLoader().catch(() => "") : Promise.resolve(""),
    ]).then(([docs, src]) => {
      if (!cancelled) {
        setActiveDocs(docs);
        setActiveSource(src || "");
      }
    });
    return () => {
      cancelled = true;
    };
  }, [activeItem, variant]);

  // Quick copy card code / CLI
  const handleQuickCopyCard = useCallback(
    async (e, item) => {
      e.preventDefault();
      e.stopPropagation();
      try {
        const loader =
          variant === "clean" && item.loadCleanSource
            ? item.loadCleanSource
            : item.loadSource;
        let code = loader ? await loader() : "";
        if (!code) {
          code = `npx ${BRAND_CONFIG.cliName} add ${item.slug}${variant === "clean" ? " --clean" : ""}`;
        }
        await navigator.clipboard.writeText(code);
        triggerHaptic("success");
        setCopiedSlug(item.slug);
        showToast(`Copied ${item.name} code!`);
        setTimeout(() => setCopiedSlug(null), 1800);
      } catch {
        triggerHaptic("error");
        showToast("Failed to copy code");
      }
    },
    [variant, triggerHaptic, showToast],
  );

  const installCommand = useMemo(() => {
    if (!activeItem) return "";
    const cleanFlag = variant === "clean" && activeItem.loadClean ? " --clean" : "";
    switch (packageManager) {
      case "pnpm":
        return `pnpm dlx ${BRAND_CONFIG.cliName}@latest add ${activeItem.slug}${cleanFlag}`;
      case "yarn":
        return `yarn dlx ${BRAND_CONFIG.cliName}@latest add ${activeItem.slug}${cleanFlag}`;
      case "bun":
        return `bunx --bun ${BRAND_CONFIG.cliName}@latest add ${activeItem.slug}${cleanFlag}`;
      case "npm":
      default:
        return `npx ${BRAND_CONFIG.cliName}@latest add ${activeItem.slug}${cleanFlag}`;
    }
  }, [activeItem, packageManager, variant]);

  const StageComponent = activeItem && getLazyComponent(activeItem, variant);
  const FullscreenComponent =
    fullscreenItem && getLazyComponent(fullscreenItem, variant);

  const activeNavKey = useMemo(() => {
    if (pageMode === "cli") return "cli";
    if (pageMode === "skills") return "skills";
    if (catalogTab === "screens") return "screens";
    if (catalogTab === "blocks") return "blocks";
    return "components";
  }, [pageMode, catalogTab]);

  const handleSelectNav = (key) => {
    triggerHaptic("light");
    setActiveSlug(null);
    setFullscreenSlug(null);
    if (key === "cli") {
      setPageMode("cli");
      window.location.hash = "#/cli";
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (key === "skills") {
      setPageMode("skills");
      window.location.hash = "#/skills";
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (key === "screens") {
      setPageMode("home");
      setCatalogTab("screens");
      setSubCategory("all");
      window.location.hash = "#/";
      setTimeout(() => {
        document.getElementById("components")?.scrollIntoView({ behavior: "smooth" });
      }, 40);
    } else if (key === "blocks") {
      setPageMode("home");
      setCatalogTab("blocks");
      setSubCategory("all");
      window.location.hash = "#/";
      setTimeout(() => {
        document.getElementById("components")?.scrollIntoView({ behavior: "smooth" });
      }, 40);
    } else {
      setPageMode("home");
      setCatalogTab("all");
      setSubCategory("all");
      window.location.hash = "#/";
      setTimeout(() => {
        document.getElementById("components")?.scrollIntoView({ behavior: "smooth" });
      }, 40);
    }
  };

  const handleNavigateHome = () => {
    triggerHaptic("light");
    setActiveSlug(null);
    setFullscreenSlug(null);
    setPageMode("home");
    setCatalogTab("all");
    setSubCategory("all");
    window.location.hash = "#/";
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`am-portal ${theme === "dark" ? "dark" : "light"}`}>
      {/* Fullscreen Overlay Mode */}
      {fullscreenItem && FullscreenComponent && (
        <div className="af-fullscreen-view">
          <button
            type="button"
            className="af-fullscreen-exit"
            onClick={closeFullscreen}
            title="Press Esc to exit fullscreen"
          >
            <span className="af-fullscreen-exit-key">Esc</span>
            <span>Exit preview</span>
          </button>
          <ErrorBoundary>
            <Suspense
              fallback={
                <div style={{ height: "100vh", display: "grid", placeItems: "center" }}>
                  <div className="af-skeleton" style={{ width: 280, height: 60 }} />
                </div>
              }
            >
              {fullscreenItem.kind === "screen" ? (
                <ScreenFullContext.Provider value={true}>
                  <FullscreenComponent
                    key={`fs-${fullscreenItem.slug}-${refreshKey}`}
                    onNavigate={handleScreenNavigate}
                  />
                </ScreenFullContext.Provider>
              ) : (
                <div
                  className={
                    fullscreenItem.kind === "block"
                      ? "stage stage--block af-fullscreen-stage"
                      : "stage af-fullscreen-stage"
                  }
                >
                  {!fullscreenItem.kind || fullscreenItem.kind === "component" ? (
                    <div className="stage__look" key={`fs-${refreshKey}`}>
                      <FullscreenComponent />
                    </div>
                  ) : (
                    <FullscreenComponent key={`fs-${refreshKey}`} />
                  )}
                </div>
              )}
            </Suspense>
          </ErrorBoundary>
        </div>
      )}

      {/* Morphic-inspired Linear Blur Layer behind Navbar */}
      {!activeItem && <div aria-hidden="true" className="am-navbar-blur" />}

      {/* 1:1 Amicro Sticky MinimalNavbar */}
      <header className="am-navbar" data-detail={Boolean(activeItem)}>
        <div className="am-navbar__inner">
          {/* Left: Back Arrow (in detail view) + Brand Logo + Wordmark */}
          <div className="am-navbar__left">
            {activeItem && (
              <button
                type="button"
                className="am-back-btn"
                onClick={closeDetail}
                aria-label="Go back"
                title="Go back"
              >
                {Icons.backChevron}
              </button>
            )}
            <a
              href="#/"
              onClick={(e) => {
                e.preventDefault();
                handleNavigateHome();
              }}
              className="am-brand-link"
              title={`${BRAND_CONFIG.name} — Home`}
            >
              <span className="am-brand-avatar">
                <img src="/amicro-logo.jpg" alt={BRAND_CONFIG.name} />
              </span>
              <span className="am-brand-wordmark">{BRAND_CONFIG.name}</span>
            </a>
          </div>

          {/* Center: Apple-style Minimal Island Navigation */}
          <div className="am-navbar__center">
            <nav aria-label="Main Navigation" className="am-nav-island">
              {[
                { key: "components", label: "Components" },
                { key: "screens", label: "Screens" },
                { key: "blocks", label: "Blocks" },
                { key: "cli", label: "CLI" },
                { key: "skills", label: "Skills" },
              ].map((item) => (
                <button
                  key={item.key}
                  type="button"
                  className="am-nav-item"
                  data-active={activeNavKey === item.key}
                  onClick={() => handleSelectNav(item.key)}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Right: Dual-Look Toggle, Search (⌘K), GitHub Stars Pill, X, Theme Toggle */}
          <div className="am-navbar__right">
            {/* Classic / Clean Style Look Switcher */}
            <div className="am-look-pill" title="Switch component style between Classic and Clean">
              <button
                type="button"
                className="am-look-pill__btn"
                data-active={variant === "classic"}
                onClick={() => {
                  triggerHaptic("light");
                  setVariant("classic");
                  showToast("Classic tactile style active");
                }}
              >
                Classic
              </button>
              <button
                type="button"
                className="am-look-pill__btn"
                data-active={variant === "clean"}
                onClick={() => {
                  triggerHaptic("light");
                  setVariant("clean");
                  showToast("Clean subpixel style active");
                }}
              >
                Clean
              </button>
            </div>

            {/* Search / Command Palette Trigger (⌘K) */}
            <button
              type="button"
              className="am-pill-btn"
              onClick={() => {
                triggerHaptic("light");
                setCmdOpen(true);
              }}
              title="Search 141+ components (⌘K)"
            >
              {Icons.search}
              <span style={{ opacity: 0.75, fontSize: 11.5, fontFamily: "ui-monospace, monospace" }}>
                ⌘K
              </span>
            </button>

            {/* GitHub Stars Pill */}
            <a
              href={BRAND_CONFIG.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="am-pill-btn"
              onClick={() => triggerHaptic("light")}
              title={`${BRAND_CONFIG.name} on GitHub`}
            >
              {Icons.github}
              <span style={{ fontWeight: 600, letterSpacing: "-0.02em", fontSize: 12 }}>
                {stars > 0 ? <AnimatedStarCounter value={stars} /> : "GitHub"}
              </span>
            </a>

            {/* X / Twitter Circle Button */}
            <a
              href={BRAND_CONFIG.authorUrl || BRAND_CONFIG.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="am-circle-btn"
              onClick={() => triggerHaptic("light")}
              title="Repository & Organization"
            >
              {Icons.xTwitter}
            </a>

            {/* Theme Toggle Circle Button */}
            <button
              type="button"
              className="am-circle-btn"
              onClick={toggleTheme}
              title={`Toggle theme (${theme === "dark" ? "light" : "dark"})`}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? Icons.sun : Icons.moon}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main style={{ flex: 1, width: "100%", display: "flex", flexDirection: "column" }}>
        {pageMode === "cli" ? (
          <CliSubpage showToast={showToast} triggerHaptic={triggerHaptic} />
        ) : pageMode === "skills" ? (
          <SkillsSubpage showToast={showToast} triggerHaptic={triggerHaptic} />
        ) : activeItem ? (
          /* ==================================================================
             1:1 Amicro ChartDetailPage View
             ================================================================== */
          <div className="am-detail">
            {/* Hero Bar: Title on Left, Segmented Preview/Code + Share + Copy CLI on Right */}
            <div className="am-detail__hero-bar">
              <h1 className="am-detail__title">
                <span>{activeItem.name}</span>
                {activeItem.loadClean && (
                  <span className="am-card-footer__badge">Classic &amp; Clean</span>
                )}
              </h1>

              <div className="am-detail__actions">
                {/* Preview / Code Segmented Switcher */}
                <div className="am-segmented-box">
                  <button
                    type="button"
                    className="am-segmented-box__btn"
                    data-active={detailTab === "preview"}
                    onClick={() => {
                      triggerHaptic("light");
                      setDetailTab("preview");
                    }}
                  >
                    Preview
                  </button>
                  <button
                    type="button"
                    className="am-segmented-box__btn"
                    data-active={detailTab === "code"}
                    onClick={() => {
                      triggerHaptic("light");
                      setDetailTab("code");
                    }}
                  >
                    Code
                  </button>
                </div>

                {/* Viewport Presets */}
                <div className="am-segmented-box">
                  {[
                    { id: "stage", label: "Stage" },
                    { id: "desktop", label: "1440" },
                    { id: "tablet", label: "768" },
                    { id: "mobile", label: "380" },
                  ].map((vp) => (
                    <button
                      key={vp.id}
                      type="button"
                      className="am-segmented-box__btn"
                      data-active={viewport === vp.id}
                      onClick={() => {
                        triggerHaptic("light");
                        setViewport(vp.id);
                      }}
                    >
                      {vp.label}
                    </button>
                  ))}
                </div>

                {/* Reset State */}
                <button
                  type="button"
                  className="am-action-chip"
                  onClick={() => {
                    triggerHaptic("light");
                    setRefreshKey((k) => k + 1);
                  }}
                  title="Replay / Reset component animation"
                >
                  {Icons.refresh}
                  <span>Replay</span>
                </button>

                {/* Fullscreen */}
                <button
                  type="button"
                  className="am-action-chip"
                  onClick={() => openFullscreen(activeItem.slug)}
                  title="Open fullscreen preview"
                >
                  {Icons.fullscreen}
                  <span>Fullscreen</span>
                </button>

                {/* Share Dropdown */}
                <div style={{ position: "relative" }}>
                  <button
                    type="button"
                    className="am-action-chip"
                    onClick={() => {
                      triggerHaptic("light");
                      setShareOpen((prev) => !prev);
                    }}
                    aria-label="Share component"
                  >
                    {Icons.share}
                  </button>
                  {shareOpen && (
                    <div
                      style={{
                        position: "absolute",
                        right: 0,
                        top: "calc(100% + 8px)",
                        zIndex: 60,
                        minWidth: 160,
                        borderRadius: 12,
                        padding: 4,
                        background: "var(--am-popover)",
                        border: "1px solid var(--am-border)",
                        boxShadow: "0 12px 32px rgba(0,0,0,0.45)",
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => {
                          navigator.clipboard.writeText(window.location.href);
                          setShareOpen(false);
                          triggerHaptic("success");
                          showToast("Link copied to clipboard!");
                        }}
                        style={{
                          width: "100%",
                          textAlign: "left",
                          padding: "8px 10px",
                          borderRadius: 8,
                          border: 0,
                          background: "transparent",
                          color: "var(--am-fg)",
                          fontSize: 13,
                          cursor: "pointer",
                        }}
                      >
                        Copy link
                      </button>
                    </div>
                  )}
                </div>

                {/* Copy CLI Button */}
                <button
                  type="button"
                  className="am-action-chip"
                  onClick={() => {
                    navigator.clipboard.writeText(installCommand);
                    triggerHaptic("success");
                    showToast("CLI command copied");
                  }}
                >
                  {Icons.copy}
                  <span>Copy CLI</span>
                </button>
              </div>
            </div>

            {/* HERO EMBED PREVIEW PLAYGROUND */}
            <div className="am-detail__playground">
              {detailTab === "preview" ? (
                <div className="af-stage-canvas-wrap" data-viewport={viewport}>
                  <div
                    className={
                      activeItem.kind === "block"
                        ? "stage stage--block"
                        : activeItem.kind === "screen"
                          ? "stage stage--screen"
                          : "stage"
                    }
                    data-viewport={viewport}
                  >
                    <ErrorBoundary>
                      <Suspense fallback={<div className="af-skeleton" />}>
                        <ScreenFullContext.Provider value={false}>
                          {StageComponent &&
                            (!activeItem.kind || activeItem.kind === "component" ? (
                              <div
                                className="stage__look"
                                data-look={variant}
                                key={`${activeItem.slug}:${variant}:${refreshKey}`}
                              >
                                <StageComponent onNavigate={handleScreenNavigate} />
                              </div>
                            ) : (
                              <StageComponent
                                key={`${activeItem.slug}:${variant}:${refreshKey}`}
                                onNavigate={handleScreenNavigate}
                              />
                            ))}
                        </ScreenFullContext.Provider>
                      </Suspense>
                    </ErrorBoundary>
                  </div>
                </div>
              ) : (
                <div style={{ width: "100%", maxWidth: 1120 }}>
                  <div className="am-code-figure">
                    <div className="am-code-figure__inner">
                      <div className="am-code-figure__header">
                        <span>
                          src/components/ui/{variant === "clean" ? "clean/" : ""}
                          {activeItem.slug}.tsx
                        </span>
                        <button
                          type="button"
                          className="am-pm-tab"
                          data-active="true"
                          onClick={() => {
                            navigator.clipboard.writeText(
                              activeSource || activeDocs?.usage || "",
                            );
                            triggerHaptic("success");
                            showToast("Copied TSX component code!");
                          }}
                        >
                          Copy TSX
                        </button>
                      </div>
                      <pre className="am-code-figure__pre no-scrollbar">
                        {activeSource || activeDocs?.usage || "// Loading source..."}
                      </pre>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* TWO-COLUMN DOCUMENTATION BODY */}
            <div className="am-detail__body">
              {/* LEFT COLUMN */}
              <div className="am-detail__main">
                {/* 1. INSTALLATION */}
                <div className="am-detail__section">
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                    <h2 className="am-detail__label">Installation</h2>
                    <div className="am-segmented-box">
                      <button
                        type="button"
                        className="am-segmented-box__btn"
                        data-active={installMode === "command"}
                        onClick={() => {
                          triggerHaptic("light");
                          setInstallMode("command");
                        }}
                      >
                        Command
                      </button>
                      <button
                        type="button"
                        className="am-segmented-box__btn"
                        data-active={installMode === "manual"}
                        onClick={() => {
                          triggerHaptic("light");
                          setInstallMode("manual");
                        }}
                      >
                        Manual
                      </button>
                    </div>
                  </div>

                  {installMode === "command" ? (
                    <figure className="am-code-figure">
                      <div className="am-code-figure__bar">
                        <div className="am-code-figure__tabs">
                          {["pnpm", "yarn", "npm", "bun"].map((pm) => (
                            <button
                              key={pm}
                              type="button"
                              className="am-pm-tab"
                              data-active={packageManager === pm}
                              onClick={() => {
                                triggerHaptic("light");
                                setPackageManager(pm);
                              }}
                            >
                              {pm}
                            </button>
                          ))}
                        </div>
                        <button
                          type="button"
                          className="am-action-chip"
                          onClick={() => {
                            navigator.clipboard.writeText(installCommand);
                            triggerHaptic("success");
                            showToast("CLI command copied");
                          }}
                        >
                          {Icons.copy}
                        </button>
                      </div>
                      <div className="am-code-figure__inner">
                        <pre className="am-code-figure__pre" style={{ padding: "14px 16px" }}>
                          <code>{installCommand}</code>
                        </pre>
                      </div>
                    </figure>
                  ) : (
                    <div className="am-code-figure">
                      <div className="am-code-figure__inner">
                        <div className="am-code-figure__header">
                          <span>
                            src/components/ui/{variant === "clean" ? "clean/" : ""}
                            {activeItem.slug}.tsx
                          </span>
                          <button
                            type="button"
                            className="am-pm-tab"
                            data-active="true"
                            onClick={() => {
                              navigator.clipboard.writeText(activeSource || "");
                              triggerHaptic("success");
                              showToast("Copied component source code!");
                            }}
                          >
                            Copy Source
                          </button>
                        </div>
                        <pre className="am-code-figure__pre no-scrollbar">
                          <code>{activeSource || "// Loading source..."}</code>
                        </pre>
                      </div>
                    </div>
                  )}
                </div>

                {/* 2. HOW TO USE */}
                <div className="am-detail__section">
                  <h2 className="am-detail__label">How to use</h2>
                  <figure className="am-code-figure">
                    <div className="am-code-figure__inner">
                      <div className="am-code-figure__header">
                        <span>Demo.tsx</span>
                        <button
                          type="button"
                          className="am-action-chip"
                          onClick={() => {
                            const usageCode =
                              activeDocs?.usage ||
                              `import { ${activeItem.name.replace(/[^a-zA-Z0-9]/g, "")} } from "${BRAND_CONFIG.packageName}${variant === "clean" ? "/clean" : ""}";\nimport "${BRAND_CONFIG.packageName}/styles.css";\n\nexport default function Demo() {\n  return <${activeItem.name.replace(/[^a-zA-Z0-9]/g, "")} />;\n}`;
                            navigator.clipboard.writeText(usageCode);
                            triggerHaptic("success");
                            showToast("Copied TSX usage code!");
                          }}
                        >
                          {Icons.copy}
                        </button>
                      </div>
                      <pre className="am-code-figure__pre no-scrollbar">
                        <code>
                          {activeDocs?.usage ||
                            `import { ${activeItem.name.replace(/[^a-zA-Z0-9]/g, "")} } from "${BRAND_CONFIG.packageName}${variant === "clean" ? "/clean" : ""}";\nimport "${BRAND_CONFIG.packageName}/styles.css";\n\nexport default function Demo() {\n  return <${activeItem.name.replace(/[^a-zA-Z0-9]/g, "")} />;\n}`}
                        </code>
                      </pre>
                    </div>
                  </figure>
                </div>

                {/* 3. PROPS TABLE */}
                <div className="am-detail__section">
                  <div>
                    <h2 className="am-detail__label">Props</h2>
                    <p style={{ margin: "6px 0 0", fontSize: 13.5, color: "var(--am-muted-fg)" }}>
                      Options you can pass to customize this component.
                    </p>
                  </div>
                  <div className="am-props-card">
                    <table className="am-props-table">
                      <thead>
                        <tr>
                          <th style={{ width: "26%" }}>Prop</th>
                          <th style={{ width: "28%" }}>Type</th>
                          <th style={{ width: "46%" }}>Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        {(activeDocs?.props?.length > 0
                          ? activeDocs.props
                          : [
                              {
                                name: "variant",
                                type: "'classic' | 'clean'",
                                description:
                                  "Selects between Classic Double-Tray Tactile or Clean Subpixel Precision look.",
                              },
                              {
                                name: "className",
                                type: "string",
                                description: "Additional custom CSS classes.",
                              },
                            ]
                        ).map((p, idx) => (
                          <tr key={idx}>
                            <td>
                              <code className="am-prop-code">{p.name}</code>
                            </td>
                            <td style={{ fontFamily: "ui-monospace, monospace", fontSize: 12 }}>
                              {p.type}
                            </td>
                            <td style={{ color: "var(--am-muted-fg)", lineHeight: 1.5 }}>
                              {p.description}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 4. INTERACTION & DESIGN GUIDELINES */}
                <div className="am-detail__section">
                  <h2 className="am-detail__label">Interaction &amp; Architecture</h2>
                  <p style={{ margin: 0, fontSize: 14, lineHeight: 1.65, color: "var(--am-muted-fg)" }}>
                    {activeItem.description}
                  </p>
                  {activeDocs?.whenToUse?.length > 0 && (
                    <ul style={{ margin: "8px 0 0", paddingLeft: 18, fontSize: 13.5, lineHeight: 1.75, color: "var(--am-muted-fg)" }}>
                      {activeDocs.whenToUse.map((w, i) => (
                        <li key={i}>{w}</li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* 5. KEEP IN MIND & LICENSE */}
                <div className="am-detail__section">
                  <h2 className="am-detail__label">Keep in mind</h2>
                  <p style={{ margin: 0, fontSize: 14, lineHeight: 1.65, color: "var(--am-muted-fg)" }}>
                    Components in {BRAND_CONFIG.name} are built with zero external UI library bloat, deterministic spring physics, and full keyboard accessibility (`roving tabindex`, `aria-*`). You own the code once copied into your codebase.
                  </p>
                </div>
              </div>

              {/* RIGHT STICKY SIDEBAR */}
              <div className="am-detail__sidebar">
                <section className="am-sidebar-card" aria-label="Dependencies">
                  <h2 className="am-sidebar-card__title">Dependencies</h2>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    <span className="am-dep-chip">react &gt;= 19.0</span>
                    <span className="am-dep-chip">{BRAND_CONFIG.packageName}</span>
                    <span className="am-dep-chip">zero-runtime-bloat</span>
                  </div>
                </section>

                <section className="am-sidebar-card" aria-label="Details">
                  <h2 className="am-sidebar-card__title">Details</h2>
                  <dl style={{ margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                    <div className="am-meta-row">
                      <dt>Category</dt>
                      <dd>{activeItem.category || "UI"}</dd>
                    </div>
                    <div className="am-meta-row">
                      <dt>Kind</dt>
                      <dd style={{ textTransform: "capitalize" }}>{activeItem.kind || "component"}</dd>
                    </div>
                    <div className="am-meta-row">
                      <dt>Styles</dt>
                      <dd>{activeItem.loadClean ? "Classic & Clean" : "Classic"}</dd>
                    </div>
                    <div className="am-meta-row">
                      <dt>License</dt>
                      <dd>MIT (Free)</dd>
                    </div>
                    <div className="am-meta-row">
                      <dt>Framework</dt>
                      <dd>React + CSS Tokens</dd>
                    </div>
                  </dl>
                </section>

                {/* Prev / Next Component Navigation Card */}
                <section className="am-sidebar-card" aria-label="Navigation">
                  <h2 className="am-sidebar-card__title">Navigate Catalog</h2>
                  <div style={{ display: "flex", gap: 8 }}>
                    <button
                      type="button"
                      className="am-action-chip"
                      style={{ flex: 1, justifyContent: "center", opacity: prevItem ? 1 : 0.4 }}
                      disabled={!prevItem}
                      onClick={() => prevItem && openDetail(prevItem.slug)}
                    >
                      {Icons.arrowLeft} Prev
                    </button>
                    <button
                      type="button"
                      className="am-action-chip"
                      style={{ flex: 1, justifyContent: "center", opacity: nextItem ? 1 : 0.4 }}
                      disabled={!nextItem}
                      onClick={() => nextItem && openDetail(nextItem.slug)}
                    >
                      Next {Icons.arrowRight}
                    </button>
                  </div>
                </section>
              </div>
            </div>
          </div>
        ) : (
          /* ==================================================================
             1:1 Amicro Home Page (Hero + Sponsor Bar + Stadium Pill Bar + Grid)
             ================================================================== */
          <>
            {/* 1. Hero Section */}
            <section
              className="am-hero"
              onMouseMove={handleHeroMouseMove}
              onMouseLeave={handleHeroMouseLeave}
            >
              <div aria-hidden="true" className="am-hero__glow" />

              {/* Eyebrow Pill */}
              <a
                href="#components"
                onClick={(e) => {
                  e.preventDefault();
                  triggerHaptic("light");
                  document.getElementById("components")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="am-eyebrow"
              >
                {Icons.vercel}
                <span>Backed by Vercel OSS Program · 141 Production Elements</span>
              </a>

              {/* Main Headline with Micro Spring Physics & DiaTextReveal */}
              <div ref={heroTitleRef} className="am-hero__title">
                <h1 className="text-fluid-hero" style={{ margin: 0, fontWeight: 600 }}>
                  <span>
                    <DiaTextReveal
                      text="Small motion."
                      textColor={theme === "dark" ? "#ededed" : "#0a0a0c"}
                      duration={1.6}
                      delay={0.1}
                    />
                  </span>{" "}
                  <span>
                    <DiaTextReveal
                      text="Big difference."
                      textColor={theme === "dark" ? "#ededed" : "#0a0a0c"}
                      duration={1.6}
                      delay={0.35}
                    />
                  </span>
                </h1>
              </div>

              {/* Supporting Text */}
              <p className="text-fluid-sub am-hero__sub">
                141+ copy-paste React components, AI agent screens, transitions &amp; UI effects in Classic and Clean styles.
              </p>

              {/* Hero CTAs */}
              <div className="am-hero__ctas">
                <button
                  type="button"
                  className="am-btn-primary"
                  onClick={() => {
                    triggerHaptic("light");
                    document.getElementById("components")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {Icons.browseMask}
                  <span>Explore Components</span>
                </button>

                <a
                  href={BRAND_CONFIG.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="am-btn-secondary"
                  onClick={() => triggerHaptic("medium")}
                >
                  {Icons.github}
                  <span>GitHub Repo</span>
                  {stars > 0 && (
                    <span className="am-star-pill">
                      <AnimatedStarCounter value={stars} />
                    </span>
                  )}
                </a>
              </div>
            </section>

            {/* 2. HeroSponsorBar (4-Card Row Beneath Hero with Blur Crossfade) */}
            <section className="am-sponsor-bar">
              <p className="am-sponsor-bar__title">Sponsored by</p>
              <div className="am-sponsor-bar__grid">
                <a
                  href="https://maple.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="am-sponsor-slot--occupied"
                  onClick={() => triggerHaptic("light")}
                >
                  {Icons.maple}
                  <span
                    style={{
                      fontSize: 21,
                      fontWeight: 700,
                      letterSpacing: "-0.035em",
                      color: theme === "dark" ? "#F5F2EC" : "#18181b",
                    }}
                  >
                    Maple
                  </span>
                </a>
                <HeroEmptySlot
                  label="Become the first sponsor"
                  triggerHaptic={triggerHaptic}
                  onClick={() => handleSelectNav("cli")}
                />
                <HeroEmptySlot
                  label="Your logo here"
                  triggerHaptic={triggerHaptic}
                  onClick={() => handleSelectNav("skills")}
                />
                <HeroEmptySlot
                  label="Your logo here"
                  triggerHaptic={triggerHaptic}
                  onClick={() => setCmdOpen(true)}
                />
              </div>
            </section>

            {/* 3. Component Catalog Gallery & Stadium CategoryPillBar */}
            <section id="components" className="am-catalog-section">
              <div className="am-pill-bar-wrap">
                {/* Centered Stadium Pill Bar */}
                <div role="tablist" aria-label="Component categories" className="am-pill-bar no-scrollbar">
                  {CATALOG_TABS.map((tab) => {
                    const isSelected = catalogTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        role="tab"
                        aria-selected={isSelected}
                        type="button"
                        className="am-pill-tab"
                        data-active={isSelected}
                        onClick={() => {
                          triggerHaptic("light");
                          setCatalogTab(tab.id);
                          setSubCategory("all");
                        }}
                      >
                        <span>{tab.label}</span>
                        <span className="am-pill-tab__count">{tabCounts[tab.id]}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Secondary Sub-category Pills when applicable */}
                {availableSubCategories.length > 2 && (
                  <div className="am-subpill-row">
                    {availableSubCategories.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        className="am-subpill"
                        data-active={subCategory === cat}
                        onClick={() => {
                          triggerHaptic("light");
                          setSubCategory(cat);
                        }}
                      >
                        {cat === "all" ? "All Categories" : cat}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* 4. Minimal Expanded Component Grid (SpotlightCard + Minimal Footer) */}
              <div
                className="am-grid"
                data-kind={catalogTab === "screens" ? "screen" : "default"}
              >
                {filteredItems.map((item, idx) => {
                  const isCopied = copiedSlug === item.slug;
                  return (
                    <article
                      key={item.slug}
                      className="am-card-article"
                      style={{
                        animationDelay: `${Math.min(idx * 15, 50)}ms`,
                      }}
                    >
                      {/* Expanded Borderless Playground Stage */}
                      <SpotlightCard
                        onClick={(e) => {
                          if (
                            e.target.closest(
                              "a, button, input, label, select, textarea, [role='switch'], [role='tab'], [role='radio']",
                            )
                          ) {
                            return;
                          }
                          openDetail(item.slug);
                        }}
                      >
                        {/* Floating top-right stage badges on hover */}
                        <div className="am-stage-badges">
                          {item.loadClean && (
                            <span className="am-stage-badge">
                              {variant === "clean" ? "Clean" : "Classic"} · 2 Styles
                            </span>
                          )}
                          {item.kind === "screen" && (
                            <button
                              type="button"
                              className="am-stage-badge"
                              onClick={(e) => {
                                e.stopPropagation();
                                openFullscreen(item.slug);
                              }}
                            >
                              {Icons.fullscreen} Full Screen
                            </button>
                          )}
                        </div>

                        <CardPreview item={item} variant={variant} />
                      </SpotlightCard>

                      {/* Minimal Card Footer: Title, Subtitle & Hover Copy Code Button */}
                      <div
                        className="am-card-footer"
                        onClick={() => openDetail(item.slug)}
                      >
                        <div className="am-card-footer__info">
                          <div className="am-card-footer__title-row">
                            <h3 className="am-card-footer__title">{item.name}</h3>
                            {item.kind === "screen" && (
                              <span className="am-card-footer__badge">Screen</span>
                            )}
                          </div>
                          <p className="am-card-footer__desc">
                            {item.description || `${item.category} interaction`}
                          </p>
                        </div>

                        <button
                          type="button"
                          className="am-copy-icon-btn"
                          data-copied={isCopied}
                          onClick={(e) => handleQuickCopyCard(e, item)}
                          title={`Copy ${item.name} component code`}
                          aria-label={`Copy ${item.name} component code`}
                        >
                          {isCopied ? Icons.check : Icons.copy}
                        </button>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>

            {/* 5. 1:1 Amicro CtaSection with Halftone Background */}
            <section className="am-cta-section">
              <div className="am-cta-card">
                <img
                  src="/amicro-cta.jpg"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="am-cta-card__bg"
                />
                <div aria-hidden="true" className="am-cta-card__overlay" />

                <h2 className="text-fluid-h1 am-cta-card__title">
                  Ready to make your interface feel alive?
                </h2>
                <p className="text-fluid-sub am-cta-card__sub">
                  141+ copy-paste React components for AI agent workflows, spring physics, tactile cards, and UI effects. Free and open-source.
                </p>

                <div className="am-cta-card__actions">
                  <button
                    type="button"
                    className="am-btn-primary"
                    style={{ borderRadius: 9999, background: "#ededed", color: "#09090b" }}
                    onClick={() => {
                      triggerHaptic("light");
                      document.getElementById("components")?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <span>Browse Components</span>
                    {Icons.arrowRight}
                  </button>

                  <a
                    href={BRAND_CONFIG.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="am-btn-secondary"
                    style={{
                      borderRadius: 9999,
                      background: "#141417",
                      borderColor: "rgba(255,255,255,0.12)",
                      color: "#e4e4e7",
                    }}
                    onClick={() => triggerHaptic("medium")}
                  >
                    {Icons.github}
                    <span>GitHub</span>
                    {stars > 0 && (
                      <span style={{ fontSize: 12, fontWeight: 600, opacity: 0.9 }}>
                        (<AnimatedStarCounter value={stars} />)
                      </span>
                    )}
                  </a>
                </div>
              </div>
            </section>
          </>
        )}
      </main>

      {/* 6. 1:1 Amicro MinimalFooter */}
      <footer className="am-footer">
        <div className="am-footer__inner">
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <a
              href="#/"
              onClick={(e) => {
                e.preventDefault();
                handleNavigateHome();
              }}
              className="am-brand-link"
              style={{ gap: 8 }}
            >
              <span className="am-brand-avatar" style={{ width: 22, height: 22 }}>
                <img src="/amicro-logo.jpg" alt={BRAND_CONFIG.name} />
              </span>
              <span style={{ fontWeight: 600, fontSize: 13.5, color: "var(--am-fg)" }}>
                {BRAND_CONFIG.name}
              </span>
            </a>
            <span style={{ opacity: 0.4 }}>·</span>
            <span>
              Enterprise AI-First Design System · Classic &amp; Clean
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 12.5 }}>
            <span>© 2026 {BRAND_CONFIG.slug}</span>
            <span style={{ opacity: 0.4 }}>·</span>
            <a
              href="#/cli"
              onClick={(e) => {
                e.preventDefault();
                handleSelectNav("cli");
              }}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              CLI
            </a>
            <span style={{ opacity: 0.4 }}>·</span>
            <a
              href="#/skills"
              onClick={(e) => {
                e.preventDefault();
                handleSelectNav("skills");
              }}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Skills
            </a>
            <span style={{ opacity: 0.4 }}>·</span>
            <span>MIT License</span>
          </div>
        </div>
      </footer>

      {/* 7. Bottom-Left Toast Notification */}
      {toastMessage && (
        <div className="am-toast" role="status" aria-live="polite">
          {toastMessage}
        </div>
      )}

      {/* 8. Global ⌘K Command Palette Modal */}
      {cmdOpen && (
        <div
          className="am-cmd-backdrop"
          onClick={() => setCmdOpen(false)}
        >
          <div
            className="am-cmd-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="am-cmd-search">
              <span style={{ color: "var(--am-muted-fg)", display: "flex" }}>
                {Icons.search}
              </span>
              <input
                ref={cmdInputRef}
                type="text"
                value={cmdQuery}
                onChange={(e) => {
                  setCmdQuery(e.target.value);
                  setCmdIndex(0);
                }}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown") {
                    e.preventDefault();
                    triggerHaptic("light");
                    setCmdIndex((i) => (i + 1) % Math.max(1, cmdItems.length));
                  } else if (e.key === "ArrowUp") {
                    e.preventDefault();
                    triggerHaptic("light");
                    setCmdIndex(
                      (i) => (i - 1 + cmdItems.length) % Math.max(1, cmdItems.length),
                    );
                  } else if (e.key === "Enter" && cmdItems[cmdIndex]) {
                    e.preventDefault();
                    setCmdOpen(false);
                    openDetail(cmdItems[cmdIndex].slug);
                  }
                }}
                placeholder="Search 141+ components, screens, blocks & motion..."
                className="am-cmd-input"
              />
              <span className="am-cmd-esc">esc</span>
            </div>

            <div className="am-cmd-cats no-scrollbar">
              {[
                { id: "all", label: "All (141)" },
                { id: "component", label: "Components" },
                { id: "screen", label: "Screens" },
                { id: "block", label: "Blocks" },
                { id: "illustration", label: "Illustrations" },
                { id: "motion", label: "Motion" },
              ].map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  className="am-cmd-cat-btn"
                  data-active={cmdCategory === cat.id}
                  onClick={() => {
                    triggerHaptic("light");
                    setCmdCategory(cat.id);
                    setCmdIndex(0);
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="am-cmd-list no-scrollbar">
              {cmdItems.length === 0 ? (
                <div style={{ padding: 36, textAlign: "center", color: "var(--am-muted-fg)", fontSize: 13.5 }}>
                  No matching components found.
                </div>
              ) : (
                cmdItems.map((item, idx) => (
                  <div
                    key={item.slug}
                    className="am-cmd-item"
                    data-selected={idx === cmdIndex}
                    onMouseEnter={() => setCmdIndex(idx)}
                    onClick={() => {
                      setCmdOpen(false);
                      openDetail(item.slug);
                    }}
                  >
                    <div style={{ minWidth: 0, flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <span style={{ fontWeight: 600, fontSize: 14, color: "var(--am-fg)" }}>
                          {item.name}
                        </span>
                        <span
                          style={{
                            fontSize: 11,
                            padding: "1px 7px",
                            borderRadius: 999,
                            background: "rgba(128,128,138,0.12)",
                            color: "var(--am-muted-fg)",
                          }}
                        >
                          {item.category || item.kind}
                        </span>
                      </div>
                      <p
                        style={{
                          margin: "2px 0 0",
                          fontSize: 12,
                          color: "var(--am-muted-fg)",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {item.description}
                      </p>
                    </div>
                    <button
                      type="button"
                      className="am-action-chip"
                      onClick={(e) => {
                        e.stopPropagation();
                        const cmd = `npx ${BRAND_CONFIG.cliName} add ${item.slug}`;
                        navigator.clipboard.writeText(cmd);
                        triggerHaptic("success");
                        showToast(`Copied ${cmd}`);
                      }}
                      title="Copy CLI command"
                    >
                      {Icons.copy}
                      <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 11 }}>
                        CLI
                      </span>
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
