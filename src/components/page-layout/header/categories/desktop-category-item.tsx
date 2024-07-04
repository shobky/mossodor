"use client";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { ICategory } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function DesktopCategoryItem({
  category,
}: {
  category: ICategory;
}) {
  const [activeThumbnail, setActiveThumbnail] = useState(category.thumpnail);
  return (
    <div className="flex max-w-[750px] w-max p-3 overflow-hidden h-[240px]  ">
      <Image
        src={activeThumbnail}
        alt={category.name}
        width={150}
        height={300}
        quality={60}
        className="rounded-md object-fit w-48 transition-all ease-in-out duration-300 "
      />
      <ul className="grid grid-cols-2">
        {category.children
          ? category.children.map((child) => (
              <li
                key={child._id}
                className="px-4"
                onMouseEnter={() => setActiveThumbnail(child.thumpnail)}
              >
                <NavigationMenuLink asChild>
                  <Link
                    href={`/${category.slug
                      .trim()
                      .replace(" ", "-")}/${child.slug
                      .trim()
                      .replace(" ", "-")}`}
                    className="inline-flex rounded-md p-3 transition-colors hover:backdrop-blur-sm hover:bg-black/5 "
                  >
                    <div className="space-y-1">
                      <p className="text-sm text-nowrap font-medium leading-none">
                        {child.name}
                      </p>
                      {/* <p className="line-clamp-2 text-xs leading-snug text-opacity-80">
                        Starting from $133
                      </p> */}
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}
