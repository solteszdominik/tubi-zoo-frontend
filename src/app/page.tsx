import CategorySection from "@/components/home/CategorySection/CategorySection";
import FeaturedProducts from "@/components/home/FeaturedProducts/FeaturedProducts";
import Hero from "@/components/home/Hero/Hero";
import StoreIntro from "@/components/home/StoreIntro/StoreIntro";

export default function Home() {
  return (
    <>
      <Hero />
      <CategorySection />
      <FeaturedProducts />
      <StoreIntro />
    </>
  );
}
