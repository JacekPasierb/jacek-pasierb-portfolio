"use client";

import styles from "./ExamplesSection.module.css";

export interface ExampleItem {
  title: string;
  description: string;
  type: string;
  category?: string;
  resultSnippet?: string;
}

interface ExampleCardProps {
  example: ExampleItem;
  onClick: () => void;
  staggerIndex: number;
}

export function ExampleCard({
  example,
  onClick,
  staggerIndex,
}: ExampleCardProps) {
  const {title, description, category, resultSnippet} = example;

  return (
    <article
      className={styles.card}
      style={{["--stagger" as string]: staggerIndex}}
    >
      <button
        type="button"
        className={styles.cardButton}
        onClick={onClick}
        aria-label={`Zobacz szczegóły: ${title}`}
      >
        {category && <span className={styles.pill}>{category}</span>}
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDesc}>{description}</p>
        {resultSnippet ? (
          <span className={styles.snippet}>{resultSnippet}</span>
        ) : (
          <span className={styles.cta}>Zobacz przykład</span>
        )}
      </button>
    </article>
  );
}
