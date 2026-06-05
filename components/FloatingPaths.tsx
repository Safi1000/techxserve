"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

const LINE_COUNT = 31; // 36 * 0.85 ≈ 30, rounded up slightly

function PathLayer({ position }: { position: number }) {
  const paths = useMemo(
    () =>
      Array.from({ length: LINE_COUNT }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
          380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
          152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
          684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        // Thinner: was 0.5 + i * 0.03
        width: 0.28 + i * 0.016,
        opacity: 0.06 + i * 0.018,
        duration: 20 + i * 0.8,
      })),
    [position]
  );

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 696 316" fill="none">
        {paths.map((p) => (
          <motion.path
            key={p.id}
            d={p.d}
            stroke="currentColor"
            strokeWidth={p.width}
            strokeOpacity={p.opacity}
            initial={{ pathLength: 0.3, opacity: p.opacity * 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [p.opacity * 0.5, p.opacity, p.opacity * 0.5],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export default function FloatingPaths() {
  return (
    <div className="absolute inset-0 pointer-events-none text-[#CC0000]">
      <PathLayer position={1} />
      <PathLayer position={-1} />
    </div>
  );
}
