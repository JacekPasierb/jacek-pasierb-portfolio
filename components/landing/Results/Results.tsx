import {RevealSection} from "@/components/ui/RevealSection";
import {AnimatedHeading} from "@/components/ui/AnimatedHeading";
import {siteConfig} from "@/data/site";
import {ExamplesSection} from "@/components/landing/ExamplesSection";
import styles from "./Results.module.css";

const stats = [
  {value: "TOP1", label: "Projekty w czołówce Google"},
  {value: "100", label: "Core Web Vitals w zieleni"},
  {value: "0", label: "Wtyczek i kreatorów"},
];

export function Results() {
  return (
    <RevealSection id="rezultaty" className={styles.section}>
      <AnimatedHeading className={styles.title}>Rezultaty</AnimatedHeading>
      <ul className={styles.list}>
        {stats.map((item, i) => (
          <li
            key={item.label}
            className={styles.item}
            style={{["--stagger" as string]: i}}
          >
            <span className={styles.value}>{item.value}</span>
            <span className={styles.label}>{item.label}</span>
          </li>
        ))}
      </ul>
      {siteConfig.proof.length > 0 && <ExamplesSection />}
    </RevealSection>
  );
}
