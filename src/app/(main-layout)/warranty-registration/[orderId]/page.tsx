import { Padding } from "@/components/page-layout";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import MarketSelector from "@/components/warranty-registration/market-selector";
import WarrantyProductSku from "@/components/warranty-registration/product-sku";
import ProductUseSelector from "@/components/warranty-registration/product-use-selector";
import { WarrantyDatePciker } from "@/components/warranty-registration/warranty-date-selector";
import WarrantyImages from "@/components/warranty-registration/warranty-images";

import { Fetch } from "@/lib/actions/fetch";
import { IOrder } from "@/lib/types";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Warrenty Registration",
  // description: "Register your warranty now. ",
};

export default async function WarrantyRegistrations({
  params,
}: {
  params: { orderId: string };
}) {
  const { order } = (await Fetch(`orders/${params.orderId}`, {}, "secure")) as {
    order: IOrder;
  };

  if (!order)
    return (
      <Padding className="min-h-[50vh] flex flex-col items-center justify-center gap-0">
        <p className="text-base font-semibold">Invalid Order ID</p>
        <Link
          href="/account/orders"
          className="flex items-center gap-1 text-muted-foreground text-sm  underline hover:opacity-80 "
        >
          order history
        </Link>
      </Padding>
    );
  return (
    <>
      <hr />
      <Padding className="py-[5vh]">
        <div>
          <h1 className="font-medium text-xl sm:text-lg">Warranty Registrations</h1>
          <p className="sm:text-sm text-muted-foreground">
            You can register your warrany here before 28 days of purchasing your
            item.
          </p>
        </div>
        <form className="my-6 space-y-4">
          <Label className="text-base text-muted-foreground">
            Kindly fill out your information
          </Label>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 items-center">
            <div className="col-span-3 sm:col-span-2 flex gap-4">
              <Input
                defaultValue={order.buyerName?.split(" ")[0]}
                placeholder="First Name"
              />
              <Input
                defaultValue={order.buyerName?.split(" ")[1]}
                placeholder="Last Name"
              />
            </div>
            <Input
              className="col-span-3 sm:col-span-2"
              defaultValue={order.buyerEmail}
              placeholder="Email"
            />
          </div>
          <MarketSelector />
          <WarrantyProductSku orderItems={order.items} />
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <ProductUseSelector />
            <div className="">
              <WarrantyDatePciker orderDate={order.purchaseDate} />
            </div>
          </div>
          <Input defaultValue={order._id} placeholder="Order Number" />

          <WarrantyImages />
          <div className="flex flex-col justify-end gap-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" className="rounded-[3px]" />
              <label
                htmlFor="terms"
                className="text-base font-medium  peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I had a qualified electrician installing the product
              </label>
            </div>
            <Button size={"lg"} className="font-semibold text-lg  px-12 py-6">
              Register warranty
            </Button>
          </div>
        </form>
      </Padding>
    </>
  );
}
