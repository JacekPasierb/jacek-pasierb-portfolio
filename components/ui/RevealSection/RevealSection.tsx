"use client";

import type React from "react";
import {useReveal, type RevealDirection} from "@/hooks/useReveal";
import {useReducedMotion} from "@/hooks/useReducedMotion";
import styles from "./RevealSection.module.css";

interface RevealSectionProps {
  children: React.ReactNode;
  direction?: RevealDirection;
  as?: keyof React.JSX.IntrinsicElements;
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
      ref={ref as React.Ref<unknown>}
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
