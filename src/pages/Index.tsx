import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { CapabilitiesOverview } from "@/components/home/CapabilitiesOverview";
import { MethodologyPreview } from "@/components/home/MethodologyPreview";
import { CaseStudiesPreview } from "@/components/home/CaseStudiesPreview";
import { TechStackPreview } from "@/components/home/TechStackPreview";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <CapabilitiesOverview />
      <MethodologyPreview />
      <CaseStudiesPreview />
      <TechStackPreview />
      <CTASection />
    </Layout>
  );
};

export default Index;
