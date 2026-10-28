import Container from "components/shared/Container";
import Image from "next/image";
import FAQItem from "./FAQItem";
import {
  Eyebrow,
  PrimaryButton,
  ServiceHero,
  outlineButton,
} from "./shared";
import { CalendarDays, TrendingUp, UsersRound } from "lucide-react";

/* ---------- DATA ---------- */

const situations = [
  {
    title: "Conference or Breakout Session",
    text: "From content delivery to collaborative discovery.",
  },
  {
    title: "Trade Show",
    text: "From collecting contacts to creating purposeful connections.",
  },
  {
    title: "Virtual or Hybrid Event",
    text: "From parallel attendance to shared participation.",
  },
  {
    title: "Keynote or General Session",
    text: "From a presentation to an engagement journey.",
  },
];

const tiers = [
  {
    label: "Ready-to-run templates",
    title: "Tested formats, ready to go.",
    text: "Icebreakers, networking, collaboration, and more, simple enough for your own team to run without DXG on site.",
    bestFor: "short timelines, tight budgets, self-led sessions.",
  },
  {
    label: "Customized templates",
    title: "A proven structure, built around your content.",
    text: "We swap in your scenarios, data, speakers' questions, and sponsors. The tested structure stays.",
    bestFor: "specific learning, sponsor, or member goals.",
  },
  {
    label: "Bespoke design",
    title: "An original experience, designed from scratch.",
    text: "Built from your outcome through all seven decisions, prototyped with real people, and produced with your show.",
    bestFor: "flagship sessions and goals no template fits.",
  },
];

const stages = [
  {
    icon: CalendarDays,
    label: "Pre-event",
    title: "Prepare and motivate",
    text: "Spark curiosity, learn participants' needs, and start connections before arrival.",
  },
  {
    icon: UsersRound,
    label: "During",
    title: "Connect and participate",
    text: "Investigate, solve problems, and make decisions together, in the room and online.",
  },
  {
    icon: TrendingUp,
    label: "Post-event",
    title: "Reinforce and act",
    text: "Apply the ideas, keep relationships going, and capture follow-through.",
  },
];

const evidenceRows = [
  { label: "Groups that reached a shared decision", value: "[ # of # ]" },
  { label: "New connections participants reported", value: "[ # ]" },
  { label: "Participants who stated a next step", value: "[ % ]" },
  { label: "Follow-through at 30 days", value: "[ % ]" },
  { label: "Facilitator observations", value: "[ notes ]" },
];

const outcomes = [
  { title: "Connection", text: "New and stronger relationships" },
  { title: "Understanding", text: "What people can explain or apply" },
  { title: "Collaboration", text: "Conclusions groups reached together" },
  { title: "Experience", text: "Relevance and value people found" },
  { title: "Action", text: "Decisions made and follow-through" },
];

const faqs = [
  {
    q: "Is this gamification?",
    a: "Sometimes a game is the right tool, but it's one option among many. We choose the format after we know what should change and why people will want to take part.",
  },
  {
    q: "Does every session need to be interactive?",
    a: "No. Listening and reflecting are often the right choice. We design interaction where it serves the outcome: one session, one stage, or the whole journey.",
  },
  {
    q: "Do we have to use a specific platform, or an app at all?",
    a: "No. We work with the tools you already license or recommend options that fit. When an analog approach does the job better, we'll tell you.",
  },
  {
    q: "Can we customize the tools to match our event brand?",
    a: "Yes. Templates, screens, apps, and signage carry your colors, logos, and sponsor placements.",
  },
  {
    q: "How do you make engagement accessible?",
    a: "Accessibility is part of the design from the start. We plan more than one way to understand, take part, and progress, so people with different abilities, devices, languages, and comfort levels reach the same outcome.",
  },
  {
    q: "Can you guarantee results?",
    a: "We guarantee a clear definition of success before the event and honest evidence afterward. We won't promise behavior change we can't demonstrate.",
  },
  {
    q: "Do you work with hybrid and virtual events?",
    a: "Yes. Remote and onsite participants may take part differently, but they contribute to the same outcomes, run from the same production table.",
  },
  {
    q: "Can you run voting for delegates and elections?",
    a: "Yes. Digital voting for resolutions and elections, with results on screen as soon as voting closes and an alternative path for delegates who can't use the default method.",
  },
  {
    q: "How do your platforms keep data secure?",
    a: "We use established platforms, collect only the data your goals require, and agree with you on how it is handled and shared before the event.",
  },
];

/* ---------- SECTIONS ---------- */

