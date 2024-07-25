import { Activity } from "lucide-react";
import React from "react";

export default function ProductStock({ stock }: { stock: number | undefined }) {
  return (
    <div
      className={`flex justify-start w-fit font-medium  scale-75 -ml-4 order-[1.5px] border-white text-white  border-dashed dark:text-white  gap-2 items-center px-4 py-3 rounded-2xl ${
        !stock
          ? "bg-red-500"
          : stock > 10
          ? "bg-green-600"
          : stock > 5
          ? "bg-yellow-500"
          : "bg-orange-600"
      } `}
    >
      {!stock ? (
        <>
          <Activity strokeWidth={2.5} size={20} /> Out of stock
        </>
      ) : stock > 10 ? (
        <>
          <Activity strokeWidth={2.5} size={20} /> In Stock {stock}
        </>
      ) : stock > 5 ? (
        <>
          <Activity strokeWidth={2.5} size={20} /> Only {stock} left in stock
        </>
      ) : (
        <>
          <Activity strokeWidth={2.5} size={20} /> Last {stock} in stock
        </>
      )}
    </div>
  );
}
