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
  initialShopMode: ShopMode;
};

const COOKIE_NAME = "tubi-zoo-shop-mode";

export function ShopProvider({ children, initialShopMode }: ShopProviderProps) {
  const [shopMode, setShopModeState] = useState<ShopMode>(initialShopMode);

  const setShopMode = (mode: ShopMode) => {
    setShopModeState(mode);

    document.cookie = `${COOKIE_NAME}=${mode}; path=/; max-age=31536000; samesite=lax`;
  };

  return (
    <ShopContext.Provider
      value={{
        shopMode,
        setShopMode,
      }}
    >
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
