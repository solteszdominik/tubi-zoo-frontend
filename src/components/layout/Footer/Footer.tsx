import Link from "next/link";

import { siteConfig } from "@/config/siteConfig";

import styles from "./Footer.module.scss";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoMark}>TZ</span>

              <span className={styles.logoText}>
                <strong>Tubi-Zoo</strong>
                <small>Horgászat & Állateledel</small>
              </span>
            </Link>

            <p>
              Horgászfelszerelések, állateledelek és kiegészítők egy helyen.
            </p>
          </div>

          <div className={styles.column}>
            <h3>Oldalak</h3>

            <nav>
              <Link href="/">Főoldal</Link>
              <Link href="/termekek">Termékek</Link>
              <Link href="/kapcsolat">Kapcsolat</Link>
            </nav>
          </div>

          <div className={styles.column}>
            <h3>Üzlet</h3>

            <div className={styles.info}>
              <p>{siteConfig.contact.address}</p>

              {siteConfig.contact.phone && (
                <a href={`tel:${siteConfig.contact.phone.href}`}>
                  {siteConfig.contact.phone.display}
                </a>
              )}

              {siteConfig.contact.email && (
                <a href={`mailto:${siteConfig.contact.email}`}>
                  {siteConfig.contact.email}
                </a>
              )}
            </div>
          </div>

          <div className={styles.column}>
            <h3>Nyitvatartás</h3>

            <div className={styles.hours}>
              <div>
                <span>Hétfő – Péntek</span>
                <strong>{siteConfig.openingHours.weekdays}</strong>
              </div>

              <div>
                <span>Szombat</span>
                <strong>{siteConfig.openingHours.saturday}</strong>
              </div>

              <div>
                <span>Vasárnap</span>
                <strong>{siteConfig.openingHours.sunday}</strong>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            © {currentYear} {siteConfig.name}. Minden jog fenntartva.
          </p>

          <div className={styles.legal}>
            <Link href="/adatkezeles">Adatkezelési tájékoztató</Link>

            {siteConfig.webshopEnabled && <Link href="/aszf">ÁSZF</Link>}
          </div>
        </div>
      </div>
    </footer>
  );
}
