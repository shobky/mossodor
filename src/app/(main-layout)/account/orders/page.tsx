import { Fetch } from "@/lib/actions/fetch";
import { getCurrentSession } from "@/lib/auth";
import OrdersTable from "../../../../components/orders/orders-table";
import { Separator } from "@/components/ui/separator";
import Search from "@/components/shared/search-input";

export default async function OrdersPage() {
  let orders = [];
  try {
    const session = await getCurrentSession();
    const data = await Fetch(`orders/user/${session?.user?._id}`, {}, "secure");
    orders = data.orders;
  } catch (err: any) {
    console.log(err);
  }
  return (
    <div className="space-y-6">
      <section className="grid grid-cols-5 items-center justify-between ">
        <div className="col-span-3">
          <h1 className="text-lg font-medium">Orders</h1>
          <p className="text-sm text-muted-foreground">Your orders history</p>
        </div>
        <div className="col-span-2">
          <Search querykey="q" />
        </div>
      </section>
      <Separator />
      <br/>
      <OrdersTable orders={orders} />
    </div>
  );
}
