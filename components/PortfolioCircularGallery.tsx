"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import type { SelectorItem } from "@/components/PortfolioSelector";

// ─── Project detail popup ──────────────────────────────────────────────────────

function ProjectPopup({ item, onClose }: { item: SelectorItem; onClose: () => void }) {
  const shots = item.screenshots ?? [];
  const [imgIdx, setImgIdx] = useState(0);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm"
      style={{ padding: "2vh 2vw" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.96, opacity: 0 }}
        transition={{ duration: 0.22, ease: [0.0, 0.0, 0.2, 1] }}
        className="relative bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
        style={{ width: "96vw", maxWidth: "1500px" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Left: images — 63% of popup; height follows image ── */}
        <div className="flex flex-col bg-[#0a0a0a]" style={{ width: "63%", flexShrink: 0 }}>

          {/* Main image — no fixed container height; image drives the height */}
          <div className="relative flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={shots[imgIdx] ?? "none"}
                src={shots[imgIdx]}
                alt=""
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
                style={{ maxWidth: "100%", maxHeight: "82vh", display: "block" }}
              />
            </AnimatePresence>

            {/* Prev / Next — large, always visible */}
            {shots.length > 1 && (
              <>
                <button
                  onClick={() => setImgIdx((i) => Math.max(0, i - 1))}
                  disabled={imgIdx === 0}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center text-white transition-all disabled:opacity-20 disabled:cursor-not-allowed"
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.20)",
                    border: "2px solid rgba(255,255,255,0.45)",
                    backdropFilter: "blur(8px)",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.38)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.20)")}
                >
                  <ChevronLeft size={22} strokeWidth={2.5} />
                </button>

                <button
                  onClick={() => setImgIdx((i) => Math.min(shots.length - 1, i + 1))}
                  disabled={imgIdx === shots.length - 1}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center text-white transition-all disabled:opacity-20 disabled:cursor-not-allowed"
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.20)",
                    border: "2px solid rgba(255,255,255,0.45)",
                    backdropFilter: "blur(8px)",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.38)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.20)")}
                >
                  <ChevronRight size={22} strokeWidth={2.5} />
                </button>
              </>
            )}

            {/* Counter */}
            {shots.length > 1 && (
              <span className="absolute top-4 right-4 text-white/65 text-xs bg-black/55 px-3 py-1 rounded-full font-medium">
                {imgIdx + 1} / {shots.length}
              </span>
            )}
          </div>

          {/* Thumbnail strip */}
          {shots.length > 1 && (
            <div className="flex gap-2.5 px-4 py-3 bg-black/25 flex-shrink-0">
              {shots.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setImgIdx(i)}
                  className="flex-shrink-0 rounded-xl overflow-hidden transition-all duration-150"
                  style={{
                    height: "58px",
                    aspectRatio: "16/9",
                    background: "#080808",
                    outline: i === imgIdx
                      ? "2.5px solid rgba(204,0,0,0.95)"
                      : "1.5px solid rgba(255,255,255,0.12)",
                    opacity: i === imgIdx ? 1 : 0.5,
                  }}
                >
                  <img src={src} alt="" className="w-full h-full object-contain" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ── Right: project details — 37%; stretches to match image height ── */}
        <div className="flex flex-col overflow-y-auto" style={{ width: "37%", flexShrink: 0, alignSelf: "stretch" }}>
          {/* Project colour bar */}
          <div className="h-[4px] w-full flex-shrink-0" style={{ background: item.gradient }} />

          <div className="flex flex-col gap-5 p-8 flex-1">
            {/* Icon + title + subtitle */}
            <div className="flex items-start gap-4">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 border border-black/5 shadow-sm"
                style={{ background: item.iconBg ?? "rgba(204,0,0,0.15)" }}
              >
                {item.icon}
              </div>
              <div className="min-w-0">
                <h2 className="font-black text-charcoal text-2xl leading-tight tracking-tight">
                  {item.title}
                </h2>
                <p className="text-mid-gray text-[10px] uppercase tracking-widest font-semibold mt-1">
                  {item.subtitle}
                </p>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-brand-red font-bold text-sm italic leading-snug">
              {item.tagline}
            </p>

            <div className="h-px bg-border-gray" />

            {/* Overview */}
            <p className="text-charcoal/65 text-sm leading-relaxed">{item.overview}</p>

            {/* Features */}
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-mid-gray mb-3">
                Key Features
              </p>
              <ul className="space-y-2.5">
                {item.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-charcoal/70">
                    <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-brand-red flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            {item.cta && (
              <div className="mt-auto pt-4">
                <a
                  href={item.cta.href}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand-red text-white text-sm font-semibold rounded-xl hover:bg-brand-red-dark transition-all shadow-[var(--shadow-red)]"
                >
                  {item.cta.label} <ArrowRight size={14} />
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/12 hover:bg-black/22 flex items-center justify-center text-charcoal transition-colors"
        >
          <X size={16} />
        </button>
      </motion.div>
    </motion.div>
  );
}

// ─── Circular gallery ──────────────────────────────────────────────────────────

interface PortfolioCircularGalleryProps {
  items: SelectorItem[];
  radius?: number;
  autoRotateSpeed?: number;
}

const CARD_W = 340;
const CARD_H = 215;

export default function PortfolioCircularGallery({
  items,
  radius = 460,
  autoRotateSpeed = 0.04,
}: PortfolioCircularGalleryProps) {
  const [rotation, setRotation]         = useState(0);
  const [selectedItem, setSelectedItem] = useState<SelectorItem | null>(null);

  const containerRef     = useRef<HTMLDivElement>(null);
  const rotRef           = useRef(0);
  const pausedRef        = useRef(false);
  const inViewRef        = useRef(false);
  const isDraggingRef    = useRef(false);
  const hasDraggedRef    = useRef(false); // true if total drag exceeded threshold
  const dragXRef         = useRef(0);
  const totalDragRef     = useRef(0);    // accumulated px moved since pointerdown
  const isScrollingRef   = useRef(false); // reused as "is interacting" pause flag
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const animFrameRef     = useRef<number | null>(null);

  // Sync popup-open state to ref
  useEffect(() => { pausedRef.current = !!selectedItem; }, [selectedItem]);

  // IntersectionObserver — enable scroll rotation only while section is on screen
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => { inViewRef.current = entry.isIntersecting; },
      { threshold: 0.15 }, // activate when 15% of gallery visible
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Drag to rotate — window listeners added/removed per drag so click events
  // still reach the card buttons (setPointerCapture blocks click generation).
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onPointerDown = (e: PointerEvent) => {
      if (pausedRef.current) return;
      isDraggingRef.current = true;
      hasDraggedRef.current = false;
      totalDragRef.current = 0;
      dragXRef.current = e.clientX;
      isScrollingRef.current = true;
      el.style.cursor = "grabbing";
      document.body.style.userSelect = "none";

      const onMove = (ev: PointerEvent) => {
        const delta = ev.clientX - dragXRef.current;
        dragXRef.current = ev.clientX;
        totalDragRef.current += Math.abs(delta);
        rotRef.current += delta * 0.5;
        setRotation(rotRef.current);
      };

      const onUp = () => {
        isDraggingRef.current = false;
        el.style.cursor = "grab";
        document.body.style.userSelect = "";
        // Mark as a drag only if pointer moved > 8 px total
        hasDraggedRef.current = totalDragRef.current > 8;
        // Clear flag after the click event fires (click fires before next rAF)
        requestAnimationFrame(() => { hasDraggedRef.current = false; });
        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = setTimeout(() => {
          isScrollingRef.current = false;
        }, 300);
        window.removeEventListener("pointermove", onMove);
        window.removeEventListener("pointerup", onUp);
        window.removeEventListener("pointercancel", onUp);
      };

      window.addEventListener("pointermove", onMove);
      window.addEventListener("pointerup", onUp);
      window.addEventListener("pointercancel", onUp);
    };

    el.addEventListener("pointerdown", onPointerDown);
    return () => {
      el.removeEventListener("pointerdown", onPointerDown);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  // Auto-rotation — only runs when idle, popup closed, and section is visible
  useEffect(() => {
    const loop = () => {
      if (!pausedRef.current && !isScrollingRef.current && inViewRef.current) {
        rotRef.current += autoRotateSpeed;
        setRotation(rotRef.current);
      }
      animFrameRef.current = requestAnimationFrame(loop);
    };
    animFrameRef.current = requestAnimationFrame(loop);
    return () => { if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current); };
  }, [autoRotateSpeed]);

  const anglePerItem = 360 / items.length;

  return (
    <>
      {/* ── Desktop: 3D landscape carousel ── */}
      <div
        ref={containerRef}
        className="hidden sm:block relative w-full"
        style={{ height: "380px", cursor: "grab" }}
      >
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ perspective: "1400px" }}
        >
          <div
            style={{
              position:       "relative",
              width:          "100%",
              height:         "100%",
              transformStyle: "preserve-3d",
              transform:      `rotateY(${rotation}deg)`,
            }}
          >
            {items.map((item, i) => {
              const itemAngle   = i * anglePerItem;
              const primaryShot = item.screenshots?.[0];

              return (
                <div
                  key={item.id}
                  style={{
                    position:   "absolute",
                    width:      `${CARD_W}px`,
                    height:     `${CARD_H}px`,
                    left:       "50%",
                    top:        "50%",
                    marginLeft: `${-CARD_W / 2}px`,
                    marginTop:  `${-CARD_H / 2}px`,
                    transform:  `rotateY(${itemAngle}deg) translateZ(${radius}px)`,
                    // No opacity fade — preserve-3d handles z-ordering
                  }}
                >
                  <button
                    onClick={() => { if (hasDraggedRef.current) return; setSelectedItem(item); }}
                    className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 hover:border-white/30 transition-[border-color,filter] duration-200 hover:brightness-110"
                    style={{ background: item.gradient }}
                    aria-label={`View ${item.title} details`}
                  >
                    {primaryShot && (
                      <img
                        src={primaryShot}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    )}
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to bottom, rgba(0,0,0,0) 30%, rgba(0,0,0,0.55) 62%, rgba(0,0,0,0.92) 100%)",
                      }}
                    />
                    <div className="absolute bottom-0 inset-x-0 p-3.5">
                      <div className="flex items-center gap-2 mb-1">
                        <div
                          className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0"
                          style={{ background: item.iconBg ?? "rgba(204,0,0,0.45)" }}
                        >
                          {item.icon}
                        </div>
                        <p className="text-white font-bold text-[14px] leading-tight truncate">
                          {item.title}
                        </p>
                      </div>
                      <p className="text-white/60 text-[10.5px] leading-snug line-clamp-1 pl-0.5">
                        {item.tagline}
                      </p>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Mobile: horizontal scroll ── */}
      <div className="sm:hidden">
        <div className="flex gap-3 overflow-x-auto pb-3" style={{ scrollbarWidth: "none" }}>
          {items.map((item) => {
            const primaryShot = item.screenshots?.[0];
            return (
              <button
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="flex-shrink-0 relative rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                style={{ width: "260px", height: "165px", background: item.gradient }}
                aria-label={`View ${item.title} details`}
              >
                {primaryShot && (
                  <img
                    src={primaryShot}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(0,0,0,0) 30%, rgba(0,0,0,0.6) 65%, rgba(0,0,0,0.92) 100%)",
                  }}
                />
                <div className="absolute bottom-0 inset-x-0 p-3">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <div
                      className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0"
                      style={{ background: item.iconBg ?? "rgba(204,0,0,0.45)" }}
                    >
                      {item.icon}
                    </div>
                    <p className="text-white font-bold text-[13px] leading-tight truncate">{item.title}</p>
                  </div>
                  <p className="text-white/55 text-[10px] leading-snug line-clamp-1">{item.tagline}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Popup ── */}
      <AnimatePresence>
        {selectedItem && (
          <ProjectPopup item={selectedItem} onClose={() => setSelectedItem(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
