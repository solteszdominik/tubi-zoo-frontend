import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { products } from "@/data/products";
import ProductDetails from "@/components/products/ProductDetails/ProductDetails";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return {
      title: "Termék nem található",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const department =
    product.shopMode === "fishing" ? "Horgászat" : "Állateledel";

  const description =
    product.shortDescription?.trim() ||
    product.description?.trim() ||
    `Ismerd meg a(z) ${product.name} terméket a Tubi-Zoo ${department.toLowerCase()} kínálatában, Debrecenben.`;

  return {
    title: product.name,
    description: description.slice(0, 160),
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return <ProductDetails product={product} />;
}
