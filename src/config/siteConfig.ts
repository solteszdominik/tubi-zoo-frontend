export const siteConfig = {
  name: "Tubi-Zoo",

  webshopEnabled: false,

  contact: {
    phone: {
      display: "+36 30 996 6114",
      href: "+36309966114",
    },
    email: "info@tubi-zoo.hu", // TODO: pontosítani
    address: "4034 Debrecen, Hét vezér u. 8.",
  },

  company: {
    name: "Tubi-Zoo", // TODO: hivatalos cégnév
    headquarters: "4034 Debrecen, Hét vezér u. 8.", // TODO: pontosítani
    taxNumber: "00-00-000000", // TODO: pontosítani
  },

  social: {
    facebook: "https://www.facebook.com/profile.php?id=61561596039605",
    instagram: "", // TODO
  },

  openingHours: {
    weekdays: "9:00–17:00",
    saturday: "8:00–12:00",
    sunday: "Zárva",
  },
} as const;
