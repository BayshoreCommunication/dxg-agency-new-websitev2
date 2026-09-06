"use client";

import Container from "components/shared/Container";
import TypingTitle from "components/layout/TypingTitle";
import Reveal from "components/shared/Reveal";
import { Check, Sparkles } from "lucide-react";

const scopeItems = [
  {
    title: "Production budgeting and scope development",
    desc: "We build the production budget around the actual program before major vendor commitments begin. Equipment, staging, lighting, video, labor, transportation and technical services receive defined budget allowances. As the program changes, we update the scope so planners can see the financial effect before approving the change.",
  },
  {
    title: "AV proposal and RFP review",
    desc: "An AV proposal can look complete while leaving gaps in labor, equipment, setup time or technical support. We review proposals line by line against the event plan. Our team checks scope, pricing, crew assumptions, room requirements, overtime exposure and missing services before you commit.",
  },
  {
    title: "Venue and in-house AV coordination",
    desc: "Venue teams often control access, power, rigging, loading, room layouts and exclusive service rules. In-house AV teams may also have specific equipment packages and labor requirements. We bring those details into the production plan so outside vendors and venue teams work from the same requirements.",
  },
  {
    title: "Technical site visits",
    desc: "A site visit gives the production team a chance to verify real venue conditions before load-in. We review room dimensions, power, rigging points, sightlines, loading access, equipment positions and stage locations. Early verification helps reduce costly changes during setup.",
  },
  {
    title: "Production schedules and timelines",
    desc: "We create one production timeline covering advance work, load-in, setup, technical checks, rehearsals, show time and strike. Each vendor and department receives defined deadlines and call times. Schedule changes move through one shared plan.",
  },
  {
    title: "Room by room technical planning",
    desc: "Every room gets a production plan based on its purpose. A keynote stage may need full video, lighting and presentation support. A breakout room may need a smaller audio and display package. We define the technical setup for each space instead of applying one package across the entire event.",
  },
  {
    title: "Vendor coordination",
    desc: "DXG acts as the production contact across AV, staging, lighting, décor and other technical vendors. We keep vendors aligned on schedules, access, requirements, deliverables and changes. Your planning team has one production lead for connected production decisions.",
  },
  {
    title: "Labor and crew planning",
    desc: "Labor costs depend on room count, equipment, setup time, show hours and strike requirements. We review crew calls against the actual schedule and workload. The goal is proper coverage for the show with labor planned around real production needs.",
  },
  {
    title: "Run of show development",
    desc: "The run of show gives every department the same working document for show day. It can include speaker cues, video playback, lighting changes, stage movements, transitions, timing and responsible team members. Updates stay connected as the program develops.",
  },
  {
    title: "Speaker and presentation coordination",
    desc: "Speaker materials need more than a file deadline. We collect presentations, videos, graphics and technical requirements before rehearsal. Presenters receive clear instructions for delivery, stage use and technical checks, while the production team has time to test every file.",
  },
  {
    title: "Technical rehearsals",
    desc: "Rehearsals give the crew a controlled window for testing the live sequence. We review cues, transitions, presentation playback, microphones, lighting, stage movement and timing. Speakers also gain time to practice in the actual room before attendees arrive.",
  },
  {
    title: "On site production management",
    desc: "Our producer leads production activity during setup and show time. We track schedules, vendors, room readiness, crew activity, content and live program changes in real time. Production decisions move through one point of coordination.",
  },
  {
    title: "General session and breakout oversight",
    desc: "A conference can have several rooms operating at once. We monitor general sessions and concurrent breakouts against the master production schedule. Room checks, crew communication and issue tracking help keep each session moving on time.",
  },
  {
    title: "Post event production wrap up",
    desc: "After the final program, we manage the production closeout. Work can include equipment return, vendor reconciliation, invoice review, documentation and a production debrief. Lessons from one event can inform budgets, schedules and production decisions for the next one.",
  },
];

export default function ProductionScopeSection() {
  return (
    <section className="bg-[#050505] py-16 md:py-20 lg:py-24 border-t border-white/10" aria-labelledby="scope-heading">
      <Container>
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <TypingTitle
            as="h2"
            id="scope-heading"
            className="text-3xl font-black uppercase leading-tight text-white sm:text-4xl lg:text-5xl"
          >
            Production Management <span className="text-primary">Can Include</span>
          </TypingTitle>
          <Reveal
            as="p"
            className="mt-4 text-base leading-7 text-white/75 sm:text-lg"
          >
            Every program needs a different mix of production support. DXG provides technical production management based on your event format, venue, schedule, room count and technical demands.
          </Reveal>
        </div>

        {/* 14 Scope Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {scopeItems.map((item, idx) => (
            <div
              key={item.title}
              className="flex flex-col rounded-xl border border-white/10 bg-[#071826]/60 p-6 transition-all duration-300 hover:border-primary/40 hover:bg-[#071826]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-primary">
                  <Check size={18} />
                </div>
                <TypingTitle
                  as="h3"
                  className="text-lg font-bold text-white"
                >
                  {item.title}
                </TypingTitle>
              </div>
              <Reveal
                as="p"
                className="mt-3 text-sm leading-6 text-white/70"
                delay={idx * 0.02}
              >
                {item.desc}
              </Reveal>
            </div>
          ))}
        </div>

        {/* Featured Case Example Card */}
        <div className="mt-16 rounded-2xl border border-primary/40 bg-gradient-to-br from-[#071826] via-[#0b2438] to-[#04101a] p-8 lg:p-12 shadow-[0_0_40px_rgba(46,198,245,0.15)] relative overflow-hidden">
          <div className="absolute right-0 top-0 h-64 w-64 bg-primary/10 blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <TypingTitle
              as="h3"
              className="text-2xl font-black text-white sm:text-3xl"
            >
              Let’s see behind the production management engagement
            </TypingTitle>

            <Reveal
              as="p"
              className="mt-4 text-base font-semibold text-primary/90"
            >
              For example a three day association conference with two general sessions, 40 concurrent breakout rooms and a closing reception.
            </Reveal>

            <div className="mt-4 space-y-4 text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
              <Reveal as="p">
                DXG can join during early planning to build the production budget and review AV proposals. As speakers and content take shape, we work through the technical plan room by room. In the final weeks, the production schedule, run of show and rehearsal plan bring vendors, speakers and crews onto one timeline.
              </Reveal>
              <Reveal as="p">
                During the event, our producers manage the general sessions and monitor breakout activity across the conference. Room issues can be addressed through the production team before they affect the attendee experience.
              </Reveal>
            </div>

            <div className="mt-8 rounded-xl border border-white/10 bg-black/40 p-6">
              <h4 className="text-lg font-bold text-primary">
                What this production plan covers
              </h4>
              <Reveal
                as="p"
                className="mt-2 text-sm leading-7 text-white/85 sm:text-base"
              >
                One production budget gives planners a central view of production spending. One vendor contact keeps communication organized. One master schedule tracks 40 breakout rooms alongside general sessions, rehearsals, labor calls and show timing.
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
