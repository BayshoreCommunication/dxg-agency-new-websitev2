import Container from "components/shared/Container";
import Link from "next/link";
import FAQItem from "./FAQItem";
import { CapabilityGrid, Eyebrow, IconFeatures, IconGrid, PrimaryButton } from "./shared";
import {
  BarChart3,
  Laptop,
  MessageSquare,
  Monitor,
  QrCode,
  Settings,
  Smartphone,
  Star,
  Trophy,
  UsersRound,
  Zap,
} from "lucide-react";

/* ---------- DATA ---------- */

const solutions = [
  { icon: BarChart3, label: "Live Polling" },
  { icon: MessageSquare, label: "Q&A" },
  { icon: Smartphone, label: "Event Apps" },
  { icon: Monitor, label: "Digital Signage" },
  { icon: UsersRound, label: "Networking Tools" },
  { icon: Star, label: "Sponsor Activations" },
  { icon: Trophy, label: "Gamification" },
  { icon: Laptop, label: "Hybrid Participation" },
];

const capabilities = [
  { icon: BarChart3, title: "Live Audience Polling", text: "Get real-time insights." },
  { icon: MessageSquare, title: "Q&A Moderation", text: "Keep the conversation flowing." },
  {
    icon: Smartphone,
    title: "Event Apps & Agendas",
    text: "Put key event info in every attendee's hands.",
  },
  {
    icon: Monitor,
    title: "Digital Signage & Wayfinding",
    text: "Share the right content at the right time.",
  },
  {
    icon: UsersRound,
    title: "Networking & Matchmaking",
    text: "Help attendees make meaningful connections.",
  },
  {
    icon: Settings,
    title: "Sponsor & Exhibit Engagement",
    text: "Create interactive, memorable brand experiences.",
  },
  {
    icon: Trophy,
    title: "Gamification & Interactive Experiences",
    text: "Turn participation into friendly competition.",
  },
  {
    icon: QrCode,
    title: "Check-in, QR & Lead Capture",
    text: "Streamline entry and capture valuable data.",
  },
];

const benefits = [
  { icon: Zap, title: "Higher Participation", text: "Keep attendees actively involved." },
  { icon: UsersRound, title: "More Connection", text: "Turn your audience into a community." },
  {
    icon: BarChart3,
    title: "Richer Insights",
    text: "Get real-time feedback that informs your event.",
  },
  { icon: Settings, title: "Smoother Execution", text: "One plan, fully integrated." },
];

const faqs = [
  {
    q: "How do your platforms keep data secure?",
    a: "We work with established engagement platforms that use encrypted connections and access controls, and we configure each event so attendee data is only collected and shared where you approve it.",
  },
  {
    q: "Can we customize tools to match our event brand?",
    a: "Yes. Polling screens, apps, signage, and interactive experiences can all be styled with your event's colors, logos, and messaging.",
  },
  {
    q: "How do you help us track results?",
    a: "We capture participation, poll responses, session activity, and lead data during the event and share a post-event summary so you can see what worked.",
  },
  {
    q: "Do you work with hybrid and virtual events?",
    a: "Absolutely. Our engagement tools connect in-room and remote attendees so everyone can vote, ask questions, and participate together.",
  },
];

/* ---------- SECTIONS ---------- */

const HeroSection = () => (
  <section className="bg-white text-[#0b1530]">
    <div className="grid lg:grid-cols-2">
      {/* Left padding matches Container's edge so text lines up with the header logo */}
      <div className="flex flex-col justify-center px-4 py-14 sm:px-6 lg:py-20 lg:pl-[max(2rem,calc((100vw-1620px)/2+2rem))] lg:pr-12 xl:pr-16">
        <Eyebrow>Event Technology &amp; Attendee Engagement</Eyebrow>
        <h1 className="max-w-xl text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl xl:text-[56px]">
          Move Attendees From Watching to Participating.
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-600">
          DXG brings event technology to life with interactive tools that engage audiences and
          create more memorable experiences.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <PrimaryButton href="/contact-us">Request an Engagement Proposal</PrimaryButton>
          <a
            href="#capabilities"
            className="inline-flex items-center justify-center rounded-md border border-[#1458f5] px-6 py-3 text-sm font-medium text-[#1458f5] transition hover:bg-[#1458f5]/5"
          >
            Explore Tech Solutions
          </a>
        </div>
      </div>
      <div className="min-h-[280px] bg-gray-300 sm:min-h-[380px] lg:min-h-[560px]" aria-hidden="true" />
    </div>
  </section>
);

