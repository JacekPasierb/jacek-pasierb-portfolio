"use client";

import {useEffect, useRef, useState} from "react";
import {useReducedMotion} from "@/hooks/useReducedMotion";
import styles from "./WhyNext.module.css";

type Point = {
  variant?: "szybkosc" | "widocznosc" | "obraz" | "wtyczki";
  title: string;
  description: string;
};

export function WhyNextCard({point, isLeft}: {point: Point; isLeft: boolean}) {
  const ref = useRef<HTMLLIElement>(null);
  const [revealed, setRevealed] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) {
      setRevealed(true);
      return;
    }
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setRevealed(true);
        });
      },
      {threshold: 0.15, rootMargin: "0px 0px -40px 0px"}
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [reducedMotion]);

  return (
    <li
      ref={ref}
      className={isLeft ? styles.cardLeft : styles.cardRight}
      data-revealed={revealed ? "true" : undefined}
      data-card-variant={point.variant ?? undefined}
    >
      <div className={styles.cardInner}>
        <h3 className={styles.cardTitle}>{point.title}</h3>
        <p className={styles.cardDesc}>{point.description}</p>
      </div>
    </li>
  );
}
