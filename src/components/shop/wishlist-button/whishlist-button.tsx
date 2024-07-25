"use client";
import { Button } from "@/components/ui/button";
import { useWishlist } from "@/lib/hooks/redux-hooks/use-wishlist";
import { addToWishlistThunk } from "@/lib/redux/slices/wishlist/thunks/addToWishlistThunk";
import { removeFromWishlistThunk } from "@/lib/redux/slices/wishlist/thunks/removeFromWishlistThunk";
import { useDispatch } from "@/lib/redux/store";
import { IProduct } from "@/lib/types";
import { Heart, Loader2 } from "lucide-react";
import { useSession } from "next-auth/react";
import { useMemo, useState } from "react";

export const WhichLIstButton = ({
  product,
  wishlsitItems,
}: {
  product: IProduct;
  wishlsitItems: IProduct[];
}) => {
  const [status, setStatus] = useState("idle");

  const session = useSession();
  const dispatch = useDispatch();

  const item = useMemo(
    () =>
      wishlsitItems
        ? wishlsitItems.find((item) => item._id === product._id)
        : null,
    [wishlsitItems, product]
  );

  const active = item || status === "hover";

  const handleWishlist = async () => {
    try {
      if (item) {
        await dispatch(removeFromWishlistThunk(product._id));
        setStatus("idle");
      } else {
        await dispatch(addToWishlistThunk(product));
        setStatus("click");
        setTimeout(() => setStatus("idle"), 400);
      }
    } catch (err) {}
  };

  return (
    <Button
      disabled={session.status !== "authenticated"}
      onMouseEnter={() => setStatus("hover")}
      onMouseLeave={() => setStatus("idle")}
      onClick={() => handleWishlist()}
      variant={"outline"}
      size={"icon"}
      className={`rounded-full w-12 h-12 scale-75 aspect-square transition-colors `}
    >
      {status === "loading" ? (
        <Loader2 className="animate-spin" />
      ) : (
        <>
          {status === "click" && (
            <Heart
              size={20}
              strokeWidth={2.5}
              fill={"red"}
              className={`text-red-300 absolute animate-pulse`}
            />
          )}
          <Heart
            size={20}
            strokeWidth={2.5}
            fill={active ? "red" : "white"}
            className={`${active && "text-red-300"} ${
              status === "click" && "animate-ping"
            } transition-colors`}
          />
        </>
      )}
    </Button>
  );
};
