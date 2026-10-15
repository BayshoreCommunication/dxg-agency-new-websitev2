import Container from "components/shared/Container";
import Link from "next/link";
import FAQItem from "./FAQItem";
import { Eyebrow, PrimaryButton } from "./shared";
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

/* ---------- DATA ---------- */

const programs = [
  { icon: Users, label: "Corporate Events" },
  { icon: Network, label: "Association Conferences" },
  { icon: HeartPulse, label: "Medical Meetings" },
  { icon: Heart, label: "Fundraising Events" },
  { icon: GraduationCap, label: "Education Programs" },
];

const processImages = ["Site Visits", "Technical Rehearsals", "Show Day Execution"];

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

/* ---------- SECTIONS ---------- */

const HeroSection = () => (
  <section className="bg-white text-[#0b1530]">
    <div className="grid lg:grid-cols-2">
      {/* Left padding matches Container's edge so text lines up with the header logo */}
      <div className="flex flex-col justify-center px-4 py-14 sm:px-6 lg:py-20 lg:pl-[max(2rem,calc((100vw-1620px)/2+2rem))] lg:pr-12 xl:pr-16">
        <Eyebrow>Event Production Management</Eyebrow>
        <h1 className="max-w-xl text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl xl:text-[56px]">
          The Same Production Team, Year After Year.
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-600">
          Venues and AV setups change. But with DXG, you get the same production leadership,
          planning standards, and show-day management across every event, in every city. A
          consistent team that knows your goals, understands your audience, and delivers a
          seamless experience from planning to show day.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <PrimaryButton href="/contact-us">Request an AV Proposal</PrimaryButton>
          <a
            href="#production-process"
            className="inline-flex items-center justify-center rounded-md border border-[#1458f5] px-6 py-3 text-sm font-medium text-[#1458f5] transition hover:bg-[#1458f5]/5"
          >
            Explore Production Process
          </a>
        </div>
      </div>
      <div className="min-h-[280px] bg-gray-300 sm:min-h-[380px] lg:min-h-[600px]" aria-hidden="true" />
    </div>
  </section>
);

