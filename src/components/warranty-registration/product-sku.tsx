"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "../ui/input";
import Image from "next/image";
import { Dot } from "lucide-react";
export default function WarrantyProductSku({
  orderItems,
  handleInputChange,
}: {
  orderItems: any[];
  handleInputChange: any;
}) {
  return (
    <div className="flex items-center gap-4 w-full">
      {orderItems?.length > 0 ? (
        <Select onValueChange={(v) => handleInputChange("productSKU", JSON.parse(v).sku)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select product SKU" />
          </SelectTrigger>
          <SelectContent align="center" className="">
            <SelectGroup>
              <SelectLabel>Product SKU</SelectLabel>
              {orderItems.map((item) => {
                return (
                  <SelectItem
                    key={item._id}
                    value={JSON.stringify({
                      sku: item.sku,
                      _id: item._id,
                    })}
                  >
                    <div className="flex items-center ">
                      <p className="font-medium flex items-center">
                        {item.name} <Dot size={20} /> {item.sku}
                      </p>
                      <Dot size={20} />{" "}
                      <Image
                        src={item.thumpnail}
                        width={25}
                        height={25}
                        alt={item.title}
                        className="object-contain w-8 h-8 aspect-square p-1  "
                      />
                    </div>
                  </SelectItem>
                );
              })}
            </SelectGroup>
          </SelectContent>
        </Select>
      ) : (
        <Input placeholder="SKU" />
      )}
    </div>
  );
}
