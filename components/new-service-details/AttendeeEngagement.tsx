import Container from "components/shared/Container";
import Link from "next/link";
import FAQItem from "./FAQItem";
import {
  CapabilityGrid,
  Eyebrow,
  IconFeatures,
  IconGrid,
  PrimaryButton,
  outlineButton,
} from "./shared";
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
  <section className="bg-black text-white">
    <div className="grid lg:grid-cols-2">
      {/* Left padding matches Container's edge so text lines up with the header logo */}
      <div className="flex flex-col justify-center px-4 py-14 sm:px-6 lg:py-20 lg:pl-[max(2rem,calc((100vw-1620px)/2+2rem))] lg:pr-12 xl:pr-16">
        <Eyebrow>Event Technology &amp; Attendee Engagement</Eyebrow>
        <h1 className="max-w-xl text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl xl:text-[56px]">
          Move Attendees From Watching <span className="text-primary">to Participating.</span>
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75">
          DXG brings event technology to life with interactive tools that engage audiences and
          create more memorable experiences.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <PrimaryButton href="/contact-us">Request an Engagement Proposal</PrimaryButton>
          <a
            href="#capabilities"
            className={outlineButton}
          >
            Explore Tech Solutions
          </a>
        </div>
      </div>
      <div className="min-h-[280px] bg-gray-800 sm:min-h-[380px] lg:min-h-[560px]" aria-hidden="true" />
    </div>
  </section>
);

const SolutionsSection = () => (
  <section className="relative overflow-hidden bg-gray-800 text-white">
    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/80" />
    <Container className="relative py-14 lg:py-16">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div>
          <Eyebrow>Attendee engagement solutions</Eyebrow>
          <h2 className="text-4xl font-bold leading-[1.05] md:text-5xl">
            Event Technology <span className="text-primary">Built Around Participation.</span>
          </h2>
        </div>
        <IconGrid items={solutions} />
      </div>
    </Container>
  </section>
);

const CapabilitiesSection = () => (
  <section id="capabilities" className="scroll-mt-20 bg-black py-14 text-white lg:py-16">
    <Container>
      <Eyebrow>Our attendee engagement capabilities</Eyebrow>
      <h2 className="text-3xl font-bold leading-tight md:text-4xl xl:text-[42px]">
        Complete Event Technology Support <span className="text-primary">for Attendee Engagement.</span>
      </h2>
      <CapabilityGrid items={capabilities} />
    </Container>
  </section>
);

const WhyEngagementSection = () => (
  <section className="relative overflow-hidden bg-gray-800 text-white">
    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/40" />
    <Container className="relative py-14 lg:py-16">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div>
          <Eyebrow>A more connected event experience</Eyebrow>
          <h2 className="text-3xl font-bold leading-tight md:text-[42px]">
            Why Engagement Works Better <span className="text-primary">Inside the Production Plan.</span>
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
  <section className="bg-[#030c14] py-14 text-white lg:py-16">
    <Container>
      <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-12">
        <div>
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="text-3xl font-bold leading-tight md:text-[42px]">
            Questions Planners <span className="text-primary">Ask Us.</span>
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
  <section className="relative overflow-hidden bg-gray-800 text-white">
    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/85 to-black/70" />
    <Container className="relative py-12 lg:py-14">
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div>
          <Eyebrow>Let&apos;s talk</Eyebrow>
          <h2 className="text-3xl font-bold leading-tight md:text-4xl">
            Turn Your Event Into <span className="text-primary">a More Interactive Experience.</span>
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
              className={outlineButton}
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
    <div className="bg-black pt-20">
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
