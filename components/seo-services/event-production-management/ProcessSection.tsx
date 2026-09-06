"use client";

import Container from "components/shared/Container";
import TypingTitle from "components/layout/TypingTitle";
import Reveal from "components/shared/Reveal";

const steps = [
  {
    step: "01",
    title: "Discovery and scoping",
    desc: "We begin with the event format, audience, venue, budget, dates, agenda, room count and production goals. We also review speaker needs, technical expectations, program timing and venue conditions. This gives us a defined production scope before equipment and vendor decisions begin.",
  },
  {
    step: "02",
    title: "Production planning and vendor coordination",
    desc: "We build the working production budget, technical scope, vendor requirements, room plans, staffing needs and production timeline. As the program changes, we update the plan around new sessions, room changes, schedule shifts, speaker needs and production requirements.",
  },
  {
    step: "03",
    title: "Technical preparation",
    desc: "The team finalizes room plans, technical specifications, run of show documents, speaker materials, cue information and crew schedules. Site reviews can confirm loading access, room dimensions, power, staging positions, equipment placement and other venue details.",
  },
  {
    step: "04",
    title: "Rehearsal",
    desc: "The production team tests presentations, videos, audio, lighting, stage movement, transitions, speaker cues and timing. Rehearsal also gives presenters a practical view of the room. Production crews can confirm cue sequences and content playback before the program begins.",
  },
  {
    step: "05",
    title: "Show day production",
    desc: "Our production team producers oversee setup, technical checks, rehearsals, room readiness, crew activity, vendor coordination and live show flow. During the program, the producer monitors timing and coordinates production decisions across the event. Each production team has a defined role and communication path.",
  },
  {
    step: "06",
    title: "Post event closeout",
    desc: "The final production stage covers strike, equipment return, vendor reconciliation, documentation and debriefing. We  review the production with your team and record useful lessons for future programs. The next planning cycle starts with better production knowledge from the previous event.",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-black py-16 md:py-20 lg:py-24 border-t border-white/10" aria-labelledby="process-heading">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <TypingTitle
            as="h2"
            id="process-heading"
            className="text-3xl font-black uppercase leading-tight text-white sm:text-4xl lg:text-5xl"
          >
            How we manage <span className="text-primary">your event production</span>
          </TypingTitle>
          <Reveal
            as="p"
            className="mt-4 text-base leading-7 text-white/75 sm:text-lg"
          >
            Conference production management follows a clear sequence. Each stage produces information for the next stage.
          </Reveal>
        </div>

        <div className="mt-14 relative before:absolute before:left-4 before:top-4 before:bottom-4 before:w-0.5 before:bg-white/10 sm:before:left-1/2 sm:before:-translate-x-1/2">
          <div className="space-y-8 sm:space-y-12">
            {steps.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={item.step}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Badge */}
                  <div className="absolute left-4 -translate-x-1/2 sm:left-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-[#071826] text-sm font-bold text-primary shadow-[0_0_15px_rgba(46,198,245,0.4)]">
                    {item.step}
                  </div>

                  {/* Content Box */}
                  <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-8">
                    <div className="rounded-2xl border border-white/10 bg-[#071826]/90 p-6 sm:p-8 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_25px_rgba(46,198,245,0.12)]">
                      <TypingTitle
                        as="h3"
                        className="text-xl font-bold text-white"
                      >
                        {item.title}
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
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
