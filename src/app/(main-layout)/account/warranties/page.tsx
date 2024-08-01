import { Separator } from "@/components/ui/separator";
import WarrantyItemsContainer from "@/components/warranties/warranty-items-container";
import { Fetch } from "@/lib/actions/fetch";
import { getCurrentSession } from "@/lib/auth";

export default async function Warranties() {
  let warranties = [];
  try {
    const session = await getCurrentSession();
    const data = await Fetch(`warranties/${session?.user?._id}`, {}, "secure");
    warranties = data.warranties;
  } catch (err: any) {
    console.log(err);
  }
  return (
    <div className="space-y-6">
      <section className="grid grid-cols-5 items-center justify-between ">
        <div className="col-span-3">
          <h1 className="text-lg font-medium">Warranties</h1>
          <p className="text-sm text-muted-foreground">Your warranty history</p>
        </div>
      </section>
      <Separator />
      <WarrantyItemsContainer warranties={warranties} />
    </div>
  );
}
