import Container from "components/shared/Container";
import Link from "next/link";
import Image from "next/image";
import { CenteredCTA, Eyebrow, IconGrid, PrimaryButton } from "./shared";
import {
  ArrowRight,
  AudioLines,
  CalendarDays,
  Cross,
  FileText,
  GraduationCap,
  Grid3x3,
  Heart,
  Layers,
  LayoutGrid,
  Monitor,
  Play,
  Presentation,
  Radio,
  Settings,
  Sun,
  UserRound,
  Users,
  UsersRound,
  Video,
} from "lucide-react";

/* ---------- DATA ---------- */

const eventTypes = [
  { icon: Users, label: "General Sessions" },
  { icon: Presentation, label: "Breakout Rooms" },
  { icon: UserRound, label: "Executive Meetings" },
  { icon: UsersRound, label: "Association Conferences" },
  { icon: CalendarDays, label: "Corporate Events" },
  { icon: Heart, label: "Fundraisers" },
  { icon: GraduationCap, label: "Education Programs" },
  { icon: Cross, label: "Medical Meetings" },
];

const capabilities = [
  {
    icon: AudioLines,
    title: "Audio Production",
    text: "Clear, consistent sound design and live mixing for keynotes, panel discussions, and every room in your event.",
    image: "/images/seo-services/audiovisual-production-for-events/cap-1-audio-allen-heath.webp",
    alt: "Audio production Allen & Heath digital mixing console",
  },
  {
    icon: Monitor,
    title: "Video & Projection",
    text: "Projection systems, screens, video switching, image processing, and display solutions designed for clarity and impact.",
    image: "/images/seo-services/audiovisual-production-for-events/cap-2-video-projection-mountain.webp",
    alt: "Video and projection systems for corporate event keynote stage",
  },
  {
    icon: Grid3x3,
    title: "LED Video Walls",
    text: "Indoor and outdoor LED displays, custom configurations, and creative screen designs that bring your content to life.",
    image: "/images/seo-services/audiovisual-production-for-events/cap-3-led-people-ideas-impact.webp",
    alt: "Curved LED video wall displaying People Ideas Impact",
  },
  {
    icon: Sun,
    title: "Lighting Production",
    text: "Stage lighting, architectural lighting, and creative design environments that transform room and sets the mood.",
    image: "/images/seo-services/audiovisual-production-for-events/cap-4-lighting-beams.webp",
    alt: "Concert and conference stage lighting production with blue beams",
  },
  {
    icon: Video,
    title: "Cameras & IMAG",
    text: "Multi-camera production, camera systems, live program feeds, PTZ cameras, and live event video feeds.",
    image: "/images/seo-services/audiovisual-production-for-events/cap-5-cameras-operator.webp",
    alt: "Live event cameraman and broadcast camera operation",
  },
  {
    icon: Layers,
    title: "Staging, Scenic & Rigging",
    text: "Stages, set drops, scenic elements, truss systems, and rigging solutions to create engaging environments designed to look strong from every angle.",
    image: "/images/seo-services/audiovisual-production-for-events/cap-6-staging-scenic-rigging.webp",
    alt: "Event staging, scenic structures and overhead truss rigging",
  },
  {
    icon: FileText,
    title: "Presentation Management & Playback",
    text: "PowerPoint support, show control, video playback, rehearsals, confidence monitoring, timing, and file management.",
    image: "/images/seo-services/audiovisual-production-for-events/cap-7-presentation-playback.webp",
    alt: "Front of house presentation management and show control",
  },
  {
    icon: Radio,
    title: "Recording & Streaming",
    text: "Session recording, multi-track audio, video capture, encoding, and live streaming solutions.",
    image: "/images/seo-services/audiovisual-production-for-events/cap-8-recording-streaming-rack.webp",
    alt: "Rackmount broadcast video encoders and live streaming units",
  },
  {
    icon: Settings,
    title: "Production Infrastructure",
    text: "Power distribution, AV networking, fiber and signal distribution, inventory systems, and integrated infrastructure for a reliable, scalable production environment.",
    image: "/images/seo-services/audiovisual-production-for-events/cap-9-production-infrastructure-power.webp",
    alt: "Backstage electrical power distribution and power-lock cabling",
  },
];

