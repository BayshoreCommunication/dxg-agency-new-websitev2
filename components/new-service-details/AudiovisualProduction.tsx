import Container from "components/shared/Container";
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
import Image from "next/image";
import Link from "next/link";
import { Eyebrow, IconGrid, PrimaryButton, outlineButton } from "./shared";

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
    image:
      "/images/seo-services/audiovisual-production-for-events/Audio Production.png",
    alt: "Audio production Allen & Heath digital mixing console and stage sound mixing",
  },
  {
    icon: Monitor,
    title: "Video & Projection",
    text: "Projection systems, screens, video switching, image processing, and display solutions designed for clarity and impact.",
    image:
      "/images/seo-services/audiovisual-production-for-events/Video &. Projection.jpeg",
    alt: "Video and projection systems for corporate event keynote stage",
  },
  {
    icon: Grid3x3,
    title: "LED Video Walls",
    text: "Indoor and outdoor LED displays, custom configurations, and creative screen designs that bring your content to life.",
    image:
      "/images/seo-services/audiovisual-production-for-events/LED Video Walls.jpeg",
    alt: "Curved LED video wall with custom digital stage graphics",
  },
  {
    icon: Sun,
    title: "Lighting Production",
    text: "Stage lighting, architectural lighting, and creative design environments that transform room and sets the mood.",
    image:
      "/images/seo-services/audiovisual-production-for-events/Lighting Production.png",
    alt: "Concert and conference stage lighting production with dynamic beams",
  },
  {
    icon: Video,
    title: "Cameras & IMAG",
    text: "Multi-camera production, camera systems, live program feeds, PTZ cameras, and live event video feeds.",
    image:
      "/images/seo-services/audiovisual-production-for-events/Cameras & IMAG.jpeg",
    alt: "Live event cameraman and broadcast camera operation",
  },
  {
    icon: Layers,
    title: "Staging Scenic",
    text: "Stages, set drops, scenic elements, truss systems solutions to create engaging environments designed to look strong from every angle.",
    image:
      "/images/seo-services/audiovisual-production-for-events/Staging & Scenic.png",
    alt: "Event staging, scenic structures and overhead truss rigging",
  },
  {
    icon: FileText,
    title: "Presentation Management & Playback",
    text: "PowerPoint support, show control, video playback, rehearsals, confidence monitoring, timing, and file management.",
    image:
      "/images/seo-services/audiovisual-production-for-events/Presentation Management.png",
    alt: "Front of house presentation management and show control",
  },
  {
    icon: Radio,
    title: "Recording & Streaming",
    text: "Session recording, multi-track audio, video capture, encoding, and live streaming solutions.",
    image:
      "/images/seo-services/audiovisual-production-for-events/Recording & Streaming.png",
    alt: "Rackmount broadcast video encoders and live streaming units",
  },
  {
    icon: Settings,
    title: "Production Infrastructure",
    text: "Power distribution, AV networking, fiber and signal distribution, and integrated infrastructure for a reliable, scalable production environment.",
    image:
      "/images/seo-services/audiovisual-production-for-events/Production Infrastructure.png",
    alt: "Backstage electrical power distribution, AV cabling, and power infrastructure",
  },
];

const caseTabs = [
  "General Session",
  "Multi-Room Conference",
  "Live Content Management",
];

const caseStats = [
  { icon: Users, value: "1,500", label: "Attendees" },
  { icon: LayoutGrid, value: "16", label: "Breakout Rooms" },
  { icon: UsersRound, value: "One", label: "Dedicated Production Team" },
];

/* ---------- SECTIONS ---------- */

const HeroSection = () => (
  <section className="bg-black text-white">
    <Container className="py-12 lg:py-16">
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14">
        <div>
          <Eyebrow>Audiovisual Production for Events</Eyebrow>
          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl xl:text-[56px]">
            Designed by Engineers.{" "}
            <span className="text-primary">Built around your event.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75">
            From the general session stage to every breakout room, DXG designs
            and delivers audiovisual production that brings your event together.
            One experienced team, clear communication, and solutions built
            around your goals.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <PrimaryButton href="/contact-us">
              Request an AV Proposal
            </PrimaryButton>
            <a href="#capabilities" className={outlineButton}>
              Explore Capabilities
            </a>
          </div>
        </div>
        <div className="group relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-primary/20">
          <Image
            src="/images/seo-services/event-production-management/EventProductionManagement.png"
            alt="Audiovisual Production for Events - DXG general session ballroom with branded LED screens"
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
  <section className="bg-[#071826] text-white">
    <Container className="py-14 lg:py-16">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div>
          <Eyebrow>Our approach starts with your goals</Eyebrow>
          <h2 className="text-3xl font-bold leading-tight md:text-[42px]">
            Your Goals Come First.{" "}
            <span className="text-primary">The Technology Follows.</span>
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/80">
            Before we recommend equipment, DXG wants to understand the goals of
            your event, along with the agenda, presenters, audience, and budget.
            Those goals shape how the production is designed.
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
      <Eyebrow>Audiovisual production capabilities</Eyebrow>
      <h2 className="text-3xl font-bold leading-tight md:text-4xl xl:text-[42px]">
        Complete Audio Visual Production{" "}
        <span className="text-primary">for Every Part of Your Event.</span>
      </h2>
      <p className="mt-3 max-w-4xl text-sm leading-relaxed text-white/75 md:text-base">
        DXG can provide and manage every technical element your program needs,
        from production systems to stage design, all delivered with one
        experienced team.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map(({ icon: Icon, title, text, image, alt }) => (
          <article
            key={title}
            className="group flex flex-col overflow-hidden rounded-xl border border-primary/20 bg-[#081624] transition duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_18px_40px_rgba(46,198,245,0.12)]"
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-800">
              <Image
                src={image}
                alt={alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="relative flex flex-1 flex-col p-6 pt-0">
              <span className="relative -mt-6 mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-primary/50 bg-[#0b2237] text-primary shadow-md">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="text-lg font-bold leading-snug">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">
                {text}
              </p>
            </div>
          </article>
        ))}
      </div>
    </Container>
  </section>
);

