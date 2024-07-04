import { cn } from "@/lib/utils/cn";

export const Section = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section className="flex flex-col justify-center items-center p-5 sm:p-0 gap-4">
      {children}
    </section>
  );
};

export const SectionTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2 className={cn("text-2xl text-center font-semibold p-4 flex items-center gap-2", className)}>
      {children}
    </h2>
  );
};
