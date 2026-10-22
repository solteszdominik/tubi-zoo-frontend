"use client";

import type { Category } from "@/data/home";
import styles from "./ProductFilters.module.scss";

export type SortOption = "default" | "name";

type Props = {
  categories: Category[];
  selectedCategory: string;
  searchTerm: string;
  sortBy: SortOption;
  onCategoryChange: (value: string) => void;
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
}: Props) {
  return (
    <div className={styles.filters}>
      <div className={styles.search}>
        <label htmlFor="product-search">Termék keresése</label>

        <div className={styles.searchField}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-4-4" />
          </svg>

          <input
            id="product-search"
            type="search"
            placeholder="Mit keresel?"
            value={searchTerm}
            onChange={(event) => onSearchChange(event.target.value)}
          />
        </div>
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
          <option value="name">Név szerint (A–Z)</option>
        </select>
      </div>
    </div>
  );
}
