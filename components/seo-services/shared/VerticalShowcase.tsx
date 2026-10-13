"use client";

import Image from "next/image";
import React, { useState } from "react";

export interface VerticalItem {
  title: string;
  image: string;
  alt: string;
  imageTitle: string;
}

export function getVerticalIcon(idx: number, className = "w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#2CBCED]", title?: string) {
  let type = idx % 5;
  if (title) {
    const lower = title.toLowerCase();
    if (lower.includes("corporate")) type = 0;
    else if (lower.includes("association")) type = 1;
    else if (lower.includes("medical")) type = 2;
    else if (lower.includes("fundrais") || lower.includes("nonprofit")) type = 3;
    else if (lower.includes("education") || lower.includes("higher")) type = 4;
  }

  switch (type) {
    case 0:
      // Corporate Events - Calendar
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      );
    case 1:
      // Association Conferences - Group/Users
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case 2:
      // Medical Meetings - Medical Plus
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M5 12h14" />
        </svg>
      );
    case 3:
      // Fundraising Events - Heart
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      );
    case 4:
    default:
      // Education Programs - Graduation Cap
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      );
  }
}

interface VerticalShowcaseProps {
  items: VerticalItem[];
  defaultIndex?: number;
}

export default function VerticalShowcase({ items, defaultIndex = 0 }: VerticalShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  if (!items || items.length === 0) return null;

  return (
    <div className="relative w-full aspect-[4/3] sm:aspect-[16/8] lg:aspect-[16/7] min-h-[460px] sm:min-h-[480px] lg:min-h-[520px] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#2CBCED]/40 shadow-[0_12px_45px_rgba(0,163,255,0.18)] bg-[#0A0F16]">
      {/* Background Images with smooth crossfade */}
      {items.map((item, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            activeIndex === i ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          <Image
            src={item.image}
            alt={item.alt}
            title={item.imageTitle}
            fill
            priority={i === 0}
            className="object-cover object-center"
            sizes="(max-width: 1280px) 100vw, 1180px"
          />
        </div>
      ))}

      {/* Atmospheric overlays matching showcase design */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#021326] via-[#021326]/60 to-transparent pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 z-10 w-80 h-80 rounded-full bg-[#00A3FF]/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -right-16 z-10 w-80 h-80 rounded-full bg-[#00A3FF]/35 blur-3xl pointer-events-none" />

      {/* Interactive Category Pills along the bottom */}
      <div className="absolute bottom-5 sm:bottom-7 md:bottom-9 left-0 right-0 z-20 px-3 sm:px-6">
        <div className="flex items-center justify-center flex-wrap gap-2.5 sm:gap-3.5 lg:gap-4.5 max-w-full mx-auto">
          {items.map((item, i) => {
            const isActive = activeIndex === i;
            const words = item.title.trim().split(" ");
            const line1 = words[0];
            const line2 = words.slice(1).join(" ");

            return (
              <button
                key={i}
                type="button"
                onClick={() => setActiveIndex(i)}
                className={`group/pill flex items-center gap-2.5 sm:gap-3 px-3.5 sm:px-4.5 py-2 sm:py-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-[#06182B]/85 border-2 border-[#2CBCED] shadow-[0_0_22px_rgba(44,188,237,0.7)] ring-1 ring-[#2CBCED]"
                    : "bg-[#06182B]/60 hover:bg-[#06182B]/85 border border-white/25 hover:border-[#2CBCED]/70"
                }`}
              >
                {/* White circle icon badge */}
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm group-hover/pill:scale-105 transition-transform">
                  {getVerticalIcon(i, "w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#2CBCED]", item.title)}
                </div>
                {/* 2-line title */}
                <div className="flex flex-col text-left leading-[1.15]">
                  <span className="font-['Josefin_Sans',sans-serif] text-xs sm:text-[13.5px] font-semibold text-white whitespace-nowrap">
                    {line1}
                  </span>
                  <span className="font-['Josefin_Sans',sans-serif] text-xs sm:text-[13.5px] font-semibold text-white whitespace-nowrap">
                    {line2}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
