"use client";
import type { Category } from "@/data/home";
import styles from "./ProductFilters.module.scss";
export type SortOption = "default" | "name";
type Props = {
  categories: Category[];
  selectedCategory: string;
  searchTerm: string;
  sortBy: SortOption;
  onCategoryChange: (v: string) => void;
  onSearchChange: (v: string) => void;
  onSortChange: (v: SortOption) => void;
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
        <label htmlFor="product-search">Keresés</label>
        <input
          id="product-search"
          type="search"
          placeholder="Termék keresése..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      <div className={styles.selectGroup}>
        <label htmlFor="category-filter">Kategória</label>
        <select
          id="category-filter"
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
        >
          <option value="all">Összes kategória</option>
          {categories.map((c) => (
            <option key={c.id} value={c.slug}>
              {c.name}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.selectGroup}>
        <label htmlFor="sort-products">Rendezés</label>
        <select
          id="sort-products"
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value as SortOption)}
        >
          <option value="default">Alapértelmezett</option>
          <option value="name">Név szerint</option>
        </select>
      </div>
    </div>
  );
}
