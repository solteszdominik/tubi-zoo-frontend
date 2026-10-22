"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useShop } from "@/context/ShopContext";
import type { ShopMode } from "@/types/shop";

import styles from "./page.module.scss";

const highlights = [
  {
    number: "01",
    title: "Special Mix csomagajánlatok",
    description: "Válogatott csomagajánlatok a horgászat szerelmeseinek.",
    label: "Csomagajánlatok",
    image: "/images/fishing/fish-package1.jpeg",
  },
  {
    number: "02",
    title: "Élő csalik nagy mennyiségben",
    description: "Élő csalik széles választékban, személyesen az üzletünkben.",
    label: "Élő csalik",
    image: "/images/fishing/fish-package4.jpeg",
  },
  {
    number: "03",
    title: "Fagyasztott csalik",
    description: "Fagyasztott csalik, amelyek üzletünkben vásárolhatók meg.",
    label: "Fagyasztott csalik",
    image: "/images/fishing/fish-package5.jpg",
  },
];

export default function Home() {
  const router = useRouter();
  const { setShopMode } = useShop();

  const enterShop = (mode: ShopMode) => {
    setShopMode(mode);
    router.push(mode === "fishing" ? "/horgaszat" : "/allateledel");
  };

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>
            Üdvözlünk a Tubi-Zoo világában!
          </span>

          <h1>
            Állatok. Horgászat.
            <br />
            <em>Életmód.</em>
          </h1>

          <p>
            Két szenvedély, egy helyen. Fedezd fel állateledel- és
            horgászkínálatunkat, és ismerd meg üzletünket!
          </p>

          <div className={styles.heroActions}>
            <a href="#reszlegek" className={styles.primaryButton}>
              Fedezd fel részlegeinket
              <span aria-hidden="true">→</span>
            </a>

            <a href="#rolunk" className={styles.secondaryButton}>
              Ismerj meg minket
            </a>
          </div>
        </div>

        <div className={styles.heroImages} aria-hidden="true">
          <div className={styles.heroImage}>
            <Image
              src="/images/hero/cat-dog-.webp"
              alt=""
              fill
              priority
              sizes="(max-width: 700px) 100vw, 50vw"
            />
          </div>

          <div className={styles.heroImage}>
            <Image
              src="/images/hero/fishing.webp"
              alt=""
              fill
              priority
              sizes="(max-width: 700px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section id="reszlegek" className={styles.departments}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <span className={styles.sectionEyebrow}>Egy üzlet. Két világ.</span>

            <h2>Merre induljunk?</h2>

            <p>Válaszd ki, melyik részlegünk kínálatát szeretnéd felfedezni.</p>
          </div>

          <div className={styles.departmentGrid}>
            <button
              type="button"
              className={`${styles.departmentCard} ${styles.petCard}`}
              onClick={() => enterShop("pet")}
            >
              <Image
                src="/images/hero/cat-dog-.webp"
                alt=""
                fill
                sizes="(max-width: 800px) 100vw, 50vw"
              />

              <span className={styles.departmentContent}>
                <span className={styles.departmentTag}>Kedvenceinknek</span>

                <strong>Állateledel</strong>

                <span>Minden, amire kedvencednek szüksége lehet.</span>

                <span className={styles.departmentLink}>
                  Termékek felfedezése →
                </span>
              </span>
            </button>

            <button
              type="button"
              className={`${styles.departmentCard} ${styles.fishingCard}`}
              onClick={() => enterShop("fishing")}
            >
              <Image
                src="/images/hero/fishing.webp"
                alt=""
                fill
                sizes="(max-width: 800px) 100vw, 50vw"
              />

              <span className={styles.departmentContent}>
                <span className={styles.departmentTag}>
                  A vízpart szerelmeseinek
                </span>

                <strong>Horgászat</strong>

                <span>Felszerelések, csalik és etetőanyagok.</span>

                <span className={styles.departmentLink}>
                  Termékek felfedezése →
                </span>
              </span>
            </button>
          </div>
        </div>
      </section>

      <section className={styles.highlights}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <span className={styles.sectionEyebrow}>Tubi-Zoo ajánlatok</span>

            <h2>Kiemelten az üzletünkben</h2>

            <p>Három dolog, amivel mindenképpen érdemes megismerkedned.</p>
          </div>

          <div className={styles.highlightGrid}>
            {highlights.map((item) => (
              <article key={item.number} className={styles.highlightCard}>
                <div className={styles.highlightVisual}>
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.label}
                      fill
                      sizes="(max-width: 800px) 100vw, 33vw"
                    />
                  ) : (
                    <div className={styles.imagePlaceholder}>
                      <span>Kép hamarosan</span>
                    </div>
                  )}

                  <span className={styles.highlightNumber}>{item.number}</span>
                </div>

                <div className={styles.highlightContent}>
                  <span>{item.label}</span>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <Link href="/kapcsolat">Érdeklődj üzletünkben →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="rolunk" className={styles.about}>
        <div className={styles.container}>
          <div className={styles.aboutContent}>
            <span className={styles.sectionEyebrow}>
              Ismerd meg a Tubi-Zoo-t
            </span>

            <h2>
              Több mint egy bolt.
              <br />
              <em>Két szenvedély találkozása.</em>
            </h2>

            <p>
              A Tubi-Zoo egy helyen hozza össze az állattartók és a horgászok
              világát. Célunk, hogy vásárlóink könnyen megtalálják, amit
              keresnek, akár kedvenceikről gondoskodnak, akár a következő
              horgászatukra készülnek.
            </p>

            <Link href="/kapcsolat" className={styles.aboutButton}>
              Lépj velünk kapcsolatba →
            </Link>
          </div>

          <div className={styles.aboutPlaceholder}>
            <span>HAMAROSAN</span>
            <strong>Ismerd meg üzletünket!</strong>
            <p>Ide kerülnek majd a saját Tubi-Zoo üzletfotók.</p>
          </div>
        </div>
      </section>
    </>
  );
}
