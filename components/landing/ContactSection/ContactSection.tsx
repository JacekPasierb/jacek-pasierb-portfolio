import Link from "next/link";
import {RevealSection} from "@/components/ui/RevealSection";
import {AnimatedHeading} from "@/components/ui/AnimatedHeading";
import {siteConfig} from "@/data/site";
import styles from "./ContactSection.module.css";

export function ContactSection() {
  return (
    <RevealSection id="kontakt" className={styles.section}>
      <AnimatedHeading className={styles.title}>Kontakt</AnimatedHeading>
      <p className={styles.intro}>
        Napisz lub zadzwoń – odezwę się w ciągu 24h.
      </p>
      <p className={styles.faqLink}>
        <Link href="/#faq">Masz pytania? Zobacz FAQ</Link>
      </p>
      <div className={styles.grid}>
        <a
          href={`mailto:${siteConfig.contact.email}`}
          className={styles.card}
          aria-label={`Napisz na ${siteConfig.contact.email}`}
        >
          <span className={styles.icon} aria-hidden>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 6-10 7L2 6" />
            </svg>
          </span>
          <span className={styles.label}>Email</span>
          <span className={styles.value}>{siteConfig.contact.email}</span>
        </a>
        <a
          href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
          className={styles.card}
          aria-label={`Zadzwoń: ${siteConfig.contact.phone}`}
        >
          <span className={styles.icon} aria-hidden>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </span>
          <span className={styles.label}>Telefon</span>
          <span className={styles.value}>{siteConfig.contact.phone}</span>
        </a>
      </div>
    </RevealSection>
  );
}
