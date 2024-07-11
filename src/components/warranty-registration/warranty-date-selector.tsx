"use client";

import * as React from "react";
import { format } from "date-fns";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils/cn";
import { CalendarDays } from "lucide-react";

export function WarrantyDatePciker({ orderDate }: { orderDate: number }) {
  const [date, setDate] = React.useState<Date | undefined>(new Date(orderDate));

  return (
    <Popover>
      <PopoverTrigger className="sm:min-w-[200px]" asChild>
        <Button
          variant={"outline"}
          className={cn(
            "sm:w-[240px] w-[calc(100vw-14vw)] gap-2 justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarDays size={18} />
          {date ? format(date, "PPP") : <span>Pick purchase date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="min-w-full sm:min-w-[200px] p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
