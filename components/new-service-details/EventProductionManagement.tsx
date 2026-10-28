import Container from "components/shared/Container";
import {
  ArrowRight,
  BarChart3,
  Building2,
  CalendarDays,
  ClipboardList,
  Clock,
  FileText,
  GraduationCap,
  Hammer,
  Heart,
  HeartPulse,
  ListChecks,
  MapPin,
  MessageSquareText,
  MonitorPlay,
  Network,
  Play,
  Search,
  Settings,
  UserRound,
  Users,
  Wallet,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FAQItem from "./FAQItem";
import { Eyebrow, PrimaryButton, ServiceHero } from "./shared";

/* ---------- DATA ---------- */

const programs = [
  { icon: Users, label: "Corporate Events" },
  { icon: Network, label: "Association Conferences" },
  { icon: HeartPulse, label: "Medical Meetings" },
  { icon: Heart, label: "Fundraising Events" },
  { icon: GraduationCap, label: "Education Programs" },
];

const processImages = [
  {
    label: "Site Visits",
    src: "/images/seo-services/event-production-management/technical-site-visit-ballroom.webp",
    alt: "Technical site visit ballroom - DXG Event Production",
  },
  {
    label: "Technical Rehearsals",
    src: "/images/seo-services/event-production-management/technical-speaker-rehearsal.webp",
    alt: "Technical speaker rehearsal - DXG Event Production",
  },
  {
    label: "Show Day Execution",
    src: "/images/seo-services/event-production-management/live-show-day-keynote-session.png",
    alt: "Live show day keynote session - DXG Event Production",
  },
];

const stages = [
  {
    icon: Search,
    title: "Discovery and Scoping",
    text: "We learn about your goals, audience, venues and technical needs.",
  },
  {
    icon: FileText,
    title: "Planning and Vendor Coordination",
    text: "We develop the plan, coordinate with venues and vendors, and align on logistics.",
  },
  {
    icon: Settings,
    title: "Technical Preparation",
    text: "We create detailed technical plans, show files, and run of show documents.",
  },
  {
    icon: Users,
    title: "Rehearsal",
    text: "We run technical rehearsals to confirm everything is ready for show day.",
  },
  {
    icon: Play,
    title: "Show Day Execution",
    text: "Our production team manages the entire event, keeping your show on track.",
  },
  {
    icon: BarChart3,
    title: "Closeout and Debrief",
    text: "We review outcomes, capture key learnings, and set you up for next year's success.",
  },
];

const includeColumns = [
  {
    icon: CalendarDays,
    title: "Planning and Design",
    subtitle: "Set the foundation for a successful event.",
    items: [
      {
        icon: Wallet,
        title: "Production budgeting",
        text: "Develop realistic budgets aligned to your goals.",
      },
      {
        icon: FileText,
        title: "AV proposal and RFP review",
        text: "We help you evaluate and build the right vendor solutions.",
      },
      {
        icon: Building2,
        title: "Venue and in-house AV coordination",
        text: "Work directly with venues and their AV teams.",
      },
      {
        icon: MapPin,
        title: "Technical site visits",
        text: "On-site visits to assess spaces and technical requirements.",
      },
    ],
  },
  {
    icon: Network,
    title: "Production Planning and Logistics",
    subtitle: "Turn plans into detailed, actionable plans.",
    items: [
      {
        icon: Clock,
        title: "Production schedules",
        text: "Create detailed timelines for all technical elements.",
      },
      {
        icon: ListChecks,
        title: "Room-by-room technical planning",
        text: "Review customized plans for each space.",
      },
      {
        icon: Users,
        title: "Vendor coordination",
        text: "Manage communication with all production vendors.",
      },
      {
        icon: Hammer,
        title: "Labor and crew planning",
        text: "Plan for the right crew, skill sets, and coverage across your event.",
      },
    ],
  },
  {
    icon: Play,
    title: "Executing the Plan",
    subtitle: "Keep your event on track and running smoothly.",
    items: [
      {
        icon: FileText,
        title: "Run of show development",
        text: "Build detailed run of show documents.",
      },
      {
        icon: UserRound,
        title: "Speaker and content coordination",
        text: "Work with speakers on technical needs and content.",
      },
      {
        icon: MonitorPlay,
        title: "Technical rehearsals",
        text: "Lead rehearsals to confirm timing, content, and transitions.",
      },
      {
        icon: CalendarDays,
        title: "On-site production management",
        text: "Manage the entire technical production on site.",
      },
    ],
  },
];

const startSteps = [
  {
    icon: FileText,
    step: "Step 1",
    title: "Tell Us About Your Event",
    text: "Share a few details about your event, goals and venues.",
  },
  {
    icon: MessageSquareText,
    step: "Step 2",
    title: "Discovery Call",
    text: "We'll discuss your needs, answer your questions, and explore the best approach.",
  },
  {
    icon: ClipboardList,
    step: "Step 3",
    title: "Scope and Proposal",
    text: "You'll receive a clear scope of services and a customized proposal.",
  },
];

const faqs = [
  {
    q: "Do you provide the AV equipment?",
    a: "DXG focuses on production management. We work with your venue's in-house AV team or the AV vendors you choose, and we can help you source the right partner when needed.",
  },
  {
    q: "What makes DXG different from other production companies?",
    a: "You get the same production team year after year. Venues and AV setups change, but your production leadership, planning standards, and show-day management stay consistent.",
  },
  {
    q: "Do you require our AV company?",
    a: "No. We coordinate with whichever AV company makes sense for your event, whether that's the in-house provider or an outside vendor you already trust.",
  },
  {
    q: "When should production management start?",
    a: "Ideally as soon as your venue is selected. Starting early gives us time to review proposals, plan budgets, and avoid costly surprises later.",
  },
  {
    q: "What size events can you support?",
    a: "From single-room corporate meetings to multi-day association conferences with dozens of breakout rooms, our approach scales to fit your program.",
  },
  {
    q: "Can you work with vendors we already selected?",
    a: "Absolutely. We step in alongside your existing vendors and align everyone around one technical plan and run of show.",
  },
];

/* ---------- BRAND PIECES (black theme, matches the main site) ---------- */

const outlineButton =
  "inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-primary hover:bg-primary/10 hover:text-primary";

/* ---------- SECTIONS ---------- */

const HeroSection = () => (
  <ServiceHero
    image="/images/seo-services/Event Production Management.png"
    alt="Event Production Management - DXG general session ballroom with branded LED screens"
  >
    <Eyebrow>Event Production Management</Eyebrow>
    <h1 className="max-w-xl text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl xl:text-[56px]">
      The Same Production Team,{" "}
      <span className="text-primary">Year After Year.</span>
    </h1>
    <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75">
      Venues and AV setups change. But with DXG, you get the same production
      leadership, planning standards, and show-day management across every
      event, in every city. A consistent team that knows your goals,
      understands your audience, and delivers a seamless experience from
      planning to show day.
    </p>
    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
      <PrimaryButton href="/contact-us">Request an AV Proposal</PrimaryButton>
      <a href="#production-process" className={outlineButton}>
        Explore Production Process
      </a>
    </div>
  </ServiceHero>
);

const ProgramsSection = () => (
  <section className="relative overflow-hidden bg-black text-white">
    <Image
      src="/images/seo-services/event-production-management/Eventsofeverysize.png"
      alt="Events of every size. A consistent approach."
      fill
      sizes="100vw"
      className="object-cover object-center"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/60" />
    <Container className="relative py-16 lg:py-20">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div>
          <Eyebrow>Events of every size. A consistent approach.</Eyebrow>
          <h2 className="text-3xl font-bold leading-tight md:text-[42px]">
            Programs Designed Around{" "}
            <span className="text-primary">What You Need.</span>
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-white/80">
            From corporate meetings to association conferences, DXG builds
            production management programs that adapt to your organization, your
            audience, and your goals—while maintaining a consistent, high-touch
            approach you can count on.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-y-8 sm:grid-cols-3 lg:grid-cols-5 lg:self-end">
          {programs.map(({ icon: Icon, label }, i) => (
            <div
              key={label}
              className={`flex flex-col items-center px-3 text-center ${
                i > 0 ? "lg:border-l lg:border-primary/20" : ""
              }`}
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-primary/50 bg-[#0b2237] text-primary">
                <Icon className="h-7 w-7" />
              </span>
              <span className="mt-3 max-w-[120px] text-sm font-semibold leading-tight">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Container>
  </section>
);

const ProcessSection = () => (
  <section
    id="production-process"
    className="scroll-mt-20 bg-black py-16 text-white lg:py-20"
  >
    <Container>
      <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-12">
        <div>
          <Eyebrow>A clear process from start to finish</Eyebrow>
          <h2 className="text-3xl font-bold md:text-4xl">
            How We Manage <span className="text-primary">Your Production.</span>
          </h2>
          <p className="mt-3 text-sm text-white/65">
            <span className="font-semibold text-white">6 stages.</span> Each one
            produces the next technical information the next stage needs.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {processImages.map(({ label, src, alt }) => (
            <div
              key={label}
              className="group relative aspect-[16/10] overflow-hidden rounded-lg border border-primary/20 bg-[#081624]"
            >
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/85 via-black/40 to-transparent px-3 pb-2 pt-6 text-[11px] font-semibold uppercase tracking-wider text-white">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-6 xl:grid-cols-6">
        {stages.map(({ icon: Icon, title, text }, i) => (
          <div key={title} className="relative">
            <div className="flex h-full flex-col rounded-xl border border-primary/20 bg-[#081624] p-5 transition duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_18px_40px_rgba(46,198,245,0.12)]">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-black">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 min-h-[2.75rem] text-base font-bold leading-snug">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">
                {text}
              </p>
            </div>
            {/* Arrow sits centered in the gap between cards */}
            {i < stages.length - 1 && (
              <ArrowRight className="absolute -right-[19px] top-1/2 z-10 hidden h-3.5 w-3.5 -translate-y-1/2 text-primary/60 xl:block" />
            )}
          </div>
        ))}
      </div>
    </Container>
  </section>
);

const IncludeSection = () => (
  <section className="relative overflow-hidden bg-black py-16 text-white lg:py-20">
    <Image
      src="/images/seo-services/event-production-management/complete-approach.png"
      alt="What Production Management Can Include background"
      fill
      sizes="100vw"
      className="object-cover object-center"
    />
    <div className="absolute inset-0 bg-black/85" />
    <Container className="relative">
      <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
        <div>
          <Eyebrow>A complete approach</Eyebrow>
          <h2 className="text-3xl font-bold md:text-4xl">
            What Production Management{" "}
            <span className="text-primary">Can Include.</span>
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-relaxed text-white/75 lg:justify-self-end lg:text-base">
          From initial planning to final applause, DXG manages every technical
          element so you can stay focused on your content, your attendees, and
          your bigger goals.
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {includeColumns.map(({ icon: Icon, title, subtitle, items }) => (
          <div
            key={title}
            className="flex flex-col rounded-xl border border-primary/20 bg-[#071a2c]/90 p-4 backdrop-blur-sm"
          >
            <div className="flex items-center gap-4 p-2">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-black">
                <Icon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-primary">{title}</h3>
                <p className="text-sm text-white/70">{subtitle}</p>
              </div>
            </div>
            <div className="mt-3 flex flex-1 flex-col gap-2">
              {items.map(({ icon: ItemIcon, title: itemTitle, text }) => (
                <div
                  key={itemTitle}
                  className="flex flex-1 items-start gap-3 rounded-lg border border-primary/10 bg-[#0b2237]/70 p-3"
                >
                  <ItemIcon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm font-semibold">{itemTitle}</p>
                    <p className="text-xs leading-relaxed text-white/65">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

const GetStartedSection = () => (
  <section className="bg-[#030c14] py-14 text-white lg:py-16">
    <Container>
      <div className="grid gap-4 lg:grid-cols-2 lg:items-end">
        <div>
          <Eyebrow>It starts here</Eyebrow>
          <h2 className="text-3xl font-bold md:text-4xl">
            Get Started with{" "}
            <span className="text-primary">These 3 Steps.</span>
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-relaxed text-white/65 lg:justify-self-end lg:text-base">
          A simple way to begin, with a process designed to give you clarity
          quickly and set you up for a successful event.
        </p>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-stretch">
        {startSteps.map(({ icon: Icon, step, title, text }, i) => (
          <div key={title} className="contents">
            <div className="flex items-center gap-5 rounded-xl border border-primary/20 bg-[#081624] p-5">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-primary/50 bg-[#0b2237]">
                <Icon className="h-7 w-7 text-primary" />
              </span>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">
                  {step}
                </p>
                <h3 className="mt-1 text-base font-bold">{title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-white/65">
                  {text}
                </p>
              </div>
            </div>
            {i < startSteps.length - 1 && (
              <ArrowRight className="hidden h-5 w-5 self-center text-primary/60 lg:block" />
            )}
          </div>
        ))}
      </div>
    </Container>
  </section>
);

const FAQSection = () => {
  // Two independent columns so opening one item doesn't stretch its neighbour
  const columns = [
    faqs.filter((_, i) => i % 2 === 0),
    faqs.filter((_, i) => i % 2 === 1),
  ];

  return (
    <section className="bg-black py-14 text-white lg:py-16">
      <Container>
        <Eyebrow>Common questions</Eyebrow>
        <h2 className="text-3xl font-bold md:text-4xl">
          Questions Planners <span className="text-primary">Ask Us.</span>
        </h2>

        <div className="mt-8 grid items-start gap-3 md:grid-cols-2 md:gap-x-8">
          {columns.map((column, c) => (
            <div key={c} className="flex flex-col gap-3">
              {column.map((faq) => (
                <FAQItem key={faq.q} {...faq} dark />
              ))}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

const FinalCTASection = () => (
  <section className="relative overflow-hidden bg-black text-white">
    <Image
      src="/images/seo-services/event-production-management/plan-your-next-event-two.jpeg"
      alt="Let's Plan Your Next Event"
      fill
      sizes="100vw"
      className="object-cover object-center"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/55" />
    <Container className="relative py-14 lg:py-16">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <Eyebrow>Let&apos;s plan your next event</Eyebrow>
          <h2 className="text-3xl font-bold md:text-4xl">
            Let&apos;s Talk About{" "}
            <span className="text-primary">What You&apos;re Planning.</span>
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/80 md:text-base">
            We&apos;ll help you build a production plan around your priorities,
            budget, and vision—no matter your event size or venue. A consistent
            team, from start to finish.
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:gap-4">
          <PrimaryButton href="/contact-us">Request an AV Proposal</PrimaryButton>
          {/* <Link href="/experiences-created" className={outlineButton}>
            Review Past Events
          </Link> */}
        </div>
      </div>
    </Container>
  </section>
);

/* ---------- PAGE ---------- */

const EventProductionManagement = () => {
  return (
    // pt-20 clears the fixed site header (h-20) so it sits on the layout's dark background
    <div className="bg-black pt-20">
      <HeroSection />
      <ProgramsSection />
      <ProcessSection />
      <IncludeSection />
      <GetStartedSection />
      <FAQSection />
      <FinalCTASection />
    </div>
  );
};

export default EventProductionManagement;
