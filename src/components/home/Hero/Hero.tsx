"use client";

import Link from "next/link";

import { useShop } from "@/context/ShopContext";
import { heroContent } from "@/data/home";

import styles from "./Hero.module.scss";

export default function Hero() {
  const { shopMode } = useShop();

  const content = heroContent[shopMode];

  return (
    <section className={`${styles.hero} ${styles[shopMode]}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>{content.eyebrow}</span>

          <h1>{content.title}</h1>

          <p>{content.description}</p>

          <div className={styles.actions}>
            <Link href="/termekek" className={styles.primaryButton}>
              {content.primaryButton}
            </Link>

            <a href="#kategoriak" className={styles.secondaryButton}>
              {content.secondaryButton}
            </a>
          </div>
        </div>

        <div className={styles.visual} aria-hidden="true">
          <span className={styles.visualIcon}>
            {shopMode === "fishing" ? "🎣" : "🐾"}
          </span>

          <span className={styles.visualLabel}>
            {shopMode === "fishing" ? "HORGÁSZAT" : "ÁLLATELEDEL"}
          </span>
        </div>
      </div>
    </section>
  );
}
