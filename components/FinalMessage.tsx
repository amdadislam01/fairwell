"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FinalMessageProps {
  finalMessageData: {
    line1: string;
    line2: string;
    line3: string;
    line4: string;
  };
  theEndData: {
    title: string;
    batchLabel: string;
    batchYear: string;
  };
  onComplete: () => void;
  isPaused?: boolean;
}

export const FinalMessage: React.FC<FinalMessageProps> = ({
  finalMessageData,
  theEndData,
  onComplete,
  isPaused = false,
}) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (isPaused) return;

    if (step === 0) {
      const timer = setTimeout(() => {
        setStep(1);
      }, 3000);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        onComplete();
      }, 5500);
      return () => clearTimeout(timer);
    }
  }, [step, isPaused, onComplete]);

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-4 text-center z-30 select-none overflow-hidden">
      {/* Dramatic Multi-layered Glowing Background Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-amber-600/25 via-red-600/20 to-indigo-900/15 blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-amber-400/10 blur-[80px] pointer-events-none" />

      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div
            key="step-0"
            initial={{ opacity: 0, scale: 0.9, filter: "blur(12px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl w-full px-6 py-8 rounded-3xl bg-neutral-950/70 border border-white/15 backdrop-blur-2xl shadow-[0_0_70px_rgba(0,0,0,0.9)] flex flex-col items-center gap-4"
          >
            <span className="text-xs sm:text-sm uppercase tracking-[0.4em] text-amber-400 font-extrabold drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]">
              {finalMessageData.line1}
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-100 to-neutral-300 tracking-tight leading-snug drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)]">
              {finalMessageData.line2}
            </h2>
            <div className="h-0.5 w-20 bg-gradient-to-r from-transparent via-amber-400 to-transparent my-1" />
            <p className="text-sm sm:text-lg font-bold uppercase tracking-widest text-neutral-300 drop-shadow-md">
              {finalMessageData.line3}
            </p>
          </motion.div>
        )}

        {step === 1 && (
          <motion.div
            key="step-1"
            initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.08, filter: "blur(12px)" }}
            transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-4xl px-4 flex flex-col items-center justify-center text-center my-auto z-20"
          >
            {/* Glassmorphic Luxury Card Box with Gold Shadow */}
            <div className="relative w-full max-w-3xl p-8 sm:p-12 rounded-3xl bg-neutral-950/80 border-2 border-amber-400/40 backdrop-blur-3xl shadow-[0_0_90px_rgba(251,191,36,0.25)] flex flex-col items-center justify-center overflow-hidden">
              
              {/* Corner Decorative Lights */}
              <div className="absolute top-0 left-0 w-24 h-24 bg-amber-500/10 blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-rose-500/10 blur-2xl pointer-events-none" />

              {/* Top Glowing Gold Aura Line */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.3, duration: 0.9 }}
                className="h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent max-w-md w-full mb-6 shadow-[0_0_25px_rgba(251,191,36,1)]"
              />

              {/* GRAND THE END TITLE - Platinum Gold Metallic 3D Drop Shadows */}
              <motion.h1
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 1.0, ease: "easeOut" }}
                className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-b from-white via-amber-100 via-amber-200 to-amber-500 tracking-tight sm:tracking-normal font-sans leading-none max-w-full px-2 drop-shadow-[0_0_40px_rgba(251,191,36,0.65)]"
                style={{
                  filter: "drop-shadow(0px 15px 30px rgba(0,0,0,0.95)) drop-shadow(0px 0px 50px rgba(251,191,36,0.5))",
                }}
              >
                {theEndData.title}
              </motion.h1>

              {/* Gold BATCH Badge Tag with Deep Glowing Shadow */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="mt-6 inline-flex items-center gap-3 px-8 py-2.5 rounded-full bg-gradient-to-r from-amber-500/30 via-rose-500/30 to-amber-500/30 border-2 border-amber-400/70 backdrop-blur-xl shadow-[0_0_40px_rgba(251,191,36,0.45)]"
              >
                <span className="text-xs sm:text-base font-black tracking-[0.3em] text-amber-300 uppercase font-mono drop-shadow-md">
                  {theEndData.batchLabel} {theEndData.batchYear}
                </span>
              </motion.div>

              {/* Bottom Glowing Gold Aura Line */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.4, duration: 0.9 }}
                className="h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent max-w-md w-full mt-6 shadow-[0_0_25px_rgba(251,191,36,1)]"
              />

              {/* Subtitle Message with Gold Glow */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.7 }}
                className="mt-7 text-xs sm:text-base uppercase tracking-[0.4em] text-amber-200 font-extrabold drop-shadow-[0_0_20px_rgba(251,191,36,0.8)]"
              >
                {finalMessageData.line4} • UNTIL WE MEET AGAIN
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
