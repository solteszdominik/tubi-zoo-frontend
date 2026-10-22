/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

import type { Product } from "@/types/product";
import { siteConfig } from "@/config/siteConfig";

import styles from "./ProductCard.module.scss";

type ProductCardProps = {
  product: Product;
};

const categoryNames: Record<string, string> = {
  kutya: "Kutya",
  macska: "Macska",
  madarak: "Madarak",
  ragcsalok: "Rágcsálók",
  tapkiegeszitok: "Tápkiegészítők",
  horgaszbotok: "Horgászbotok",
  orsok: "Orsók",
  zsinorok: "Zsinórok",
  horgok: "Horgok",
  csalik: "Csalik",
  etetőanyagok: "Etetőanyagok",
  pelletek: "Pelletek",
  bojlik: "Bojlik",
  "method-mix": "Method Mix",
  aromák: "Aromák",
};

export default function ProductCard({ product }: ProductCardProps) {
  const showPrice = siteConfig.webshopEnabled && product.price !== null;

  const productUrl = `/termekek/${product.slug}`;

  const categoryLabel = categoryNames[product.category] ?? product.category;

  return (
    <article className={styles.card}>
      <Link
        href={productUrl}
        className={styles.imageWrapper}
        aria-label={`${product.name} részletei`}
      >
        {product.imageUrl ? (
          <img src={product.imageUrl} alt={product.name} loading="lazy" />
        ) : (
          <div className={styles.placeholder}>
            <span aria-hidden="true">
              {product.shopMode === "fishing" ? "🎣" : "🐾"}
            </span>
            <small>Kép hamarosan</small>
          </div>
        )}
      </Link>

      <div className={styles.content}>
        <span className={styles.category}>{categoryLabel}</span>

        <Link href={productUrl} className={styles.name}>
          <h3>{product.name}</h3>
        </Link>

        {product.packageSize && (
          <span className={styles.packageSize}>{product.packageSize}</span>
        )}

        <div className={styles.bottom}>
          {showPrice && (
            <strong className={styles.price}>
              {new Intl.NumberFormat("hu-HU").format(product.price!)} Ft
            </strong>
          )}

          {siteConfig.webshopEnabled ? (
            <button
              type="button"
              className={styles.cartButton}
              disabled={!product.isAvailable}
            >
              Kosárba
            </button>
          ) : (
            <Link href={productUrl} className={styles.detailsButton}>
              <span>Termék részletei</span>
              <span aria-hidden="true">→</span>
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