const TechnicalSystemsSection = () => (
  <section className="relative overflow-hidden bg-black text-white">
    <Image
      src="/images/seo-services/audiovisual-production-for-events/system-redundancy-backup-audio-laptop.webp"
      alt="The Technical Systems Behind Every Show"
      fill
      sizes="100vw"
      className="object-cover object-right"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/30" />
    <Container className="relative py-14 lg:py-16">
      <div className="max-w-xl">
        <h2 className="text-3xl font-bold leading-tight md:text-4xl">
          The Technical Systems{" "}
          <span className="text-primary">Behind Every Show.</span>
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-white/80 md:text-base">
          From power and signal distribution to AV networking and show
          communications. DXG designs the infrastructure that keeps your event
          running reliably from load-in to load-out.
        </p>
      </div>
    </Container>
  </section>
);

const ProductionInActionSection = () => (
  <section className="bg-[#030c14] py-12 text-white lg:py-16">
    <Container>
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="group relative flex aspect-[16/9] w-full flex-col items-center justify-center overflow-hidden rounded-xl border border-primary/20">
          <Image
            src="/images/seo-services/event-production-management/producer-at-front-of-house.webp"
            alt="DXG Production in Action - BTS Video"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/50 transition-colors group-hover:bg-black/40" />
          <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary bg-black/30 text-primary shadow-md transition-transform duration-300 group-hover:scale-110">
            <Play className="ml-1 h-7 w-7 fill-primary" />
          </span>
          <p className="relative z-10 mt-4 text-xs font-bold uppercase tracking-widest text-white">
            BTS Video Placeholder
          </p>
          <p className="relative z-10 mt-1 text-xs text-white/80">
            A behind-the-scenes look at DXG in action
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold md:text-4xl">
            Production <span className="text-primary">in Action</span>
          </h2>
          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
            {caseTabs.map((tab, i) => (
              <span
                key={tab}
                className={`border-l-2 pl-3 font-medium ${
                  i === 0
                    ? "border-primary text-white"
                    : "border-white/30 text-white/60"
                }`}
              >
                {tab}
              </span>
            ))}
          </div>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/75 md:text-base">
            From keynotes stages to multi-room conferences, DXG builds
            production systems that support the show, the schedule, and the
            audience experience.
          </p>

          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {caseStats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-start gap-3">
                <Icon className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
                <div>
                  <p className="text-xl font-bold leading-none text-primary">
                    {value}
                  </p>
                  <p className="mt-1 text-xs font-medium text-white/65">
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/experiences-created"
            className="mt-7 inline-flex items-center gap-2 rounded-full border border-primary px-6 py-2.5 text-sm font-semibold text-primary transition hover:bg-primary/10"
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
  <section className="relative overflow-hidden bg-black text-white">
    <Image
      src="/images/seo-services/event-production-management/plan-your-next-event-two.jpeg"
      alt="Let's Talk About What You're Planning"
      fill
      sizes="100vw"
      className="object-cover object-center"
    />
    <div className="absolute inset-0 bg-black/80" />
    <Container className="relative py-14 text-center lg:py-16">
      <h2 className="text-3xl font-bold md:text-4xl">
        Let&apos;s Talk About{" "}
        <span className="text-primary">What You&apos;re Planning.</span>
      </h2>
      <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/80 md:text-base">
        Whether you are preparing a new event, building an RFP, or reviewing an
        existing proposal, DXG can help you understand your options and align
        production with your event&apos;s goals and budget.
      </p>
      <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
        <PrimaryButton href="/contact-us">Request an AV Proposal</PrimaryButton>
        {/* <Link href="/contact-us" className={outlineButton}>
          Review My Existing Proposal
        </Link> */}
      </div>
    </Container>
  </section>
);

/* ---------- PAGE ---------- */

const AudiovisualProduction = () => {
  return (
    // pt-20 clears the fixed site header (h-20)
    <div className="bg-black pt-20">
      <HeroSection />
      <GoalsSection />
      <CapabilitiesSection />
      <TechnicalSystemsSection />
      {/* Temporarily hidden */}
      {/* <ProductionInActionSection /> */}
      <FinalCTASection />
    </div>
  );
};

export default AudiovisualProduction;
