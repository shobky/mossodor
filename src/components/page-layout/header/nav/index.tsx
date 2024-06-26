import { getPopulatedCategories } from "@/lib/api/categories.api";
import { ICategory } from "@/lib/types";
import DesktopCategoreisMenu from "../categories/desktop-categoreis-menu";
import { MobileNav } from "./mobile-nav-menu";
import SidebarUser from "./sidebar-user";
import UserAvatar from "@/components/shared/user-avatar";

export default async function Navigation({
  view,
  categories,
}: {
  view: "mobile" | "desktop";
  categories: ICategory[];
}) {
  return (
    <>
      {view === "desktop" ? (
        <div className="hidden lg:block">
          <DesktopCategoreisMenu categories={categories} />
        </div>
      ) : view === "mobile" ? (
        <div className="block lg:hidden">
          <MobileNav categories={categories}>
            <UserAvatar className="w-6 h-6" />
            <SidebarUser />
          </MobileNav>
        </div>
      ) : null}
    </>
  );
}
