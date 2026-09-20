import React from "react";

export default function EngagementProgramSection() {
  const verticals = [
    {
      title: "Corporate events",
      bullets: [
        "Polls and Q&A sit beside each executive keynote, giving leaders instant audience feedback.",
        "Event apps carry agendas, speaker bios and session materials for sales kickoffs and user conferences.",
        "Live polling measures audience reaction to product announcements and strategy updates.",
        "Brand standards and tight timing stay intact across every interaction.",
      ],
      icon: (
        <svg
          className="w-[36px] h-[36px] stroke-[#2CBCED] fill-none stroke-[1.6] stroke-linecap-round stroke-linejoin-round mb-[18px] group-hover:scale-110 group-hover:stroke-[#4CC9F0] transition-transform duration-300"
          viewBox="0 0 24 24"
        >
          <rect x="3" y="4" width="18" height="12" rx="1" />
          <path d="M8 20h8M12 16v4" />
        </svg>
      ),
    },
    {
      title: "Association meetings",
      bullets: [
        "Event apps guide members across general sessions and concurrent breakouts.",
        "Networking technology connects members, committees and volunteers.",
        "Digital signage directs attendees to the correct room at the correct time.",
        "Digital content delivery keeps session materials available to every member after the event.",
      ],
      icon: (
        <svg
          className="w-[36px] h-[36px] stroke-[#2CBCED] fill-none stroke-[1.6] stroke-linecap-round stroke-linejoin-round mb-[18px] group-hover:scale-110 group-hover:stroke-[#4CC9F0] transition-transform duration-300"
          viewBox="0 0 24 24"
        >
          <path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6" />
        </svg>
      ),
    },
    {
      title: "Medical programs",
      bullets: [
        "Audience response systems fit inside accredited sessions.",
        "Badge scanning records session attendance for CME documentation.",
        "Approved content, disclosures and session timing remain intact.",
      ],
      icon: (
        <svg
          className="w-[36px] h-[36px] stroke-[#2CBCED] fill-none stroke-[1.6] stroke-linecap-round stroke-linejoin-round mb-[18px] group-hover:scale-110 group-hover:stroke-[#4CC9F0] transition-transform duration-300"
          viewBox="0 0 24 24"
        >
          <path d="M12 4v16M4 12h16" />
          <circle cx="12" cy="12" r="9" />
        </svg>
      ),
    },
    {
      title: "Non profit galas",
      bullets: [
        "Digital signage and video screens support each moment of a live appeal.",
        "Social engagement builds momentum toward the ask.",
        "Interactive displays give sponsors visible recognition throughout the evening.",
      ],
      icon: (
        <svg
          className="w-[36px] h-[36px] stroke-[#2CBCED] fill-none stroke-[1.6] stroke-linecap-round stroke-linejoin-round mb-[18px] group-hover:scale-110 group-hover:stroke-[#4CC9F0] transition-transform duration-300"
          viewBox="0 0 24 24"
        >
          <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" />
        </svg>
      ),
    },
    {
      title: "Education events",
      bullets: [
        "Q&A platforms serve large audiences across long schedules.",
        "Digital content delivery sends materials to every attendee after each session.",
        "Check in technology moves crowds through registration on fixed event dates.",
      ],
      icon: (
        <svg
          className="w-[36px] h-[36px] stroke-[#2CBCED] fill-none stroke-[1.6] stroke-linecap-round stroke-linejoin-round mb-[18px] group-hover:scale-110 group-hover:stroke-[#4CC9F0] transition-transform duration-300"
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
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(28px,4vw,60px)] items-center mb-11">
          {/* Head */}
          <div>
            <h2 className="relative pt-[18px] text-[clamp(30px,3.6vw,44px)] font-semibold leading-[1.1] tracking-tight mb-3.5 font-['Josefin_Sans',sans-serif] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[44px] before:h-[3px] before:bg-[#2CBCED]">
              Event Technology Built Around Your Program
            </h2>
            <p className="text-[clamp(18px,1.5vw,21px)] text-[#5B6B7A] max-w-[60ch] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
              We plans attendee engagement technology for corporate, association, medical, non profit and education events. Formats span general sessions, breakout programs and hybrid events, so tools must fit every room. Each audience calls for its own mix, shaped by agenda, speakers and room size.
            </p>
          </div>

          {/* Photo 02 Placeholder */}
          <div
            className="group relative min-h-[340px] bg-repeating-linear-gradient border-1.5 border-dashed border-[rgba(44,188,237,0.55)] text-white flex flex-col justify-end p-6 rounded-md transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2CBCED] hover:shadow-[0_15px_30px_rgba(10,15,22,0.25)]"
            style={{
              background:
                "repeating-linear-gradient(135deg, #0F1822 0 14px, #121C27 14px 28px)",
            }}
          >
            <span className="absolute top-3.5 left-4 font-['Josefin_Sans',sans-serif] font-bold text-xs text-[#0A0F16] bg-[#2CBCED] px-2.5 py-1 rounded-[2px] uppercase tracking-wide group-hover:scale-105 transition-transform duration-200">
              PHOTO 02
            </span>
            <span className="absolute top-3.5 right-4 font-['Josefin_Sans',sans-serif] text-xs text-[#2CBCED]">
              4:3
            </span>
            <b className="font-['Josefin_Sans',sans-serif] text-lg font-semibold mb-1 text-white group-hover:text-[#2CBCED] transition-colors duration-200">
              Event Mobile App & Digital Signage Integration
            </b>
            <p className="text-xs sm:text-[13.5px] text-[#C9D3DC] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
              Attendee scanning badge QR code at interactive digital kiosk while holding customized event app with live agenda and session room directions.
            </p>
          </div>
        </div>

        {/* Verticals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[2px] bg-[#1E2A36] border border-[#1E2A36]">
          {verticals.map((v, i) => (
            <div
              key={i}
              className={`group bg-[#F3F6F8] hover:bg-white p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:z-10 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] relative ${
                i === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {v.icon}
              <h3 className="text-xl font-semibold mb-3 font-['Josefin_Sans',sans-serif] text-[#0A0F16] group-hover:text-[#1A7FA3] transition-colors duration-200">
                {v.title}
              </h3>
              <ul className="space-y-2 text-[13.5px] text-[#5B6B7A] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
                {v.bullets.map((b, bIdx) => (
                  <li key={bIdx} className="relative pl-[14px] before:content-['•'] before:absolute before:left-0 before:text-[#2CBCED]">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
