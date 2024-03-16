import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ui/date-picker";
import { DatePickerWithRange } from "@/components/ui/date-range-picker";

export default () => {
  return (
    <main className="flex flex-col justify-around items-center p-24 min-h-screen">
      <DatePicker />
      <DatePickerWithRange />
    </main>
  );
};
