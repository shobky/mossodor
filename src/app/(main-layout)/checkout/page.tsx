"use client";

import { useCart } from "@/lib/hooks/redux-hooks/use-cart";
import { createCheckoutSession } from "@/lib/stripe/create-checkout-session";
import { Loader2 } from "lucide-react";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function Checkout() {
  const { items, total, loading } = useCart();
  const session = useSession();

  useEffect(() => {
    if (loading) return;
    if (session.status !== "authenticated") return;
    async function handleAutomaticCheckout() {
      // @ts-ignore
      await createCheckoutSession(
        items,
        total.toString(),
        // @ts-ignore
        session.data?.user._id
      );
    }
    handleAutomaticCheckout();
  }, [session, items, total, loading]);

  return (
    <div className="fixed top-0 left-0 h-screen w-screen grid place-content-center">
      <Loader2 className="animate-spin" size={25} />
    </div>
  );
}
