import type { ShopMode } from "@/types/shop";

type HeroContent = {
  eyebrow: string;
  title: string;
  description: string;
  primaryButton: string;
  secondaryButton: string;
};

export const heroContent: Record<ShopMode, HeroContent> = {
  fishing: {
    eyebrow: "Tubi-Zoo Horgászat",
    title: "Minden, ami egy jó horgászathoz kell.",
    description:
      "Horgászbotok, orsók, csalik, etetőanyagok és kiegészítők egy helyen.",
    primaryButton: "Termékek megtekintése",
    secondaryButton: "Kategóriák",
  },

  pet: {
    eyebrow: "Tubi-Zoo Állateledel",
    title: "Minden kedvencednek, egy helyen.",
    description:
      "Eledelek és kiegészítők kutyáknak, macskáknak, madaraknak és rágcsálóknak.",
    primaryButton: "Termékek megtekintése",
    secondaryButton: "Kategóriák",
  },
};

export type Category = {
  id: string;
  name: string;
  slug: string;
  icon: string;
};

export const categories: Record<ShopMode, Category[]> = {
  fishing: [
    {
      id: "fishing-rods",
      name: "Horgászbotok",
      slug: "horgaszbotok",
      icon: "🎣",
    },
    {
      id: "reels",
      name: "Orsók",
      slug: "orsok",
      icon: "⚙️",
    },
    {
      id: "lines",
      name: "Zsinórok",
      slug: "zsinorok",
      icon: "🧵",
    },
    {
      id: "hooks",
      name: "Horgok",
      slug: "horgok",
      icon: "🪝",
    },
    {
      id: "baits",
      name: "Csalik",
      slug: "csalik",
      icon: "🐟",
    },
    {
      id: "groundbait",
      name: "Etetőanyagok",
      slug: "etetoanyagok",
      icon: "🌾",
    },
    {
      id: "bags",
      name: "Horgásztáskák",
      slug: "horgasztaskak",
      icon: "🎒",
    },
    {
      id: "fishing-accessories",
      name: "Kiegészítők",
      slug: "horgasz-kiegeszitok",
      icon: "🧰",
    },
  ],

  pet: [
    {
      id: "dogs",
      name: "Kutya",
      slug: "kutya",
      icon: "🐕",
    },
    {
      id: "cats",
      name: "Macska",
      slug: "macska",
      icon: "🐈",
    },
    {
      id: "birds",
      name: "Madarak",
      slug: "madarak",
      icon: "🐦",
    },
    {
      id: "rodents",
      name: "Rágcsálók",
      slug: "ragcsalok",
      icon: "🐹",
    },
    {
      id: "supplements",
      name: "Tápkiegészítők",
      slug: "tapkiegeszitok",
      icon: "💊",
    },
  ],
};
