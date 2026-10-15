import Link from "next/link";
import Container from "components/shared/Container";
import { ArrowRight, ChevronRight, type LucideIcon } from "lucide-react";

export const Eyebrow = ({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) => (
  <div className="mb-3 flex items-center gap-3">
    <span className={`h-[2px] w-7 shrink-0 ${dark ? "bg-white/70" : "bg-[#1458f5]"}`} />
    <span
      className={`text-[11px] font-semibold uppercase tracking-[0.2em] ${
        dark ? "text-white/80" : "text-[#1458f5]"
      }`}
    >
      {children}
    </span>
  </div>
);

export const PrimaryButton = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="inline-flex items-center justify-center gap-2 rounded-md bg-[#1458f5] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#0f47cc]"
  >
    {children}
    <ArrowRight className="h-4 w-4" />
  </Link>
);

/* 4-column icon grid with divider lines, used on navy sections */
export const IconGrid = ({ items }: { items: { icon: LucideIcon; label: string }[] }) => (
  <div className="grid grid-cols-2 sm:grid-cols-4 lg:border-l lg:border-white/20 lg:pl-6">
    {items.map(({ icon: Icon, label }, i) => (
      <div
        key={label}
        className={`flex flex-col items-center px-3 py-5 text-center ${
          i % 4 !== 0 ? "sm:border-l sm:border-white/20" : ""
        } ${i < items.length - 4 ? "sm:border-b sm:border-white/20" : ""}`}
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/80 bg-[#1458f5]/40">
          <Icon className="h-6 w-6" />
        </span>
        <span className="mt-3 max-w-[120px] text-sm font-semibold leading-tight">{label}</span>
      </div>
    ))}
  </div>
);

/* Centered closing CTA; gray stands in for the background image */
export const CenteredCTA = ({
  text,
  primaryLabel,
  secondaryLabel = "Review My Existing Proposal",
  eyebrow,
}: {
  text: React.ReactNode;
  primaryLabel: string;
  secondaryLabel?: string;
  eyebrow?: string;
}) => (
  <section className="relative overflow-hidden bg-gray-500 text-white">
    <div className="absolute inset-0 bg-[#0a3fd1]/80" />
    <Container className="relative py-12 text-center lg:py-14">
      {eyebrow && (
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold md:text-4xl">Let&apos;s Talk About What You&apos;re Planning.</h2>
      <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/90 md:text-base">
        {text}
      </p>
      <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
        <PrimaryButton href="/contact-us">{primaryLabel}</PrimaryButton>
        <Link
          href="/contact-us"
          className="inline-flex items-center justify-center rounded-md border border-white px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
        >
          {secondaryLabel}
        </Link>
      </div>
    </Container>
  </section>
);

/* Image-topped cards with the icon overlapping the image edge; gray stands in for the image.
   "stacked" puts the title under the icon, "inline" puts it beside the icon. */
export const CapabilityGrid = ({
  items,
  variant = "stacked",
}: {
  items: { icon: LucideIcon; title: string; text: string }[];
  variant?: "stacked" | "inline";
}) => (
  <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
    {items.map(({ icon: Icon, title, text }) => (
      <article
        key={title}
        className="flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm"
      >
        <div className="aspect-[16/7] bg-gray-300" aria-hidden="true" />
        <div
          className={`flex flex-1 px-5 pb-6 ${variant === "inline" ? "gap-3 pt-4" : "flex-col"}`}
        >
          <span
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gray-100 bg-white shadow-md ${
              variant === "inline" ? "-mt-10" : "-mt-7"
            }`}
          >
            <Icon className="h-5 w-5 text-[#1458f5]" />
          </span>
          <div className={variant === "inline" ? "" : "mt-4"}>
            <h3 className="text-base font-bold leading-snug">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-500">{text}</p>
          </div>
        </div>
      </article>
    ))}
  </div>
);

/* Row of circled icons with a title and short text, used on navy sections */
export const IconFeatures = ({
  items,
}: {
  items: { icon: LucideIcon; title: string; text?: string }[];
}) => (
  <div className="grid grid-cols-2 gap-y-8 sm:grid-cols-4">
    {items.map(({ icon: Icon, title, text }) => (
      <div key={title} className="flex flex-col items-center px-3 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/80 bg-[#1458f5]/40">
          <Icon className="h-7 w-7" />
        </span>
        <h3 className="mt-4 text-lg font-bold leading-tight">{title}</h3>
        {text && <p className="mt-2 max-w-[150px] text-sm leading-snug text-white/80">{text}</p>}
      </div>
    ))}
  </div>
);

/* Six numbered process cards with arrows in the gaps between them.
   "plain" shows a bold blue number, "badge" puts the number in a blue circle. */
export const StepCards = ({
  items,
  variant = "plain",
}: {
  items: { icon: LucideIcon; title: string; text: string }[];
  variant?: "plain" | "badge";
}) => {
  const Connector = variant === "badge" ? ArrowRight : ChevronRight;

  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-6 xl:grid-cols-6">
      {items.map(({ icon: Icon, title, text }, i) => (
        <div key={title} className="relative">
          <div className="flex h-full flex-col rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <span
                className={
                  variant === "badge"
                    ? "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1458f5] text-xs font-bold text-white"
                    : "text-xl font-bold text-[#1458f5]"
                }
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <Icon className="h-6 w-6 text-[#1458f5]" />
            </div>
            <h3 className="mt-4 text-base font-bold leading-snug">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-500">{text}</p>
          </div>
          {i < items.length - 1 && (
            <Connector className="absolute -right-[19px] top-1/2 z-10 hidden h-3.5 w-3.5 -translate-y-1/2 text-[#1458f5]/60 xl:block" />
          )}
        </div>
      ))}
    </div>
  );
};
