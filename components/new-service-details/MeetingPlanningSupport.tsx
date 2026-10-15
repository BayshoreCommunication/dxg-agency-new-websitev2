import Container from "components/shared/Container";
import {
  CapabilityGrid,
  CenteredCTA,
  Eyebrow,
  IconFeatures,
  IconGrid,
  PrimaryButton,
  StepCards,
  outlineButton,
} from "./shared";
import {
  Armchair,
  BarChart3,
  Bell,
  CalendarDays,
  ClipboardList,
  DoorOpen,
  Handshake,
  Laptop,
  Mic,
  Monitor,
  Search,
  Settings,
  Star,
  TriangleAlert,
  Users,
  UsersRound,
  Zap,
} from "lucide-react";

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

const capabilities = [
  {
    icon: CalendarDays,
    title: "Pre-Event Planning & Logistics",
    text: "Support with planning timelines, checklists, logistics and pre-event coordination.",
  },
  {
    icon: UsersRound,
    title: "Registration & Attendee Management",
    text: "Full registration support, badging, attendee communication and onsite check-in.",
  },
  {
    icon: Mic,
    title: "Session & Speaker Coordination",
    text: "Speaker management, session tracking, run-of-show support and on-site liaison services.",
  },
  {
    icon: Users,
    title: "Onsite Meeting Operations",
    text: "Room monitoring, flow management, attendee support and real-time operational coverage.",
  },
  {
    icon: Star,
    title: "VIP & Guest Services",
    text: "Personalized support for VIPs, executives and special guests throughout your event.",
  },
  {
    icon: Handshake,
    title: "Venue & Vendor Coordination",
    text: "Liaison with venues, vendors and suppliers to keep everything aligned and on track.",
  },
  {
    icon: Laptop,
    title: "Event Technology Support",
    text: "Support with A/V, presentation management, speaker readiness and technical coordination.",
  },
  {
    icon: TriangleAlert,
    title: "Contingency & Issue Response",
    text: "Experienced support to quickly address changes, solve issues and keep your event on schedule.",
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
          Support for the Details <span className="text-primary">That Keep Events Running.</span>
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75">
          DXG supports planners before and during the event with registration, logistics, speaker
          coordination, room operations, and attendee support — all while keeping the planner in
          control.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <PrimaryButton href="/contact-us">Schedule a Planning Call</PrimaryButton>
          <a
            href="#capabilities"
            className={outlineButton}
          >
            Explore Support Services
          </a>
        </div>
      </div>
      <div className="min-h-[280px] bg-gray-800 sm:min-h-[380px] lg:min-h-[560px]" aria-hidden="true" />
    </div>
  </section>
);

const OperationalSupportSection = () => (
  <section className="relative overflow-hidden bg-gray-800 text-white">
    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/80" />
    <Container className="relative py-14 lg:py-16">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div>
          <Eyebrow>Planning support that delivers</Eyebrow>
          <h2 className="text-3xl font-bold leading-tight md:text-[42px]">
            Operational Support <span className="text-primary">Where You Need It Most.</span>
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/85">
            DXG gives planning teams extra hands and experienced support across the event
            lifecycle so you can focus on the big picture while we handle the operational details.
          </p>
        </div>
        <IconGrid items={supportAreas} />
      </div>
    </Container>
  </section>
);

const CapabilitiesSection = () => (
  <section id="capabilities" className="scroll-mt-20 bg-black py-14 text-white lg:py-16">
    <Container>
      <Eyebrow>Our capabilities</Eyebrow>
      <h2 className="text-3xl font-bold leading-tight md:text-4xl xl:text-[42px]">
        Complete Meeting Planning Support <span className="text-primary">for Live Events.</span>
      </h2>
      <p className="mt-3 max-w-4xl text-sm leading-relaxed text-white/75 md:text-base">
        DXG provides practical planning and onsite support across every part of your event —
        without replacing the planner.
      </p>
      <CapabilityGrid items={capabilities} />
    </Container>
  </section>
);

const WhyItMattersSection = () => (
  <section className="bg-[#071826] text-white">
    <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,4fr)]">
      <div className="min-h-[220px] bg-gray-800" aria-hidden="true" />
      {/* Right padding matches Container's edge so content lines up with the header */}
      <div className="grid items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:py-16 lg:pl-12 lg:pr-[max(2rem,calc((100vw-1620px)/2+2rem))]">
        <div className="lg:pr-4">
          <Eyebrow>Why it matters</Eyebrow>
          <h2 className="text-3xl font-bold leading-tight md:text-4xl">
            Your Team Leads. <span className="text-primary">DXG Extends Your Capacity.</span>
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/85 md:text-base">
            We integrate into your planning team to provide extra support at the right time,
            helping solve operational details before they become planner distractions.
          </p>
        </div>
        <IconFeatures items={outcomes} />
      </div>
    </div>
  </section>
);

const ProcessSection = () => (
  <section className="bg-black py-14 text-white lg:py-16">
    <Container>
      <Eyebrow>Our process</Eyebrow>
      <h2 className="text-3xl font-bold leading-tight md:text-4xl">
        From Planning Support to <span className="text-primary">Show Day Execution.</span>
      </h2>
      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/75 md:text-base">
        A simple, collaborative process designed to give you the right support at the right time.
      </p>
      <StepCards items={steps} variant="badge" />
    </Container>
  </section>
);

const CaseStudySection = () => (
  <section className="bg-black text-white">
    <div className="grid lg:grid-cols-2">
      <div className="min-h-[280px] bg-gray-800 sm:min-h-[360px] lg:min-h-[460px]" aria-hidden="true" />
      <div className="flex flex-col justify-center px-4 py-12 sm:px-6 lg:py-14 lg:pl-12 lg:pr-[max(2rem,calc((100vw-1620px)/2+2rem))]">
        <Eyebrow>Client success story</Eyebrow>
        <h2 className="text-3xl font-bold leading-tight md:text-4xl">
          Meeting Planning Support <span className="text-primary">in Action.</span>
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/75 md:text-base">
          DXG supported a multi-day association conference across registration, speaker
          management, breakout support, and onsite operations — helping deliver a seamless
          experience for attendees, speakers, and staff.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3 xl:grid-cols-4">
          {caseStats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="flex items-start gap-3 rounded-lg border border-primary/20 bg-[#081624] p-3 shadow-sm"
            >
              <Icon className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
              <div>
                <p className="text-lg font-bold leading-none text-primary">{value}</p>
                <p className="mt-1 text-xs text-white/65">{label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-7">
          <PrimaryButton href="/experiences-created">View the Full Case Study</PrimaryButton>
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
      <ProcessSection />
      <CaseStudySection />
      <CenteredCTA
        eyebrow="Let's plan together"
        primaryLabel="Schedule a Planning Call"
        secondaryLabel="Review My Existing Plan"
        text="We help planners lighten the workload and strengthen event execution with experienced support at every stage."
      />
    </div>
  );
};

export default MeetingPlanningSupport;
