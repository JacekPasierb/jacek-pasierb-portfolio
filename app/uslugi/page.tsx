import type {Metadata} from "next";
import Link from "next/link";
import {siteConfig} from "@/data/site";
import {servicesList} from "@/data/services";
import {RevealSection} from "@/components/ui/RevealSection";
import {SectionDivider} from "@/components/ui/SectionDivider";
import {ContactSection} from "@/components/landing/ContactSection";
import styles from "./page.module.css";

const title = "Usługi";
const description =
  "Strony w Next.js, sklepy, rezerwacje, płatności online, SEO i Core Web Vitals. Realizacje dopasowane do Twojej firmy.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: `${siteConfig.url}/uslugi`,
  },
  alternates: {
    canonical: `${siteConfig.url}/uslugi`,
  },
};

export default function UslugiPage() {
  return (
    <>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.intro}>
            Strony internetowe, sklepy, rezerwacje i płatności online – w
            nowoczesnym stacku, z naciskiem na szybkość i widoczność w Google.
          </p>
        </header>

        <SectionDivider variant="glow" intensity="subtle" withEdgeHighlight />

        <RevealSection id="oferta" className={styles.section}>
          <h2 className={styles.sectionTitle}>Oferta</h2>
          <p className={styles.sectionIntro}>
            Zakres dopasowuję do potrzeb: od prostej wizytówki po rozbudowany
            system z płatnościami lub rezerwacjami.
          </p>
          <ul className={styles.grid}>
            {servicesList.map((service) => (
              <li key={service.id}>
                <Link href={service.href} className={styles.card}>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <p className={styles.cardDesc}>{service.description}</p>
                  <span className={styles.cardCta}>
                    {"cta" in service && service.cta
                      ? service.cta
                      : service.href === "/#kontakt"
                        ? "Napisz lub zadzwoń →"
                        : "Dowiedz się więcej →"}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </RevealSection>
      </div>

      <SectionDivider variant="glow" intensity="normal" withEdgeHighlight />
      <ContactSection />
    </>
  );
}
