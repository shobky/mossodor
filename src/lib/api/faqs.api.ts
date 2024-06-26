import { Fetch } from "../actions/fetch";

export const getProductFaqs = async (_id: string) => {
  const data = await Fetch(`faqs/${_id}`, {
    cache: "default",
  });
  return data.faqs;
};
