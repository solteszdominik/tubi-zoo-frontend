import Link from "next/link";

import type { Product } from "@/types/product";
import { products } from "@/data/products";
import ProductCard from "@/components/common/ProductCard/ProductCard";

import styles from "./RelatedProducts.module.scss";

type Props = {
  product: Product;
};

export default function RelatedProducts({ product }: Props) {
  const relatedProducts = products
    .filter(
      (item) =>
        item.id !== product.id &&
        item.shopMode === product.shopMode &&
        item.category === product.category,
    )
    .slice(0, 4);

  if (relatedProducts.length === 0) {
    return null;
  }

  const allProductsUrl = `/termekek?shop=${product.shopMode}`;

  return (
    <section
      className={styles.section}
      aria-labelledby="related-products-heading"
    >
      <div className={styles.heading}>
        <div>
          <span className={styles.eyebrow}>Fedezz fel többet</span>

          <h2 id="related-products-heading">Kapcsolódó termékek</h2>

          <p>Nézz meg további termékeket ugyanebből a kategóriából.</p>
        </div>

        <Link href={allProductsUrl} className={styles.viewAll}>
          Összes termék <span aria-hidden="true">→</span>
        </Link>
      </div>

      <div className={styles.grid}>
        {relatedProducts.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </section>
  );
}
