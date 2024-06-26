import { Padding } from "@/components/page-layout";
import React from "react";

export default function ShippingPolicy() {
  return (
    <Padding className="sm:py-[5vh] space-y-2 sm:mx-[10vw]">
      <h1 className="font-bold text-3xl text-center"> Shipping Policy</h1>
      <p className=" text-sm text-center text-muted-foreground">
        Mossodor is committed to ensuring a swift and efficient shipping process
        for our customers. We operate from Monday to Friday and take pride in
        our quick order processing times. Here&apos;s what you can expect when
        you place an order with us:
      </p>
      <div className=" py-10">
        <article className="space-y-4">
          <div className="space-y-2">
            <p className="font-bold">Order Processing Time</p>
            <ul>
              <li className="list-item list-disc ml-5">
                Orders are processed within 2-5 business days from the date they
                are placed.
              </li>
              <li className="list-item list-disc ml-5">
                After processing, orders are shipped out within the next 1-3
                business days.
              </li>
              <li className="list-item list-disc ml-5">
                Orders placed before 2 PM (Monday to Friday) qualify for Express
                Shipping, allowing you to enjoy next-day delivery.
              </li>
            </ul>
            <br />
            <p className="font-bold">Shipping Confirmation</p>
            <ul>
              <li className="list-item list-disc ml-5">
                If you do not receive a shipping confirmation within 6 business
                days after placing your order, please contact us immediately.
              </li>
            </ul>
            <br />

            <p className="font-bold">Estimated Delivery Time</p>
            <ul>
              <li className="list-item list-disc ml-5">
                Depending on the shipping method, product(s), and your
                __cpLocation, your package is expected to arrive within 3-5
                business days.
              </li>
            </ul>
            <br />

            <p className="font-bold">Shipping Options</p>
            <ul>
              <li className="list-item list-disc ml-5">Express Shipping: Next-Day Delivery</li>
              <li className="list-item list-disc ml-5">Standard Shipping: 3-5 Business Days</li>
            </ul>
            <br />

            <p className="font-bold">High-Volume Periods</p>
            <ul>
              <li className="list-item list-disc ml-5">
                Please be aware that during peak seasons or high-volume periods,
                such as holidays or Black Friday events, the processing time may
                extend due to increased demand.
              </li>
            </ul>
            <br />

            <p className="font-bold">Order Modifications</p>
            <ul>
              <li className="list-item list-disc ml-5">
                Should you need to make any changes to your order, please
                contact us within 12 hours of your purchase. Send an email
                to&nbsp;info@mossodor.com&nbsp;with CHANGE OF ORDER&apos; as
                the subject. We&apos;ll do our best to accommodate your request,
                but please be mindful that a cancellation fee may apply for
                processed orders, especially for custom items.
              </li>
            </ul>
            <br />

            <p className="font-bold">Shipping Carriers</p>
            <p className="text-muted-foreground">
              Mossodor partners with reputable carriers to ensure your order
              arrives safely and on time. Depending on your Location, we
              utilize the following services:
            </p>
            <ul>
              <li className="list-item list-disc ml-5">United States: DHL, FedEx, UPS, USPS</li>
              <li className="list-item list-disc ml-5">United Kingdom: Royal Mail</li>
              <li className="list-item list-disc ml-5">Canada: Canada Post</li>
              <li className="list-item list-disc ml-5">Australia: Australia Post</li>
              <li className="list-item list-disc ml-5">Other __cpLocations: Local courier services</li>
            </ul>
            <br />

            <p className="font-bold">
              Delivery Information and Customs
            </p>
            <ul>
              <li className="list-item list-disc ml-5">
                Ensure your delivery information is accurate to avoid delays.
                Incorrect or incomplete information may necessitate contacting
                us for an update, potentially delaying your order.
              </li>
              <li className="list-item list-disc ml-5">
                Customs clearance delays may occur. Mossodor is not liable for
                unclaimed or lost parcels due to incorrect delivery details.
              </li>
              <li className="list-item list-disc ml-5">
                Your order may be delivered by the local post office or a
                courier, and a notice card will be left if you&apos;re not
                available to receive the package.
              </li>
              <li className="list-item list-disc ml-5">
                Responsibility for the package transfers to the customer once
                it&apos;s marked as delivered. Contact the carrier directly if
                there are any issues receiving your package after delivery
                confirmation.
              </li>
            </ul>
            <br />

            <p className="font-bold">Taxes &amp; Duties</p>
            <ul>
              <li className="list-item list-disc ml-5">
                Customers are responsible for all applicable taxes, import
                duties, and customs fees as determined by your local government
                and authorities.
              </li>
            </ul>
            <br/>
            <p className="text-muted-foreground">
              For any questions or assistance, please reach out to us
              at&nbsp;info@mossodor.com. We&apos;re here to help ensure your
              shopping experience is as smooth and enjoyable as possible.
            </p>
          </div>
        </article>
      </div>
    </Padding>
  );
}
