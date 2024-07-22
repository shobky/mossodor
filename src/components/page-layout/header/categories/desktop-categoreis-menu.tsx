import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ICategory } from "@/lib/types";
import DesktopCategoryItem from "./desktop-category-item";
import Link from "next/link";
export default function DesktopCategoreisMenu({
  categories,
}: {
  categories: ICategory[];
}) {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex items-center justify-between  ">
        {categories.map((category) => (
          <NavigationMenuItem  key={category._id}>
            <Link href={`/${category.slug}`}>
              <NavigationMenuTrigger>{category.name}</NavigationMenuTrigger>
            </Link>
            <NavigationMenuContent  >
              <DesktopCategoryItem category={category} />
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
