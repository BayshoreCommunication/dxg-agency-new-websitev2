import { notFound } from "next/navigation";
import ExperiencesCreatedCardSection from "components/experiences-created/ExperiencesCreatedCardSection";
import PageBanner from "components/shared/PageBanner";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experiences Created | DXG Agency Event & Digital Work",
  description:
    "Explore DXG Agency’s experiences created through innovative event production, audiovisual design, and digital solutions that deliver impactful results.",
  alternates: {
    canonical: "https://www.dxg.agency/experiences-created",
  },
  openGraph: {
    title: "Experiences Created | DXG Agency Event & Digital Work",
    description:
      "Explore DXG Agency’s experiences created through innovative event production, audiovisual design, and digital solutions that deliver impactful results.",
    url: "https://www.dxg.agency/experiences-created",
  },
  twitter: {
    card: "summary_large_image",
    title: "Experiences Created | DXG Agency Event & Digital Work",
    description:
      "Explore DXG Agency’s experiences created through innovative event production, audiovisual design, and digital solutions that deliver impactful results.",
  },
};
// Page temporarily turned off (returns 404). Set to true to restore.
const EXPERIENCES_CREATED_ENABLED = false;

const page = () => {
  if (!EXPERIENCES_CREATED_ENABLED) {
    notFound();
  }

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
