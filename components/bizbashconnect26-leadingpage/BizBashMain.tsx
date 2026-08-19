"use client";

import { useEffect, useRef, useState } from "react";
import {
  Calendar,
  Camera,
  Check,
  ClipboardCheck,
  ClipboardList,
  Compass,
  DoorOpen,
  Globe,
  Palette,
  Presentation,
  Radio,
  Rocket,
  ShieldCheck,
  Users,
} from "lucide-react";
import Container from "components/shared/Container";
import Reveal from "components/shared/Reveal";
import TypingTitle from "components/layout/TypingTitle";
import { trackEvent } from "./analytics";

type InterestKey = "consult" | "review" | "rfpilot" | "followup";

const INTEREST_KEYS: InterestKey[] = ["consult", "review", "rfpilot", "followup"];

const INTEREST_CARDS: {
  key: InterestKey;
  title: string;
  desc: string;
  Icon: typeof Calendar;
}[] = [
  {
    key: "consult",
    title: "Discuss an Upcoming Event",
    desc: "Schedule a working conversation about your program.",
    Icon: Calendar,
  },
  {
    key: "review",
    title: "Review an AV Proposal or Production Plan",
    desc: "Get a second set of experienced eyes before you commit.",
    Icon: ClipboardCheck,
  },
  {
    key: "rfpilot",
    title: "See RFPilot",
    desc: "Join the early-access list and see the platform first.",
    Icon: Radio,
  },
  {
    key: "followup",
    title: "Follow Up After the Show",
    desc: "Stay connected once you're back from Tampa.",
    Icon: Users,
  },
];

const INTEREST_LABELS: Record<InterestKey, string> = {
  consult: "Schedule a DXG consultation",
  review: "Request an AV proposal or production-plan review",
  rfpilot: "Join the RFPilot early-access list",
  followup: "Receive post-event follow-up",
};

const CAPABILITIES = [
  {
    Icon: Presentation,
    title: "General Sessions",
    desc: "Strategy, staging, video, audio, lighting, show flow, and on-site leadership managed as one connected production.",
  },
  {
    Icon: DoorOpen,
    title: "Breakout Rooms",
    desc: "Consistent technical standards and support across every room — not only the main stage.",
  },
  {
    Icon: Globe,
    title: "Hybrid & Virtual Events",
    desc: "Streaming and platform support that keeps the remote audience genuinely part of the experience — not just connected.",
  },
  {
    Icon: Palette,
    title: "Creative & Environmental Design",
    desc: "Stage and environmental design that makes the event feel intentional from the moment attendees walk in.",
  },
  {
    Icon: Camera,
    title: "Content Capture",
    desc: "Professional photo and video assets that extend the value of the event after the final session.",
  },
  {
    Icon: ClipboardList,
    title: "Meeting Planning & Production Support",
    desc: "From run-of-show development to on-site coordination and post-event recaps — support through every phase.",
  },
];

const PILLARS = [
  {
    Icon: Compass,
    title: "Clarity",
    desc: "Clear scopes, responsibilities, communication, and expectations throughout the process.",
  },
  {
    Icon: ShieldCheck,
    title: "Control",
    desc: "Greater visibility into the decisions that affect the production, budget, venue, schedule, and attendee experience.",
  },
  {
    Icon: Rocket,
    title: "Confidence",
    desc: "An experienced team that anticipates challenges, communicates early, and remains accountable through execution.",
  },
];

const PROBLEM_POINTS = [
  { lead: "Unclear proposals", rest: "formats and line items that are hard to compare." },
  { lead: "Limited cost visibility", rest: "no reliable frame of reference before bids arrive." },
  { lead: "Reactive support", rest: "problems addressed after they happen, not planned for." },
  { lead: "Rigid, one-size-fits-all solutions", rest: "setups that don't fit the event's actual vision." },
];

const RFP_VALUES = [
  { lead: "Guided RFP creation", rest: "turn event details into a structured AV RFP." },
  { lead: "Comparable vendor responses", rest: "see differences, exclusions, and missing items clearly." },
  { lead: "Investment guidance", rest: "a grounded frame of reference before proposals arrive." },
  { lead: "Proposal intelligence", rest: "review responses against your event's actual requirements." },
];

