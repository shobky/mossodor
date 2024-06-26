import Hero from "@/components/home/hero";
import PopularProducts from "@/components/home/popularProducts";
import ProductsSlider from "@/components/home/productsSlider";
import ShoPYourStyle from "@/components/home/shop-your-style";
import StylesSlider from "@/components/home/stylesSlider";

export default function Home() {
  return (
    <main className="space-y-10 pb-10">
      <Hero />
      <ShoPYourStyle />
      <PopularProducts />
      {/* <StylesSlider /> */}
      {/* <ProductsSlider /> */}
    </main>
  );
}
