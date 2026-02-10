"use client";

import {useState} from "react";
import {useInView} from "@/hooks/useInView";
import {useReducedMotion} from "@/hooks/useReducedMotion";
import {siteConfig} from "@/data/site";
import {ExampleCard, type ExampleItem} from "./ExampleCard";
import {ExampleModal} from "./ExampleModal";
import styles from "./ExamplesSection.module.css";

export function ExamplesSection() {
  const {ref, isInView} = useInView({
    threshold: 0.08,
    rootMargin: "0px 0px -40px 0px",
    once: true,
  });
  const reducedMotion = useReducedMotion();
  const [modalExample, setModalExample] = useState<ExampleItem | null>(null);

  const examples = siteConfig.proof as ExampleItem[];

  if (examples.length === 0) return null;

  return (
    <>
      <div
        ref={ref}
        className={styles.wrapper}
        data-revealed={reducedMotion || isInView ? "true" : undefined}
      >
        <h3 className={styles.heading}>Przykłady</h3>
        <p className={styles.subline}>
          Realne realizacje – strony i aplikacje, które już działają.
        </p>
        <ul className={styles.grid}>
          {examples.map((ex, i) => (
            <li key={ex.title}>
              <ExampleCard
                example={ex}
                staggerIndex={i}
                onClick={() => setModalExample(ex)}
              />
            </li>
          ))}
        </ul>
      </div>

      <ExampleModal
        isOpen={!!modalExample}
        onClose={() => setModalExample(null)}
        title={modalExample?.title ?? ""}
        description={modalExample?.description ?? ""}
        resultSnippet={modalExample?.resultSnippet}
        category={modalExample?.category}
      />
    </>
  );
}
