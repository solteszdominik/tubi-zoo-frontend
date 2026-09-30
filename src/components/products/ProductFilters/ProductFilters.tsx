"use client";

import type { Category } from "@/data/home";

import styles from "./ProductFilters.module.scss";

type SortOption = "default" | "price-asc" | "price-desc" | "name";

type ProductFiltersProps = {
  categories: Category[];
  selectedCategory: string;
  searchTerm: string;
  sortBy: SortOption;
  onCategoryChange: (category: string) => void;
  onSearchChange: (value: string) => void;
  onSortChange: (value: SortOption) => void;
};

export default function ProductFilters({
  categories,
  selectedCategory,
  searchTerm,
  sortBy,
  onCategoryChange,
  onSearchChange,
  onSortChange,
}: ProductFiltersProps) {
  return (
    <div className={styles.filters}>
      <div className={styles.search}>
        <label htmlFor="product-search">Keresés</label>

        <input
          id="product-search"
          type="search"
          placeholder="Termék keresése..."
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
        />
      </div>

      <div className={styles.selectGroup}>
        <label htmlFor="category-filter">Kategória</label>

        <select
          id="category-filter"
          value={selectedCategory}
          onChange={(event) => onCategoryChange(event.target.value)}
        >
          <option value="all">Összes kategória</option>

          {categories.map((category) => (
            <option key={category.id} value={category.slug}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.selectGroup}>
        <label htmlFor="sort-products">Rendezés</label>

        <select
          id="sort-products"
          value={sortBy}
          onChange={(event) => onSortChange(event.target.value as SortOption)}
        >
          <option value="default">Alapértelmezett</option>
          <option value="price-asc">Ár szerint növekvő</option>
          <option value="price-desc">Ár szerint csökkenő</option>
          <option value="name">Név szerint</option>
        </select>
      </div>
    </div>
  );
}

export type { SortOption };
