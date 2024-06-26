import { Fetch } from "../actions/fetch";
import { ICategory } from "../types";

export const getPopulatedCategories = async (): Promise<ICategory[]> => {
  try {
    // fetch populated categories
    const data = await Fetch(`categories/parents`, {
      cache: "force-cache",
    }, "secure");
    return data.categories;
  } catch (err: any) {
    return [];
  }
};
