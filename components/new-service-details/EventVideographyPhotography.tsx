import Container from "components/shared/Container";
import Link from "next/link";
import { Eyebrow, PrimaryButton, outlineButton } from "./shared";

/* Placeholder until the design and content for this service are ready */
const EventVideographyPhotography = () => {
  return (
    // pt-20 clears the fixed site header (h-20) so it sits on the layout's dark background
    <div className="bg-black pt-20">
      <section className="bg-black text-white">
        <Container className="flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
          <Eyebrow>Event Videography &amp; Photography</Eyebrow>
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Design and Content <span className="text-primary">Not Found</span>
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/75">
            The design and content for this page are not available yet. Please check back soon.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <PrimaryButton href="/contact-us">Request for Proposal</PrimaryButton>
            <Link
              href="/services"
              className={outlineButton}
            >
              Back to Services
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default EventVideographyPhotography;
