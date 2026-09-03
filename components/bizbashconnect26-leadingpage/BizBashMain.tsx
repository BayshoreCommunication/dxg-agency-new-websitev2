"use client";

import emailjs from "@emailjs/browser";
import BizBashAppPreview from "components/bizbashconnect26-leadingpage/BizBashAppPreview";
import TypingTitle from "components/layout/TypingTitle";
import Container from "components/shared/Container";
import Reveal from "components/shared/Reveal";
import {
  Award,
  Calendar,
  Check,
  ClipboardCheck,
  Compass,
  Lock,
  Radio,
  Rocket,
  ShieldCheck,
  Users,
  X,
} from "lucide-react";
import { Bebas_Neue } from "next/font/google";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { trackEvent } from "./analytics";

const displayFont = Bebas_Neue({ subsets: ["latin"], weight: "400" });

type InterestKey = "consult" | "review" | "rfpilot" | "followup";

const INTEREST_KEYS: InterestKey[] = [
  "consult",
  "review",
  "rfpilot",
  "followup",
];

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
    title: "Production Management (Flat)",
    background: "/images/rfp-event/Group 31.png",
    icon: "/images/rfp-event/meeting 1 (3).png",
  },
  {
    title: "AV Technology",
    background: "/images/rfp-event/Group 30.png",
    icon: "/images/rfp-event/meeting 1 (2).png",
  },
  {
    title: "Virtual & Hybrid Events",
    background: "/images/rfp-event/Group 28.png",
    icon: "/images/rfp-event/meeting 1 (1).png",
  },
  {
    title: "Creative Services",
    background: "/images/rfp-event/Group 32.png",
    icon: "/images/rfp-event/meeting 1 (4).png",
  },
  {
    title: "Photography & Video Production",
    background: "/images/rfp-event/Group 29 (1).png",
    icon: "/images/rfp-event/meeting 1 (5).png",
  },
  {
    title: "Audience Engagement",
    background: "/images/rfp-event/Frame 224.png",
    icon: "/images/rfp-event/meeting 1 (6).png",
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
    desc: "Visibility into the decisions that drive production cost and attendee experience: venue, calendar, format, and scope. Surfaced while they can still be changed, not explained after they can't.",
  },
  {
    Icon: Rocket,
    title: "Confidence",
    desc: "An experienced team that anticipates challenges, communicates early, and remains accountable through execution.",
  },
];

const PROBLEM_POINTS = [
  {
    lead: "Proposals are built for the vendor's convenience, not for comparison.",
    rest: "Every vendor uses a different format, includes different items, and buries different assumptions in the line items.",
  },
  {
    lead: "Upstream decisions surface as downstream costs.",
    rest: "Venue infrastructure, calendar position, and session format show up in the bid as numbers nobody connects back to their cause.",
  },
  {
    lead: "Production insight arrives after the contract.",
    rest: "The people who could have flagged the expensive choices weren't in the room when those choices were made.",
  },
];

const RFP_VALUES = [
  {
    lead: "Guided RFP creation",
    rest: "turn event details into a structured AV RFP.",
  },
  {
    lead: "Comparable vendor responses",
    rest: "see differences, exclusions, and missing items clearly.",
  },
  {
    lead: "Investment guidance",
    rest: "a grounded frame of reference built from aggregate production data, so scope and budget are aligned before the first proposal arrives.",
  },
  {
    lead: "Proposal intelligence",
    rest: "review responses against your event's actual requirements.",
  },
];

const NEUTRALITY_POINTS = [
  {
    lead: "Your RFP data is yours.",
    rest: "The RFPs you build, the responses you receive, and your evaluations belong to you. DXG's production team does not access or use them.",
  },
  {
    lead: "DXG never sees competing proposals.",
    rest: "Vendor responses submitted through RFPilot are visible only to the planner who issued the RFP.",
  },
  {
    lead: "RFPilot doesn't steer work to DXG.",
    rest: "The platform doesn't recommend vendors, rank DXG, or notify DXG when you issue an RFP. If you want DXG to bid, you invite us the way you'd invite anyone, and we respond on the same terms as every other vendor.",
  },
  {
    lead: "Guidance comes from aggregate data, not your vendors' pricing.",
    rest: "Budget references are built from industry-level production data, never from proposals submitted to you through the platform.",
  },
];

const CREDIBILITY_POINTS = [
  "300+ years of live event production leadership",
  "AVIXA Board of Directors service with the AV industry's global trade association",
  "2500+ general sessions produced for audiences of 50-7500 over the last 26+ years",
  "1500+ breakout room programs managed under a single technical standard",
];

