"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { useShop } from "@/context/ShopContext";
import { siteConfig } from "@/config/siteConfig";
import type { ShopMode } from "@/types/shop";

import styles from "./Header.module.scss";

export default function Header() {
  const { shopMode, setShopMode } = useShop();

  const pathname = usePathname();
  const router = useRouter();

  const handleShopChange = (mode: ShopMode) => {
    if (mode === shopMode) {
      return;
    }

    setShopMode(mode);

    const isProductDetailPage = pathname.startsWith("/termekek/");

    if (isProductDetailPage) {
      router.push("/termekek");
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.container}>
          <p>Tubi-Zoo • Horgászat és állateledel egy helyen</p>

          {!siteConfig.webshopEnabled && (
            <span className={styles.catalogBadge}>Online katalógus</span>
          )}
        </div>
      </div>

      <div className={styles.mainHeader}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoMark}>TZ</span>

            <span className={styles.logoText}>
              <strong>Tubi-Zoo</strong>
              <small>Horgászat & Állateledel</small>
            </span>
          </Link>

          <div
            className={styles.shopSwitch}
            role="group"
            aria-label="Üzletrész választása"
          >
            <button
              type="button"
              className={shopMode === "fishing" ? styles.active : ""}
              onClick={() => handleShopChange("fishing")}
              aria-pressed={shopMode === "fishing"}
            >
              <span aria-hidden="true">🎣</span>
              Horgászat
            </button>

            <button
              type="button"
              className={shopMode === "pet" ? styles.active : ""}
              onClick={() => handleShopChange("pet")}
              aria-pressed={shopMode === "pet"}
            >
              <span aria-hidden="true">🐾</span>
              Állateledel
            </button>
          </div>

          <nav className={styles.navigation} aria-label="Fő navigáció">
            <Link href="/">Főoldal</Link>
            <Link href="/termekek">Termékek</Link>
            <Link href="/kapcsolat">Kapcsolat</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
