"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import styles from "./Footer.module.css";
import {siteConfig} from "@/data/site";

const footerLinks = [
  {href: "/", label: "Start"},
  {href: "/portfolio", label: "Portfolio"},
  {href: "/kontakt", label: "Kontakt"},
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
                      pathname === href ? styles.linkActive : styles.link
                    }
                    aria-current={pathname === href ? "page" : undefined}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className={styles.divider} aria-hidden />
        <p className={styles.copyright}>
          © {year} {siteConfig.siteName}. Wszystkie prawa zastrzeżone.
        </p>
      </div>
    </footer>
  );
}
