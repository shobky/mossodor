import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Padding } from "@/components/page-layout";

export default function FaqsPage() {
  return (
    <Padding className="min-h-[50vh] py-[5vh] space-y-4">
      <h1 className="text-center font-bold text-2xl sm:text-3xl">FAQS</h1>
      <h2 className="text-center sm:mx-[10vw] ">
        We are delighted to serve you. If you have any questions or feedback,
        <br />
        please reach out to us at any time at{" "}
        <a href="mailto:info@mossodor.com" className="text-primary underline">
          info@mossodor.com
        </a>{" "}
        and we will reach you as soon as possible to help you!
      </h2>
      <br />
      <Accordion type="multiple" className="sm:mx-[10vw]">
        {faqs?.map((faq: any, index: number) => (
          <AccordionItem value={"faqs" + index} key={index}>
            <AccordionTrigger className="text-left font-normal ">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent>{faq.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Padding>
  );
}

const faqs = [
  {
    q: "Where can i  find the contact details?",
    a: "Please visit our Contact page for the details or contact us at info@mossodor.com. Our customer service team operates Monday to Friday 9:00 to 17:00.",
  },
  {
    q: "What is the warranty policy",
    a: "All domestic residential products are eligible for our standard 12 months warranty and up to 5 years on some products. For commercial products we offer a maximum of a 12 month warranty. This means, that if your product develops a mechanical fault within the warranty period of pruchace, we promise to repair or replace it. If you experience any problems with your item or if you’re not fully satisfied with the product, contact us directly and we’ll be more than happy to help.",
  },
  {
    q: "What are the accepted methods of payment?",
    a: "We accept all major credit credits such as Visa, MasterCard, American Express, and Discover. We also accept PayPal, ApplyPay, GooglePay, and Mossodor’s issued gift cards. It is safe to provide my credit card and personal information online? It is absolutely safe to use your credit card on our website. All sensitive information is transferred using the same encryption and physical security used by financial institutions.",
  },
  {
    q: "Can I place the order over the phone?",
    a: "Yes, of course! Our phone support team can assist you with placing an order over the phone. Their hours of operation are from Monday to Friday, from 9 am – 5 pm. Alternatively, you can also send us an email if you want us to send you an invoice via email, and our email support team can help send a custom invoice.",
  },
  {
    q: "Can I cancel or change my order?",
    a: "If you need to make any changes to your order, please email info@mossodor.com within 12 hours of making your purchase with the subject line of your email to read ‘CHANGE OF ORDER’ and our team will get back to you shortly. Please note that if you wish to cancel your order after it has already been processed, a cancellation fee may apply.",
  },
  {
    q: "How long is your processing time?",
    a: "All orders will be processed within 2-5 business days after the date that the order was placed and shipped out in the next 1-3 business days. If you place your order before 2pm on Monday to Friday, you order will be eligible for Express Shipping with you are able to receive your order the next day. Please reach out to us if you don’t receive a shipping confirmation within 6 business days of placing your order.",
  },
  {
    q: "How long is your shipping time?",
    a: "You can expect your package to arrive in 3-5 business days depending on the shipping method, product(s), and your Location. For more details regarding the shipping time, please refer to our Shipping Policy. Express Shipping: Next-Day Delivery Standard Shipping: 3-5 Business Days",
  },
  {
    q: "Can I exchange an item?",
    a: "We do not accept exchanges unless they are damaged/broken, if there are damages to the fixtures, please reach out to us within 48 hours and we will help replace any damaged parts or the fixture based on the situation. The fastest way to ensure you get what you want is to return the item you have, and once the return is accepted, make a separate purchase for the new item. Note that return shipping is free.",
  },
  {
    q: "Can I return a customized fixture?",
    a: "Unfortunately, we cannot accept returns on customized orders as they are tailor-made to the customer’s specific needs/preferences. If you are not satisfied with your order, please reach out to us via email and we will try our best to help!",
  },
  {
    q: "When will my items be delivered?",
    a: "In-stock items are dispatched the same working day for all orders made before 14:00. Deliveries can take up to 5 working days depending on your order. All our Made-To-Order items will show you an estimated delivery before purchase. Deliveries can be between 2 to 10 weeks depending on your order.",
  },
  {
    q: "Can i change or cancel my order once it's been placed?",
    a: "We process all in stock items very quickly, often within an hour. If you would like to change or cancel your order, please contact our customer service team as soon as possible. Made-to-order items cannot be changed or cancelled once the order has been processed due to the nature of the order. Please contact our customer service team as soon as possible.",
  },
  {
    q: "What can i do if my order has arrived damaged or has a missing part?",
    a: "We pack all our items securely to reach you safely. However, in unfortunate circumstances, it may be damaged whilst in transit. Please check your item(s) once they arrive and report any issues to us within 48 hours if you find anything missing or damaged. Contact our customer service team with details and photos of the issues you have encountered and we will be happy to rectify any issues.",
  },
  {
    q: "What should i do if my item hasn't arrived in the scheduled time frame?",
    a: "Rest assured; all our products are tracked. If it has been over 5 days late, please contact our sales team and we will contact the courier company on your behalf to locate your item. If we are unable to find the item, we will dispatch a replacement",
  },
  {
    q: "why do i have mutliple deliveries for my order?",
    a: "Not all orders can be delivered in the same package due to size and weight constraints by couriers. Also, it can be the result of your order consisting of a combination of both in-stock items and Made-To-Order items.",
  },
  {
    q: "What is the shipping cost in UK?",
    a: "We offer free shipping on all orders around UK.",
  },
  {
    q: "How long is your international processing time?",
    a: "We process orders between Monday and Friday. All orders will be processed within 1-7 business days after the date that the order was placed and shipped out in the next 2-7 business days. Please reach out to us if you don’t receive a shipping confirmation within 10 business days of placing your international order.",
  },
  {
    q: "How long is your international shipping time?",
    a: "You can expect your package to arrive in 5-30 business days depending on the shipping method, product(s), and your __cpLocation. For more details regarding the shipping time, please refer to our Shipping Policy. Express Shipping: 5-10 Business Days Standard Shipping: 10-20 Business Days.",
  },
  {
    q: "Can I get my order faster?",
    a: "Yes, you can! Please select priority processing and express shipping to get your order(s) processed and shipped faster! Additional costs will apply.",
  },
  {
    q: "When will i recieve my refund?",
    a: "Your refund will be sent to your original payment method and funds are usually available within 3-5 business days.",
  },
];
