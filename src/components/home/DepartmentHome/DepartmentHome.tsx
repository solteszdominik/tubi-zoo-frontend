"use client";

import { useEffect } from "react";
import { useShop } from "@/context/ShopContext";
import type { ShopMode } from "@/types/shop";

import Hero from "@/components/home/Hero/Hero";
import CategorySection from "@/components/home/CategorySection/CategorySection";
import FeaturedProducts from "@/components/home/FeaturedProducts/FeaturedProducts";

type DepartmentHomeProps = {
  mode: ShopMode;
};

export default function DepartmentHome({ mode }: DepartmentHomeProps) {
  const { shopMode, setShopMode } = useShop();

  useEffect(() => {
    if (shopMode !== mode) {
      setShopMode(mode);
    }
  }, [mode, shopMode, setShopMode]);

  if (shopMode !== mode) {
    return null;
  }

  return (
    <>
      <Hero />
      <CategorySection />
      <FeaturedProducts />
    </>
  );
}
