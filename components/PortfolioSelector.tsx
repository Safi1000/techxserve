"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import type { ReactNode } from "react";

export interface SelectorItem {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  overview: string;
  features: string[];
  screenshots?: string[];
  cta?: { label: string; href: string };
  gradient: string;
  iconBg?: string;
  icon: ReactNode;
}

const containerV = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.72 } },
  exit:    { transition: { staggerChildren: 0.03, staggerDirection: -1 as const } },
};
const rowV = {
  hidden:  { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.28, ease: [0.0, 0.0, 0.2, 1] as const } },
  exit:    { opacity: 0,       transition: { duration: 0.12 } },
};

// ─── Lightbox ──────────────────────────────────────────────────────────────────

function Lightbox({ shots, startIdx, onClose }: {
  shots: string[];
  startIdx: number;
  onClose: () => void;
}) {
  const [idx, setIdx] = useState(startIdx);

  const prev = useCallback(() => setIdx((i) => Math.max(0, i - 1)), []);
  const next = useCallback(() => setIdx((i) => Math.min(shots.length - 1, i + 1)), [shots.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape")     onClose();
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, prev, next]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/92 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Header */}
      <div
        className="absolute top-0 left-0 right-0 flex items-center justify-between px-5 py-4"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-white/40 text-xs font-medium">
          {shots.length > 1 ? `${idx + 1} / ${shots.length}` : ""}
        </p>
        <button
          onClick={onClose}
          className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
        >
          <X size={16} />
        </button>
      </div>

      {/* Image + side arrows */}
      <div
        className="relative flex items-center justify-center w-full px-16"
        style={{ height: "calc(100vh - 120px)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {shots.length > 1 && (
          <button
            onClick={prev}
            disabled={idx === 0}
            className="absolute left-3 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={18} />
          </button>
        )}
        <AnimatePresence mode="wait">
          <motion.img
            key={shots[idx]}
            src={shots[idx]}
            alt=""
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
          />
        </AnimatePresence>
        {shots.length > 1 && (
          <button
            onClick={next}
            disabled={idx === shots.length - 1}
            className="absolute right-3 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
          >
            <ChevronRight size={18} />
          </button>
        )}
      </div>

      {/* Thumbnail strip inside lightbox */}
      {shots.length > 1 && (
        <div className="flex gap-2 pb-4" onClick={(e) => e.stopPropagation()}>
          {shots.map((src, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className="h-12 flex-shrink-0 rounded-lg overflow-hidden transition-all duration-200"
              style={{
                aspectRatio: "16/9",
                background: "#0a0a0a",
                outline: i === idx ? "2px solid rgba(255,255,255,0.9)" : "2px solid rgba(255,255,255,0.15)",
                opacity: i === idx ? 1 : 0.45,
              }}
            >
              <img src={src} alt="" className="w-full h-full object-contain" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Panel content ─────────────────────────────────────────────────────────────

function PanelContent({ item, onOpenLightbox }: {
  item: SelectorItem;
  onOpenLightbox: (idx: number) => void;
}) {
  const shots = item.screenshots ?? [];

  return (
    <>
      {/* Full-cover primary screenshot — click opens lightbox */}
      {shots[0] && (
        <div
          className="absolute inset-0 cursor-zoom-in"
          onClick={(e) => { e.stopPropagation(); onOpenLightbox(0); }}
        >
          <img src={shots[0]} alt="" className="w-full h-full object-cover" />
        </div>
      )}

      {/* Gradient — clear at top so image shows, dark at bottom for text */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.05) 28%, rgba(0,0,0,0.52) 54%, rgba(0,0,0,0.88) 74%, rgba(0,0,0,0.97) 100%)",
        }}
      />

      {/* Text — anchored just above the bottom label, grows upward naturally */}
      <motion.div
        variants={containerV}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="absolute inset-x-0 px-6 pb-4 flex flex-col gap-2 pointer-events-none"
        style={{ bottom: "76px", textShadow: "0 1px 8px rgba(0,0,0,0.9)" }}
      >
        <motion.p variants={rowV} className="text-white/45 text-[10px] font-semibold uppercase tracking-widest">
          {item.subtitle}
        </motion.p>

        <div className="grid grid-cols-[1fr_1fr] gap-6">
          {/* Left: tagline + overview + CTA */}
          <div className="flex flex-col gap-1.5">
            <motion.p variants={rowV} className="text-white font-black text-[17px] leading-snug">
              {item.tagline}
            </motion.p>
            <motion.p variants={rowV} className="text-white/55 text-[12px] leading-relaxed line-clamp-2">
              {item.overview}
            </motion.p>
            {item.cta && (
              <motion.a
                variants={rowV}
                href={item.cta.href}
                onClick={(e) => e.stopPropagation()}
                className="pointer-events-auto inline-flex items-center gap-1.5 self-start mt-1 px-3.5 py-1.5 rounded-lg bg-white/15 hover:bg-white/25 text-white text-[11.5px] font-semibold transition-all"
              >
                {item.cta.label} <ArrowRight size={10} />
              </motion.a>
            )}
          </div>

          {/* Right: features */}
          <motion.div variants={rowV} className="grid grid-cols-2 gap-x-3 gap-y-1.5 content-start">
            {item.features.slice(0, 6).map((f) => (
              <div key={f} className="flex items-start gap-1.5">
                <span className="mt-[4px] w-1.5 h-1.5 rounded-full bg-brand-red flex-shrink-0" />
                <span className="text-white/65 text-[11px] leading-tight">{f}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

// ─── Main component ────────────────────────────────────────────────────────────

interface PortfolioSelectorProps {
  items: SelectorItem[];
}

export default function PortfolioSelector({ items }: PortfolioSelectorProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [entered, setEntered]         = useState<boolean[]>(() => new Array(items.length).fill(false));
  const [lightbox, setLightbox]       = useState<{ shots: string[]; idx: number } | null>(null);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    items.forEach((_, i) => {
      const t = setTimeout(
        () => setEntered((prev) => { const n = [...prev]; n[i] = true; return n; }),
        160 * i,
      );
      timers.push(t);
    });
    return () => timers.forEach(clearTimeout);
  }, []);

  const activeShots = items[activeIndex].screenshots ?? [];
  const hasStrip    = activeShots.length > 1;

  const openLightbox = useCallback((idx: number) => {
    const shots = items[activeIndex].screenshots ?? [];
    if (shots.length > 0) setLightbox({ shots, idx });
  }, [activeIndex, items]);

  return (
    <div>
      {/* ── Desktop ─────────────────────────────────────────────────────────── */}
      <div className="hidden sm:block">

        {/*
          relative wrapper with px-11 (44px) padding on each side.
          Arrows are absolutely positioned in that padding zone so the slider
          itself takes the full inner width — no flex-child height wrappers.
        */}
        <div className="relative" style={{ padding: "0 44px" }}>

          {/* Expanding panels */}
          <div className="flex rounded-2xl overflow-hidden" style={{ height: "520px" }}>
            {items.map((item, i) => {
              const isActive = i === activeIndex;
              const isIn     = entered[i];
              return (
                <div
                  key={item.id}
                  onClick={() => i !== activeIndex && setActiveIndex(i)}
                  className={`relative flex flex-col justify-end overflow-hidden ${isActive ? "cursor-default" : "cursor-pointer"}`}
                  style={{
                    background: item.gradient,
                    flex: isActive ? "7 1 0%" : "1 1 0%",
                    minWidth: "62px",
                    borderWidth: "2px",
                    borderStyle: "solid",
                    borderColor: isActive ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.05)",
                    boxShadow: isActive ? "0 20px 60px rgba(0,0,0,0.55)" : "0 10px 30px rgba(0,0,0,0.3)",
                    opacity:   isIn ? 1 : 0,
                    transform: isIn ? "translateX(0)" : "translateX(-60px)",
                    transition:
                      "flex 0.7s cubic-bezier(0.4,0,0.2,1), box-shadow 0.7s ease, border-color 0.7s ease, opacity 0.45s ease, transform 0.45s ease",
                  }}
                >
                  {/* Bottom fade */}
                  <div
                    className="absolute inset-x-0 bottom-0 pointer-events-none"
                    style={{
                      height: "120px",
                      background: isActive
                        ? "linear-gradient(to top, rgba(0,0,0,0.92) 0%, transparent 100%)"
                        : "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 100%)",
                      transition: "all 0.7s ease",
                    }}
                  />

                  {/* Collapsed letter */}
                  <div
                    className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
                    style={{ opacity: isActive ? 0 : 1, transition: "opacity 0.4s ease" }}
                  >
                    <span
                      className="font-black text-white leading-none"
                      style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", opacity: 0.85 }}
                    >
                      {item.title.charAt(0).toUpperCase()}
                    </span>
                  </div>

                  {/* Active panel content */}
                  <AnimatePresence>
                    {isActive && (
                      <PanelContent key={item.id} item={item} onOpenLightbox={openLightbox} />
                    )}
                  </AnimatePresence>

                  {/* Bottom label */}
                  <div className="relative z-10 flex items-center gap-3 px-5 pb-5 pt-4">
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border-2 border-white/20 backdrop-blur-sm"
                      style={{ background: item.iconBg ?? "rgba(32,32,32,0.85)" }}
                    >
                      {item.icon}
                    </div>
                    <div
                      className="overflow-hidden"
                      style={{
                        opacity:   isActive ? 1 : 0,
                        transform: isActive ? "translateX(0)" : "translateX(22px)",
                        transition: "opacity 0.45s ease 0.18s, transform 0.45s ease 0.18s",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <p className="font-bold text-white text-[15px] leading-snug">{item.title}</p>
                      <p className="text-white/55 text-sm">{item.subtitle}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Prev arrow — in left padding zone, centred on 520px slider */}
          <button
            aria-label="Previous"
            onClick={() => setActiveIndex((i) => Math.max(0, i - 1))}
            disabled={activeIndex === 0}
            className="absolute top-1/2 -translate-y-1/2 left-0 w-9 h-9 rounded-full flex items-center justify-center bg-charcoal hover:bg-charcoal/80 transition-all duration-200 disabled:opacity-20 disabled:cursor-not-allowed shadow-md"
          >
            <ChevronLeft size={15} className="text-white" />
          </button>

          {/* Next arrow — in right padding zone */}
          <button
            aria-label="Next"
            onClick={() => setActiveIndex((i) => Math.min(items.length - 1, i + 1))}
            disabled={activeIndex === items.length - 1}
            className="absolute top-1/2 -translate-y-1/2 right-0 w-9 h-9 rounded-full flex items-center justify-center bg-charcoal hover:bg-charcoal/80 transition-all duration-200 disabled:opacity-20 disabled:cursor-not-allowed shadow-md"
          >
            <ChevronRight size={15} className="text-white" />
          </button>
        </div>

        {/* Thumbnail strip — outside overflow-hidden, aligned to slider via same 44px padding */}
        {hasStrip && (
          <div className="flex gap-2 mt-3" style={{ padding: "0 44px" }}>
            {activeShots.map((src, idx) => (
              <button
                key={idx}
                onClick={() => setLightbox({ shots: activeShots, idx })}
                className="flex-shrink-0 h-14 rounded-xl overflow-hidden transition-all duration-200 hover:opacity-100"
                style={{
                  aspectRatio: "16/9",
                  background: "#0d0d0d",
                  opacity: 0.7,
                  outline: "1.5px solid rgba(255,255,255,0.1)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.7")}
              >
                {/* object-contain so full image fits — no cropping */}
                <img src={src} alt="" className="w-full h-full object-contain" />
              </button>
            ))}
          </div>
        )}

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="rounded-full transition-all duration-300"
              style={{
                width:  i === activeIndex ? "20px" : "6px",
                height: "6px",
                background: i === activeIndex ? "var(--color-brand-red)" : "rgba(0,0,0,0.15)",
              }}
            />
          ))}
        </div>
      </div>

      {/* ── Mobile ──────────────────────────────────────────────────────────── */}
      <div className="sm:hidden">
        <div className="flex gap-2 flex-wrap mb-4">
          {items.map((item, i) => {
            const isActive = i === activeIndex;
            return (
              <button
                key={item.id}
                onClick={() => setActiveIndex(i)}
                className="flex items-center gap-2 px-3 py-2 rounded-xl border transition-all duration-200"
                style={{
                  background:  isActive ? item.gradient : "transparent",
                  borderColor: isActive ? "rgba(204,0,0,0.3)" : "rgba(0,0,0,0.1)",
                }}
              >
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: isActive ? (item.iconBg ?? "rgba(204,0,0,0.4)") : "rgba(0,0,0,0.06)" }}
                >
                  {item.icon}
                </div>
                <span className="text-sm font-semibold" style={{ color: isActive ? "#fff" : "rgba(0,0,0,0.5)" }}>
                  {item.title}
                </span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="rounded-2xl overflow-hidden border border-border-gray bg-white"
          >
            {activeShots.length > 0 && (
              <MobileGallery
                shots={activeShots}
                onOpenLightbox={(idx) => setLightbox({ shots: activeShots, idx })}
              />
            )}
            <div className="p-5 space-y-4">
              <div>
                <p className="font-black text-charcoal text-lg">{items[activeIndex].tagline}</p>
                <p className="text-mid-gray text-sm mt-1 leading-relaxed">{items[activeIndex].overview}</p>
              </div>
              <ul className="space-y-2">
                {items[activeIndex].features.slice(0, 5).map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-charcoal/70">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-red flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              {items[activeIndex].cta && (
                <a
                  href={items[activeIndex].cta!.href}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-red text-white text-sm font-semibold rounded-xl hover:bg-brand-red-dark transition-all shadow-[var(--shadow-red)]"
                >
                  {items[activeIndex].cta!.label} <ArrowRight size={13} />
                </a>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Lightbox ────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
          >
            <Lightbox
              shots={lightbox.shots}
              startIdx={lightbox.idx}
              onClose={() => setLightbox(null)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Mobile gallery ────────────────────────────────────────────────────────────

function MobileGallery({ shots, onOpenLightbox }: {
  shots: string[];
  onOpenLightbox: (idx: number) => void;
}) {
  const [idx, setIdx] = useState(0);
  return (
    <div className="relative cursor-zoom-in" onClick={() => onOpenLightbox(idx)}>
      <AnimatePresence mode="wait">
        <motion.img
          key={shots[idx]}
          src={shots[idx]}
          alt=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="w-full aspect-video object-contain bg-[#0d0d0d]"
        />
      </AnimatePresence>
      {shots.length > 1 && (
        <div
          className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5"
          onClick={(e) => e.stopPropagation()}
        >
          {shots.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className="rounded-full transition-all"
              style={{
                width:  i === idx ? "16px" : "6px",
                height: "6px",
                background: i === idx ? "#fff" : "rgba(255,255,255,0.45)",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
