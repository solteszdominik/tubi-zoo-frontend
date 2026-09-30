import Link from "next/link";

import styles from "./StoreIntro.module.scss";

export default function StoreIntro() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.visual}>
          <div className={styles.imagePlaceholder}>
            <span>Tubi-Zoo</span>
            <small>Üzletfotó hamarosan</small>
          </div>
        </div>

        <div className={styles.content}>
          <span className={styles.eyebrow}>Rólunk</span>

          <h2>Horgászat és állateledel egy helyen.</h2>

          <p>
            A Tubi-Zoo kínálatában horgászfelszerelések, csalik és kiegészítők
            mellett kutyák, macskák, madarak és rágcsálók számára is találsz
            eledeleket és kiegészítőket.
          </p>

          <p>
            Termékeinket személyesen üzletünkben is megtekintheted és
            megvásárolhatod.
          </p>

          <div className={styles.actions}>
            <Link href="/termekek" className={styles.primaryButton}>
              Termékek megtekintése
            </Link>

            <Link href="/kapcsolat" className={styles.secondaryButton}>
              Üzlet és elérhetőség
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
