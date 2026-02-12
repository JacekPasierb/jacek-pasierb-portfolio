import type {Metadata} from "next";
import Link from "next/link";
import {siteConfig} from "@/data/site";
import {nextjsServicePage} from "@/data/services/nextjs";
import {WhyNext} from "@/components/landing/WhyNext";
import {Process} from "@/components/landing/Process";
import {PortfolioSection} from "@/components/landing/PortfolioSection";
import {FAQ} from "@/components/landing/FAQ";
import {ContactSection} from "@/components/landing/ContactSection";
import {SectionDivider} from "@/components/ui/SectionDivider";
import {FaqJsonLd} from "@/components/seo/FaqJsonLd";
import styles from "./page.module.css";

const title = nextjsServicePage.title;
const description =
  "Szybkie strony w Next.js: SEO, Core Web Vitals, optymalizacja, wdrożenie i wsparcie. Zobacz portfolio i napisz.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: `${siteConfig.url}/uslugi/strony-nextjs`,
  },
  alternates: {
    canonical: `${siteConfig.url}/uslugi/strony-nextjs`,
  },
};

export default function StronyNextJsPage() {
  return (
    <>
      <FaqJsonLd />
      <div className={styles.wrapper}>
        <div className={styles.back}>
          <Link href="/uslugi">← Usługi</Link>
        </div>
        <header className={styles.header}>
          <h1 className={styles.title}>{nextjsServicePage.title}</h1>
          <p className={styles.intro}>{nextjsServicePage.intro}</p>
          <p className={styles.cta}>
            <Link href="/#kontakt" className={styles.ctaPrimary}>
              Porozmawiajmy o projekcie
            </Link>
            <Link href="/portfolio" className={styles.ctaSecondary}>
              Zobacz portfolio
            </Link>
          </p>
        </header>
      </div>
      <SectionDivider variant="glow" intensity="normal" withEdgeHighlight />
      <WhyNext />
      <SectionDivider variant="wave" accent="blue" intensity="subtle" />
      <Process />
      <SectionDivider variant="progress" accent="blue" />
      <PortfolioSection />
      <SectionDivider variant="wave" intensity="normal" />
      <FAQ />
      <SectionDivider variant="glow" intensity="normal" withEdgeHighlight />
      <ContactSection />
    </>
  );
}
