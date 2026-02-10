import { identities } from "@/lib/store";
import IdentityCard from "@/components/IdentityCard";

export default function HomePage() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">
        Decentralized Identity Tokens
      </h1>

      {identities.length === 0 && <p>No identities created yet.</p>}

      <div className="grid gap-4">
        {identities.map((identity) => (
          <IdentityCard key={identity.id} identity={identity} />
        ))}
      </div>
    </>
import { HowItWorks } from "@/components/HowItWorks";
import { Hero } from "@/components/Hero";
import { FeatureSection } from "@/components/FeatureSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-landing-bg">
      <Hero />
      <HowItWorks />
      <FeatureSection />
      <CTASection />
    </main>
  );
}
