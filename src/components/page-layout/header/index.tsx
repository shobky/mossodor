import Logo from "@/components/shared/logo";
import Navigation from "./nav";
import { Dot } from "lucide-react";
import { AvatarMenu } from "./avatar-menu";
import { ICategory } from "@/lib/types";
import WishlistLink from "./wishlist/wishlist-link";
import { CartModal } from "./cart-modal";
import { getPopulatedCategories } from "@/lib/api/categories.api";

export default async function Header() {
  const categories: ICategory[] = await getPopulatedCategories();
  return (
    <div
      id="header"
      className="flex items-center justify-between py-6 h-[var(--header-height)] "
    >
      <Logo className="w-32" />
      {/* only categories menu on desktop */}
      <div className="flex items-center gap-1 lg:gap-4 ">
        <Navigation categories={categories} view="desktop" />
        <Dot className="opacity-50 hidden lg:block" />
        <WishlistLink />
        <CartModal />
        <div className="hidden lg:block z-20 mt-0.5">
          <AvatarMenu />
        </div>
        <Navigation categories={categories} view="mobile" />
      </div>
    </div>
  );
}
