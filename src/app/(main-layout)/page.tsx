import Hero from "@/components/home/hero";
import PopularProducts from "@/components/home/popularProducts";
import { Reviews } from "@/components/home/reviews";
import ShoPYourStyle from "@/components/home/shop-your-style";

export default function Home() {
  return (
    <main className="space-y-10 pb-10 ">
      <Hero />
      <PopularProducts />
      <ShoPYourStyle />
      <Reviews />
    </main>
  );
}
