"use client";

import {useEffect, useState} from "react";

/**
 * Zwraca indeks sekcji aktualnie w viewport (do scrollspy).
 * Przekaż listę id elementów w kolejności.
 */
export function useScrollSpy(
  sectionIds: string[],
  options?: {threshold?: number; rootMargin?: string}
) {
  const [activeIndex, setActiveIndex] = useState(0);
  const threshold = options?.threshold ?? 0.3;
  const rootMargin = options?.rootMargin ?? "-20% 0px -60% 0px";

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el != null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = sectionIds.indexOf(entry.target.id);
          if (index !== -1) setActiveIndex(index);
        });
      },
      {threshold, rootMargin}
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds.join(","), threshold, rootMargin]);

  return activeIndex;
}
