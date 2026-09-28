import React from "react";

export default function VideographyServicesV2Section() {
  const categories = [
    {
      title: "Session Recording",
      bullets: [
        "Multi camera session recording",
        "Keynote recording",
        "Panel discussions",
        "Speaker presentations",
        "Selected breakout sessions",
        "On demand session content",
      ],
    },
    {
      title: "Interview and Testimonial Production",
      bullets: [
        "Executive interviews",
        "Speaker interviews",
        "Attendee testimonials",
        "Customer interviews",
        "Host and moderator messages",
      ],
    },
    {
      title: "Recap and Highlight Content",
      bullets: [
        "Event recap video",
        "Highlight reels",
        "Social media clips",
        "Sponsor deliverables",
        "Promotional content",
        "Educational footage",
      ],
    },
    {
      title: "Coverage Based on Final Use",
      bullets: [
        "Full keynote recording for complete session playback",
        "Short form clips for social media",
        "Executive interviews for marketing and communications",
        "Testimonial footage for customer stories",
        "Broad event footage for recap video production",
        "Speaker clips for future promotional content",
      ],
    },
    {
      title: "Multi Room Conference Coverage",
      bullets: [
        "Priority sessions identified before the event",
        "Major keynotes assigned full recording coverage",
        "Selected breakout rooms covered according to the agenda",
        "Interviews and testimonials scheduled around live sessions",
        "Room changes coordinated with the production schedule",
      ],
    },
    {
      title: "Production Aware Video Capture",
      bullets: [
        "Available audio feeds",
        "Presentation playback",
        "Stage positions",
        "Speaker movement",
        "Lighting conditions",
        "Rehearsal timing",
        "Interview locations",
      ],
    },
  ];

  return (
    <section className="py-[clamp(64px,8vw,112px)] bg-[#0A0F16] text-white">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Head */}
        <div className="max-w-[760px] mb-[clamp(36px,4vw,56px)]">
          <h2 className="relative pt-[18px] text-[clamp(30px,3.6vw,44px)] font-semibold leading-[1.1] tracking-tight mb-3.5 font-['Josefin_Sans',sans-serif] text-white before:content-[''] before:absolute before:top-0 before:left-0 before:w-[44px] before:h-[3px] before:bg-[#2CBCED]">
            Event Videography for Sessions, Speakers & Stories
          </h2>
          <p className="text-[clamp(18px,1.5vw,21px)] text-[#C9D3DC] max-w-[60ch] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
            DXG provides corporate event videography and conference video production for session recording, interviews, testimonials, recap content and future marketing.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-[#111A24] border border-[#1E2A36] rounded-md p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2CBCED]/60 hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)] border-t-4 border-t-[#2CBCED]"
            >
              <h3 className="text-xl font-semibold mb-4 font-['Josefin_Sans',sans-serif] text-white">
                {cat.title}
              </h3>
              <ul className="space-y-2.5 font-['IBM_Plex_Sans',sans-serif] text-[14.5px] text-[#C9D3DC]">
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
