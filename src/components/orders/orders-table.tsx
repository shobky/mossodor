import Link from "next/link";
import OrderCard from "./order-card";

export default function OrdersTable({ orders }: { orders: any }) {
  if (!orders || orders.length === 0)
    return (
      <p>
        You have no orders yet.{" "}
        <Link className="underline" href={"/shop"}>
          start shopping
        </Link>
      </p>
    );
  return (
    <div className="relative -top-6 grid gap-2">
      {orders?.map((order: any) => (
        <OrderCard key={order._id} order={order} />
      ))}
    </div>
  );
}
