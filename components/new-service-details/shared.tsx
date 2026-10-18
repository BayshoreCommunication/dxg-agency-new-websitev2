import Container from "components/shared/Container";
import { ArrowRight, ChevronRight, type LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/* Shared pieces for the service detail pages, styled in the main site's
   black theme with the brand `primary` color. */

export const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-3 flex items-center gap-3">
    <span className="h-[2px] w-7 shrink-0 bg-primary" />
    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
      {children}
    </span>
  </div>
);

export const PrimaryButton = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="btn-slide-primary capsule-button inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
  >
    {children}
    <ArrowRight className="h-4 w-4" />
  </Link>
);

export const outlineButton =
  "inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-primary hover:bg-primary/10 hover:text-primary";

/* 4-column icon grid with divider lines, used on image/dark sections */
export const IconGrid = ({
  items,
}: {
  items: { icon: LucideIcon; label: string }[];
}) => (
  <div className="grid grid-cols-2 sm:grid-cols-4 lg:border-l lg:border-primary/20 lg:pl-6">
    {items.map(({ icon: Icon, label }, i) => (
      <div
        key={label}
        className={`flex flex-col items-center px-3 py-5 text-center ${
          i % 4 !== 0 ? "sm:border-l sm:border-primary/20" : ""
        } ${i < items.length - 4 ? "sm:border-b sm:border-primary/20" : ""}`}
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-primary/50 bg-[#0b2237] text-primary">
          <Icon className="h-6 w-6" />
        </span>
        <span className="mt-3 max-w-[120px] text-sm font-semibold leading-tight">
          {label}
        </span>
      </div>
    ))}
  </div>
);

/* Centered closing CTA; supports optional background image */
export const CenteredCTA = ({
  text,
  primaryLabel,
  secondaryLabel = "",
  eyebrow,
  bgImage,
}: {
  text: React.ReactNode;
  primaryLabel: string;
  secondaryLabel?: string;
  eyebrow?: string;
  bgImage?: string;
}) => (
  <section className="relative overflow-hidden bg-black text-white">
    {bgImage ? (
      <>
        <Image
          src={bgImage}
          alt="Call to action background"
          fill
          sizes="100vw"
          className="pointer-events-none object-cover object-center"
        />
        <div className="pointer-events-none absolute inset-0 bg-black/80" />
      </>
    ) : (
      <div className="absolute inset-0 bg-[#071826]" />
    )}
    <Container className="relative py-14 text-center lg:py-16">
      {eyebrow && (
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold md:text-4xl">
        Let&apos;s Talk About{" "}
        <span className="text-primary">What You&apos;re Planning.</span>
      </h2>
      <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/80 md:text-base">
        {text}
      </p>
      <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
        <PrimaryButton href="/contact-us">{primaryLabel}</PrimaryButton>
        {secondaryLabel && (
          <Link href="/contact-us" className={outlineButton}>
            {secondaryLabel}
          </Link>
        )}
      </div>
    </Container>
  </section>
);

/* Image-topped cards with the icon overlapping the image edge; supports real images or a gray placeholder.
   "stacked" puts the title under the icon, "inline" puts it beside the icon. */
export const CapabilityGrid = ({
  items,
  variant = "stacked",
}: {
  items: { icon: LucideIcon; title: string; text: string; image?: string }[];
  variant?: "stacked" | "inline";
}) => (
  <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
    {items.map(({ icon: Icon, title, text, image }) => (
      <article
        key={title}
        className="group flex flex-col overflow-hidden rounded-xl border border-primary/20 bg-[#081624] transition duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_18px_40px_rgba(46,198,245,0.12)]"
      >
        <div
          className="relative aspect-[16/9] overflow-hidden bg-gray-800"
          aria-hidden="true"
        >
          {image && (
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover object-center transition duration-300 group-hover:scale-105"
            />
          )}
        </div>
        <div
          className={`flex flex-1 px-5 pb-6 ${variant === "inline" ? "gap-3 pt-4" : "flex-col"}`}
        >
          <span
            className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/50 bg-[#0b2237] shadow-md ${
              variant === "inline" ? "-mt-10" : "-mt-7"
            }`}
          >
            <Icon className="h-5 w-5 text-primary" />
          </span>
          <div className={variant === "inline" ? "" : "mt-4"}>
            <h3 className="text-base font-bold leading-snug">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/65">{text}</p>
          </div>
        </div>
      </article>
    ))}
  </div>
);

/* Row of circled icons with a title and short text, used on image/dark sections */
export const IconFeatures = ({
  items,
}: {
  items: { icon: LucideIcon; title: string; text?: string }[];
}) => (
  <div className="grid grid-cols-2 gap-y-8 sm:grid-cols-4">
    {items.map(({ icon: Icon, title, text }) => (
      <div key={title} className="flex flex-col items-center px-3 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full border border-primary/50 bg-[#0b2237] text-primary">
          <Icon className="h-7 w-7" />
        </span>
        <h3 className="mt-4 text-lg font-bold leading-tight">{title}</h3>
        {text && (
          <p className="mt-2 max-w-[150px] text-sm leading-snug text-white/70">
            {text}
          </p>
        )}
      </div>
    ))}
  </div>
);

/* Six numbered process cards with arrows in the gaps between them.
   "plain" shows a bold number, "badge" puts the number in a filled circle. */
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
          <div className="flex h-full flex-col rounded-xl border border-primary/20 bg-[#081624] p-5 transition duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_18px_40px_rgba(46,198,245,0.12)]">
            <div className="flex items-center gap-3">
              <span
                className={
                  variant === "badge"
                    ? "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-black"
                    : "text-xl font-bold text-primary"
                }
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mt-4 text-base font-bold leading-snug">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/65">{text}</p>
          </div>
          {i < items.length - 1 && (
            <Connector className="absolute -right-[19px] top-1/2 z-10 hidden h-3.5 w-3.5 -translate-y-1/2 text-primary/60 xl:block" />
          )}
        </div>
      ))}
    </div>
  );
};
