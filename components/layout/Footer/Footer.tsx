"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import styles from "./Footer.module.css";
import {siteConfig} from "@/data/site";

const footerLinks = [
  {href: "/", label: "Start"},
  {href: "/uslugi", label: "Usługi"},
  {href: "/portfolio", label: "Portfolio"},
  {href: "/#kontakt", label: "Kontakt"},
];

export function Footer() {
  const pathname = usePathname();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.footerOverlay} aria-hidden />
      <div className={styles.inner}>
        <div className={styles.top}>
          <Link href="/" className={styles.brand} aria-label="Strona główna">
            {siteConfig.siteName}
          </Link>
          <nav className={styles.nav} aria-label="Stopka">
            <ul className={styles.list}>
              {footerLinks.map(({href, label}) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={
                      pathname === href ||
                      (href !== "/" && pathname.startsWith(href + "/"))
                        ? styles.linkActive
                        : styles.link
                    }
                    aria-current={
                      pathname === href ||
                      (href !== "/" && pathname.startsWith(href + "/"))
                        ? "page"
                        : undefined
                    }
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.social}>
            <a
              href={siteConfig.contact.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Pasierb WebStudio"
              className={styles.socialLink}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>

              <span>Obserwuj mnie</span>
            </a>
          </div>
        </div>
        <div className={styles.divider} aria-hidden />
        <p className={styles.copyright}>
          © {year} {siteConfig.siteName}. Wszystkie prawa zastrzeżone.
        </p>
      </div>
    </footer>
  );
}
