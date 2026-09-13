"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";

interface FarewellTitleProps {
  titleData: {
    main: string;
    year: string;
    tagline: string;
  };
  onComplete: () => void;
  isPaused?: boolean;
}

export const FarewellTitle: React.FC<FarewellTitleProps> = ({
  titleData,
  onComplete,
  isPaused = false,
}) => {
  useEffect(() => {
    if (isPaused) return;

    const timer = setTimeout(() => {
      onComplete();
    }, 4500);

    return () => clearTimeout(timer);
  }, [isPaused, onComplete]);

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center z-30 select-none overflow-hidden">
      {/* Dramatic Backlight Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: [0.3, 0.7, 0.4], scale: [0.8, 1.2, 1] }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
        className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-red-600/30 via-amber-500/20 to-red-900/30 blur-[110px] pointer-events-none"
      />

      {/* Title Container with Slow Zoom */}
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1.05, opacity: 1 }}
        transition={{ duration: 4.5, ease: "easeOut" }}
        className="relative flex flex-col items-center"
      >
        {/* FAREWELL Text */}
        <motion.h1
          initial={{ letterSpacing: "0.05em", filter: "blur(10px)" }}
          animate={{ letterSpacing: "0.18em", filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl font-black uppercase text-white tracking-widest drop-shadow-[0_0_40px_rgba(255,255,255,0.4)] font-sans"
        >
          {titleData.main}
        </motion.h1>

        {/* 2026 Year Reveal */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-5xl sm:text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-500 tracking-tighter mt-1 drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)]"
        >
          {titleData.year}
        </motion.h2>

        {/* Cinematic Divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.6 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="w-24 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent my-6"
        />

        {/* THE END OF AN ERA Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-sm sm:text-base md:text-lg font-bold uppercase tracking-[0.45em] text-neutral-300 drop-shadow-md font-sans"
        >
          {titleData.tagline}
        </motion.p>
      </motion.div>
    </div>
  );
};