const fieldClass =
  "h-11 w-full rounded-[10px] border border-transparent bg-[#223140] px-4 text-sm text-white placeholder:text-white/50 transition focus:border-primary focus:outline-none";
const labelClass =
  "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-white/70";
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
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    document.getElementById("connectForm")?.scrollIntoView({
      behavior: prefersReducedMotion() ? "auto" : "smooth",
      block: "start",
    });
  }

  function handleRfpilotPreselect() {
    setInterest("rfpilot", true);
    trackEvent("cta_rfpilot_earlyaccess");
    document.getElementById("connectForm")?.scrollIntoView({
      behavior: prefersReducedMotion() ? "auto" : "smooth",
      block: "start",
    });
  }

  function handleFormInput() {
    if (!formStarted) {
      setFormStarted(true);
      trackEvent("form_start");
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const honeypot = form.elements.namedItem(
      "dxg_website",
    ) as HTMLInputElement | null;
    if (honeypot?.value) return;

    let valid = true;
    let firstBad: HTMLElement | null = null;
    const newErrors: Record<string, boolean> = {};

    form
      .querySelectorAll<
        HTMLInputElement | HTMLSelectElement
      >("input[required], select[required]")
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

    let anyInterest = INTEREST_KEYS.some((k) => interests[k]);
    if (!anyInterest) {
      setInterests((prev) => ({ ...prev, followup: true }));
      anyInterest = true;
    }
    setInterestError(false);

    setFieldErrors(newErrors);
    setShowErrorBanner(!valid);

    if (!valid) {
      if (firstBad) (firstBad as HTMLElement).focus();
      return;
    }

    if (submitTimeRef.current) {
      submitTimeRef.current.value = new Date().toLocaleString();
    }

    setIsSubmitting(true);

    try {
      await emailjs.sendForm("service_28aeyl4", "template_y72vnp4", form, {
        publicKey: "JJbrXAjJx5I2RoK35",
      });
      trackEvent("form_submit_success", { ...interests });
      setSubmitted(true);
      form.reset();
    } catch (error) {
      console.error("EmailJS Submission Error:", error);
      setShowErrorBanner(true);
    } finally {
      setIsSubmitting(false);
    }
  }

  const allSelected = INTEREST_KEYS.every((k) => interests[k]);
  const selectedLabels = INTEREST_KEYS.filter((k) => interests[k]).map(
    (k) => INTEREST_LABELS[k],
  );

  return (
    <main id="main">
      {/* HERO */}
      <section
        id="top"
        className="relative overflow-hidden bg-black pb-8 pt-7 lg:pb-12 lg:pt-10"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_55%_at_78%_18%,rgba(46,198,245,0.18),transparent_62%)]" />
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.9fr] lg:gap-16">
            <div className="order-2 text-center lg:order-1 lg:col-span-2">
              {/* <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Meet DXG in Tampa
              </span> */}
              <p className="mt-3 text-sm font-medium text-white/60">
                BizBash Connect Marketplace 2026
              </p>

              <TypingTitle
                as="h1"
                className="mx-auto mt-4 max-w-3xl text-3xl font-black uppercase leading-[1.02] text-white sm:text-5xl lg:text-6xl"
              >
                A Smarter Approach to{" "}
                <span className="text-primary">Event AV.</span>
              </TypingTitle>

              <Reveal
                as="p"
                className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/75 sm:mt-6 sm:text-lg sm:leading-8"
              >
                DXG combines producer-led event production with RFPilot to give
                planners visibility into the decisions that shape AV budgets,
                including the ones made long before the RFP goes out.
              </Reveal>

              <div className="mt-6 flex flex-wrap justify-center gap-3 sm:mt-8 sm:gap-4">
                <a
                  href="#connect"
                  className={primaryBtn}
                  onClick={() => trackEvent("cta_hero_connect")}
                >
                  Connect With DXG
                </a>
                <a
                  href="#rfpilot"
                  className={ghostBtn}
                  onClick={() => trackEvent("cta_hero_rfpilot")}
                >
                  Explore RFPilot
                </a>
              </div>

              <p className="mt-6 flex items-center justify-center gap-2 text-xs text-white/60 sm:text-sm">
                <span className="h-px w-5 bg-primary" />
                Built for meeting planners and event marketers who expect more
                from their production partner.
              </p>
            </div>

            {/* <Reveal
              kind="image"
              className="order-1 relative isolate flex min-h-[240px] flex-col justify-end overflow-hidden rounded-2xl border border-white/15 bg-[#071929] shadow-2xl shadow-black/40 sm:aspect-[16/9] sm:rounded-3xl lg:order-2"
            >
              <Image
                src="/images/bizbashconnect26/herorightsideimage.webp"
                alt="DXG at BizBash Connect Marketplace Tampa 2026 featuring RFPilot"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 95vw"
                className="object-contain object-right-top sm:object-cover sm:object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/20" />
              <div className="absolute inset-0 bg-primary/[0.04]" />

              <div className="relative z-10 space-y-3 p-4 sm:space-y-5 sm:p-6 lg:p-8">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary sm:text-xs">
                    Where to find us
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white sm:mt-2 sm:text-lg">
                    BizBash Connect Marketplace, Tampa 2026
                  </p>
                </div>
                <div className="h-px w-full bg-white/15" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary sm:text-xs">
                    Featuring
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white sm:mt-2 sm:text-lg">
                    RFPilot
                  </p>
                  <p className="text-xs text-white/70 sm:text-sm">
                    A smarter way to build and review AV RFPs.
                  </p>
                </div>
              </div>
            </Reveal> */}
          </div>
        </Container>
      </section>

      {/* EVENT CONNECTION OFFER */}
      <section id="connect" className="bg-[#0a0a0a] py-8 lg:py-10">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <TypingTitle
              as="h2"
              className="text-3xl font-black uppercase leading-tight text-white sm:text-4xl"
            >
              Let&apos;s continue the conversation{" "}
              <span className="text-primary">after Tampa.</span>
            </TypingTitle>
            <Reveal
              as="p"
              className="mt-4 text-base leading-7 text-white/70 sm:text-lg"
            >
              Whether you are planning an upcoming conference, evaluating an AV
              proposal, exploring RFPilot, or simply looking for a better
              production approach, tell us where we can be most useful. Select
              as many as apply — one submission covers everything.
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
                      selected
                        ? "border-primary bg-primary text-black"
                        : "border-white/25 text-transparent"
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
                  allSelected
                    ? "border-primary bg-primary text-black"
                    : "border-white/25 text-transparent"
                }`}
              >
                <Check size={16} strokeWidth={3} />
              </span>
              <span>
                <h3 className="text-sm font-bold text-white">
                  All of the Above
                </h3>
                <p className="text-xs leading-5 text-white/60">
                  Select every option — one conversation covers it all.
                </p>
              </span>
            </button>
          </div>
        </Container>
      </section>

      {/* FORM */}
      <section className="bg-black py-8 lg:py-10">
        <Container className="max-w-[900px]">
          <div className="overflow-hidden rounded-[22px] border border-primary/15 bg-[#071827] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.42)] sm:p-10">
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
                  Please complete the highlighted fields so we can follow up
                  correctly.
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
                    <p className="mt-1 text-xs text-red-300">
                      Enter your first name.
                    </p>
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
                    <p className="mt-1 text-xs text-red-300">
                      Enter your last name.
                    </p>
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
                    <p className="mt-1 text-xs text-red-300">
                      Enter a valid work email address.
                    </p>
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
                    <p className="mt-1 text-xs text-red-300">
                      Enter your company name.
                    </p>
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
                    <p className="mt-1 text-xs text-red-300">
                      Enter your job title.
                    </p>
                  )}
                </div>
              </div>

              <input
                type="hidden"
                name="Selected_Interests"
                value={selectedLabels.join(", ")}
                readOnly
              />
              <input
                type="hidden"
                name="Lead_Source"
                value="BizBash / Connect Marketplace"
                readOnly
              />
              <input
                type="hidden"
                name="Campaign"
                value="BizBash Tampa 2026"
                readOnly
              />
              <input
                type="hidden"
                name="Landing_Page"
                value="DXG Smarter Approach Campaign"
                readOnly
              />
              <input
                type="hidden"
                name="UTM_Source"
                value={utm.source}
                readOnly
              />
              <input
                type="hidden"
                name="UTM_Medium"
                value={utm.medium}
                readOnly
              />
              <input
                type="hidden"
                name="UTM_Campaign"
                value={utm.campaign}
                readOnly
              />
              <input
                type="hidden"
                name="UTM_Content"
                value={utm.content}
                readOnly
              />
              <input
                type="hidden"
                name="QR_Code_Source"
                value={utm.qr}
                readOnly
              />
              <input
                type="hidden"
                name="Original_Source"
                value={utm.originalSource}
                readOnly
              />
              <input
                type="hidden"
                name="Submission_DateTime"
                ref={submitTimeRef}
                defaultValue=""
              />
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
                    <a
                      href="/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline"
                    >
                      DXG Privacy Policy
                    </a>
                    . <span className="text-primary">*</span>
                  </span>
                </label>
                {/* <label className="flex items-start gap-3 text-xs leading-5 text-white/70">
                  <input
                    type="checkbox"
                    name="Consent_Marketing"
                    value="Yes"
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 accent-primary"
                  />
                  <span>Send me occasional planner insights and DXG updates by email. (Optional)</span>
                </label> */}
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`${primaryBtn} w-full sm:w-auto disabled:opacity-60`}
                >
                  {isSubmitting ? "Sending..." : "Connect With DXG"}
                </button>
              </div>
            </form>
          </div>
        </Container>

        {/* SUCCESS MODAL */}
        {submitted && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 backdrop-blur-md"
            onClick={() => setSubmitted(false)}
          >
            <div
              ref={confirmRef}
              tabIndex={-1}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] overflow-y-auto w-full max-w-lg rounded-2xl border border-primary/30 bg-[#071827] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.8)] text-left sm:p-8"
            >
              <button
                onClick={() => setSubmitted(false)}
                className="absolute right-4 top-4 text-white/40 transition hover:text-white"
                aria-label="Close"
              >
                <X size={20} />
              </button>

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
                Your request is on its way to the DXG team. Here&apos;s what you
                selected:
              </p>

              <ul className="mt-5 space-y-2">
                {selectedLabels.map((label) => (
                  <li
                    key={label}
                    className="flex items-start gap-2 text-sm text-white/85"
                  >
                    <Check size={16} className="mt-0.5 shrink-0 text-primary" />
                    {label}
                  </li>
                ))}
              </ul>

              {interests.consult && (
                <div className="mt-6 rounded-xl border border-primary/30 bg-primary/[0.08] p-5">
                  <p className="text-sm leading-6 text-white/85">
                    <strong className="text-white">
                      Want to lock in a time now?
                    </strong>{" "}
                    Grab a spot on the DXG calendar — no pressure, no pitch
                    deck. Just a conversation about your event.
                  </p>
                  <a
                    href="/contact-us"
                    className={`${primaryBtn} mt-4 text-xs`}
                    onClick={() => trackEvent("cta_confirm_schedule")}
                  >
                    Schedule a Strategy Call
                  </a>
                </div>
              )}

              {interests.rfpilot && (
                <p className="mt-4 text-sm text-white/70">
                  RFPilot early-access details will be sent to your email as the
                  platform moves toward release.
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

              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 w-full rounded-lg bg-primary py-3 text-sm font-bold uppercase tracking-widest text-black transition hover:brightness-110"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </section>

      {/* FIND DXG IN TAMPA */}
      {/* <section className="border-y border-white/10 bg-black py-5 lg:py-7">
        <Container>
          <div className="mt-2 rounded-xl border border-white/10 bg-[#111] p-6 text-center sm:p-8">
            <div className="mx-auto flex items-center justify-center gap-2">
              <MapPin size={18} className="text-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                Find DXG in Tampa
              </span>
            </div>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-primary">
              Connect Marketplace One-on-Ones
            </p>
            <h3 className="mt-2 text-lg font-bold text-white sm:text-xl">Meet with Ace and Suley</h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/70 sm:text-base sm:leading-7">
              Ace and Suley are taking meetings throughout the Marketplace. Request DXG
              through the Connect appointment system, or use the form below and we&apos;ll
              confirm a time before the show.
            </p>
          </div>
        </Container>
      </section> */}

      {/* CREDIBILITY STRIP */}
      <section className="bg-[#0a0a0a] py-5 lg:py-7">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
            <div>
              <div className="flex items-center gap-2">
                <Award size={18} className="text-primary" />
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                  Production Leadership You Can Verify
                </span>
              </div>
              <TypingTitle
                as="h2"
                className="mt-3 text-2xl font-black uppercase leading-tight text-white sm:text-3xl"
              >
                DXG is LED By Producers, Built For Planners
              </TypingTitle>
              <Reveal as="p" className="mt-4 text-base leading-7 text-white/70">
                The team behind your event has been producing conferences,
                general sessions, and multi-room programs together since 2006.
              </Reveal>
              <a
                href="/experiences-created"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary underline"
              >
                See the work: Experiences We&apos;ve Created
              </a>
            </div>
            <Reveal kind="list" className="grid gap-3">
              {CREDIBILITY_POINTS.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 rounded-xl border border-primary/20 bg-[#081624] p-4 text-sm leading-6 text-white/80"
                >
                  <Check size={16} className="mt-0.5 shrink-0 text-primary" />
                  {point}
                </li>
              ))}
            </Reveal>
          </div>
        </Container>
      </section>

      <BizBashAppPreview />

      {/* THE PROBLEM */}
      {/* <section id="smarter" className="bg-[#0a0a0a] py-8 lg:py-10">
        <Container>
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
              You Know the Process
            </span>
            <TypingTitle
              as="h2"
              className="mt-3 text-3xl font-black uppercase leading-tight text-white sm:text-4xl"
            >
              You know the process. The leverage is earlier than the RFP.
            </TypingTitle>
            <Reveal as="p" className="mt-4 text-base leading-7 text-white/70 sm:text-lg">
              You&apos;ve run enough procurements to know the mechanics cold. Here is what
              rarely gets said out loud: by the time your AV RFP goes out, most of the budget
              has already been decided. The venue you contracted, the dates you locked, and the
              format your stakeholders chose set the structure months earlier. The RFP
              negotiates the margins.
            </Reveal>
            <Reveal as="p" className="mt-4 text-base font-semibold leading-7 text-white sm:text-lg" delay={0.06}>
              That&apos;s not a knowledge gap on your side. It&apos;s a visibility gap in how
              the industry works.
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
                  <span className="font-semibold text-white">{item.lead}</span> {item.rest}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal
            as="p"
            className="mt-8 max-w-2xl border-l-2 border-primary/40 pl-4 text-sm leading-6 text-white/70"
          >
            DXG works with planners at the point where those decisions are still open, and
            brings production-side visibility into the ones that aren&apos;t.
          </Reveal>
        </Container>
      </section> */}

      {/* RFPILOT */}
      <section id="rfpilot" className="bg-black py-8 lg:py-10">
        <Container>
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
              Introducing RFPilot
            </span>
            <TypingTitle
              as="h2"
              className="mt-3 text-3xl font-black uppercase leading-tight text-white sm:text-4xl"
            >
              Build the RFP. Understand the responses. Make the decision with
              confidence.
            </TypingTitle>
            <Reveal
              as="p"
              className="mt-4 text-base leading-7 text-white/70 sm:text-lg"
            >
              RFPilot is being developed to simplify the AV RFP process for
              meeting planners — from organizing event requirements to reviewing
              the proposals vendors submit.
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
                  <span className="font-semibold text-white">{item.lead}</span>{" "}
                  — {item.rest}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal
            as="p"
            className="mt-8 max-w-2xl border-l-2 border-primary/40 pl-4 text-sm italic leading-6 text-white/60"
          >
            RFPilot is currently being developed by Digital Xperience Group.
            Features and availability may evolve as the platform moves through
            testing and early access.
          </Reveal>

          {/* NEUTRALITY STATEMENT */}
          <Reveal
            as="div"
            className="mx-auto mt-10 max-w-3xl rounded-2xl border border-primary/20 bg-[#081624] p-6 sm:p-8"
          >
            <div className="flex items-center gap-2">
              <Lock size={16} className="text-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                How RFPilot Handles Your Data, and Where DXG Stands
              </span>
            </div>
            <p className="mt-4 text-sm leading-6 text-white/70">
              RFPilot is built by DXG, an AV production company. We&apos;re
              direct about what that means, because your procurement team will
              ask. They should.
            </p>
            <ul className="mt-5 space-y-4">
              {NEUTRALITY_POINTS.map((point) => (
                <li
                  key={point.lead}
                  className="flex items-start gap-3 text-sm leading-6 text-white/70"
                >
                  <Check size={16} className="mt-0.5 shrink-0 text-primary" />
                  <span>
                    <span className="font-semibold text-white">
                      {point.lead}
                    </span>{" "}
                    {point.rest}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-6 text-white/70">
              If your sourcing or compliance team wants these commitments in
              writing for their file, ask. We&apos;ll provide them.
            </p>
          </Reveal>

          <div className="mt-8 text-center">
            <button
              type="button"
              className={primaryBtn}
              onClick={handleRfpilotPreselect}
            >
              Join the RFPilot Early-Access List
            </button>
          </div>
        </Container>
      </section>

      {/* CAPABILITIES */}
      <section id="capabilities" className="bg-[#0a0a0a] py-8 lg:py-10">
        <Container className="max-w-7xl">
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

          <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map(({ title, background, icon }) => (
              <article
                key={title}
                className="group relative isolate aspect-[530/495] overflow-hidden rounded-xl"
              >
                <Image
                  src={background}
                  alt=""
                  fill
                  sizes="(min-width: 1280px) 420px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="-z-20 object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                <div className="flex h-full flex-col items-center justify-end px-5 pb-7 text-center sm:pb-6 lg:pb-8">
                  <Image
                    src={icon}
                    alt=""
                    width={62}
                    height={62}
                    className="h-14 w-14 object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] lg:h-16 lg:w-16"
                  />
                  <h3 className="mt-3 max-w-[280px] text-sm font-bold uppercase leading-tight tracking-wide text-white sm:text-base lg:text-lg">
                    {title}
                  </h3>
                </div>
              </article>
            ))}

            <article className="group relative isolate min-h-[260px] overflow-hidden rounded-xl sm:col-span-2 sm:min-h-[300px] lg:col-span-3 lg:min-h-[390px]">
              <Image
                src="/images/rfp-event/Frame 226.png"
                alt=""
                fill
                sizes="(min-width: 1280px) 1280px, 100vw"
                className="-z-20 object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

              <div className="flex h-full min-h-[260px] flex-col items-center justify-end px-5 pb-7 text-center sm:min-h-[300px] lg:min-h-[390px] lg:pb-9">
                <Image
                  src="/images/rfp-event/meeting 1.png"
                  alt=""
                  width={62}
                  height={62}
                  className="h-14 w-14 object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] lg:h-16 lg:w-16"
                />
                <h3 className="mt-3 text-sm font-bold uppercase leading-tight tracking-wide text-white sm:text-base lg:text-lg">
                  Meeting Planning Support
                </h3>
              </div>
            </article>
          </div>
        </Container>
      </section>

      {/* PRODUCER-LED DIFFERENCE */}
      <section className="bg-black py-8 lg:py-10">
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
            <Reveal
              as="p"
              className="mt-4 text-base leading-7 text-white/70 sm:text-lg"
            >
              DXG approaches event AV from a producer&apos;s perspective.
              Technology supports the experience, but planning, communication,
              accountability, and on-site leadership are what keep the event on
              track.
            </Reveal>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {PILLARS.map((pillar) => (
              <Reveal
                key={pillar.title}
                as="div"
                className="rounded-xl border-t-2 border-primary bg-[#111] p-6"
              >
                <pillar.Icon
                  size={26}
                  className="text-primary"
                  strokeWidth={2}
                />
                <h3 className="mt-4 text-lg font-bold text-white">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  {pillar.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* THANK YOU FOR MEETING US */}
      <section className="bg-black px-4 py-10 text-white sm:px-6 sm:py-16 lg:py-20">
        <div className="relative isolate mx-auto min-h-[620px] max-w-7xl overflow-hidden rounded-[28px] sm:aspect-[1634/691] sm:min-h-0">
          <Image
            src="/images/rfp-event/Group 29.png"
            alt="DXG exhibition booth"
            fill
            sizes="(min-width: 1280px) 1280px, 100vw"
            className="-z-20 object-cover object-[68%_center] sm:object-center"
          />

          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/95 via-black/60 to-black/15 sm:bg-gradient-to-r sm:from-black sm:via-black/45 sm:to-transparent" />

          <div className="flex h-full min-h-[620px] flex-col justify-start px-7 py-10 sm:min-h-0 sm:w-[38%] sm:justify-center sm:px-10 sm:py-8 lg:px-14">
            <h2
              className={`${displayFont.className} text-5xl uppercase leading-[0.9] sm:text-[clamp(2.6rem,4vw,4.6rem)]`}
            >
              <span className="block text-primary">Thank you</span>
              <span className="block">for meeting us</span>
              <span className="block">at the booth!</span>
            </h2>

            <span className="mt-7 h-px w-20 bg-primary sm:mt-6" />

            <p className="mt-7 max-w-xs text-sm leading-6 text-white/85 sm:mt-6 sm:text-[clamp(0.7rem,1vw,1rem)] sm:leading-relaxed">
              It was great connecting with you. We look forward to helping you
              elevate your next event.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
