"use client";

import {useReveal} from "@/hooks/useReveal";
import {useReducedMotion} from "@/hooks/useReducedMotion";
import styles from "./AnimatedHighlight.module.css";

interface AnimatedHighlightProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Podświetlenie słowa kluczowego: delikatna podkreślka „rysuje się” przy wejściu w viewport.
 * Używaj oszczędnie (1–2 na sekcję).
 */
export function AnimatedHighlight({
  children,
  className,
}: AnimatedHighlightProps) {
  const reducedMotion = useReducedMotion();
  const {ref, revealed} = useReveal({
    threshold: 0.2,
    once: true,
    disabled: reducedMotion,
  });

  return (
    <span
      ref={ref as React.RefObject<HTMLSpanElement>}
      className={[
        styles.highlight,
        revealed ? styles.visible : "",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </span>
  );
}
