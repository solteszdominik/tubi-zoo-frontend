import type { Metadata } from "next";

import DepartmentHome from "@/components/home/DepartmentHome/DepartmentHome";

export const metadata: Metadata = {
  title: "Állateledel | Tubi-Zoo",
  description:
    "Állateledelek és kiegészítők kutyáknak, macskáknak és kisállatoknak.",
};

export default function PetPage() {
  return <DepartmentHome mode="pet" />;
}
