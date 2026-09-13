"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PhotoItem } from "@/data/farewellContent";

interface PhotoShowcaseProps {
  photos: PhotoItem[];
  durationSeconds?: number; // 8 seconds per photo
  onComplete: () => void;
  isPaused?: boolean;
}

export const PhotoShowcase: React.FC<PhotoShowcaseProps> = ({
  photos,
  durationSeconds = 4,
  onComplete,
  isPaused = false,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progressKey, setProgressKey] = useState(0);

  const activePhoto = photos[currentIndex] || photos[0];
  const totalPhotos = photos.length;

  // Next photo handler
  const handleNext = () => {
    if (currentIndex < totalPhotos - 1) {
      setCurrentIndex((prev) => prev + 1);
      setProgressKey((prev) => prev + 1);
    } else {
      onComplete();
    }
  };

  // Previous photo handler
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setProgressKey((prev) => prev + 1);
    }
  };

  // Jump to specific index
  const handleSelect = (idx: number) => {
    setCurrentIndex(idx);
    setProgressKey((prev) => prev + 1);
  };

  // Toggle play/pause slideshow
  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  // Timer logic for 8 seconds per photo
  useEffect(() => {
    if (isPaused || !isPlaying) return;

    const timer = setTimeout(() => {
      handleNext();
    }, durationSeconds * 1000);

    return () => clearTimeout(timer);
  }, [currentIndex, isPlaying, isPaused, durationSeconds, progressKey]);

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-4 z-30 select-none overflow-hidden max-w-4xl mx-auto">
      {/* MAIN PHOTO & FUNNY CAPTION CARD */}
      <div className="relative w-full flex flex-col items-center justify-center z-30">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePhoto.id}
            initial={{ opacity: 0, scale: 0.96, filter: "blur(12px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.03, filter: "blur(12px)" }}
            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
            className="flex flex-col items-center justify-center w-full max-w-2xl"
          >
            {/* Photo Container Frame - Uniform Fixed Aspect Ratio (3:4) - Enlarged Size */}
            <div className="relative group rounded-2xl overflow-hidden bg-neutral-900/90 border border-white/20 shadow-[0_0_50px_rgba(0,0,0,0.8)] p-2 sm:p-3 backdrop-blur-xl flex flex-col items-center">
              <div className="relative overflow-hidden rounded-xl w-[310px] h-[400px] sm:w-[380px] sm:h-[490px] flex items-center justify-center bg-black/60">
                {/* Ken Burns Slow-Motion Continuous Zoom Image */}
                <motion.img
                  initial={{ scale: 1 }}
                  animate={{ scale: 1.07 }}
                  transition={{ duration: durationSeconds, ease: "linear" }}
                  src={activePhoto.src}
                  alt={activePhoto.title}
                  onContextMenu={(e) => e.preventDefault()}
                  onDragStart={(e) => e.preventDefault()}
                  draggable={false}
                  className="w-full h-full object-cover object-top rounded-lg shadow-2xl pointer-events-none select-none"
                />

                {/* Absolute Anti-Download & Right-Click Protection Overlay Layer */}
                <div className="absolute inset-0 z-10 bg-transparent select-none" onContextMenu={(e) => e.preventDefault()} />

                {/* Bottom Overlay: Student Name Badge */}
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black via-black/75 to-transparent flex justify-center items-center pointer-events-none z-20">
                  <motion.div
                    initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                    className="px-5 py-2 bg-black/85 backdrop-blur-md rounded-xl border border-amber-400/50 shadow-2xl"
                  >
                    <h3 className="text-xs sm:text-base font-black text-amber-300 tracking-wider uppercase font-sans drop-shadow-md text-center">
                      {activePhoto.title}
                    </h3>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* FUNNY CAPTION UNDER PHOTO - Slow-Motion Blur Fade Entrance */}
            <motion.div
              initial={{ opacity: 0, y: 12, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.4, duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
              className="mt-6 sm:mt-8 w-full px-5 py-3.5 sm:py-4 rounded-xl bg-gradient-to-b from-neutral-900/90 to-black/95 border border-amber-500/20 shadow-2xl backdrop-blur-2xl text-center max-w-xl"
            >
              <p className="text-sm sm:text-lg font-bold text-neutral-100 leading-relaxed font-sans whitespace-pre-line tracking-wide drop-shadow-md">
                {activePhoto.funnyText}
              </p>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
