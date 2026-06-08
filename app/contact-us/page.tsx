import CalendlySection from "components/contact/CalendlySection";
import ContactFormSection from "components/contact/ContactFormSection";
import GoogleMapSection from "components/contact/GoogleMapSection";
import PageBanner from "components/shared/PageBanner";
import React from "react";

export const metadata = {
  title: "Contact DXG Agency | Event Production Experts Team",
  description:
    "Get in touch with DXG Agency for event production, audiovisual solutions, and live experiences. Let’s plan impactful events that engage your audience.",
  alternates: {
    canonical: "/contact-us",
  },
};
const page = () => {
  return (
    <div>
      <PageBanner
        title="Contact Us"
        backgroundImage="/images/banners/contact-banner.png"
      />
      {/* <ContactFormSection /> */}
      <CalendlySection />
      {/* <GoogleMapSection /> */}
    </div>
  );
};

export default page;
