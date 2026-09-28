/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import type { Product } from "@/types/product";
import { siteConfig } from "@/config/siteConfig";

import styles from "./ProductCard.module.scss";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const formattedPrice = new Intl.NumberFormat("hu-HU").format(product.price);

  return (
    <article className={styles.card}>
      <Link
        href={`/termekek/${product.slug}`}
        className={styles.imageWrapper}
        aria-label={`${product.name} részletei`}
      >
        {product.imageUrl ? (
          <img src={product.imageUrl} alt={product.name} />
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
        <span className={styles.category}>{product.category}</span>

        <Link href={`/termekek/${product.slug}`} className={styles.name}>
          <h3>{product.name}</h3>
        </Link>

        {product.packageSize && (
          <span className={styles.packageSize}>{product.packageSize}</span>
        )}

        <div className={styles.bottom}>
          <strong className={styles.price}>{formattedPrice} Ft</strong>

          {siteConfig.webshopEnabled ? (
            <button type="button" className={styles.cartButton}>
              Kosárba
            </button>
          ) : (
            <Link
              href={`/termekek/${product.slug}`}
              className={styles.detailsButton}
            >
              Részletek
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
