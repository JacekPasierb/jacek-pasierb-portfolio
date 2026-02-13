"use client";

import {RevealSection} from "@/components/ui/RevealSection";
import {AnimatedHeading} from "@/components/ui/AnimatedHeading";
import {PortfolioTabs} from "@/components/portfolio/PortfolioTabs";
import {BreadcrumbJsonLd} from "@/components/seo/BreadcrumbJsonLd";
import styles from "./page.module.css";
import { SectionDivider } from "../../components/ui/SectionDivider";
import { ContactSection } from "../../components/landing/ContactSection";

const portfolioBreadcrumbs = [
  {name: "Strona główna", url: "/"},
  {name: "Portfolio", url: "/portfolio"},
];

export default function PortfolioPage() {
  return (
    <>
      <BreadcrumbJsonLd items={portfolioBreadcrumbs} />
      <div className={styles.wrapper}>
        <RevealSection className={styles.hero} id="portfolio-hero">
          <AnimatedHeading as="h1" className={styles.title}>
            Portfolio
          </AnimatedHeading>
          <p className={styles.intro}>
            Projekty komercyjne, własne produkty i zasoby – realizacje z
            naciskiem na jakość i dostawę.
          </p>
        </RevealSection>
      </div>

      <RevealSection
        className={styles.section}
        id="portfolio-projekty"
        as="section"
      >
        <PortfolioTabs subtitle="Wybierz kategorię, aby zobaczyć projekty." />
      </RevealSection>
      <SectionDivider variant="glow" intensity="normal" withEdgeHighlight />
      <ContactSection />
    </>
  );
}
