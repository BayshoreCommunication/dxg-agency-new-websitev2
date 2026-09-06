import type { Metadata } from "next";
import EventProductionHero from "components/seo-services/event-production-management/EventProductionHero";
import IndustriesSection from "components/seo-services/event-production-management/IndustriesSection";
import BreakdownSection from "components/seo-services/event-production-management/BreakdownSection";
import ProductionWorkSection from "components/seo-services/event-production-management/ProductionWorkSection";
import ProcessSection from "components/seo-services/event-production-management/ProcessSection";
import DifferentiatorsSection from "components/seo-services/event-production-management/DifferentiatorsSection";
import ComparisonTableSection from "components/seo-services/event-production-management/ComparisonTableSection";
import ProductionScopeSection from "components/seo-services/event-production-management/ProductionScopeSection";
import BudgetProtectionSection from "components/seo-services/event-production-management/BudgetProtectionSection";
import ProposalReviewSection from "components/seo-services/event-production-management/ProposalReviewSection";
import RelatedServicesSection from "components/seo-services/event-production-management/RelatedServicesSection";
import FAQSection from "components/seo-services/event-production-management/FAQSection";
import GettingStartedSection from "components/seo-services/event-production-management/GettingStartedSection";
import FinalCTASection from "components/seo-services/event-production-management/FinalCTASection";
import MiddleCTABanner from "components/seo-services/event-production-management/MiddleCTABanner";
import LetsTalkSection from "components/shared/LetsTalkSection";

export const metadata: Metadata = {
  title: "Event Production Management | DXG",
  description:
    "DXG provides event production management for corporate, association, medical, nonprofit, education events and brings budgets, vendors, show flow in one plan.",
};

export default function EventProductionManagementPage() {
  return (
    <>
      {/* 1. Hero Section */}
      <EventProductionHero />

      {/* CTA Placement 1: Immediately After Hero Section */}
      <MiddleCTABanner
        title="Ready to execute your event without stress?"
        highlightText="Talk to our team"
        buttonText="Schedule a Strategy Call"
      />

      {/* 2. Industries Section */}
      <IndustriesSection />

      {/* 3. Breakdown Section */}
      <BreakdownSection />

      {/* 4. Production Work Section */}
      <ProductionWorkSection />

      {/* 5. Process Section */}
      <ProcessSection />

      {/* 6. Differentiators Section */}
      <DifferentiatorsSection />

      {/* 7. Comparison Table Section */}
      <ComparisonTableSection />

      {/* CTA Placement 2: After Comparison Table Section */}
      <MiddleCTABanner
        title="This isn’t a sales call — it’s a working session to help you"
        highlightText="plan smarter"
        buttonText="Schedule a Strategy Call"
      />

      {/* 8. Production Scope & Case Study Section */}
      <ProductionScopeSection />

      {/* 9. Budget Protection Section */}
      <BudgetProtectionSection />

      {/* 10. Proposal Review Section */}
      <ProposalReviewSection />

      {/* CTA Placement 3: After Proposal Review Section */}
      <MiddleCTABanner
        title="Before you commit — let’s make sure your plan is set up for"
        highlightText="success"
        buttonText="Get a Second Opinion"
      />

      {/* 11. Related Services Section */}
      <RelatedServicesSection />

      {/* 12. FAQ Section */}
      <FAQSection />

      {/* 13. Getting Started Section */}
      <GettingStartedSection />

      {/* CTA Placement 4: Full Main Project LetsTalk Section */}
      <LetsTalkSection />

      {/* 14. Final CTA Section */}
      <FinalCTASection />
    </>
  );
}
