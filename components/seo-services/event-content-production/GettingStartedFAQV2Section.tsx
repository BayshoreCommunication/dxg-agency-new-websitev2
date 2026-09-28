"use client";

import React, { useState } from "react";

export default function GettingStartedFAQV2Section() {
  const steps = [
    {
      step: "Step 1.",
      title: "Tell Us About Your Event",
      desc: "Share the event type, dates, venue, agenda, screen setup, audience, existing content and production deadlines.",
      isCyanBorder: false,
    },
    {
      step: "Step 2.",
      title: "Content Discovery",
      desc: "We review your program, identify the required content and define the creative and technical scope for the event.",
      isCyanBorder: false,
    },
    {
      step: "Step 3.",
      title: "Content Scope and Proposal",
      desc: "You receive a content plan with deliverables, timeline, production responsibilities and investment.",
      isCyanBorder: true,
    },
  ];

  const faqs = [
    {
      question: "Can you create content for LED walls and projection screens?",
      answer:
        "Yes. DXG prepares content around the display environment, including screen dimensions, aspect ratio, resolution and playback requirements.",
    },
    {
      question: "Can you work with presentations and videos created by our speakers or agency?",
      answer:
        "Yes. We can review, edit, format organize and prepare supplied materials for the live production workflow.",
    },
    {
      question: "Can you produce opening videos and motion graphics for a general session?",
      answer:
        "Yes. DXG can create event opening videos, motion graphics for events, session graphics, transitions, countdowns and other general session content.",
    },
    {
      question: "Can you prepare content for awards programs?",
      answer:
        "Yes. We can produce awards show content for introductions, honoree names, categories, recognition moments, sponsor segments and transitions.",
    },
    {
      question: "Do you coordinate event content with the AV team?",
      answer:
        "Yes. DXG works with the audiovisual team, playback operators, producers, presenters and show callers so content reaches the right person in the right format at the right cue.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="content-plan" className="py-[clamp(64px,8vw,112px)] bg-[#F3F6F8] text-[#0A0F16] scroll-mt-20">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Head */}
        <div className="max-w-[760px] mb-8 sm:mb-12">
          <h2 className="relative pt-[18px] text-[clamp(30px,3.6vw,44px)] font-semibold leading-[1.1] tracking-tight mb-3.5 font-['Josefin_Sans',sans-serif] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[44px] before:h-[3px] before:bg-[#2CBCED]">
            Start Your Event Content Plan
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
