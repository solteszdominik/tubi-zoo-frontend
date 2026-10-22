"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { useShop } from "@/context/ShopContext";
import { categories } from "@/data/home";
import { products } from "@/data/products";
import type { ShopMode } from "@/types/shop";

import ProductCard from "@/components/common/ProductCard/ProductCard";
import ProductFilters, {
  type SortOption,
} from "@/components/products/ProductFilters/ProductFilters";

import styles from "./ProductList.module.scss";

export default function ProductList() {
  const { shopMode, setShopMode } = useShop();

  const router = useRouter();
  const searchParams = useSearchParams();

  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("default");

  const shopFromUrl = searchParams.get("shop");

  const activeShopMode: ShopMode =
    shopFromUrl === "pet" || shopFromUrl === "fishing" ? shopFromUrl : shopMode;

  useEffect(() => {
    if (shopMode !== activeShopMode) {
      setShopMode(activeShopMode);
    }
  }, [shopMode, activeShopMode, setShopMode]);

  const activeCategories = categories[activeShopMode];

  const categoryFromUrl = searchParams.get("category");

  const isValidCategory = activeCategories.some(
    (category) => category.slug === categoryFromUrl,
  );

  const selectedCategory =
    categoryFromUrl && isValidCategory ? categoryFromUrl : "all";

  const handleCategoryChange = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("shop", activeShopMode);

    if (category === "all") {
      params.delete("category");
    } else {
      params.set("category", category);
    }

    router.replace(`/termekek?${params.toString()}`, {
      scroll: false,
    });
  };

  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLocaleLowerCase("hu");

    const result = products.filter((product) => {
      const matchesShop = product.shopMode === activeShopMode;

      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;

      const matchesSearch = product.name
        .toLocaleLowerCase("hu")
        .includes(normalizedSearch);

      return matchesShop && matchesCategory && matchesSearch;
    });

    if (sortBy === "name") {
      return [...result].sort((a, b) => a.name.localeCompare(b.name, "hu"));
    }

    return result;
  }, [activeShopMode, selectedCategory, searchTerm, sortBy]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>
            {activeShopMode === "fishing"
              ? "Tubi-Zoo Horgászat"
              : "Tubi-Zoo Állateledel"}
          </span>

          <h1>Termékek</h1>

          <p>
            {activeShopMode === "fishing"
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

        {filteredProducts.length > 0 ? (
          <div className={styles.grid}>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className={styles.empty}>
            <span aria-hidden="true">🔍</span>
            <h2>Nincs találat</h2>
            <p>Próbálj más keresést vagy válassz másik kategóriát.</p>
          </div>
        )}
      </div>
    </section>
  );
}
