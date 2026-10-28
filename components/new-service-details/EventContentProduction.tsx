import Container from "components/shared/Container";
import Image from "next/image";
import FAQItem from "./FAQItem";
import {
  CapabilityGrid,
  CenteredCTA,
  Eyebrow,
  IconGrid,
  PrimaryButton,
  ServiceHero,
  StepCards,
  outlineButton,
} from "./shared";
import {
  BarChart3,
  Building2,
  CircleCheck,
  CirclePlay,
  FileText,
  Folder,
  GraduationCap,
  Heart,
  Lightbulb,
  List,
  Monitor,
  Search,
  Settings,
  Star,
  Stethoscope,
  Trophy,
  Users,
  UsersRound,
} from "lucide-react";

/* ---------- DATA ---------- */

const eventTypes = [
  { icon: Building2, label: "Corporate Events" },
  { icon: UsersRound, label: "Association Events" },
  { icon: Stethoscope, label: "Medical Events" },
  { icon: Heart, label: "Fundraising Events" },
  { icon: GraduationCap, label: "Education Events" },
  { icon: Trophy, label: "Awards Programs" },
  { icon: Star, label: "Branded Experiences" },
  { icon: Users, label: "Executive Meetings" },
];

const capabilities = [
  {
    icon: CirclePlay,
    title: "Opening & Closing Videos",
    text: "High-impact videos that set the tone and leave a lasting impression.",
    image: "/images/seo-services/event-content-production/cap-opening-closing-video.webp",
    alt: "Opening and closing video production for keynote sessions",
  },
  {
    icon: BarChart3,
    title: "Motion Graphics Packages",
    text: "Custom motion graphics that bring your brand to life across the event.",
    image: "/images/seo-services/event-content-production/cap-motion-graphics-package.webp",
    alt: "Custom motion graphics package on LED displays",
  },
  {
    icon: FileText,
    title: "Presentation Design",
    text: "Beautiful, on-brand presentations built for large screens and live audiences.",
    image: "/images/seo-services/event-content-production/cap-presentation-design.webp",
    alt: "Keynote presentation design for live event audiences",
  },
  {
    icon: Monitor,
    title: "Session & Segment Graphics",
    text: "Title slides, bumpers, countdowns and custom graphics for every part of your agenda.",
    image: "/images/seo-services/event-content-production/cap-segment-graphics.webp",
    alt: "Session title slides and countdown bumper graphics",
  },
  {
    icon: Trophy,
    title: "Awards & Recognition Media",
    text: "Custom videos and graphics that celebrate achievements in a big way.",
    image: "/images/seo-services/event-content-production/cap-awards-recognition-media.webp",
    alt: "Awards and recognition event media and celebration visuals",
  },
  {
    icon: UsersRound,
    title: "Sponsor Recognition Content",
    text: "Branded sponsor slides, videos and recognition content that delivers value.",
    image: "/images/seo-services/event-content-production/cap-sponsor-recognition.webp",
    alt: "Sponsor recognition content and brand logo animations",
  },
  {
    icon: CirclePlay,
    title: "Video Editing & Playback Prep",
    text: "Editing, formatting and technical prep for smooth, reliable show playback.",
    image: "/images/seo-services/event-content-production/cap-video-editing.webp",
    alt: "Video editing and show playback timeline preparation",
  },
  {
    icon: Monitor,
    title: "Lower Thirds & Speaker Graphics",
    text: "Custom lower thirds, speaker walk-up graphics and title animations for a professional, polished show.",
    image: "/images/seo-services/event-content-production/cap-lower-third-graphics.webp",
    alt: "Lower third graphic banner and speaker walk-up visuals",
  },
];

const steps = [
  {
    icon: Search,
    title: "Content Discovery",
    text: "Understand your goals, audience and event vision.",
  },
  { icon: List, title: "Content Planning", text: "Define content needs, screen formats and timing." },
  { icon: Lightbulb, title: "Creative Direction", text: "Develop creative approach and visual style." },
  { icon: Monitor, title: "Production & Design", text: "Create, design and format all content assets." },
  {
    icon: Settings,
    title: "Review & Technical Prep",
    text: "Confirm screen specs, align playback cues and prepare final files.",
  },
  {
    icon: CircleCheck,
    title: "Show Ready Delivery",
    text: "Final files delivered, organized and ready for the live event.",
  },
];

const readiness = [
  { icon: Monitor, title: "Screen Specs Confirmed", text: "Every format and resolution." },
  { icon: CirclePlay, title: "Playback Cues Aligned", text: "In sync with your run of show." },
  { icon: FileText, title: "File Versions Controlled", text: "Organized and approved." },
  { icon: Folder, title: "Every Asset Has a Place", text: "Right content, right moment." },
];

const faqs = [
  {
    q: "Can you create content for custom-size LED Walls and wide-screen projection?",
    a: "Yes. We design and format content to the exact resolution and aspect ratio of every screen in your event, including LED walls, projection, and confidence monitors.",
  },
  {
    q: "Can you produce opening videos and motion graphics for a general session?",
    a: "Absolutely. Opening and closing videos, motion graphics packages, and session bumpers are some of the most common content we create.",
  },
  {
    q: "Can you work with presentation and video created by our speakers?",
    a: "Yes. We collect, review, and format speaker presentations and videos so they play back cleanly and match the look of your event.",
  },
  {
    q: "Do you coordinate asset content with our marketing team or agency?",
    a: "We do. We align screen specs, file formats, and playback details with your marketing team or agency so that everything is designed and organized for smooth use on the show site.",
  },
];

