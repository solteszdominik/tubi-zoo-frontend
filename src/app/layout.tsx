import type { Metadata } from "next";
import { cookies } from "next/headers";

import Header from "@/components/layout/Header/Header";
import { ShopProvider } from "@/context/ShopContext";
import type { ShopMode } from "@/types/shop";

import "./globals.scss";
import Footer from "@/components/layout/Footer/Footer";

export const metadata: Metadata = {
  title: {
    default: "Tubi-Zoo | Horgászat és állateledel Debrecenben",
    template: "%s | Tubi-Zoo",
  },
  description:
    "Horgászfelszerelések, csalik, etetőanyagok, állateledelek és kiegészítők Debrecenben. Fedezd fel a Tubi-Zoo kínálatát!",
  robots: {
    index: true,
    follow: true,
  },
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

          <Footer />
        </ShopProvider>
      </body>
    </html>
  );
}
