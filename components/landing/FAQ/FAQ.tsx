"use client";

import {useState} from "react";
import {RevealSection} from "@/components/ui/RevealSection";
import {AnimatedHeading} from "@/components/ui/AnimatedHeading";
import styles from "./FAQ.module.css";

const faqs = [
  {
    q: "Czy robisz tylko strony, czy też aplikacje?",
    a: "Oba. Tworzę zarówno proste strony wizytówki, jak i rozbudowane aplikacje: sklepy, systemy rezerwacji, panele z płatnościami online. Zakres ustalamy na początku współpracy.",
  },
  {
    q: "Czy mogę mieć płatności lub rezerwacje online?",
    a: "Tak. Mogę wdrożyć płatności (np. Stripe, Przelewy24), rezerwacje, formularze zapisów czy kalendarze. Wszystko zależy od Twoich potrzeb – ustalamy to na rozmowie.",
  },
  {
    q: "Ile trwa realizacja?",
    a: "Zależnie od zakresu: prosta strona to zwykle 1–2 tygodnie, większy projekt (sklep, rezerwacje, wiele podstron) – do kilku tygodni. Harmonogram ustalamy na start.",
  },
  {
    q: "Czy mogę później sam edytować treści?",
    a: "Tak. Mogę przygotować prosty panel do edycji treści albo przekazać instrukcję. Chętnie wskażę opcję dopasowaną do Ciebie.",
  },
  {
    q: "Gdzie będzie hostowana strona?",
    a: "Na nowoczesnym hostingu, który zapewnia szybkość i bezpieczeństwo. Mogę wdrożyć stronę sam albo przekazać gotowy projekt Twojemu dostawcy.",
  },
  {
    q: "Czym różnisz się od agencji lub „twórców stron”?",
    a: "Pracuję sam, bez zbędnych warstw. Piszę kod pod Twoją stronę – nie używam setek wtyczek ani kreatorów. Dzięki temu strona jest szybsza, bezpieczniejsza i lepiej widoczna w Google.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <RevealSection id="faq" className={styles.section}>
      <AnimatedHeading className={styles.title}>FAQ</AnimatedHeading>
      <dl className={styles.list}>
        {faqs.map((item, i) => (
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
    </RevealSection>
  );
}
