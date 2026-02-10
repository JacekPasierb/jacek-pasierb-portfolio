"use client";

import {useEffect, useRef, useState} from "react";

export interface UseInViewOptions {
  /** Próg widoczności 0–1 (domyślnie 0.05) */
  threshold?: number;
  /** Root margin (np. "0px 0px -50px 0px") */
  rootMargin?: string;
  /** Jednorazowy trigger (nie resetuj przy scrollu w górę) */
  once?: boolean;
  /** Wyłączyć observer */
  disabled?: boolean;
}

/**
 * Hook do wykrywania, czy element jest w viewport (IntersectionObserver).
 * Zwraca ref do podpięcia pod element oraz stan isInView.
 */
export function useInView<T extends HTMLElement = HTMLElement>(
  options: UseInViewOptions = {}
) {
  const {
    threshold = 0.05,
    rootMargin = "0px 0px -20px 0px",
    once = true,
    disabled = false,
  } = options;

  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (disabled) {
      setIsInView(true);
      return;
    }
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          } else if (!once) {
            setIsInView(false);
          }
        });
      },
      {threshold, rootMargin}
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once, disabled]);

  return {ref, isInView};
}
