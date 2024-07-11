"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IProduct } from "@/lib/types";
import { Input } from "../ui/input";
import Image from "next/image";
import { Dot } from "lucide-react";
export default function WarrantyProductSku({
  orderItems,
}: {
  orderItems: any[];
}) {
  return (
    <div className="flex items-center gap-4 w-full">
      {orderItems?.length > 0 ? (
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select product SKU" />
          </SelectTrigger>
          <SelectContent align="center" className="">
            <SelectGroup>
              <SelectLabel>Product SKU</SelectLabel>
              {orderItems.map((item) => {
                const product = item.product_id;
                return (
                  <SelectItem
                    value={JSON.stringify({
                      sku: product.sku,
                      _id: product._id,
                    })}
                  >
                    <div className="flex items-center ">
                      <p className="font-medium flex items-center">
                        {product.name} <Dot size={20} /> {product.sku}
                      </p>
                      <Dot size={20} />{" "}
                      <Image
                        src={product.thumpnail}
                        width={25}
                        height={25}
                        alt={product.title}
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
