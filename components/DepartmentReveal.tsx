"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface DepartmentRevealProps {
  revealData: {
    department: string;
    ampersand: string;
    technology: string;
    batchTag: string;
    institute: string;
  };
  logoPath: string;
  logoAlt: string;
  onComplete: () => void;
  isPaused?: boolean;
}

export const DepartmentReveal: React.FC<DepartmentRevealProps> = ({
  revealData,
  logoPath,
  logoAlt,
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
      {/* Background Graduation Caps & Campus Silhouette vector overlay */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none flex items-end justify-center">
        <svg viewBox="0 0 800 300" className="w-full h-auto max-h-[220px] fill-white">
          {/* Subtle Campus Building & Mortarboard Silhouette */}
          <path d="M50 300 V 220 L 120 180 L 190 220 V 300 Z M220 300 V 170 L 300 120 L 380 170 V 300 Z M410 300 V 200 L 480 160 L 550 200 V 300 Z M580 300 V 230 L 660 190 L 740 230 V 300 Z" />
          {/* Floating Mortarboard caps */}
          <polygon points="200,90 250,70 300,90 250,110" />
          <line x1="250" y1="110" x2="250" y2="135" stroke="white" strokeWidth="4" />
          <polygon points="520,70 570,50 620,70 570,90" />
          <line x1="570" y1="90" x2="570" y2="115" stroke="white" strokeWidth="4" />
        </svg>
      </div>

      {/* Official Institute Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative mb-6 w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1.5 bg-white backdrop-blur-md border-2 border-amber-400/50 shadow-[0_0_40px_rgba(0,136,204,0.4)] overflow-hidden"
      >
        <Image
          src={logoPath}
          alt={logoAlt}
          width={112}
          height={112}
          className="w-full h-full object-cover rounded-full"
          priority
        />
      </motion.div>

      {/* Department Name */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="space-y-1"
      >
        <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white leading-tight font-sans">
          {revealData.department}
        </h2>
        <span className="text-amber-400 text-xl font-serif italic block font-bold">
          {revealData.ampersand}
        </span>
        <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white leading-tight font-sans">
          {revealData.technology}
        </h2>
      </motion.div>

      {/* Batch Pill */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-5 inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-red-600/80 to-amber-600/80 text-white font-bold text-xs sm:text-sm tracking-widest uppercase shadow-lg border border-amber-300/30"
      >
        {revealData.batchTag}
      </motion.div>

      {/* Institute Name */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="mt-6"
      >
        <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-neutral-300 uppercase">
          {revealData.institute}
        </p>
      </motion.div>
    </div>
  );
};
