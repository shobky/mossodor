import Hero from "@/components/home/hero";
import OurCategories from "@/components/home/our-categories";
import PopularProducts from "@/components/home/popularProducts";
import { Reviews } from "@/components/home/reviews";
import ShoPYourStyle from "@/components/home/shop-your-style";

export default function Home() {
  return (
    <main className="space-y-20 pb-32 ">
      <Hero />
      <OurCategories />
      <PopularProducts />
      <ShoPYourStyle />
      <Reviews />
    </main>
  );
}
