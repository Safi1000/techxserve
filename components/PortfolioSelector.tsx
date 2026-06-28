"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

export interface SelectorItem {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  overview: string;
  features: string[];
  screenshots?: string[]; // first is primary, rest shown in strip
  cta?: { label: string; href: string };
  gradient: string;
  iconBg?: string;
  icon: ReactNode;
}

// Text stagger — starts after the 0.7s flex expansion finishes
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

// Separate component so useState resets when the active panel changes
function PanelContent({ item }: { item: SelectorItem }) {
  const shots = item.screenshots ?? [];
  const [imgIdx, setImgIdx] = useState(0);
  const hasStrip = shots.length > 1;

  return (
    <>
      {/* Full-cover background image with crossfade */}
      <AnimatePresence mode="wait">
        {shots[imgIdx] && (
          <motion.img
            key={shots[imgIdx]}
            src={shots[imgIdx]}
            alt=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* Dark gradient overlay for text legibility */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.68) 0%, rgba(0,0,0,0.68) 60%, rgba(0,0,0,0.92) 100%)",
        }}
      />

      {/* Staggered text content */}
      <motion.div
        variants={containerV}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="absolute inset-x-0 top-0 px-7 pt-6 flex flex-col gap-3 pointer-events-none"
        style={{ bottom: hasStrip ? "132px" : "76px" }}
      >
        {/* Subtitle tag */}
        <motion.p variants={rowV} className="text-white/45 text-[10px] font-semibold uppercase tracking-widest">
          {item.subtitle}
        </motion.p>

        {/* Two-column body */}
        <div className="flex-1 grid grid-cols-[1fr_1fr] gap-8 min-h-0">

          {/* Left: tagline + overview + CTA */}
          <div className="flex flex-col gap-2.5 min-h-0">
            <motion.p variants={rowV} className="text-white font-black text-[21px] leading-snug">
              {item.tagline}
            </motion.p>
            <motion.p variants={rowV} className="text-white/55 text-[12.5px] leading-relaxed line-clamp-5 flex-1">
              {item.overview}
            </motion.p>
            {item.cta && (
              <motion.a
                variants={rowV}
                href={item.cta.href}
                onClick={(e) => e.stopPropagation()}
                className="pointer-events-auto inline-flex items-center gap-1.5 self-start px-4 py-2 rounded-lg bg-white/15 hover:bg-white/25 text-white text-[12px] font-semibold transition-all"
              >
                {item.cta.label} <ArrowRight size={11} />
              </motion.a>
            )}
          </div>

          {/* Right: features 2-col grid */}
          <motion.div variants={rowV} className="grid grid-cols-2 gap-x-4 gap-y-2 content-start pt-1">
            {item.features.slice(0, 6).map((f) => (
              <div key={f} className="flex items-start gap-1.5">
                <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-brand-red flex-shrink-0" />
                <span className="text-white/65 text-[11.5px] leading-tight">{f}</span>
              </div>
            ))}
          </motion.div>

        </div>
      </motion.div>

      {/* Screenshot strip — only shown when there are multiple images */}
      {hasStrip && (
        <div className="absolute left-5 right-5 bottom-[76px] flex gap-2 overflow-x-auto"
          style={{ scrollbarWidth: "none" }}
          onClick={(e) => e.stopPropagation()}
        >
          {shots.map((src, idx) => (
            <button
              key={idx}
              onClick={(e) => { e.stopPropagation(); setImgIdx(idx); }}
              className="flex-shrink-0 h-10 rounded-lg overflow-hidden transition-all duration-200"
              style={{
                aspectRatio: "16/9",
                outline: idx === imgIdx ? "2px solid rgba(255,255,255,0.9)" : "2px solid rgba(255,255,255,0.15)",
                opacity: idx === imgIdx ? 1 : 0.5,
              }}
            >
              <img src={src} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </>
  );
}

// ─── Main component ────────────────────────────────────────────────────────────

interface PortfolioSelectorProps {
  items: SelectorItem[];
}

export default function PortfolioSelector({ items }: PortfolioSelectorProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [entered, setEntered] = useState<boolean[]>(() => new Array(items.length).fill(false));

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    items.forEach((_, i) => {
      const t = setTimeout(
        () => setEntered((prev) => { const n = [...prev]; n[i] = true; return n; }),
        160 * i
      );
      timers.push(t);
    });
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div>
      {/* ── Desktop: full-width expanding panels ── */}
      <div className="hidden sm:block">
      <div className="flex items-center gap-4">

        {/* Left arrow */}
        <button
          aria-label="Previous"
          onClick={() => setActiveIndex((i) => Math.max(0, i - 1))}
          disabled={activeIndex === 0}
          className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center bg-charcoal hover:bg-charcoal/80 transition-all duration-200 disabled:opacity-20 disabled:cursor-not-allowed shadow-md"
        >
          <ChevronLeft size={15} className="text-white" />
        </button>

      <div className="flex-1 flex rounded-2xl overflow-hidden" style={{ height: "520px" }}>
        {items.map((item, i) => {
          const isActive = i === activeIndex;
          const isIn = entered[i];
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
                opacity: isIn ? 1 : 0,
                transform: isIn ? "translateX(0)" : "translateX(-60px)",
                transition:
                  "flex 0.7s cubic-bezier(0.4,0,0.2,1), box-shadow 0.7s ease, border-color 0.7s ease, opacity 0.45s ease, transform 0.45s ease",
              }}
            >
              {/* Bottom fade — always present, deepens when active */}
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

              {/* Initial letter — always in DOM, fades out when active */}
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

              {/* Expanded panel content — keyed by id so state resets on switch */}
              <AnimatePresence>
                {isActive && (
                  <PanelContent key={item.id} item={item} />
                )}
              </AnimatePresence>

              {/* Bottom label — always present */}
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
                    opacity: isActive ? 1 : 0,
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

        {/* Right arrow */}
        <button
          aria-label="Next"
          onClick={() => setActiveIndex((i) => Math.min(items.length - 1, i + 1))}
          disabled={activeIndex === items.length - 1}
          className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center bg-charcoal hover:bg-charcoal/80 transition-all duration-200 disabled:opacity-20 disabled:cursor-not-allowed shadow-md"
        >
          <ChevronRight size={15} className="text-white" />
        </button>

      </div>{/* end arrows + slider row */}

      {/* Dot indicators — centered below slider */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === activeIndex ? "20px" : "6px",
              height: "6px",
              background: i === activeIndex ? "var(--color-brand-red)" : "rgba(0,0,0,0.15)",
            }}
          />
        ))}
      </div>
      </div>{/* end desktop wrapper */}

      {/* ── Mobile: chips + card ── */}
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
                  background: isActive ? item.gradient : "transparent",
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
            {/* Mobile screenshot carousel */}
            {(items[activeIndex].screenshots ?? []).length > 0 && (
              <MobileGallery shots={items[activeIndex].screenshots!} />
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
    </div>
  );
}

function MobileGallery({ shots }: { shots: string[] }) {
  const [idx, setIdx] = useState(0);
  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.img
          key={shots[idx]}
          src={shots[idx]}
          alt=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="w-full aspect-video object-cover"
        />
      </AnimatePresence>
      {shots.length > 1 && (
        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
          {shots.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className="rounded-full transition-all"
              style={{
                width: i === idx ? "16px" : "6px",
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
