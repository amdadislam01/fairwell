"use client";

import React, { useState } from "react";
import { farewellContent } from "@/data/farewellContent";
import { CinematicBackground } from "./CinematicBackground";
import { Countdown } from "./Countdown";
import { MemorySequence } from "./MemorySequence";
import { PhotoShowcase } from "./PhotoShowcase";
import { EmotionalTransition } from "./EmotionalTransition";
import { DepartmentReveal } from "./DepartmentReveal";
import { FarewellTitle } from "./FarewellTitle";
import { ClassRepresentatives } from "./ClassRepresentatives";
import { FinalMessage } from "./FinalMessage";
import { FinalEventInfo } from "./FinalEventInfo";
import { AudioController } from "./AudioController";
import { Play } from "lucide-react";

export const FarewellExperience: React.FC = () => {
  // Scene timeline index:
  // 0: Countdown
  // 1: Memory Sequence & Bottom-to-Top Credit Roll
  // 2: Funny Photos Showcase (8s each)
  // 3: Department & Logo Reveal
  // 4: Farewell Title
  // 5: Class Representatives & Organizers Tribute
  // 6: Final Message
  // 7: Final Event Info
  const [scene, setScene] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [hasInteracted, setHasInteracted] = useState<boolean>(false);

  const handleStartInteraction = () => {
    setHasInteracted(true);
    setIsPlaying(true);
  };

  const handleReplay = () => {
    setScene(0);
    setIsPlaying(true);
  };

  const nextScene = () => {
    setScene((prev) => Math.min(prev + 1, 7));
  };

  const getBackgroundIntensity = () => {
    if (scene === 2) return "warm";
    if (scene === 4 || scene === 5 || scene === 6) return "dramatic";
    return "normal";
  };

  return (
    <main className="relative w-screen h-screen min-h-screen bg-[#050507] text-white flex items-center justify-center overflow-hidden font-sans">
      {/* Autoplay & Audio Activation Overlay */}
      {!hasInteracted && (
        <div
          onClick={handleStartInteraction}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center p-6 text-center cursor-pointer group select-none"
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-red-600 to-amber-500 p-0.5 mb-6 group-hover:scale-110 transition-transform shadow-[0_0_50px_rgba(239,68,68,0.4)]">
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
              <Play className="w-9 h-9 fill-white text-white ml-1" />
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-2 uppercase font-sans">
            Farewell 2026
          </h1>
          <p className="text-sm font-semibold text-amber-300 uppercase tracking-widest">
            Computer Science & Technology • NPI
          </p>
        </div>
      )}

      {/* Audio Controller floating button */}
      <AudioController
        audioSrc={farewellContent.audio.src}
        isPlaying={isPlaying && hasInteracted}
        onTogglePlay={() => setIsPlaying(!isPlaying)}
        autoStartTrigger={hasInteracted}
      />


      {/* Fullscreen Viewport */}
      <div className="relative w-full h-full min-h-screen overflow-hidden bg-black flex flex-col justify-between">
        {/* Dynamic Canvas & Stage Video Background */}
        <CinematicBackground intensity={getBackgroundIntensity()} />

        {/* Active Scene Viewport */}
        <div className="relative flex-1 w-full h-full z-20 flex items-center justify-center">
          {scene === 0 && (
            <Countdown
              numbers={farewellContent.countdown.numbers}
              durationPerNumber={farewellContent.countdown.durationPerNumber}
              onComplete={nextScene}
            />
          )}

          {scene === 1 && (
            <MemorySequence
              batchYear={farewellContent.topHeader.batchYear}
              caption={farewellContent.topHeader.caption}
              emojis={farewellContent.topHeader.emojis}
              theEndData={farewellContent.theEndBadge}
              memoryWords={farewellContent.memoryWords}
              onComplete={nextScene}
              isPaused={!isPlaying}
            />
          )}

          {scene === 2 && (
            <PhotoShowcase
              photos={farewellContent.photos.items}
              durationSeconds={farewellContent.photos.displayDurationSeconds}
              onComplete={nextScene}
              isPaused={!isPlaying}
            />
          )}

          {scene === 3 && (
            <DepartmentReveal
              revealData={farewellContent.reveal}
              logoPath={farewellContent.institution.logoPath}
              logoAlt={farewellContent.institution.logoAlt}
              onComplete={nextScene}
              isPaused={!isPlaying}
            />
          )}

          {scene === 4 && (
            <FarewellTitle
              titleData={farewellContent.title}
              onComplete={nextScene}
              isPaused={!isPlaying}
            />
          )}

          {scene === 5 && (
            <ClassRepresentatives
              organizersData={farewellContent.organizers}
              onComplete={nextScene}
              isPaused={!isPlaying}
            />
          )}

          {scene === 6 && (
            <FinalMessage
              finalMessageData={farewellContent.finalMessage}
              theEndData={farewellContent.theEndBadge}
              onComplete={nextScene}
              isPaused={!isPlaying}
            />
          )}

          {scene === 7 && (
            <FinalEventInfo
              eventDetails={farewellContent.eventDetails}
              logoPath={farewellContent.institution.logoPath}
              logoAlt={farewellContent.institution.logoAlt}
              onReplay={handleReplay}
            />
          )}
        </div>
      </div>
    </main>
  );
};

