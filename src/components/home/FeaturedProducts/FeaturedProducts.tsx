"use client";

import Link from "next/link";

import { useShop } from "@/context/ShopContext";
import { products } from "@/data/products";
import ProductCard from "@/components/common/ProductCard/ProductCard";

import styles from "./FeaturedProducts.module.scss";

export default function FeaturedProducts() {
  const { shopMode } = useShop();

  const featuredProducts = products.filter(
    (product) => product.shopMode === shopMode && product.isFeatured,
  );

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <div>
            <span className={styles.eyebrow}>Kiemelt ajánlatok</span>
            <h2>Népszerű termékek</h2>
          </div>

          <Link href="/termekek" className={styles.viewAll}>
            Összes termék
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className={styles.grid}>
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
