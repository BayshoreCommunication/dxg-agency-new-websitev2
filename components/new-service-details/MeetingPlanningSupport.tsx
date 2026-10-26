import Container from "components/shared/Container";
import {
  Armchair,
  BarChart3,
  Bell,
  CalendarDays,
  ClipboardList,
  DoorOpen,
  Handshake,
  Mic,
  Monitor,
  Search,
  Settings,
  Users,
  UsersRound,
  Zap,
} from "lucide-react";
import Image from "next/image";
import {
  CenteredCTA,
  Eyebrow,
  IconFeatures,
  IconGrid,
  PrimaryButton,
  QuadCapabilities,
  StepCards,
  outlineButton,
} from "./shared";

/* ---------- DATA ---------- */

const supportAreas = [
  { icon: ClipboardList, label: "Pre-Event Logistics" },
  { icon: UsersRound, label: "Registration Support" },
  { icon: Users, label: "Attendee Management" },
  { icon: Mic, label: "Speaker Coordination" },
  { icon: Monitor, label: "Breakout Oversight" },
  { icon: Handshake, label: "Vendor Coordination" },
  { icon: Armchair, label: "Room Resets" },
  { icon: Settings, label: "Onsite Issue Resolution" },
];

const supportImages = [
  {
    src: "/images/seo-services/meeting-planning-support/Pre-Event Planning.png",
    alt: "Planner reviewing event timelines and pre-event checklists",
  },
  {
    src: "/images/seo-services/meeting-planning-support/Registration Check-in.png",
    alt: "Attendees checking in at the event registration desk",
  },
  {
    src: "/images/seo-services/meeting-planning-support/session-speaker-coordination.webp",
    alt: "Speaker ready room with session and run-of-show coordination",
  },
  {
    src: "/images/seo-services/event-production-management/producer-at-front-of-house.webp",
    alt: "Onsite team reviewing floor plans during event operations",
  },
];

const supportGroups = [
  {
    icon: CalendarDays,
    title: "Pre-Event Planning & Logistics",
    items: [
      { label: "Event timeline & critical path" },
      { label: "Venue & vendor coordination" },
      { label: "Staffing recommendations" },
      { label: "Room layouts & signage" },
      { label: "Speaker logistics & travel support" },
    ],
  },
  {
    icon: UsersRound,
    title: "Registration & Attendee Management",
    items: [
      { label: "Registration setup & management" },
      { label: "Onsite badge printing & kiosks" },
      { label: "VIP check-in & attendee support" },
      { label: "Lead management" },
      { label: "Troubleshooting & real-time support" },
    ],
  },
  {
    icon: Settings,
    title: "Onsite Event Operations",
    items: [
      { label: "Room monitoring & resets" },
      { label: "Vendor coordination" },
      { label: "Catering timing & communication" },
      { label: "VIP assistance" },
      { label: "Floor logistics & issue resolution" },
    ],
  },
  {
    icon: Mic,
    title: "Speaker & Session Management",
    items: [
      { label: "Speaker coordination" },
      { label: "Presentation collection & backup" },
      { label: "Session timing & room assignments" },
      { label: "Smooth transitions between sessions" },
      { label: "CE tracking support" },
    ],
  },
];

const outcomes = [
  { icon: Bell, title: "Fewer Last-Minute Surprises" },
  { icon: Zap, title: "Faster Onsite Decisions" },
  { icon: UsersRound, title: "Better Planner Coverage" },
  { icon: Settings, title: "One Coordinated Support Team" },
];

const steps = [
  {
    icon: Search,
    title: "Discovery",
    text: "Learn about your event goals, needs and planning structure.",
  },
  {
    icon: UsersRound,
    title: "Planning Alignment",
    text: "Define support scope, timelines and key priorities.",
  },
  {
    icon: ClipboardList,
    title: "Logistics Buildout",
    text: "Develop detailed plans for registration, rooms, speakers and operations.",
  },
  {
    icon: Users,
    title: "Team Coordination",
    text: "Align DXG support staff with your internal team, vendors and venue.",
  },
  {
    icon: Settings,
    title: "Onsite Execution",
    text: "Provide hands-on support throughout your event.",
  },
  {
    icon: BarChart3,
    title: "Debrief & Next Steps",
    text: "Review outcomes, feedback and opportunities for future events.",
  },
];

const caseStats = [
  { icon: Users, value: "1,500", label: "Attendees" },
  { icon: DoorOpen, value: "16", label: "Breakout Rooms" },
  { icon: CalendarDays, value: "3-Day", label: "Event" },
  { icon: UsersRound, value: "One", label: "Dedicated Support Team" },
];

/* ---------- SECTIONS ---------- */

const HeroSection = () => (
  <section className="bg-black text-white">
    <div className="grid lg:grid-cols-2">
      <div className="flex flex-col justify-center px-4 py-14 sm:px-6 lg:py-20 lg:pl-[max(2rem,calc((100vw-1620px)/2+2rem))] lg:pr-12 xl:pr-16">
        <Eyebrow>Meeting Planning Support</Eyebrow>
        <h1 className="max-w-xl text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl xl:text-[56px]">
          Support for the Details{" "}
          <span className="text-primary">That Keep Events Running.</span>
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75">
          DXG supports planners before and during the event with registration,
          logistics, speaker coordination, room operations, and attendee support
          — all while keeping the planner in control.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <PrimaryButton href="/contact-us">
            Schedule a Planning Call
          </PrimaryButton>
          <a href="#capabilities" className={outlineButton}>
            Explore Support Services
          </a>
        </div>
      </div>
      <div className="group relative min-h-[320px] sm:min-h-[420px] lg:min-h-[560px] overflow-hidden bg-gray-950">
        <Image
          src="/images/seo-services/event-production-management/EventProductionManagement.png"
          alt="Meeting Planning Support - DXG general session ballroom with branded LED screens"
          title="Meeting Planning Support"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </div>
  </section>
);