const SolutionsSection = () => (
  <section className="relative overflow-hidden bg-gray-500 text-white">
    <div className="absolute inset-0 bg-gradient-to-r from-[#061a4a] via-[#0a2a6e]/90 to-[#0a2a6e]/80" />
    <Container className="relative py-14 lg:py-16">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div>
          <Eyebrow dark>Attendee engagement solutions</Eyebrow>
          <h2 className="text-4xl font-bold leading-[1.05] md:text-5xl">
            Event Technology Built Around Participation.
          </h2>
        </div>
        <IconGrid items={solutions} />
      </div>
    </Container>
  </section>
);

const CapabilitiesSection = () => (
  <section id="capabilities" className="scroll-mt-20 bg-white py-14 text-[#0b1530] lg:py-16">
    <Container>
      <Eyebrow>Our attendee engagement capabilities</Eyebrow>
      <h2 className="text-3xl font-bold leading-tight md:text-4xl xl:text-[42px]">
        Complete Event Technology Support for Attendee Engagement.
      </h2>
      <CapabilityGrid items={capabilities} />
    </Container>
  </section>
);

const WhyEngagementSection = () => (
  <section className="relative overflow-hidden bg-gray-500 text-white">
    <div className="absolute inset-0 bg-gradient-to-r from-[#061a4a] via-[#0a2a6e]/90 to-[#0a2a6e]/40" />
    <Container className="relative py-14 lg:py-16">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div>
          <Eyebrow dark>A more connected event experience</Eyebrow>
          <h2 className="text-3xl font-bold leading-tight md:text-[42px]">
            Why Engagement Works Better Inside the Production Plan.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/85">
            When engagement is built into your production plan, everything works together for a
            more connected, memorable event.
          </p>
        </div>
        <IconFeatures items={benefits} />
      </div>
    </Container>
  </section>
);

const FAQSection = () => (
  <section className="bg-[#f4f7fc] py-14 text-[#0b1530] lg:py-16">
    <Container>
      <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-12">
        <div>
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="text-3xl font-bold leading-tight md:text-[42px]">
            Questions Planners Ask Us.
          </h2>
        </div>
        <div className="flex flex-col gap-3">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} {...faq} />
          ))}
        </div>
      </div>
    </Container>
  </section>
);

const FinalCTASection = () => (
  <section className="relative overflow-hidden bg-gray-500 text-white">
    <div className="absolute inset-0 bg-gradient-to-r from-[#061a4a]/90 via-[#0a2a6e]/85 to-[#0a2a6e]/70" />
    <Container className="relative py-12 lg:py-14">
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div>
          <Eyebrow dark>Let&apos;s talk</Eyebrow>
          <h2 className="text-3xl font-bold leading-tight md:text-4xl">
            Turn Your Event Into a More Interactive Experience.
          </h2>
        </div>
        <div>
          <p className="max-w-lg text-sm leading-relaxed text-white/90 md:text-base">
            We&apos;ll help you develop an attendee engagement strategy with the right technology
            for your goals.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <PrimaryButton href="/contact-us">Request an Engagement Proposal</PrimaryButton>
            <Link
              href="/experiences-created"
              className="inline-flex items-center justify-center rounded-md border border-white px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Browse More Event Tech Plans
            </Link>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

/* ---------- PAGE ---------- */

const AttendeeEngagement = () => {
  return (
    // pt-20 clears the fixed site header (h-20) so it sits on the layout's dark background
    <div className="pt-20">
      <HeroSection />
      <SolutionsSection />
      <CapabilitiesSection />
      <WhyEngagementSection />
      <FAQSection />
      <FinalCTASection />
    </div>
  );
};

export default AttendeeEngagement;