const fieldClass =
  "h-11 w-full rounded-[10px] border border-transparent bg-[#223140] px-4 text-sm text-white placeholder:text-white/50 transition focus:border-primary focus:outline-none";
const labelClass = "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-white/70";
const primaryBtn =
  "btn-slide-primary inline-flex items-center justify-center gap-2 rounded-full px-8 py-3 text-sm font-semibold";
const ghostBtn =
  "inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-8 py-3 text-sm font-semibold text-white transition hover:border-primary hover:text-primary";

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function BizBashMain() {
  const formRef = useRef<HTMLFormElement>(null);
  const confirmRef = useRef<HTMLDivElement>(null);
  const submitTimeRef = useRef<HTMLInputElement>(null);

  const [interests, setInterests] = useState<Record<InterestKey, boolean>>({
    consult: false,
    review: false,
    rfpilot: false,
    followup: false,
  });
  const [fieldErrors, setFieldErrors] = useState<Record<string, boolean>>({});
  const [interestError, setInterestError] = useState(false);
  const [showErrorBanner, setShowErrorBanner] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formStarted, setFormStarted] = useState(false);
  const [utm, setUtm] = useState({
    source: "",
    medium: "",
    campaign: "",
    content: "",
    qr: "",
    originalSource: "",
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const qr = params.get("qr") || "";
    setUtm({
      source: params.get("utm_source") || "",
      medium: params.get("utm_medium") || "",
      campaign: params.get("utm_campaign") || "",
      content: params.get("utm_content") || "",
      qr,
      originalSource: qr ? "QR Code" : document.referrer || "Direct",
    });
  }, []);

  useEffect(() => {
    if (submitted && confirmRef.current) {
      confirmRef.current.focus();
      confirmRef.current.scrollIntoView({
        behavior: prefersReducedMotion() ? "auto" : "smooth",
        block: "center",
      });
    }
  }, [submitted]);

  function setInterest(key: InterestKey, value: boolean) {
    setInterests((prev) => ({ ...prev, [key]: value }));
    trackEvent("interest_selected", { interest: key, checked: value });
  }

  function handleCardClick(key: InterestKey | "all") {
    if (key === "all") {
      const allOn = INTEREST_KEYS.every((k) => interests[k]);
      const next = !allOn;
      setInterests((prev) => {
        const updated = { ...prev };
        INTEREST_KEYS.forEach((k) => {
          updated[k] = next;
        });
        return updated;
      });
      trackEvent("interest_selected", { interest: "all", checked: next });
    } else {
      setInterest(key, !interests[key]);
    }
    document
      .getElementById("connectForm")
      ?.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "start" });
  }

  function handleRfpilotPreselect() {
    setInterest("rfpilot", true);
    trackEvent("cta_rfpilot_earlyaccess");
  }

  function handleFormInput() {
    if (!formStarted) {
      setFormStarted(true);
      trackEvent("form_start");
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const honeypot = form.elements.namedItem("dxg_website") as HTMLInputElement | null;
    if (honeypot?.value) return;

    let valid = true;
    let firstBad: HTMLElement | null = null;
    const newErrors: Record<string, boolean> = {};

    form
      .querySelectorAll<HTMLInputElement | HTMLSelectElement>("input[required], select[required]")
      .forEach((input) => {
        const bad =
          input.type === "checkbox"
            ? !(input as HTMLInputElement).checked
            : input.type === "email"
              ? !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim())
              : !input.value.trim();
        newErrors[input.id] = bad;
        if (bad && !firstBad) firstBad = input;
      });
    valid = Object.values(newErrors).every((bad) => !bad);

    const anyInterest = INTEREST_KEYS.some((k) => interests[k]);
    setInterestError(!anyInterest);
    if (!anyInterest) valid = false;

    setFieldErrors(newErrors);
    setShowErrorBanner(!valid);

    if (!valid) {
      (firstBad ?? document.getElementById("interestChecks"))?.focus();
      return;
    }

    if (submitTimeRef.current) {
      submitTimeRef.current.value = new Date().toISOString();
    }

    // ZOHO SUBMIT — WEB TEAM: replace this block with the actual POST to the
    // Zoho endpoint, e.g. fetch(zohoWebformURL, {method:"POST", body:new FormData(form)}),
    // then show the confirmation on success and handle failures with the error banner.
    trackEvent("form_submit_success", { ...interests });
    setSubmitted(true);
  }

  const allSelected = INTEREST_KEYS.every((k) => interests[k]);
  const disclosureOpen = interests.consult || interests.review;
  const selectedLabels = INTEREST_KEYS.filter((k) => interests[k]).map((k) => INTEREST_LABELS[k]);

  return (
    <main id="main">
      {/* HERO */}
      <section id="top" className="relative overflow-hidden bg-black pb-16 pt-14 lg:pb-24 lg:pt-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_55%_at_78%_18%,rgba(46,198,245,0.18),transparent_62%)]" />
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.9fr] lg:gap-16">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Meet DXG in Tampa
              </span>
              <p className="mt-3 text-sm font-medium text-white/60">
                BizBash Innovation Forum + Connect Marketplace 2026
              </p>

              <TypingTitle
                as="h1"
                className="mt-5 max-w-2xl text-4xl font-black uppercase leading-[0.98] text-white sm:text-5xl lg:text-6xl"
              >
                A Smarter Approach to <span className="text-primary">Event AV.</span>
              </TypingTitle>

              <Reveal
                as="p"
                className="mt-6 max-w-xl text-base leading-8 text-white/75 sm:text-lg"
              >
                DXG combines producer-led event production with RFPilot innovation to help
                planners make smarter AV decisions, gain more control over the process, and
                execute events with greater confidence.
              </Reveal>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#connect" className={primaryBtn} onClick={() => trackEvent("cta_hero_connect")}>
                  Connect With DXG
                </a>
                <a href="#rfpilot" className={ghostBtn} onClick={() => trackEvent("cta_hero_rfpilot")}>
                  Explore RFPilot
                </a>
              </div>

              <p className="mt-6 flex items-center gap-2 text-sm text-white/60">
                <span className="h-px w-5 bg-primary" />
                Built for meeting planners and event marketers who expect more from their
                production partner.
              </p>
            </div>

            <Reveal kind="image" className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.06] p-8 shadow-2xl shadow-black/30 backdrop-blur-[18px]">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.04)_45%,rgba(255,255,255,0.02)_100%)]" />
              <div className="relative z-10 space-y-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                    Where to find us
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    BizBash Innovation Forum
                  </p>
                  <p className="text-sm text-white/60">+ Connect Marketplace, Tampa 2026</p>
                </div>
                <div className="h-px w-full bg-white/10" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                    Featuring
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">RFPilot</p>
                  <p className="text-sm text-white/60">
                    A smarter way to build and review AV RFPs.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* THE PROBLEM */}
      <section id="smarter" className="bg-[#0a0a0a] py-16 lg:py-20">
        <Container>
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
              Why a Smarter Approach Is Needed
            </span>
            <TypingTitle
              as="h2"
              className="mt-3 text-3xl font-black uppercase leading-tight text-white sm:text-4xl"
            >
              The traditional AV process creates too many opportunities for uncertainty.
            </TypingTitle>
            <Reveal as="p" className="mt-4 text-base leading-7 text-white/70 sm:text-lg">
              The challenge is rarely just the equipment. It is gaining reliable information
              early, understanding what is included, aligning the production plan with the
              event&apos;s goals, and knowing that the team executing the event is thinking ahead.
            </Reveal>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {PROBLEM_POINTS.map((item) => (
              <Reveal
                key={item.lead}
                as="div"
                className="rounded-xl border border-white/10 bg-[#111] p-5"
              >
                <p className="text-sm leading-6 text-white/70">
                  <span className="font-semibold text-white">{item.lead}</span> — {item.rest}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* RFPILOT */}
      <section id="rfpilot" className="bg-black py-16 lg:py-20">
        <Container>
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
              Introducing RFPilot
            </span>
            <TypingTitle
              as="h2"
              className="mt-3 text-3xl font-black uppercase leading-tight text-white sm:text-4xl"
            >
              Build the RFP. Understand the responses. Make the decision with confidence.
            </TypingTitle>
            <Reveal as="p" className="mt-4 text-base leading-7 text-white/70 sm:text-lg">
              RFPilot is being developed to simplify the AV RFP process for meeting planners —
              from organizing event requirements to reviewing the proposals vendors submit.
            </Reveal>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {RFP_VALUES.map((item) => (
              <Reveal
                key={item.lead}
                as="div"
                className="rounded-xl border border-primary/20 bg-[#081624] p-5"
              >
                <p className="text-sm leading-6 text-white/70">
                  <span className="font-semibold text-white">{item.lead}</span> — {item.rest}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal
            as="p"
            className="mt-8 max-w-2xl border-l-2 border-primary/40 pl-4 text-sm italic leading-6 text-white/60"
          >
            RFPilot is currently being developed by Digital Xperience Group. Features and
            availability may evolve as the platform moves through testing and early access.
          </Reveal>

          <button type="button" className={`${primaryBtn} mt-8`} onClick={handleRfpilotPreselect}>
            Join the RFPilot Early-Access List
          </button>
        </Container>
      </section>

      {/* CAPABILITIES */}
      <section id="capabilities" className="bg-[#0a0a0a] py-16 lg:py-20">
        <Container>
          <div className="max-w-2xl text-left sm:text-center sm:mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
              Producer-Led Event Production
            </span>
            <TypingTitle
              as="h2"
              className="mt-3 text-3xl font-black uppercase leading-tight text-white sm:text-4xl"
            >
              One production partner. Every part of the event experience.
            </TypingTitle>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((cap) => (
              <article
                key={cap.title}
                className="overview-box group rounded-2xl bg-[#081624] p-6 transition duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/40"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/50 bg-[#0b2237]">
                  <cap.Icon size={22} className="text-primary" strokeWidth={2} />
                </div>
                <h3 className="mt-5 text-base font-bold text-white">{cap.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/70">{cap.desc}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* PRODUCER-LED DIFFERENCE */}
      <section className="bg-black py-16 lg:py-20">
        <Container>
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
              The DXG Difference
            </span>
            <TypingTitle
              as="h2"
              className="mt-3 text-3xl font-black uppercase leading-tight text-white sm:text-4xl"
            >
              A producer-led approach focused on real-world execution.
            </TypingTitle>
            <Reveal as="p" className="mt-4 text-base leading-7 text-white/70 sm:text-lg">
              DXG approaches event AV from a producer&apos;s perspective. Technology supports the
              experience, but planning, communication, accountability, and on-site leadership are
              what keep the event on track.
            </Reveal>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {PILLARS.map((pillar) => (
              <Reveal
                key={pillar.title}
                as="div"
                className="rounded-xl border-t-2 border-primary bg-[#111] p-6"
              >
                <pillar.Icon size={26} className="text-primary" strokeWidth={2} />
                <h3 className="mt-4 text-lg font-bold text-white">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/70">{pillar.desc}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* EVENT CONNECTION OFFER */}
      <section id="connect" className="bg-[#0a0a0a] py-16 lg:py-20">
        <Container>
          <div className="max-w-2xl">
            <TypingTitle
              as="h2"
              className="text-3xl font-black uppercase leading-tight text-white sm:text-4xl"
            >
              Let&apos;s continue the conversation <span className="text-primary">after Tampa.</span>
            </TypingTitle>
            <Reveal as="p" className="mt-4 text-base leading-7 text-white/70 sm:text-lg">
              Whether you are planning an upcoming conference, evaluating an AV proposal,
              exploring RFPilot, or simply looking for a better production approach, tell us
              where we can be most useful. Select as many as apply — one submission covers
              everything.
            </Reveal>
          </div>

          <div
            className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            role="group"
            aria-label="Select your interests"
          >
            {INTEREST_CARDS.map((card) => {
              const selected = interests[card.key];
              return (
                <button
                  key={card.key}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => handleCardClick(card.key)}
                  className={`flex flex-col items-start gap-3 rounded-xl border-2 p-5 text-left transition hover:-translate-y-1 ${
                    selected
                      ? "border-primary bg-primary/[0.08] shadow-[0_8px_24px_rgba(46,198,245,0.18)]"
                      : "border-white/10 bg-[#111] hover:border-white/25"
                  }`}
                >
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-full border-2 transition ${
                      selected ? "border-primary bg-primary text-black" : "border-white/25 text-transparent"
                    }`}
                  >
                    <Check size={16} strokeWidth={3} />
                  </span>
                  <h3 className="text-sm font-bold text-white">{card.title}</h3>
                  <p className="text-xs leading-5 text-white/60">{card.desc}</p>
                </button>
              );
            })}

            <button
              type="button"
              aria-pressed={allSelected}
              onClick={() => handleCardClick("all")}
              className={`flex items-center gap-4 rounded-xl border-2 p-5 text-left transition hover:-translate-y-1 sm:col-span-2 lg:col-span-4 ${
                allSelected
                  ? "border-primary bg-primary/[0.08] shadow-[0_8px_24px_rgba(46,198,245,0.18)]"
                  : "border-white/10 bg-[#111] hover:border-white/25"
              }`}
            >
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 transition ${
                  allSelected ? "border-primary bg-primary text-black" : "border-white/25 text-transparent"
                }`}
              >
                <Check size={16} strokeWidth={3} />
              </span>
              <span>
                <h3 className="text-sm font-bold text-white">All of the Above</h3>
                <p className="text-xs leading-5 text-white/60">
                  Select every option — one conversation covers it all.
                </p>
              </span>
            </button>
          </div>
        </Container>
      </section>

      {/* FORM */}
      <section className="bg-black py-16 lg:py-20">
        <Container className="max-w-[900px]">
          <div className="overflow-hidden rounded-[22px] border border-primary/15 bg-[#071827] p-8 shadow-[0_28px_90px_rgba(0,0,0,0.42)] sm:p-10">
            {!submitted && (
              <form
                id="connectForm"
                ref={formRef}
                noValidate
                onInput={handleFormInput}
                onSubmit={handleSubmit}
              >
                <TypingTitle
                  as="h2"
                  id="formHeadline"
                  className="text-2xl font-black uppercase leading-tight text-white sm:text-3xl"
                >
                  How would you like DXG to follow up?
                </TypingTitle>

                {showErrorBanner && (
                  <div
                    className="mt-6 rounded-[10px] border border-red-400/40 bg-red-500/10 px-4 py-3 text-sm text-red-300"
                    role="alert"
                  >
                    Please complete the highlighted fields so we can follow up correctly.
                  </div>
                )}

                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className={labelClass} htmlFor="firstName">
                      First Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="First_Name"
                      autoComplete="given-name"
                      required
                      className={`${fieldClass} ${fieldErrors.firstName ? "border-red-400" : ""}`}
                    />
                    {fieldErrors.firstName && (
                      <p className="mt-1 text-xs text-red-300">Enter your first name.</p>
                    )}
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="lastName">
                      Last Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="Last_Name"
                      autoComplete="family-name"
                      required
                      className={`${fieldClass} ${fieldErrors.lastName ? "border-red-400" : ""}`}
                    />
                    {fieldErrors.lastName && (
                      <p className="mt-1 text-xs text-red-300">Enter your last name.</p>
                    )}
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="email">
                      Work Email <span className="text-primary">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="Email"
                      autoComplete="email"
                      inputMode="email"
                      required
                      className={`${fieldClass} ${fieldErrors.email ? "border-red-400" : ""}`}
                    />
                    {fieldErrors.email && (
                      <p className="mt-1 text-xs text-red-300">Enter a valid work email address.</p>
                    )}
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="company">
                      Company <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="Company"
                      autoComplete="organization"
                      required
                      className={`${fieldClass} ${fieldErrors.company ? "border-red-400" : ""}`}
                    />
                    {fieldErrors.company && (
                      <p className="mt-1 text-xs text-red-300">Enter your company name.</p>
                    )}
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="jobTitle">
                      Job Title <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      id="jobTitle"
                      name="Job_Title"
                      autoComplete="organization-title"
                      required
                      className={`${fieldClass} ${fieldErrors.jobTitle ? "border-red-400" : ""}`}
                    />
                    {fieldErrors.jobTitle && (
                      <p className="mt-1 text-xs text-red-300">Enter your job title.</p>
                    )}
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="role">
                      Primary Professional Role <span className="text-primary">*</span>
                    </label>
                    <select
                      id="role"
                      name="Primary_Role"
                      required
                      defaultValue=""
                      className={`${fieldClass} ${fieldErrors.role ? "border-red-400" : ""}`}
                    >
                      <option value="">Select your role</option>
                      <option>Meeting or Event Planner</option>
                      <option>Event Marketer</option>
                      <option>Association Professional</option>
                      <option>Corporate Events</option>
                      <option>Experiential or Creative Agency</option>
                      <option>Procurement or Sourcing</option>
                      <option>Venue or Hospitality</option>
                      <option>Other</option>
                    </select>
                    {fieldErrors.role && (
                      <p className="mt-1 text-xs text-red-300">Select your primary role.</p>
                    )}
                  </div>
                </div>

                <fieldset className="mt-8">
                  <legend className="mb-3 text-sm font-bold text-white">
                    How can DXG be most useful? <span className="text-primary">*</span>{" "}
                    <span className="font-normal text-white/50">(select all that apply)</span>
                  </legend>
                  <div className="grid gap-3 sm:grid-cols-2" id="interestChecks" tabIndex={-1}>
                    {[
                      { key: "consult" as const, name: "Consultation_Interest", label: "Schedule a DXG consultation" },
                      { key: "review" as const, name: "Proposal_Review_Interest", label: "Request an AV proposal or production-plan review" },
                      { key: "rfpilot" as const, name: "RFPilot_Interest", label: "Join the RFPilot early-access list" },
                      { key: "followup" as const, name: "Followup_Interest", label: "Receive post-event follow-up" },
                    ].map((item) => (
                      <label
                        key={item.key}
                        className={`flex cursor-pointer items-start gap-3 rounded-[10px] border p-3 text-sm transition ${
                          interests[item.key]
                            ? "border-primary bg-primary/[0.08] text-white"
                            : "border-white/10 bg-[#111] text-white/75 hover:border-white/25"
                        }`}
                      >
                        <input
                          type="checkbox"
                          name={item.name}
                          value="Yes"
                          checked={interests[item.key]}
                          onChange={() => setInterest(item.key, !interests[item.key])}
                          className="mt-0.5 h-4 w-4 shrink-0 accent-primary"
                        />
                        {item.label}
                      </label>
                    ))}
                  </div>
                  {interestError && (
                    <p className="mt-2 text-xs text-red-300">Select at least one option.</p>
                  )}
                </fieldset>

                {disclosureOpen && (
                  <div className="mt-8 grid gap-5 border-t border-white/10 pt-8 sm:grid-cols-2">
                    <p className="text-xs italic leading-6 text-white/60 sm:col-span-2">
                      A few optional details help us come prepared. Skip anything you&apos;re not
                      ready to share.
                    </p>
                    <div>
                      <label className={labelClass} htmlFor="eventName">Event or Project Name</label>
                      <input type="text" id="eventName" name="Event_Name" className={fieldClass} />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="eventDate">Estimated Event Date</label>
                      <input type="month" id="eventDate" name="Event_Date" className={fieldClass} />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="eventLocation">Event Location</label>
                      <input
                        type="text"
                        id="eventLocation"
                        name="Event_Location"
                        placeholder="City, venue, or TBD"
                        className={fieldClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="attendance">Expected Attendance</label>
                      <select id="attendance" name="Attendance" defaultValue="" className={fieldClass}>
                        <option value="">Select a range</option>
                        <option>Under 250</option>
                        <option>250 – 1,000</option>
                        <option>1,000 – 3,000</option>
                        <option>3,000 – 6,000</option>
                        <option>6,000+</option>
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label className={labelClass} htmlFor="scope">General Session &amp; Breakout Scope</label>
                      <input
                        type="text"
                        id="scope"
                        name="Session_Scope"
                        placeholder="e.g., 1 general session, 12 breakouts, hybrid stream"
                        className={fieldClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="stage">Current Stage</label>
                      <select id="stage" name="Event_Stage" defaultValue="" className={fieldClass}>
                        <option value="">Select a stage</option>
                        <option>Early Planning</option>
                        <option>Building the RFP</option>
                        <option>Reviewing Proposals</option>
                        <option>Vendor Selected</option>
                        <option>Exploring Future Options</option>
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label className={labelClass} htmlFor="helpful">What would be most helpful right now?</label>
                      <textarea
                        id="helpful"
                        name="Most_Helpful"
                        rows={3}
                        className={`${fieldClass} h-auto resize-none py-3`}
                      ></textarea>
                    </div>
                  </div>
                )}

                <input type="hidden" name="Lead_Source" value="BizBash / Connect Marketplace" readOnly />
                <input type="hidden" name="Campaign" value="BizBash Tampa 2026" readOnly />
                <input type="hidden" name="Landing_Page" value="DXG Smarter Approach Campaign" readOnly />
                <input type="hidden" name="UTM_Source" value={utm.source} readOnly />
                <input type="hidden" name="UTM_Medium" value={utm.medium} readOnly />
                <input type="hidden" name="UTM_Campaign" value={utm.campaign} readOnly />
                <input type="hidden" name="UTM_Content" value={utm.content} readOnly />
                <input type="hidden" name="QR_Code_Source" value={utm.qr} readOnly />
                <input type="hidden" name="Original_Source" value={utm.originalSource} readOnly />
                <input type="hidden" name="Submission_DateTime" ref={submitTimeRef} defaultValue="" />
                <input
                  type="text"
                  name="dxg_website"
                  id="hpField"
                  tabIndex={-1}
                  autoComplete="off"
                  style={{ position: "absolute", left: "-9999px" }}
                  aria-hidden="true"
                />

                <div className="mt-8 space-y-3 border-t border-white/10 pt-8">
                  <label className="flex items-start gap-3 text-xs leading-5 text-white/70">
                    <input
                      type="checkbox"
                      id="consentRespond"
                      name="Consent_Respond"
                      value="Yes"
                      required
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 accent-primary"
                    />
                    <span>
                      I agree that DXG may contact me about this request. See the{" "}
                      <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                        DXG Privacy Policy
                      </a>
                      . <span className="text-primary">*</span>
                    </span>
                  </label>
                  <label className="flex items-start gap-3 text-xs leading-5 text-white/70">
                    <input
                      type="checkbox"
                      name="Consent_Marketing"
                      value="Yes"
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 accent-primary"
                    />
                    <span>Send me occasional planner insights and DXG updates by email. (Optional)</span>
                  </label>
                </div>

                <div className="mt-8">
                  <button type="submit" className={`${primaryBtn} w-full sm:w-auto`}>
                    Connect With DXG
                  </button>
                </div>
              </form>
            )}

            {submitted && (
              <div ref={confirmRef} tabIndex={-1}>
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Check size={26} className="text-primary" strokeWidth={2.4} />
                </div>
                <TypingTitle
                  as="h2"
                  className="mt-5 text-2xl font-black uppercase leading-tight text-white sm:text-3xl"
                >
                  Thank you — we&apos;ll take it from here.
                </TypingTitle>
                <p className="mt-3 text-sm leading-6 text-white/70">
                  Your request is on its way to the DXG team. Here&apos;s what you selected:
                </p>
                <ul className="mt-5 space-y-2">
                  {selectedLabels.map((label) => (
                    <li key={label} className="flex items-start gap-2 text-sm text-white/85">
                      <Check size={16} className="mt-0.5 shrink-0 text-primary" />
                      {label}
                    </li>
                  ))}
                </ul>

                {interests.consult && (
                  <div className="mt-6 rounded-xl border border-primary/30 bg-primary/[0.08] p-5">
                    <p className="text-sm leading-6 text-white/85">
                      <strong className="text-white">Want to lock in a time now?</strong> Grab a
                      spot on the DXG calendar — no pressure, no pitch deck. Just a conversation
                      about your event.
                    </p>
                    <a
                      href="/contact-us"
                      className={`${primaryBtn} mt-4`}
                      onClick={() => trackEvent("cta_confirm_schedule")}
                    >
                      Schedule a Strategy Call
                    </a>
                  </div>
                )}

                {interests.rfpilot && (
                  <p className="mt-4 text-sm text-white/70">
                    RFPilot early-access details will be sent to your email as the platform moves
                    toward release.
                  </p>
                )}

                <p className="mt-4 text-sm text-white/70">
                  In the meantime, feel free to{" "}
                  <a
                    href="/experiences-created"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline"
                  >
                    see what DXG produces
                  </a>
                  .
                </p>
              </div>
            )}
          </div>
        </Container>
      </section>
    </main>
  );
}
