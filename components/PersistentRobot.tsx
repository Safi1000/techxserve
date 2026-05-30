"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { SplineScene } from "./SplineScene";

export default function PersistentRobot() {
  const pathname = usePathname();
  const onHome = pathname === "/";
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Skip the 3D scene entirely on weak hardware or for users who
    // prefer reduced motion — Spline is the heaviest thing on the page.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const cores = navigator.hardwareConcurrency || 4;
    type NavMem = Navigator & { deviceMemory?: number };
    const memory = (navigator as NavMem).deviceMemory ?? 4;
    const isLowEnd = cores < 4 || memory < 4;
    if (isLowEnd) return;

    setShouldRender(true);
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      className="hidden lg:block absolute right-0 top-[190px] z-[5] w-[60%] xl:w-[58%] h-[calc(100vh-330px)] overflow-hidden transition-opacity duration-500"
      style={{
        opacity: onHome ? 1 : 0,
        pointerEvents: onHome ? "auto" : "none",
      }}
    >
      {/* Inner is sized at 220% so Spline renders into a larger canvas at
          native resolution (no CSS scaling = no pixelation). Negative left
          centers the wider canvas horizontally; top:0 anchors the head. */}
      <div
        className="absolute"
        style={{
          width: "220%",
          height: "220%",
          top: 0,
          left: "-60%",
          filter:
            "brightness(0.7) sepia(1) saturate(8) hue-rotate(-38deg) brightness(1.45) contrast(1.1)",
        }}
      >
        <SplineScene
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
