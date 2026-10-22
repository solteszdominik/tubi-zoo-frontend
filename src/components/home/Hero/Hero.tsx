"use client";

import Image from "next/image";
import Link from "next/link";

import { useShop } from "@/context/ShopContext";
import { heroContent } from "@/data/home";

import styles from "./Hero.module.scss";

const heroImages = {
  fishing: {
    src: "/images/hero/fishing.webp",
    alt: "Horgászfelszerelés és horgászati termékek",
  },
  pet: {
    src: "/images/hero/cat-dog-.webp",
    alt: "Kutya és macska – Tubi-Zoo állateledel",
  },
};

export default function Hero() {
  const { shopMode } = useShop();

  const content = heroContent[shopMode];
  const image = heroImages[shopMode];

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

        <div className={styles.visual}>
          <Image
            key={shopMode}
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="(max-width: 700px) 100vw, (max-width: 1100px) 45vw, 520px"
            className={styles.heroImage}
          />

          <div className={styles.imageOverlay} />

          <span className={styles.visualLabel}>
            {shopMode === "fishing"
              ? "TUBI-ZOO HORGÁSZAT"
              : "TUBI-ZOO ÁLLATELEDEL"}
          </span>
        </div>
      </div>
    </section>
  );
}
