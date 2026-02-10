"use client";

import {useReveal} from "@/hooks/useReveal";
import {useReducedMotion} from "@/hooks/useReducedMotion";
import styles from "./AnimatedHeading.module.css";

interface AnimatedHeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h2" | "h3";
  children: React.ReactNode;
}

/**
 * Nagłówek sekcji z animacją: fade-in + lekki slide od dołu (8–12px) przy wejściu w viewport.
 * Respektuje prefers-reduced-motion.
 */
export function AnimatedHeading({
  as: Component = "h2",
  className,
  children,
  ...props
}: AnimatedHeadingProps) {
  const reducedMotion = useReducedMotion();
  const {ref, revealed} = useReveal({
    direction: "up",
    threshold: 0.15,
    rootMargin: "0px 0px -30px 0px",
    once: true,
    disabled: reducedMotion,
  });

  return (
    <Component
      ref={ref as React.RefObject<HTMLHeadingElement>}
      className={[styles.heading, revealed ? styles.visible : "", className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </Component>
  );
}
