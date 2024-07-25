import Image from "next/image";
import { Padding } from "../page-layout";
import { SectionTitle } from "../ui/custom/layout";
import { getPopulatedCategories } from "@/lib/api/categories.api";
import { Layers } from "lucide-react";
import Link from "next/link";

export default async function OurCategories() {
  const categories = await getPopulatedCategories();
  return (
    <div className="space-y-10 relative -top-20 pt-10 rounded-t-3xl bg-background">
      <Padding className="space-y-1" variant="centered">
        <SectionTitle>
          Our Lighting Categories <Layers />
        </SectionTitle>
        <p className="relative   text-center mx-[15vw]">
          Whether it&apos;s modern or traditional. Find the perfect lighting for
          any room or style that fits your taste
        </p>
      </Padding>

      <div className="flex flex-wrap flex-row mx-[30vw] sm:mx-[15vw] gap-4 items-center justify-center">
        {categories?.map((category: any) => (
          <Link href={`/${category.slug}`} key={category._id} className="group">
            <div className="rounded-full aspect-square relative overflow-hidden  shadow-md">
              <Image
                width={300}
                height={300}
                src={category.thumpnail}
                className="rounded-full aspect-square group-hover:scale-125 ease-in duration-300"
                alt={category.name}
              />
            </div>
            <h2 className="text-lg sm:text-base font-medium text-center my-2 group-hover:underline">
              {category.name}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
