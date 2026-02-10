"use client";

import {useState, useRef, useEffect} from "react";
import {useReducedMotion} from "@/hooks/useReducedMotion";
import {portfolioProjects, type PortfolioSection} from "@/data/portfolio";
import {ProjectCard} from "@/components/portfolio/ProjectCard";
import styles from "./PortfolioTabs.module.css";

function useContentVisible(activeId: PortfolioSection, reducedMotion: boolean) {
  const [visible, setVisible] = useState(reducedMotion);
  useEffect(() => {
    if (reducedMotion) {
      setVisible(true);
      return;
    }
    setVisible(false);
    const t = requestAnimationFrame(() => {
      requestAnimationFrame(() => setVisible(true));
    });
    return () => cancelAnimationFrame(t);
  }, [activeId, reducedMotion]);
  return visible;
}

export type TabConfig = {
  id: PortfolioSection;
  label: string;
};

const DEFAULT_TABS: TabConfig[] = [
  {id: "commercial", label: "Projekty komercyjne"},
  {id: "own-product", label: "Własne produkty"},
  {id: "template", label: "Startery / Szablony"},
];

export interface PortfolioTabsProps {
  tabs?: TabConfig[];
  subtitle?: string;
  className?: string;
}

export function PortfolioTabs({
  tabs = DEFAULT_TABS,
  subtitle = "Wybierz kategorię, aby zobaczyć projekty.",
  className = "",
}: PortfolioTabsProps) {
  const [activeId, setActiveId] = useState<PortfolioSection>(
    tabs[0]?.id ?? "commercial"
  );
  const [indicatorStyle, setIndicatorStyle] = useState<{
    left: number;
    width: number;
  } | null>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const reducedMotion = useReducedMotion();

  const projects = portfolioProjects.filter((p) => p.section === activeId);
  const contentVisible = useContentVisible(activeId, reducedMotion);

  const updateIndicator = () => {
    const list = listRef.current;
    if (!list) return;
    const idx = tabs.findIndex((t) => t.id === activeId);
    const btn = tabRefs.current[idx];
    if (!btn) {
      setIndicatorStyle(null);
      return;
    }
    const listRect = list.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();
    setIndicatorStyle({
      left: btnRect.left - listRect.left + list.scrollLeft,
      width: btnRect.width,
    });
  };

  useEffect(() => {
    updateIndicator();
    const onResize = () => updateIndicator();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [activeId]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const currentIdx = tabs.findIndex((t) => t.id === activeId);
    if (e.key === "ArrowLeft" && currentIdx > 0) {
      e.preventDefault();
      setActiveId(tabs[currentIdx - 1].id);
    } else if (e.key === "ArrowRight" && currentIdx < tabs.length - 1) {
      e.preventDefault();
      setActiveId(tabs[currentIdx + 1].id);
    }
  };

  return (
    <div
      className={`${styles.wrapper} ${className}`.trim()}
      role="tablist"
      aria-label="Kategorie projektów"
      onKeyDown={handleKeyDown}
    >
      <div ref={listRef} className={styles.tabList}>
        {!reducedMotion && indicatorStyle && (
          <div className={styles.indicatorWrap} aria-hidden>
            <div
              className={styles.indicator}
              style={{
                left: indicatorStyle.left,
                width: indicatorStyle.width,
              }}
            />
          </div>
        )}
        {tabs.map((tab, i) => (
          <button
            key={tab.id}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`tab-${tab.id}`}
            aria-selected={activeId === tab.id}
            aria-controls={`panel-${tab.id}`}
            tabIndex={activeId === tab.id ? 0 : -1}
            className={styles.tab}
            onClick={() => setActiveId(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}

      {tabs.map((tab) => (
        <div
          key={tab.id}
          id={`panel-${tab.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${tab.id}`}
          aria-hidden={activeId !== tab.id}
          className={styles.panel}
          hidden={activeId !== tab.id}
        >
          {activeId === tab.id && (
            <div
              className={`${styles.panelInner} ${
                contentVisible ? styles.visible : ""
              }`}
              key={tab.id}
            >
              {projects.length > 0 ? (
                <ul className={styles.grid}>
                  {projects.map((project) => (
                    <li key={project.id}>
                      <ProjectCard project={project} />
                    </li>
                  ))}
                </ul>
              ) : (
                <p className={styles.empty}>Brak projektów w tej kategorii.</p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
