import Container from "components/shared/Container";
import Image from "next/image";
import {
  CenteredCTA,
  Eyebrow,
  IconGrid,
  PrimaryButton,
  QuadCapabilities,
  StepCards,
  outlineButton,
} from "./shared";
import {
  Building2,
  CalendarCheck,
  Camera,
  FileText,
  GraduationCap,
  Handshake,
  Heart,
  LayoutGrid,
  MapPin,
  MessageSquare,
  MonitorPlay,
  Play,
  Send,
  Settings,
  Share2,
  Star,
  Stethoscope,
  Target,
  Trophy,
  UserRound,
  Users,
  UsersRound,
  Video,
} from "lucide-react";

/* ---------- DATA ---------- */

const eventTypes = [
  { icon: Building2, label: "Corporate Events" },
  { icon: UsersRound, label: "Association Conferences" },
  { icon: Stethoscope, label: "Medical Events" },
  { icon: Heart, label: "Nonprofit Events" },
  { icon: GraduationCap, label: "Education Events" },
  { icon: UserRound, label: "Executive Meetings" },
  { icon: Trophy, label: "Awards Programs" },
  { icon: LayoutGrid, label: "Multi-Room Conferences" },
];

const captureImages = [
  {
    src: "/images/seo-services/event-videography-and-photography/cap-event-photography.jpg",
    alt: "Event photographer capturing a keynote session from the audience",
  },
  {
    src: "/images/seo-services/event-videography-and-photography/cap-keynote-coverage.jpg",
    alt: "Keynote speaker on stage during a full general session",
  },
  {
    src: "/images/seo-services/event-videography-and-photography/cap-event-recap.jpg",
    alt: "Video editor preparing event recap footage at a production desk",
  },
  {
    src: "/images/seo-services/event-videography-and-photography/cap-social-clips.jpg",
    alt: "Attendees capturing a live session on their phones",
  },
];

const captureGroups = [
  {
    icon: Camera,
    title: "Event Photography",
    items: [
      { icon: Camera, label: "Stage & Session Coverage" },
      { icon: UserRound, label: "Executive & Speaker Portraits" },
      { icon: Users, label: "Networking & Candid Moments" },
      { icon: Star, label: "Brand, Sponsor & Event Details" },
    ],
  },
  {
    icon: Video,
    title: "Event Videography",
    items: [
      { icon: Video, label: "Keynote & Session Recording" },
      { icon: MessageSquare, label: "Interviews & Testimonials" },
      { icon: Play, label: "Event Recaps & Highlight Films" },
      { icon: Share2, label: "Social & Promotional Content" },
    ],
  },
];

const strategyPointsCol1 = [
  {
    icon: Target,
    title: "Content Priorities",
    text: "Identify must-capture moments and goals.",
  },
  {
    icon: FileText,
    title: "Shot Lists",
    text: "Detailed shot lists for key sessions.",
  },
  {
    icon: Users,
    title: "Interview Scheduling",
    text: "Plan speakers, executives, and attendees.",
  },
];

const strategyPointsCol2 = [
  {
    icon: Handshake,
    title: "Sponsor Deliverables",
    text: "Coordinate branded content and activations.",
  },
  {
    icon: MapPin,
    title: "Room-by-Room Coverage",
    text: "Plan for multiple rooms and concurrent sessions.",
  },
  {
    icon: Settings,
    title: "Post-Event Uses",
    text: "Format content for marketing, training, and ongoing engagement.",
  },
];

const processSteps = [
  {
    icon: FileText,
    title: "Discovery",
    text: "Learn about your event goals, audience, and content needs.",
  },
  {
    icon: Target,
    title: "Content Priorities",
    text: "Identify key moments, speakers, and required deliverables.",
  },
  {
    icon: CalendarCheck,
    title: "Coverage Planning",
    text: "Build a detailed plan for video and photo coverage.",
  },
  {
    icon: Camera,
    title: "Show Day Capture",
    text: "Execute on-site with an experienced and discreet team.",
  },
  {
    icon: MonitorPlay,
    title: "Post Production",
    text: "Edit, organize, and prepare content for your use cases.",
  },
  {
    icon: Send,
    title: "Final Delivery",
    text: "Deliver optimized videos, photos, and social content on time.",
  },
];

/* ---------- SECTIONS ---------- */

