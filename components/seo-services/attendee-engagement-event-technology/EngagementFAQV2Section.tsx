"use client";

import React, { useState } from "react";

export default function EngagementFAQV2Section() {
  const steps = [
    {
      step: "Step 1",
      title: "Tell us about your event",
      desc: "Share dates, venue, agenda, room count, engagement goals and any platforms already in hand.",
      isCyanBorder: false,
    },
    {
      step: "Step 2",
      title: "Join a discovery call",
      desc: "We identify where technology adds participation and where it adds friction. Each tool gets matched to a moment in the agenda.",
      isCyanBorder: false,
    },
    {
      step: "Step 3",
      title: "Review your proposal",
      desc: "You receive a technology plan built into your production, with services, timeline and investment spelled out.",
      isCyanBorder: true,
    },
  ];

  const faqs = [
    {
      question: "How do you get attendees to actually use it?",
      answer:
        "Web based polling opens from a QR code on screen, so attendees skip app downloads. Speakers announce the code and the first poll runs in minute two as an easy icebreaker. Early wins build the habit for later sessions.",
    },
    {
      question: "How do you keep live Q&A on track?",
      answer:
        "A moderator screens every question before it reaches the screen. Attendees upvote what matters, the producer queues the strongest three and speakers read them from the confidence monitor. Anonymous submissions stay optional.",
    },
    {
      question: "How do we prove sponsor activations delivered value?",
      answer:
        "Badge scanning and lead retrieval log every booth visit. Gamification adds scavenger route completions and app analytics show sponsor page views. We delivers one report after closeout, so sponsors see scans, visits and leads side by side.",
    },
    {
      question: "Can remote attendees vote and ask questions in real time?",
      answer:
        "Yes. Remote attendees enter the same poll and question queue as the room. The moderator alternates between room and stream and results appear on both screens. Recorded sessions and digital content delivery reach both audiences afterward.",
    },
    {
      question: "Where does attendee data go after badge scanning and app check in?",
      answer:
        "Data flows to the planner first. We sets consent rules before launch, so attendees choose whether sponsors receive contact details. Session attendance, poll responses and lead exports arrive in the closeout report, ready for CRM import and next year's planning.",
    },
    {
      question: "When should we book engagement technology for a conference?",
      answer:
        "Book before the AV proposal is signed. Poll placement, screen needs and Wi-Fi requirements shape staging and labor costs early. Later joins work, though options narrow as the schedule fills.",
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
            Getting Started Takes Three Steps
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
