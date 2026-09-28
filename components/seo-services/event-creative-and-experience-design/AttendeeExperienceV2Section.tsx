import React from "react";

export default function AttendeeExperienceV2Section() {
  return (
    <section className="py-[clamp(64px,8vw,112px)] bg-[#E9EEF2] text-[#0A0F16]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-[820px] bg-white border border-[#C9D3DC] rounded-lg p-8 sm:p-12 shadow-[0_15px_35px_rgba(10,15,22,0.06)] relative overflow-hidden border-l-4 border-l-[#2CBCED]">
          <h2 className="relative pt-[18px] text-[clamp(28px,3.4vw,40px)] font-semibold leading-[1.1] tracking-tight mb-5 font-['Josefin_Sans',sans-serif] text-[#0A0F16] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[44px] before:h-[3px] before:bg-[#2CBCED]">
            Design the Attendee Experience Across the Venue
          </h2>
          <p className="text-base sm:text-lg text-[#5B6B7A] leading-relaxed font-['IBM_Plex_Sans',sans-serif] mb-4">
            An event experience starts long before an attendee takes their seat in the general session. It begins in the hotel lobby, continues through registration and carries through every foyer, hallway and breakout room.
          </p>
          <p className="text-base sm:text-lg text-[#5B6B7A] leading-relaxed font-['IBM_Plex_Sans',sans-serif] mb-4">
            DXG applies experience design principles across the entire venue footprint. Combining directionality with custom event environments we provide an intuitive physical flow, ensuring that attendees remain relaxed, informed and engaged with your program. A welcoming and inviting entrance, interactive sponsor lounge, brightly lit registration tables and a unified display throughout the foyer will ensure that your message is communicated throughout the venue.
          </p>
          <p className="text-base sm:text-lg text-[#0A0F16] font-medium leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
            If the spatial design is natural and harmonious from the front doors to your main stage, your audience is engaged in with your content, your sponsors are seen and maximum exposure is achieved and your overall program provides value to your attendees for years.
          </p>
        </div>
      </div>
    </section>
  );
}
