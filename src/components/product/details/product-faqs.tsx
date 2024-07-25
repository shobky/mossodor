import { getProductFaqs } from "@/lib/api/faqs.api";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessagesSquare } from "lucide-react";

export const ProductFaqs = async ({ ids }: { ids: string[] | [] }) => {
  if (!ids) return null;
  let faqs: any = [];
  try {
    faqs = await getProductFaqs(ids);
  } catch (err: any) {
    console.log(err);
  }

  return (
    <section>
      <p className="text-xl font-semibold flex  items-center gap-2">
        <MessagesSquare size={20} strokeWidth={2.5} />
        Common questions
      </p>
      <Accordion type="single" className="w-full space-y- ">
        {faqs?.map((faq: any, index: number) => (
          <AccordionItem value={faq._id} key={index}>
            <AccordionTrigger className="text-left font-normal ">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent>{faq.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
