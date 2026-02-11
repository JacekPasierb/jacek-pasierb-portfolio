"use client";

import {useState} from "react";
import Link from "next/link";
import {RevealSection} from "@/components/ui/RevealSection";
import {AnimatedHeading} from "@/components/ui/AnimatedHeading";
import {faqItems} from "@/data/faq";
import styles from "./FAQ.module.css";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <RevealSection id="faq" className={styles.section}>
      <AnimatedHeading className={styles.title}>FAQ</AnimatedHeading>
      <dl className={styles.list}>
        {faqItems.map((item, i) => (
          <div key={i} className={styles.item}>
            <dt>
              <button
                type="button"
                className={styles.question}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
                id={`faq-question-${i}`}
              >
                {item.q}
              </button>
            </dt>
            <dd
              id={`faq-answer-${i}`}
              aria-labelledby={`faq-question-${i}`}
              className={openIndex === i ? styles.answerOpen : styles.answer}
            >
              <div className={styles.answerInner}>{item.a}</div>
            </dd>
          </div>
        ))}
      </dl>
      <p className={styles.contactLink}>
        <Link href="/#kontakt">Chcesz porozmawiać? Przejdź do kontaktu</Link>
      </p>
    </RevealSection>
  );
}
