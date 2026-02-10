"use client";

import {useEffect, useRef} from "react";
import styles from "./ExamplesSection.module.css";

export interface ExampleModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  resultSnippet?: string;
  category?: string;
}

export function ExampleModal({
  isOpen,
  onClose,
  title,
  description,
  resultSnippet,
  category,
}: ExampleModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const dialog = dialogRef.current;
    const focusables =
      dialog?.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      ) ?? [];
    const list = Array.from(focusables);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || list.length === 0) return;
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

    const previouslyFocused = document.activeElement as HTMLElement | null;
    document.addEventListener("keydown", handleKeyDown);
    (list[0] ?? overlayRef.current)?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus();
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

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className={styles.modalOverlay}
      onClick={(e) => e.target === overlayRef.current && onClose()}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        ref={dialogRef}
        className={styles.modalDialog}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className={styles.modalClose}
          onClick={onClose}
          aria-label="Zamknij"
        >
          ×
        </button>
        {category && <span className={styles.modalPill}>{category}</span>}
        <h2 id="modal-title" className={styles.modalTitle}>
          {title}
        </h2>
        <p className={styles.modalDesc}>{description}</p>
        {resultSnippet && (
          <p className={styles.modalSnippet}>{resultSnippet}</p>
        )}
      </div>
    </div>
  );
}
