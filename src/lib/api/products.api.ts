import { Fetch } from "../actions/fetch";
import { IProduct } from "../types";

export const getPaginatedProducts = async (
  page: number,
  pageSize: number
): Promise<{ products: IProduct[]; count: number }> => {
  const data = await Fetch(`products?page=${page}&pageSize=${pageSize}`, {
    cache: "default",
  });
  return data;
};

export const getFilteredProducts = async (
  category_slug?: string,
  subCategory_slug?: string,
  filters?: any,
  page?: number,
  pageSize?: number
): Promise<IProduct[]> => {
  const data = await Fetch(
    `products/categories/${category_slug}/${subCategory_slug}?page=${page}&pageSize=${pageSize}`,
    {
      method: "POST",
      body: JSON.stringify({ filters }),
      cache: "no-cache",
    }
  );
  return data.products;
};

export const searchProductByName = async (
  name: string
): Promise<IProduct[]> => {
  const fixedName = name.replace("%20", " ");
  const data = await Fetch(`products/search/${fixedName}`, {
    cache: "default",
  });
  return data.products;
};
export const getProductByName = async (name: string): Promise<IProduct> => {
  const fixedName = name.replace("%20", " ");
  const data = await Fetch(`products/name/${fixedName}`, {
    cache: "default",
  });
  return data.product;
};

export const getSimilarProducts = async (
  category_ids: string[]
): Promise<IProduct[]> => {
  const data = await Fetch(`products/similar`, {
    method: "POST",
    body: JSON.stringify({ category_ids }),
    cache: "default",
  });
  return data.products;
};

export const getPopularProducts = async () => {
  const data = await Fetch(`products/popular/8`);
  return data.products;
};
