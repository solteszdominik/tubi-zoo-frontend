import type { Metadata } from "next";

import ProductList from "@/components/products/ProductList/ProductList";

export const metadata: Metadata = {
  title: "Termékek | Tubi-Zoo",
  description: "Tubi-Zoo horgász és állateledel termékek.",
};

export default function ProductsPage() {
  return <ProductList />;
}
