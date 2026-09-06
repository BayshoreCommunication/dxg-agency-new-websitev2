"use client";

import { useState } from "react";
import Container from "components/shared/Container";
import TypingTitle from "components/layout/TypingTitle";
import Reveal from "components/shared/Reveal";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Do you provide the AV equipment?",
    a: "DXG manages the production plan and coordinates the AV vendor or venue team responsible for equipment. Your existing AV relationship can remain in place while we manage the wider production requirements.",
  },
  {
    q: "Do you replace our AV company?",
    a: "Your AV company can continue handling its contracted services. DXG sits above the vendor relationship and coordinates delivery against the event schedule, budget and program requirements.",
  },
  {
    q: "What size events can you support?",
    a: "Support can range from a single general session with breakouts to multi day conferences with concurrent tracks and large room counts. The production structure changes based on the event format and operational demands.",
  },
  {
    q: "When should production management start?",
    a: "Early planning gives the production team more control over scope, room requirements, budget and vendor decisions. Early involvement also gives planners more time to adjust production choices before contracts are finalized.",
  },
  {
    q: "Can you work with vendors we already selected?",
    a: "Yes. DXG can coordinate vendors already working on the event. The production plan connects their schedules, responsibilities, technical requirements and deliverables.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="bg-[#050505] py-16 md:py-20 lg:py-24 border-t border-white/10" aria-labelledby="faq-heading">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <TypingTitle
            as="h2"
            id="faq-heading"
            className="text-3xl font-black uppercase leading-tight text-white sm:text-4xl lg:text-5xl"
          >
            Frequently <span className="text-primary">asked questions</span>
          </TypingTitle>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                className="overflow-hidden rounded-2xl border border-white/10 bg-[#071826]/80 transition-colors duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="flex w-full items-center justify-between p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <TypingTitle
                    as="h3"
                    className="text-lg font-bold text-white transition-colors duration-200 hover:text-primary"
                  >
                    {faq.q}
                  </TypingTitle>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-sm leading-7 text-white/75 sm:text-base">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
