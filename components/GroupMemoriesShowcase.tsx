"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ChevronRight, X, Maximize2, ChevronLeft, Image as ImageIcon } from "lucide-react";

interface GroupPhotoItem {
  id: number;
  src: string;
  caption?: string;
}

interface GroupMemoriesShowcaseProps {
  groupData: {
    badge: string;
    title: string;
    subtitle: string;
    items: GroupPhotoItem[];
  };
  onComplete: () => void;
  isPaused?: boolean;
};

export const GroupMemoriesShowcase: React.FC<GroupMemoriesShowcaseProps> = ({
  groupData,
  onComplete,
  isPaused = false,
}) => {
  const [selectedPhoto, setSelectedPhoto] = useState<GroupPhotoItem | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const openLightbox = (photo: GroupPhotoItem, index: number) => {
    setSelectedPhoto(photo);
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const nextPhoto = () => {
    const nextIdx = (selectedIndex + 1) % groupData.items.length;
    setSelectedIndex(nextIdx);
    setSelectedPhoto(groupData.items[nextIdx]);
  };

  const prevPhoto = () => {
    const prevIdx = (selectedIndex - 1 + groupData.items.length) % groupData.items.length;
    setSelectedIndex(prevIdx);
    setSelectedPhoto(groupData.items[prevIdx]);
  };

  return (
    <div className="relative w-full h-full min-h-screen flex flex-col items-center justify-between py-6 px-4 text-center z-30 select-none overflow-y-auto custom-scrollbar">
      {/* Cinematic Glowing Background Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-amber-600/15 via-red-600/10 to-amber-900/10 blur-[160px] pointer-events-none" />

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center mt-2 max-w-3xl z-10"
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 via-amber-400/30 to-amber-500/20 border border-amber-400/50 backdrop-blur-md shadow-[0_0_20px_rgba(251,191,36,0.3)] mb-3">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 fill-amber-400 animate-pulse" />
          <span className="text-[11px] sm:text-xs font-black tracking-[0.25em] text-amber-300 uppercase">
            {groupData.badge}
          </span>
          <Sparkles className="w-3.5 h-3.5 text-amber-400 fill-amber-400 animate-pulse" />
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-b from-white via-amber-100 to-amber-400 tracking-tight font-sans drop-shadow-[0_4px_15px_rgba(0,0,0,0.9)]">
          {groupData.title}
        </h1>

        {/* Subtitle */}
        <p className="text-xs sm:text-base font-semibold tracking-wider text-neutral-300 mt-2">
          {groupData.subtitle}
        </p>

        <div className="h-0.5 w-32 bg-gradient-to-r from-transparent via-amber-400/80 to-transparent mt-3" />
      </motion.div>

      {/* Group Photos Mosaic Grid Gallery */}
      <div className="w-full max-w-6xl my-auto py-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 px-2 z-10">
        {groupData.items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.03,
              ease: "easeOut",
            }}
            onClick={() => openLightbox(item, index)}
            className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-900 border border-amber-500/20 hover:border-amber-400/80 cursor-pointer shadow-lg hover:shadow-[0_0_25px_rgba(251,191,36,0.35)] transition-all duration-300"
          >
            <Image
              src={item.src}
              alt={`Group photo ${item.id}`}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
              className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
            />
            {/* Overlay Gradient & Expand Icon */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-amber-400/80 text-black flex items-center justify-center backdrop-blur-md shadow-md transform scale-75 group-hover:scale-100 transition-transform">
                <Maximize2 className="w-5 h-5 stroke-[2.5]" />
              </div>
            </div>
            <div className="absolute bottom-2 left-2 right-2 text-left opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                Memory #{item.id}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Lightbox Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-neutral-900/80 border border-amber-400/40 text-white flex items-center justify-center hover:bg-amber-400 hover:text-black transition-colors z-50 shadow-xl"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Lightbox Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevPhoto();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-neutral-900/80 border border-amber-400/40 text-white flex items-center justify-center hover:bg-amber-400 hover:text-black transition-colors z-50 shadow-xl"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>

            {/* Lightbox Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextPhoto();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-neutral-900/80 border border-amber-400/40 text-white flex items-center justify-center hover:bg-amber-400 hover:text-black transition-colors z-50 shadow-xl"
            >
              <ChevronRight className="w-7 h-7" />
            </button>

            {/* Expanded Image Container */}
            <motion.div
              key={selectedPhoto.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[80vh] w-full h-[70vh] rounded-2xl overflow-hidden border-2 border-amber-400/60 shadow-[0_0_50px_rgba(251,191,36,0.3)]"
            >
              <Image
                src={selectedPhoto.src}
                alt="Group Memory expanded"
                fill
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
                className="object-contain bg-neutral-950 pointer-events-none select-none"
              />
              {/* Protection Overlay */}
              <div className="absolute inset-0 bg-transparent" onContextMenu={(e) => e.preventDefault()} />
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-center justify-between text-left">
                <div>
                  <h4 className="text-amber-300 font-extrabold text-sm sm:text-base uppercase tracking-wider">
                    CST Group Memory #{selectedPhoto.id}
                  </h4>
                  <p className="text-xs text-neutral-300 font-medium mt-0.5">
                    National Polytechnic Institute • CST Batch 2023–2026
                  </p>
                </div>
                <div className="px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/40 text-xs font-bold text-amber-300">
                  {selectedIndex + 1} / {groupData.items.length}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Continue Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mb-3 z-10"
      >
        <button
          onClick={onComplete}
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-black font-extrabold text-xs sm:text-sm uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-[0_0_30px_rgba(251,191,36,0.45)]"
        >
          <span>Continue to Class Representatives</span>
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </motion.div>
    </div>
  );
};
