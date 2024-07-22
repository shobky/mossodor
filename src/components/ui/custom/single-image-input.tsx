import React, { useRef, useState, useCallback } from "react";
import { ImageUp, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type SingleImageInputProps = {
  alt: string;
  onDelete?: () => void;
  onSelect?: (file: File) => void;
  handleImageChange?: (url: string) => void;
  src?: string;
  text?: string;
};

const SingleImageInput = ({
  alt,
  onDelete,
  onSelect,
  handleImageChange,
  src,
  text,
}: SingleImageInputProps) => {
  const [fileInfo, setFileInfo] = useState<{
    name: string;
    size: number;
  } | null>(null);

  const [image, setImage] = useState<string | null>(src || null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  const handleFilesChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        const objectUrl = URL.createObjectURL(file);
        setImage(objectUrl);
        setFileInfo({
          name: file.name,
          size: file.size,
        });
        onSelect && onSelect(file);
      }
    },
    [onSelect]
  );

  const handleFilesDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      if (file) {
        const objectUrl = URL.createObjectURL(file);
        handleImageChange && handleImageChange(objectUrl);
      }
      onSelect && file && onSelect(file);
    },
    [onSelect]
  );

  const handleClearImage = useCallback(() => {
    setImage(null);
    onDelete && onDelete();
  }, [onDelete]);

  return (
    <div
      onDrop={handleFilesDrop}
      className="flex flex-wrap gap-2 relative overflow-hidden"
    >
      <div className="group w-fit">
        <input
          accept="image/*"
          ref={imageInputRef}
          type="file"
          className="cursor-pointer absolute left-0 opacity-0 top-0 w-48 aspect-[32/9]"
          onChange={handleFilesChange}
        />
        <div className="group-hover:bg-slate-500/5  border-2 border-dashed rounded-lg gap-4 px-4 flex items-center p-2 text-xs font-medium text-secondary-foreground w-48 aspect-[32/9] cursor-pointer">
          <p>{text}</p>
          {image ? (
            <Image
              width={50}
              height={200}
              src={image}
              alt={alt || "uploaded image"}
              className="rounded-lg object-cover aspect-square w-8 h-8 z-10"
            />
          ) : (
            <ImageUp
              className="text-muted-foreground"
              size={30}
              strokeWidth={1.4}
            />
          )}
          <div className="text-muted-foreground font-medium text-base">
            {image ? (
              <div className="flex items-center gap-4">
                <p>Replace</p>
                <Button
                  variant="destructive"
                  size="icon"
                  type="button"
                  onClick={handleClearImage}
                  className="flex w-6 h-6 relative z-50"
                >
                  <Trash2 size={17} />
                </Button>
              </div>
            ) : (
              <p>Upload New</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(SingleImageInput);
