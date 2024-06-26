"use server";

import { getCurrentSession } from "../auth";

export const Fetch = async (
  endpoint: string,
  options: RequestInit = {},
  withAuth?: "secure" | "public"
): Promise<any> => {
  let token = null;
  if (withAuth === "secure") {
    const session = await getCurrentSession();
    // @ts-ignore
    token = session?.userToken;
  }
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/${endpoint}`, {
    ...options,
    credentials: "include",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "x-connection-key": "mossodor",
      ...options.headers,
    },
  });
  return await res.json();
};
