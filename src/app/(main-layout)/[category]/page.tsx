import { Padding } from "@/components/page-layout";
import { CategoriesProducts } from "@/components/shop/products/categories-products";
import { Fetch } from "@/lib/actions/fetch";
import { ICategory } from "@/lib/types";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { permanentRedirect, redirect } from "next/navigation";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: { category: string };
}): Promise<Metadata> {
  const { category } = await Fetch(`categories/slug/${params.category}`, {
    cache: "force-cache",
  });
  if (!category) {
    return {
      title: "Mossodor",
    };
  }
  return {
    title: `Mossodor | ${category.metaTitle || category.name}`,
    description: category.metaDescription || category.description,
    openGraph: {
      images: [category.thumpnail],
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  let category: ICategory | undefined = undefined;
  let children: ICategory[] | undefined = undefined;
  try {
    const categoryData = await Fetch(`categories/slug/${params.category}`, {
      cache: "force-cache",
    });
    category = categoryData.category;

    const childrenData = await Fetch(`categories/children`, {
      method: "POST",
      body: JSON.stringify({ categoryIds: categoryData.category.childrenIds }),
    });
    children = childrenData.categories;
  } catch (e: any) {
    console.error(e);
  }

  if (!category) return permanentRedirect("/shop");
  return (
    <Padding className="min-h-[95vh] grid place-content-center gap-20 py-[12vh]">
      <div className="w-full h-[var(--header-height)] absolute top-0 left-0  "/>
      <section className="sm:mx-[12.5vw] space-y-4">
        <h1 className=" text-2xl sm:text-3xl font-medium sm:font-semibold text-center capitalize">
          {category?.name} Collection
        </h1>
        <h2 className="text-base text-center">{category?.description}</h2>
        <br />
        <div className="grid grid-cols-2 sm:grid-cols-4 justify-center items-start gap-x-4 sm:gap-x-10 gap-y-4 ">
          {children?.map((child: any) => (
            <Link
              key={child._id}
              href={`/${category?.slug}/${child.slug}`}
              className="space-y-2 group"
            >
              <Image
                src={child.thumpnail}
                alt={child.slug}
                width={800}
                height={800}
                className="w-full rounded-full aspect-square scale-90 group-hover:brightness-110 "
              />
              <p className="text-center capitalize group-hover:underline">
                {child.name}
              </p>
            </Link>
          ))}
        </div>
      </section>
      <section className="space-y-4">
        <h2 className="text-center font-semibold text-3xl capitalize">
          Explore Products In The {category?.name} Collection
        </h2>
        <div>{category && <CategoriesProducts category={category.slug} />}</div>
      </section>
    </Padding>
  );
}
