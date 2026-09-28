import React from "react";

export default function ExistingContentV2Section() {
  const items = [
    {
      title: "Screen Format",
      desc: "We check aspect ratio, dimensions, resolution and display requirements for the actual screen environment.",
      icon: (
        <svg
          className="w-8 h-8 stroke-[#2CBCED] fill-none stroke-[1.8] stroke-linecap-round stroke-linejoin-round mb-4"
          viewBox="0 0 24 24"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
    },
    {
      title: "Playback Readiness",
      desc: "We check file type, duration, transitions, cue points and playback needs before show day.",
      icon: (
        <svg
          className="w-8 h-8 stroke-[#2CBCED] fill-none stroke-[1.8] stroke-linecap-round stroke-linejoin-round mb-4"
          viewBox="0 0 24 24"
        >
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
      ),
    },
    {
      title: "Presentation Readiness",
      desc: "We review fonts, layouts, videos, animations and slide consistency for live presentation use.",
      icon: (
        <svg
          className="w-8 h-8 stroke-[#2CBCED] fill-none stroke-[1.8] stroke-linecap-round stroke-linejoin-round mb-4"
          viewBox="0 0 24 24"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
    },
    {
      title: "Brand Consistency",
      desc: "We align videos, presentations, graphics, scenic content and sponsor moments under the approved visual direction.",
      icon: (
        <svg
          className="w-8 h-8 stroke-[#2CBCED] fill-none stroke-[1.8] stroke-linecap-round stroke-linejoin-round mb-4"
          viewBox="0 0 24 24"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
    },
    {
      title: "Show Flow Alignment",
      desc: "We place final content against the run of show so every file has a clear cue and purpose.",
      icon: (
        <svg
          className="w-8 h-8 stroke-[#2CBCED] fill-none stroke-[1.8] stroke-linecap-round stroke-linejoin-round mb-4"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-[clamp(64px,8vw,112px)] bg-[#E9EEF2] text-[#0A0F16]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Head */}
        <div className="max-w-[760px] mb-[clamp(36px,4vw,56px)]">
          <h2 className="relative pt-[18px] text-[clamp(30px,3.6vw,44px)] font-semibold leading-[1.1] tracking-tight mb-3.5 font-['Josefin_Sans',sans-serif] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[44px] before:h-[3px] before:bg-[#2CBCED]">
            Existing Content? We Can Make It Show Ready.
          </h2>
          <p className="text-[clamp(18px,1.5vw,21px)] text-[#5B6B7A] max-w-[60ch] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
            Many event teams already have presentations, videos, brand files, sponsor graphics or agency created assets. DXG can bring those materials into the same production workflow as newly created content.
          </p>
        </div>

        {/* 5 Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              className={`bg-white border border-[#C9D3DC] rounded-md p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_30px_rgba(10,15,22,0.1)] border-t-4 border-t-[#2CBCED] ${
                idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {item.icon}
              <h3 className="text-xl font-semibold mb-2 font-['Josefin_Sans',sans-serif] text-[#0A0F16]">
                {item.title}
              </h3>
              <p className="text-[14.5px] text-[#5B6B7A] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
