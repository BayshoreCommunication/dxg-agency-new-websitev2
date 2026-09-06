"use client";

import Container from "components/shared/Container";
import TypingTitle from "components/layout/TypingTitle";
import Reveal from "components/shared/Reveal";
import { MessageSquarePlus, PhoneCall, FileText } from "lucide-react";

const steps = [
  {
    fullTitle: "Step 1   Tell us about your event",
    desc: "Share the event dates, venue, agenda, room count, production goals and any AV information already available. Existing proposals and production documents can also help us understand the current scope.",
    icon: MessageSquarePlus,
  },
  {
    fullTitle: "Step 2   Discovery call",
    desc: "We review the event in greater detail and identify the production areas needing support. The conversation covers budget, technical requirements, vendors, schedule, content, rehearsals and show day expectations.",
    icon: PhoneCall,
  },
  {
    fullTitle: "Step 3   Scope and proposal",
    desc: "You receive a production proposal built around your event. It outlines the services included, expected timeline and investment.",
    icon: FileText,
  },
];

export default function GettingStartedSection() {
  return (
    <section className="bg-black py-16 md:py-20 lg:py-24 border-t border-white/10" aria-labelledby="getting-started-heading">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <TypingTitle
            as="h2"
            id="getting-started-heading"
            className="text-3xl font-black uppercase leading-tight text-white sm:text-4xl lg:text-5xl"
          >
            Getting <span className="text-primary">Started</span>
          </TypingTitle>
          <Reveal
            as="p"
            className="mt-4 text-base leading-7 text-white/75 sm:text-lg"
          >
            Bringing DXG into a production program starts with a simple three step process.
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.fullTitle}
                className="relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#071826]/90 p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(46,198,245,0.15)]"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                    <Icon size={24} />
                  </div>
                  <TypingTitle
                    as="h3"
                    className="mt-6 text-xl font-bold text-white"
                  >
                    {item.fullTitle}
                  </TypingTitle>
                  <Reveal
                    as="p"
                    className="mt-3 text-sm leading-7 text-white/70"
                    delay={idx * 0.05}
                  >
                    {item.desc}
                  </Reveal>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
