"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { RotateCcw, Calendar, Clock, MapPin, Share2, Check } from "lucide-react";

interface FinalEventInfoProps {
  eventDetails: {
    title: string;
    department: string;
    institute: string;
    date: string;
    time: string;
    organizedByLabel: string;
    organizer: string;
    location: string;
  };
  logoPath: string;
  logoAlt: string;
  onReplay: () => void;
}

export const FinalEventInfo: React.FC<FinalEventInfoProps> = ({
  eventDetails,
  logoPath,
  logoAlt,
  onReplay,
}) => {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Farewell 2026 - CST NPI",
          text: "Join us for the Farewell 2026 celebration of Computer Science & Technology, National Polytechnic Institute!",
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center py-8 px-6 text-center z-30 select-none overflow-y-auto custom-scrollbar">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-red-950/20 blur-[100px] pointer-events-none" />

      {/* Top Logo & Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center mt-2"
      >
        <div className="w-16 h-16 rounded-full p-1 bg-white border border-white/30 mb-3 shadow-lg overflow-hidden">
          <Image
            src={logoPath}
            alt={logoAlt}
            width={64}
            height={64}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <h1 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-widest font-sans">
          {eventDetails.title}
        </h1>
        <p className="text-xs sm:text-sm font-semibold tracking-wider text-amber-300/90 uppercase mt-1">
          {eventDetails.department}
        </p>
        <p className="text-[11px] text-neutral-400 font-medium tracking-widest uppercase">
          {eventDetails.institute}
        </p>
      </motion.div>

      {/* Main Info Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="w-full max-w-xs sm:max-w-sm my-6 p-5 rounded-2xl bg-neutral-900/80 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col gap-4 text-left"
      >
        {/* Date */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-red-950/60 border border-red-800/40 flex items-center justify-center text-red-400 shrink-0">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-400 block">
              Date
            </span>
            <span className="text-sm font-bold text-white tracking-wide">
              {eventDetails.date}
            </span>
          </div>
        </div>

        {/* Time */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-950/60 border border-amber-800/40 flex items-center justify-center text-amber-400 shrink-0">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-400 block">
              Time
            </span>
            <span className="text-sm font-bold text-white tracking-wide">
              {eventDetails.time}
            </span>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-center text-neutral-300 shrink-0">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-400 block">
              Venue
            </span>
            <span className="text-xs font-semibold text-neutral-200 leading-snug block">
              {eventDetails.location}
            </span>
          </div>
        </div>

        <div className="h-px w-full bg-white/10 my-1" />

        {/* Organizer */}
        <div>
          <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-400 block">
            {eventDetails.organizedByLabel}
          </span>
          <p className="text-xs text-neutral-300 font-medium leading-relaxed mt-0.5">
            {eventDetails.organizer}
          </p>
        </div>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="flex items-center gap-3 mb-2"
      >
        <button
          onClick={onReplay}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-all shadow-xl active:scale-95"
        >
          <RotateCcw className="w-4 h-4" />
          Replay Reel
        </button>

        <button
          onClick={handleShare}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-neutral-800/90 text-white border border-white/20 font-semibold text-xs tracking-wider hover:bg-neutral-700 transition-all active:scale-95"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-emerald-400" />
              Copied
            </>
          ) : (
            <>
              <Share2 className="w-4 h-4" />
              Share
            </>
          )}
        </button>
      </motion.div>
    </div>
  );
};
