import { Fetch } from "../actions/fetch";

export const getProductFaqs = async (ids: string[]) => {
  const data = await Fetch(`faqs`, {
    cache: "default",
    method: "POST",
    body: JSON.stringify({ ids }),
  });
  return data.faqs;
};
