import type { Metadata } from "next";
import InteractyEmbed from "components/audience-engagement/InteractyEmbed";

export const metadata: Metadata = {
  title: "Audience Engagement | Digital Xperience Group",
  description:
    "An interactive audience engagement field guide from Digital Xperience Group.",
};

const AudienceEngagementPage = () => (
  <main className="bg-black px-0 pb-8 pt-20 sm:pb-12 sm:pt-24">
    <div className="mx-auto w-full max-w-[992px] overflow-hidden bg-black">
      <InteractyEmbed />
    </div>
  </main>
);

export default AudienceEngagementPage;
