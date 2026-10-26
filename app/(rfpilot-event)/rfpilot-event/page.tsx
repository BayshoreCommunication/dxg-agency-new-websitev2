import Footer from "components/rfpilot-event/Footer";
import HeroPage from "components/rfpilot-event/HeroPage";
import LetsTalk from "components/rfpilot-event/LetsTalk";
import MeetUs from "components/rfpilot-event/MeetUs";
import OnePartner from "components/rfpilot-event/OnePartner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RFPilot Event | Digital Xperience Group",
  description:
    "Meet Digital Xperience Group and RFPilot for seamless event production and AV solutions.",
  alternates: {
    canonical: "https://www.dxg.agency/rfpilot-event",
  },
  openGraph: {
    title: "RFPilot Event | Digital Xperience Group",
    description:
      "Meet Digital Xperience Group and RFPilot for seamless event production and AV solutions.",
    url: "https://www.dxg.agency/rfpilot-event",
  },
  twitter: {
    card: "summary_large_image",
    title: "RFPilot Event | Digital Xperience Group",
    description:
      "Meet Digital Xperience Group and RFPilot for seamless event production and AV solutions.",
  },
};

const page = () => {
  return (
    <div>
      <HeroPage />
      <MeetUs />
      <OnePartner />
      <LetsTalk />
      <Footer />
    </div>
  );
};

export default page;
