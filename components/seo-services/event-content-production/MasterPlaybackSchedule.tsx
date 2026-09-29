"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function MasterPlaybackSchedule() {
  const [activeTab, setActiveTab] = useState<"flow" | "sync" | "run">("flow");
  const [activeShow, setActiveShow] = useState("Main Show");
  const [showDropdown, setShowDropdown] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [playheadPct, setPlayheadPct] = useState<number>(74.5); // 3:15 PM default inside column 6
  const [activeTimeText, setActiveTimeText] = useState("3:15 PM");
  const [activeCueDetail, setActiveCueDetail] = useState<{
    title: string;
    time: string;
    room: string;
    specs: string;
  } | null>(null);

  // Auto-play animation when "Run of Show" is active
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setPlayheadPct((prev) => {
          if (prev >= 95) return 5;
          return prev + 0.8;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleSyncClick = () => {
    setIsSyncing(true);
    setActiveTab("sync");
    setTimeout(() => {
      setIsSyncing(false);
    }, 1400);
  };

  const handleRunToggle = () => {
    setIsRunning(!isRunning);
    setActiveTab(isRunning ? "flow" : "run");
  };

  const timeMarkers = [
    { time: "7:00", period: "AM", pct: 7.14 },
    { time: "8:00", period: "AM", pct: 21.43 },
    { time: "9:00", period: "AM", pct: 35.71 },
    { time: "11:00", period: "AM", pct: 50.0 },
    { time: "1:00", period: "PM", pct: 64.28 },
    { time: "3:00", period: "PM", pct: 74.5 },
    { time: "5:00", period: "PM", pct: 92.85 },
  ];

  const handleTimeClick = (timeStr: string, pct: number) => {
    setPlayheadPct(pct);
    setActiveTimeText(timeStr);
    setIsRunning(false);
  };

  return (
    <>
      <style jsx global>{`
        @keyframes border-breathe {
          0%, 100% {
            box-shadow: 0 0 25px rgba(0, 180, 216, 0.25), 0 20px 50px rgba(0, 0, 0, 0.85);
            border-color: rgba(0, 180, 216, 0.45);
          }
          50% {
            box-shadow: 0 0 45px rgba(0, 210, 255, 0.45), 0 25px 60px rgba(0, 0, 0, 0.9);
            border-color: rgba(0, 210, 255, 0.7);
          }
        }

        @keyframes laser-glow {
          0%, 100% {
            opacity: 1;
            filter: drop-shadow(0 0 8px #00f0ff) drop-shadow(0 0 16px rgba(0, 240, 255, 0.85));
          }
          50% {
            opacity: 0.8;
            filter: drop-shadow(0 0 4px #00f0ff) drop-shadow(0 0 10px rgba(0, 240, 255, 0.5));
          }
        }

        @keyframes radar-sweep {
          0% {
            left: 0%;
            opacity: 0;
          }
          8% {
            opacity: 0.35;
          }
          92% {
            opacity: 0.35;
          }
          100% {
            left: 100%;
            opacity: 0;
          }
        }

        @keyframes sonar-wave {
          0% {
            transform: scale(0.95);
            opacity: 0.9;
          }
          100% {
            transform: scale(2.4);
            opacity: 0;
          }
        }

        @keyframes shimmer-move {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-border-breathe {
          animation: border-breathe 4s ease-in-out infinite;
        }

        .animate-laser-pulse {
          animation: laser-glow 2s ease-in-out infinite;
        }

        .animate-radar-sweep {
          animation: radar-sweep 8s linear infinite;
        }

        .animate-sonar {
          animation: sonar-wave 2.2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .animate-shimmer {
          animation: shimmer-move 3s ease-in-out infinite;
        }
      `}</style>

      <div
        className="relative rounded-[22px] sm:rounded-[28px] border border-[#00B4D8]/50 bg-gradient-to-b from-[#071322] via-[#050E1B] to-[#040A14] p-3.5 sm:p-5 lg:p-6 animate-border-breathe backdrop-blur-xl transition-all select-none overflow-hidden"
        aria-label="Master content and playback schedule dashboard"
      >
        {/* Ambient Radial Lights */}
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-[#00D2FF]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-[#0070F3]/20 rounded-full blur-3xl pointer-events-none" />

        {/* ================= 1. HEADER SECTION ================= */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3.5 sm:gap-4 mb-4 pb-0.5 relative z-10">
          {/* Left: Main Official DXG Logo & Title */}
          <div className="flex items-center gap-3 sm:gap-3.5">
            {/* Main DXG Logo from /images/logo.png */}
            <div className="shrink-0 flex items-center justify-center p-1 rounded-lg bg-[#06182B]/60 border border-[#00B4D8]/30 shadow-[0_0_15px_rgba(0,180,216,0.35)]">
              <Image
                src="/images/logo.png"
                alt="DXG Logo"
                width={80}
                height={58}
                priority
                className="h-auto w-[68px] sm:w-[78px] object-contain drop-shadow-[0_0_10px_rgba(44,188,237,0.6)]"
              />
            </div>

            {/* Vertical Separator Line */}
            <div className="w-[1.5px] h-11 sm:h-12 bg-[#1E3A5F]/90 shrink-0" />

            {/* Title & Eyebrow */}
            <div>
              <div className="text-[10px] sm:text-[11px] font-bold tracking-[0.18em] text-[#80A4C4] uppercase font-['Josefin_Sans',sans-serif]">
                EVENT PRODUCTION
              </div>
              <h3 className="font-extrabold text-base sm:text-lg lg:text-xl xl:text-[22px] font-['Josefin_Sans',sans-serif] tracking-tight leading-[1.12]">
                <span className="text-white block">Master content &amp;</span>
                <span className="text-[#00D2FF] block drop-shadow-[0_0_10px_rgba(0,210,255,0.4)]">
                  playback schedule
                </span>
              </h3>
              <p className="text-[#8EA3B7] text-[11px] sm:text-xs font-['IBM_Plex_Sans',sans-serif] mt-0.5">
                Plan, sync and run every screen with precision.
              </p>
            </div>
          </div>

          {/* Right: Controls & View Pills */}
          <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap sm:flex-nowrap">
            {/* Show Flow Button (with subtle shimmer) */}
            <button
              type="button"
              onClick={() => {
                setActiveTab("flow");
                setIsRunning(false);
              }}
              className={`relative overflow-hidden inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-semibold font-['Josefin_Sans',sans-serif] transition-all cursor-pointer ${
                activeTab === "flow"
                  ? "bg-gradient-to-r from-[#0096C7] to-[#00B4D8] text-white shadow-[0_0_18px_rgba(0,180,216,0.6)] border border-cyan-300/60"
                  : "bg-[#0A1628]/80 text-[#8EA3B7] hover:text-white border border-[#1E3A5F]"
              }`}
            >
              {activeTab === "flow" && (
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer pointer-events-none" />
              )}
              <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="9" y1="6" x2="21" y2="6" />
                <line x1="9" y1="12" x2="21" y2="12" />
                <line x1="9" y1="18" x2="21" y2="18" />
                <circle cx="4" cy="6" r="1.5" fill="currentColor" />
                <circle cx="4" cy="12" r="1.5" fill="currentColor" />
                <circle cx="4" cy="18" r="1.5" fill="currentColor" />
              </svg>
              <span>Show Flow</span>
            </button>

            {/* Sync Button (with spin animation) */}
            <button
              type="button"
              onClick={handleSyncClick}
              className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#0A1628]/80 hover:bg-[#10243E] border border-[#1E3A5F] hover:border-cyan-500/50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-medium text-[#8EA3B7] hover:text-white transition-all cursor-pointer font-['Josefin_Sans',sans-serif]"
            >
              <svg
                className={`w-3.5 h-3.5 text-[#00D2FF] transition-transform duration-700 ${isSyncing ? "animate-spin" : ""}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
              </svg>
              <span>{isSyncing ? "Syncing..." : "Sync"}</span>
            </button>

            {/* Run of Show Button (Interactive live simulator) */}
            <button
              type="button"
              onClick={handleRunToggle}
              className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-medium font-['Josefin_Sans',sans-serif] transition-all cursor-pointer ${
                isRunning
                  ? "bg-[#0E2A4D] text-cyan-300 border border-cyan-400 shadow-[0_0_14px_rgba(0,210,255,0.4)]"
                  : "bg-[#0A1628]/80 text-[#8EA3B7] hover:text-white border border-[#1E3A5F]"
              }`}
            >
              <svg className={`w-3.5 h-3.5 ${isRunning ? "text-cyan-300 animate-pulse" : "text-[#00D2FF]"}`} viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              <span>{isRunning ? "Running..." : "Run of Show"}</span>
            </button>

            {/* Main Show Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowDropdown(!showDropdown)}
                className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#0A1628]/80 hover:bg-[#10243E] border border-[#1E3A5F] hover:border-cyan-500/50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-medium text-white transition-all cursor-pointer font-['Josefin_Sans',sans-serif]"
              >
                <span>{activeShow}</span>
                <svg className="w-3 h-3 text-[#8EA3B7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {showDropdown && (
                <div className="absolute right-0 mt-2 w-44 bg-[#0B1728] border border-[#1E3A5F] rounded-xl shadow-2xl py-1 z-50 text-xs font-['Josefin_Sans',sans-serif]">
                  {["Main Show", "Breakout Rooms", "General Session", "Rehearsal"].map((show) => (
                    <button
                      key={show}
                      type="button"
                      onClick={() => {
                        setActiveShow(show);
                        setShowDropdown(false);
                      }}
                      className={`w-full text-left px-3.5 py-2 hover:bg-[#142B4A] transition-colors ${
                        activeShow === show ? "text-cyan-400 font-bold" : "text-slate-300"
                      }`}
                    >
                      {show}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ================= 2. TIMELINE MASTER MATRIX (NO SCROLLBAR) ================= */}
        {/* Fully responsive layout with NO scrollbar */}
        <div className="w-full [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <div className="w-full flex gap-1.5 sm:gap-2.5">
            {/* ---------- COLUMN A: LEFT TRACK INFO HEADERS ---------- */}
            <div className="w-[125px] sm:w-[145px] xl:w-[155px] shrink-0 space-y-2 sm:space-y-2.5">
              {/* Clock Square Button */}
              <div className="h-10 sm:h-11 flex items-center">
                <div className="w-10 sm:w-11 h-10 sm:h-11 rounded-xl bg-[#091526] border border-[#1E3A5F] flex items-center justify-center text-white shadow-xs">
                  <svg className="w-4 sm:w-5 h-4 sm:h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
              </div>

              {/* Track 1: Main Stage LED */}
              <div className="h-12 sm:h-14 bg-[#091526]/90 border border-[#162740] rounded-xl p-2 sm:p-2.5 flex items-center gap-2 sm:gap-2.5 shadow-sm hover:border-[#00D2FF]/40 transition-colors">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-[#00D2FF] to-[#0077B6] flex items-center justify-center text-white shrink-0 shadow-[0_0_10px_rgba(0,210,255,0.4)]">
                  <svg className="w-3.5 sm:w-4 h-3.5 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="text-white font-bold text-[11px] sm:text-xs truncate font-['Josefin_Sans',sans-serif]">
                    Main Stage LED
                  </div>
                  <div className="text-[#8EA3B7] text-[9px] sm:text-[10px] font-mono leading-none mt-0.5">
                    1920 × 1080
                  </div>
                </div>
              </div>

              {/* Track 2: Breakout Decks */}
              <div className="h-12 sm:h-14 bg-[#091526]/90 border border-[#162740] rounded-xl p-2 sm:p-2.5 flex items-center gap-2 sm:gap-2.5 shadow-sm hover:border-[#6366F1]/40 transition-colors">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-[#6366F1] to-[#4338CA] flex items-center justify-center text-white shrink-0 shadow-[0_0_10px_rgba(99,102,241,0.4)]">
                  <svg className="w-3.5 sm:w-4 h-3.5 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="15" rx="2" />
                    <polyline points="7 20 12 16 17 20" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="text-white font-bold text-[11px] sm:text-xs truncate font-['Josefin_Sans',sans-serif]">
                    Breakout Decks
                  </div>
                  <div className="text-[#8EA3B7] text-[9px] sm:text-[10px] leading-none mt-0.5 truncate">
                    Multiple Rooms
                  </div>
                </div>
              </div>

              {/* Track 3: Digital Scenic */}
              <div className="h-12 sm:h-14 bg-[#091526]/90 border border-[#162740] rounded-xl p-2 sm:p-2.5 flex items-center gap-2 sm:gap-2.5 shadow-sm hover:border-[#06B6D4]/40 transition-colors">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-[#06B6D4] to-[#0D9488] flex items-center justify-center text-white shrink-0 shadow-[0_0_10px_rgba(6,182,212,0.4)]">
                  <svg className="w-3.5 sm:w-4 h-3.5 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="23 7 16 12 23 17 23 7" />
                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="text-white font-bold text-[11px] sm:text-xs truncate font-['Josefin_Sans',sans-serif]">
                    Digital Scenic
                  </div>
                  <div className="text-[#8EA3B7] text-[9px] sm:text-[10px] leading-none mt-0.5 truncate">
                    Background &amp; IMAG
                  </div>
                </div>
              </div>

              {/* Track 4: Asset QC & Sync */}
              <div className="h-12 sm:h-14 bg-[#091526]/90 border border-[#162740] rounded-xl p-2 sm:p-2.5 flex items-center gap-2 sm:gap-2.5 shadow-sm hover:border-[#10B981]/40 transition-colors">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-[#10B981] to-[#059669] flex items-center justify-center text-white shrink-0 shadow-[0_0_10px_rgba(16,185,129,0.4)]">
                  <svg className="w-3.5 sm:w-4 h-3.5 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                    <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                    <line x1="6" y1="6" x2="6.01" y2="6" strokeWidth="3" />
                    <line x1="6" y1="18" x2="6.01" y2="18" strokeWidth="3" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="text-white font-bold text-[11px] sm:text-xs truncate font-['Josefin_Sans',sans-serif]">
                    Asset QC &amp; Sync
                  </div>
                  <div className="text-[#8EA3B7] text-[9px] sm:text-[10px] leading-none mt-0.5 truncate">
                    Media Server
                  </div>
                </div>
              </div>
            </div>

            {/* ---------- COLUMN B: FLUID 7-COLUMN TIMELINE MATRIX ---------- */}
            <div className="flex-1 min-w-0 relative">
              {/* Top Time Labels Bar (7 Columns) */}
              <div className="h-10 sm:h-11 bg-[#091526]/85 border border-[#162740] rounded-xl grid grid-cols-7 relative items-center mb-2 sm:mb-2.5 shadow-xs px-1">
                {timeMarkers.map((marker) => (
                  <button
                    key={`${marker.time}-${marker.period}`}
                    type="button"
                    onClick={() => handleTimeClick(`${marker.time} ${marker.period}`, marker.pct)}
                    className="text-center font-['Josefin_Sans',sans-serif] hover:text-white transition-colors cursor-pointer group py-0.5"
                  >
                    <div className="text-[10px] sm:text-[11px] font-bold text-[#8EA3B7] group-hover:text-cyan-300 leading-tight">
                      {marker.time}
                    </div>
                    <div className="text-[8px] sm:text-[9px] text-[#556980] group-hover:text-cyan-400/80 uppercase font-semibold leading-none">
                      {marker.period}
                    </div>
                  </button>
                ))}

                {/* 3:15 PM Playhead Badge & Cyan Dot */}
                <div
                  className="absolute top-0 bottom-0 pointer-events-none transition-all duration-300 z-30"
                  style={{ left: `${playheadPct}%` }}
                >
                  {/* Badge atop the bar */}
                  <div className="absolute -top-3.5 -translate-x-1/2 bg-[#02182B] border border-[#00C2FF] text-white text-[9px] sm:text-[10px] font-bold px-2 sm:px-2.5 py-0.5 rounded-full shadow-[0_0_14px_rgba(0,194,255,0.7)] flex items-center gap-1 font-['Josefin_Sans',sans-serif] whitespace-nowrap">
                    <span>{activeTimeText}</span>
                  </div>

                  {/* Glowing neon cyan dot right under the badge */}
                  <div className="absolute top-[37px] -translate-x-1/2 w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#00F0FF] shadow-[0_0_10px_#00F0FF,0_0_20px_#00C2FF] animate-pulse" />
                </div>
              </div>

              {/* Vertical Dotted Column Guidelines (Subtle background grid lines) */}
              <div className="absolute top-[44px] sm:top-[48px] bottom-0 inset-x-0 grid grid-cols-7 pointer-events-none z-0 px-1">
                {Array.from({ length: 7 }).map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-full ${idx < 6 ? "border-r border-dashed border-[#1E3A5F]/40" : ""}`}
                  />
                ))}
              </div>

              {/* Dynamic Radar Sweep Scanner Beam (Periodic broadcast scan) */}
              <div
                className="absolute top-[44px] sm:top-[48px] bottom-0 w-24 bg-gradient-to-r from-transparent via-[#00D2FF]/10 to-transparent pointer-events-none z-10 animate-radar-sweep"
                aria-hidden="true"
              />

              {/* Continuous Vertical Laser Beam (animates through all 4 tracks) */}
              <div
                className="absolute top-[44px] sm:top-[48px] bottom-0 w-[2px] bg-[#00F0FF] shadow-[0_0_10px_#00F0FF,0_0_20px_rgba(0,240,255,0.8)] pointer-events-none z-20 transition-all duration-300 animate-laser-pulse"
                style={{ left: `${playheadPct}%` }}
                aria-hidden="true"
              />

              {/* 4 Track Grids (Each exactly 7 columns) */}
              <div className="space-y-2 sm:space-y-2.5 relative z-10">
                {/* ================= TRACK 1: Main Stage LED ================= */}
                <div className="grid grid-cols-7 gap-1 sm:gap-1.5 xl:gap-2 h-12 sm:h-14">
                  {/* Col 1: Walk-in (7:00 – 8:00) */}
                  <div
                    onClick={() =>
                      setActiveCueDetail({
                        title: "Walk-in",
                        time: "7:00 – 8:00",
                        room: "Main Stage LED",
                        specs: "1920x1080 • ProRes 422 • Loop Feed",
                      })
                    }
                    className="col-span-1 bg-gradient-to-r from-[#0066FF] to-[#0052D4] border border-blue-400/30 rounded-lg sm:rounded-xl px-1.5 sm:px-2 py-1 flex items-center gap-1 sm:gap-1.5 shadow-md hover:-translate-y-0.5 hover:scale-[1.02] hover:brightness-110 transition-all cursor-pointer overflow-hidden group"
                  >
                    <div className="shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/15 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                    <div className="min-w-0 leading-tight">
                      <div className="text-white font-bold text-[10px] sm:text-xs truncate font-['Josefin_Sans',sans-serif]">
                        Walk-in
                      </div>
                      <div className="text-blue-100/80 text-[8px] sm:text-[9px] truncate font-mono leading-none mt-0.5">
                        7:00 – 8:00
                      </div>
                    </div>
                  </div>

                  {/* Col 2-3: Opening (9:00 – 10:30, spans 2 columns) */}
                  <div
                    onClick={() =>
                      setActiveCueDetail({
                        title: "Opening Film",
                        time: "9:00 – 10:30",
                        room: "Main Stage LED",
                        specs: "1920x1080 • Stereo Master • 5.1 Surround",
                      })
                    }
                    className="col-span-2 bg-gradient-to-r from-[#FF007A] to-[#E0005E] border border-pink-400/30 rounded-lg sm:rounded-xl px-2 sm:px-2.5 py-1 flex items-center gap-1.5 sm:gap-2 shadow-md hover:-translate-y-0.5 hover:scale-[1.02] hover:brightness-110 transition-all cursor-pointer overflow-hidden group"
                  >
                    <div className="shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/15 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                        <circle cx="12" cy="12" r="4" />
                      </svg>
                    </div>
                    <div className="min-w-0 leading-tight">
                      <div className="text-white font-bold text-[10px] sm:text-xs truncate font-['Josefin_Sans',sans-serif]">
                        Opening
                      </div>
                      <div className="text-pink-100/80 text-[8px] sm:text-[9px] truncate font-mono leading-none mt-0.5">
                        9:00 – 10:30
                      </div>
                    </div>
                  </div>

                  {/* Col 4: Empty Slot */}
                  <div className="col-span-1 bg-[#081322]/50 border border-[#142338]/60 rounded-lg sm:rounded-xl hover:border-[#1E3A5F] transition-colors" />

                  {/* Col 5: Speaker (1:00 – 2:30) */}
                  <div
                    onClick={() =>
                      setActiveCueDetail({
                        title: "Keynote Speaker",
                        time: "1:00 – 2:30",
                        room: "Main Stage LED",
                        specs: "1920x1080 • Keynote Motion • IMAG PiP",
                      })
                    }
                    className="col-span-1 bg-gradient-to-r from-[#0099FF] to-[#00C2FF] border border-cyan-400/30 rounded-lg sm:rounded-xl px-1.5 sm:px-2 py-1 flex items-center gap-1 sm:gap-1.5 shadow-md hover:-translate-y-0.5 hover:scale-[1.02] hover:brightness-110 transition-all cursor-pointer overflow-hidden group"
                  >
                    <div className="shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/15 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                        <line x1="12" y1="19" x2="12" y2="23" />
                        <line x1="8" y1="23" x2="16" y2="23" />
                      </svg>
                    </div>
                    <div className="min-w-0 leading-tight">
                      <div className="text-white font-bold text-[10px] sm:text-xs truncate font-['Josefin_Sans',sans-serif]">
                        Speaker
                      </div>
                      <div className="text-blue-100/80 text-[8px] sm:text-[9px] truncate font-mono leading-none mt-0.5">
                        1:00 – 2:30
                      </div>
                    </div>
                  </div>

                  {/* Col 6-7: Awards (3:00 – 4:30, spans 2 columns) */}
                  <div
                    onClick={() =>
                      setActiveCueDetail({
                        title: "Annual Awards Reel",
                        time: "3:00 – 4:30",
                        room: "Main Stage LED",
                        specs: "1920x1080 • Alpha Stinger • Live Winner Cues",
                      })
                    }
                    className="col-span-2 bg-gradient-to-r from-[#7B2CBF] to-[#9D4EDD] border border-purple-400/30 rounded-lg sm:rounded-xl px-2 sm:px-2.5 py-1 flex items-center gap-1.5 sm:gap-2 shadow-md hover:-translate-y-0.5 hover:scale-[1.02] hover:brightness-110 transition-all cursor-pointer overflow-hidden group"
                  >
                    <div className="shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/15 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                        <path d="M4 22h16" />
                        <path d="M10 14.66V17c0 .55-.45 1-1 1H7v4h10v-4h-2c-.55 0-1-.45-1-1v-2.34" />
                        <path d="M6 4h12v7a6 6 0 0 1-12 0V4z" />
                      </svg>
                    </div>
                    <div className="min-w-0 leading-tight">
                      <div className="text-white font-bold text-[10px] sm:text-xs truncate font-['Josefin_Sans',sans-serif]">
                        Awards
                      </div>
                      <div className="text-purple-100/80 text-[8px] sm:text-[9px] truncate font-mono leading-none mt-0.5">
                        3:00 – 4:30
                      </div>
                    </div>
                  </div>
                </div>

                {/* ================= TRACK 2: Breakout Decks ================= */}
                <div className="grid grid-cols-7 gap-1 sm:gap-1.5 xl:gap-2 h-12 sm:h-14">
                  {/* Col 1: Empty Slot */}
                  <div className="col-span-1 bg-[#081322]/50 border border-[#142338]/60 rounded-lg sm:rounded-xl hover:border-[#1E3A5F] transition-colors" />

                  {/* Col 2: Empty Slot */}
                  <div className="col-span-1 bg-[#081322]/50 border border-[#142338]/60 rounded-lg sm:rounded-xl hover:border-[#1E3A5F] transition-colors" />

                  {/* Col 3: Empty Slot */}
                  <div className="col-span-1 bg-[#081322]/50 border border-[#142338]/60 rounded-lg sm:rounded-xl hover:border-[#1E3A5F] transition-colors" />

                  {/* Col 4: Session 1 (11:00 – 12:30) */}
                  <div
                    onClick={() =>
                      setActiveCueDetail({
                        title: "Breakout Session 1",
                        time: "11:00 – 12:30",
                        room: "Breakout Decks",
                        specs: "4K Split • Multi-Room Sync • Presenter View",
                      })
                    }
                    className="col-span-1 bg-gradient-to-r from-[#00DF89] to-[#00B47A] border border-emerald-400/30 rounded-lg sm:rounded-xl px-1.5 sm:px-2 py-1 flex items-center gap-1 sm:gap-1.5 shadow-md hover:-translate-y-0.5 hover:scale-[1.02] hover:brightness-110 transition-all cursor-pointer overflow-hidden group"
                  >
                    <div className="shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/15 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                        <line x1="9" y1="12" x2="15" y2="12" />
                        <line x1="9" y1="16" x2="13" y2="16" />
                      </svg>
                    </div>
                    <div className="min-w-0 leading-tight">
                      <div className="text-white font-bold text-[10px] sm:text-xs truncate font-['Josefin_Sans',sans-serif]">
                        Session 1
                      </div>
                      <div className="text-emerald-100/90 text-[8px] sm:text-[9px] truncate font-mono leading-none mt-0.5">
                        11:00 – 12:30
                      </div>
                    </div>
                  </div>

                  {/* Col 5: Panel Discussion (1:00 – 2:30) */}
                  <div
                    onClick={() =>
                      setActiveCueDetail({
                        title: "Panel Discussion",
                        time: "1:00 – 2:30",
                        room: "Breakout Decks",
                        specs: "Quad Lower Thirds • Dynamic Name Keys",
                      })
                    }
                    className="col-span-1 bg-gradient-to-r from-[#FF7A00] to-[#FF5400] border border-orange-400/30 rounded-lg sm:rounded-xl px-1.5 sm:px-2 py-1 flex items-center gap-1 sm:gap-1.5 shadow-md hover:-translate-y-0.5 hover:scale-[1.02] hover:brightness-110 transition-all cursor-pointer overflow-hidden group"
                  >
                    <div className="shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/15 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </div>
                    <div className="min-w-0 leading-tight">
                      <div className="text-white font-bold text-[10px] sm:text-xs truncate font-['Josefin_Sans',sans-serif]">
                        Panel Discussion
                      </div>
                      <div className="text-orange-100/90 text-[8px] sm:text-[9px] truncate font-mono leading-none mt-0.5">
                        1:00 – 2:30
                      </div>
                    </div>
                  </div>

                  {/* Col 6-7: Q&A Session (3:00 – 4:00, spans 2 columns) */}
                  <div
                    onClick={() =>
                      setActiveCueDetail({
                        title: "Audience Q&A Session",
                        time: "3:00 – 4:00",
                        room: "Breakout Decks",
                        specs: "Live Slido Integration • Audience Mic Routing",
                      })
                    }
                    className="col-span-2 bg-gradient-to-r from-[#0066FF] to-[#0052D4] border border-blue-400/30 rounded-lg sm:rounded-xl px-2 sm:px-2.5 py-1 flex items-center gap-1.5 sm:gap-2 shadow-md hover:-translate-y-0.5 hover:scale-[1.02] hover:brightness-110 transition-all cursor-pointer overflow-hidden group"
                  >
                    <div className="shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/15 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        <circle cx="9" cy="10" r="1" fill="currentColor" />
                        <circle cx="12" cy="10" r="1" fill="currentColor" />
                        <circle cx="15" cy="10" r="1" fill="currentColor" />
                      </svg>
                    </div>
                    <div className="min-w-0 leading-tight">
                      <div className="text-white font-bold text-[10px] sm:text-xs truncate font-['Josefin_Sans',sans-serif]">
                        Q&amp;A Session
                      </div>
                      <div className="text-blue-100/80 text-[8px] sm:text-[9px] truncate font-mono leading-none mt-0.5">
                        3:00 – 4:00
                      </div>
                    </div>
                  </div>
                </div>

                {/* ================= TRACK 3: Digital Scenic ================= */}
                <div className="grid grid-cols-7 gap-1 sm:gap-1.5 xl:gap-2 h-12 sm:h-14">
                  {/* Col 1: Empty Slot */}
                  <div className="col-span-1 bg-[#081322]/50 border border-[#142338]/60 rounded-lg sm:rounded-xl hover:border-[#1E3A5F] transition-colors" />

                  {/* Col 2: Sponsor Video (8:00 – 9:00) */}
                  <div
                    onClick={() =>
                      setActiveCueDetail({
                        title: "Sponsor Highlights",
                        time: "8:00 – 9:00",
                        room: "Digital Scenic",
                        specs: "Full Scenic Screen Fill • 3840x1080 Ultra-Wide",
                      })
                    }
                    className="col-span-1 bg-gradient-to-r from-[#6930C3] to-[#5390D9] border border-indigo-400/30 rounded-lg sm:rounded-xl px-1.5 sm:px-2 py-1 flex items-center gap-1 sm:gap-1.5 shadow-md hover:-translate-y-0.5 hover:scale-[1.02] hover:brightness-110 transition-all cursor-pointer overflow-hidden group"
                  >
                    <div className="shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/15 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
                        <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" />
                      </svg>
                    </div>
                    <div className="min-w-0 leading-tight">
                      <div className="text-white font-bold text-[10px] sm:text-xs truncate font-['Josefin_Sans',sans-serif]">
                        Sponsor Video
                      </div>
                      <div className="text-indigo-100/80 text-[8px] sm:text-[9px] truncate font-mono leading-none mt-0.5">
                        8:00 – 9:00
                      </div>
                    </div>
                  </div>

                  {/* Col 3: Countdown (9:00 – 10:00) */}
                  <div
                    onClick={() =>
                      setActiveCueDetail({
                        title: "Opening Countdown",
                        time: "9:00 – 10:00",
                        room: "Digital Scenic",
                        specs: "Audio Timecode Synced • Ambient LED Pulse",
                      })
                    }
                    className="col-span-1 bg-gradient-to-r from-[#0096C7] to-[#0077B6] border border-cyan-400/30 rounded-lg sm:rounded-xl px-1.5 sm:px-2 py-1 flex items-center gap-1 sm:gap-1.5 shadow-md hover:-translate-y-0.5 hover:scale-[1.02] hover:brightness-110 transition-all cursor-pointer overflow-hidden group"
                  >
                    <div className="shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/15 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="14" r="8" />
                        <line x1="12" y1="2" x2="12" y2="6" />
                        <line x1="12" y1="14" x2="15" y2="11" />
                      </svg>
                    </div>
                    <div className="min-w-0 leading-tight">
                      <div className="text-white font-bold text-[10px] sm:text-xs truncate font-['Josefin_Sans',sans-serif]">
                        Countdown
                      </div>
                      <div className="text-cyan-100/80 text-[8px] sm:text-[9px] truncate font-mono leading-none mt-0.5">
                        9:00 – 10:00
                      </div>
                    </div>
                  </div>

                  {/* Col 4: Break Graphic (11:00 – 12:00) */}
                  <div
                    onClick={() =>
                      setActiveCueDetail({
                        title: "Intermission Scenic Loop",
                        time: "11:00 – 12:00",
                        room: "Digital Scenic",
                        specs: "Motion Brand Canvas • Schedule Carousel",
                      })
                    }
                    className="col-span-1 bg-gradient-to-r from-[#F72585] to-[#B5179E] border border-pink-400/30 rounded-lg sm:rounded-xl px-1.5 sm:px-2 py-1 flex items-center gap-1 sm:gap-1.5 shadow-md hover:-translate-y-0.5 hover:scale-[1.02] hover:brightness-110 transition-all cursor-pointer overflow-hidden group"
                  >
                    <div className="shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/15 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <polyline points="21 15 16 10 5 21" />
                      </svg>
                    </div>
                    <div className="min-w-0 leading-tight">
                      <div className="text-white font-bold text-[10px] sm:text-xs truncate font-['Josefin_Sans',sans-serif]">
                        Break Graphic
                      </div>
                      <div className="text-pink-100/80 text-[8px] sm:text-[9px] truncate font-mono leading-none mt-0.5">
                        11:00 – 12:00
                      </div>
                    </div>
                  </div>

                  {/* Col 5: Empty Slot */}
                  <div className="col-span-1 bg-[#081322]/50 border border-[#142338]/60 rounded-lg sm:rounded-xl hover:border-[#1E3A5F] transition-colors" />

                  {/* Col 6-7: Empty Slot (spans 2 columns) */}
                  <div className="col-span-2 bg-[#081322]/50 border border-[#142338]/60 rounded-lg sm:rounded-xl hover:border-[#1E3A5F] transition-colors" />
                </div>

                {/* ================= TRACK 4: Asset QC & Sync ================= */}
                <div className="grid grid-cols-7 gap-1 sm:gap-1.5 xl:gap-2 h-12 sm:h-14">
                  {/* Col 1: Intake Check (7:00 – 8:00) */}
                  <div
                    onClick={() =>
                      setActiveCueDetail({
                        title: "Media Ingest & QC Check",
                        time: "7:00 – 8:00",
                        room: "Asset QC & Sync",
                        specs: "Codec Validation • Color Space Verification",
                      })
                    }
                    className="col-span-1 bg-gradient-to-r from-[#00DF89] to-[#00B47A] border border-emerald-400/30 rounded-lg sm:rounded-xl px-1.5 sm:px-2 py-1 flex items-center gap-1 sm:gap-1.5 shadow-md hover:-translate-y-0.5 hover:scale-[1.02] hover:brightness-110 transition-all cursor-pointer overflow-hidden group"
                  >
                    <div className="shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/15 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div className="min-w-0 leading-tight">
                      <div className="text-white font-bold text-[10px] sm:text-xs truncate font-['Josefin_Sans',sans-serif]">
                        Intake Check
                      </div>
                      <div className="text-emerald-100/90 text-[8px] sm:text-[9px] truncate font-mono leading-none mt-0.5">
                        7:00 – 8:00
                      </div>
                    </div>
                  </div>

                  {/* Col 2: Empty Slot */}
                  <div className="col-span-1 bg-[#081322]/50 border border-[#142338]/60 rounded-lg sm:rounded-xl hover:border-[#1E3A5F] transition-colors" />

                  {/* Col 3: Empty Slot */}
                  <div className="col-span-1 bg-[#081322]/50 border border-[#142338]/60 rounded-lg sm:rounded-xl hover:border-[#1E3A5F] transition-colors" />

                  {/* Col 4-5: Empty Slot (spans 2 columns) */}
                  <div className="col-span-2 bg-[#081322]/50 border border-[#142338]/60 rounded-lg sm:rounded-xl hover:border-[#1E3A5F] transition-colors" />

                  {/* Col 6: Cue Sync (3:00 – 4:00) */}
                  <div
                    onClick={() =>
                      setActiveCueDetail({
                        title: "Playback Cue Sync",
                        time: "3:00 – 4:00",
                        room: "Asset QC & Sync",
                        specs: "Disguise / Watchout Network • Hot Backup Online",
                      })
                    }
                    className="col-span-1 bg-gradient-to-r from-[#00C2FF] to-[#0096C7] border border-cyan-400/30 rounded-lg sm:rounded-xl px-1.5 sm:px-2 py-1 flex items-center gap-1 sm:gap-1.5 shadow-md hover:-translate-y-0.5 hover:scale-[1.02] hover:brightness-110 transition-all cursor-pointer overflow-hidden group"
                  >
                    <div className="shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/15 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
                      </svg>
                    </div>
                    <div className="min-w-0 leading-tight">
                      <div className="text-white font-bold text-[10px] sm:text-xs truncate font-['Josefin_Sans',sans-serif]">
                        Cue Sync
                      </div>
                      <div className="text-cyan-100/80 text-[8px] sm:text-[9px] truncate font-mono leading-none mt-0.5">
                        3:00 – 4:00
                      </div>
                    </div>
                  </div>

                  {/* Col 7: Show Deliver (4:00 – 5:00) */}
                  <div
                    onClick={() =>
                      setActiveCueDetail({
                        title: "Final Show Delivery",
                        time: "4:00 – 5:00",
                        room: "Asset QC & Sync",
                        specs: "Archive Cloud Sync • Redundant Master Backup",
                      })
                    }
                    className="col-span-1 bg-gradient-to-r from-[#FF007A] to-[#E0005E] border border-pink-400/30 rounded-lg sm:rounded-xl px-1.5 sm:px-2 py-1 flex items-center gap-1 sm:gap-1.5 shadow-md hover:-translate-y-0.5 hover:scale-[1.02] hover:brightness-110 transition-all cursor-pointer overflow-hidden group"
                  >
                    <div className="shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/15 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="16 16 12 12 8 16" />
                        <line x1="12" y1="12" x2="12" y2="21" />
                        <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
                      </svg>
                    </div>
                    <div className="min-w-0 leading-tight">
                      <div className="text-white font-bold text-[10px] sm:text-xs truncate font-['Josefin_Sans',sans-serif]">
                        Show Deliver
                      </div>
                      <div className="text-pink-100/80 text-[8px] sm:text-[9px] truncate font-mono leading-none mt-0.5">
                        4:00 – 5:00
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ---------- COLUMN C: RIGHT PLUS BUTTONS ---------- */}
            <div className="w-7 sm:w-9 xl:w-10 shrink-0 space-y-2 sm:space-y-2.5">
              {/* Top row alignment spacer */}
              <div className="h-10 sm:h-11" />

              {/* Plus Button 1 */}
              <button
                type="button"
                className="w-full h-12 sm:h-14 rounded-lg sm:rounded-xl bg-[#091526]/80 border border-[#162740] flex items-center justify-center text-[#556980] hover:text-white hover:border-[#00D2FF]/50 hover:bg-[#0c1e36] transition-all cursor-pointer shadow-xs"
                aria-label="Add cue to Main Stage LED"
              >
                <svg className="w-3.5 sm:w-4 h-3.5 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </button>

              {/* Plus Button 2 */}
              <button
                type="button"
                className="w-full h-12 sm:h-14 rounded-lg sm:rounded-xl bg-[#091526]/80 border border-[#162740] flex items-center justify-center text-[#556980] hover:text-white hover:border-[#00D2FF]/50 hover:bg-[#0c1e36] transition-all cursor-pointer shadow-xs"
                aria-label="Add cue to Breakout Decks"
              >
                <svg className="w-3.5 sm:w-4 h-3.5 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </button>

              {/* Plus Button 3 */}
              <button
                type="button"
                className="w-full h-12 sm:h-14 rounded-lg sm:rounded-xl bg-[#091526]/80 border border-[#162740] flex items-center justify-center text-[#556980] hover:text-white hover:border-[#00D2FF]/50 hover:bg-[#0c1e36] transition-all cursor-pointer shadow-xs"
                aria-label="Add cue to Digital Scenic"
              >
                <svg className="w-3.5 sm:w-4 h-3.5 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </button>

              {/* Plus Button 4 */}
              <button
                type="button"
                className="w-full h-12 sm:h-14 rounded-lg sm:rounded-xl bg-[#091526]/80 border border-[#162740] flex items-center justify-center text-[#556980] hover:text-white hover:border-[#00D2FF]/50 hover:bg-[#0c1e36] transition-all cursor-pointer shadow-xs"
                aria-label="Add cue to Asset QC & Sync"
              >
                <svg className="w-3.5 sm:w-4 h-3.5 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* ================= 3. ACTIVE CUE DETAIL TOAST (Interactive feedback) ================= */}
        {activeCueDetail && (
          <div className="mt-2.5 px-3 py-2 rounded-xl bg-[#08182E]/90 border border-cyan-400/40 flex items-center justify-between text-xs animate-in fade-in slide-in-from-bottom-2 duration-200">
            <div className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-ping" />
              <span className="font-bold text-white truncate">{activeCueDetail.title}</span>
              <span className="text-cyan-300 font-mono">({activeCueDetail.time})</span>
              <span className="hidden sm:inline text-slate-400">• {activeCueDetail.room}</span>
              <span className="hidden md:inline text-slate-500">• {activeCueDetail.specs}</span>
            </div>
            <button
              type="button"
              onClick={() => setActiveCueDetail(null)}
              className="text-slate-400 hover:text-white ml-2 shrink-0 cursor-pointer"
            >
              ✕
            </button>
          </div>
        )}

        {/* ================= 4. FOOTER STATUS & TEAM BAR ================= */}
        <div className="mt-3 sm:mt-3.5 pt-0.5 relative z-10">
          <div className="bg-[#091526]/90 border border-[#162740] rounded-2xl p-2.5 sm:p-3.5 flex flex-wrap items-center justify-between gap-3 sm:gap-4 shadow-sm">
            {/* Left: Playback operator synced with multi-layer sonar glow */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="relative w-8 h-8 rounded-full bg-[#032B1A] border border-[#055E38] flex items-center justify-center shrink-0">
                {/* Expanding sonar ring */}
                <span className="absolute inset-0 rounded-full border border-[#00FF7F]/60 animate-sonar pointer-events-none" />
                {/* Core glowing dot */}
                <span className="w-3.5 h-3.5 rounded-full bg-[#00FF7F] shadow-[0_0_14px_#00FF7F]" />
              </div>
              <div>
                <div className="text-white font-bold text-xs sm:text-sm font-['Josefin_Sans',sans-serif] leading-tight flex items-center gap-1.5">
                  <span>Playback operator synced</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00FF7F] inline-block animate-pulse" />
                </div>
                <div className="text-[#8EA3B7] text-[10px] sm:text-[11px] font-['IBM_Plex_Sans',sans-serif]">
                  Assets mapped to screen specs &amp; run of show
                </div>
              </div>
            </div>

            {/* Right: Team Avatars + Separator + View Full Schedule CTA */}
            <div className="flex items-center gap-2 sm:gap-3 ml-auto">
              {/* 3 Team Avatars + '+' icon */}
              <div className="flex items-center -space-x-2">
                <div
                  className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full ring-2 ring-[#0B1526] overflow-hidden bg-slate-800 shrink-0 hover:scale-110 transition-transform cursor-pointer"
                  title="Lead Video Engineer"
                >
                  <Image
                    src="/images/home/ace-founder/Adam Zavodny.png"
                    alt="Operator"
                    fill
                    className="object-cover object-top"
                  />
                </div>

                <div
                  className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full ring-2 ring-[#0B1526] overflow-hidden bg-slate-800 shrink-0 hover:scale-110 transition-transform cursor-pointer"
                  title="Screen Content Director"
                >
                  <Image
                    src="/images/home/ace-founder/elena.png"
                    alt="Director"
                    fill
                    className="object-cover object-top"
                  />
                </div>

                <div
                  className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full ring-2 ring-[#0B1526] overflow-hidden bg-slate-800 shrink-0 hover:scale-110 transition-transform cursor-pointer"
                  title="Media Server Operator"
                >
                  <Image
                    src="/images/home/ace-founder/marcus.png"
                    alt="Media Server Operator"
                    fill
                    className="object-cover object-top"
                  />
                </div>

                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#0B182B] border border-[#1E3A5F] flex items-center justify-center text-[#8EA3B7] text-xs font-bold shrink-0">
                  +
                </div>
              </div>

              {/* Vertical Separator Line */}
              <div className="w-[1px] h-6 sm:h-7 bg-[#1E3A5F] mx-1" />

              {/* View Full Schedule Button */}
              <Link
                href="https://www.dxg.agency/contact-us"
                className="inline-flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-[#0070F3] to-[#0096C7] hover:from-[#0060df] hover:to-[#0085b5] text-white font-semibold text-xs sm:text-sm px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-[0_0_20px_rgba(0,112,243,0.4)] transition-all transform hover:-translate-y-0.5 font-['Josefin_Sans',sans-serif]"
              >
                <span>View Full Schedule</span>
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