const HeroSection = () => (
  <ServiceHero
    image="/images/seo-services/Attendee Engagement.png"
    alt="Event Technology & Attendee Engagement - DXG general session ballroom with branded LED screens"
  >
    <Eyebrow>Event Technology &amp; Attendee Engagement</Eyebrow>
    <h1 className="max-w-xl text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl xl:text-[56px]">
      Great production sets the stage.{" "}
      <span className="text-primary">Purposeful design gets people to take part.</span>
    </h1>
    <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75">
      Engagement is what people are invited, motivated, and enabled to do. We design it around
      your objectives and your participants.
    </p>
    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
      <PrimaryButton href="/contact-us">Request an Engagement Proposal</PrimaryButton>
      <a href="#how" className={outlineButton}>
        See How We Design
      </a>
    </div>
  </ServiceHero>
);

const HowWeDesignSection = () => (
  <section id="how" className="relative scroll-mt-20 overflow-hidden bg-black text-white">
    <Image
      src="/images/seo-services/attendee-engagement-and-event-technology/ballroom-preparation-event-tech.webp"
      alt="Engagement designed for the event you're running"
      fill
      sizes="100vw"
      className="pointer-events-none object-cover object-center opacity-25"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/90 to-black/80" />
    <Container className="relative py-14 lg:py-16">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)]">
        <div>
          <Eyebrow>How we design</Eyebrow>
          <h2 className="text-3xl font-bold leading-tight md:text-[42px]">
            Engagement designed for{" "}
            <span className="text-primary">the event you&apos;re running.</span>
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {situations.map(({ title, text }, i) => (
            <div
              key={title}
              className="flex flex-col gap-2 rounded-xl border border-white/10 bg-white/[0.04] p-5"
            >
              <span className="mb-1 flex h-10 w-10 items-center justify-center rounded-full border-[1.5px] border-primary text-sm font-bold text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-base font-bold leading-snug">{title}</h3>
              <p className="text-sm leading-relaxed text-white/60">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  </section>
);

const CapabilitiesSection = () => (
  <section id="capabilities" className="scroll-mt-20 bg-black py-14 text-white lg:py-16">
    <Container>
      <Eyebrow>Our attendee engagement capabilities</Eyebrow>
      <h2 className="text-3xl font-bold leading-tight md:text-4xl xl:text-[42px]">
        Technology can start it,{" "}
        <span className="text-primary">but people make it meaningful.</span>
      </h2>

      <div className="mt-8 grid items-center gap-8 rounded-2xl border border-primary/20 bg-[#081624] p-8 lg:grid-cols-[minmax(0,9fr)_minmax(0,11fr)] lg:gap-16 lg:p-12">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            What planners tell us
          </p>
          <p className="mt-3 text-2xl italic leading-snug md:text-[27px]">
            &ldquo;We need our breakouts to get people involved, not just listening to another
            presentation.&rdquo;
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold leading-tight md:text-[27px]">
            Give people something to solve, discuss, and decide together.
          </h3>
          <p className="mt-3 text-base leading-relaxed text-white/75">
            Participants receive prompts, clues, or choices, via their phones, and work
            face-to-face in groups to compare perspectives and reach a shared response. The digital
            layer guides the experience and captures outcomes, but the real value comes from the
            conversation in the room.
          </p>
        </div>
      </div>

      <div className="mt-16 border-t border-white/10 pt-12 lg:mt-20">
        <h3 className="text-2xl font-bold leading-tight md:text-[32px]">
          Three ways to bring it to your event.
        </h3>
        <div className="mt-8 grid gap-9 md:grid-cols-3 md:gap-12">
          {tiers.map(({ label, title, text, bestFor }, i) => (
            <div
              key={label}
              className={`flex flex-col gap-3 border-t-2 pt-6 ${
                i === tiers.length - 1 ? "border-primary" : "border-white/15"
              }`}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                {label}
              </p>
              <h4 className="text-xl font-bold leading-snug">{title}</h4>
              <p className="text-base leading-relaxed text-white/75">{text}</p>
              <p className="text-sm leading-relaxed text-white/60">
                <b className="font-semibold text-white">Best for:</b> {bestFor}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  </section>
);

const JourneySection = () => (
  <section className="relative overflow-hidden bg-black text-white">
    <Image
      src="/images/seo-services/attendee-engagement-and-event-technology/tech-table-polling-operator.webp"
      alt="Before, during, and after your event"
      fill
      sizes="100vw"
      className="pointer-events-none object-cover object-center opacity-30"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/90 to-black/70" />
    <Container className="relative py-14 lg:py-16">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div>
          <Eyebrow>A more connected event experience</Eyebrow>
          <h2 className="text-3xl font-bold leading-tight md:text-[42px]">
            Before, during, and after your event.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/85">
            Connecting all three stages creates a continuous engagement journey. But each stage
            stands on its own, with opportunities to engage participants meaningfully before,
            during, or after your event.
          </p>
        </div>
        <div className="grid gap-10 sm:grid-cols-3 sm:gap-7">
          {stages.map(({ icon: Icon, label, title, text }) => (
            <div key={label} className="px-2 text-center">
              <span className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-primary/50 bg-[#0b2237] text-primary">
                <Icon className="h-7 w-7" />
              </span>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                {label}
              </p>
              <h3 className="mt-1.5 text-lg font-bold leading-tight">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  </section>
);

const EvidenceSection = () => (
  <section className="bg-black py-14 text-white lg:py-16">
    <Container>
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 rounded-2xl border border-primary/25 bg-[#081624] p-6 sm:p-8 lg:order-1">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-lg font-bold">Engagement Evidence Report</p>
            <span className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/70">
              Sample layout
            </span>
          </div>
          <p className="mb-5 mt-1.5 text-xs text-white/55">Illustrative only. Not client data.</p>
          <p className="mb-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
            Outcome agreed in planning
          </p>
          <p className="mb-4">[ What should be different for participants ]</p>
          <div className="border-b border-white/10">
            {evidenceRows.map(({ label, value }) => (
              <div
                key={label}
                className="flex justify-between gap-3 border-t border-white/10 py-3 text-sm text-white/80"
              >
                <span>{label}</span>
                <span className="whitespace-nowrap text-xs text-primary">{value}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-white/55">
            Supporting activity data: participation, responses, completions
          </p>
        </div>

        <div className="order-1 lg:order-2">
          <Eyebrow>What you walk away with</Eyebrow>
          <h2 className="text-3xl font-bold leading-tight md:text-[42px]">
            Evidence that something changed.{" "}
            <span className="text-primary">Not just that people clicked.</span>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75">
            We agree on what success means before the event, then report against it. One report
            for your board, your committee, and your sponsors.
          </p>
          <ul className="mt-7 grid gap-3">
            {outcomes.map(({ title, text }) => (
              <li
                key={title}
                className="grid gap-1 border-t border-white/10 pt-3 text-base text-white/75 sm:grid-cols-[150px_minmax(0,1fr)] sm:gap-4"
              >
                <b className="font-semibold text-white">{title}</b>
                <span>{text}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-white/60">
            We won&apos;t claim an activity changed behavior unless the evidence shows it.
          </p>
        </div>
      </div>
    </Container>
  </section>
);

const FAQSection = () => (
  <section className="bg-[#030c14] py-14 text-white lg:py-16">
    <Container>
      <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-12">
        <div>
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="text-3xl font-bold leading-tight md:text-[42px]">
            Questions <span className="text-primary">planners ask us.</span>
          </h2>
        </div>
        <div className="flex flex-col gap-3">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} {...faq} dark />
          ))}
        </div>
      </div>
    </Container>
  </section>
);

const FinalCTASection = () => (
  <section className="relative overflow-hidden border-y border-primary/25 bg-black text-white">
    <Image
      src="/images/seo-services/event-production-management/plan-your-next-event-two.jpeg"
      alt="Let's talk about your event"
      fill
      sizes="100vw"
      className="pointer-events-none object-cover object-center"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/55" />
    <Container className="relative py-12 lg:py-16">
      <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-12">
        <div>
          <Eyebrow>Let&apos;s talk</Eyebrow>
          <h2 className="text-3xl font-bold leading-tight md:text-4xl">
            Tell us what should change.{" "}
            <span className="text-primary">We&apos;ll design backward from there.</span>
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/85 md:text-base">
            A 30-minute working session on your objectives, your participants, and the realities
            of your event. No pressure. No pitch deck.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 lg:justify-end">
          <PrimaryButton href="/contact-us">Request an Engagement Proposal</PrimaryButton>
        </div>
      </div>
    </Container>
  </section>
);

/* ---------- PAGE ---------- */

const AttendeeEngagement = () => {
  return (
    // pt-20 clears the fixed site header (h-20) so it sits on the layout's dark background
    <div className="bg-black pt-20">
      <HeroSection />
      <HowWeDesignSection />
      <CapabilitiesSection />
      <JourneySection />
      <EvidenceSection />
      <FAQSection />
      <FinalCTASection />
    </div>
  );
};

export default AttendeeEngagement;
