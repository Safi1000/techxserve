"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

const SESSION_KEY = "techxserve_intro_played";
const TEXT = "TechxServe";
const X_INDEX = 4;
const SHOW_DURATION = 4800;
const EXIT_DURATION = 900;

const CHAR_DELAY = 0.05;
const SLICE_DURATION = 0.7;
const MAIN_DURATION = 0.8;
const MAIN_DELAY_OFFSET = 0.3;

const MAIN_COLOR = "#FFFFFF";
const ACCENT_COLOR = "#0A0A0A";
const SLICE_DARK = "#1A0404";
const SLICE_LIGHT = "rgba(255,255,255,0.5)";
const INV_SLICE_DARK = "#FFFFFF";
const INV_SLICE_LIGHT = "rgba(0,0,0,0.55)";

interface SliceProps {
  char: string;
  index: number;
}

function SlicedChar({ char, index }: SliceProps) {
  const display = char === " " ? " " : char;
  const isAccent = index === X_INDEX;
  const mainColor = isAccent ? ACCENT_COLOR : MAIN_COLOR;
  const sliceDark = isAccent ? INV_SLICE_DARK : SLICE_DARK;
  const sliceLight = isAccent ? INV_SLICE_LIGHT : SLICE_LIGHT;
  const baseDelay = index * CHAR_DELAY;

  const fontClass =
    "leading-none font-black tracking-tighter text-[clamp(40px,10vw,132px)]";

  const fontStyle = {
    fontFamily: "var(--font-inter), system-ui, sans-serif",
  } as const;

  // X gets an extra glitch flicker during its reveal
  const mainAnimate = isAccent
    ? {
        opacity: [0, 0.3, 1, 0.4, 1, 0.7, 1],
        filter: [
          "blur(10px)",
          "blur(4px)",
          "blur(0px)",
          "blur(3px)",
          "blur(0px)",
          "blur(1px)",
          "blur(0px)",
        ],
        x: [0, 4, 0, -3, 0, 2, 0],
      }
    : {
        opacity: 1,
        filter: "blur(0px)",
        x: 0,
      };

  const mainTransition = isAccent
    ? {
        duration: 1.0,
        delay: baseDelay + MAIN_DELAY_OFFSET,
        times: [0, 0.15, 0.35, 0.5, 0.65, 0.85, 1],
      }
    : {
        delay: baseDelay + MAIN_DELAY_OFFSET,
        duration: MAIN_DURATION,
      };

  return (
    <div className="relative px-[0.1vw] overflow-hidden">
      {/* Main character */}
      <motion.span
        initial={{ opacity: 0, filter: "blur(10px)", x: 0 }}
        animate={mainAnimate}
        transition={mainTransition}
        className={fontClass}
        style={{
          ...fontStyle,
          color: mainColor,
          textShadow: isAccent
            ? "0 0 20px rgba(0,0,0,0.5)"
            : "0 2px 18px rgba(0,0,0,0.25)",
        }}
      >
        {display}
      </motion.span>

      {/* Top slice */}
      <motion.span
        aria-hidden
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: "100%", opacity: [0, 1, 0] }}
        transition={{
          duration: SLICE_DURATION,
          delay: baseDelay,
          ease: "easeInOut",
        }}
        className={`absolute inset-0 z-10 pointer-events-none ${fontClass}`}
        style={{
          ...fontStyle,
          color: sliceDark,
          clipPath: "polygon(0 0, 100% 0, 100% 35%, 0 35%)",
        }}
      >
        {display}
      </motion.span>

      {/* Middle slice */}
      <motion.span
        aria-hidden
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: "-100%", opacity: [0, 1, 0] }}
        transition={{
          duration: SLICE_DURATION,
          delay: baseDelay + 0.1,
          ease: "easeInOut",
        }}
        className={`absolute inset-0 z-10 pointer-events-none ${fontClass}`}
        style={{
          ...fontStyle,
          color: sliceLight,
          clipPath: "polygon(0 35%, 100% 35%, 100% 65%, 0 65%)",
        }}
      >
        {display}
      </motion.span>

      {/* Bottom slice */}
      <motion.span
        aria-hidden
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: "100%", opacity: [0, 1, 0] }}
        transition={{
          duration: SLICE_DURATION,
          delay: baseDelay + 0.2,
          ease: "easeInOut",
        }}
        className={`absolute inset-0 z-10 pointer-events-none ${fontClass}`}
        style={{
          ...fontStyle,
          color: sliceDark,
          clipPath: "polygon(0 65%, 100% 65%, 100% 100%, 0 100%)",
        }}
      >
        {display}
      </motion.span>
    </div>
  );
}

function FloatingEmbers() {
  const embers = useMemo(
    () =>
      Array.from({ length: 28 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 2.5 + 1.2,
        duration: Math.random() * 5 + 7,
        delay: Math.random() * 4,
        drift: (Math.random() - 0.5) * 80,
      })),
    []
  );

  return (
    <>
      {embers.map((e) => (
        <motion.div
          key={e.id}
          className="absolute rounded-full bg-white pointer-events-none"
          style={{
            left: e.left,
            bottom: -10,
            width: e.size,
            height: e.size,
            boxShadow: "0 0 8px rgba(255,255,255,0.8), 0 0 16px rgba(255,255,255,0.4)",
          }}
          initial={{ y: 0, x: 0, opacity: 0 }}
          animate={{
            y: "-110vh",
            x: e.drift,
            opacity: [0, 0.85, 0.85, 0],
          }}
          transition={{
            duration: e.duration,
            delay: e.delay,
            repeat: Infinity,
            ease: "linear",
            times: [0, 0.1, 0.85, 1],
          }}
        />
      ))}
    </>
  );
}

