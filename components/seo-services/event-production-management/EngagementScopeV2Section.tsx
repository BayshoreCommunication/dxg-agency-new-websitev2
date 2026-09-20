import React from "react";

export default function EngagementScopeV2Section() {
  const phases = [
    {
      phaseTitle: "Before vendors commit",
      items: [
        {
          title: "Production budgeting",
          desc: "Budget allowances by category before commitments, updated as scope changes.",
        },
        {
          title: "AV proposal and RFP review",
          desc: "Line-by-line check of scope, pricing, crew assumptions and overtime exposure.",
        },
        {
          title: "Venue and in-house AV coordination",
          desc: "Access, power, rigging, exclusives and labor rules folded into one plan.",
        },
        {
          title: "Technical site visits",
          desc: "Dimensions, rigging points, sightlines and loading verified before load-in.",
        },
      ],
    },
    {
      phaseTitle: "Building the plan",
      items: [
        {
          title: "Production schedules",
          desc: "One timeline from advance work through strike, with call times per department.",
        },
        {
          title: "Room-by-room technical planning",
          desc: "Keynote stage and breakout room each get the setup their purpose needs.",
        },
        {
          title: "Vendor coordination",
          desc: "One production contact across AV, staging, lighting, décor and technical vendors.",
        },
        {
          title: "Labor and crew planning",
          desc: "Crew calls checked against the real schedule and workload.",
        },
      ],
    },
    {
      phaseTitle: "Show week",
      items: [
        {
          title: "Run of show development",
          desc: "Cues, playback, transitions, timing and owners in one working document.",
        },
        {
          title: "Speaker and content coordination",
          desc: "Files collected, tested and rehearsed with clear deadlines for presenters.",
        },
        {
          title: "Technical rehearsals",
          desc: "A controlled window to test the live sequence in the actual room.",
        },
        {
          title: "On-site production management",
          desc: "Producer-led setup, general sessions, breakouts and closeout.",
        },
      ],
    },
  ];

  return (
    <section className="py-[clamp(64px,8vw,112px)] bg-[#F3F6F8] text-[#0A0F16]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Head */}
        <div className="max-w-[760px] mb-[clamp(36px,4vw,56px)]">
          <h2 className="relative pt-[18px] text-[clamp(30px,3.6vw,44px)] font-semibold leading-[1.1] tracking-tight mb-3.5 font-['Josefin_Sans',sans-serif] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[44px] before:h-[3px] before:bg-[#2CBCED]">
            What an engagement can include
          </h2>
          <p className="text-[clamp(18px,1.5vw,21px)] text-[#5B6B7A] max-w-[60ch] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
            These are the production services a planner can engage on their
            own, with equipment and labor coming from in-house AV, another
            vendor or DXG. Scope follows your format, venue, schedule and room
            count.
          </p>
        </div>

        {/* Phased Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#C9D3DC] border border-[#C9D3DC]">
          {phases.map((phase, pIdx) => (
            <React.Fragment key={pIdx}>
              {/* Phase Banner */}
              <div className="group bg-[#0A0F16] text-white col-span-1 sm:col-span-2 lg:col-span-4 px-5.5 py-3.5 font-['Josefin_Sans',sans-serif] text-sm font-semibold flex items-center gap-3.5 after:content-[''] after:flex-1 after:h-[1px] after:bg-white/15 transition-colors duration-200">
                <span className="group-hover:text-[#2CBCED] transition-colors duration-200">
                  {phase.phaseTitle}
                </span>
              </div>

              {/* Items */}
              {phase.items.map((item, itemIdx) => (
                <div
                  key={itemIdx}
                  className="group relative bg-[#F3F6F8] hover:bg-white p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1.5 hover:z-20 hover:shadow-[0_15px_30px_rgba(10,15,22,0.12)] border-l-4 border-l-transparent hover:border-l-[#2CBCED]"
                >
                  <b className="font-['Josefin_Sans',sans-serif] text-[17px] font-semibold block mb-1.5 text-[#0A0F16] group-hover:text-[#1A7FA3] transition-colors duration-200">
                    {item.title}
                  </b>
                  <p className="text-sm text-[#5B6B7A] leading-relaxed font-['IBM_Plex_Sans',sans-serif] group-hover:text-[#0A0F16] transition-colors duration-200">
                    {item.desc}
                  </p>
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
