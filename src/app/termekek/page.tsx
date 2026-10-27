import type { Metadata } from "next";

import ProductList from "@/components/products/ProductList/ProductList";

export const metadata: Metadata = {
  title: "Termékek",
  description:
    "Böngéssz a Tubi-Zoo horgászfelszerelései, állateledelei és kiegészítői között! Kereshető termékkatalógus, kategóriák és részletes termékadatlapok.",
};

export default function ProductsPage() {
  return <ProductList />;
}
