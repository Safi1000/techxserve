"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  dx: number;
  dy: number;
  size: number;
}

const PARTICLE_FILL = "rgba(204, 0, 0, 0.45)";
const CONNECTION_BASE = "204, 0, 0";
const HOVER_HIGHLIGHT = "255, 50, 50";
const CONNECTION_OPACITY_MULTIPLIER = 0.22;
const HOVER_OPACITY_MULTIPLIER = 0.6;
const LINE_WIDTH = 0.6;
const PARTICLE_DENSITY_DESKTOP = 14000;
const PARTICLE_DENSITY_LOW_END = 28000;
const MOUSE_THROTTLE_MS = 32;

export default function HeroWaves() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Respect users who want reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Capability detection — degrade gracefully on weak hardware / mobile
    const cores = navigator.hardwareConcurrency || 4;
    type NavMem = Navigator & { deviceMemory?: number };
    const memory = (navigator as NavMem).deviceMemory ?? 4;
    const isSmallViewport = window.innerWidth < 768;
    const isLowEnd = cores <= 4 || memory <= 4 || isSmallViewport;

    const dprCap = isLowEnd ? 1 : 1.5;
    const particleDensity = isLowEnd ? PARTICLE_DENSITY_LOW_END : PARTICLE_DENSITY_DESKTOP;

    let animationId = 0;
    let particles: Particle[] = [];
    let isVisible = true;
    let lastMouseMoveTs = 0;
    const mouse: { x: number | null; y: number | null; radius: number } = {
      x: null,
      y: null,
      radius: 220,
    };

    const getDpr = () => Math.min(window.devicePixelRatio || 1, dprCap);
    const cssWidth = () => canvas.width / getDpr();
    const cssHeight = () => canvas.height / getDpr();

    const init = () => {
      particles = [];
      const w = cssWidth();
      const h = cssHeight();
      const count = Math.floor((w * h) / particleDensity);
      for (let i = 0; i < count; i++) {
        const size = Math.random() * 1.1 + 0.5;
        particles.push({
          x: Math.random() * (w - size * 4) + size * 2,
          y: Math.random() * (h - size * 4) + size * 2,
          dx: Math.random() * 0.4 - 0.2,
          dy: Math.random() * 0.4 - 0.2,
          size,
        });
      }
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = getDpr();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      init();
    };

    const drawParticle = (p: Particle) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = PARTICLE_FILL;
      ctx.fill();
    };

    const updateParticle = (p: Particle) => {
      const w = cssWidth();
      const h = cssHeight();
      if (p.x > w || p.x < 0) p.dx = -p.dx;
      if (p.y > h || p.y < 0) p.dy = -p.dy;

      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius + p.size && distance > 0) {
          const forceX = dx / distance;
          const forceY = dy / distance;
          const force = (mouse.radius - distance) / mouse.radius;
          p.x -= forceX * force * 5;
          p.y -= forceY * force * 5;
        }
      }

      p.x += p.dx;
      p.y += p.dy;
      drawParticle(p);
    };

    const connect = () => {
      const w = cssWidth();
      const h = cssHeight();
      const maxDistSq = (w / 7) * (h / 7);
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distSq = dx * dx + dy * dy;
          if (distSq < maxDistSq) {
            const opacity = Math.max(0, 1 - distSq / 20000);

            let strokeColor = `rgba(${CONNECTION_BASE}, ${opacity * CONNECTION_OPACITY_MULTIPLIER})`;
            if (mouse.x !== null && mouse.y !== null) {
              const mdx = particles[a].x - mouse.x;
              const mdy = particles[a].y - mouse.y;
              const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
              if (mDist < mouse.radius) {
                strokeColor = `rgba(${HOVER_HIGHLIGHT}, ${opacity * HOVER_OPACITY_MULTIPLIER})`;
              }
            }

            ctx.strokeStyle = strokeColor;
            ctx.lineWidth = LINE_WIDTH;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, cssWidth(), cssHeight());
      for (const p of particles) updateParticle(p);
      connect();
      if (isVisible) {
        animationId = window.requestAnimationFrame(animate);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const now = performance.now();
      if (now - lastMouseMoveTs < MOUSE_THROTTLE_MS) return;
      lastMouseMoveTs = now;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        mouse.x = x;
        mouse.y = y;
      } else {
        mouse.x = null;
        mouse.y = null;
      }
    };

    const handleMouseOut = () => {
      mouse.x = null;
      mouse.y = null;
    };

    // Pause the RAF loop entirely when the canvas scrolls out of view
    const visibilityObserver = new IntersectionObserver(
      (entries) => {
        const wasVisible = isVisible;
        isVisible = entries[0].isIntersecting;
        if (isVisible && !wasVisible) {
          animate();
        }
      },
      { threshold: 0 }
    );
    visibilityObserver.observe(canvas);

    resize();
    animate();

    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseout", handleMouseOut, { passive: true });

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseOut);
      visibilityObserver.disconnect();
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
