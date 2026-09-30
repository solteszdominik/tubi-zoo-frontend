import { notFound } from "next/navigation";

import { products } from "@/data/products";
import ProductDetails from "@/components/products/ProductDetails/ProductDetails";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return <ProductDetails product={product} />;
}
