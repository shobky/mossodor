import { useState } from "react";
import styles from "./LongText.module.css"; // Import CSS module for styles
import { cn } from "@/lib/utils/cn";

export default function LongText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <h2
        className={cn(
          `${
            isExpanded
              ? "overflow-hidden whitespace-normal ease-in-out duration-500 transition-all"
              : "overflow-hidden  text-ellipsis"
          }`,
          className
        )}
      >
        <span>
          {" "}
          {isExpanded ? text.slice(0, text.length - 2) : text.slice(0, 140)}
        </span>
        <button
          className={cn("font-medium text-primary", className)}
          onClick={toggleText}
        >
          {isExpanded ? ".  see less" : ".. see more"}
        </button>
      </h2>
    </div>
  );
}
