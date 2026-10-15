import Container from "components/shared/Container";
import Link from "next/link";
import { Eyebrow, PrimaryButton } from "./shared";

/* Placeholder until the design and content for this service are ready */
const EventVideographyPhotography = () => {
  return (
    // pt-20 clears the fixed site header (h-20) so it sits on the layout's dark background
    <div className="pt-20">
      <section className="bg-white text-[#0b1530]">
        <Container className="flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
          <Eyebrow>Event Videography &amp; Photography</Eyebrow>
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Design and Content Not Found
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600">
            The design and content for this page are not available yet. Please check back soon.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <PrimaryButton href="/contact-us">Request for Proposal</PrimaryButton>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-md border border-[#1458f5] px-6 py-3 text-sm font-medium text-[#1458f5] transition hover:bg-[#1458f5]/5"
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
