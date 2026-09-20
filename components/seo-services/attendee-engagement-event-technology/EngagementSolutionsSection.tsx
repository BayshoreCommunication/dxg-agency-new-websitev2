import React from "react";

export default function EngagementSolutionsSection() {
  const groups = [
    {
      groupTitle: "In the room",
      desc: "Live audience polling, Q&A platforms and audience response systems turn general sessions into conversations. Moderators screen each question before it reaches the big screen. Speakers watch results on the confidence monitor and respond in the moment.",
    },
    {
      groupTitle: "Before and between sessions",
      desc: "Event mobile apps hold agendas, speaker bios, maps and session materials in every pocket. Digital content delivery sends slides and handouts to phones after each session. Digital signage points attendees toward the next room and social engagement walls put their posts on screen.",
    },
    {
      groupTitle: "Arrival and connection",
      desc: "Event check in technology moves attendees through registration by QR code or badge. Badge scanning records session attendance for planners and accrediting bodies. Networking technology matches attendees by shared interests, so lobby introductions start with something to talk about.",
    },
    {
      groupTitle: "Exhibit hall and sponsors",
      desc: "Interactive displays and touchscreen experiences give exhibitors a reason to draw a crowd. Lead retrieval captures contacts at the booth. Gamification sends attendees on a scavenger route between sponsors and sponsor activations report scans and visits back to each brand.",
    },
  ];

  return (
    <section className="py-[clamp(64px,8vw,112px)] bg-[#F3F6F8] text-[#0A0F16]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Head */}
        <div className="max-w-[760px] mb-[clamp(36px,4vw,56px)]">
          <h2 className="relative pt-[18px] text-[clamp(30px,3.6vw,44px)] font-semibold leading-[1.1] tracking-tight mb-3.5 font-['Josefin_Sans',sans-serif] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[44px] before:h-[3px] before:bg-[#2CBCED]">
            Event Technology and Engagement Solutions
          </h2>
          <p className="text-[clamp(18px,1.5vw,21px)] text-[#5B6B7A] max-w-[60ch] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
            Scope follows your format, venue, audience size and program goals. Each tool earns its place by serving one of those goals and solutions fall into four groups.
          </p>
        </div>

        {/* 4 Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {groups.map((grp, idx) => (
            <div
              key={idx}
              className="group bg-white border border-[#C9D3DC] p-7 sm:p-8 rounded-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_30px_rgba(10,15,22,0.12)] border-l-4 border-l-[#2CBCED]"
            >
              <h3 className="text-xl font-semibold mb-3 font-['Josefin_Sans',sans-serif] text-[#0A0F16] group-hover:text-[#1A7FA3] transition-colors duration-200">
                {grp.groupTitle}
              </h3>
              <p className="text-[14.5px] text-[#5B6B7A] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
                {grp.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
