"use client";

import React from "react";
import { motion } from "framer-motion";

const rows = new Array(150).fill(1);
const cols = new Array(100).fill(1);

// Brand red shades for hover — light tints so white bg stays readable
const colors = [
  "rgba(204,0,0,0.08)",
  "rgba(204,0,0,0.12)",
  "rgba(204,0,0,0.16)",
  "rgba(204,0,0,0.20)",
  "rgba(204,0,0,0.06)",
  "rgba(220,38,38,0.10)",
  "rgba(239,68,68,0.10)",
  "rgba(185,28,28,0.14)",
];

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

function BoxesCore({ className }: { className?: string }) {
  return (
    <div
      style={{
        transform:
          "translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)",
      }}
      className={`absolute left-1/4 p-4 -top-1/4 flex -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 ${className ?? ""}`}
    >
      {rows.map((_, i) => (
        <motion.div
          key={`row${i}`}
          className="w-16 h-8 border-l border-brand-red/10 relative"
        >
          {cols.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: getRandomColor(),
                transition: { duration: 0 },
              }}
              animate={{ transition: { duration: 2 } }}
              key={`col${j}`}
              className="w-16 h-8 border-r border-t border-brand-red/10 relative"
            >
              {j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="absolute h-6 w-10 -top-[14px] -left-[22px] text-brand-red/15 stroke-[1px] pointer-events-none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
}

export const HeroBoxes = React.memo(BoxesCore);
