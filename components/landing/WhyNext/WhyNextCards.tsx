"use client";

import {WhyNextCard} from "./WhyNextCard";
import styles from "./WhyNext.module.css";

type Point = {
  variant?: "szybkosc" | "widocznosc" | "obraz" | "wtyczki";
  title: string;
  description: string;
};

export function WhyNextCards({points}: {points: Point[]}) {
  return (
    <div className={styles.cardsReveal}>
      <ul className={styles.list}>
        {points.map((item, i) => (
          <WhyNextCard key={item.title} point={item} isLeft={i % 2 === 0} />
        ))}
      </ul>
    </div>
  );
}
