"use client";

import React, { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, Play, Pause, Music, Radio } from "lucide-react";

interface AudioControllerProps {
  audioSrc?: string;
  isPlaying: boolean;
  onTogglePlay: () => void;
  autoStartTrigger?: boolean;
}

declare global {
  interface Window {
    onYouTubeIframeAPIReady?: () => void;
    YT?: any;
  }
}

export const AudioController: React.FC<AudioControllerProps> = ({
  audioSrc = "https://youtu.be/ZdMlXdsoBKc?si=M7l6-JT9YzEqfku6",
  isPlaying,
  onTogglePlay,
  autoStartTrigger = false,
}) => {
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.9);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [isReady, setIsReady] = useState(false);

  // Helper to extract YouTube ID
  const getYouTubeId = (url?: string): string | null => {
    if (!url) return null;
    if (url.length === 11 && !url.includes("/") && !url.includes(".")) return url;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const youtubeId = getYouTubeId(audioSrc);

  const mediaRef = useRef<HTMLAudioElement | null>(null);
  const ytPlayerRef = useRef<any>(null);
  const iframeContainerRef = useRef<HTMLDivElement | null>(null);

  // Initialize YouTube Player or HTML5 Audio
  useEffect(() => {
    if (!youtubeId) {
      const audio = new Audio();
      audio.src = audioSrc;
      audio.loop = true;
      audio.volume = volume;
      audio.preload = "auto";
      mediaRef.current = audio;
      setIsReady(true);

      return () => {
        audio.pause();
      };
    }

    let isSubscribed = true;

    const initYouTubePlayer = () => {
      if (!window.YT || !window.YT.Player) return false;
      if (!iframeContainerRef.current) return false;

      try {
        if (ytPlayerRef.current) {
          try {
            ytPlayerRef.current.destroy();
          } catch (e) {
            // silent catch
          }
        }

        const player = new window.YT.Player(iframeContainerRef.current, {
          height: "1",
          width: "1",
          videoId: youtubeId,
          playerVars: {
            autoplay: 1,
            loop: 1,
            playlist: youtubeId,
            controls: 0,
            showinfo: 0,
            autohide: 1,
            modestbranding: 1,
            playsinline: 1,
            enablejsapi: 1,
            origin: typeof window !== "undefined" ? window.location.origin : "",
          },
          events: {
            onReady: (event: any) => {
              if (!isSubscribed) return;
              ytPlayerRef.current = event.target;
              event.target.setVolume(volume * 100);
              setIsReady(true);
              if (isPlaying) {
                event.target.playVideo();
              }
            },
            onStateChange: (event: any) => {
              if (event.data === window.YT.PlayerState.ENDED) {
                event.target.playVideo();
              }
            },
          },
        });
      } catch (err) {
        console.warn("YouTube player init error:", err);
      }
      return true;
    };

    if (!window.YT) {
      const existingScript = document.getElementById("yt-iframe-api");
      if (!existingScript) {
        const tag = document.createElement("script");
        tag.id = "yt-iframe-api";
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);
      }

      const prevCallback = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (prevCallback) prevCallback();
        if (isSubscribed) initYouTubePlayer();
      };

      const interval = setInterval(() => {
        if (window.YT && window.YT.Player) {
          clearInterval(interval);
          if (isSubscribed && !ytPlayerRef.current) {
            initYouTubePlayer();
          }
        }
      }, 200);

      return () => {
        isSubscribed = false;
        clearInterval(interval);
      };
    } else {
      initYouTubePlayer();
    }

    return () => {
      isSubscribed = false;
      if (ytPlayerRef.current && ytPlayerRef.current.destroy) {
        try {
          ytPlayerRef.current.destroy();
        } catch (e) {
          // silent catch
        }
      }
    };
  }, [youtubeId, audioSrc]);

  // Sync play / pause
  useEffect(() => {
    if (youtubeId && ytPlayerRef.current) {
      if (isPlaying) {
        try {
          ytPlayerRef.current.playVideo();
        } catch (e) {
          console.warn("YouTube play error", e);
        }
      } else {
        try {
          ytPlayerRef.current.pauseVideo();
        } catch (e) {
          console.warn("YouTube pause error", e);
        }
      }
    } else if (mediaRef.current) {
      if (isPlaying) {
        mediaRef.current.play().catch((err) => {
          console.warn("Audio play error", err);
        });
      } else {
        mediaRef.current.pause();
      }
    }
  }, [isPlaying, autoStartTrigger, youtubeId]);

  // Sync mute & volume
  useEffect(() => {
    if (youtubeId && ytPlayerRef.current) {
      try {
        if (isMuted) {
          ytPlayerRef.current.mute();
        } else {
          ytPlayerRef.current.unMute();
        }
        ytPlayerRef.current.setVolume(volume * 100);
      } catch (e) {
        console.warn("YouTube volume error", e);
      }
    } else if (mediaRef.current) {
      mediaRef.current.muted = isMuted;
      mediaRef.current.volume = volume;
    }
  }, [isMuted, volume, youtubeId]);

  return (
    <>
      {/* Hidden YouTube iframe target */}
      {youtubeId && (
        <div className="fixed top-0 left-0 w-1 h-1 opacity-0 pointer-events-none overflow-hidden -z-50">
          <div ref={iframeContainerRef} />
        </div>
      )}
    </>
  );
};
