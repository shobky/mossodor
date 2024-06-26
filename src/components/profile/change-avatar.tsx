import { useState } from "react";
import ImageInput from "../ui/custom/image-input";
import { FormLabel } from "../ui/form";
import { toast } from "sonner";
import { uploadImages } from "@/lib/utils/upload-images";

export default function ChangeAvatar({
  user,
  handleGetUploadedImage,
}: {
  user: any;
  handleGetUploadedImage: any;
}) {
  const [avatar, setAvatar] = useState(user?.image ?? "");

  const handleUploadImages = async (imgaeFile: File | null) => {
    if (!imgaeFile) return toast.error("No images selected");
    const promise = uploadImages("categories", imgaeFile).then((urls) => {
      handleGetUploadedImage(urls[0]);
      return urls;
    });

    toast.promise(promise, {
      loading: "Uploading your image...",
      success: `Done.`,
      error: "Failed to upload youtr image",
    });
  };

  return (
    <div className="space-y-2">
      <FormLabel>Avatar</FormLabel>
      <ImageInput
        alt={`${user?.name ?? ""} avatar`}
        handleImageChange={setAvatar}
        onSelect={handleUploadImages}
        src={avatar}
      />
      <p className="text-sm text-muted-foreground">
        Pick a file or drag and drop
      </p>
    </div>
  );
}