function SonarRings() {
  return (
    <>
      {[0, 0.9, 1.8].map((delay, i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/40 pointer-events-none"
          style={{ width: 120, height: 120 }}
          initial={{ scale: 0, opacity: 0.6 }}
          animate={{ scale: 10, opacity: 0 }}
          transition={{
            duration: 2.8,
            delay: 0.4 + delay,
            ease: "easeOut",
            repeat: Infinity,
            repeatDelay: 0.2,
          }}
        />
      ))}
    </>
  );
}

export default function IntroOverlay() {
  const [show, setShow] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(SESSION_KEY)) return;
    } catch {}

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      try { sessionStorage.setItem(SESSION_KEY, "1"); } catch {}
      return;
    }

    try { sessionStorage.setItem(SESSION_KEY, "1"); } catch {}
    document.body.style.overflow = "hidden";
    setShow(true);

    const exitT = setTimeout(() => setExiting(true), SHOW_DURATION);
    const removeT = setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "";
    }, SHOW_DURATION + EXIT_DURATION);

    return () => {
      clearTimeout(exitT);
      clearTimeout(removeT);
      document.body.style.overflow = "";
    };
  }, []);

  if (!show) return null;

  const characters = TEXT.split("");

  return (
    <motion.div
      className="fixed inset-0 z-[9999] overflow-hidden flex flex-col items-center justify-center"
      initial={{ x: 0 }}
      animate={exiting ? { x: "-100%" } : { x: 0 }}
      transition={{ duration: EXIT_DURATION / 1000, ease: [0.76, 0, 0.24, 1] }}
      style={{
        background:
          "radial-gradient(ellipse at center, #E50000 0%, #CC0000 50%, #990000 100%)",
      }}
    >
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.13] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "clamp(24px, 5vw, 60px) clamp(24px, 5vw, 60px)",
        }}
      />

      {/* Scan lines (CRT effect) */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(255,255,255,0.4) 0px, rgba(255,255,255,0.4) 1px, transparent 1px, transparent 4px)",
        }}
      />

      {/* Sonar rings */}
      <SonarRings />

      {/* Floating embers */}
      <FloatingEmbers />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.45) 100%)",
        }}
      />

      {/* Animated corner accents — draw in */}
      {[
        { className: "top-8 left-8 border-l border-t", origin: "top left" },
        { className: "top-8 right-8 border-r border-t", origin: "top right" },
        { className: "bottom-8 left-8 border-l border-b", origin: "bottom left" },
        { className: "bottom-8 right-8 border-r border-b", origin: "bottom right" },
      ].map((c, i) => (
        <motion.div
          key={i}
          className={`absolute border-white/50 w-12 h-12 ${c.className}`}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4 + i * 0.08, duration: 0.5, ease: "easeOut" }}
          style={{ transformOrigin: c.origin }}
        />
      ))}

      {/* Main text */}
      <div className="relative z-10 w-full px-4 flex flex-col items-center">
        <div className="flex flex-wrap justify-center items-center w-full">
          {characters.map((char, i) => (
            <SlicedChar key={i} char={char} index={i} />
          ))}
        </div>
      </div>

      {/* Light sweep across wordmark */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 h-[35vh] w-[300px] pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)",
          filter: "blur(20px)",
          mixBlendMode: "overlay",
        }}
        initial={{ left: "-300px" }}
        animate={{ left: "110%" }}
        transition={{ duration: 1.2, delay: 1.5, ease: "easeInOut" }}
      />

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 14, letterSpacing: "0.15em" }}
        animate={{ opacity: 0.85, y: 0, letterSpacing: "0.45em" }}
        transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
        className="absolute bottom-[19%] text-white text-[10px] sm:text-xs font-bold uppercase whitespace-nowrap"
        style={{ textShadow: "0 2px 12px rgba(0,0,0,0.4)" }}
      >
        Tomorrow&apos;s Reality, Today
      </motion.p>

      {/* Subtitle dots */}
      <motion.div
        className="absolute bottom-[15%] flex gap-1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="w-1 h-1 rounded-full bg-white"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{
              duration: 1.2,
              delay: i * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* Bottom progress bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px]"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{
          duration: SHOW_DURATION / 1000,
          ease: [0.4, 0, 0.2, 1],
        }}
        style={{
          background:
            "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%)",
          boxShadow: "0 0 14px rgba(255,255,255,0.8)",
        }}
      />

      {/* Top accent bar */}
      <motion.div
        className="absolute top-0 right-0 h-[2px] bg-white/80"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{
          duration: SHOW_DURATION / 1000,
          ease: [0.4, 0, 0.2, 1],
        }}
        style={{ boxShadow: "0 0 14px rgba(255,255,255,0.6)" }}
      />
    </motion.div>
  );
}
