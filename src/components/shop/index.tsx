import ShopControls from "./controls/shop-controls";
import ShopBanner from "./shop-banner";
import ScrollToTop from "./scroll-to-top";

export default function Shop({
  categorySlug,
  subCategorySlug,
  children,
}: {
  categorySlug?: string;
  subCategorySlug?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col mb-[15vh] sm:mb-[30vh]">
      <div className="z-10 top-0  -mt-[var(--header-height)] min-h-[175px] h-[50vh] sm:h-[60svh] bg-black">
        <ShopBanner />
      </div>

      <div className="grid gap-0 lg:gap-[calc(1.5rem+1vw)] lg:flex bg-background lg:mx-[1vw]  -mt-[calc(2rem+2.5vh)] rounded-t-xl lg:rounded-xl p-6 lg:p-14 z-10 ">
        <ShopControls
          categorySlug={categorySlug}
          subCategorySlug={subCategorySlug}
        />
        {children}
      </div>
      <ScrollToTop />
      <div className="hidden lg:block sm:h-[1vw] " />
    </div>
  );
}
