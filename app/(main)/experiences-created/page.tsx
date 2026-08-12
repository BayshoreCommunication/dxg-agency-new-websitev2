import ExperiencesCreatedCardSection from "components/experiences-created/ExperiencesCreatedCardSection";
import PageBanner from "components/shared/PageBanner";
import React from "react";

export const metadata = {
  title: "Experiences Created | DXG Agency Event & Digital Work",
  description:
    "Explore DXG Agency’s experiences created through innovative event production, audiovisual design, and digital solutions that deliver impactful results.",
  alternates: {
    canonical: "/experiences-created",
  },
};
const page = () => {
  return (
    <div>
      <PageBanner
        title="Experiences We've Created"
        backgroundImage="/images/banners/experiences-created-banner.png"
      />
      <ExperiencesCreatedCardSection />
    </div>
  );
};

export default page;