const caseTabs = ["General Session", "Multi-Room Conference", "Live Content Management"];

const caseStats = [
  { icon: Users, value: "1,500", label: "Attendees" },
  { icon: LayoutGrid, value: "16", label: "Breakout Rooms" },
  { icon: UsersRound, value: "One", label: "Dedicated Production Team" },
];

/* ---------- SECTIONS ---------- */

const HeroSection = () => (
  <section className="bg-white text-[#0b1530]">
    <Container className="py-12 lg:py-16">
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14">
        <div>
          <Eyebrow>Audiovisual Production for Events</Eyebrow>
          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl xl:text-[56px]">
            Designed by Engineers. Built around your event.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-600">
            From the general session stage to every breakout room, DXG designs and delivers
            audiovisual production that brings your event together. One experienced team, clear
            communication, and solutions built around your goals.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <PrimaryButton href="/contact-us">Request an AV Proposal</PrimaryButton>
            <a
              href="#capabilities"
              className="inline-flex items-center justify-center rounded-md border border-gray-300 px-6 py-3 text-sm font-medium text-[#0b1530] transition hover:border-[#1458f5] hover:text-[#1458f5]"
            >
              Explore Capabilities
            </a>
          </div>
        </div>
        <div className="group relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-gray-100 shadow-xl">
          <Image
            src="/images/seo-services/audiovisual-production-for-events/av-hero-keynote-ballroom.webp"
            alt="Audiovisual Production for Events - General Session Keynote Stage"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    </Container>
  </section>
);

