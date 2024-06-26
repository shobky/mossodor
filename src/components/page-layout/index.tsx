import { cn } from "@/lib/utils/cn";
import { cva } from "class-variance-authority";

const paddingVariants = cva("px-[7vw]", {
  variants: {
    variant: {
      default: "",
      centered: "flex flex-col justify-center items-center",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export const Padding = ({
  children,
  variant,
  className,
  id,
}: {
  children: React.ReactNode;
  variant?: "default" | "centered";
  className?: string;
  id?: string;
}) => {
  return (
    <section id={id} className={cn(paddingVariants({ variant, className }))}>
      {children}
    </section>
  );
};
