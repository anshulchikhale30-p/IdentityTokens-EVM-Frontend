import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { FeatureSection } from "@/components/FeatureSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <FeatureSection />
      <CTASection />
    </>
  );
}
