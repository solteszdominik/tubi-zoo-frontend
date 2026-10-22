export const siteConfig = {
  name: "Tubi-Zoo",

  webshopEnabled: false,

  contact: {
    phone: {
      display: "+36 30 996 6114",
      href: "+36309966114",
    },
    email: "tubinatorkft@gmail.com",
    address: "4034 Debrecen, Hét vezér u. 8.",
  },

  company: {
    name: "Tubinátor Kft.",
    fullName: "Tubinátor Korlátolt Felelősségű Társaság",
    headquarters: "4251 Hajdúsámson, Kossuth út 82.",
    taxNumber: "27400128-2-09",
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
