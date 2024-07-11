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
import { Input } from "../ui/input";
export default function MarketSelector() {
  const [otherMarket, setOtherMarket] = useState(false);
  return (
    <div className="flex items-center gap-4 w-full">
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select where your bought your item from" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Market Place</SelectLabel>
            <SelectItem value="mossodor">Mossodor</SelectItem>
            <SelectItem value="amazon">Amazon</SelectItem>
            <SelectItem value="ebay">Ebay</SelectItem>
            <SelectItem value="etsy">Etsy</SelectItem>
            <SelectItem value="pineapple">Wayfair</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      {otherMarket && (
        <div>
          <Input className="w-[20vw]" placeholder="Market Name" type="text" />
        </div>
      )}
    </div>
  );
}
