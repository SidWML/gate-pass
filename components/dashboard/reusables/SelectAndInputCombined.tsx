import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import React from "react";

export default function SelectAndInputCombined({ placeholder, required, label, value }) {
  return (
    <div className="">
      <div className={` ${className ? " " : " w-full "} space-y-3`}>
        {label && (
          <label htmlFor="passType" className="block text-sm font-medium text-gray-700">
            {label} {required && <span className=" text-red-500 ml-1">*</span>}
          </label>
        )}
        <Select onValueChange={(e) => onChange(e)}>
          <SelectTrigger className={` data-[placeholder]:text-gray-400  `}>
            <SelectValue className="" placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>{placeholder}</SelectLabel>
              {options &&
                options.map((option, index) => (
                  <SelectItem key={index} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className=" w-full space-y-3">
        <label htmlFor="passType" className="block text-sm font-medium text-gray-700">
          {label} {required && <span className="">*</span>}
        </label>
        <Input value={value} className="placeholder:text-gray-400" placeholder={placeholder} required={required} />
      </div>
    </div>
  );
}
