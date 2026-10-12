import type { ShopMode } from "./shop";

export type Product = {
  id: string;
  name: string;
  slug: string;
  shopMode: ShopMode;
  category: string;
  price: number | null;
  imageUrl: string;
  packageSize?: string | null;
  shortDescription: string;
  description: string;
  isAvailable: boolean;
  isFeatured: boolean;
};
