import Container from "components/shared/Container";
import { CapabilityGrid, CenteredCTA, Eyebrow, IconGrid, PrimaryButton } from "./shared";
import {
  ArrowRight,
  BarChart3,
  FileText,
  Globe,
  GraduationCap,
  ImageIcon,
  Laptop,
  MapPin,
  Monitor,
  Network,
  Play,
  Radio,
  Settings,
  UserRound,
  Users,
  UsersRound,
  Video,
} from "lucide-react";

/* ---------- DATA ---------- */

const eventTypes = [
  { icon: Users, label: "Live Conferences" },
  { icon: Monitor, label: "Virtual Conferences" },
  { icon: UserRound, label: "Executive Town Halls" },
  { icon: Radio, label: "Webcasts" },
  { icon: MapPin, label: "Multi-Site Meetings" },
  { icon: Globe, label: "Remote Speakers" },
  { icon: GraduationCap, label: "Medical Education" },
  { icon: UsersRound, label: "Association Events" },
];

const capabilities = [
  {
    icon: Video,
    title: "Livestream Production",
    text: "Professional live streaming for global audiences with reliable, high-quality broadcast production.",
  },
  {
    icon: Monitor,
    title: "Virtual Platform Support",
    text: "Expert support for leading virtual event platforms with seamless integration, configurations and show management.",
  },
  {
    icon: UserRound,
    title: "Remote Speaker Management",
    text: "Comprehensive support for remote speakers, including technical setup, coaching and live coordination.",
  },
  {
    icon: Video,
    title: "Recording & Content Capture",
    text: "Multi-camera recording, session capture and content repurposing for on-demand, post-event and internal use.",
  },
  {
    icon: ImageIcon,
    title: "Broadcast Graphics & Playback",
    text: "Custom show graphics, lower thirds, video playback and branded content designed for live and virtual audiences.",
  },
  {
    icon: BarChart3,
    title: "Audience Engagement Tools",
    text: "Live polls, Q&A, chat moderation and interactive experiences that keep both in-room and remote audiences engaged.",
  },
  {
    icon: Settings,
    title: "Control Room & Technical Direction",
    text: "Experienced technical directors and show callers who manage complex live and virtual productions from our control rooms.",
  },
  {
    icon: Network,
    title: "Multi-Site Signal Distribution",
    text: "Reliable signal distribution for multi-site events, connecting multiple locations, stages and remote contributors.",
  },
];

const steps = [
  {
    icon: FileText,
    title: "Strategy & Format",
    text: "Define your goals, audience mix, event format and success metrics.",
  },
  {
    icon: Laptop,
    title: "Platform Planning",
    text: "Recommend and configure the right virtual event platform and integrations for your needs.",
  },
  {
    icon: Settings,
    title: "Technical Preparation",
    text: "Plan signal flow, production systems, graphics, run of show and backup systems.",
  },
  {
    icon: Users,
    title: "Rehearsals",
    text: "Run technical rehearsals with presenters, remote participants and your production team.",
  },
  {
    icon: Play,
    title: "Live Event Execution",
    text: "Manage every element of the live and virtual production so you can focus on your audience.",
  },
];

/* ---------- SECTIONS ---------- */

const HeroSection = () => (
  <section className="bg-white text-[#0b1530]">
    <Container className="py-12 lg:py-16">
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14">
        <div>
          <Eyebrow>Hybrid &amp; Virtual Event Production</Eyebrow>
          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl xl:text-[56px]">
            One Event. Two Audiences. One Coordinated Experience.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-600">
            DXG designs and manages hybrid and virtual event production for in-room attendees,
            remote audiences, presenters, and content teams. We bring together people, technology
            and creative production to deliver a single, seamless experience—no matter where your
            audience is.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <PrimaryButton href="/contact-us">Request a Hybrid Proposal</PrimaryButton>
            <a
              href="#capabilities"
              className="inline-flex items-center justify-center rounded-md border border-gray-300 px-6 py-3 text-sm font-medium text-[#0b1530] transition hover:border-[#1458f5] hover:text-[#1458f5]"
            >
              Explore Hybrid Capabilities
            </a>
          </div>
        </div>
        <div className="aspect-[16/9] w-full rounded-lg bg-gray-300" aria-hidden="true" />
      </div>
    </Container>
  </section>
);

