import { siteConfig } from "@/config/siteConfig";

import styles from "./ContactPage.module.scss";

export default function ContactPage() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>Kapcsolat</span>

          <h1>Látogass el üzletünkbe!</h1>

          <p>
            Horgászfelszerelések, állateledelek és kiegészítők személyesen is
            elérhetők debreceni üzletünkben.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.information}>
            <div className={styles.card}>
              <span className={styles.icon}>📍</span>

              <div>
                <h2>Üzletünk</h2>
                <p>{siteConfig.contact.address}</p>
              </div>
            </div>

            <div className={styles.card}>
              <span className={styles.icon}>📞</span>

              <div>
                <h2>Telefon</h2>

                <a href={`tel:${siteConfig.contact.phone.href}`}>
                  {siteConfig.contact.phone.display}
                </a>
              </div>
            </div>

            <div className={styles.card}>
              <span className={styles.icon}>✉️</span>

              <div>
                <h2>E-mail</h2>

                <a href={`mailto:${siteConfig.contact.email}`}>
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>

            <div className={styles.hoursCard}>
              <h2>Nyitvatartás</h2>

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

          <div className={styles.map}>
            <iframe
              title="Tubi-Zoo üzlet térkép"
              src="https://www.google.com/maps?q=4034%20Debrecen%2C%20H%C3%A9t%20vez%C3%A9r%20utca%208&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
