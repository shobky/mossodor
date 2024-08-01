"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import MarketSelector from "@/components/warranty-registration/market-selector";
import WarrantyProductSku from "@/components/warranty-registration/product-sku";
import ProductUseSelector from "@/components/warranty-registration/product-use-selector";
import WarrantyImages from "@/components/warranty-registration/warranty-images";
import { Fetch } from "@/lib/actions/fetch";
import { IOrder } from "@/lib/types";
import { uploadImages } from "@/lib/utils/upload-images";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { WarrantyDatePciker } from "./warranty-date-selector";
import { useRouter } from "next/navigation";

interface WarrantyFormData {
  buyerFirstName: string;
  buyerLastName: string;
  buyerEmail: string;
  market: string;
  productSKU: string;
  purchaseDate: number;
  productUse: string;
  invoiceImage: string;
  installationImage: string;
  hadQualifiedTechnicianInstall: boolean;
  checked: boolean;
  orderNumber: number;
  order_id?: string;
  user_id?: string;
}
  
export default function WarrantyFormContainer({ order }: { order: IOrder }) {
  const [warranty, setWarranty] = useState<WarrantyFormData>({
    buyerFirstName: order.buyerName?.split(" ")[0] || "",
    buyerLastName: order.buyerName?.split(" ")[1] || "",
    buyerEmail: order.buyerEmail || "",
    market: "",
    productSKU: "",
    productUse: "",
    invoiceImage: "",
    installationImage: "",
    purchaseDate: order.purchaseDate * 1000,
    hadQualifiedTechnicianInstall: false,
    checked: false,
    orderNumber: order.orderNumber,
    order_id: order._id,
    user_id: "",
  });

  const [eligible, setEligible] = useState(true);
  const [differenceInDays, setDifferenceInDays] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const today = new Date();
    const purchaseDate = new Date(order.purchaseDate * 1000);
    const differenceInDays = Math.floor(
      (today.getTime() - purchaseDate.getTime()) / (1000 * 3600 * 24)
    );
    if (differenceInDays > 28) {
      setEligible(false);
      toast.info(
        "Warranty registration is only available within 28 days of purchase"
      );
      setDifferenceInDays(differenceInDays);
    }
  }, [order]);
  
  const handleInputChange = (key: keyof WarrantyFormData, value: any) => {
    setWarranty((prev) => ({ ...prev, [key]: value }));
  };

  const handleUploadImage = async (bucket: string, file: File) => {
    if (!file || !bucket) {
      toast.error("Something went wrong. Check your image and try again");
      return;
    }

    try {
      const urls = await uploadImages("categories", file);
      handleInputChange(`${bucket}Image` as keyof WarrantyFormData, urls[0]);
      toast.success("Image uploaded successfully");
    } catch (error) {
      toast.error("Failed to upload your image");
    }
  };

  const handleSubmitWarranty = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const requiredFields: Array<keyof WarrantyFormData> = [
      "invoiceImage",
      "installationImage",
      "market",
      "productSKU",
      "productUse",
    ];

    for (const field of requiredFields) {
      if (!warranty[field]) {
        toast.error(
          `${field.charAt(0).toUpperCase() + field.slice(1)} is required`
        );
        return;
      }
    }

    try {
      const data = await Fetch(
        "warranties/",
        {
          method: "POST",
          body: JSON.stringify({ warranty }),
        },
        "secure"
      );

      if (data?.warrantyForm) {
        toast.success("Warranty registered successfully");
        setTimeout(() => {
          router.push("/account/orders");
        }, 1500);
      } else {
        throw new Error("Warranty registration failed");
      }
    } catch (error) {
      toast.error("Failed to register warranty");
    }
  };

  return (
    <>
      {!eligible && (
        <>
          <br />
          <p className="grid text-sm font-medium">
            <span className="text-red-500 ">
              Sorry, Your order is no longer eligible for warranty registration.
              Orders are eligible for only 28 days from the purchase date.
            </span>
            <span className="text-blue-500">
              It&apos;s been {differenceInDays} days since you purchased this item.
            </span>
          </p>
        </>
      )}
      <form
        aria-disabled={!eligible}
        onSubmit={handleSubmitWarranty}
        className={`my-10 space-y-4 ${
          !eligible && "pointer-events-none opacity-60"
        }`}
      >
        <Label className="text-base text-muted-foreground">
          Kindly fill out your information
        </Label>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 items-center">
          <div className="col-span-3 sm:col-span-2 flex gap-4">
            <Input
              onChange={(e) =>
                handleInputChange("buyerFirstName", e.target.value)
              }
              value={warranty.buyerFirstName}
              placeholder="First Name"
            />
            <Input
              onChange={(e) =>
                handleInputChange("buyerLastName", e.target.value)
              }
              value={warranty.buyerLastName}
              placeholder="Last Name"
            />
          </div>
          <Input
            className="col-span-3 sm:col-span-2"
            onChange={(e) => handleInputChange("buyerEmail", e.target.value)}
            value={warranty.buyerEmail}
            placeholder="Email"
          />
        </div>
        <MarketSelector handleInputChange={handleInputChange} />
        <WarrantyProductSku
          handleInputChange={handleInputChange}
          orderItems={order.items}
        />
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <ProductUseSelector handleInputChange={handleInputChange} />
          <div className="">
            <WarrantyDatePciker orderDate={order.purchaseDate * 1000} />
          </div>
        </div>
        <Input
          readOnly
          type="number"
          value={warranty.orderNumber}
          placeholder="Order Number"
          className="cursor-not-allowed"
        />
        <br />
        <WarrantyImages handleUploadImageFile={handleUploadImage} />
        <br />

        <div className="flex flex-col justify-end gap-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              onCheckedChange={(v) =>
                handleInputChange("hadQualifiedTechnicianInstall", v as boolean)
              }
              id="terms"
              className="rounded-[3px]"
            />
            <label
              htmlFor="terms"
              className="text-base font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I had a qualified electrician installing the product
            </label>
          </div>
          <br />

          <Button
            type="submit"
            size="lg"
            className="font-semibold text-lg px-12 py-6"
          >
            Register warranty
          </Button>
        </div>
      </form>
    </>
  );
}
