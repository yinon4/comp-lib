"use client";

import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { he } from "date-fns/locale";

export function DatePicker() {
  const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          dir="rtl"
          variant={"outline"}
          className={cn(
            "w-[240px]  justify-between text-right font-normal",
            !date && "text-muted-foreground",
          )}
        >
          {date ? format(date, "PPPP", {locale:he}) : <span>תאריך</span>}
          <CalendarIcon className="mr-2 w-4 h-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 w-auto" align="center">
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