/* ---------- SECTIONS ---------- */

const HeroSection = () => (
  <ServiceHero alt="Event Content Production - DXG general session ballroom with branded LED screens">
    <Eyebrow>Event Content Production</Eyebrow>
    <h1 className="max-w-xl text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl xl:text-[56px]">
      What Happens on Screen <span className="text-primary">Shapes the Event Experience.</span>
    </h1>
    <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75">
      DXG creates event content production for conferences, meetings, awards programs, and
      branded experiences, connecting creative work with screens, playback systems, and show
      flow so every visual reinforces your goals in live moment.
    </p>
    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
      <PrimaryButton href="/contact-us">Start Your Content Plan</PrimaryButton>
      <a
        href="#capabilities"
        className={outlineButton}
      >
        Explore Content Services
      </a>
    </div>
  </ServiceHero>
);

const BuiltAroundSection = () => (
  <section className="relative overflow-hidden bg-black text-white">
    <Image
      src="/images/seo-services/event-content-production/event-content-discovery-planning.webp"
      alt="Built around your event"
      fill
      sizes="100vw"
      className="pointer-events-none object-cover object-center opacity-25"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/90 to-black/80" />
    <Container className="relative py-14 lg:py-16">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div>
          <Eyebrow>Built around your event</Eyebrow>
          <h2 className="text-3xl font-bold leading-tight md:text-[42px]">
            Built Around Your Event <span className="text-primary">Rather Than a Content Package.</span>
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/85">
            Every event needs a different content mix. DXG adapts event content production to your
            event type, goals, timing, branding, and audience.
          </p>
        </div>
        <IconGrid items={eventTypes} />
      </div>
    </Container>
  </section>
);

const CapabilitiesSection = () => (
  <section id="capabilities" className="scroll-mt-20 bg-black py-14 text-white lg:py-16">
    <Container>
      <Eyebrow>Our event content capabilities</Eyebrow>
      <h2 className="text-3xl font-bold leading-tight md:text-4xl xl:text-[42px]">
        Complete Event Content Support <span className="text-primary">for the Live Show.</span>
      </h2>
      <p className="mt-3 max-w-4xl text-sm leading-relaxed text-white/75 md:text-base">
        DXG plans, designs, formats, and prepares content for your screen environments and show
        playback.
      </p>
      <CapabilityGrid items={capabilities} variant="inline" />
    </Container>
  </section>
);

const ProcessSection = () => (
  <section className="bg-black pb-14 text-white lg:pb-16">
    <Container>
      <Eyebrow>How we build event content</Eyebrow>
      <h2 className="text-3xl font-bold leading-tight md:text-4xl">
        From Concept to <span className="text-primary">Show Ready Delivery.</span>
      </h2>
      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/75 md:text-base">
        We combine creative, technical and production expertise to make sure every asset looks
        great, plays back smoothly, and supports your event goals.
      </p>

      <StepCards items={steps} />
    </Container>
  </section>
);

const ReadinessSection = () => (
  <section className="bg-[#030c14] py-14 text-white lg:py-16">
    <Container>
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="group relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-primary/20 shadow-xl">
          <Image
            src="/images/seo-services/event-content-production/pre-show-content-readiness.webp"
            alt="Pre-Show Content Readiness - Content readiness review of screen assets, cues, and versions"
            title="Pre-Show Content Readiness"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold md:text-4xl">Pre-Show <span className="text-primary">Content Readiness.</span></h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/75 md:text-base">
            We help you get event content organized, with technical specs clear, playback cues
            mapped, and show-ready files in place so everything runs smoothly on event day.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {readiness.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="flex items-center gap-4 rounded-lg border border-primary/20 bg-[#081624] p-4 shadow-sm"
              >
                <Icon className="h-6 w-6 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-semibold">{title}</p>
                  <p className="text-xs text-white/65">{text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <PrimaryButton href="/contact-us">Start Content Readiness Audit</PrimaryButton>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

const FAQSection = () => {
  // Two independent columns so opening one item doesn't stretch its neighbour
  const columns = [faqs.filter((_, i) => i % 2 === 0), faqs.filter((_, i) => i % 2 === 1)];

  return (
    <section className="bg-black py-14 text-white lg:py-16">
      <Container>
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,3fr)_minmax(0,9fr)] lg:gap-10">
          <div>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="text-3xl font-bold leading-tight md:text-4xl">
              Questions Planners <span className="text-primary">Ask Us.</span>
            </h2>
          </div>
          <div className="grid items-start gap-3 md:grid-cols-2 md:gap-x-6">
            {columns.map((column, c) => (
              <div key={c} className="flex flex-col gap-3">
                {column.map((faq) => (
                  <FAQItem key={faq.q} {...faq} dark />
                ))}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

/* ---------- PAGE ---------- */

const EventContentProduction = () => {
  return (
    // pt-20 clears the fixed site header (h-20) so it sits on the layout's dark background
    <div className="bg-black pt-20">
      <HeroSection />
      <BuiltAroundSection />
      <CapabilitiesSection />
      <ProcessSection />
      <ReadinessSection />
      <FAQSection />
      <CenteredCTA
        primaryLabel="Start Your Content Plan"
        text="Whether you need a single opening video or a full content package for every screen, DXG can help you plan, create, and deliver show-ready content for your event."
        bgImage="/images/seo-services/event-production-management/plan-your-next-event-two.jpeg"
      />
    </div>
  );
};

export default EventContentProduction;
