"use client";

import Link from "next/link";
import {useRef, useEffect, useState} from "react";
import {MagneticButton} from "@/components/ui/MagneticButton";
import {siteConfig} from "@/data/site";
import {siteImages} from "@/data/images";
import {useReducedMotion} from "@/hooks/useReducedMotion";
import styles from "./Hero.module.css";

/**
 * Hero z tłem (obrazek), parallax i subtelną animacją tekstu (fade + slide) po załadowaniu.
 */
export function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [textVisible, setTextVisible] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) {
      setTextVisible(true);
      return;
    }
    const t = requestAnimationFrame(() => {
      setTextVisible(true);
    });
    return () => cancelAnimationFrame(t);
  }, [reducedMotion]);

  useEffect(() => {
    if (reducedMotion) return;
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const y = window.scrollY;
          setOffset(y * 0.1);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, {passive: true});
    return () => window.removeEventListener("scroll", onScroll);
  }, [reducedMotion]);

  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div
        ref={bgRef}
        className={styles.heroBg}
        style={{
          backgroundImage: `url(${siteImages.hero})`,
          transform: reducedMotion ? undefined : `translateY(${offset}px)`,
        }}
        aria-hidden
      />
      <div className={styles.heroOverlay} aria-hidden />
      <div
        className={styles.heroShimmer}
        aria-hidden
        data-reduced-motion={reducedMotion ? "true" : undefined}
      />
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <p
            className={textVisible ? styles.proofVisible : styles.proofInitial}
          >
            {siteConfig.proof.length > 0
              ? "Strony i aplikacje, które działają dla Twojej firmy"
              : "Strony i aplikacje dla firm"}
          </p>
          <h1
            id="hero-heading"
            className={
              textVisible ? styles.headlineVisible : styles.headlineInitial
            }
          >
            Tworzę <span className={styles.keyword}>strony internetowe</span> i
            aplikacje dla firm
          </h1>
          <p
            className={
              textVisible
                ? styles.subheadlineVisible
                : styles.subheadlineInitial
            }
          >
            {siteConfig.tagline}
          </p>
          <div className={textVisible ? styles.ctaVisible : styles.ctaInitial}>
            <MagneticButton href="/kontakt" glow>
              Porozmawiajmy o Twojej stronie
            </MagneticButton>
            <Link href="/portfolio" className={styles.secondary}>
              Zobacz, co mogę dla Ciebie zrobić
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
