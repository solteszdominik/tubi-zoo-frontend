"use client";

import Link from "next/link";
import type { Product } from "@/types/product";
import { categories } from "@/data/home";
import { siteConfig } from "@/config/siteConfig";
import styles from "./ProductDetails.module.scss";
import RelatedProducts from "../RelatedProducts/RelatedProducts";

type ProductDetailsProps = {
  product: Product;
};

export default function ProductDetails({ product }: ProductDetailsProps) {
  const category = categories[product.shopMode].find(
    (item) => item.slug === product.category,
  );

  const showPrice = siteConfig.webshopEnabled && product.price !== null;

  const productListUrl = `/termekek?shop=${product.shopMode}`;
  const categoryUrl = `${productListUrl}&category=${encodeURIComponent(
    product.category,
  )}`;

  const departmentName =
    product.shopMode === "fishing"
      ? "Tubi-Zoo Horgászat"
      : "Tubi-Zoo Állateledel";

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <nav className={styles.breadcrumb} aria-label="Morzsamenü">
          <Link href="/">Főoldal</Link>
          <span aria-hidden="true">/</span>

          <Link href={productListUrl}>Termékek</Link>

          {category && (
            <>
              <span aria-hidden="true">/</span>
              <Link href={categoryUrl}>{category.name}</Link>
            </>
          )}

          <span aria-hidden="true">/</span>
          <span className={styles.currentBreadcrumb}>{product.name}</span>
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
            <span className={styles.department}>{departmentName}</span>

            <span className={styles.category}>
              {category?.name ?? product.category}
            </span>

            <h1>{product.name}</h1>

            {product.shortDescription && (
              <p className={styles.shortDescription}>
                {product.shortDescription}
              </p>
            )}

            <div className={styles.details}>
              <div className={styles.detailRow}>
                <span>Kategória</span>
                <strong>{category?.name ?? product.category}</strong>
              </div>

              {product.packageSize && (
                <div className={styles.detailRow}>
                  <span>Kiszerelés</span>
                  <strong>{product.packageSize}</strong>
                </div>
              )}
            </div>

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
                <button
                  type="button"
                  disabled
                  title="Az online rendelési funkció még nem elérhető"
                >
                  Kosárba
                </button>
              </div>
            ) : (
              <div className={styles.catalogNotice}>
                <div className={styles.noticeIcon}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M3 10h18l-1.5-6h-15L3 10Z" />
                    <path d="M5 10v10h14V10" />
                    <path d="M9 20v-7h6v7" />
                  </svg>
                </div>

                <div>
                  <strong>Megtekinthető üzletünkben</strong>
                  <p>
                    Árakról és aktuális elérhetőségről érdeklődj személyesen
                    üzletünkben. Online vásárlás jelenleg nem elérhető.
                  </p>
                </div>
              </div>
            )}

            <Link href={productListUrl} className={styles.backLink}>
              <span aria-hidden="true">←</span>
              Vissza a termékekhez
            </Link>
          </div>
        </div>

        {product.description && (
          <div className={styles.description}>
            <span className={styles.sectionEyebrow}>Részletes ismertető</span>
            <h2>Termékinformáció</h2>
            <p>{product.description}</p>
          </div>
        )}
        <RelatedProducts product={product} />
      </div>
    </section>
  );
}
