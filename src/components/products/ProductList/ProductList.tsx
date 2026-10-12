"use client";

import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useShop } from "@/context/ShopContext";
import { categories } from "@/data/home";
import { products } from "@/data/products";
import ProductCard from "@/components/common/ProductCard/ProductCard";
import ProductFilters, {
  type SortOption,
} from "@/components/products/ProductFilters/ProductFilters";
import styles from "./ProductList.module.scss";

export default function ProductList() {
  const { shopMode } = useShop();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("default");
  const activeCategories = categories[shopMode];
  const categoryFromUrl = searchParams.get("category");
  const isValidCategory = activeCategories.some(
    (category) => category.slug === categoryFromUrl,
  );
  const selectedCategory =
    categoryFromUrl && isValidCategory ? categoryFromUrl : "all";

  const handleCategoryChange = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (category === "all") params.delete("category");
    else params.set("category", category);
    const query = params.toString();
    router.replace(query ? `/termekek?${query}` : "/termekek", {
      scroll: false,
    });
  };

  const filteredProducts = useMemo(() => {
    const result = products.filter(
      (product) =>
        product.shopMode === shopMode &&
        (selectedCategory === "all" || product.category === selectedCategory) &&
        product.name
          .toLocaleLowerCase("hu")
          .includes(searchTerm.trim().toLocaleLowerCase("hu")),
    );
    return sortBy === "name"
      ? [...result].sort((a, b) => a.name.localeCompare(b.name, "hu"))
      : result;
  }, [shopMode, selectedCategory, searchTerm, sortBy]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>
            {shopMode === "fishing"
              ? "Tubi-Zoo Horgászat"
              : "Tubi-Zoo Állateledel"}
          </span>
          <h1>Termékek</h1>
          <p>
            {shopMode === "fishing"
              ? "Böngéssz horgásztermékeink között."
              : "Böngéssz állateledeleink és kiegészítőink között."}
          </p>
        </div>
        <ProductFilters
          categories={activeCategories}
          selectedCategory={selectedCategory}
          searchTerm={searchTerm}
          sortBy={sortBy}
          onCategoryChange={handleCategoryChange}
          onSearchChange={setSearchTerm}
          onSortChange={setSortBy}
        />
        <div className={styles.resultBar}>
          <span>
            <strong>{filteredProducts.length}</strong> termék
          </span>
        </div>
        {filteredProducts.length ? (
          <div className={styles.grid}>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className={styles.empty}>
            <span>🔍</span>
            <h2>Nincs találat</h2>
            <p>Próbálj más keresést vagy válassz másik kategóriát.</p>
          </div>
        )}
      </div>
    </section>
  );
}
