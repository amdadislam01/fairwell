"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MemorySequenceProps {
  batchYear: string;
  caption: string;
  emojis: string;
  theEndData: {
    title: string;
    batchLabel: string;
    batchYear: string;
  };
  memoryWords: string[];
  onComplete: () => void;
  isPaused?: boolean;
}

export const MemorySequence: React.FC<MemorySequenceProps> = ({
  theEndData,
  memoryWords,
  onComplete,
  isPaused = false,
}) => {
  // Slow, smooth & cinematic 45-second scroll speed for comfortable reading
  const scrollDuration = 45;

  useEffect(() => {
    if (isPaused) return;

    const completionTimer = setTimeout(() => {
      onComplete();
    }, scrollDuration * 1000);

    return () => clearTimeout(completionTimer);
  }, [isPaused, scrollDuration, onComplete]);

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-between py-6 px-4 z-30 select-none overflow-hidden max-w-4xl mx-auto">
      {/* 1. TOP HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center text-center mt-3 mb-1 z-40"
      >
        <h1 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-widest font-sans drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]">
          CST MEMORIES
        </h1>
        <div className="mt-1 text-xs sm:text-sm font-bold tracking-widest text-amber-300 uppercase font-mono">
          {theEndData.batchLabel} {theEndData.batchYear}
        </div>
      </motion.div>

      {/* 2. CENTER CONTENT - Memory Roll Words */}
      <div className="relative w-full flex-1 flex items-start justify-center overflow-hidden mt-1 mb-2">
        <motion.div
          key="memory-roll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-full overflow-hidden flex justify-center items-start"
          style={{
            maskImage:
              "linear-gradient(to bottom, black 0%, black 85%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, black 85%, transparent 100%)",
          }}
        >
          <motion.div
            initial={{ y: "55%" }}
            animate={{ y: "-105%" }}
            transition={{
              duration: scrollDuration,
              ease: "linear",
            }}
            className="flex flex-col items-center gap-5 text-center pb-12 pt-2"
          >
            {memoryWords.map((word, index) => {
              const isGoodbye = word === "GOODBYE";
              const isHighlight =
                isGoodbye || word === "MEMORIES" || word === "BEST FRIENDS" || word === "FRIENDSHIP";

              return (
                <div key={index} className="py-1">
                  <span
                    className={`uppercase font-black tracking-widest transition-all duration-500 ${
                      isGoodbye
                        ? "text-4xl sm:text-7xl text-amber-400 drop-shadow-[0_0_35px_rgba(251,191,36,0.9)] animate-pulse"
                        : isHighlight
                        ? "text-3xl sm:text-5xl text-amber-300 drop-shadow-[0_0_25px_rgba(251,191,36,0.6)]"
                        : "text-xl sm:text-3xl text-white/90 drop-shadow-[0_3px_15px_rgba(0,0,0,0.9)]"
                    }`}
                  >
                    {word}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Subdued Footer */}
      <div className="text-xs uppercase tracking-[0.3em] text-neutral-400 font-semibold z-40 mb-2">
        Computer Science & Technology • NPI
      </div>
    </div>
  );
};
