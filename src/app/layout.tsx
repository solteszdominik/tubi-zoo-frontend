import type { Metadata } from "next";

import Header from "@/components/layout/Header/Header";
import { ShopProvider } from "@/context/ShopContext";

import "./globals.scss";

export const metadata: Metadata = {
  title: "Tubi-Zoo",
  description: "Horgászat és állateledel egy helyen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
      <body>
        <ShopProvider>
          <Header />

          <main>{children}</main>
        </ShopProvider>
      </body>
    </html>
  );
}
