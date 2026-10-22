"use client";

import Image from "next/image";
import { useShop } from "@/context/ShopContext";
import styles from "./PackageOffers.module.scss";

const offers = [
  {
    id: "fish-package-1",
    image: "/images/fishing/fish-package1.jpeg",
    alt: "Kiemelt horgászajánlat – 2. kép",
  },
  {
    id: "fish-package-2",
    image: "/images/fishing/fish-package2.webp",
    alt: "Special Mix Fluo Wafters csalik – mangó, erjesztett kukorica, ribizli-meggy",
  },
  {
    id: "fish-package-3",
    image: "/images/fishing/fish-package3.webp",
    alt: "Special Mix oldódó etetőbojlik – több ízben",
  },
  {
    id: "fish-package-4",
    image: "/images/fishing/fish-package6.png",
    alt: "Special Mix oldódó etetőbojlik – több ízben",
  },
];

export default function PackageOffers() {
  const { shopMode } = useShop();
  if (shopMode !== "fishing") return null;

  return (
    <section className={styles.section} aria-labelledby="package-offers-title">
      <div className={styles.container}>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>Kiemelt ajánlatok</span>
          <h2 id="package-offers-title">Speciál Mix ajánlataink</h2>
          <p>Válogatás a kínálatunkból – fedezd fel a kiemelt termékeket!</p>
        </div>
        <div className={styles.grid}>
          {offers.map((offer) => (
            <div className={styles.card} key={offer.id}>
              <Image
                src={offer.image}
                alt={offer.alt}
                width={1800}
                height={800}
                sizes="(max-width: 700px) 100vw, 50vw"
                className={styles.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