const OperationalSupportSection = () => (
  <section className="relative overflow-hidden bg-black text-white">
    <Image
      src="/images/seo-services/event-production-management/technical-site-visit-ballroom.webp"
      alt="Operational support for meeting planners"
      fill
      sizes="100vw"
      className="pointer-events-none object-cover object-center opacity-25"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/90 to-black/80" />
    <Container className="relative py-14 lg:py-16">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div>
          <Eyebrow>Planning support that delivers</Eyebrow>
          <h2 className="text-3xl font-bold leading-tight md:text-[42px]">
            Operational Support{" "}
            <span className="text-primary">Where You Need It Most.</span>
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/85">
            DXG gives planning teams extra hands and experienced support across
            the event lifecycle so you can focus on the big picture while we
            handle the operational details.
          </p>
        </div>
        <IconGrid items={supportAreas} />
      </div>
    </Container>
  </section>
);

const CapabilitiesSection = () => (
  <QuadCapabilities
    id="capabilities"
    eyebrow="Our capabilities"
    title={
      <>
        Meeting Support Where{" "}
        <span className="text-primary">Your Team Needs It Most.</span>
      </>
    }
    text="DXG adds experienced event professionals to your team, providing hands-on support across key planning and onsite areas — without replacing the planner."
    images={supportImages}
    groups={supportGroups}
  />
);

const WhyItMattersSection = () => (
  <section className="relative overflow-hidden bg-black text-white">
    <Image
      src="/images/seo-services/event-production-management/av-proposal-audit-review.webp"
      alt="Your Team Leads. DXG Extends Your Capacity."
      fill
      sizes="100vw"
      className="pointer-events-none object-cover object-center opacity-25"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/90 to-black/70" />
    <Container className="relative py-14 lg:py-16">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div>
          <Eyebrow>Why it matters</Eyebrow>
          <h2 className="text-3xl font-bold leading-tight md:text-4xl">
            Your Team Leads.{" "}
            <span className="text-primary">DXG Extends Your Capacity.</span>
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/85 md:text-base">
            We integrate into your planning team to provide extra support at the
            right time, helping solve operational details before they become
            planner distractions.
          </p>
        </div>
        <IconFeatures items={outcomes} />
      </div>
    </Container>
  </section>
);

const ProcessSection = () => (
  <section className="bg-black py-14 text-white lg:py-16">
    <Container>
      <Eyebrow>Our process</Eyebrow>
      <h2 className="text-3xl font-bold leading-tight md:text-4xl">
        From Planning Support to{" "}
        <span className="text-primary">Show Day Execution.</span>
      </h2>
      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/75 md:text-base">
        A simple, collaborative process designed to give you the right support
        at the right time.
      </p>
      <StepCards items={steps} variant="badge" />
    </Container>
  </section>
);

const CaseStudySection = () => (
  <section className="bg-black text-white">
    <div className="grid lg:grid-cols-2">
      <div className="group relative min-h-[320px] sm:min-h-[420px] lg:min-h-[500px] overflow-hidden bg-gray-950">
        <Image
          src="/images/seo-services/meeting-planning-support/session-speaker-coordination.webp"
          alt="Meeting Planning Support in Action - Association Conference"
          title="Meeting Planning Support in Action"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col justify-center px-4 py-12 sm:px-6 lg:py-14 lg:pl-12 lg:pr-[max(2rem,calc((100vw-1620px)/2+2rem))]">
        <Eyebrow>Client success story</Eyebrow>
        <h2 className="text-3xl font-bold leading-tight md:text-4xl">
          Meeting Planning Support{" "}
          <span className="text-primary">in Action.</span>
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/75 md:text-base">
          DXG supported a multi-day association conference across registration,
          speaker management, breakout support, and onsite operations — helping
          deliver a seamless experience for attendees, speakers, and staff.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3 xl:grid-cols-4">
          {caseStats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="flex items-start gap-3 rounded-lg border border-primary/20 bg-[#081624] p-3 shadow-sm"
            >
              <Icon className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
              <div>
                <p className="text-lg font-bold leading-none text-primary">
                  {value}
                </p>
                <p className="mt-1 text-xs text-white/65">{label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-7">
          <PrimaryButton href="/experiences-created">
            View the Full Case Study
          </PrimaryButton>
        </div>
      </div>
    </div>
  </section>
);

/* ---------- PAGE ---------- */

const MeetingPlanningSupport = () => {
  return (
    // pt-20 clears the fixed site header (h-20) so it sits on the layout's dark background
    <div className="bg-black pt-20">
      <HeroSection />
      <OperationalSupportSection />
      <CapabilitiesSection />
      <WhyItMattersSection />
      {/* Temporarily hidden */}
      {/* <ProcessSection /> */}
      {/* <CaseStudySection /> */}
      <CenteredCTA
        eyebrow="Let's plan together"
        primaryLabel="Schedule a Planning Call"
        text="We help planners lighten the workload and strengthen event execution with experienced support at every stage."
        bgImage="/images/seo-services/meeting-planning-support/GMA June 2024.jpeg"
      />
    </div>
  );
};

export default MeetingPlanningSupport;
