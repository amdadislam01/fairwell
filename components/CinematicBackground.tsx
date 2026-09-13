"use client";

import React, { useEffect, useRef } from "react";

interface CinematicBackgroundProps {
  intensity?: "normal" | "warm" | "dramatic";
}

export const CinematicBackground: React.FC<CinematicBackgroundProps> = ({
  intensity = "normal",
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    // Dust & Sparkle Particles (Simulating stage pyro & floating dust)
    const particleCount = 60;
    const particles = Array.from({ length: particleCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2 + 0.5,
      alpha: Math.random() * 0.5 + 0.1,
      speedY: -(Math.random() * 0.6 + 0.2),
      speedX: (Math.random() - 0.5) * 0.3,
      pulseSpeed: Math.random() * 0.03 + 0.01,
      pulseAngle: Math.random() * Math.PI * 2,
      isSpark: Math.random() > 0.7,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw dust particles & stage sparkler specks
      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.pulseAngle += p.pulseSpeed;

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        const currentAlpha = p.alpha + Math.sin(p.pulseAngle) * 0.2;
        const clampedAlpha = Math.max(0.05, Math.min(0.75, currentAlpha));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

        if (p.isSpark) {
          ctx.fillStyle = `rgba(255, 210, 140, ${clampedAlpha * 1.2})`;
          ctx.shadowBlur = 8;
          ctx.shadowColor = "rgba(255, 180, 80, 0.8)";
        } else {
          ctx.fillStyle = `rgba(255, 240, 220, ${clampedAlpha})`;
          ctx.shadowBlur = 4;
          ctx.shadowColor = "rgba(255, 255, 255, 0.3)";
        }

        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden bg-[#050507] transition-colors duration-1000">
      {/* Background Video Layer from 11.mp4 for authentic stage vibe */}
      <video
        src="/11.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20 filter brightness-60 contrast-125 mix-blend-screen scale-105 pointer-events-none"
      />

      {/* Deep Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#08070c]/90 via-[#050507]/80 to-[#030305]/95" />

      {/* Stage Concert Spotlights (Simulating top lighting rig from 11.mp4) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-48 bg-gradient-to-b from-amber-500/15 via-red-900/10 to-transparent blur-3xl" />
      <div className="absolute top-0 left-1/4 w-40 h-80 bg-gradient-to-b from-amber-400/15 to-transparent blur-2xl transform -rotate-12" />
      <div className="absolute top-0 right-1/4 w-40 h-80 bg-gradient-to-b from-amber-400/15 to-transparent blur-2xl transform rotate-12" />

      {/* Bottom Pyro / Stage Light Leak */}
      <div
        className={`absolute -bottom-32 left-1/2 -translate-x-1/2 w-[110%] h-96 rounded-[100%] blur-[100px] transition-all duration-1000 mix-blend-screen ${
          intensity === "warm" || intensity === "dramatic"
            ? "bg-gradient-to-t from-red-600/35 via-amber-600/25 to-transparent scale-110"
            : "bg-gradient-to-t from-red-900/25 via-amber-900/15 to-transparent"
        }`}
      />

      {/* Dust & Sparkles Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-10 w-full h-full opacity-85" />

      {/* Dark Vignette Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(0,0,0,0.9)_100%)] z-20 pointer-events-none" />

      {/* Subtle Film Grain Texture Overlay */}
      <div
        className="absolute inset-0 z-20 opacity-[0.04] pointer-events-none mix-blend-overlay bg-repeat bg-[length:128px_128px]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};
