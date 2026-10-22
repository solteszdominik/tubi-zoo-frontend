"use client";

import Image from "next/image";
import Link from "next/link";

import { useShop } from "@/context/ShopContext";
import { heroContent } from "@/data/home";

import styles from "./Hero.module.scss";

const heroImages = {
  fishing: {
    src: "/images/hero/fishing.webp",
    alt: "Horgászat a vízparton",
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
    <section
      className={`${styles.hero} ${styles[shopMode]}`}
      aria-label={
        shopMode === "fishing" ? "Tubi-Zoo Horgászat" : "Tubi-Zoo Állateledel"
      }
    >
      <Image
        key={shopMode}
        src={image.src}
        alt={image.alt}
        fill
        priority
        sizes="100vw"
        className={styles.backgroundImage}
      />

      <div className={styles.overlay} />

      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>
            {shopMode === "fishing"
              ? "TUBI-ZOO HORGÁSZAT"
              : "TUBI-ZOO ÁLLATELEDEL"}
          </span>

          <h1>{content.title}</h1>

          <p>{content.description}</p>

          <div className={styles.actions}>
            <Link href="/termekek" className={styles.primaryButton}>
              {content.primaryButton}
              <span aria-hidden="true">→</span>
            </Link>

            <a href="#kategoriak" className={styles.secondaryButton}>
              {content.secondaryButton}
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottomAccent} />
    </section>
  );
}
