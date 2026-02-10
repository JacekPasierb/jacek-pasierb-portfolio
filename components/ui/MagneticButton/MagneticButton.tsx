"use client";

import {useRef, useState, useCallback, useEffect} from "react";
import {useReducedMotion} from "@/hooks/useReducedMotion";
import styles from "./MagneticButton.module.css";

interface MagneticButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  /** Siła przyciągania (px) – domyślnie 12 */
  strength?: number;
  /** Czy pokazywać glow – domyślnie true */
  glow?: boolean;
}

/**
 * CTA button: lekko "ucieka" do kursora + delikatny glow.
 * Działa tylko na desktop (pointer: fine); na mobile zwykły link.
 */
export function MagneticButton({
  children,
  strength = 12,
  glow = true,
  className,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [offset, setOffset] = useState({x: 0, y: 0});
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);
  const reducedMotion = useReducedMotion();
  const rafRef = useRef<number>(0);

  useEffect(() => setMounted(true), []);

  const handleMove = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (reducedMotion) return;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const x = (e.clientX - centerX) / rect.width;
      const y = (e.clientY - centerY) / rect.height;
      const clamp = (v: number, max: number) =>
        Math.max(-max, Math.min(max, v));
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        setOffset({
          x: clamp(x * strength, strength),
          y: clamp(y * strength, strength),
        });
      });
    },
    [strength, reducedMotion]
  );

  const handleLeave = useCallback(() => {
    setIsHovered(false);
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => setOffset({x: 0, y: 0}));
  }, []);

  const handleEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const isFine =
    mounted &&
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: fine)").matches;
  const useMagnetic = !reducedMotion && isFine;

  const lift = isHovered ? -2 : 0;
  const transform = useMagnetic
    ? `translate(${offset.x}px, ${offset.y + lift}px)`
    : isHovered
    ? "translateY(-2px)"
    : undefined;

  return (
    <a
      ref={ref}
      className={[
        styles.button,
        glow && isHovered ? styles.glow : "",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
      style={transform ? {transform} : undefined}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onMouseEnter={handleEnter}
      {...props}
    >
      {children}
    </a>
  );
}
