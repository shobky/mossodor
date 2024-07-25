import { ArrowLeft, ArrowRight, Gem, PencilRuler, X } from "lucide-react";
import React from "react";

export default function ProductSpecifications({
  specifications,
  name,
}: {
  specifications: any[];
  name: string;
}) {
  return (
    <section className="space-y-2 ">
      <div className="text-xl font-semibold flex  items-center gap-2">
        <Gem  size={20} strokeWidth={2.5} />
        <h3> {name} Specifications</h3>
      </div>
      <div className="flex flex-col">
        {specifications.map((spec, index) => {
          if (!spec.value) return null;
          return (
            <div
              key={index}
              className={`flex justify-between overflow-hidden border-t py-2 group ${
                index === 0 && "border-t-0"
              }`}
            >
              <p className="group-hover:ml-4 ease-in-out duration-500">
                {spec.name}
              </p>

              <div className="flex items-center gap-2">
                <p className="">{spec.value}</p>
                <ArrowLeft
                  size={10}
                  strokeWidth={4}
                  className="-mr-3 group-hover:mr-4 ease-in-out duration-500"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
