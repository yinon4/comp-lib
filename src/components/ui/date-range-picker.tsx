"use client"

import * as React from "react"
import { CalendarIcon } from "@radix-ui/react-icons"
import { addDays, format } from "date-fns"
import { DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { he } from "date-fns/locale"

export function DatePickerWithRange({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = React.useState<DateRange | undefined>(
    // {from: new Date(), to: addDays(new Date(), 7),}
  )

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            dir='rtl'
            variant={"outline"}
            className={cn(
              "w-[300px] justify-between text-right font-normal",
              !date && "text-muted-foreground"
            )}
          >
            {date?.from ? (
                (date.to && date.to.getDate() != date.from.getDate()) ?(
                    <>
                  {format(date.from, "LLL dd, y", {locale:he})} -{" "}
                  {format(date.to, "LLL dd, y", {locale:he})}
                </>
              ) : (
                format(date.from, "LLL dd, y", {locale:he})
                )
                ) : (
                    <span>תאריכים</span>
                    )}
                    <CalendarIcon className="mr-2 w-4 h-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-auto" align="center">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={1}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
