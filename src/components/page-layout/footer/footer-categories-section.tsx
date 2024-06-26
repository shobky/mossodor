import { getPopulatedCategories } from "@/lib/api/categories.api";
import { ICategory } from "@/lib/types";
import Link from "next/link";

export default async function FooterCategoriesSection() {
  const categories: ICategory[] = await getPopulatedCategories();

  return (
    <div className="grid grid-cols-4 gap-[7vw]  ">
      {categories.map((category, i) => (
        <div key={category._id} className={``}>
          <Link href={`/${category.slug}`}>
            <p className="font-semibold flex items-center gap-2 hover:underline">
              {category.name}{" "}
            </p>
          </Link>
          <ul className="space-y-1">
            {category?.children?.map((child) => (
              <Link key={child._id} href={`/${category.slug}/${child.slug}`}>
                <li className="hover:underline">{child.name}</li>
              </Link>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
