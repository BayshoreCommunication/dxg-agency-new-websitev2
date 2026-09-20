import React from "react";

export default function IndustriesV2Section() {
  const verticals = [
    {
      title: "Corporate Events",
      desc: "Our corporate event production management covers sales kickoffs, user conferences, and executive summits. We focus on executive stage presence, strict brand standards, presentation playback, and down to the second timing.",
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
      title: "Association Conferences",
      desc: "We deliver association conference production built for scale. Our team manages main stage general sessions alongside concurrent breakout rooms, committee meetings, volunteer schedules, and multi vendor timelines.",
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
      title: "Medical Meetings",
      desc: "Our production workflow accounts for CME (Continuing Medical Education) compliance requirements, mandatory presenter disclosures, approved medical content formats, and precise session timings built directly into production milestones.",
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
      title: "Fundraising Events",
      desc: "We produce fundraising events and live appeals where thoughtful lighting, crisp audio, smooth video transitions, and precise staging keep the evening moving and create the right setting for giving.",
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
      title: "Education Programs",
      desc: "We manage commencements, academic convocations, and educational symposiums operating on fixed dates, serving large audiences across wide physical footprints.",
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
        {/* Head */}
        <div className="max-w-[760px] mb-[clamp(36px,4vw,56px)]">
          <h2 className="relative pt-[18px] text-[clamp(30px,3.6vw,44px)] font-semibold leading-[1.1] tracking-tight mb-3.5 font-['Josefin_Sans',sans-serif] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[44px] before:h-[3px] before:bg-[#2CBCED]">
            Programs Designed Around What You Need
          </h2>
          <p className="text-[clamp(18px,1.5vw,21px)] text-[#5B6B7A] max-w-[60ch] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
            DXG provides event production services customized to the specific format, audience expectations, and technical demands of your organization.
          </p>
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
              <h3 className="text-xl font-semibold mb-2 font-['Josefin_Sans',sans-serif] text-[#0A0F16] group-hover:text-[#1A7FA3] transition-colors duration-200">
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
