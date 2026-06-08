import ExperiencesCreatedCardSection from "components/experiences-created/ExperiencesCreatedCardSection";
import PageBanner from "components/shared/PageBanner";
import React from "react";

export const metadata = {
  title: "Digital Xperience Group",
  description:
    "Digital Xperience Group (DXG), a pioneering division of WLJ Consulting, is a premier partner in transforming events into unforgettable experiences.",
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
