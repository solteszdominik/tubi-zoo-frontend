"use client";
import Link from "next/link";
import type { Product } from "@/types/product";
import { categories } from "@/data/home";
import { siteConfig } from "@/config/siteConfig";
import styles from "./ProductDetails.module.scss";

type ProductDetailsProps = { product: Product };
export default function ProductDetails({ product }: ProductDetailsProps) {
  const category = categories[product.shopMode].find(
    (item) => item.slug === product.category,
  );
  const showPrice = siteConfig.webshopEnabled && product.price !== null;
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <nav className={styles.breadcrumb} aria-label="Morzsamenü">
          <Link href="/">Főoldal</Link>
          <span>/</span>
          <Link href="/termekek">Termékek</Link>
          {category && (
            <>
              <span>/</span>
              <Link href={`/termekek?category=${category.slug}`}>
                {category.name}
              </Link>
            </>
          )}
          <span>/</span>
          <span>{product.name}</span>
        </nav>
        <div className={styles.product}>
          <div className={styles.imageSection}>
            <div className={styles.imageWrapper}>
              {product.imageUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={product.imageUrl} alt={product.name} />
              ) : (
                <div className={styles.placeholder}>
                  <span aria-hidden="true">
                    {product.shopMode === "fishing" ? "🎣" : "🐾"}
                  </span>
                  <small>Termékkép hamarosan</small>
                </div>
              )}
            </div>
          </div>
          <div className={styles.info}>
            <span className={styles.category}>{category?.name}</span>
            <h1>{product.name}</h1>
            <p className={styles.shortDescription}>
              {product.shortDescription}
            </p>
            {product.packageSize && (
              <div className={styles.detailRow}>
                <span>Kiszerelés</span>
                <strong>{product.packageSize}</strong>
              </div>
            )}
            {siteConfig.webshopEnabled && (
              <div className={styles.availability}>
                <span
                  className={
                    product.isAvailable
                      ? styles.availableDot
                      : styles.unavailableDot
                  }
                />
                {product.isAvailable ? "Elérhető" : "Jelenleg nem elérhető"}
              </div>
            )}
            {showPrice && (
              <div className={styles.price}>
                {new Intl.NumberFormat("hu-HU").format(product.price!)} Ft
              </div>
            )}
            {siteConfig.webshopEnabled ? (
              <div className={styles.purchase}>
                <button type="button" disabled={!product.isAvailable}>
                  Kosárba
                </button>
              </div>
            ) : (
              <div className={styles.catalogNotice}>
                <strong>Online katalógus</strong>
                <p>
                  Árakról és elérhetőségről érdeklődj üzletünkben. Online
                  vásárlás jelenleg nem elérhető.
                </p>
              </div>
            )}
          </div>
        </div>
        <div className={styles.description}>
          <h2>Termékinformáció</h2>
          <p>{product.description}</p>
        </div>
      </div>
    </section>
  );
}
