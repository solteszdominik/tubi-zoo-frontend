import type { Metadata } from "next";

import DepartmentHome from "@/components/home/DepartmentHome/DepartmentHome";

export const metadata: Metadata = {
  title: "Állateledel",
  description:
    "Kutya- és macskaeledelek, madáreledelek, rágcsálóknak szánt termékek és táplálékkiegészítők Debrecenben, a Tubi-Zoo üzletében.",
};

export default function PetPage() {
  return <DepartmentHome mode="pet" />;
}
