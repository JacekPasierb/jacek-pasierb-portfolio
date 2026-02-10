"use client";

import {useEffect} from "react";
import {useReducedMotion} from "@/hooks/useReducedMotion";

const CLASS = "no-motion";

/**
 * Dodaje klasę `no-motion` na body gdy użytkownik preferuje reduced-motion.
 * Dzięki temu wszystkie animacje (CSS) są wyłączone globalnie.
 */
export function ReducedMotionHandler() {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) {
      document.body.classList.add(CLASS);
    } else {
      document.body.classList.remove(CLASS);
    }
    return () => document.body.classList.remove(CLASS);
  }, [reducedMotion]);

  return null;
}
