"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { useShop } from "@/context/ShopContext";
import type { ShopMode } from "@/types/shop";

import styles from "./Header.module.scss";

export default function Header() {
  const { shopMode, setShopMode } = useShop();
  const pathname = usePathname();
  const router = useRouter();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isHome = pathname === "/";
  const isPet = shopMode === "pet";

  const departmentUrl = (mode: ShopMode) =>
    mode === "fishing" ? "/horgaszat" : "/allateledel";

  const handleShopChange = (mode: ShopMode) => {
    setShopMode(mode);
    setMobileMenuOpen(false);

    router.push(departmentUrl(mode));
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`${styles.header} ${
        isPet ? styles.petTheme : styles.fishingTheme
      }`}
    >
      <div className={styles.mainHeader}>
        <div className={styles.container}>
          <Link
            href="/"
            className={styles.logo}
            onClick={closeMobileMenu}
            aria-label="Tubi-Zoo főoldal"
          >
            <span className={styles.logoName}>Tubi-Zoo</span>

            <span className={styles.logoSubtitle}>
              Állateledel és horgászcikk üzlet
            </span>
          </Link>

          <div className={styles.switchArea}>
            <div
              className={styles.shopSwitch}
              role="group"
              aria-label="Részlegválasztás"
            >
              <button
                type="button"
                className={
                  !isHome && shopMode === "fishing" ? styles.activeFishing : ""
                }
                onClick={() => handleShopChange("fishing")}
                aria-pressed={!isHome && shopMode === "fishing"}
              >
                <span aria-hidden="true">🎣</span>
                <span>Horgászat</span>
              </button>

              <button
                type="button"
                className={
                  !isHome && shopMode === "pet" ? styles.activePet : ""
                }
                onClick={() => handleShopChange("pet")}
                aria-pressed={!isHome && shopMode === "pet"}
              >
                <span aria-hidden="true">🐾</span>
                <span>Állateledel</span>
              </button>
            </div>

            <span className={styles.switchCaption}>
              Egy üzlet. Két világ. Mindig veled.
            </span>
          </div>

          <div className={styles.headerActions}>
            <Link
              href="/termekek"
              className={styles.catalogLink}
              onClick={closeMobileMenu}
            >
              <span aria-hidden="true">⌕</span>
              <span>Termékek</span>
            </Link>

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
          </div>
        </div>
      </div>

      <nav
        id="main-navigation"
        className={`${styles.navigation} ${
          mobileMenuOpen ? styles.navigationOpen : ""
        }`}
        aria-label="Fő navigáció"
      >
        <div className={styles.container}>
          <Link href="/" onClick={closeMobileMenu}>
            Tubi-Zoo
          </Link>

          <Link
            href="/allateledel"
            onClick={() => {
              setShopMode("pet");
              closeMobileMenu();
            }}
          >
            Állateledel
          </Link>

          <Link
            href="/horgaszat"
            onClick={() => {
              setShopMode("fishing");
              closeMobileMenu();
            }}
          >
            Horgászat
          </Link>

          <Link href="/termekek" onClick={closeMobileMenu}>
            Termékek
          </Link>

          <Link href="/kapcsolat" onClick={closeMobileMenu}>
            Kapcsolat
          </Link>
        </div>
      </nav>
    </header>
  );
}
