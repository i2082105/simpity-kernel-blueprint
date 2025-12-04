import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustedBySection } from "@/components/home/TrustedBySection";
import { CapabilitiesOverview } from "@/components/home/CapabilitiesOverview";
import { ComplianceBadges } from "@/components/home/ComplianceBadges";
import { MethodologyPreview } from "@/components/home/MethodologyPreview";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CaseStudiesPreview } from "@/components/home/CaseStudiesPreview";
import { TechStackPreview } from "@/components/home/TechStackPreview";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <TrustedBySection />
      <CapabilitiesOverview />
      <ComplianceBadges />
      <MethodologyPreview />
      <TestimonialsSection />
      <CaseStudiesPreview />
      <TechStackPreview />
      <CTASection />
    </Layout>
  );
};

export default Index;
