import type {Metadata} from "next";
import {siteConfig} from "@/data/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Kontakt",
  description: `Skontaktuj się w sprawie strony w Next.js. ${siteConfig.tagline}`,
  openGraph: {
    title: "Kontakt",
    description: `Skontaktuj się w sprawie strony w Next.js. ${siteConfig.tagline}`,
    url: `${siteConfig.url}/kontakt`,
  },
  alternates: {canonical: `${siteConfig.url}/kontakt`},
};

export default function KontaktPage() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title}>Kontakt</h1>
        <p className={styles.intro}>
          Napisz lub zadzwoń – odezwę się w ciągu 24h.
        </p>
      </header>
      <div className={styles.details}>
        <h2 className={styles.detailsTitle}>Dane kontaktowe</h2>
        <p>
          <strong>Email:</strong>
          <br />
          <a href={`mailto:${siteConfig.contact.email}`}>
            {siteConfig.contact.email}
          </a>
        </p>
        <p>
          <strong>Telefon:</strong>
          <br />
          <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}>
            {siteConfig.contact.phone}
          </a>
        </p>
      </div>
    </div>
  );
}
