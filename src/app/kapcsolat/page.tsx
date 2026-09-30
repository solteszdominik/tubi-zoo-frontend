import ContactPage from "@/components/contact/ContactPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kapcsolat | Tubi-Zoo",
  description:
    "Tubi-Zoo Debrecen elérhetőségek, nyitvatartás és üzletinformációk.",
};

export default function Contact() {
  return <ContactPage />;
}
