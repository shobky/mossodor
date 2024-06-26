"use client";
export const createCheckoutSession = async (
  items: any,
  total: string,
  user_id: string | null
) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER}/stripe/create-checkout-session`,
      {
        method: "POST",
        body: JSON.stringify({
          items,
          total,
          user_id,
          connectionKey: "mossodor",
        }),
        headers: {
          "Content-Type": "application/json",
          "x-connection-key": "mossodor",
        },
      }
    );

    const data = await res.json();

    if (res.ok) {
      window.location.href = data.url;
    } else {
      window.location.href = "/error";
    }
  } catch (err) {
    console.error(err);
    window.location.href = "/error";
  }
};
