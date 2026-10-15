import Container from "components/shared/Container";
import Link from "next/link";
import Image from "next/image";
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
  ArrowRight,
  Box,
  Building2,
  Camera,
  CircleCheck,
  FileCheck,
  GraduationCap,
  Grid3x3,
  Heart,
  Lightbulb,
  Map as MapIcon,
  Monitor,
  MonitorCheck,
  Play,
  Search,
  Settings,
  Star,
  Stethoscope,
  Trophy,
  UserRound,
  Users,
  UsersRound,
  Video,
} from "lucide-react";

/* ---------- DATA ---------- */

const capabilities = [
  {
    icon: Monitor,
    title: "General Session Stage Design",
    text: "Stunning stage designs that bring your content, brand, and audience together.",
    image: "/images/seo-services/audiovisual-production-for-events/av-hero-keynote-ballroom.webp",
    alt: "General session stage design with hanging LED screens and lighting",
  },
  {
    icon: Box,
    title: "Scenic Design & Custom Fabrication",
    text: "Custom scenic elements, set pieces, and branded environments built for your event.",
    image: "/images/seo-services/event-content-production/event-content-creative-production.webp",
    alt: "Custom scenic design and stage fabrication elements",
  },
  {
    icon: Grid3x3,
    title: "LED Video Environments",
    text: "Immersive LED video walls and scenic configurations that make a visual impact.",
    image: "/images/seo-services/audiovisual-production-for-events/cap-3-led-people-ideas-impact.webp",
    alt: "Immersive LED video wall environments and scenic configurations",
  },
  {
    icon: Monitor,
    title: "Registration & Attendee Experience",
    text: "Compelling entrance designs for registrations, environments and unique experiences.",
    image: "/images/seo-services/meeting-planning-support/registration-attendee-management.webp",
    alt: "Registration entrance designs and attendee brand touchpoints",
  },
  {
    icon: Lightbulb,
    title: "Lighting Design & Atmosphere",
    text: "Lighting designs that set the mood, enhance content, and transform your environment.",
    image: "/images/seo-services/audiovisual-production-for-events/cap-4-lighting-beams.webp",
    alt: "Stage lighting design and atmospheric lighting beams",
  },
  {
    icon: MapIcon,
    title: "CAD Floor Plans & Spatial Planning",
    text: "Detailed floor plans, 3D layouts, and spatial designs for logistics, audience flow and sightlines.",
    image: "/images/seo-services/event-creative-and-experience-design/technical-creative-planning.webp",
    alt: "CAD floor plans and 3D spatial layout planning",
  },
  {
    icon: Star,
    title: "Branded Event Environments",
    text: "Integrated branded spaces, lounges, and environments that extend your experience beyond the stage.",
    image: "/images/seo-services/corporate-event.webp",
    alt: "Branded corporate event lounge and experiential environments",
  },
  {
    icon: UsersRound,
    title: "Entrance, Registration & Attendee Experience",
    text: "Memorable entrance experiences, registration areas, and wayfinding that set the tone from the start.",
    image: "/images/seo-services/association-event.webp",
    alt: "Grand entrance wayfinding and registration experience",
  },
];

const eventTypes = [
  { icon: Building2, label: "Corporate Events" },
  { icon: UsersRound, label: "Associations Conferences" },
  { icon: Stethoscope, label: "Medical Meetings" },
  { icon: Heart, label: "Fundraising Events" },
  { icon: GraduationCap, label: "Education Programs" },
  { icon: Trophy, label: "Awards Programs" },
  { icon: Star, label: "Branded Experiences" },
  { icon: UserRound, label: "Executive Meetings" },
];

const renderingPoints = [
  { icon: Monitor, label: "Accurate Stage Scale & Screen Sizes" },
  { icon: Lightbulb, label: "Lighting Treatments & Atmosphere" },
  { icon: Users, label: "Audience Sightlines & Room Layouts" },
  { icon: Video, label: "Camera Angles & Broadcast Views" },
  { icon: MapIcon, label: "Speaker Placement & Brand Integration" },
  { icon: FileCheck, label: "Executive Approvals Made Easier" },
];

