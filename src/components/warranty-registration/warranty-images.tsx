"use client";

import SingleImageInput from "../ui/custom/single-image-input";
import { Label } from "../ui/label";

export default function WarrantyImages({
  handleUploadImageFile,
}: {
  handleUploadImageFile: any;
}) {
  return (
    <div className="grid gap-4">
      <div className="space-y-2">
        <Label className="text-base">
          Please upload an image of the invoice/bill
        </Label>
        <SingleImageInput
          alt="invoice/bill"
          onSelect={(file: File) => handleUploadImageFile("invoice", file)}
        />
      </div>
      <div className="space-y-2">
        <Label className="text-base">Photos of Installation</Label>
        <SingleImageInput
          alt="invoice/bill"
          onSelect={(file: File) => handleUploadImageFile("installation", file)}
        />
      </div>
    </div>
  );
}
