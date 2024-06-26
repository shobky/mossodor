import { ICategory } from "../types";

export const getCategoryIds = (categories: ICategory[], slugs: string[]) => {
  const flatCategories = categories.flatMap((category) => category.children);
  return flatCategories
    .filter((category) => slugs.includes(category?.slug || ""))
    .map((category) => category?._id);
};