const roomAndCamera = [
  { icon: UsersRound, title: "Attendee Sightlines", text: "Clear views from every seat." },
  {
    icon: Camera,
    title: "Camera Framing",
    text: "Looks great in-person and on camera.",
  },
  {
    icon: MonitorCheck,
    title: "Screen Visibility",
    text: "Optimized for everyone's seat.",
  },
  {
    icon: UserRound,
    title: "Speaker Focus",
    text: "Environments that highlight your message.",
  },
];

const steps = [
  { icon: Search, title: "Discovery", text: "Understand your goals, brand, and audience." },
  {
    icon: Settings,
    title: "Spatial Planning",
    text: "Develop room layouts, sightlines, and experience flows.",
  },
  {
    icon: Lightbulb,
    title: "Creative Direction",
    text: "Explore concepts, refine ideas, and align approvals.",
  },
  { icon: Box, title: "3D Rendering", text: "Bring the design to life with detailed visuals." },
  {
    icon: Settings,
    title: "Technical Review",
    text: "Validate designs with your production team and technical tools.",
  },
  {
    icon: CircleCheck,
    title: "Final Design Package",
    text: "Deliver approved designs, specs, and assets for production.",
  },
];

const caseStats = [
  { icon: Users, value: "1,500", label: "Attendees" },
  { icon: Monitor, value: "5", label: "General Sessions" },
  { icon: Grid3x3, value: "12", label: "Breakout Rooms" },
  { icon: UsersRound, value: "One", label: "Dedicated Design & Production Team" },
];

/* ---------- SECTIONS ---------- */

const HeroSection = () => (
  <section className="relative overflow-hidden bg-black text-white">
    <Image
      src="/images/seo-services/event-creative-and-experience-design/event-creative-experience-design-banner.webp"
      alt="Design the Stage and Space Around Your Event - 2025 Annual Leadership Summit"
      title="Event Creative & Experience Design"
      fill
      priority
      sizes="100vw"
      className="pointer-events-none object-cover object-center"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/35" />
    <Container className="relative py-16 lg:py-24">
      <div className="max-w-xl">
        <Eyebrow>Event Creative &amp; Experience Design</Eyebrow>
        <h1 className="text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl xl:text-[56px]">
          Design the Stage and Space <span className="text-primary">Around Your Event.</span>
        </h1>
        <p className="mt-5 text-base leading-relaxed text-white/85">
          DXG designs stages, scenic environments, branded spaces and attendee experiences that are
          both visually powerful and technically reliable. From initial concept to final
          production, we create environments that bring your brand, message, and audience
          together.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <PrimaryButton href="/contact-us">Book a Working Session</PrimaryButton>
          <a
            href="#renderings"
            className={outlineButton}
          >
            Explore 3D Renderings
          </a>
        </div>
      </div>
    </Container>
  </section>
);

const CapabilitiesSection = () => (
  <section className="bg-black py-14 text-white lg:py-16">
    <Container>
      <Eyebrow>Creative experiences driven capabilities</Eyebrow>
      <h2 className="text-3xl font-bold leading-tight md:text-4xl xl:text-[42px]">
        Complete Creative Support <span className="text-primary">for Event Environments.</span>
      </h2>
      <p className="mt-3 max-w-4xl text-sm leading-relaxed text-white/75 md:text-base">
        DXG designs every visual and physical element of your event, from stages and scenic
        environments to branded spaces and attendee experiences.
      </p>
      <CapabilityGrid items={capabilities} variant="inline" />
    </Container>
  </section>
);

const ProductionRealitySection = () => (
  <section className="relative overflow-hidden bg-black text-white">
    <Image
      src="/images/seo-services/audiovisual-production-for-events/av-production-action-bts.webp"
      alt="Creative ideas need production reality"
      fill
      sizes="100vw"
      className="pointer-events-none object-cover object-center opacity-25"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/90 to-black/80" />
    <Container className="relative py-14 lg:py-16">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div>
          <Eyebrow>Creative ideas. Real-world execution.</Eyebrow>
          <h2 className="text-3xl font-bold leading-tight md:text-[42px]">
            Creative Ideas Need <span className="text-primary">Production Reality.</span>
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/85">
            DXG brings creative vision and technical expertise together so your event looks
            incredible, runs smoothly, and achieves your goals. Our design, production, and
            engineering teams work as one from concept through execution.
          </p>
        </div>
        <IconGrid items={eventTypes} />
      </div>
    </Container>
  </section>
);

