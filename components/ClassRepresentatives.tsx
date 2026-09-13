"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Award, ChevronRight } from "lucide-react";

interface OrganizerItem {
  id: number;
  name: string;
  role: string;
  photo: string;
  tagline: string;
}

interface ClassRepresentativesProps {
  organizersData: {
    badge: string;
    title: string;
    subtitle: string;
    items: OrganizerItem[];
  };
  onComplete: () => void;
  isPaused?: boolean;
}

export const ClassRepresentatives: React.FC<ClassRepresentativesProps> = ({
  organizersData,
  onComplete,
  isPaused = false,
}) => {
  // Auto-advance after 10 seconds unless paused
  useEffect(() => {
    if (isPaused) return;

    const timer = setTimeout(() => {
      onComplete();
    }, 10000);

    return () => clearTimeout(timer);
  }, [isPaused, onComplete]);

  return (
    <div className="relative w-full h-full min-h-screen flex flex-col items-center justify-between py-6 px-4 text-center z-30 select-none overflow-y-auto custom-scrollbar">
      {/* Cinematic Glowing Background Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-amber-600/20 via-red-600/15 to-amber-900/10 blur-[150px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-amber-400/10 blur-[100px] pointer-events-none" />

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center mt-2 max-w-2xl"
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 via-amber-400/30 to-amber-500/20 border border-amber-400/50 backdrop-blur-md shadow-[0_0_20px_rgba(251,191,36,0.3)] mb-3">
          <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400 animate-pulse" />
          <span className="text-[11px] sm:text-xs font-black tracking-[0.25em] text-amber-300 uppercase">
            {organizersData.badge}
          </span>
          <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400 animate-pulse" />
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-b from-white via-amber-100 to-amber-400 tracking-tight font-sans drop-shadow-[0_4px_15px_rgba(0,0,0,0.9)]">
          {organizersData.title}
        </h1>

        {/* Subtitle */}
        <p className="text-xs sm:text-base font-semibold tracking-wider text-neutral-300 mt-2">
          {organizersData.subtitle}
        </p>

        <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-amber-400/80 to-transparent mt-3" />
      </motion.div>

      {/* 4 Organizers Grid */}
      <div className="w-full max-w-5xl my-auto py-6 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 px-2">
        {organizersData.items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 35, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.2 + index * 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group relative rounded-2xl bg-neutral-950/80 border border-amber-500/30 hover:border-amber-400 backdrop-blur-xl p-4 sm:p-5 flex flex-col items-center shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_0_35px_rgba(251,191,36,0.35)] transition-all duration-300"
          >
            {/* Card corner gold accent */}
            <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-amber-500/20 to-transparent rounded-tr-2xl pointer-events-none" />

            {/* Photo Avatar Frame */}
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden mb-3.5 border-2 border-amber-400/60 shadow-[0_0_20px_rgba(251,191,36,0.25)] group-hover:scale-105 group-hover:border-amber-400 transition-transform duration-300 shrink-0">
              <Image
                src={item.photo}
                alt={item.name}
                fill
                sizes="(max-width: 640px) 100px, 150px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Name */}
            <h3 className="text-sm sm:text-lg font-black text-white group-hover:text-amber-300 tracking-wide font-sans line-clamp-1 transition-colors">
              {item.name}
            </h3>

            {/* Role Badge */}
            <div className="mt-1.5 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-amber-400/10 border border-amber-400/30 text-[10px] sm:text-xs font-bold text-amber-300 tracking-wider uppercase">
              <Award className="w-3 h-3 text-amber-400" />
              <span>{item.role}</span>
            </div>

            {/* Tagline */}
            <p className="text-[11px] sm:text-xs text-neutral-400 font-medium tracking-wide mt-2">
              {item.tagline}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Bottom Continue Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="mb-3"
      >
        <button
          onClick={onComplete}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-black font-extrabold text-xs uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-[0_0_25px_rgba(251,191,36,0.4)]"
        >
          <span>Continue</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </motion.div>
    </div>
  );
};
