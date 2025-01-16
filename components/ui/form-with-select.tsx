import { FormControl } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import React, { SetStateAction } from "react";

interface FormFieldWithSelectProps {
  children: React.ReactNode;
  defaultValue: string;
  className?: string,
  selectOptionsData: {
    value: string;
    text: string;
  }[];
  handleValueChange: React.Dispatch<SetStateAction<string>>;
}

// renders a form field with select options dropdown
const FormFieldWithSelect = ({
  children,
  defaultValue,
  selectOptionsData,
  handleValueChange,
  className
}: FormFieldWithSelectProps) => {
  return (
    <div className="flex w-full rounded-md border border-slate-200 bg-white">
      <Select
        onValueChange={(val) => handleValueChange(val)}
        defaultValue={defaultValue}
      >
        <FormControl className={cn("w-min gap-x-2 placeholder:text-nexus-gray border-0", className)}>
          <SelectTrigger>
            <SelectValue className="text-sm" placeholder="KE" />
          </SelectTrigger>
        </FormControl>
        <SelectContent className="max-h-[280px] overflow-y-auto">
          {selectOptionsData.map((item, key) => (
            <SelectItem key={`${item.value + key}`} value={item.value}>
              {item.text}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {children}
    </div>
  );
};

export default FormFieldWithSelect;
