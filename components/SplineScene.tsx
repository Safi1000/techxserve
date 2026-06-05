"use client";

import { Suspense, lazy, useEffect, useRef } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

interface SplineSceneProps {
  scene: string;
  className?: string;
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Forward global mouse moves to the Spline canvas ONLY when the cursor is
  // outside the canvas bounds. When inside, the canvas receives native events.
  useEffect(() => {
    let rafId = 0;
    let pending: MouseEvent | null = null;

    const flush = () => {
      rafId = 0;
      if (!pending) return;
      const e = pending;
      pending = null;
      const canvas = wrapperRef.current?.querySelector("canvas");
      if (!canvas) return;
      // Always forward — no inside/outside check so the robot tracks
      // everywhere on the page regardless of scroll position or overlap.
      const init: PointerEventInit = {
        clientX: e.clientX,
        clientY: e.clientY,
        screenX: e.screenX,
        screenY: e.screenY,
        bubbles: true,
        cancelable: true,
        view: window,
        pointerType: "mouse",
        pointerId: 1,
        isPrimary: true,
      };
      canvas.dispatchEvent(new PointerEvent("pointermove", init));
      canvas.dispatchEvent(new MouseEvent("mousemove", { ...init }));
    };

    const dispatch = (e: MouseEvent) => {
      pending = e;
      if (!rafId) rafId = requestAnimationFrame(flush);
    };

    window.addEventListener("mousemove", dispatch, { passive: true });
    return () => {
      window.removeEventListener("mousemove", dispatch);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="w-full h-full" style={{ pointerEvents: "auto" }}>
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
