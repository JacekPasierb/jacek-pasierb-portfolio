"use client";

import type React from "react";
import {useReveal, type RevealDirection} from "@/hooks/useReveal";
import {useReducedMotion} from "@/hooks/useReducedMotion";
import styles from "./RevealSection.module.css";

/** Elementy HTML obsługiwane przez RevealSection (bez SVG, żeby ref był kompatybilny). */
type RevealSectionTag =
  | "section"
  | "div"
  | "article"
  | "aside"
  | "main"
  | "header"
  | "footer"
  | "nav"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6";

interface RevealSectionProps {
  children: React.ReactNode;
  direction?: RevealDirection;
  as?: RevealSectionTag;
  className?: string;
  id?: string;
}

export function RevealSection({
  children,
  direction = "up",
  as: Component = "section",
  className,
  id,
}: RevealSectionProps) {
  const reducedMotion = useReducedMotion();
  const {ref, revealed} = useReveal({
    direction,
    once: true,
    disabled: reducedMotion,
  });

  return (
    <Component
      ref={ref as unknown as React.Ref<HTMLDivElement>}
      id={id}
      data-revealed={revealed ? "true" : undefined}
      className={[
        styles.wrapper,
        revealed ? styles.revealed : "",
        direction !== "none" ? styles[`dir_${direction}`] : "",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </Component>
  );
}
