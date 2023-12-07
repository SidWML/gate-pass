import React from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function SelectInput({ placeholder, required, label, options,onChange,className,combo }) {
  return (
    <div className={` ${className ? className : " w-full "} space-y-3`}>
      {label && <label htmlFor="passType" className="block text-sm font-semibold text-gray-700">
        {label} {required && <span className=" text-red-500 ml-1">*</span>}
      </label>}
      <Select onValueChange={(e) => onChange(e)}>
        <SelectTrigger  className={` data-[placeholder]:text-gray-400  ${combo ? " rounded-l-[5px] rounded-r-none " : " "} `}>
          <SelectValue className="" placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{placeholder}</SelectLabel>
            {options && options.map((option,index) => <SelectItem key={index} value={option.value}>{option.label}</SelectItem>)}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
