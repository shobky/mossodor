import React, { useRef, useState, useCallback } from "react";
import { Check, ImageUp, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type ImageInputProps = {
  alt: string;
  onDelete?: () => void;
  onSelect?: (file: File) => void;
  handleImageChange: (url: string) => void;
  src?: string;
};

const ImagesInput = ({
  alt,
  onDelete,
  onSelect,
  handleImageChange,
  src,
}: ImageInputProps) => {
  const [image, setImage] = useState<string | null>(src || null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  const handleFilesChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        const objectUrl = URL.createObjectURL(file);
        setImage(objectUrl);
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
        handleImageChange(objectUrl);
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
    <div onDrop={handleFilesDrop} className="flex flex-wrap gap-2 relative">
      <div className="group w-fit">
        <input
          accept="image/*"
          ref={imageInputRef}
          type="file"
          className="cursor-pointer absolute left-0 opacity-0 top-0 w-32 h-32"
          onChange={handleFilesChange}
        />
        <div className="group-hover:bg-slate-500/5 bg-transparent border border-dashed border-muted-foreground rounded-lg justify-center flex-col flex items-center p-2 text-xs font-medium text-muted-foreground w-32 h-32">
          <ImageUp
            className="text-muted-foreground"
            size={70}
            strokeWidth={0.3}
          />
          <span className="text-muted-foreground font-normal">
            {image ? "Replace" : "Upload new"}
          </span>
        </div>
      </div>
      {image && (
        <div className="relative group w-32 h-32">
          <Link href={image} target="_blank">
            <Image
              width={200}
              height={200}
              src={image}
              alt={alt}
              className="rounded-lg object-cover aspect-square w-full h-full z-10 absolute left-0 top-0"
            />
          </Link>
          <div className="absolute rounded-lg left-0 top-0 w-full h-full bg-gray-400 dark:bg-gray-600 animate-pulse" />
          <div className="flex gap-2 z-20 absolute right-0 top-0 m-2">
            <Button
              variant="destructive"
              size="icon"
              type="button"
              onClick={handleClearImage}
              className="hidden group-hover:flex w-8 h-8"
            >
              <Trash2 size={17} />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default React.memo(ImagesInput);
