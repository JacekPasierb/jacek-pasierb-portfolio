import {Hero} from "@/components/landing/Hero";
import {WhyNext} from "@/components/landing/WhyNext";
import {WhatYouGet} from "@/components/landing/WhatYouGet";
import {Process} from "@/components/landing/Process";
import {PortfolioSection} from "@/components/landing/PortfolioSection";
import {Results} from "@/components/landing/Results";
import {FAQ} from "@/components/landing/FAQ";
import {ContactSection} from "@/components/landing/ContactSection";
import {SectionDivider} from "@/components/ui/SectionDivider";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SectionDivider variant="glow" intensity="normal" withEdgeHighlight />
      <WhyNext />
      <SectionDivider variant="wave" accent="blue" intensity="subtle" />
      <WhatYouGet />
      <SectionDivider variant="progress" accent="blue" />
      <Process />
      <SectionDivider
        variant="glow"
        accent="violet"
        intensity="subtle"
        withNoise
      />
      <PortfolioSection />
      <SectionDivider variant="wave" intensity="normal" />
      <Results />
      <SectionDivider variant="progress" accent="green" intensity="subtle" />
      <FAQ />
      <SectionDivider variant="glow" intensity="normal" withEdgeHighlight />
      <ContactSection />
    </>
  );
}
