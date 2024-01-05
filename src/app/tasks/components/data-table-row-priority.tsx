import { useTask } from "@/context/task-context";
import { useState } from "react";
import {  priorities, statuses } from "../data/data";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select";
import { Check } from "lucide-react";

export function DataTableRowPriority({ row }: any) {
  const { updateTask } = useTask();

  const priority = priorities.find(
    (priority) => priority.value === row.getValue("priority")
  );

  if (!priority) {
    return null;
  }

  const handlePriority = (selectedValue: string) => {
    updateTask(row.original.id, { priority: selectedValue });
  };

  return (
    <div className="flex items-center">
      <Select
        value={priority.value}
        onValueChange={handlePriority}
        defaultValue={priority.value}
      >
        <SelectTrigger className="flex w-full items-center gap-2 rounded-md px-3 py-2 outline-none">
          <priority.icon />
          <SelectValue>{priority.label}</SelectValue>
        </SelectTrigger>
        <SelectContent
          position="popper"
          className="relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
        >
          {priorities.map((priority: any, index: number) => (
            <SelectItem
              key={index}
              value={priority.value}
              className="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
            >
              <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                <SelectItemIndicator>
                  <Check className="h-4 w-4" />
                </SelectItemIndicator>
              </span>
              <div className="flex gap-2 items-center">
                <priority.icon /> {priority.label}
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
