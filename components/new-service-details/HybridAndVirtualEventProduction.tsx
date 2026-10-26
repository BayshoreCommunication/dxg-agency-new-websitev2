import Container from "components/shared/Container";
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
import Image from "next/image";
import {
  CapabilityGrid,
  CenteredCTA,
  Eyebrow,
  IconGrid,
  PrimaryButton,
  outlineButton,
} from "./shared";

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
    image:
      "/images/seo-services/hybrid-and-virtual-event-production/cap-livestream-speaker-focus.webp",
  },
  {
    icon: Monitor,
    title: "Virtual Platform Support",
    text: "Expert support for leading virtual event platforms with seamless integration, configurations and show management.",
    image:
      "/images/seo-services/hybrid-and-virtual-event-production/cap-virtual-platform.jpg",
  },
  {
    icon: UserRound,
    title: "Remote Speaker Management",
    text: "Comprehensive support for remote speakers, including technical setup, coaching and live coordination.",
    image:
      "/images/seo-services/hybrid-and-virtual-event-production/Remote Speaker Management.png",
  },
  {
    icon: Video,
    title: "Recording & Content Capture",
    text: "Multi-camera recording, session capture and content repurposing for on-demand, post-event and internal use.",
    image:
      "/images/seo-services/hybrid-and-virtual-event-production/cap-recording-capture.jpg",
  },
  {
    icon: ImageIcon,
    title: "Broadcast Graphics & Playback",
    text: "Custom show graphics, lower thirds, video playback and branded content designed for live and virtual audiences.",
    image:
      "/images/seo-services/hybrid-and-virtual-event-production/Broadcast Graphics.png",
  },
  {
    icon: BarChart3,
    title: "Audience Engagement Tools",
    text: "Live polls, Q&A, chat moderation and interactive experiences that keep both in-room and remote audiences engaged.",
    image:
      "/images/seo-services/hybrid-and-virtual-event-production/cap-audience-engagement.jpg",
  },
  {
    icon: Settings,
    title: "Control Room & Technical Direction",
    text: "Experienced technical directors and show callers who manage complex live and virtual productions from our control rooms.",
    image:
      "/images/seo-services/hybrid-and-virtual-event-production/Control Room TD.png",
  },
  {
    icon: Network,
    title: "Multi-Site Signal Distribution",
    text: "Reliable signal distribution for multi-site events, connecting multiple locations, stages and remote contributors.",
    image:
      "/images/seo-services/hybrid-and-virtual-event-production/cap-signal-distribution.jpg",
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
  <section className="bg-black text-white">
    <Container className="py-12 lg:py-16">
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14">
        <div>
          <Eyebrow>Hybrid &amp; Virtual Event Production</Eyebrow>
          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl xl:text-[56px]">
            One Event. Two Audiences.{" "}
            <span className="text-primary">One Coordinated Experience.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75">
            DXG designs and manages hybrid and virtual event production for
            in-room attendees, remote audiences, presenters, and content teams.
            We bring together people, technology and creative production to
            deliver a single, seamless experience—no matter where your audience
            is.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <PrimaryButton href="/contact-us">
              Request a Hybrid Proposal
            </PrimaryButton>
            <a href="#capabilities" className={outlineButton}>
              Explore Hybrid Capabilities
            </a>
          </div>
        </div>
        <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden bg-gray-900 shadow-xl">
          <Image
            src="/images/seo-services/hybrid-and-virtual-event-production/Streaming Event Look.png"
            alt="One Event. Two Audiences. One Coordinated Experience. - DXG Hybrid Event Stage"
            title="Hybrid & Virtual Event Production"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>
    </Container>
  </section>
);

const AudienceSection = () => (
  <section className="relative overflow-hidden bg-gray-900 text-white">
    <Image
      src="/images/seo-services/hybrid-and-virtual-event-production/hybrid-audience-bg.jpg"
      alt="Hybrid event audience"
      fill
      className="object-cover object-center pointer-events-none opacity-25"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/90 to-black/85" />
    <Container className="relative py-14 lg:py-16">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div>
          <Eyebrow>A more connected event experience</Eyebrow>
          <h2 className="text-3xl font-bold leading-tight md:text-[42px]">
            Your Audience Isn&apos;t{" "}
            <span className="text-primary">Just in the Room.</span>
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/85">
            Hybrid events require a strategic approach that considers the
            in-person audience, the remote audience, the presenters, and the
            technical systems connecting them. DXG helps you design, produce and
            manage every element so everyone feels included, engaged, and
            connected.
          </p>
        </div>
        <IconGrid items={eventTypes} />
      </div>
    </Container>
  </section>
);

const CapabilitiesSection = () => (
  <section
    id="capabilities"
    className="scroll-mt-20 bg-black py-14 text-white lg:py-16"
  >
    <Container>
      <Eyebrow>Hybrid &amp; virtual capabilities</Eyebrow>
      <h2 className="text-3xl font-bold leading-tight md:text-4xl xl:text-[42px]">
        Complete Production Support{" "}
        <span className="text-primary">for Hybrid and Virtual Events.</span>
      </h2>
      <p className="mt-3 max-w-4xl text-sm leading-relaxed text-white/75 md:text-base">
        From strategic planning to live execution, DXG provides end-to-end
        hybrid and virtual event production with the right people, technology
        and creative support.
      </p>

      <CapabilityGrid items={capabilities} />
    </Container>
  </section>
);

const ProcessSection = () => (
  <section className="bg-[#030c14] py-14 text-white lg:py-16">
    <Container>
      <div className="grid gap-4 lg:grid-cols-2 lg:items-end">
        <div>
          <Eyebrow>How we work together</Eyebrow>
          <h2 className="text-3xl font-bold md:text-4xl">
            How We Manage{" "}
            <span className="text-primary">Hybrid Production.</span>
          </h2>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-white/65 lg:justify-self-end lg:text-base">
          A proven process designed to give you confidence at every stage, from
          initial planning to the final broadcast.
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-6 xl:grid-cols-5">
        {steps.map(({ icon: Icon, title, text }, i) => (
          <div key={title} className="relative">
            <div className="flex h-full flex-col rounded-xl border border-primary/20 bg-[#081624] p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-black">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-base font-bold leading-snug">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">
                {text}
              </p>
            </div>
            {/* Arrow sits centered in the gap between cards */}
            {i < steps.length - 1 && (
              <ArrowRight className="absolute -right-[19px] top-1/2 z-10 hidden h-3.5 w-3.5 -translate-y-1/2 text-primary/60 xl:block" />
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
    <div className="bg-black pt-20">
      <HeroSection />
      <AudienceSection />
      <CapabilitiesSection />
      <ProcessSection />
      <CenteredCTA
        primaryLabel="Request a Hybrid Proposal"
        text="Whether you're planning a hybrid conference, a virtual event, live streaming experience or an executive broadcast, DXG can help you create a connected experience for every audience."
        bgImage="/images/seo-services/hybrid-and-virtual-event-production/GMA June 2024.jpeg"
      />
    </div>
  );
};

export default HybridAndVirtualEventProduction;
