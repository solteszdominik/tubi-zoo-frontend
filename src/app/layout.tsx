import type { Metadata } from "next";
import { cookies } from "next/headers";

import Header from "@/components/layout/Header/Header";
import { ShopProvider } from "@/context/ShopContext";
import type { ShopMode } from "@/types/shop";

import "./globals.scss";

export const metadata: Metadata = {
  title: "Tubi-Zoo",
  description: "Horgászat és állateledel egy helyen.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();

  const savedShopMode = cookieStore.get("tubi-zoo-shop-mode")?.value;

  const initialShopMode: ShopMode = savedShopMode === "pet" ? "pet" : "fishing";

  return (
    <html lang="hu">
      <body>
        <ShopProvider initialShopMode={initialShopMode}>
          <Header />

          <main>{children}</main>
        </ShopProvider>
      </body>
    </html>
  );
}
