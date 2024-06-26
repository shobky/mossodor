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
        <p className="border-l-2 pl-2">
          All returned items are to be sent back in original packaging and in a
          resalable condition. We have the right to refuse if these terms are
          not met.
        </p>
        <br />
        <p className="font-bold">Can I exchange an item?</p>
        <p>
          We do not accept exchanges unless they are damaged/broken, if there
          are damages to the fixtures, please reach out to us within 48 hours
          and we will help replace any damaged parts or the fixture based on the
          situation. The fastest way to ensure you get what you want is to
          return the item you have, and once the return is accepted, make a
          separate purchase for the new item. Note that return shipping is free.
        </p>
        <br />
        <p className="font-bold">Can I return a customized fixture?</p>
        <p>
          Unfortunately, we cannot accept returns on customized orders as they
          are tailor-made to the customer&apos;s specific needs/preferences. If
          you are not satisfied with your order, please reach out to us via
          email and we will try our best to help!
        </p>
      </div>
    </Padding>
  );
}