const ProgramsSection = () => (
  <section className="relative overflow-hidden bg-gray-500 text-white">
    <div className="absolute inset-0 bg-gradient-to-r from-[#061a4a] via-[#0a2a6e]/80 to-[#0a2a6e]/30" />
    <Container className="relative py-16 lg:py-20">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div>
          <Eyebrow dark>Events of every size. A consistent approach.</Eyebrow>
          <h2 className="text-3xl font-bold leading-tight md:text-[42px]">
            Programs Designed Around What You Need.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-white/85">
            From corporate meetings to association conferences, DXG builds production management
            programs that adapt to your organization, your audience, and your goals—while
            maintaining a consistent, high-touch approach you can count on.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-y-8 sm:grid-cols-3 lg:grid-cols-5 lg:self-end">
          {programs.map(({ icon: Icon, label }, i) => (
            <div
              key={label}
              className={`flex flex-col items-center px-3 text-center ${
                i > 0 ? "lg:border-l lg:border-white/25" : ""
              }`}
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/80 bg-[#1458f5]/40">
                <Icon className="h-7 w-7" />
              </span>
              <span className="mt-3 max-w-[120px] text-sm font-semibold leading-tight">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </Container>
  </section>
);

const ProcessSection = () => (
  <section id="production-process" className="scroll-mt-20 bg-white py-16 text-[#0b1530] lg:py-20">
    <Container>
      <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-12">
        <div>
          <Eyebrow>A clear process from start to finish</Eyebrow>
          <h2 className="text-3xl font-bold md:text-4xl">How We Manage Your Production.</h2>
          <p className="mt-3 text-sm text-gray-500">
            <span className="font-semibold text-[#0b1530]">6 stages.</span> Each one produces the
            next technical information the next stage needs.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {processImages.map((label) => (
            <div key={label} className="relative aspect-[16/10] overflow-hidden rounded-lg bg-gray-300">
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-3 pb-2 pt-6 text-[11px] font-semibold uppercase tracking-wider text-white">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-6 xl:grid-cols-6">
        {stages.map(({ icon: Icon, title, text }, i) => (
          <div key={title} className="relative">
            <div className="flex h-full flex-col rounded-xl border border-gray-100 bg-gradient-to-b from-white to-[#f2f6ff] p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1458f5] text-xs font-bold text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <Icon className="h-6 w-6 text-[#1458f5]" />
              </div>
              <h3 className="mt-4 min-h-[2.75rem] text-base font-bold leading-snug">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">{text}</p>
            </div>
            {/* Arrow sits centered in the gap between cards */}
            {i < stages.length - 1 && (
              <ArrowRight className="absolute -right-[19px] top-1/2 z-10 hidden h-3.5 w-3.5 -translate-y-1/2 text-[#1458f5]/60 xl:block" />
            )}
          </div>
        ))}
      </div>
    </Container>
  </section>
);

const IncludeSection = () => (
  <section className="bg-gradient-to-b from-[#071a45] to-[#0a2560] py-16 text-white lg:py-20">
    <Container>
      <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
        <div>
          <Eyebrow dark>A complete approach</Eyebrow>
          <h2 className="text-3xl font-bold md:text-4xl">What Production Management Can Include.</h2>
        </div>
        <p className="max-w-xl text-sm leading-relaxed text-white/80 lg:justify-self-end lg:text-base">
          From initial planning to final applause, DXG manages every technical element so you can
          stay focused on your content, your attendees, and your bigger goals.
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {includeColumns.map(({ icon: Icon, title, subtitle, items }) => (
          <div
            key={title}
            className="flex flex-col rounded-xl border border-white/15 bg-white/[0.04] p-4"
          >
            <div className="flex items-center gap-4 p-2">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1458f5]">
                <Icon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-[#5b9bff]">{title}</h3>
                <p className="text-sm text-white/75">{subtitle}</p>
              </div>
            </div>
            <div className="mt-3 flex flex-1 flex-col gap-2">
              {items.map(({ icon: ItemIcon, title: itemTitle, text }) => (
                <div
                  key={itemTitle}
                  className="flex flex-1 items-start gap-3 rounded-lg border border-white/10 bg-white/[0.06] p-3"
                >
                  <ItemIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#5b9bff]" />
                  <div>
                    <p className="text-sm font-semibold">{itemTitle}</p>
                    <p className="text-xs leading-relaxed text-white/65">{text}</p>
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
  <section className="bg-[#f4f7fc] py-14 text-[#0b1530] lg:py-16">
    <Container>
      <div className="grid gap-4 lg:grid-cols-2 lg:items-end">
        <div>
          <Eyebrow>It starts here</Eyebrow>
          <h2 className="text-3xl font-bold md:text-4xl">Get Started with These 3 Steps.</h2>
        </div>
        <p className="max-w-xl text-sm leading-relaxed text-gray-500 lg:justify-self-end lg:text-base">
          A simple way to begin, with a process designed to give you clarity quickly and set you
          up for a successful event.
        </p>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-stretch">
        {startSteps.map(({ icon: Icon, step, title, text }, i) => (
          <div key={title} className="contents">
            <div className="flex items-center gap-5 rounded-xl bg-white p-5 shadow-sm">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#e8efff]">
                <Icon className="h-7 w-7 text-[#1458f5]" />
              </span>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#1458f5]">
                  {step}
                </p>
                <h3 className="mt-1 text-base font-bold">{title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-gray-500">{text}</p>
              </div>
            </div>
            {i < startSteps.length - 1 && (
              <ArrowRight className="hidden h-5 w-5 self-center text-[#1458f5]/60 lg:block" />
            )}
          </div>
        ))}
      </div>
    </Container>
  </section>
);

const FAQSection = () => {
  // Two independent columns so opening one item doesn't stretch its neighbour
  const columns = [faqs.filter((_, i) => i % 2 === 0), faqs.filter((_, i) => i % 2 === 1)];

  return (
    <section className="bg-white py-14 text-[#0b1530] lg:py-16">
      <Container>
        <Eyebrow>Common questions</Eyebrow>
        <h2 className="text-3xl font-bold md:text-4xl">Questions Planners Ask Us.</h2>

        <div className="mt-8 grid items-start gap-3 md:grid-cols-2 md:gap-x-8">
          {columns.map((column, c) => (
            <div key={c} className="flex flex-col gap-3">
              {column.map((faq) => (
                <FAQItem key={faq.q} {...faq} />
              ))}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

const FinalCTASection = () => (
  <section className="relative overflow-hidden bg-gray-500 text-white">
    <div className="absolute inset-0 bg-gradient-to-r from-[#061a4a] via-[#0a2a6e]/85 to-[#0a2a6e]/60" />
    <Container className="relative py-14 lg:py-16">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <Eyebrow dark>Let&apos;s plan your next event</Eyebrow>
          <h2 className="text-3xl font-bold md:text-4xl">Let&apos;s Talk About What You&apos;re Planning.</h2>
          <p className="mt-3 text-sm leading-relaxed text-white/85 md:text-base">
            We&apos;ll help you build a production plan around your priorities, budget, and
            vision—no matter your event size or venue. A consistent team, from start to finish.
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:gap-4">
          <PrimaryButton href="/contact-us">Request an AV Proposal</PrimaryButton>
          <Link
            href="/experiences-created"
            className="inline-flex items-center justify-center rounded-md border border-white px-8 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          >
            Review Past Events
          </Link>
        </div>
      </div>
    </Container>
  </section>
);

/* ---------- PAGE ---------- */

const EventProductionManagement = () => {
  return (
    // pt-20 clears the fixed site header (h-20) so it sits on the layout's dark background
    <div className="pt-20">
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
