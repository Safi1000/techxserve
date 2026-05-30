"use client";

import { Suspense, lazy, useEffect, useRef } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

interface SplineSceneProps {
  scene: string;
  className?: string;
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Forward global mouse moves into the Spline canvas so the robot tracks
  // the cursor wherever it goes on the page, not only when it's over the canvas.
  // Throttled to ~60fps so we don't flood Spline with redundant pointer events.
  useEffect(() => {
    let lastTs = 0;
    let pending: MouseEvent | null = null;
    let rafId = 0;
    const THROTTLE_MS = 16;

    const flush = () => {
      rafId = 0;
      if (!pending) return;
      const e = pending;
      pending = null;
      const canvas = wrapperRef.current?.querySelector("canvas");
      if (!canvas) return;
      const init: MouseEventInit = {
        clientX: e.clientX,
        clientY: e.clientY,
        screenX: e.screenX,
        screenY: e.screenY,
        bubbles: true,
        cancelable: true,
        view: window,
      };
      canvas.dispatchEvent(new MouseEvent("mousemove", init));
      canvas.dispatchEvent(new PointerEvent("pointermove", { ...init, pointerType: "mouse" }));
    };

    const dispatch = (e: MouseEvent) => {
      const now = performance.now();
      pending = e;
      if (now - lastTs < THROTTLE_MS) {
        if (!rafId) rafId = requestAnimationFrame(flush);
        return;
      }
      lastTs = now;
      flush();
    };

    window.addEventListener("mousemove", dispatch, { passive: true });
    return () => {
      window.removeEventListener("mousemove", dispatch);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="w-full h-full">
      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-brand-red border-t-transparent rounded-full animate-spin" />
          </div>
        }
      >
        <Spline scene={scene} className={className} />
      </Suspense>
    </div>
  );
}
