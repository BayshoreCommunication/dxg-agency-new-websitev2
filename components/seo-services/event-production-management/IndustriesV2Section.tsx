import React from "react";

export default function IndustriesV2Section() {
  const verticals = [
    {
      title: "Corporate",
      desc: "Sales kickoffs, user conferences, executive programs. Senior speakers, brand standards, tight timing.",
      icon: (
        <svg
          className="w-[36px] h-[36px] stroke-[#2CBCED] fill-none stroke-[1.6] stroke-linecap-round stroke-linejoin-round mb-[18px]"
          viewBox="0 0 24 24"
        >
          <rect x="3" y="4" width="18" height="12" rx="1" />
          <path d="M8 20h8M12 16v4" />
        </svg>
      ),
    },
    {
      title: "Association",
      desc: "General sessions plus concurrent breakouts, committees, volunteers and many vendors on one schedule.",
      icon: (
        <svg
          className="w-[36px] h-[36px] stroke-[#2CBCED] fill-none stroke-[1.6] stroke-linecap-round stroke-linejoin-round mb-[18px]"
          viewBox="0 0 24 24"
        >
          <path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6" />
        </svg>
      ),
    },
    {
      title: "Medical",
      desc: "CME requirements, disclosures, approved content and precise session timing built into production milestones.",
      icon: (
        <svg
          className="w-[36px] h-[36px] stroke-[#2CBCED] fill-none stroke-[1.6] stroke-linecap-round stroke-linejoin-round mb-[18px]"
          viewBox="0 0 24 24"
        >
          <path d="M12 4v16M4 12h16" />
          <circle cx="12" cy="12" r="9" />
        </svg>
      ),
    },
    {
      title: "Nonprofit",
      desc: "Galas and live appeals where lighting, sound, video and transitions carry the pace of the evening.",
      icon: (
        <svg
          className="w-[36px] h-[36px] stroke-[#2CBCED] fill-none stroke-[1.6] stroke-linecap-round stroke-linejoin-round mb-[18px]"
          viewBox="0 0 24 24"
        >
          <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" />
        </svg>
      ),
    },
    {
      title: "Education",
      desc: "Commencements and symposiums on fixed dates with large audiences and long schedules.",
      icon: (
        <svg
          className="w-[36px] h-[36px] stroke-[#2CBCED] fill-none stroke-[1.6] stroke-linecap-round stroke-linejoin-round mb-[18px]"
          viewBox="0 0 24 24"
        >
          <path d="M2 9l10-5 10 5-10 5z" />
          <path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-[clamp(64px,8vw,112px)] bg-[#F3F6F8] text-[#0A0F16]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Head */}
        <div className="max-w-[760px] mb-[clamp(36px,4vw,56px)]">
          <h2 className="relative pt-[18px] text-[clamp(30px,3.6vw,44px)] font-semibold leading-[1.1] tracking-tight mb-3.5 font-['Josefin_Sans',sans-serif] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[44px] before:h-[3px] before:bg-[#2CBCED]">
            Built around your program, not a package
          </h2>
          <p className="text-[clamp(18px,1.5vw,21px)] text-[#5B6B7A] max-w-[60ch] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
            DXG provides event production management for{" "}
            <strong className="text-[#0A0F16]">
              corporate, association, medical, nonprofit and education
            </strong>{" "}
            events. Each has its own format, audience and production pressure
            points.
          </p>
        </div>

        {/* Verticals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[2px] bg-[#1E2A36] border border-[#1E2A36]">
          {verticals.map((v, i) => (
            <div
              key={i}
              className={`bg-[#F3F6F8] hover:bg-white p-7 sm:p-8 transition-colors duration-150 ${
                i === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {v.icon}
              <h3 className="text-xl font-semibold mb-2 font-['Josefin_Sans',sans-serif] text-[#0A0F16]">
                {v.title}
              </h3>
              <p className="text-[14.5px] text-[#5B6B7A] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
