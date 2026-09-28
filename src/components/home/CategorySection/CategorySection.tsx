"use client";

import Link from "next/link";

import { useShop } from "@/context/ShopContext";
import { categories } from "@/data/home";

import styles from "./CategorySection.module.scss";

export default function CategorySection() {
  const { shopMode } = useShop();

  const activeCategories = categories[shopMode];

  return (
    <section id="kategoriak" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <div>
            <span className={styles.eyebrow}>
              {shopMode === "fishing" ? "Horgászat" : "Állateledel"}
            </span>

            <h2>Válassz kategóriát</h2>

            <p>
              {shopMode === "fishing"
                ? "Minden, amire a vízparton szükséged lehet."
                : "Minden, amire kedvencednek szüksége lehet."}
            </p>
          </div>

          <Link href="/termekek" className={styles.allCategories}>
            Összes termék
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className={styles.grid}>
          {activeCategories.map((category) => (
            <Link
              key={category.id}
              href={`/termekek?category=${category.slug}`}
              className={styles.card}
            >
              <div className={styles.iconWrapper}>
                <span aria-hidden="true">{category.icon}</span>
              </div>

              <div className={styles.cardContent}>
                <h3>{category.name}</h3>
                <span>
                  Termékek megtekintése
                  <span aria-hidden="true"> →</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
