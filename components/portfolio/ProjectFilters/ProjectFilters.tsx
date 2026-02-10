"use client";

import type {ProjectType} from "@/data/portfolio";
import styles from "./ProjectFilters.module.css";

const typeLabels: Record<ProjectType, string> = {
  strona: "Strony",
  aplikacja: "Aplikacje",
  ecommerce: "E-commerce",
  saas: "SaaS",
  szablon: "Szablony",
};

interface ProjectFiltersProps {
  activeFilter: ProjectType | "wszystkie";
  onFilter: (filter: ProjectType | "wszystkie") => void;
  availableTypes: ProjectType[];
}

export function ProjectFilters({
  activeFilter,
  onFilter,
  availableTypes,
}: ProjectFiltersProps) {
  const filters: (ProjectType | "wszystkie")[] = [
    "wszystkie",
    ...availableTypes,
  ];

  return (
    <div className={styles.wrapper} role="group" aria-label="Filtruj projekty">
      {filters.map((f) => (
        <button
          key={f}
          type="button"
          className={activeFilter === f ? styles.btnActive : styles.btn}
          onClick={() => onFilter(f)}
          aria-pressed={activeFilter === f}
        >
          {f === "wszystkie" ? "Wszystkie" : typeLabels[f]}
        </button>
      ))}
    </div>
  );
}
