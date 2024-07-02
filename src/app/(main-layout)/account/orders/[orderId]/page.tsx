import { Padding } from "@/components/page-layout";
import { Button } from "@/components/ui/button";
import { ScrollBar, ScrollArea } from "@/components/ui/scroll-area";
import { Fetch } from "@/lib/actions/fetch";
import { IProduct } from "@/lib/types";
import {
  ArrowUpRight,
  CornerDownRight,
  MailSearch,
  ThumbsUp,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ClearCartOnSuccessfulOrder from "./clearCartOnSuccessfulOrder";
import { format } from "date-fns";
import { OrderActions } from "@/components/orders/order-actions";
import { sendOrderConfirmationEmail } from "@/lib/utils/send-email";

export default async function OrderConfirmationPage({
  params,
}: {
  params: { orderId: string };
}) {
  const { order } = await Fetch(`orders/${params.orderId}`, {}, "secure");

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
  await sendOrderConfirmationEmail(order.buyerEmail, order);
  return (
    <div className="space-y-4 ">
      {/*Clears the cart in a useEffect */}
      <ClearCartOnSuccessfulOrder success={order._id ? true : false} />
      <section className="px-1">
        <div className="flex flex-col sm:flex-row justify-between items-center ">
          <h1>
            <strong>Order</strong>#{order._id}
          </h1>
          <div className="flex items-center gap-4 sm:gap-2">
            <p>{format(new Date(order.purchaseDate), "PPPP")}</p>
            <OrderActions open={true} order={order} />
          </div>
        </div>
        <p className="text-sm text-muted-foreground text-center sm:text-left">{order.buyerEmail}</p>
      </section>
      <div className="sm:flex sm:gap-4">
        <div className="flex-1 w-full flex  justify-between flex-col-reverse sm:flex-col gap-4 mb-4 sm:mb-0 ">
          <section className="bg-secondary h-full rounded-md">
            <div className=" border-b border-dashed p-6 ">
              <h3 className="text-base font-semibold tracking-wide">
                Shipping
              </h3>
              <div className="text-muted-foreground flex gap-1">
                <CornerDownRight size={20} className="scale-75" />
                <p className="w-full flex items-center justify-between">
                  <span>{order.shippingMethod}</span>
                  <span>Est. 2-3 days</span>
                </p>
              </div>
            </div>
            <div className="w-full flex items-start p-6 justify-between">
              <div className="text-muted-foreground font-medium space-y-1">
                <p>Name</p>
                <p>City</p>
                <p>Country</p>
                <p>Line1</p>
                <p>Line2</p>
                <p>Postal Code</p>
              </div>
              <div className="space-y-1 font-medium text-right">
                <p>{order.buyerName}</p>
                <p>{order.address.city}</p>
                <p> {order.address.country}</p>
                <p>{order.address.line1}</p>
                <p>{order.address.line2}</p>
                <p>{order.address.postal_code}</p>
              </div>
            </div>
          </section>
          <section className="w-full flex  items-center gap-2 ">
            <Button
              disabled={true}
              className={`bg-foreground text-background w-full h-16 ${
                true ? "text-sm" : "text-xl"
              }`}
              size={"lg"}
            >
              {true ? "You can track your order soon" : "Track Order"}
            </Button>
            <Link
              href={"https://mail.google.com/#search/mossodor"}
              target="blank"
              className="h-16 relative w-[4.8rem] group aspect-square bg-secondary flex items-center justify-center rounded-xl text-muted-foreground"
            >
              <MailSearch
                className="group-hover:scale-110 ease-in-out duration-300"
                size={25}
              />
              <span className="absolute scale-0 group-hover:scale-100 duration-200 ease-in-out flex items-center gap-1 -top-3 -right-14 text-muted-foreground py-1 px-2 text-sm rounded-lg bg-muted shadow-md">
                Open Gmail <ArrowUpRight size={15} />
              </span>
            </Link>
          </section>
        </div>
        <section className=" w-full h-min  bg-secondary flex-[1.2] rounded-md text-secondary-foreground">
          <ScrollArea className="h-[50vh] p-rounded-md">
            <div className=" flex items-center justify-between border-b border-dashed p-6">
              <h4 className="text-base font-semibold tracking-wide ">
                Order Summary
              </h4>
            </div>
            <div className="grid gap-6 p-6 ">
              {order.items?.map(
                (item: { product_id: IProduct; quantity: number }) => {
                  const product = item.product_id;
                  return (
                    <div
                      key={product._id}
                      className="flex gap-4 items-start w-full p-2"
                    >
                      <div className="bg-transparent border-2 border-dashed  rounded-md  w-24 h-24 p-2 flex-shrink-0">
                        <Image
                          width={200}
                          height={200}
                          src={product.thumpnail}
                          alt={product.altText}
                          className="w-full h-full"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-lg leading-6">{product.name}</p>
                        <p className="text-lg font-medium">
                          £{Number(product.price) * Number(item.quantity)}
                        </p>
                        <p className="text-muted-foreground text-sm font-medium">
                          Quantity {`[${item.quantity}]`}
                        </p>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
            <ScrollBar orientation="vertical" />
          </ScrollArea>
          <p className="font-bold text-3xl  text-right p-6">
            £{parseFloat(String(order.total / 100)).toFixed(2)}
          </p>
        </section>
      </div>
    </div>
  );
}
