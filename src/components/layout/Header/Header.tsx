"use client";

import { useState } from "react";
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

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleShopChange = (mode: ShopMode) => {
    if (mode === shopMode) {
      return;
    }

    setShopMode(mode);
    setMobileMenuOpen(false);

    const isProductDetailPage = pathname.startsWith("/termekek/");

    if (isProductDetailPage) {
      router.push("/termekek");
    }
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
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
          <Link href="/" className={styles.logo} onClick={closeMobileMenu}>
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
              <span className={styles.switchLabel}>Horgászat</span>
            </button>

            <button
              type="button"
              className={shopMode === "pet" ? styles.active : ""}
              onClick={() => handleShopChange("pet")}
              aria-pressed={shopMode === "pet"}
            >
              <span aria-hidden="true">🐾</span>
              <span className={styles.switchLabel}>Állateledel</span>
            </button>
          </div>

          <button
            type="button"
            className={`${styles.menuButton} ${
              mobileMenuOpen ? styles.menuButtonOpen : ""
            }`}
            onClick={() => setMobileMenuOpen((current) => !current)}
            aria-expanded={mobileMenuOpen}
            aria-controls="main-navigation"
            aria-label={mobileMenuOpen ? "Menü bezárása" : "Menü megnyitása"}
          >
            <span />
            <span />
            <span />
          </button>

          <nav
            id="main-navigation"
            className={`${styles.navigation} ${
              mobileMenuOpen ? styles.navigationOpen : ""
            }`}
            aria-label="Fő navigáció"
          >
            <Link href="/" onClick={closeMobileMenu}>
              Főoldal
            </Link>

            <Link href="/termekek" onClick={closeMobileMenu}>
              Termékek
            </Link>

            <Link href="/kapcsolat" onClick={closeMobileMenu}>
              Kapcsolat
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
