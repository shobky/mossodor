import { IProduct } from "@/lib/types";
import { PencilRuler, X } from "lucide-react";
import React from "react";

export default function ProductDimentions({ product }: { product: IProduct }) {
  return (
    <section className="space-y-2">
      <p className="text-xl font-semibold flex  items-center gap-2">
        <PencilRuler size={20} strokeWidth={2.5} />
        Dimentions
      </p>
      <div className=" flex items-start gap-8">
        <div className="space-y-2">
          <p>Size</p>
          <p>Height</p>
          <p>Weight</p>
        </div>
        <div className="space-y-2">
          <p className=" flex items-center gap-1">
            {product.width} <X size={10} />
            {product.length}
          </p>
          <p className=" flex items-center gap-1">{product.height}</p>
          <p className=" flex items-center gap-1">{product.weight}</p>
        </div>
      </div>
    </section>
  );
}