const GoalsSection = () => (
  <section className="relative overflow-hidden bg-[#061a4a] text-white">
    <Image
      src="/images/seo-services/audiovisual-production-for-events/audiovisual-engineers-at-tech-table.webp"
      alt="DXG audiovisual engineers at tech table"
      fill
      sizes="100vw"
      className="object-cover object-center"
      priority
    />
    <div className="absolute inset-0 bg-gradient-to-r from-[#061a4a]/95 via-[#061a4a]/90 to-[#0a2a6e]/75" />
    <Container className="relative py-14 lg:py-16">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div>
          <Eyebrow dark>Our approach starts with your goals</Eyebrow>
          <h2 className="text-3xl font-bold leading-tight md:text-[42px]">
            Your Goals Come First. The Technology Follows.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/85">
            Before we recommend equipment, DXG wants to understand the goals of your event, along
            with the agenda, presenters, audience, and budget. Those goals shape how the production
            is designed.
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
      <Eyebrow>Audiovisual production capabilities</Eyebrow>
      <h2 className="text-3xl font-bold leading-tight md:text-4xl xl:text-[42px]">
        Complete Audio Visual Production for Every Part of Your Event.
      </h2>
      <p className="mt-3 max-w-4xl text-sm leading-relaxed text-gray-600 md:text-base">
        DXG can provide and manage every technical element your program needs, from production
        systems to stage design, all delivered with one experienced team.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map(({ icon: Icon, title, text, image, alt }, i) => (
          <article
            key={title}
            className="group flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm transition hover:shadow-md"
          >
            <div className="relative aspect-[16/8] overflow-hidden bg-gray-900">
              <Image
                src={image}
                alt={alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
            <div className="flex flex-1 gap-4 p-5">
              <span className="relative z-10 -mt-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gray-100 bg-white shadow-md">
                <Icon className="h-5 w-5 text-[#1458f5]" />
              </span>
              <div>
                <h3 className="text-base font-bold leading-snug">
                  {i + 1}. {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{text}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Container>
  </section>
);

const TechnicalSystemsSection = () => (
  <section className="relative overflow-hidden bg-[#061a4a] text-white">
    <Image
      src="/images/seo-services/audiovisual-production-for-events/av-technical-systems-server-rack.webp"
      alt="The Technical Systems Behind Every Show"
      fill
      sizes="100vw"
      className="object-cover object-right"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-[#061a4a] via-[#061a4a]/85 to-transparent" />
    <Container className="relative py-14 lg:py-16">
      <div className="max-w-xl">
        <h2 className="text-3xl font-bold leading-tight md:text-4xl">
          The Technical Systems Behind Every Show.
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-white/85 md:text-base">
          From power and signal distribution to AV networking and show communications. DXG designs
          the infrastructure that keeps your event running reliably from load-in to load-out.
        </p>
      </div>
    </Container>
  </section>
);

const ProductionInActionSection = () => (
  <section className="bg-white py-12 text-[#0b1530] lg:py-16">
    <Container>
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="group relative flex aspect-[16/9] flex-col items-center justify-center overflow-hidden rounded-xl border border-gray-100 text-center shadow-lg">
          <Image
            src="/images/seo-services/audiovisual-production-for-events/av-production-action-bts.webp"
            alt="DXG Production in Action - BTS Video"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold md:text-4xl">Production in Action</h2>
          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-600">
            {caseTabs.map((tab, i) => (
              <span
                key={tab}
                className={`border-l-2 pl-3 ${i === 0 ? "border-[#1458f5]" : "border-gray-300"}`}
              >
                {tab}
              </span>
            ))}
          </div>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-600 md:text-base">
            From keynotes stages to multi-room conferences, DXG builds production systems that
            support the show, the schedule, and the audience experience.
          </p>

          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {caseStats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-start gap-3">
                <Icon className="mt-1 h-6 w-6 shrink-0 text-[#1458f5]" />
                <div>
                  <p className="text-lg font-bold leading-none text-[#1458f5]">{value}</p>
                  <p className="mt-1 text-xs text-gray-500">{label}</p>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/experiences-created"
            className="mt-7 inline-flex items-center gap-2 rounded-md border border-[#1458f5] px-6 py-2.5 text-sm font-medium text-[#1458f5] transition hover:bg-[#1458f5]/5"
          >
            View the Full Case Study
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </Container>
  </section>
);

const FinalCTASection = () => (
  <section className="relative overflow-hidden bg-[#061a4a] text-white">
    <Image
      src="/images/seo-services/audiovisual-production-for-events/av-bottom-cta-blue-crowd.webp"
      alt="Let's Talk About What You're Planning"
      fill
      sizes="100vw"
      className="object-cover object-center"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-[#061a4a]/90 via-[#0a2a6e]/80 to-[#061a4a]/75" />
    <Container className="relative py-14 text-center lg:py-16">
      <h2 className="text-3xl font-bold md:text-4xl">Let&apos;s Talk About What You&apos;re Planning.</h2>
      <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/90 md:text-base">
        Whether you are preparing a new event, building an RFP, or reviewing an existing proposal,
        DXG can help you understand your options and align production with your event&apos;s goals
        and budget.
      </p>
      <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
        <PrimaryButton href="/contact-us">Request an AV Proposal</PrimaryButton>
        <Link
          href="/contact-us"
          className="inline-flex items-center justify-center rounded-md border border-white/80 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/15"
        >
          Review My Existing Proposal
        </Link>
      </div>
    </Container>
  </section>
);

/* ---------- PAGE ---------- */

const AudiovisualProduction = () => {
  return (
    // pt-20 clears the fixed site header (h-20) so it sits on the layout's dark background
    <div className="pt-20">
      <HeroSection />
      <GoalsSection />
      <CapabilitiesSection />
      <TechnicalSystemsSection />
      <ProductionInActionSection />
      <FinalCTASection />
    </div>
  );
};

export default AudiovisualProduction;
