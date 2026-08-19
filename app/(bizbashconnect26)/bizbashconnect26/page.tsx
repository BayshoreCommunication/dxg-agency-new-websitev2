import BizBashFooter from "components/bizbashconnect26-leadingpage/BizBashFooter";
import BizBashHeader from "components/bizbashconnect26-leadingpage/BizBashHeader";
import BizBashMain from "components/bizbashconnect26-leadingpage/BizBashMain";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "A Smarter Approach to Event AV | Meet DXG and RFPilot",
  description:
    "Meet Digital Xperience Group at BizBash Innovation Forum and Connect Marketplace. Discover producer-led event production, RFPilot innovation, AV proposal reviews, and smarter planning support.",
  alternates: {
    canonical: "/bizbashconnect26",
  },
  openGraph: {
    title: "A Smarter Approach to Event AV | Meet DXG and RFPilot",
    description:
      "Meet Digital Xperience Group at BizBash Innovation Forum and Connect Marketplace in Tampa. Producer-led event production plus RFPilot innovation.",
    url: "/bizbashconnect26",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "A Smarter Approach to Event AV | Meet DXG and RFPilot",
    description:
      "Meet Digital Xperience Group at BizBash Innovation Forum and Connect Marketplace in Tampa. Producer-led event production plus RFPilot innovation.",
  },
};

export default function BizBashConnect26Page() {
  return (
    <div className="bg-black">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-0 focus:top-0 focus:z-[200] focus:rounded-br-lg focus:bg-primary focus:px-5 focus:py-3 focus:text-sm focus:font-bold focus:text-black"
      >
        Skip to content
      </a>
      <BizBashHeader />
      <BizBashMain />
      <BizBashFooter />
    </div>
  );
}
