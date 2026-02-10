"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import {useState} from "react";
import styles from "./Header.module.css";
import {siteConfig} from "@/data/site";
import {MobileNav} from "./MobileNav";

const navItems = [
  {href: "/", label: "Start"},
  {href: "/portfolio", label: "Portfolio"},
  {href: "/kontakt", label: "Kontakt"},
];

function LogoText({name}: {name: string}) {
  const parts = name.trim().split(/\s+/);
  const firstName = parts[0] ?? "";
  const lastName = parts.slice(1).join(" ");
  if (!lastName) {
    return <>{name}</>;
  }
  return (
    <>
      <span className={styles.logoFirst}>{firstName}</span>{" "}
      <span className={styles.logoLast}>{lastName}</span>
    </>
  );
}

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={styles.header} role="banner">
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} aria-label="Strona główna">
          <LogoText name={siteConfig.siteName} />
        </Link>
        <nav className={styles.nav} aria-label="Główne nawigacja">
          <ul className={styles.list}>
            {navItems.map(({href, label}) => (
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
        <MobileNav
          items={navItems}
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          onToggle={() => setMobileMenuOpen((o) => !o)}
        />
      </div>
    </header>
  );
}
