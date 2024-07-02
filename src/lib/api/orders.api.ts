import { Fetch } from "../actions/fetch";
import { IOrder } from "../types";

export const updateOrder = async(id: string, data: Partial<IOrder>) => {
  await Fetch(
    `orders/${id}`,
    {
      method: "PUT",
      body: JSON.stringify({ data }),
    },
    "secure"
  );
};