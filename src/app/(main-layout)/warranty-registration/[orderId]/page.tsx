import { Padding } from "@/components/page-layout";
import WarrantyFormContainer from "@/components/warranty-registration/form-container";

import { Fetch } from "@/lib/actions/fetch";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Warrenty Registration",
  description: "Register your warranty now. ",
};

export default async function WarrantyRegistrations({
  params,
}: {
  params: { orderId: string };
}) {
  let order = null;
  try {
    const data = await Fetch(`orders/${params.orderId}`, {}, "secure");
    if (data?.order) {
      order = data.order;
    }
    console.log(data, "Order Data");
  } catch (err: any) {
    console.error(err);
  }

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
      <Padding className="py-[5vh] px-[25vw]">
        <div>
          <h1 className="font-medium text-xl sm:text-lg">
            Warranty Registration{" "}
            <span className="text-muted-foreground">
              for order #{order.orderNumber}
            </span>
          </h1>
          <p className="sm:text-sm text-muted-foreground">
            You can register your warrany here before 28 days of purchasing your
            item.
          </p>
        </div>
        <WarrantyFormContainer order={order} />
      </Padding>
    </>
  );
}
