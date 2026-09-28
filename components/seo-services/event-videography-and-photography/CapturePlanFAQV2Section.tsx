"use client";

import React, { useState } from "react";

export default function CapturePlanFAQV2Section() {
  const steps = [
    {
      step: "Step 1.",
      title: "Share Your Event Details",
      desc: "Send the event date, venue, format, agenda, room count, audience, priority sessions, speaker list, sponsor needs and intended content uses.",
      isCyanBorder: false,
    },
    {
      step: "Step 2.",
      title: "Build the Coverage Plan",
      desc: "DXG reviews photography, video, interviews, testimonials, keynote recording, room access, crew needs, production coordination and post event deliverables.",
      isCyanBorder: false,
    },
    {
      step: "Step 3.",
      title: "Confirm the Scope",
      desc: "We align coverage hours, crew requirements, priority moments, deliverables and production coordination around your event plan.",
      isCyanBorder: true,
    },
  ];

  const faqs = [
    {
      question: "Can you provide photography and video for the same event?",
      answer:
        "Yes. We coordinate both crews around one agenda, shared priorities, speaker timing, room access and final content goals.",
    },
    {
      question: "Can you record multiple conference sessions?",
      answer:
        "Yes. Coverage follows room count, agenda timing, session priorities and recording needs. Multi camera production supports major sessions and selected breakout rooms.",
    },
    {
      question: "Can you work with our existing AV company?",
      answer:
        "Yes. We coordinate with your AV and production teams around room access, rehearsal schedules, stage cues, available audio feeds and show flow.",
    },
    {
      question: "Can you create an event recap video?",
      answer:
        "Yes. We edit planned event footage into a recap built around speakers, attendees, networking, sponsors and key event moments.",
    },
    {
      question: "How early should we book event videography and photography?",
      answer:
        "Early planning gives the capture team time to set priorities, reserve interview windows, confirm room access, plan coverage and align deliverables with the event schedule.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="capture-plan" className="py-[clamp(64px,8vw,112px)] bg-[#F3F6F8] text-[#0A0F16] scroll-mt-20">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Head */}
        <div className="max-w-[760px] mb-8 sm:mb-12">
          <h2 className="relative pt-[18px] text-[clamp(30px,3.6vw,44px)] font-semibold leading-[1.1] tracking-tight mb-3.5 font-['Josefin_Sans',sans-serif] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[44px] before:h-[3px] before:bg-[#2CBCED]">
            Build Your Event Capture Plan in Three Steps
          </h2>
        </div>

        {/* 3 Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className={`group pt-5 border-t-3 transition-all duration-300 hover:-translate-y-1.5 p-4 rounded-b-md hover:bg-white hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)] hover:border-t-[#2CBCED] ${
                s.isCyanBorder ? "border-t-[#2CBCED]" : "border-t-[#0A0F16]"
              }`}
            >
              <small className="font-['Josefin_Sans',sans-serif] text-[#5B6B7A] text-sm block mb-2 font-semibold uppercase tracking-wider group-hover:text-[#2CBCED] transition-colors duration-200">
                {s.step}
              </small>
              <h3 className="text-xl font-semibold mb-2 font-['Josefin_Sans',sans-serif] text-[#0A0F16] group-hover:text-[#1A7FA3] transition-colors duration-200">
                {s.title}
              </h3>
              <p className="text-[15px] text-[#5B6B7A] leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-[820px] mt-[72px]">
          <h2 className="text-2xl sm:text-[28px] font-semibold mb-5 font-['Josefin_Sans',sans-serif] text-[#0A0F16]">
            Questions Planners Ask Us
          </h2>

          <div className="divide-y divide-[#C9D3DC] border-y border-[#C9D3DC]">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="py-1 transition-colors duration-150 hover:bg-white/50 px-2 rounded-sm">
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left cursor-pointer font-['Josefin_Sans',sans-serif] font-semibold text-lg sm:text-[19px] py-4 pr-10 relative text-[#0A0F16] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2CBCED] group"
                  >
                    <span className="group-hover:text-[#1A7FA3] transition-colors duration-200">{faq.question}</span>
                    <span
                      className={`absolute right-1 top-3 text-2xl text-[#2CBCED] font-light transition-transform duration-300 ${
                        isOpen ? "rotate-45 text-[#1A7FA3]" : "group-hover:scale-125"
                      }`}
                    >
                      +
                    </span>
                  </button>

                  {isOpen && (
                    <p className="pb-4 pr-[40px] text-[#5B6B7A] text-[15.5px] max-w-[70ch] leading-relaxed font-['IBM_Plex_Sans',sans-serif] animate-fadeIn">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
