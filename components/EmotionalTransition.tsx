"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface EmotionalTransitionProps {
  lines: string[];
  onComplete: () => void;
  isPaused?: boolean;
}

export const EmotionalTransition: React.FC<EmotionalTransitionProps> = ({
  lines,
  onComplete,
  isPaused = false,
}) => {
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    if (isPaused) return;

    if (lineIndex < lines.length) {
      const timer = setTimeout(() => {
        setLineIndex((prev) => prev + 1);
      }, 2400);

      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        onComplete();
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [lineIndex, lines.length, isPaused, onComplete]);

  const currentLine = lines[lineIndex];

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-8 z-30 select-none">
      {/* Warm Ambient Glow Core */}
      <div className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-amber-600/20 to-red-600/20 blur-[100px] pointer-events-none" />

      <AnimatePresence mode="wait">
        {currentLine && (
          <motion.div
            key={lineIndex}
            initial={{ opacity: 0, y: 30, scale: 0.96, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -25, scale: 1.04, filter: "blur(8px)" }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-center max-w-xs sm:max-w-md px-4"
          >
            <span className="text-xs uppercase tracking-[0.4em] text-amber-200/60 font-semibold block mb-4">
              {lineIndex + 1} / {lines.length}
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-snug drop-shadow-[0_4px_25px_rgba(255,255,255,0.25)] font-sans">
              {currentLine}
            </h2>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
