import type { Metadata } from "next";

import DepartmentHome from "@/components/home/DepartmentHome/DepartmentHome";

export const metadata: Metadata = {
  title: "Horgászat",
  description:
    "Horgászbotok, orsók, zsinórok, bojlik, pelletek, csalik és etetőanyagok Debrecenben. Fedezd fel a Tubi-Zoo horgászkínálatát!",
};

export default function FishingPage() {
  return <DepartmentHome mode="fishing" />;
}
