import React from "react";

export default function PhotographyCoverageV2Section() {
  const categories = [
    {
      title: "Stage and Session Coverage",
      bullets: [
        "General sessions",
        "Keynote speakers",
        "Panel discussions",
        "Breakout sessions",
        "Speaker presentations",
        "Audience reactions",
        "Awards moments",
      ],
    },
    {
      title: "People and Portraits",
      bullets: [
        "Executive portraits",
        "Speaker portraits",
        "Attendee interactions",
        "Group photographs",
        "Customer conversations",
        "Candid networking moments",
      ],
    },
    {
      title: "Brand and Experience",
      bullets: [
        "Sponsor activations",
        "Exhibitor booths",
        "Products and displays",
        "Event signage",
        "Venue details",
        "Room design",
        "Behind the scenes production",
      ],
    },
    {
      title: "Full Program Coverage",
      bullets: [
        "Priority speakers and sessions mapped before the event",
        "Daily shot priorities for multi day conferences",
        "General session and breakout room coverage",
        "Networking, receptions and closing events",
        "Consistent visual coverage across different rooms & settings",
      ],
    },
    {
      title: "Fast Moving Moments",
      bullets: [
        "Stage transitions",
        "Audience reactions",
        "Awards presentations",
        "Networking interactions",
        "Speaker arrivals and departures",
        "Candid moments outside scheduled sessions",
      ],
    },
  ];

  return (
    <section className="py-[clamp(64px,8vw,112px)] bg-[#F3F6F8] text-[#0A0F16]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Head */}
        <div className="max-w-[760px] mb-[clamp(36px,4vw,56px)]">
          <h2 className="relative pt-[18px] text-[clamp(30px,3.6vw,44px)] font-semibold leading-[1.1] tracking-tight mb-3.5 font-['Josefin_Sans',sans-serif] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[44px] before:h-[3px] before:bg-[#2CBCED]">
            Photography That Captures People Behind the Program
          </h2>
          <p className="text-[clamp(18px,1.5vw,21px)] text-[#5B6B7A] max-w-[60ch] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
            DXG provides conference photography and corporate event photography across the moments people, brands and teams need most. A planned conference photography schedule can cover the full program or focus on priority speakers, sessions, sponsors and experiences.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className={`bg-white border border-[#C9D3DC] rounded-md p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_30px_rgba(10,15,22,0.1)] border-t-4 border-t-[#2CBCED] ${
                idx === 3 || idx === 4 ? "md:col-span-1 lg:col-span-1" : ""
              }`}
            >
              <h3 className="text-xl font-semibold mb-4 font-['Josefin_Sans',sans-serif] text-[#0A0F16]">
                {cat.title}
              </h3>
              <ul className="space-y-2.5 font-['IBM_Plex_Sans',sans-serif] text-[14.5px] text-[#5B6B7A]">
                {cat.bullets.map((b, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2CBCED] mt-2 shrink-0" />
                    <span>{b}</span>
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
