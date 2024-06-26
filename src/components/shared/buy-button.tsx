"use client";
import { useEffect, useState } from "react";
import { loadStripe, Stripe } from "@stripe/stripe-js";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import { useSession } from "next-auth/react";
import { useDispatch } from "@/lib/redux/store";
import { createCheckoutSession } from "@/lib/stripe/create-checkout-session";

const asyncStripe = loadStripe(
  String(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
);

const BuyButton = ({
  items,
  total,
  buyingSingleProduct,
  productName,
}: {
  items: any;
  total: string;
  buyingSingleProduct?: boolean;
  productName?: string;
}) => {
  const router = useRouter();
  const { data: session } = useSession();
  const [stripe, setStripe] = useState<Stripe | null>(null);

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadStripeInstance() {
      const stripeInstance = await asyncStripe;
      setStripe(stripeInstance);
    }
    loadStripeInstance();
  }, []);

  const handleCheckout = async () => {
    if (!stripe) return;
    if (!session) {
      if (buyingSingleProduct) {
        router.push(
        `/login?msg=please login first and we will redirect you back.&callback=/products/${productName}`
        );
      } else {
        router.push(
          "/login?msg=Your cart is saved, please login to continue.&callback=/checkout"
        );
      }
      return;
    }
    // @ts-ignore
    await createCheckoutSession(items, String(total), session.user?._id);
  };

  return (
    <Button
      onClick={handleCheckout}
      variant={"outline"}
      className="font-medium gap-2"
    >
      <ArrowUpRight size={15} />{" "}
      {!session?.user && (
        <span className="text-muted-foreground">Sign me in &</span>
      )}{" "}
      Buy{" "}
    </Button>
  );
};

export default BuyButton;
