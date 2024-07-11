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
export default function ProductUseSelector() {
  return (
    <div className="flex items-center gap-2 w-full">
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Product Use" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Product Use</SelectLabel>
            <SelectItem value="personal">Personal</SelectItem>
            <SelectItem value="commercial">Commercial</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
