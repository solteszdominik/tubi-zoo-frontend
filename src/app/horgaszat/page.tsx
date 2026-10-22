import type { Metadata } from "next";

import DepartmentHome from "@/components/home/DepartmentHome/DepartmentHome";

export const metadata: Metadata = {
  title: "Horgászat | Tubi-Zoo",
  description: "Horgászfelszerelések, csalik, etetőanyagok és kiegészítők.",
};

export default function FishingPage() {
  return <DepartmentHome mode="fishing" />;
}
