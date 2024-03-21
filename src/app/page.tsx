import { TabsDemo } from "@/components/examples/tabs";
import { DatePicker } from "@/components/ui/date-picker";
import { DatePickerWithRange } from "@/components/ui/date-range-picker";

export default () => {
  return (
    <main className="flex flex-col justify-around items-center p-24 min-h-screen">
      <TabsDemo />
      <DatePicker />
      <DatePickerWithRange />
    </main>
  );
};
