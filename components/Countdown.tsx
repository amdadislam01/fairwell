"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

interface CountdownProps {
  numbers?: number[];
  durationPerNumber?: number;
  onComplete: () => void;
  onNumberTick?: (currentNumber: number) => void;
}

export const Countdown: React.FC<CountdownProps> = ({
  numbers = [5, 4, 3, 2, 1],
  durationPerNumber = 1.4,
  onComplete,
  onNumberTick,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlashing, setIsFlashing] = useState(false);

  useEffect(() => {
    if (currentIndex < numbers.length) {
      if (onNumberTick) {
        onNumberTick(numbers[currentIndex]);
      }

      const timer = setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, durationPerNumber * 1000);

      return () => clearTimeout(timer);
    } else {
      // Trigger short white flash before completing countdown
      setIsFlashing(true);
      const flashTimer = setTimeout(() => {
        onComplete();
      }, 400);

      return () => clearTimeout(flashTimer);
    }
  }, [currentIndex, numbers, durationPerNumber, onComplete, onNumberTick]);

  const currentNumber = numbers[currentIndex];

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-6 bg-black overflow-hidden select-none gap-8 sm:gap-10">
      {/* Flash transition overlay */}
      <AnimatePresence>
        {isFlashing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.95, 0] }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 z-50 bg-white pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* Atmospheric Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-amber-600/20 via-red-600/15 to-transparent blur-[140px] pointer-events-none" />

      {/* Top Header Badge (Clean typography, icon removed) */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-center px-6 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-amber-400/30 text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-amber-300 shadow-[0_0_30px_rgba(251,191,36,0.2)] z-20"
      >
        <span>FAREWELL 2026 • CST NPI</span>
      </motion.div>

      {/* CENTER COUNTDOWN ORBIT STAGE (Explicit height to prevent any overlap) */}
      <div className="relative min-h-[270px] sm:min-h-[310px] w-full flex items-center justify-center z-20 my-2">
        {/* Outer Rotating Neon Orbit Ring 1 */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute w-56 h-56 sm:w-68 sm:h-68 rounded-full border-2 border-dashed border-amber-400/40 pointer-events-none shadow-[0_0_40px_rgba(251,191,36,0.3)]"
        />

        {/* Inner Counter-Rotating Orbit Ring 2 */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute w-44 h-44 sm:w-56 sm:h-56 rounded-full border border-rose-500/40 pointer-events-none"
        />

        {/* Center Glowing Glass Orb */}
        <div className="relative w-36 h-36 sm:w-48 sm:h-48 rounded-full bg-neutral-950/90 border-2 border-amber-400/60 backdrop-blur-2xl flex items-center justify-center shadow-[0_0_70px_rgba(251,191,36,0.4)]">
          <AnimatePresence mode="wait">
            {currentNumber !== undefined && (
              <React.Fragment key={currentNumber}>
                {/* Expanding Shockwave Ripple Wave */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0.8 }}
                  animate={{ scale: 1.6, opacity: 0 }}
                  transition={{ duration: durationPerNumber * 0.85, ease: "easeOut" }}
                  className="absolute inset-0 rounded-full border-2 border-amber-400 pointer-events-none"
                />

                {/* Animated Giant Number */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.4, rotate: -12, filter: "blur(12px)" }}
                  animate={{ opacity: 1, scale: 1, rotate: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 1.35, rotate: 12, filter: "blur(16px)" }}
                  transition={{
                    duration: durationPerNumber * 0.85,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="text-center z-10"
                >
                  <span className="text-[80px] sm:text-[120px] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-amber-100 to-amber-400 drop-shadow-[0_0_45px_rgba(251,191,36,0.9)] leading-none font-sans select-none block">
                    {currentNumber}
                  </span>
                </motion.div>
              </React.Fragment>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Subdued Footer Hint */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="flex flex-col items-center gap-1.5 z-20"
      >
        <span className="text-xs sm:text-sm font-black uppercase tracking-[0.35em] text-white/90 drop-shadow-md text-center">
          GET READY FOR THE MEMORIES
        </span>
        <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-amber-300/80 uppercase text-center">
          EXPERIENCE STARTING IN MOMENTS
        </span>
      </motion.div>
    </div>
  );
};
