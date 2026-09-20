"use client";

import React, { useState } from "react";

export default function GettingStartedFAQV2Section() {
  const steps = [
    {
      step: "Step 1.",
      title: "Tell Us About Your Event",
      desc: "Dates, venue, agenda, room count, production goals, and any AV proposals or documents already in hand.",
      isCyanBorder: false,
    },
    {
      step: "Step 2.",
      title: "Discovery Call",
      desc: "We review the event in detail and identify where production support adds the most value across budget, vendors, content, rehearsals, and show day.",
      isCyanBorder: false,
    },
    {
      step: "Step 3.",
      title: "Scope and Proposal",
      desc: "A production proposal built around your event, with services, timeline, and investment spelled out clearly.",
      isCyanBorder: true,
    },
  ];

  const faqs = [
    {
      question: "Do you provide the AV equipment?",
      answer:
        "Yes, when the event calls for it. DXG owns audio, video, lighting, staging, and LED inventory and provides full service production. Event production management is the option for planners whose equipment and labor are coming from in house AV or another vendor and who still want DXG planning and leading the production.",
    },
    {
      question: "Do you replace our AV company?",
      answer:
        "No. We work alongside the AV team you have, in house or independent, and manage the production scope around them. If you want DXG to supply equipment and crew on a future program, that is a separate conversation and the same producer carries over.",
    },
    {
      question: "What size events can you support?",
      answer:
        "Programs from 50 people to more than 10,000, with one main room or dozens of concurrent breakout sessions. The production approach scales with the event. The level of planning does not change.",
    },
    {
      question: "When should production management start?",
      answer:
        "Before the AV proposal is signed, if possible. Room count, staging, rehearsal hours, and labor calls set the cost conditions early, and a review at that stage has the most effect on budget. We can also join later for runs of shows, rehearsals, and show day leadership.",
    },
    {
      question: "Can you work with vendors we already selected?",
      answer:
        "Yes. We coordinate the vendors already under contract, including venue in house AV, and bring their requirements and timelines into one production schedule.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-[clamp(64px,8vw,112px)] bg-[#F3F6F8] text-[#0A0F16]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Head */}
        <div className="max-w-[760px] mb-8 sm:mb-12">
          <h2 className="relative pt-[18px] text-[clamp(30px,3.6vw,44px)] font-semibold leading-[1.1] tracking-tight mb-3.5 font-['Josefin_Sans',sans-serif] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[44px] before:h-[3px] before:bg-[#2CBCED]">
            Get Started with These 3 Steps
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
            Questions planners ask us
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
