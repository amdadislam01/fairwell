"use client";

import React, { useEffect, useState } from "react";
import { ShieldAlert, CameraOff } from "lucide-react";

export const PhotoProtection: React.FC = () => {
  const [warningMessage, setWarningMessage] = useState<string | null>(null);
  const [isCapturedShieldActive, setIsCapturedShieldActive] = useState<boolean>(false);

  const showWarning = (msg: string) => {
    setWarningMessage(msg);
    setTimeout(() => {
      setWarningMessage(null);
    }, 3000);
  };

  useEffect(() => {
    // 1. Prevent Right-Click Context Menu
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      showWarning("🔒 ছবি ডাউনলোড ও সেভ করা সংরক্ষিত");
    };

    // 2. Prevent Drag Start on Images
    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
    };

    // 3. Block Keyboard Shortcuts & Detect Screenshot Tools (Lightshot, Snipping Tool, Win+Shift+S, Mac Cmd+Shift+4)
    const handleKeyDown = (e: KeyboardEvent) => {
      // Lightshot / Windows Snipping Tool / PrtScn
      if (
        e.key === "PrintScreen" ||
        (e.key === "s" && e.shiftKey && (e.metaKey || e.ctrlKey)) || // Win+Shift+S or Cmd+Shift+S
        (e.key === "S" && e.shiftKey && (e.metaKey || e.ctrlKey)) ||
        (e.metaKey && e.shiftKey && (e.key === "3" || e.key === "4" || e.key === "5")) // Mac Screenshot
      ) {
        e.preventDefault();
        setIsCapturedShieldActive(true);
        showWarning("🔒 স্ক্রিনশট নেওয়া অনুমোদিত নয়");
        
        // Clear clipboard content if supported
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText("Screenshots are protected on Farewell 2026 website.");
        }
        
        setTimeout(() => setIsCapturedShieldActive(false), 3000);
        return;
      }

      // Prevent Ctrl+S, Cmd+S (Save)
      if ((e.ctrlKey || e.metaKey) && (e.key === "s" || e.key === "S")) {
        e.preventDefault();
        showWarning("🔒 সেভ ফাইল ফিচারটি ডিসেবল করা হয়েছে");
        return;
      }

      // Prevent Ctrl+P, Cmd+P (Print)
      if ((e.ctrlKey || e.metaKey) && (e.key === "p" || e.key === "P")) {
        e.preventDefault();
        showWarning("🔒 পেজ প্রিন্ট করা যাবে না");
        return;
      }

      // Prevent F12, Ctrl+Shift+I, Ctrl+U (Inspect / Developer Tools)
      if (
        e.key === "F12" ||
        ((e.ctrlKey || e.metaKey) && (e.key === "u" || e.key === "U")) ||
        ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === "i" || e.key === "I" || e.key === "c" || e.key === "C" || e.key === "j" || e.key === "J"))
      ) {
        e.preventDefault();
        showWarning("🔒 ইনসপেক্ট মোড ডিসেবল করা আছে");
        return;
      }
    };

    // 4. Focus Loss & Visibility Change Detection (Lightshot / Snipping Tool activation detector)
    // When Lightshot or Snipping Tool is triggered, the browser window loses focus immediately.
    const handleBlur = () => {
      setIsCapturedShieldActive(true);
      // Auto restore shield after focus is regained or after 2 seconds
      setTimeout(() => {
        setIsCapturedShieldActive(false);
      }, 2500);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsCapturedShieldActive(true);
      } else {
        setTimeout(() => setIsCapturedShieldActive(false), 1500);
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("dragstart", handleDragStart);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("blur", handleBlur);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("dragstart", handleDragStart);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("blur", handleBlur);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <>
      {/* Lightshot & Snipping Tool Anti-Capture Blackout Shield */}
      {isCapturedShieldActive && (
        <div className="fixed inset-0 z-[99999] bg-black flex flex-col items-center justify-center p-6 text-center select-none pointer-events-auto">
          <div className="w-20 h-20 rounded-full bg-red-950/80 border border-red-500/50 flex items-center justify-center mb-4 shadow-[0_0_50px_rgba(239,68,68,0.4)] animate-pulse">
            <CameraOff className="w-10 h-10 text-red-500" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-2">
            Protected Content
          </h2>
          <p className="text-sm font-semibold text-red-400 max-w-md leading-relaxed">
            গোপনীয়তা রক্ষার স্বার্থে লাইটশট, স্নাইপিং টুল ও সব ধরনের স্ক্রিনশট প্রযুক্তি এই ওয়েবসাইটে ব্লক করা আছে।
          </p>
        </div>
      )}

      {/* Floating Warning Toast */}
      {warningMessage && !isCapturedShieldActive && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[9999] bg-red-950/90 border border-red-500/60 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full shadow-[0_0_30px_rgba(239,68,68,0.5)] backdrop-blur-md flex items-center gap-2 animate-bounce">
          <ShieldAlert className="w-4 h-4 text-red-400" />
          <span>{warningMessage}</span>
        </div>
      )}
    </>
  );
};
