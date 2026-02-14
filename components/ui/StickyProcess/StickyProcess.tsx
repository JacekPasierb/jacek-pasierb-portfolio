"use client";

import {useScrollSpy} from "@/hooks/useScrollSpy";
import {AnimatedHeading} from "@/components/ui/AnimatedHeading";
import styles from "./StickyProcess.module.css";

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
}

interface StickyProcessProps {
  title: string;
  intro: string;
  steps: ProcessStep[];
}

export function StickyProcess({title, intro, steps}: StickyProcessProps) {
  const sectionIds = steps.map((s) => s.id);
  const activeIndex = useScrollSpy(sectionIds, {
    rootMargin: "-25% 0px -50% 0px",
  });
  const activeStep = steps[activeIndex] ?? steps[0];

  return (
    <section className={styles.section} aria-labelledby="process-heading">
      <AnimatedHeading
        id="process-heading"
        className={styles.sectionTitle}
        as="h2"
      >
        {title}
      </AnimatedHeading>
      {intro && <p className={styles.intro}>{intro}</p>}
      <div className={styles.grid}>
        <div className={styles.stickyCol}>
          <div className={styles.stickyInner}>
            <h3 className={styles.stepTitle}>{activeStep.title}</h3>
            <p className={styles.stepDesc}>{activeStep.description}</p>
          </div>
        </div>
        <div className={styles.scrollCol}>
          {steps.map((step, i) => (
            <article
              key={step.id}
              id={step.id}
              className={[
                styles.card,
                i === activeIndex ? styles.cardActive : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <span className={styles.cardNum} aria-hidden>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h4 className={styles.cardTitle}>{step.title}</h4>
              <p className={styles.cardDesc}>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
      <div className={styles.cta}>
        <a
          className={styles.ctaBtn}
          href="mailto:kontakt@pasierb-webstudio.pl?subject=Wycena%20strony%20internetowej&body=Dzień%20dobry,%0A%0AChcę%20wycenić%20stronę%20internetową.%0A%0ABranża:%0AZakres%20strony:%0ATermin%20realizacji:%0ABudżet%20(opcjonalnie):%0A%0APozdrawiam"
        >
          Wyślij e-mail
        </a>

        <p className={styles.ctaHint}>
          Otworzy się Twój program pocztowy • kontakt@pasierb-webstudio.pl
        </p>
      </div>
    </section>
  );
}
