"use client";
import { useEffect, useState } from "react";
import { loadStripe, Stripe } from "@stripe/stripe-js";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import { useSession } from "next-auth/react";
import { useDispatch } from "@/lib/redux/store";
import { createCheckoutSession } from "@/lib/stripe/create-checkout-session";
import { toast } from "sonner";

let asyncStripe: Promise<Stripe | null>;
try {
  asyncStripe = loadStripe(
    String(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
  );
} catch (err) {
  toast.error(
    <div>
      <p className="font-bold text-sm">Failed to load essential features</p>
      <p className="font-medium">
        Please make sure your internet connection is stable before checkout.
      </p>
    </div>
  );
}

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

  useEffect(() => {
    async function loadStripeInstance() {
      try {
        const stripeInstance = await asyncStripe;
        setStripe(stripeInstance);
      } catch (err: any) {
        toast.error(
          <div>
            <p className="font-bold text-sm">
              Failed to load essential features
            </p>
            <p className="font-medium">
              Please make sure your internet connection is stable before
              checkout.
            </p>
          </div>
        );
      }
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
