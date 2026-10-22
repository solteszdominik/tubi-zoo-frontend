import type { Metadata } from "next";
import Link from "next/link";

import { siteConfig } from "@/config/siteConfig";

import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Adatkezelési tájékoztató | Tubi-Zoo",
  description:
    "A Tubi-Zoo weboldal adatkezelőjének elérhetőségei és adatvédelmi információi.",
};

export default function PrivacyPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>ADATVÉDELEM</span>

          <h1>Adatkezelési tájékoztató</h1>

          <p>
            A Tubi-Zoo weboldal adatkezelőjének azonosító és kapcsolattartási
            adatai.
          </p>
        </div>

        <section className={styles.section}>
          <h2>1. Az adatkezelő adatai</h2>

          <dl className={styles.details}>
            <div>
              <dt>Cégnév</dt>
              <dd>{siteConfig.company.fullName}</dd>
            </div>

            <div>
              <dt>Székhely</dt>
              <dd>{siteConfig.company.headquarters}</dd>
            </div>

            <div>
              <dt>Adószám</dt>
              <dd>{siteConfig.company.taxNumber}</dd>
            </div>

            <div>
              <dt>E-mail</dt>
              <dd>
                <a href={`mailto:${siteConfig.contact.email}`}>
                  {siteConfig.contact.email}
                </a>
              </dd>
            </div>

            <div>
              <dt>Telefon</dt>
              <dd>
                <a href={`tel:${siteConfig.contact.phone.href}`}>
                  {siteConfig.contact.phone.display}
                </a>
              </dd>
            </div>
          </dl>
        </section>

        <section className={styles.section}>
          <h2>2. A weboldal működése</h2>

          <p>
            A Tubi-Zoo weboldal jelenleg online termékkatalógusként működik. A
            weboldalon keresztül rendelés és online fizetés jelenleg nem érhető
            el.
          </p>

          <p>
            Az online vásárlási funkciók későbbi bevezetésekor az adatkezelési
            tájékoztatót ennek megfelelően ki kell egészíteni.
          </p>
        </section>

        <section className={styles.section}>
          <h2>3. További adatvédelmi információk</h2>

          <p>
            A személyes adatok kezelésével kapcsolatos kérdésekben az adatkezelő
            a fent megadott elérhetőségeken kereshető.
          </p>

          <p className={styles.notice}>
            A részletes adatkezelési folyamatok, jogalapok, megőrzési idők és
            esetleges külső szolgáltatók dokumentálása még folyamatban van. Ez
            az oldal jelenleg nem teljes körű adatkezelési tájékoztató.
          </p>
        </section>

        <Link href="/" className={styles.backLink}>
          ← Vissza a főoldalra
        </Link>
      </div>
    </main>
  );
}
