"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import {useCallback, useEffect, useRef, useState} from "react";
import {createPortal} from "react-dom";
import {useReducedMotion} from "@/hooks/useReducedMotion";
import styles from "./MobileNav.module.css";

const RADIUS_REM = 7;
/* Równomiernie co 90°: prawy, dół, lewy, góra */
const ORBIT_ANGLES_DEG = [100, 160, 200, 260];

function getOrbitPosition(index: number) {
  const angle = ORBIT_ANGLES_DEG[index] ?? 180;
  const rad = (angle * Math.PI) / 180;
  const x = RADIUS_REM * Math.cos(rad);
  const y = RADIUS_REM * Math.sin(rad);
  return {x: `${x}rem`, y: `${y}rem`};
}

export interface MobileNavItem {
  href: string;
  label: string;
}

interface MobileNavProps {
  items: MobileNavItem[];
  isOpen: boolean;
  onClose: () => void;
  onToggle: () => void;
}

export function MobileNav({items, isOpen, onClose, onToggle}: MobileNavProps) {
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();
  const overlayRef = useRef<HTMLDivElement>(null);
  const prevFocusRef = useRef<HTMLElement | null>(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!isOpen) return;
    prevFocusRef.current = document.activeElement as HTMLElement | null;
    const firstFocusable =
      overlayRef.current?.querySelector<HTMLElement>(".centerFab, [href]");
    firstFocusable?.focus();
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleGlobalKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !overlayRef.current) return;
      const focusables =
        overlayRef.current.querySelectorAll<HTMLElement>("button, [href]");
      const list = Array.from(focusables);
      if (list.length === 0) return;
      const first = list[0];
      const last = list[list.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", handleGlobalKey);
    return () => {
      document.removeEventListener("keydown", handleGlobalKey);
      prevFocusRef.current?.focus();
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  const overlayContent = (
    <div
      ref={overlayRef}
      id="mobile-nav-panel"
      className={styles.overlay}
      data-open={isOpen}
      data-reduced-motion={reducedMotion || undefined}
      onClick={handleOverlayClick}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
      aria-label="Menu nawigacji"
      aria-hidden={!isOpen}
      style={{pointerEvents: isOpen ? "auto" : "none"}}
    >
      <div className={styles.orbitWrap}>
        <span
          className={styles.orbitItem}
          style={
            {
              "--orbit-x": "0",
              "--orbit-y": "0",
            } as React.CSSProperties
          }
        >
          <button
            type="button"
            className={styles.centerFab}
            onClick={onClose}
            aria-label="Zamknij menu"
          >
            <span className={styles.centerFabIcon} aria-hidden />
          </button>
        </span>
        {items.map((item, i) => {
          const pos = getOrbitPosition(i);
          return (
            <span
              key={item.href}
              className={styles.orbitItem}
              style={
                {
                  "--orbit-x": pos.x,
                  "--orbit-y": pos.y,
                } as React.CSSProperties
              }
            >
              <Link
                href={item.href}
                className={styles.orbitLink}
                onClick={onClose}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            </span>
          );
        })}
      </div>
    </div>
  );

  return (
    <>
      <button
        type="button"
        className={styles.trigger}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls="mobile-nav-panel"
        aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
      >
        <span className={styles.triggerIcon} aria-hidden>
          <span />
          <span />
          <span />
        </span>
      </button>
      {mounted &&
        typeof document !== "undefined" &&
        createPortal(overlayContent, document.body)}
    </>
  );
}
