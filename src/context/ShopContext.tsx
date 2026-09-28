"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

import type { ShopMode } from "@/types/shop";

type ShopContextType = {
  shopMode: ShopMode;
  setShopMode: (mode: ShopMode) => void;
};

const ShopContext = createContext<ShopContextType | undefined>(undefined);

type ShopProviderProps = {
  children: ReactNode;
};

export function ShopProvider({ children }: ShopProviderProps) {
  const [shopMode, setShopMode] = useState<ShopMode>("fishing");

  return (
    <ShopContext.Provider value={{ shopMode, setShopMode }}>
      {children}
    </ShopContext.Provider>
  );
}

export function useShop() {
  const context = useContext(ShopContext);

  if (!context) {
    throw new Error("useShop must be used within a ShopProvider");
  }

  return context;
}
