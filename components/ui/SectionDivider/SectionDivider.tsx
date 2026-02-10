"use client";

import {useEffect, useRef, useState, useCallback} from "react";
import {useInView} from "@/hooks/useInView";
import {useReducedMotion} from "@/hooks/useReducedMotion";
import styles from "./SectionDivider.module.css";

export type DividerVariant = "glow" | "wave" | "progress";
export type DividerAccent = "blue" | "violet" | "green";
export type DividerIntensity = "subtle" | "normal";

const ACCENT_VARS: Record<DividerAccent, {accent: string; glow: string}> = {
  blue: {
    accent: "var(--divider-accent-blue)",
    glow: "var(--divider-glow-blue)",
  },
  violet: {
    accent: "var(--divider-accent-violet)",
    glow: "var(--divider-glow-violet)",
  },
  green: {
    accent: "var(--divider-accent-green)",
    glow: "var(--divider-glow-green)",
  },
};

const INTENSITY_OPACITY = {
  subtle: {line: 0.35, blob: 0.2},
  normal: {line: 0.5, blob: 0.35},
};

export interface SectionDividerProps {
  variant?: DividerVariant;
  accent?: DividerAccent;
  intensity?: DividerIntensity;
  withNoise?: boolean;
  withEdgeHighlight?: boolean;
  className?: string;
}

/**
 * Reusable section separator: glow, wave, or progress.
 * Accessible, no CLS, respects prefers-reduced-motion.
 */
export function SectionDivider({
  variant = "glow",
  accent = "blue",
  intensity = "normal",
  withNoise = false,
  withEdgeHighlight = true,
  className = "",
}: SectionDividerProps) {
  const {ref: inViewRef, isInView} = useInView({
    threshold: 0.05,
    rootMargin: "0px 0px -30px 0px",
    once: true,
  });
  const reducedMotion = useReducedMotion();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const nextSectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number>(0);

  const setWrapperRef = useCallback(
    (el: HTMLDivElement | null) => {
      wrapperRef.current = el;
      (inViewRef as React.MutableRefObject<HTMLElement | null>).current = el;
    },
    [inViewRef]
  );

  const vars = ACCENT_VARS[accent];
  const opacity = INTENSITY_OPACITY[intensity];

  const inlineStyle = {
    "--divider-accent": vars.accent,
    "--divider-glow": vars.glow,
    "--divider-line-opacity": String(opacity.line),
    "--divider-blob-opacity": String(opacity.blob),
  } as React.CSSProperties;

  // Progress variant: observe next section and compute scroll progress
  useEffect(() => {
    if (variant !== "progress" || reducedMotion) return;
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const next = wrapper.nextElementSibling as HTMLElement | null;
    if (!next) return;
    nextSectionRef.current = next;

    const updateProgress = () => {
      const el = nextSectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const winH = window.innerHeight;
      const sectionTop = rect.top + window.scrollY;
      const sectionHeight = el.offsetHeight;
      const scrollBottom = window.scrollY + winH;
      const start = sectionTop - winH;
      const end = sectionTop + sectionHeight;
      let p = (scrollBottom - start) / (sectionHeight + winH);
      p = Math.max(0, Math.min(1, p));
      setProgress(p);
    };

    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, {passive: true});
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateProgress);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [variant, reducedMotion]);

  // Wave: subtle parallax (translateY by scroll)
  const [waveOffset, setWaveOffset] = useState(0);
  useEffect(() => {
    if (variant !== "wave" || reducedMotion) return;
    const onScroll = () => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;
      const rect = wrapper.getBoundingClientRect();
      const centerY = rect.top + rect.height / 2;
      const viewportCenter = window.innerHeight / 2;
      const delta = (viewportCenter - centerY) / window.innerHeight;
      const maxPx = 10;
      setWaveOffset(delta * maxPx);
    };
    window.addEventListener("scroll", onScroll, {passive: true});
    return () => window.removeEventListener("scroll", onScroll);
  }, [variant, reducedMotion]);

  return (
    <div
      ref={setWrapperRef}
      className={`${styles.wrapper} ${className}`.trim()}
      style={{
        ...inlineStyle,
        ...(variant === "wave"
          ? ({"--wave-offset": `${waveOffset}px`} as React.CSSProperties)
          : {}),
        ...(variant === "progress"
          ? ({
              "--progress": reducedMotion ? 1 : progress,
            } as React.CSSProperties)
          : {}),
      }}
      data-in-view={isInView ? "true" : undefined}
      data-variant={variant}
      role="presentation"
      aria-hidden
    >
      {withEdgeHighlight && <div className={styles.edgeHighlight} />}
      <div className={styles.inner}>
        {variant === "glow" && (
          <>
            <div className={styles.glowBlob} aria-hidden />
            {withNoise && <div className={styles.noise} aria-hidden />}
            <hr className={styles.glowLine} />
          </>
        )}
        {variant === "wave" && (
          <div className={styles.waveWrap}>
            <svg
              className={styles.waveSvg}
              viewBox="0 0 1200 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <path
                d="M0 12 Q300 2 600 12 T1200 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        )}
        {variant === "progress" && (
          <div className={styles.progressTrack}>
            <div className={styles.progressFill} />
          </div>
        )}
      </div>
    </div>
  );
}
