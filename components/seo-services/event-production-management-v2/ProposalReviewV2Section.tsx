import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProposalReviewV2Section() {
  const checklist = [
    {
      title: "Scope Alignment",
      desc: "Proposal checked against program design, room count, agenda, and technical requirements.",
    },
    {
      title: "Pricing Review",
      desc: "Quoted costs weighed against scope, labor assumptions, and timeline.",
    },
    {
      title: "Labor Call Review",
      desc: "Crew hours matched to the real setup, rehearsal, show, and strike schedule.",
    },
    {
      title: "Technical Risk Review",
      desc: "Single points of failure, missing backups, and technical dependencies flagged.",
    },
    {
      title: "Contract and Change Order Review",
      desc: "Overtime, cancellation, substitution, and change order terms worth a second look.",
    },
  ];

  return (
    <section
      id="review"
      className="relative overflow-hidden py-[clamp(64px,8vw,112px)] bg-[#0A0F16] text-white scroll-mt-20"
    >
      {/* Background X Motif */}
      <svg
        className="absolute -left-[220px] -bottom-[200px] w-[620px] h-[620px] opacity-[0.07] pointer-events-none"
        viewBox="0 0 100 100"
        aria-hidden="true"
      >
        <line x1="8" y1="8" x2="92" y2="92" stroke="#2CBCED" strokeWidth="2" />
        <line x1="92" y1="8" x2="8" y2="92" stroke="#2CBCED" strokeWidth="2" />
        <line x1="18" y1="8" x2="50" y2="40" stroke="#2CBCED" strokeWidth="2" />
        <line x1="82" y1="8" x2="50" y2="40" stroke="#2CBCED" strokeWidth="2" />
        <line x1="18" y1="92" x2="50" y2="60" stroke="#2CBCED" strokeWidth="2" />
        <line x1="82" y1="92" x2="50" y2="60" stroke="#2CBCED" strokeWidth="2" />
      </svg>

      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(32px,5vw,72px)] items-start">
          {/* Left Column */}
          <div>
            <div className="max-w-[760px] mb-8">
              <h2 className="relative pt-[18px] text-[clamp(30px,3.6vw,44px)] font-semibold leading-[1.1] tracking-tight mb-3.5 font-['Josefin_Sans',sans-serif] text-white before:content-[''] before:absolute before:top-0 before:left-0 before:w-[44px] before:h-[3px] before:bg-[#2CBCED]">
                Get an Independent AV Proposal Review
              </h2>
              <p className="text-[clamp(18px,1.5vw,21px)] text-[#C9D3DC] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
                A proposal can look complete on paper while still leaving gaps in labor, setup time, or backup coverage. Get a second opinion with no pressure and just a useful conversation about your event. An audit evaluates 5 core areas.
              </p>
            </div>

            <Link
              href="https://www.dxg.agency/contact-us"
              className="inline-flex items-center gap-2.5 bg-[#2CBCED] hover:bg-[#4CC9F0] text-[#0A0F16] font-semibold text-base px-6 py-3.5 rounded transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(44,188,237,0.4)] font-['Josefin_Sans',sans-serif]"
            >
              Get a Second Opinion
            </Link>

            <p className="mt-4 text-sm text-[#5B6B7A] font-['IBM_Plex_Sans',sans-serif]">
              No pressure. No pitch deck. Just a conversation about your event.
            </p>
          </div>

          {/* Right Column */}
          <div>
            {/* Photo 06 Image Block */}
            <div className="group relative min-h-[300px] border border-[#1E2A36] text-white flex flex-col justify-end p-5 rounded-md overflow-hidden mb-4 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2CBCED] hover:shadow-[0_15px_30px_rgba(44,188,237,0.15)]">
              <Image
                src="/images/seo-services/event-production-management/av-proposal-audit-review.webp"
                alt="Detailed AV proposal audit review with highlighted notes and room diagram"
                title="AV Proposal Line-by-line Technical Audit"
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F16] via-[#0A0F16]/75 to-transparent z-[1]" />
              <span className="absolute top-3.5 left-4 font-['Josefin_Sans',sans-serif] font-bold text-xs text-[#0A0F16] bg-[#2CBCED] px-2 py-0.5 rounded-[2px] uppercase group-hover:scale-105 transition-transform duration-200 z-[2]">
                PHOTO 06
              </span>
              <span className="absolute top-3.5 right-4 font-['Josefin_Sans',sans-serif] text-xs text-[#2CBCED] z-[2]">
                16:9
              </span>
              <div className="relative z-10">
                <b className="font-['Josefin_Sans',sans-serif] text-base font-semibold mb-1 text-white block group-hover:text-[#2CBCED] transition-colors duration-200">
                  The second set of eyes
                </b>
                <p className="text-xs text-[#C9D3DC] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
                  Close, overhead: a printed AV proposal with cyan highlighter
                  marks and margin notes, a pen, a laptop edge showing a room
                  diagram. No faces. Tight crop, shallow depth of field. Reads as
                  &quot;someone who knows what to look for has already been through
                  this.&quot;
                </p>
              </div>
            </div>

            {/* Checklist */}
            <ul className="space-y-[10px]">
              {checklist.map((item, idx) => (
                <li
                  key={idx}
                  className="group grid grid-cols-[28px_1fr] gap-3.5 p-[16px_18px] bg-[#111A24] border border-[#1E2A36] rounded transition-all duration-300 hover:-translate-y-1 hover:border-[#2CBCED]/60 hover:bg-[#152230] hover:shadow-[0_8px_20px_rgba(0,0,0,0.3)]"
                >
                  <svg
                    className="w-[22px] h-[22px] stroke-[#2CBCED] fill-none stroke-2 stroke-linecap-round stroke-linejoin-round mt-0.5 group-hover:scale-110 transition-transform duration-200"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <div>
                    <b className="font-['Josefin_Sans',sans-serif] text-[17px] text-white block mb-0.5 font-semibold group-hover:text-[#2CBCED] transition-colors duration-200">
                      {item.title}
                    </b>
                    <span className="text-[14.5px] text-[#C9D3DC] font-['IBM_Plex_Sans',sans-serif]">
                      {item.desc}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
