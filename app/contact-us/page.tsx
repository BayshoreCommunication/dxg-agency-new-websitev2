import CalendlySection from "components/contact/CalendlySection";
import ContactFormSection from "components/contact/ContactFormSection";
import GoogleMapSection from "components/contact/GoogleMapSection";
import PageBanner from "components/shared/PageBanner";
import React from "react";

export const metadata = {
  title: "Digital Xperience Group",
  description:
    "Digital Xperience Group (DXG), a pioneering division of WLJ Consulting, is a premier partner in transforming events into unforgettable experiences.",
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
