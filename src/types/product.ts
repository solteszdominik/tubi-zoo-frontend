import type { ShopMode } from "./shop";

export type Product = {
  id: string;
  name: string;
  slug: string;
  shopMode: ShopMode;
  category: string;
  price: number;
  imageUrl: string;
  packageSize?: string;
  isAvailable: boolean;
  isFeatured: boolean;
};