/* 1. Hero Section */
const HeroSection = () => (
  <section className="bg-black text-white">
    <Container className="py-12 lg:py-16">
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14">
        <div>
          <Eyebrow>Event Videography &amp; Photography</Eyebrow>
          <h1 className="text-4xl font-bold leading-[1.08] tracking-tight md:text-5xl xl:text-[54px]">
            Capture the Event.
            <br />
            Create Content That
            <br />
            <span className="text-primary">Keeps Working.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75">
            DXG plans and captures event videography and photography for
            keynotes, sessions, interviews, testimonials, recap videos, social
            content, and photography that stays useful long after the event ends.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <PrimaryButton href="/contact-us">
              Build Your Capture Plan
            </PrimaryButton>
            <a href="#capabilities" className={outlineButton}>
              Explore Content Coverage
            </a>
          </div>
        </div>
        <div className="group relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-primary/20 shadow-2xl">
          <Image
            src="/images/seo-services/event-production-management/EventProductionManagement.png"
            alt="Event Videography & Photography - DXG general session ballroom with branded LED screens"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    </Container>
  </section>
);

/* 2. Event Types We Support */
const EventTypesSection = () => (
  <section className="bg-[#071826] text-white">
    <Container className="py-14 lg:py-16">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div>
          <Eyebrow>Event Types We Support</Eyebrow>
          <h2 className="text-3xl font-bold leading-tight md:text-[42px]">
            Coverage Built Around{" "}
            <span className="text-primary">Your Event.</span>
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/80">
            We build videography and photography coverage around your agenda,
            priorities, audience, and future content use — so you get the right
            moments, the right angles, and content that delivers value long
            after the event.
          </p>
        </div>
        <IconGrid items={eventTypes} />
      </div>
    </Container>
  </section>
);

/* 3. Our Capabilities */
const CapabilitiesSection = () => (
  <QuadCapabilities
    id="capabilities"
    eyebrow="Our Capabilities"
    title={
      <>
        A Capture Team That Knows{" "}
        <span className="text-primary">What Matters — And When.</span>
      </>
    }
    text="DXG brings production awareness to every event, so your photo and video team knows the story, the flow, and the moments that will have the biggest impact."
    images={captureImages}
    groups={captureGroups}
  />
);

/* 4. Strategy First */
const StrategyFirstSection = () => (
  <section className="bg-[#071826] py-14 text-white lg:py-16">
    <Container>
      <Eyebrow>Strategy First</Eyebrow>
      <h2 className="text-3xl font-bold leading-tight md:text-4xl xl:text-[42px]">
        Plan the Content{" "}
        <span className="text-primary">Before the Cameras Arrive.</span>
      </h2>
      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/80 md:text-base">
        The best event content starts with a clear plan. We work with you ahead
        of time to understand your goals, key moments, audience, and future
        content needs — so nothing important gets missed.
      </p>

      <div className="mt-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <div className="group relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-primary/20 shadow-xl">
          <Image
            src="/images/seo-services/event-videography-and-photography/strategy-shot-list-planning.jpg"
            alt="Plan the Content Before the Cameras Arrive - Event Shot List Planning"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-6">
            {strategyPointsCol1.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-[#0b2237] text-primary shadow-sm">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-white leading-snug">
                    {title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-white/70">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            {strategyPointsCol2.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-[#0b2237] text-primary shadow-sm">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-white leading-snug">
                    {title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-white/70">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  </section>
);

/* 5. Our Process */
const ProcessSection = () => (
  <section className="bg-black py-14 text-white lg:py-16">
    <Container>
      <Eyebrow>Our Process</Eyebrow>
      <h2 className="text-3xl font-bold leading-tight md:text-4xl xl:text-[42px]">
        From Capture Plan{" "}
        <span className="text-primary">to Final Deliverables.</span>
      </h2>
      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/75 md:text-base">
        A proven process designed to make event content simple, strategic, and
        stress-free.
      </p>
      <StepCards items={processSteps} variant="badge" />
    </Container>
  </section>
);

/* ---------- MAIN COMPONENT ---------- */

const EventVideographyPhotography = () => {
  return (
    // pt-20 clears the fixed site header (h-20) so it sits on the layout's dark background
    <div className="bg-black pt-20">
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Event Types We Support */}
      <EventTypesSection />

      {/* 3. Our Capabilities */}
      <CapabilitiesSection />

      {/* 4. Strategy First */}
      <StrategyFirstSection />

      {/* 5. Our Process */}
      <ProcessSection />

      {/* 6. Bottom CTA */}
      <CenteredCTA
        eyebrow="Let's Create Something Lasting"
        primaryLabel="Build Your Capture Plan"
        secondaryLabel="Review My Existing Scope"
        text="Whether you need a full event content plan or want to enhance your existing scope, DXG can help you capture the moments that matter."
        bgImage="/images/seo-services/event-videography-and-photography/cta-bg.jpg"
      />
    </div>
  );
};

export default EventVideographyPhotography;
