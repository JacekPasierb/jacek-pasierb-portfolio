"use client";

import {useEffect, useState} from "react";
import styles from "./PageTransition.module.css";

/**
 * Opakowuje treść strony – po mount dodaje klasę z fade-in (200–300 ms).
 * Bez ciężkich libów; respektuje prefers-reduced-motion.
 */
export function PageTransition({children}: {children: React.ReactNode}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = requestAnimationFrame(() => {
      setMounted(true);
    });
    return () => cancelAnimationFrame(t);
  }, []);

  return (
    <div
      className={mounted ? styles.visible : styles.initial}
      data-page-transition
    >
      {children}
    </div>
  );
}
