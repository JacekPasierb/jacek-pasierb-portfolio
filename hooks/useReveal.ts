"use client";

import {useEffect, useRef, useState} from "react";

export type RevealDirection = "up" | "down" | "left" | "right" | "none";

interface UseRevealOptions {
  direction?: RevealDirection;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  disabled?: boolean;
}

/**
 * Hook do reveal on scroll: zwraca ref i czy element jest "revealed".
 */
export function useReveal(options: UseRevealOptions = {}) {
  const {
    direction = "up",
    threshold = 0.1,
    rootMargin = "0px 0px -40px 0px",
    once = true,
    disabled = false,
  } = options;

  const ref = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (disabled) {
      setRevealed(true);
      return;
    }
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true);
          } else if (!once) {
            setRevealed(false);
          }
        });
      },
      {threshold, rootMargin}
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once, disabled]);

  return {ref, revealed, direction};
}
