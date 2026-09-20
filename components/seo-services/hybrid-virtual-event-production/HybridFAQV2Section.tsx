"use client";

import React, { useState } from "react";

export default function HybridFAQV2Section() {
  const steps = [
    {
      step: "Step 1",
      title: "Tell us about your event",
      desc: "Share your event date, venue, audience, agenda, presenter setup, virtual platform and current AV or streaming plan.",
      isCyanBorder: false,
    },
    {
      step: "Step 2",
      title: "Review the production requirements",
      desc: "We examine the audience experience, technical scope, presenter workflow, content needs, streaming path, engagement tools and show flow.",
      isCyanBorder: false,
    },
    {
      step: "Step 3",
      title: "Build the production proposal",
      desc: "DXG creates a production scope around your event, with services, timing, technical responsibilities and investment clearly defined.",
      isCyanBorder: true,
    },
  ];

  const faqs = [
    {
      question: "How early should we start planning a hybrid event?",
      answer:
        "Start production planning as soon as you have the venue, event format, agenda and audience structure.",
    },
    {
      question: "What happens if a remote speaker loses their connection during a live session?",
      answer:
        "We can set up backup communication and presenter workflows in advance. The production team will manage alternative contribution methods, adjust the show flow, liaise with moderators. Keep the session on track if remote connections change.",
    },
    {
      question: "Can DXG review an AV or streaming proposal before we approve it?",
      answer:
        "Yes. we can review proposed camera coverage, streaming services, platform requirements, labor, recording, remote presenter support, graphics, redundancy and production timing.",
    },
    {
      question: "Can one hybrid event use different production formats for different sessions?",
      answer:
        "Yes. A single event can use different setups for keynote sessions, panels, executive broadcasts, breakout rooms, workshops and remote presentations.",
    },
    {
      question: "How do you handle multiple breakout rooms at the same time?",
      answer:
        "We can organize breakout streaming based on room count, schedule, platform, camera needs, presenter setup and technical staff. The production plan will outline room assignments, workflows, session cues and communication for concurrent rooms.",
    },
    {
      question: "Can you produce a hybrid event with our existing venue AV team?",
      answer:
        "Yes. We can work alongside venue AV teams, independent AV vendors, streaming companies and internal event staff.",
    },
    {
      question: "Can you turn live sessions into on-demand content after the event?",
      answer:
        "Yes. We can record live sessions for later viewing. The post event workflow can support recorded presentations, keynote sessions, panels, breakout content and other approved event material.",
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
            What To Expect From the DXG Production Process
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
