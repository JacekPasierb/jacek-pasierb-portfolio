"use client";

import {RevealSection} from "@/components/ui/RevealSection";
import {AnimatedHeading} from "@/components/ui/AnimatedHeading";
import {PortfolioTabs} from "@/components/portfolio/PortfolioTabs";
import styles from "./page.module.css";

export default function PortfolioPage() {
  return (
    <>
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
    </>
  );
}
