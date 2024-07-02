"use clinet";
import { cn } from "@/lib/utils/cn";
import { Eye, EyeOff } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

export interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, type, ...props }, ref) => {
    const [show, setShow] = React.useState(false);
    return (
      <div className="relative flex items-center">
        <input
          name="password"
          type={show ? "text" : "password"}
          className={cn(
            "flex h-10 w-full rounded-md border border-input pr-4 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
        <Button
          type="button"
          onClick={() => setShow((prev) => !prev)}
          variant={"ghost"}
          size={"icon"}
          className="w-6 h-6 absolute right-2  opacity-80"
        >
          {show ? <Eye size={15} /> : <EyeOff size={15} />}
        </Button>
      </div>
    );
  }
);
PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
