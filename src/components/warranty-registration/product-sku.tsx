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

interface OrderItem {
  _id: string;
  sku: string;
  thumpnail: string;
  name: string;
  quantity: number;
  price: number;
}

interface WarrantyProductSkuProps {
  orderItems: any;
  handleInputChange: any;
}

export default function WarrantyProductSku({
  orderItems,
  handleInputChange,
}: WarrantyProductSkuProps) {
  return (
    <div className="flex items-center gap-4 w-full">
      {orderItems?.length > 0 ? (
        <Select onValueChange={(sku) => handleInputChange("productSKU", sku)}>
          <SelectTrigger className="w-full h-14">
            <SelectValue placeholder="Select product SKU" />
          </SelectTrigger>
          <SelectContent align="center">
            <SelectGroup>
              <SelectLabel>Product SKU</SelectLabel>
              {orderItems.map((item:any) => (
                <SelectItem key={item._id} value={item.sku}>
                  <div className="flex items-center justify-start text-left space-x-2">
                    <Image
                      src={item.thumpnail}
                      width={150}
                      height={150}
                      alt={item.name}
                      className="object-contain w-12 h-12 aspect-square"
                    />
                    <div>
                      <p className="font-medium">{item.sku}</p>
                      <p className="text-sm text-gray-500">
                        {item.name} - Qty: {item.quantity}, Price: ${item.price}
                      </p>
                    </div>
                  </div>
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      ) : (
        <Input placeholder="SKU" onChange={(e) => handleInputChange("productSKU", e.target.value)} />
      )}
    </div>
  );
}