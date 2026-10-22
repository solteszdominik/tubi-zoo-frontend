"use client";

import Link from "next/link";

import { useShop } from "@/context/ShopContext";
import { products } from "@/data/products";
import ProductCard from "@/components/common/ProductCard/ProductCard";

import styles from "./FeaturedProducts.module.scss";

const MAX_FEATURED_PRODUCTS = 4;

export default function FeaturedProducts() {
  const { shopMode } = useShop();

  const shopProducts = products.filter(
    (product) => product.shopMode === shopMode,
  );

  const featuredProducts = [
    ...shopProducts.filter((product) => product.isFeatured),
    ...shopProducts.filter((product) => !product.isFeatured),
  ].slice(0, MAX_FEATURED_PRODUCTS);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <div>
            <span className={styles.eyebrow}>
              {shopMode === "fishing" ? "Horgászat" : "Állateledel"}
            </span>

            <h2>Kiemelt termékek</h2>
          </div>

          <Link href="/termekek" className={styles.viewAll}>
            Összes termék
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {featuredProducts.length > 0 ? (
          <div className={styles.grid}>
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p>Hamarosan érkeznek a termékek!</p>
        )}
      </div>
    </section>
  );
}