const RenderingsSection = () => (
  <section id="renderings" className="scroll-mt-20 bg-black py-14 text-white lg:py-16">
    <Container>
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="group relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-primary/20 shadow-xl">
          <Image
            src="/images/seo-services/event-creative-and-experience-design/pre-visualization-3d-rendering.webp"
            alt="Preview the Event Before Production Begins - 3D Renderings & Pre-Visualization"
            title="3D Renderings & Pre-Visualization"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div>
          <Eyebrow>3D renderings &amp; pre-visualization</Eyebrow>
          <h2 className="text-3xl font-bold leading-tight md:text-4xl">
            Preview the Event <span className="text-primary">Before Production Begins.</span>
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/75 md:text-base">
            Our 3D renderings and pre-visualization process helps you see your event environment,
            make informed decisions, and align your team before anything goes into production.
          </p>
          <ul className="mt-6 grid gap-x-6 gap-y-4 sm:grid-cols-2">
            {renderingPoints.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3 text-sm text-white/80">
                <Icon className="h-5 w-5 shrink-0 text-primary" />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  </section>
);

const RoomAndCameraSection = () => (
  <section className="bg-[#071826] text-white">
    <Container className="py-14 lg:py-16">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div>
          <Eyebrow>A seamless experience for every audience</Eyebrow>
          <h2 className="text-3xl font-bold leading-tight md:text-[42px]">
            Design for <span className="text-primary">the Room and the Camera.</span>
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/85">
            DXG designs event environments that work for everyone in the room and everyone
            watching online. We consider attendee sightlines, camera coverage, screen visibility,
            and speaker focus from the very beginning.
          </p>
        </div>
        <IconFeatures items={roomAndCamera} />
      </div>
    </Container>
  </section>
);

const ProcessSection = () => (
  <section className="bg-black py-14 text-white lg:py-16">
    <Container>
      <Eyebrow>Our creative design process</Eyebrow>
      <h2 className="text-3xl font-bold leading-tight md:text-4xl">
        From Concept to <span className="text-primary">Show-Ready Design.</span>
      </h2>
      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/75 md:text-base">
        A collaborative, transparent process that turns your goals into a fully realized event
        environment.
      </p>
      <StepCards items={steps} />
    </Container>
  </section>
);

const CaseStudySection = () => (
  <section className="bg-[#030c14] py-14 text-white lg:py-16">
    <Container>
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="group relative flex aspect-[16/9] items-center justify-center overflow-hidden rounded-xl border border-primary/20 shadow-xl">
          <Image
            src="/images/seo-services/event-creative-and-experience-design/dual-optics-stage-design.webp"
            alt="Creative Design in Action - Client Event Showcase"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/20" />
          <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/80 bg-black/40 text-white shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
            <Play className="ml-1 h-7 w-7 fill-white" />
          </span>
          <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/90 via-black/50 to-transparent px-5 pb-4 pt-10 text-white">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Client Event Showcase</p>
            <p className="mt-1 text-xs text-white/90">
              See how DXG turns creative ideas into unforgettable experiences.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold md:text-4xl">Creative Design <span className="text-primary">in Action</span></h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/75 md:text-base">
            A multi-day national conference featuring a fully custom stage design, immersive LED
            environments, and branded spaces that brought the client&apos;s vision to life.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-4">
            {caseStats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-start gap-3">
                <Icon className="mt-1 h-6 w-6 shrink-0 text-primary" />
                <div>
                  <p className="text-lg font-bold leading-none text-primary">{value}</p>
                  <p className="mt-1 text-xs text-white/65">{label}</p>
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

/* ---------- PAGE ---------- */

const EventCreativeExperienceDesign = () => {
  return (
    // pt-20 clears the fixed site header (h-20) so it sits on the layout's dark background
    <div className="bg-black pt-20">
      <HeroSection />
      <CapabilitiesSection />
      <ProductionRealitySection />
      <RenderingsSection />
      <RoomAndCameraSection />
      <ProcessSection />
      <CaseStudySection />
      <CenteredCTA
        eyebrow="Let's create something extraordinary."
        primaryLabel="Book a Working Session"
        secondaryLabel="Have a New Event Concept"
        text="Share your goals with us and we'll help you explore creative options, visual ideas, and technical options."
        bgImage="/images/seo-services/audiovisual-production-for-events/av-bottom-cta-blue-crowd.webp"
      />
    </div>
  );
};

export default EventCreativeExperienceDesign;
