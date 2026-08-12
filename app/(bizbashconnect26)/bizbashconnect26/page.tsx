import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import BizBashHeader from "components/bizbashconnect26-leadingpage/BizBashHeader";
import BizBashMain from "components/bizbashconnect26-leadingpage/BizBashMain";
import BizBashFooter from "components/bizbashconnect26-leadingpage/BizBashFooter";
import "components/bizbashconnect26-leadingpage/bizbashconnect26.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-bizbash-body",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-bizbash-display",
});

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
    <div className={`bizbash-page ${inter.variable} ${spaceGrotesk.variable}`}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <BizBashHeader />
      <BizBashMain />
      <BizBashFooter />
    </div>
  );
}