const AudienceSection = () => (
  <section className="relative overflow-hidden bg-gray-500 text-white">
    <div className="absolute inset-0 bg-gradient-to-r from-[#061a4a] via-[#0a2a6e]/90 to-[#0a2a6e]/80" />
    <Container className="relative py-14 lg:py-16">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div>
          <Eyebrow dark>A more connected event experience</Eyebrow>
          <h2 className="text-3xl font-bold leading-tight md:text-[42px]">
            Your Audience Isn&apos;t Just in the Room.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/85">
            Hybrid events require a strategic approach that considers the in-person audience, the
            remote audience, the presenters, and the technical systems connecting them. DXG helps
            you design, produce and manage every element so everyone feels included, engaged, and
            connected.
          </p>
        </div>
        <IconGrid items={eventTypes} />
      </div>
    </Container>
  </section>
);

const CapabilitiesSection = () => (
  <section id="capabilities" className="scroll-mt-20 bg-white py-14 text-[#0b1530] lg:py-16">
    <Container>
      <Eyebrow>Hybrid &amp; virtual capabilities</Eyebrow>
      <h2 className="text-3xl font-bold leading-tight md:text-4xl xl:text-[42px]">
        Complete Production Support for Hybrid and Virtual Events.
      </h2>
      <p className="mt-3 max-w-4xl text-sm leading-relaxed text-gray-600 md:text-base">
        From strategic planning to live execution, DXG provides end-to-end hybrid and virtual
        event production with the right people, technology and creative support.
      </p>

      <CapabilityGrid items={capabilities} />
    </Container>
  </section>
);

const ProcessSection = () => (
  <section className="bg-[#f4f7fc] py-14 text-[#0b1530] lg:py-16">
    <Container>
      <div className="grid gap-4 lg:grid-cols-2 lg:items-end">
        <div>
          <Eyebrow>How we work together</Eyebrow>
          <h2 className="text-3xl font-bold md:text-4xl">How We Manage Hybrid Production.</h2>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-gray-500 lg:justify-self-end lg:text-base">
          A proven process designed to give you confidence at every stage, from initial planning
          to the final broadcast.
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-6 xl:grid-cols-5">
        {steps.map(({ icon: Icon, title, text }, i) => (
          <div key={title} className="relative">
            <div className="flex h-full flex-col rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1458f5] text-xs font-bold text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <Icon className="h-6 w-6 text-[#1458f5]" />
              </div>
              <h3 className="mt-4 text-base font-bold leading-snug">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">{text}</p>
            </div>
            {/* Arrow sits centered in the gap between cards */}
            {i < steps.length - 1 && (
              <ArrowRight className="absolute -right-[19px] top-1/2 z-10 hidden h-3.5 w-3.5 -translate-y-1/2 text-[#1458f5]/60 xl:block" />
            )}
          </div>
        ))}
      </div>
    </Container>
  </section>
);

/* ---------- PAGE ---------- */

const HybridAndVirtualEventProduction = () => {
  return (
    // pt-20 clears the fixed site header (h-20) so it sits on the layout's dark background
    <div className="pt-20">
      <HeroSection />
      <AudienceSection />
      <CapabilitiesSection />
      <ProcessSection />
      <CenteredCTA
        primaryLabel="Request a Hybrid Proposal"
        text="Whether you're planning a hybrid conference, a virtual event, live streaming experience or an executive broadcast, DXG can help you create a connected experience for every audience."
      />
    </div>
  );
};

export default HybridAndVirtualEventProduction;
