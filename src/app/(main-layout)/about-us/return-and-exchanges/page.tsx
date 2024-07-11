import { Padding } from "@/components/page-layout";
import React from "react";

export default function ReturnAdnExchanges() {
  return (
    <Padding className="sm:py-[5vh] space-y-2 sm:mx-[10vw]">
      <h1 className="font-bold text-3xl text-center">Return & Exchanges</h1>
      <p className=" text-sm text-center text-muted-foreground">
        We hope you love our product but if for any reason you wish to return
        it, please return the items to us within 30 days and we&apos;ll offer
        you a full refund. If you have any issues with your product, please
        contact us and we will be happy to provide you with the best solution.
      </p>
      <div className="py-10">
        <div className="space-y-4">
          <p className="font-bold mb-2">1. Returned Goods</p>
          <p>
            All goods must be returned in the original packaging, in perfect
            condition and unopened. Mossodor declines any responsibility for any
            defects caused as a result of the product having been repaired,
            altered, serviced or modified.
          </p>
          <p>
            Specially ordered products cannot be cancelled within 24hrs of
            receiving the order and under no circumstances be returned.{" "}
          </p>
        </div>
        <br />
        <div className="space-y-4">
          <p className="font-bold mb-2">2. Upon receiving of Delivery </p>
          <p>
            The customer is responsible for checking all delivered or collected
            goods for any discrepancies or damages. We would love to say that
            there is never a problem with a delivery and for 99% of our
            deliveries that is true, but even with our checks and procedures in
            place a problem can arise.{" "}
          </p>
          <p>
            Our transportation partners usually provide a doorstep delivery.
            What this means is that they will come to the nearest access point
            to your home address and you will be required to collect from there.
            If your shipment contains a pallet, you must collect the individual
            packages from the pallet into your home.{" "}
          </p>
        </div>
        <br />
        <div>
          <p className="font-bold">3. Can I return a customised fixture?</p>
          <p>
            Unfortunately, we cannot accept returns on customised orders as they
            are tailor-made to the customer&apos;s specific needs/preferences.
            If you are not satisfied with your order, please reach out to us via
            email and we will try our best to help!
          </p>
        </div>
        <br />
        <hr />
        <br />
        <p className="text-sm text-muted-foreground">
          All returned items are to be sent back in original packaging and in a
          resalable condition. We have the right to refuse if these terms are
          not met.
        </p>
      </div>
    </Padding>
  );
}
