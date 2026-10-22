"use client";

import Image from "next/image";
import Link from "next/link";

import { useShop } from "@/context/ShopContext";
import { categories } from "@/data/home";

import styles from "./CategorySection.module.scss";

const categoryImages: Record<string, string> = {
  horgaszbotok: "/images/hero/fishing-rod.webp",
  orsok: "/images/hero/fishing-reel.webp",
  zsinorok: "/images/hero/fishing-line.webp",
  horgok: "/images/hero/hooks.webp",
  csalik: "/images/hero/mucsali.webp",
  etetoanyagok: "/images/hero/etetokosar.webp",
  horgasztaskak: "/images/hero/tackles.webp",
  "horgasz-kiegeszitok": "/images/hero/tackles.webp",

  kutya: "/images/hero/dog.webp",
  macska: "/images/hero/cat.webp",
  madarak: "/images/hero/bird.webp",
  ragcsalok: "/images/hero/hamster.webp",
  tapkiegeszitok: "/images/hero/food.webp",
};

export default function CategorySection() {
  const { shopMode } = useShop();

  const activeCategories = categories[shopMode];

  return (
    <section
      id="kategoriak"
      className={`${styles.section} ${styles[shopMode]}`}
    >
      <div className={styles.container}>
        <div className={styles.heading}>
          <div>
            <span className={styles.eyebrow}>
              {shopMode === "fishing"
                ? "FEDEZD FEL A HORGÁSZAT VILÁGÁT"
                : "MINDEN KEDVENCEDNEK"}
            </span>

            <h2>Vásárolj kategóriák szerint</h2>

            <p>
              {shopMode === "fishing"
                ? "Találd meg a következő horgászatodhoz szükséges felszereléseket."
                : "Válaszd ki kedvenced számára a megfelelő termékeket."}
            </p>
          </div>

          <Link href="/termekek" className={styles.allCategories}>
            Összes termék <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className={styles.grid}>
          {activeCategories.map((category) => {
            const image = categoryImages[category.slug];

            return (
              <Link
                key={category.id}
                href={`/termekek?category=${category.slug}`}
                className={styles.card}
                aria-label={`${category.name} termékek megtekintése`}
              >
                <div className={styles.imageWrapper}>
                  {image ? (
                    <Image
                      src={image}
                      alt={category.name}
                      fill
                      sizes="(max-width: 600px) 50vw, (max-width: 1000px) 33vw, 25vw"
                      className={styles.categoryImage}
                    />
                  ) : (
                    <span className={styles.fallbackIcon}>{category.icon}</span>
                  )}
                </div>

                <div className={styles.imageOverlay} />

                <div className={styles.cardContent}>
                  <h3>{category.name}</h3>

                  <span>
                    Felfedezem
                    <span aria-hidden="true"> →</span>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
